import React, { Component } from 'react'; //different

import './App.css';
import "chart.js/auto";
import {Line} from 'react-chartjs-2';
import schedule from './schedule.js'
import game from './game.js';


const TEAM = "Los Angeles Chargers"
const API_KEY = "fpdyxywaa7tnbd5db9qq47d8"
const YEAR = "2022"
const SEASON = "REG"; //3 types: PRE, REG, PST
const HARD_CODE_FLAG = true;

const PROXY_URL = 'https://cryptic-scrubland-72951.herokuapp.com/'
const SCHEDULE_API_ENDPOINT = 'http://api.sportradar.us/nfl/official/trial/v7/en/games/' + YEAR + '/' + SEASON + '/schedule.json?api_key=' + API_KEY

const requestOptions = {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3001',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Credentials': 'true'
    },
};

class Chart extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            nextGameFound : false, //shouldnt need, parent will pass down game-id
            gameInProgress: true, //shouldnt need, parent will only use chart is the game is in progress or happened recently (there is data to use)
            nextGameDateString : "", //shouldnt need, will be used in ScheduledGameInfo
            nextGameTimeString: "", //shouldnt need, will be used in ScheduledGameInfo
            nextGameWeek: 0, //shouldnt need, will be used in ScheduledGameInfo
            nextGameTime: "", //shouldnt need, will be used by parent to calculate when to switch from ScheduledGameInfo component to Chart component
            nextGameId: "", //won't need, use current GameId instead
            labels: [1],
            awayScores:[0],
            homeScores:[0],
            intervalID:-1
        }
        
        this.displayScheduledGame = this.displayScheduledGame.bind(this)
        this.handleGameScores = this.handleGameScores.bind(this)
        this.updateData = this.updateData.bind(this)
        this.clockToDecimalRep = this.clockToDecimalRep.bind(this)
    }

    componentDidMount(){
        //make a call to the season schedule
        
        
        if (HARD_CODE_FLAG == false){

            console.log("About to fetch")
            console.log(this.state)

            fetch(PROXY_URL + SCHEDULE_API_ENDPOINT, requestOptions) //fetch returns a promise, which is automatically passed as the parameter response in .then()
            .then( (response) => {    
                console.log(response.status)           
                if (!response.ok){
                    throw Error (response.statusText)
                } 
                return response.json()
            })
            .then( (data) =>{
                const schedule = data;
                console.log(schedule)
                this.displayScheduledGame(schedule)
            })
            .catch( (error) => {
                console.log(error)
            })
        }
        
        // for week in response["weeks"]
        //         for game in week["games"]
        //             if (game["away"] == TEAM team or game["home"] == TEAM)  and game["status"] == "scheduled"
        //                 figure out to time to next game (TTNG)
        //                 setState --> render everything
        //                 break out of everything, we've found our game
        

        if (HARD_CODE_FLAG == true){
            this.displayScheduledGame(schedule)
        }        
    }

    displayScheduledGame(schedule){
        outerLoop:
            for (let weekIndex in schedule["weeks"] ){
                let weekSchedule = schedule["weeks"][weekIndex]
                for (let gameNum in weekSchedule['games'] ){
                    let gameInfo = weekSchedule['games'][gameNum]
                    if ((gameInfo["away"]["name"] == TEAM || gameInfo["home"]["name"] == TEAM) 
                        && (gameInfo["status"] == "scheduled" || gameInfo["status"] == "created")){
                        console.log(gameInfo)
                        console.log(gameInfo["scheduled"])
    
                        const date_options = {   
                                            weekday: "long", 
                                            month: "numeric",
                                            day: "numeric",
                                            };
                        
                        const time_options = { 
                                            hour:"numeric", 
                                            minute:"numeric",  
                                            timeZoneName: "short" 
                                            };
    
                        let dateObj = new Date(gameInfo["scheduled"])
                        this.setState({ nextGameFound: true, 
                                        nextGameId: gameInfo['id'],
                                        nextGameDateString: dateObj.toLocaleString([], date_options),
                                        nextGameTimeString: dateObj.toLocaleString([], time_options),
                                        nextGameTime: gameInfo["scheduled"],
                                        nextGameWeek: (parseInt(weekIndex) + 1)
                        }, () => {
                            const timenow = new Date();
                            let year = timenow.getFullYear();
                            let month = timenow.getMonth() + 1;
                            let day = timenow.getDate();
                            let currDate = `${day}-${month}-${year}`
                            let json = timenow.toJSON()
                    
                            console.log("Current time: " ,json)//print current time
                    
                            console.log(("Time of next game: "+ this.state.nextGameTime)) //print next game time
                                        
                            let msecondsTNG = Date.parse(this.state.nextGameTime) - Date.now()
                    
                            console.log("hours to next game", msecondsTNG/3600000)

                            setTimeout(this.handleGameScores, msecondsTNG)
                        })
                        break outerLoop;
        
                    }
                    else if ((gameInfo["away"]["name"] == TEAM || gameInfo["home"]["name"] == TEAM) && gameInfo["status"] == "inprogress"){
                            this.setState({nextGameFound: true,
                            nextGameId: gameInfo['id'],
                            })
                            setTimeout(this.handleGameScores, 0)
                            break outerLoop;
                    }
                }
            }
    }

    handleGameScores(){
        console.log("handleGameScores was run!!!!")
        this.setState ( {intervalID: setInterval(this.updateData, 6000) })     
        setTimeout(this.updateData, 1000) 
    }

    clockToDecimalRep(quarter, timeString){
        const [h, m] = timeString.split(':');
        let timeDecimal = (+h + (+m/60)).toFixed(2);
        let portionOfQuarter = 1 - timeDecimal/15;
        console.log("portion of quarter: ",portionOfQuarter)
        return (quarter + portionOfQuarter)
    }

    updateData(){
        console.log("updateData() ran")
        const GAME_ENDPOINT = 'http://api.sportradar.us/nfl/official/trial/v7/en/games/' + this.state.nextGameId +'/boxscore.json?api_key=' + API_KEY
        console.log(GAME_ENDPOINT)

        if (HARD_CODE_FLAG == false){
            fetch(PROXY_URL + GAME_ENDPOINT, requestOptions)
            .then( (response) => {
                console.log(response.status)           
                if (!response.ok){
                    throw Error (response.statusText)
                } 
                return response.json()
            })
            .then( (data) => {
                let gameInfo = data;

                //1) Check if the the current scores are the same as when we last checked (check the back of this.homeScores and this.awayScores)
                //if yes: take the current timestamp, append it state.labels, take the current scores, append to state.homeScores and state.awayScores (using setState)
                if (gameInfo['status']=='closed'){
                    this.setState({gameInProgress: false})
                    return
                }
                if (gameInfo['summary']['home']['points'] == this.state.homeScores.slice(-1) && gameInfo['summary']['away']['points'] == this.state.awayScores.slice(-1)){

                        console.log("SCORES HAVENT CHANGED");
                        
                        
                        // console.log("labels[-1]: ", this.state.labels.slice(-1))
                        // console.log("away scores: ", this.state.awayScores.slice(-1))
                        this.setState (prevState => ({
                            //if scores haven't changed, just change the x-coordinate of the last point to the most recent time instead of plotting new point
                            labels: [...prevState.labels.slice(0,-1), this.clockToDecimalRep(gameInfo['quarter'], gameInfo['clock']) ],
                        }), ()=>{console.log('ADDED MORE DATA POINTS', this.state)})
                }
                    //2) take the current timestap, append it twice to state.labels twice (so we'll have vertical jump. take the current scores, append to state.homeScores and state.awayScores), take newscores, append them to state.homeScores and State.awayscores
                else{ //one team scored
                    let [scoringTeam, nonScoringTeam] = gameInfo['summary']['home']['points'] == this.state.homeScores.slice(-1) ? ['away', 'home'] : ['home','away']

                    this.setState (prevState => ({
                        labels: [...prevState.labels.slice(0,-1), this.clockToDecimalRep(gameInfo['quarter'], gameInfo['clock']), this.clockToDecimalRep(gameInfo['quarter'], gameInfo['clock']) ],
                        awayScores: [...prevState.awayScores, this.state.awayScores.slice(-1)[0], gameInfo['summary']['away']['points']],
                        homeScores: [...prevState.homeScores, this.state.homeScores.slice(-1)[0], gameInfo['summary']['home']['points']],
                    }), ()=>{console.log('ADDED MORE DATA POINTS', this.state)})

                    

                }
               let drive = gameInfo['scoring_drives'].splice(-1)


            })
            .catch( (error) => {
                console.log(error)
            })
        }

        let gameInfo = game;

        if (HARD_CODE_FLAG ){//code in here will replace the else clause  
            for (let drive of gameInfo['scoring_drives']){
                console.log(drive['plays'].slice(-1));
    
                let scoringPlay = drive['plays'].slice(-1)
    
                //console.log("scoringPlay: ", scoringPlay)
               
                this.setState (prevState => ({
                    // labels: [...prevState.labels, 'Q1'],
                    labels: [1.0, 1.1, 1.3, 1.6, 1.7,1.8],
                    awayScores: [...prevState.awayScores, scoringPlay[0]['away_points']],
                    homeScores: [...prevState.homeScores, scoringPlay[0]['home_points']],
                }), ()=>{console.log(this.state)})
            }
        }


    }

    componentDidUpdate(){
        console.log("ComponentDidUpdate")
        if (this.gameInProgress == false){
            clearInterval(this.intervalID)
        }
    }

    render(){

        const state = this.state;

        console.log("nextGameFound: ", state.nextGameFound);
        console.log("nextGameWeek: ", state.nextGameWeek);
        console.log("nextGameDateString: ", state.nextGameDateString);
        console.log("gameInProgress: ", state.gameInProgress);

        //first render: ComponentDidMount yet to run so we return loading screen
        if (state.nextGameFound == false) { 
            return( 
                <div className='loading'>Loading app...</div>
            )
        }

        //INVARIANT: ComponentDidMount has run by at this point

        if (state.gameInProgress == false){ //no game happening atm: show date of next game
            return (
                <div style={{ width:1000}}>
                    
                    {}
                        Next game: Week {state.nextGameWeek}
                        <br></br>
                        Date: {state.nextGameDateString}
                        <br></br>
                        Time: {state.nextGameTimeString}
              </div>
    
            )
    
        };
    

        //INVARIANT: there is currently a game ongoing

        return (
            <div style={{ width:700}}>
                <Line data= {{   
                                labels: state.labels,  
                                datasets: [ {id: 'away', label:'away', data: state.awayScores},{id: 'home', label:'home',   data:state.homeScores, borderWidth: 4} ]
                            }}  
                     options={{
                                scales: {
                                    x: {
                                        type: 'linear',
                                        min: 1,
                                        max: 5,
                                        ticks: {
                                            callback: (value) => {
                                                if (value ==1 || value == 2 || value == 3 ||value ==4){
                                                    return `Q${value}`
                                                }
                                                else{
                                                    return ""
                                                } 
                                            }
                                        }
                                    }, 
                                    y:{
                                        min:0,
                                    }
                                }
                             }}  />
   
                
      
          </div>

        )

    };
}


export default Chart