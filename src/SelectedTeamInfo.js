import React, { useState, useEffect } from 'react';
import './App.css';
import "chart.js/auto";
import hardcoded_schedule from './schedule.js'

import Chart from './Chart.js'
import ScheduledGameInfo from './ScheduledGameInfo';

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

function SelectedTeamInfo(props){

    const [Team, SetTeam]= useState("Los Angeles Chargers") ;//will replace with a picker later (a type of form)]
    const [NextScheduledGame, setNextScheduledGame] = useState( {})//can we make API call to get this stuff before render?
    const [NextGameTime, setNextGameTime] = useState("")
    const [GameID, setGameID] = useState("")
    

    useEffect(FetchChartAndScheduleGames(updateState), []); //equivalent to componentDidMount

    useEffect( ()=> { //equivalent of ComponentDidUpdate, but for NextGameTime only. Technically an infinite loop, 
                    //as  FetchChartandScheduleGames(updateState) will update NextGameTime, but we have it on a setTimeout
                    //for when the next game starts so it's fine

                        const timenow = new Date();
                        let json = timenow.toJSON()
                        let msecondsTNG = Date.parse(this.state.nextGameTime) - Date.now()

                        console.log("Current time: " ,json)//print current time
                        console.log(("Time of next game: "+ this.state.nextGameTime)) //print next game time
                                            console.log("hours to next game", msecondsTNG/3600000)

                        setTimeout(FetchChartAndScheduleGames(updateState), msecondsTNG + 6000)//add a delay to make sure we fire after the next scheduled game has started
                    }, NextGameTime) 

    function FetchChartAndScheduleGames(updateState){ 
        if (HARD_CODE_FLAG == false){

            console.log("About to fetch")

            fetch(PROXY_URL + SCHEDULE_API_ENDPOINT, requestOptions) //fetch returns a promise, which is automatically passed as the parameter response in .then()
            .then( (response) => {    
                console.log("Season Schedule fetch request status: ", response.status)           
                if (!response.ok){
                    throw Error (response.statusText)
                }
                return response.json()
            })
            .then( (data) =>{
                const schedule = data;
                console.log("Season Schedule: ", schedule)
                updateState(schedule)
            })
            .catch( (error) => {
                console.log(error)
            })
        }

        if (HARD_CODE_FLAG == true){
            updateState(hardcoded_schedule)
        }        
    };

    function updateState(schedule){

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

        outerLoop:
        for (let weekIndex in schedule["weeks"] ){
            let weekSchedule = schedule["weeks"][weekIndex]
            for (let gameNum in weekSchedule['games'] ){
                let gameInfo = weekSchedule['games'][gameNum]
                if ((gameInfo["away"]["name"] == Team || gameInfo["home"]["name"] == Team) 
                    && (gameInfo["status"] == "scheduled" || gameInfo["status"] == "created")){
                    console.log("Game Info: ", gameInfo)
                    console.log("Game Scheduled Time: ", gameInfo["scheduled"])

                    let dateObj = new Date(gameInfo["scheduled"])

                    setNextScheduledGame({week: (parseInt(weekIndex) + 1), date: dateObj.toLocaleString([], date_options), 
                                            time: dateObj.toLocaleString([], time_options)})

                    setNextGameTime(gameInfo["scheduled"])
                    // this.setState({ nextGameFound: true, 
                    //                 nextGameID: gameInfo['id'],
                    //                 nextGameDateString: dateObj.toLocaleString([], date_options),
                    //                 nextGameTimeString: dateObj.toLocaleString([], time_options),
                    //                 nextGameTime: gameInfo["scheduled"],
                    //                 nextGameWeek: (parseInt(weekIndex) + 1)    
                }
                if ((gameInfo["away"]["name"] == Team || gameInfo["home"]["name"] == Team) && (gameInfo["status"] == "inprogress") || gameInfo["status"] =='closed'){
                    // this.setState({nextGameFound: true,
                    // nextGameID: gameInfo['id'],
                    // })
                    setGameID(gameInfo['id'])
                    setTimeout(this.handleGameScores, 0)
                    break outerLoop;
                }
            }
        }
    }



    if (Object.keys(NextScheduledGame).length == 0 && GameID == 0){
        return (
            <div> 
                <NextScheduledGame NextScheduledGame={NextScheduledGame} />
           
            </div>
        )
    }
    

    
}

export default SelectedTeamInfo