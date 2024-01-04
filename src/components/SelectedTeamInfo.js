import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import "chart.js/auto";

import Chart from './Chart.js'
import ScheduledGameInfo from './ScheduledGameInfo';
import postSchedule from '../postSchedule.js';
import game from '../game.js';
import config from '../config.json'
import { fetch_api_response } from '../helpers/helper.js';

const HARD_CODE_FLAG = false;

const PRINT_FLAG = true;

export function print(msg, obj = 0) {
    if (PRINT_FLAG == true){
        if (obj === 0) console.log(msg)
        else console.log(msg, obj) 
    }
};


function SelectedTeamInfo(props){

    const [Team, SetTeam]= useState("Select a Team") ;//will replace with a picker later (a type of form)]
    const [NextScheduledGame, setNextScheduledGame] = useState("")//can we make API call to get this stuff before render?
    const [NextGameTime, setNextGameTime] = useState("")
    const [RecentGameID, setRecentGameID] = useState("")
    const [InContention, SetInContention]= useState(true) ;
    const [InPlayoffs, SetInPlayoffs]= useState(false) ;

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //
    
    //EFFECT: runs FetchChartAndScheduleGames(updateGames) when a new Team is selected
    useEffect( ()=> {
                    if (Team != "Select a Team") {//ensures it doesn't trigger for the invalid placeholder selector option
                        print("----------SelectedTeamInfo Component useEffect(... , Team) started execution...----------")
                        // FetchChartAndScheduleGames(updateGames)
                        GetTeamSchedule(Team, 2)
                        print("----------SelectedTeamInfo Component useEffect(... , Team) ended execution.----------")
                    }
                        }, [Team]); //equivalent to componentDidMount
// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

async function GetTeamSchedule(team_name, season_type) {
    let last_started_game_index = -1
    const id = config.TEAM_NAME_TO_ID[team_name]
    const {events: games } = await fetch_api_response('https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/' + id + '/schedule?' + 'seasontype=' + season_type)
                            
    print("games for team: ", games)
    //process: iterate through schedule, with last_started_game_index starting at -1 find the last game thats FINAL. 
    games.forEach((game, index) =>{
        const {competitions: [{status: {type:{name: status}}}]} = game

        print(status)
        //find first game that is still scheduled (to show schedule for), look for one before it (to show chart?
            //edge cases: (1) all game of season is scheduled (no chart to show)
            //            (2) all games of season are completed (no schedule to show)

       
        if (status == 'STATUS_FINAL'){
            last_started_game_index = index
        }
    })

    //if last_started_game_index == -1, then all games are scheduled, so just return a scheduled game
    if (last_started_game_index == -1) {
        setNextScheduledGame(games[0])
        setNextGameTime(games[0].date)
    }
    //if last_started_game_index == games.length - 1, then all games occured, so return chart of last_started_game_index
        //run the same function on the post season endpoint for the team
    else if (last_started_game_index == -1) {
        setRecentGameID(games[last_started_game_index])
        GetTeamSchedule(team_name, 3)
    }
    else{
        setRecentGameID(games[last_started_game_index])
        setNextScheduledGame(games[last_started_game_index + 1])
        setNextGameTime(games[last_started_game_index + 1].date)
    }
    //else, return chart of games[last_started_game_index], and scheduled game of games[last_started_game_index + 1]

    console.log("asdf")
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //
    
    //EFFECT: schedules GetTeamSchedule() to update state when the next scheduled game begins.
    useEffect( ()=> {
        if (NextGameTime != "") {
        print("----------SelectedTeamInfo Component useEffect(... ,NextGameTime) started execution...----------")
            //perform ComponentDidUpdate logic. not using this ref was causing this hook to fire upon first render (as componentDidMount), which is bad cuz NextGameTime was null
            const timenow = new Date();
            let json = timenow.toJSON()
            let msecondsTNG = Date.parse(NextGameTime) - Date.now()

            print("Current time: " ,json)//print current time
            print(("Time of next game: "+ NextGameTime)) //print next game time
            print("hours to next game", msecondsTNG/3600000)

            setTimeout(()=>{GetTeamSchedule(Team, 2)}, msecondsTNG + 60000)//add a delay to make sure we fire after the next scheduled game has started
            print("----------SelectedTeamInfo Component useEffect(... ,NextGameTime) ended execution.----------")

            
        } 
        
    }, [NextGameTime]) 

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    //EFFECT: maps the array TeamNames into an array of option elements for a selector, and returns the array
    function teamOptions(){
        const allOptions = (Object.keys(config.TEAM_NAME_TO_ID)).map((teamName) => {
            return <option key={teamName} value={teamName}>{teamName}</option>
        })
        return allOptions
    }

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

//EFFECT: resets state when a new team is selected so that our useEffect hooks run again to grab new state
    function handleChange(event){
        setNextScheduledGame({})
        setRecentGameID("")
        SetInPlayoffs(false)
        SetInContention(true)
        SetTeam(event.target.value)
    }

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    function SelectedTeamComponent(){
        print("NextScheduledGame", NextScheduledGame)
        print("RecentGameID", RecentGameID)

        var nextGameTitle;
        // if (typeof NextScheduledGame.gameData != 'undefined'){
        //     nextGameTitle = 'Next Game: ' + ('title' in NextScheduledGame.gameData ? NextScheduledGame.gameData['title'] : props.upcomingWeekNum)
        // }

        var eliminationMessage;
        if (!props.isRegSzn && InPlayoffs == false && Team != "Select a Team"){
            eliminationMessage = "Your Team Did Not Make The Playoffs"
        }
        else if (!props.isRegSzn && InPlayoffs == true && InContention == false){
            eliminationMessage = "Your Team Was Eliminated in the Playoffs"
        }

        if (Team == "Select a Team"){
            return (
                <div>
                </div>
            )
        } else if (Object.keys(NextScheduledGame).length == 0 && RecentGameID == ""){ //Should only return true upon initialization, never after selection 
            //TODO: this clause is same as the one below, need to rework the logic for this case and/or one below
            return (
                <div> 
                    Loading...
                   {eliminationMessage}
                </div>
            )
        } else if (Object.keys(NextScheduledGame).length != 0 && RecentGameID == ""){ //Week 1 is upcoming --> recent game DNE, upcoming game exists
            return (
                <div>
                    {nextGameTitle}
                    <ScheduledGameInfo NextScheduledGame={NextScheduledGame} />
                </div>
            )
        } else if (Object.keys(NextScheduledGame).length == 0 && RecentGameID != ""){ //Reg season ended --> recent game exists, upcoming game DNE
            return (
                <div> 
                    Last Game:
                    <Chart gameStatusInfo={RecentGameID} />
                    {eliminationMessage}
                </div>
            )
        } 
        else if (Object.keys(NextScheduledGame).length != 0 && RecentGameID != "") { //mid season --> recent game exists, upcoming game exists
            return (
                <div> 
                    Last Game:
                    <Chart gameStatusInfo={RecentGameID} />
                    Next Game:{nextGameTitle}
                    <ScheduledGameInfo NextScheduledGame={NextScheduledGame} />
                </div>
            )
        } else{
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
            <select className="selectTeam" value={Team} onChange={handleChange}>
                <option className='selectTeam' disabled={true} value="Select a Team">
                    --Select A Team--
                </option>
                {options}
            </select>

           {returnObj}
        </div>
    )
    
}


export default SelectedTeamInfo;