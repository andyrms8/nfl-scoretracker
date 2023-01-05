import React, { Component } from 'react'; //different

import './App.css';
import "chart.js/auto";
import {Line} from 'react-chartjs-2';
import game from './game.js';
import { plugins } from 'chart.js/auto';
import overtime from './overtime.js'
import hardcoded_game_in_progress_early from './gameInProgressEarly'


const API_KEY_ARRAY = ["ej4vj5g8enqynbjy9ysrfcxk", "fpdyxywaa7tnbd5db9qq47d8"]
const API_KEY = API_KEY_ARRAY[0]
const YEAR = "2022"
const SEASON = "REG"; //3 types: PRE, REG, PST
const HARD_CODE_FLAG = false;


const PROXY_URL = 'https://cryptic-scrubland-72951.herokuapp.com/'

const PRINT_FLAG = true;

export function print(msg, obj = 0) {
    if (PRINT_FLAG == true){
        if (obj === 0) console.log(msg)
        else console.log(msg, obj) 
    }
};

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
        print("----------Chart Component Ctor started execution...----------")
        super(props);
        this.state = {
            numScoringPlays: 0,
            labels: [1], //restructure
            awayScores:[{x:1, y:0}], //restructure later
            homeScores:[{x:1, y:0}], //restructure later
            intervalID:-1, //NEED to know when to stop polling box score API
            homeName: "",
            awayName: "",
            gameInProgress: true,
            overtime: false,
            dataFetched: false
        }
        
        this.FetchBoxScoreData = this.FetchBoxScoreData.bind(this)
        this.updateData = this.updateData.bind(this)
        this.clockToDecimalRep = this.clockToDecimalRep.bind(this)
        print("----------Chart Component Ctor ended execution.----------")

    }

    //EFFECT: runs FetchBoxScoreData on a regular intervals to make API calls and update scoring state for this Chart component
    componentDidMount(){
        print("----------Chart Component componentDidMount started execution...----------")
        this.setState ( {intervalID: setInterval(this.FetchBoxScoreData, 300000) })     
        setTimeout(this.FetchBoxScoreData, this.props.index * 1250) 
        print("----------Chart Component Ctor ended execution.----------")
    }

    //EFFECT: make an API call to the Game Box API for the props.GameID and update scoring state for this Chart component
    FetchBoxScoreData(){
        print("----------Chart Component FetchBoxScoreData() started execution...----------")
        const GAME_ENDPOINT = 'http://api.sportradar.us/nfl/official/trial/v7/en/games/' + this.props.GameID +'/boxscore.json?api_key=' + API_KEY
        

        if (HARD_CODE_FLAG == false){
            fetch(PROXY_URL + GAME_ENDPOINT, requestOptions)
            .then( (response) => {
                
                print("Box Score response status: ", response.status)           
                if (!response.ok){
                    throw Error (response.statusText)
                } 
                return response.json()
            })
            .then( (data) => {
                this.setState({dataFetched:true})
                this.updateData(data)
                print(data)
            })
            .catch( (error) => {
                console.error(error)
            })
        }

        if (HARD_CODE_FLAG ){//code in here will replace the else clause  
            print(hardcoded_game_in_progress_early)
            this.updateData(hardcoded_game_in_progress_early);
        }
        print("----------Chart Component FetchBoxScoreData() ended execution.----------")
    }

    updateData(gameInfo){
        print("----------Chart Component FetchBoxScoreData() started execution...----------")

        this.setState({homeName: gameInfo["summary"]["home"]["name"], awayName: gameInfo["summary"]["away"]["name"]})

        if (gameInfo['quarter'] > 4) {
            this.setState({overtime: true})
        }

        print("DIFFERNTIAL IN # OF SCORING PLAYS",gameInfo['scoring_drives'].length - this.state.numScoringPlays)
        print(gameInfo['scoring_drives'].length)
        print(this.state.numScoringPlays)
        
        //Case 1) Scores haven't changed take the current timestamp, append it state.labels, take the current scores, append to state.homeScores and state.awayScores (using setState)
        if (gameInfo['summary']['home']['points'] == this.state.homeScores.slice(-1)[0].y && gameInfo['summary']['away']['points'] == this.state.awayScores.slice(-1)[0].y){

                print("SCORES HAVENT CHANGED");
                let xTime = this.clockToDecimalRep(gameInfo['quarter'], gameInfo['clock'], true)
                const updatedAwayPt = {x: xTime, y: this.state.awayScores.slice(-1)[0].y }
                const updatedHomePt = {x: xTime, y: this.state.homeScores.slice(-1)[0].y }
                

                this.setState (prevState => ({
                    //if scores haven't changed, just change the x-coordinate of the last point to the most recent time instead of plotting new point
                    awayScores: [...prevState.awayScores.slice(0,-1), updatedAwayPt ] ,
                    homeScores: [...prevState.homeScores.slice(0,-1), updatedHomePt] ,

                }), ()=>{console.log('ADDED MORE DATA POINTS', this.state)})
        }
            // Case 2) One team scored. check which team last scored, add points accordingly
            //take the current timestap, append it twice to state.labels twice (so we'll have vertical jump. 
            //take the current scores, append to state.homeScores and state.awayScores), take newscores, append them to state.homeScores and State.awayscores
        if (gameInfo['scoring_drives'].length - this.state.numScoringPlays == 1){ //one team scored

            print("ONE TEAM SCORED")

            //let [scoringTeam, nonScoringTeam] = gameInfo['summary']['home']['points'] == this.state.homeScores.slice(-1) ? ['away', 'home'] : ['home','away']
            
            let xTime = 0;
            if (gameInfo["quarter"] < 5){
                xTime = this.clockToDecimalRep(gameInfo['quarter'], gameInfo['clock'], true);
            } 
            else{
                xTime = this.clockToDecimalRep(gameInfo['quarter'], gameInfo['clock'], false);
            }
            const updatedAwayPt = {x: xTime, y: this.state.awayScores.slice(-1)[0].y }
            const newAwayPt = {x: xTime, y: gameInfo['summary']['away']['points']}
            const updatedHomePt = {x: xTime, y: this.state.homeScores.slice(-1)[0].y }
            const newHomePt = {x: xTime, y: gameInfo['summary']['home']['points']}

            console.log("this.state.awayScores.length", this.state.awayScores.length)
            this.setState (prevState => ({
                numScoringPlays: prevState.numScoringPlays + 1,
                awayScores:  [...prevState.awayScores, updatedAwayPt, newAwayPt],
                homeScores: [...prevState.homeScores, updatedHomePt, newHomePt],
            }), ()=>{print('CHANGED ONE TEAMS SCORE', this.state)})
        }
        //Case 3)Missing multiple scores: clear pre-existing data, restart counter at 0. iterate through all the scoring drives, all plays, check if they are scoring plays. If yes, create new plots for them
        //For each scoring play, plot the team’s (old score, play timestamp) and (new score, play timestamp) . At the start of the loop for every scoring drive, increment counter
        //console.log("# scoring drives: ",gameInfo['scoring_drives'].length)

        if (gameInfo['scoring_drives'].length - this.state.numScoringPlays > 1){ 
            print("MISSING MULTIPLE SCORING PLAYS...RESTARTING PLOT ")

            let newLabels = [1]
            let newAwayScores = [{x:1, y:0}]
            let newHomeScores = [{x:1, y:0}]
            let scoringPlays = 0
            
            for (let play of gameInfo['scoring_plays']){
                print("Scoring Play: ", play)
                let xTime = 0;
                if ("quarter" in play){
                    xTime = this.clockToDecimalRep(play.quarter.number, play.clock, true);
                } else{
                    xTime = this.clockToDecimalRep(play.overtime.number + 4, play.clock, false);
                }
                if (play['statistics'][0]['team']['name'] == gameInfo['summary']['home']['name']){
                    //console.log("HOME SCORED!!!")
                    newHomeScores.push( {x: xTime, y: newHomeScores.slice(-1)[0].y}, {x: xTime, y: play.home_points})
                } else{
                    //console.log("newAwayScores.slice(-1): ", newAwayScores.slice(-1))
                    newAwayScores.push( {x: xTime, y: newAwayScores.slice(-1)[0].y}, {x: xTime, y: play.away_points})
                }
                newLabels.push(xTime)
                scoringPlays += 1
            }
            
            //add last point in plot
            if (gameInfo["quarter"] <= 4)
            {
                let xTime = this.clockToDecimalRep(gameInfo["quarter"], gameInfo["clock"], true)
                newHomeScores.push({x: xTime, y: [...newHomeScores].slice(-1)[0].y})
                newAwayScores.push({x: xTime, y: [...newAwayScores].slice(-1)[0].y})
            }
            else{ //overtime
                print("clock :", gameInfo["clock"])
                let xTime = this.clockToDecimalRep(gameInfo["quarter"], gameInfo["clock"], false)
                print("PUTTING ON LAST DOTS FOR OVERTIME. TIME IS: ", xTime )
                newHomeScores.push({x: xTime, y: gameInfo['summary']['home']['points']})
                newAwayScores.push({x: xTime, y: gameInfo['summary']['away']['points']})
                
            }
            
            print("newHomeScores: ", newHomeScores);
            print("newAwayScores: ", newAwayScores);
            this.setState ({
                numScoringPlays: gameInfo['scoring_plays'].length,
                labels: newLabels, //restructure later
                awayScores: /*[{x:1,y:7}],*/[...newAwayScores],//restructure later
                homeScores: /*[{x:1,y:7}]*/ [...newHomeScores],//restructure later
                numScoringPlays: scoringPlays,
            }, ()=>{print('CLEARED SCORE DATA', this.state)})
        }

        print("GAME STATUS: ", gameInfo["status"])

        if (gameInfo["status"] == "closed" || gameInfo["status"] == "complete" || gameInfo["status"] == "delayed"){
            clearInterval(this.intervalID)
            print("Game is over: ", this.props.GameID, "is over over delayed. Stopping API Calls")
        }
        print("----------Chart Component FetchBoxScoreData() ended execution.----------")
    }


    componentDidUpdate(prevProps){
        print("----------Chart Component componentDidUpdate(prevProps) started execution...----------")
        if (prevProps.GameID != this.props.GameID){
            print("prevProps.GameID: ", prevProps.GameID)
            print("this.state.GameID: ", this.state.GameID)
            this.setState({dataFetched: false})
            this.FetchBoxScoreData()
        }
        print("----------Chart Component componentDidUpdate(prevProps) ended execution.----------")
    }


    //EFFECT: takes in a quarter number, a minutes:seconds string, and converts them to a float representating how much
    //of the 15 minute quarter is past 
    clockToDecimalRep(quarter, timeString, reg_quarter){
        const [h, m] = timeString.split(':');
        let timeDecimal = (+h + (+m/60)).toFixed(2);
        var portionOfQuarter
        reg_quarter? portionOfQuarter = 1 - timeDecimal/15 : portionOfQuarter =  1 - timeDecimal/10
        //console.log("portion of quarter: ",portionOfQuarter)
        return (quarter + portionOfQuarter)
    }

    render(){
        print("----------Chart Component render() started execution...----------")

        print('array lengths: ', Object.keys(this.state.awayScores).length.toString() + " " +  Object.keys(this.state.homeScores).length.toString())
        print("awayScores:", JSON.stringify(this.state.awayScores))
        print("homeScores:",  JSON.stringify(this.state.homeScores))

        const hoverValue = {
            id: "hoverValue",
            afterDatasetsDraw(chart, args, pluginOptions){
                const {ctx, data, options} = chart

                //console.log(chart.getActiveElements())
                const value = "f"
            }
        }

        const state = this.state;

    

        //first render: ComponentDidMount yet to run so we return loading screen
        if (this.state.dataFetched == false) { 
            return( 
                <div className='loading'>Loading app...</div>
            )
        }

        return (
            <div style={{ width:700}}>
                <Line data= {{   
                                labels: state.labels,  
                                datasets: [ {id: 'away', label: state.awayName, data: state.awayScores},{id: 'home', label: state.homeName, data:state.homeScores, borderWidth: 4} ]
                            }}  
                     options={{
                                clip: false,
                                hoverRadius: 30,
                                scales: {
                                    x: {
                                        type: 'linear',
                                        min: 1,
                                        max: state.overtime? 6: 5, //state.awayScores.length > 0? Math.max(state.awayScores.splice(-1)[0].x, state.homeScores.splice(-1)[0].x): 5,
                                        ticks: {
                                            callback: (value) => {
                                                if (value ==1 || value == 2 || value == 3 ||value ==4){
                                                    return `Q${value}`
                                                } else if (value == 5){
                                                    return state.overtime? "OVERTIME": "FINAL"
                                                }
                                                else if (value == 6){
                                                    return "FINAL"
                                                }
                                                else {
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
                                },
                                // plugins: {
                                //     tooltip: {
                                //         enabled: false
                                //     }
                                // }
                             }}  
                            //  plugins = {[
                            //     //hoverValue
                            //  ]}
                             
                             
                             />
   
                
      
          </div>

        )
    };
}


export default Chart