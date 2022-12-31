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
const HARD_CODE_FLAG = false;

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
            numScoringPlays: 0,
            labels: [1], //restructure
            awayScores:[{x:1, y:0}], //restructure later
            homeScores:[{x:1, y:0}], //restructure later
            intervalID:-1, //NEED to know when to stop polling box score API
            homeName: "",
            awayName: "",
            gameInProgress: true
        }
        

        this.handleGameScores = this.handleGameScores.bind(this)
        this.FetchBoxScoreData = this.FetchBoxScoreData.bind(this)
        this.updateData = this.updateData.bind(this)
        this.clockToDecimalRep = this.clockToDecimalRep.bind(this)
    }

    componentDidMount(){
        this.handleGameScores();      
    }

    
    //EFFECT: runs FetchBoxScoreData on a regular intervals to make API calls and update scoring state for this Chart component
    handleGameScores(){
        console.log("handleGameScores was run!!!!")
        this.setState ( {intervalID: setInterval(this.FetchBoxScoreData, 600000) })     
        setTimeout(this.FetchBoxScoreData, 1000) 
    }

    //EFFECT: takes in a quarter number, a minutes:seconds string, and converts them to a float representating how much
    //of the 15 minute quarter is past 
    clockToDecimalRep(quarter, timeString){
        const [h, m] = timeString.split(':');
        let timeDecimal = (+h + (+m/60)).toFixed(2);
        let portionOfQuarter = 1 - timeDecimal/15;
        //console.log("portion of quarter: ",portionOfQuarter)
        return (quarter + portionOfQuarter)
    }

    //EFFECT: make an API call to the Game Box API for the props.GameID and update scoring state for this Chart component
    FetchBoxScoreData(){
        console.log("FetchBoxScoreData() ran")
        const GAME_ENDPOINT = 'http://api.sportradar.us/nfl/official/trial/v7/en/games/' + this.props.GameID +'/boxscore.json?api_key=' + API_KEY
        

        if (HARD_CODE_FLAG == false){
            fetch(PROXY_URL + GAME_ENDPOINT, requestOptions)
            .then( (response) => {
                console.log("Box Score endpoint: ",GAME_ENDPOINT)
                console.log(response.status)           
                if (!response.ok){
                    throw Error (response.statusText)
                } 
                return response.json()
            })
            .then( (data) => {
                this.updateData(data)
               

            })
            .catch( (error) => {
                console.log(error)
            })
        }

        if (HARD_CODE_FLAG ){//code in here will replace the else clause  

            this.updateData(game);
        }
    }

    updateData(gameInfo){
        this.setState({homeName: gameInfo["summary"]["home"]["name"], awayName: gameInfo["summary"]["away"]["name"]})
        //Case 1) Scores haven't changed take the current timestamp, append it state.labels, take the current scores, append to state.homeScores and state.awayScores (using setState)

        if (gameInfo['summary']['home']['points'] == this.state.homeScores.slice(-1) && gameInfo['summary']['away']['points'] == this.state.awayScores.slice(-1)){

                console.log("SCORES HAVENT CHANGED");
                
                this.setState (prevState => ({
                    //if scores haven't changed, just change the x-coordinate of the last point to the most recent time instead of plotting new point
                    labels: [...prevState.labels.slice(0,-1), this.clockToDecimalRep(gameInfo['quarter'], gameInfo['clock']) ],
                }), ()=>{console.log('ADDED MORE DATA POINTS', this.state)})
        }
            // Case 2) One team scored. check which team last scored, add points accordingly
            //take the current timestap, append it twice to state.labels twice (so we'll have vertical jump. 
            //take the current scores, append to state.homeScores and state.awayScores), take newscores, append them to state.homeScores and State.awayscores
        if (gameInfo['scoring_drives'].length - this.numScoringPlays == 1){ //one team scored

            console.log("ONE TEAM SCORED")

            let [scoringTeam, nonScoringTeam] = gameInfo['summary']['home']['points'] == this.state.homeScores.slice(-1) ? ['away', 'home'] : ['home','away']

            this.setState (prevState => ({
                numScoringPlays: prevState.numScoringPlays + 1,
                labels: [...prevState.labels.slice(0,-1), this.clockToDecimalRep(gameInfo['quarter'], gameInfo['clock']), this.clockToDecimalRep(gameInfo['quarter'], gameInfo['clock']) ],
                awayScores: [...prevState.awayScores, this.state.awayScores.slice(-1)[0], gameInfo['summary']['away']['points']],
                homeScores: [...prevState.homeScores, this.state.homeScores.slice(-1)[0], gameInfo['summary']['home']['points']],
            }), ()=>{console.log('CHANGED ONE TEAMS SCORE', this.state)})
        }
        //Case 3)Missing multiple scores: clear pre-existing data, restart counter at 0. iterate through all the scoring drives, all plays, check if they are scoring plays. If yes, create new plots for them
        //For each scoring play, plot the team’s (old score, play timestamp) and (new score, play timestamp) . At the start of the loop for every scoring drive, increment counter
        //console.log("# scoring drives: ",gameInfo['scoring_drives'].length)

        if (gameInfo['scoring_drives'].length - this.state.numScoringPlays > 1){ 
            console.log("MISSING MULTIPLE SCORING PLAYS...RESTARTING PLOT ")

            let newLabels = [1]
            let newAwayScores = [{x:1, y:0}]
            let newHomeScores = [{x:1, y:0}]
            
            for (let play of gameInfo['scoring_plays']){
                //console.log(play['score'])

                let quarterFloat = this.clockToDecimalRep(play.quarter.number, play.clock)
                if (play['statistics'][0]['team']['name'] == gameInfo['summary']['home']['name']){
                    //console.log("HOME SCORED!!!")
                    newHomeScores.push( {x: quarterFloat, y: newHomeScores.slice(-1)[0].y}, {x: quarterFloat, y: play.home_points})
                }
                else{
                    //console.log("newAwayScores.slice(-1): ", newAwayScores.slice(-1))
                    newAwayScores.push( {x: quarterFloat, y: newAwayScores.slice(-1)[0].y}, {x: quarterFloat, y: play.away_points})
                }
                newLabels.push(quarterFloat)
            }

            if ((gameInfo.status == "inprogress")){
                
                newHomeScores.push({x: this.clockToDecimalRep(gameInfo["quarter"], gameInfo["clock"]), y: newHomeScores.slice(-1)[0].y})
                newAwayScores.push({x: this.clockToDecimalRep(gameInfo["quarter"], gameInfo["clock"]), y: newAwayScores.slice(-1)[0].y})
            }
            else if (gameInfo.status == "closed"){
                newHomeScores.push({x:5 ,y:newHomeScores.slice(-1)[0].y})
                newAwayScores.push({x:5, y:newAwayScores.slice(-1)[0].y})

            }
            

            this.setState (prevState => ({
                numScoringPlays: 0,
                labels: newLabels, //restructure later
                awayScores: newAwayScores ,//restructure later
                homeScores: newHomeScores //restructure later
            }), ()=>{console.log('CLEARED SCORE DATA', this.state)})
        }

        

        if (this.gameInProgress == false){
            clearInterval(this.intervalID)
        }
    }

    

    componentDidUpdate(){
    }

    render(){

        const state = this.state;

    

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
                                datasets: [ {id: 'away', label: state.awayName, data: state.awayScores},{id: 'home', label: state.homeName, data:state.homeScores, borderWidth: 4} ]
                            }}  
                     options={{
                                clip: false,
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
                                                else if (value ==5){
                                                    return "FINAL"
                                                }
                                                else{
                                                    return ""
                                                } 
                                            }
                                        },
                                        title: {
                                            display: true,
                                            text: 'Quarter'
                                        }
                                    }, 
                                    y:{
                                        min:0,
                                        title: {
                                            display: true,
                                            text: 'Points'
                                          }
                                    },
                                    
                                }
                             }}  />
   
                
      
          </div>

        )

    };
}


export default Chart