import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import "chart.js/auto";
import hardcoded_schedule from './schedule.js'

import Chart from './Chart.js'
import ScheduledGameInfo from './ScheduledGameInfo';
import postSchedule from './postSchedule';
import game from './game';

const HARD_CODE_FLAG = false;

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
    const [InContention, SetInContention]= useState(true) ;
    const [InPlayoffs, SetInPlayoffs]= useState(false) ;

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //
    
    //EFFECT: runs FetchChartAndScheduleGames(updateGames) when a new Team is selected
    useEffect( ()=> {
                    if (Team != "Select a Team") {//ensures it doesn't trigger for the invalid placeholder selector option
                        print("----------SelectedTeamInfo Component useEffect(... , Team) started execution...----------")
                        FetchChartAndScheduleGames(updateGames)
                        print("----------SelectedTeamInfo Component useEffect(... , Team) ended execution.----------")
                    }
                        }, [Team]); //equivalent to componentDidMount


// ---------------------------------------------------------------------------------------------------------------------------------------------------- //
    
    //EFFECT: schedules FetchChartAndScheduleGames(updateGames) to run when the next scheduled game begins
    useEffect( ()=> { //equivalent of ComponentDidUpdate, but for NextGameTime only. Technically an infinite loop, 
                    //as  FetchChartandScheduleGames(updateGames) will update NextGameTime, but we have it on a setTimeout
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

                           setTimeout(()=>{FetchChartAndScheduleGames(updateGames)}, msecondsTNG + 60000)//add a delay to make sure we fire after the next scheduled game has started
                           print("----------SelectedTeamInfo Component useEffect(... ,NextGameTime) ended execution.----------")

                          
                        } 
                        
                    }, [NextGameTime]) 

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    function FetchChartAndScheduleGames(updateGames){ 
        print("----------SelectedTeamInfo Component fetchSchedule() started execution...----------")

        if (HARD_CODE_FLAG == false){
           print("SelectedTeamInfo received this schedule: ", props.schedule)
           updateGames(props.schedule)
        }
        
        
        if (HARD_CODE_FLAG == true){
            var schedule =  props.regseasonEnded? postSchedule : hardcoded_schedule
            print("Hardcoded Schedule: ", schedule)
            updateGames(schedule)
        }
        print("----------SelectedTeamInfo Component fetchSchedule() ended execution.----------")        
    };

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //
    //EFFECT: updates the most recent game shown, as well as the next scheduled game
    function updateGames(schedule){
        print("----------SelectedTeamInfo Component updateGames started execution...----------")
        print("props.regseasonEnded: ", props.regseasonEnded)
        if (props.regseasonEnded == false){

            let nextScheduledGameWeekIndex = 18
            outerLoop:
            for (let weekIndex in schedule["weeks"] ){ //iterate through games and find week with scheduled games for the team
                let weekSchedule = schedule["weeks"][weekIndex]
                print("weekschedule:" + weekSchedule)
                for (let gameInfo of weekSchedule['games'] ){
                    
                    if ((gameInfo["away"]["name"] == Team || gameInfo["home"]["name"] == Team) 
                        && (gameInfo["status"] == "scheduled" || gameInfo["status"] == "created" || gameInfo["status"] == "flex-schedule")){
                    
                         
                        print("NEXT SCHEDULED GAME  OBJECT: ", gameInfo, "WEEKINDEX: ", weekIndex)

                        
                        setNextScheduledGame({gameData: gameInfo, week: parseInt(weekIndex) + 1 })

                        setNextGameTime(gameInfo["scheduled"])
                        nextScheduledGameWeekIndex = weekIndex;
                        //xconsole.log("nextScheduledGameWeekIndex:" ,  nextScheduledGameWeekIndex)
                        break outerLoop;
                    }
                }
            }
            //go back two weeks and search for the most recently finished game in case there's a bye week
            
            print("got to line 127")
            
            print(nextScheduledGameWeekIndex-2)
            oLoop:
            for (let weekIndex = nextScheduledGameWeekIndex-2; weekIndex < nextScheduledGameWeekIndex && weekIndex > 0; weekIndex +=1 ){
                let weekSchedule = schedule["weeks"][weekIndex]
                console.log("Team: ", Team)
                print("weekSchedule:", weekSchedule)
                for (let gameInfo of weekSchedule['games'] ){
                    //console.log("gameInfo['id']:", gameInfo['id'])
                    if ((gameInfo["away"]["name"] == Team || gameInfo["home"]["name"] == Team) 
                        
                                    && (gameInfo["status"] == "complete" || gameInfo["status"] == "closed"|| gameInfo["status"] == "inprogress" )){
                        print("nextScheduledGameWeekIndex: ", weekIndex)
                        print("WE FOUND A PAST GAME", gameInfo)
                        setGameID(gameInfo['id'])
                        break oLoop
                    }
                
                }
            }
        }
        else{//regular season ended. check if team is still in playoff picture, else just show last game and sorry, your team didnt make playoff message

            outerLoop:
            for (let weekIndex in schedule["weeks"] ){
                let weekSchedule = schedule["weeks"][weekIndex]
                for (let gameInfo of weekSchedule['games'] ){
                    
                    if ((gameInfo["away"]["name"] == Team || gameInfo["home"]["name"] == Team) ){
                        SetInPlayoffs(true);

                        if (gameInfo["status"] == "scheduled" || gameInfo["status"] == "created" || gameInfo["status"] == "flex-schedule"){
                            SetInContention(true)
                            setNextScheduledGame({gameData: gameInfo, week: parseInt(weekIndex) + 1 });
                            setNextGameTime(gameInfo["scheduled"])
                            //if weekIndex != 0, iterate through last week and find last weeks game, pass info into setGameID
                            // ^assuming that each playoff round will be added as a future week 
                            break outerLoop
                        }
                        else if ( gameInfo["status"] == "inprogress" ) { 
                            setGameID(gameInfo["id"]) //just set gameID, next game DNE yet (we don't know if team will win)
                            //if weekIndex != 0, iterate through last week and find last weeks game, pass info into setGameID 
                            // ^assuming that each playoff round will be added as a future week 
                        }
                        else if  (gameInfo["status"] == "complete" || gameInfo["status"] == "closed"){ //may need to modify this logic, 
                            let teamLoc = gameInfo["home"]["name"] == Team ? 'home' : 'away'
                            let oppLoc = teamLoc == 'home' ? 'away' : 'home'
                            if (gameInfo['scoring'][teamLoc + '_points'] > gameInfo['scoring'][oppLoc + '_points']){
                                print(Team, " won!")
                                setGameID(gameInfo["id"])
                                SetInContention(true)
                                // ^assuming that each playoff round will be added as a future week, may need to iterate through the weeks array backward
                            }
                            else{
                                print(Team, " Lost!")
                                SetInContention(false)
                                setGameID(gameInfo["id"])
                                // ^assuming that each playoff round will be added as a future week, may need to iterate through the weeks array backward
                            }
                        }
                    
                        
                         
                        //print("NEXT SCHEDULED GAME  OBJECT: ", gameInfo, "WEEKINDEX: ", weekIndex)

                        
                        //setNextScheduledGame({gameData: gameInfo, week: parseInt(weekIndex) + 1 })

                        setNextGameTime(gameInfo["scheduled"])
                        //nextScheduledGameWeekIndex = weekIndex;
                        //xconsole.log("nextScheduledGameWeekIndex:" ,  nextScheduledGameWeekIndex)
                        //break outerLoop;
                    }
                }
            }




            // print("Regular Season ended for ", Team)
            // let lastWeekSchedule = schedule["weeks"][schedule["weeks"].length - 1]
            // print("Last week of regular season: ", lastWeekSchedule)
            // for (let gameInfo of lastWeekSchedule['games'] ){
            //     if ((gameInfo["away"]["name"] == Team || gameInfo["home"]["name"] == Team) 
            //                     && gameInfo["status"] == "closed" ||  gameInfo["status"] == "complete"){
            //         print("Found game of last week for regular season: ", gameInfo['id'])
            //         setGameID(gameInfo['id'])
            //     }
            // }
        }
        print("----------SelectedTeamInfo Component updateGames ended execution.----------")
    }

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    //EFFECT: maps the array TeamNames into an array of option elements for a selector, and returns the array
    function teamOptions(){
        const allOptions = TeamNames.map((teamName) => {
            return <option key={teamName} value={teamName}>{teamName}</option>
        })
        return allOptions
    }

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    function handleChange(event){
        setNextScheduledGame({})
        setGameID("")
        SetInPlayoffs(false)
        SetInContention(true)
        SetTeam(event.target.value)

    }

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    function SelectedTeamComponent(){
        print("NextScheduledGame", NextScheduledGame)
        print("GameID", GameID)

        var nextGameTitle;
        if (typeof NextScheduledGame.gameData != 'undefined'){
            nextGameTitle = 'Next Game: ' + ('title' in NextScheduledGame.gameData ? NextScheduledGame.gameData['title'] : props.upcomingWeekNum)
        }

        var eliminationMessage;
        if (props.regseasonEnded && InPlayoffs == false && Team != "Select a Team"){
            eliminationMessage = "Your Team Did Not Make The Playoffs"
        }
        else if (props.regseasonEnded && InPlayoffs == true && InContention == false){
            eliminationMessage = "Your Team Was Eliminated in the Playoffs"
        }
       

        if (Object.keys(NextScheduledGame).length == 0 && GameID == ""){ //Should only return true upon initialization, never after selection 
            return (
                <div> 
                   {eliminationMessage}
                </div>
            )
        }

        else if (Object.keys(NextScheduledGame).length != 0 && GameID == ""){ //Week 1 is upcoming --> recent game DNE, upcoming game exists
            return (
                <div>
                    {nextGameTitle}
                    <ScheduledGameInfo NextScheduledGame={NextScheduledGame} />
                </div>
            )
        }
        
        else if (Object.keys(NextScheduledGame).length == 0 && GameID != ""){ //Reg season ended --> recent game exists, upcoming game DNE
            return (
                <div> 
                    Last Game
                    <Chart GameID={GameID} />
                    {eliminationMessage}
                </div>
            )
        } 
    
        else if (Object.keys(NextScheduledGame).length != 0 && GameID != "") { //mid season --> recent game exists, upcoming game exists
            return (
                <div> 
                    Last Game
                    <Chart GameID={GameID} />
                    {nextGameTitle}
                    <ScheduledGameInfo NextScheduledGame={NextScheduledGame} />
                </div>
            )
        }
        else{
            return(
                <div>
                    This condition should never run
                </div>
            )
        }
    }

    print("----------SelectedTeamInfo Component rendered.----------")
   
    const returnObj = SelectedTeamComponent()
    const options = teamOptions()

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    return (
        <div className='team'>
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