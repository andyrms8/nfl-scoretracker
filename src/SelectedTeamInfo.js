import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import "chart.js/auto";
import hardcoded_schedule from './schedule.js'

import Chart from './Chart.js'
import ScheduledGameInfo from './ScheduledGameInfo';

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

function SelectedTeamInfo(props){

    const [Team, SetTeam]= useState("Los Angeles Chargers") ;//will replace with a picker later (a type of form)]
    const [NextScheduledGame, setNextScheduledGame] = useState( {})//can we make API call to get this stuff before render?
    const [NextGameTime, setNextGameTime] = useState("")
    const [GameID, setGameID] = useState("")
    
    console.log("NextGameTime: ", NextGameTime)
    useEffect( ()=> {
                        //if (props.weekNum != -1) {
                            FetchChartAndScheduleGames(updateState)
                        //}
                    }, []); //equivalent to componentDidMount

    const mounted = useRef();

    useEffect( ()=> { //equivalent of ComponentDidUpdate, but for NextGameTime only. Technically an infinite loop, 
                    //as  FetchChartandScheduleGames(updateState) will update NextGameTime, but we have it on a setTimeout
                    //for when the next game starts so it's fine
                        console.log("useEffect for NextGameTime ran")
                        if (!mounted.current) {
                            mounted.current = true;
                        } 
                        else{
                             //perform ComponentDidUpdate logic. not using this ref was causing this hook to fire upon first render (as componentDidMount), which is bad cuz NextGameTime was null
                            const timenow = new Date();
                            let json = timenow.toJSON()
                            let msecondsTNG = Date.parse(NextGameTime) - Date.now()

                            console.log("Current time: " ,json)//print current time
                            console.log(("Time of next game: "+ NextGameTime)) //print next game time
                            console.log("hours to next game", msecondsTNG/3600000)

                            setTimeout(FetchChartAndScheduleGames(updateState), msecondsTNG + 60000)//add a delay to make sure we fire after the next scheduled game has started
                        } 
                        
                    }, [NextGameTime]) 

    function FetchChartAndScheduleGames(updateState){ 
        console.log("FetchChartAndScheduleGames ran");
        if (HARD_CODE_FLAG == false){

           updateState(props.schedule)
        }
        
        
        if (HARD_CODE_FLAG == true){
            updateState(hardcoded_schedule)
            console.log("Hardcoded Schedule: ", hardcoded_schedule)
            let a = 0;
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

        if (props.seasonEnded == false){

            let nextScheduledGameWeekIndex = -1
            outerLoop:
            for (let weekIndex in schedule["weeks"] ){
                let weekSchedule = schedule["weeks"][weekIndex]
                for (let gameInfo of weekSchedule['games'] ){
                    if ((gameInfo["away"]["name"] == Team || gameInfo["home"]["name"] == Team) 
                        && (gameInfo["status"] == "scheduled" || gameInfo["status"] == "created")){
                    
                        console.log("Game Info: ", gameInfo)
                        console.log("Game Scheduled Time: ", gameInfo["scheduled"])

                        let dateObj = new Date(gameInfo["scheduled"])
                        setNextScheduledGame({week: props.weekNum, date: dateObj.toLocaleString([], date_options), 
                                                time: dateObj.toLocaleString([], time_options)})

                        setNextGameTime(gameInfo["scheduled"])
                        nextScheduledGameWeekIndex = weekIndex;
                        break outerLoop;
                    }
                }
            }
            //go back two weeks and search for the most recently finished game in case there's a bye week
            for (let weekIndex in schedule["weeks"].slice(nextScheduledGameWeekIndex-2, nextScheduledGameWeekIndex)){
                let weekSchedule = schedule["weeks"][weekIndex]
                console.log("weekSchedule:", weekSchedule)
                for (let gameInfo of weekSchedule['games'] ){
                    //console.log("gameInfo['id']:", gameInfo['id'])
                    if ((gameInfo["away"]["name"] == Team || gameInfo["home"]["name"] == Team) 
                        
                                    && (gameInfo["status"] == "closed"|| gameInfo["status"] == "inprogress" )){
                                        console.log("WE FOUND A PAST GAME")
                        setGameID(gameInfo['id'])
                        
                    }
                
                }


            }
        }
        else{//season ended, just show last game
            let lastWeekSchedule = schedule["weeks"][schedule["weeks"].length - 1]
            for (let gameInfo of lastWeekSchedule['games'] ){
                if ((gameInfo["away"]["name"] == Team || gameInfo["home"]["name"] == Team) 
                                && gameInfo["status"] == "closed" ){
                    setGameID(gameInfo[GameID])
                }
            
            }

        }
    }


    if (Object.keys(NextScheduledGame).length == 0 || GameID == 0){
        return (
            <div> 
                Loading...
           
            </div>
        )
    }
    
    else if (props.seasonEnded){
        return (
            <div> 
                Last Game
                <Chart GameID={GameID} />
            </div>
        )
    } 

    else {
        return (
            <div> 
                Last Game
                <Chart GameID={GameID} />
                <ScheduledGameInfo NextScheduledGame={NextScheduledGame} />
            </div>
        )
    }

    
}

export default SelectedTeamInfo;