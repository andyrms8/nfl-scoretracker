import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import "chart.js/auto";
import hardcoded_schedule from './schedule.js'

import Chart from './Chart.js'
import ScheduledGameInfo from './ScheduledGameInfo';
import game from './game';

const API_KEY = "fpdyxywaa7tnbd5db9qq47d8"
const YEAR = "2022"
const SEASON = "REG"; //3 types: PRE, REG, PST
const HARD_CODE_FLAG = true;

const PRINT_FLAG = true;

export function print(msg, obj = 0) {
    if (PRINT_FLAG == true){
        if (obj === 0) console.log(msg)
        else console.log(msg, obj) 
    }
};

const TeamNames =
["Arizona Cardinals","Atlanta Falcons","Baltimore Ravens","Buffalo Bills","Carolina Panthers","Cincinnati Bengals",
"Chicago Bears","Cleveland Browns","Dallas Cowboys","Denver Broncos","Detroit Lions","Green Bay Packers","Houston Texans",
"Indianapolis Colts","Jacksonville Jaguars","Kansas City Chiefs","Miami Dolphins","Minnesota Vikings",
"New England Patriots","New Orleans Saints","New York Giants","New York Jets","Las Vegas Raiders","Philadelphia Eagles",
"Pittsburgh Steelers","Los Angeles Chargers","Seattle Seahawks","San Francisco 49ers","Los Angeles Rams",
"Tampa Bay Buccaneers","Tennessee Titans","Washington Commanders"]

function SelectedTeamInfo(props){

    const [Team, SetTeam]= useState("Select a Team") ;//will replace with a picker later (a type of form)]
    const [NextScheduledGame, setNextScheduledGame] = useState( {})//can we make API call to get this stuff before render?
    const [NextGameTime, setNextGameTime] = useState("")
    const [GameID, setGameID] = useState("")

    
    //console.log("NextGameTime: ", NextGameTime)
    useEffect( ()=> {
                    if (Team != "Select a Team") {
                        print("----------SelectedTeamInfo Component useEffect(... , Team) started execution...----------")

                            //if (props.weekNum != -1) {
                                FetchChartAndScheduleGames(updateState)
                            //}
                        print("----------SelectedTeamInfo Component useEffect(... , Team) ended execution.----------")
                    }
                        }, [Team]); //equivalent to componentDidMount

    // const mounted = useRef();

    useEffect( ()=> { //equivalent of ComponentDidUpdate, but for NextGameTime only. Technically an infinite loop, 
                    //as  FetchChartandScheduleGames(updateState) will update NextGameTime, but we have it on a setTimeout
                    //for when the next game starts so it's fine
                        if (NextGameTime != "") {
                            print("----------SelectedTeamInfo Component useEffect(... ,NextGameTime) started execution...----------")
                            //perform ComponentDidUpdate logic. not using this ref was causing this hook to fire upon first render (as componentDidMount), which is bad cuz NextGameTime was null
                           const timenow = new Date();
                           let json = timenow.toJSON()
                           let msecondsTNG = Date.parse(NextGameTime) - Date.now()

                           print("Current time: " ,json)//print current time
                           print(("Time of next game: "+ NextGameTime)) //print next game time
                           print("hours to next game", msecondsTNG/3600000)

                           setTimeout(()=>{FetchChartAndScheduleGames(updateState)}, msecondsTNG + 60000)//add a delay to make sure we fire after the next scheduled game has started
                           print("----------SelectedTeamInfo Component useEffect(... ,NextGameTime) ended execution.----------")

                          
                        } 
                        // else{
                        //     mounted.current = true;
                        // } 
                        
                    }, [NextGameTime]) 

    function FetchChartAndScheduleGames(updateState){ 
        print("----------SelectedTeamInfo Component fetchSchedule() started execution...----------")

        if (HARD_CODE_FLAG == false){
           print("SelectedTeamInfo received this schedule: ", props.schedule)
           updateState(props.schedule)
        }
        
        
        if (HARD_CODE_FLAG == true){
            print("Hardcoded Schedule: ", hardcoded_schedule)
            updateState(hardcoded_schedule)
        }
        print("----------SelectedTeamInfo Component fetchSchedule() ended execution.----------")        
    };

    function updateState(schedule){
        print("----------SelectedTeamInfo Component updateState started execution...----------")
        if (props.seasonEnded == false){

            let nextScheduledGameWeekIndex = -1
            outerLoop:
            for (let weekIndex in schedule["weeks"] ){
                let weekSchedule = schedule["weeks"][weekIndex]
                for (let gameInfo of weekSchedule['games'] ){
                    
                    if ((gameInfo["away"]["name"] == Team || gameInfo["home"]["name"] == Team) 
                        && (gameInfo["status"] == "scheduled" || gameInfo["status"] == "created" || gameInfo["status"] == "flex-schedule")){
                    
                            print(gameInfo)
                        console.log("NEXT SCHEDULED GAME  OBJECT: ", gameInfo, "WEEKINDEX: ", weekIndex)

                        
                        setNextScheduledGame({gameData: gameInfo, week: parseInt(weekIndex) + 1 })

                        setNextGameTime(gameInfo["scheduled"])
                        nextScheduledGameWeekIndex = weekIndex;
                        //xconsole.log("nextScheduledGameWeekIndex:" ,  nextScheduledGameWeekIndex)
                        break outerLoop;
                    }
                }
            }
            //go back two weeks and search for the most recently finished game in case there's a bye week
            
            for (let weekIndex = nextScheduledGameWeekIndex-2; weekIndex < nextScheduledGameWeekIndex; weekIndex +=1 ){
                let weekSchedule = schedule["weeks"][weekIndex]
                //console.log("Team: ", Team)
                print("weekSchedule:", weekSchedule)
                for (let gameInfo of weekSchedule['games'] ){
                    //console.log("gameInfo['id']:", gameInfo['id'])
                    if ((gameInfo["away"]["name"] == Team || gameInfo["home"]["name"] == Team) 
                        
                                    && (gameInfo["status"] == "complete" || gameInfo["status"] == "closed"|| gameInfo["status"] == "inprogress" )){
                        print("nextScheduledGameWeekIndex: ", weekIndex)
                        print("WE FOUND A PAST GAME", gameInfo)
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
                    setGameID(gameInfo['id'])
                }
            }
        }
        print("----------SelectedTeamInfo Component updateState ended execution.----------")
    }

    //console.log("GameID: ", GameID)
    //console.log("Object.keys(NextScheduledGame).length: ",Object.keys(NextScheduledGame).length)

    function teamOptions(){
        const allOptions = TeamNames.map((teamName) => {
            return <option key={teamName} value={teamName}>{teamName}</option>
        })
        return allOptions
    }

    function handleChange(event){
        SetTeam(event.target.value)
    }

    function  SelectedTeamComponent(){
        if (Object.keys(NextScheduledGame).length == 0 || GameID == ""){
            return (
                <div> 
                    
               
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
                    Next Game
                    <ScheduledGameInfo NextScheduledGame={NextScheduledGame} />
                </div>
            )
        }
    }

    print("----------SelectedTeamInfo Component rendered.----------")
   
    const returnObj = SelectedTeamComponent()
    const options = teamOptions()
    
    return (
        <div>
            <select value={Team} onChange={handleChange}>
                <option disabled={true} value="Select a Team">
                    --Select A Team--
                </option>
                {options}
            </select>

            {returnObj}
        </div>
    )

    
}

export default SelectedTeamInfo;