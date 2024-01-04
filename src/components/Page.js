import React, { useState, useEffect } from 'react'; 
import '../App.css';
import "chart.js/auto";
import RecentGames from './RecentGames.js'
import ScheduledGames from './ScheduledGames.js';
import SelectedTeamInfo from './SelectedTeamInfo.js'
import {fetch_api_response} from '../helpers/helper.js'
import config from '../config.json'

const HARD_CODE_FLAG = false;
const PRINT_FLAG = true;

export function print(msg, obj = 0) {
    if (PRINT_FLAG == true){
        if (obj === 0) console.log(msg)
        else console.log(msg, obj) 
    }
};

function Page (props){

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //
    
    const [pageType, setPageType] = useState(3);
    const [seasonStatus, setSeasonStatus] = useState({"year": 0, "season_type": 0, "week": 0});
    const [currentGames, setCurrentGames] = useState({"recentGames": [], "upcomingGames": []});
    // const [recentWeekNum, setRecentWeekNum] = useState(0); 
    
// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    useEffect( ()=> {
        fetchEvents()
    }, [] ) //only runs once

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    useEffect( ()=> {
        if (seasonStatus.year != 0){
            updateCurrentEvents()
        }
    }, [seasonStatus])

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    //fetch current events
    //fetch current week's games
        //set up recent and upcoming game lists
        //set a timer to refetch games next game starts

    //EFFECT: Makes a call to the events API, sets state.schedule to the response, and calls this.updateCurrentEvents()
    async function fetchEvents(){
        print("----------Page Component fetchEvents() started execution...----------")

        if (HARD_CODE_FLAG == false) {
            try {
                let { $meta: { parameters: current_events } } = await fetch_api_response(config.EVENTS_API_ENDPOINT)
                print("current events", current_events) //TODO: add error handling for when API returns no games (post-season is over)?
                let year = current_events["season"][0]
                let season_type = Number(current_events["seasontypes"][0])
                let week = Number(current_events["week"][0])  
                setSeasonStatus({"year": year, "season_type": season_type, "week": week})
            } catch(error) {
                console.error(error)
            }
        } else {
            // this.setState({schedule: hardcoded_schedule}) #: add hardcoded schedule
            // this.updateCurrentEvents(hardcoded_schedule)
        }
        print("----------Page Component fetchEvents() ended execution.----------")
    }

    // ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    //EFFECT: asynchronously --> sets recentWeekNum to current week #, adds all games to upcomingGames, 
    async function updateCurrentEvents(){
        print("----------Page Components updateCurrentEvents() started execution...----------")
        let year = seasonStatus.year, season_type = seasonStatus.season_type, week = seasonStatus.week
        print("week " + week + " of the " + year + " season")
        
        let past_current = currentGames.recentGames, upcoming = currentGames.upcomingGames
        let upcoming_week_endpoint = config.WEEK_SCHEDULE_API_ENDPOINT.replace('{{year}}', year)
                                        .replace('{{season_type}}', season_type)
                                        .replace('{{week}}', week)

        let response = await fetch_api_response(upcoming_week_endpoint) 
        let { events: week_games } = response 

        print("week_games", week_games)

        for (let gameInfo of week_games ){
            const status = gameInfo.status.type.name

            if (status == "STATUS_SCHEDULED") {
                upcoming.push(gameInfo)
            } else if (status == "STATUS_FINAL" || status == "STATUS_IN_PROGRESS" || status == "STATUS_END_PERIOD" || status == "STATUS_HALFTIME"){
                past_current.unshift(gameInfo) //unshift to push to front, so oldest reent games are shown last
            } else {
                console.error("SOMEHOW WE HAVE A GAME THAT IS NEITHER: scheduled, inprogress, closed, created, or flex-schedule. its status is", gameInfo['status'], )
            }
        }

        if (upcoming.length == 0){ //if all games returned by events API already happened, it could be a Tuesday, so we need to fetch the next week's games anyway
            
            if (week_games.length != 0){  //alternatively check if, week < week_games.league[0].calender[1].entries.length 
                week += 1 //try subsequent week
            } else {
                season_type += 1 //try subsequent part of the season
                week = 1
            }
            // set recentGames first, then add 
            // updateCurrentEvents(year, season_type, week) //TODO: sensure that this executes after setter
            setSeasonStatus({"year": year, "season_type": season_type, "week": week})
        } 
        else if (past_current.length == 0 && week != 1){ //if no games for upcoming have happened yet, we need to fetch the previous week's games
            //TODO: implement logic. consider edge case where week 1 hasn't started yet
        }

        setCurrentGames({recentGames: past_current, upcomingGames: upcoming})
                
        past_current.sort((a,b) => Date.parse(b.date) - Date.parse(a.date)) //sort by descending date (latest recent games first)
        print("Going to set currentGames to: ",{ "recentGames": past_current, "upcomingGames": upcoming})

        if (upcoming.length > 0){ //as long as there's are still upcoming games (Superbowl is not over)
            let msecondsTNG = Date.parse(upcoming[0]["date"]) - Date.now()
            print("hours to next scheduled game:", msecondsTNG/3600000)
            setTimeout(moveUpcomingToRecent, msecondsTNG);
        }                
        print("----------Page Components updateCurrentEvents() ended execution.----------")
    }

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    //EFFECT: moves newly started games from upcomingGames to recentGames, sets a timer to run itself again when 
    //the next game starts. If the upcomingGames is empty, call fetchEvents() to fetch the next week's scheduled games
    const moveUpcomingToRecent = () => {
        print("----------Page Components moveUpcomingToRecent() started execution...----------")
        
        let newRecentGames = currentGames.recentGames, newUpcomingGames = currentGames.upcomingGames
   
        //clears the game charts if a game in the upcoming week has started 
        if (newUpcomingGames[0].week > newRecentGames[0].week){
            newRecentGames = []
        }
    
        print("recentGames before: ", newRecentGames)
        print("upcomingGames before :", newUpcomingGames)

        for (let game of newUpcomingGames){
            let msecondsTNG = Date.parse(game["date"]) - Date.now()
            if (msecondsTNG <= 0) {
                newRecentGames.unshift(newUpcomingGames.shift())
            }
        }

        print("recentGames after: ", newRecentGames)
        print("upcomingGames after :", newUpcomingGames)
        
        setCurrentGames({recentGames: newRecentGames, upcomingGames: newUpcomingGames})
        let msecondsTNG = Date.parse(newUpcomingGames[0]["scheduled"]) - Date.now()
        print("hours to next scheduled game:", msecondsTNG/3600000)

        if (newUpcomingGames.length > 0){
            setTimeout( moveUpcomingToRecent, Math.max(msecondsTNG, 0))//add a delay to make sure we fire after the next scheduled game has started
        } else {
            fetchEvents(); //no more upcoming games, fetches the schedule again, calls updateCurrentEvents to add upcoming week's games 
        }
        print("----------Page Components moveUpcomingToRecent() ended execution...----------")
    }

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    const returnPageType = () => {
        print("Function Component Rendered Again.")

        //If we've recieved the schedule from API call and have defined props to pass to children
        const last_started_week = (currentGames.recentGames.length + currentGames.upcomingGames.length > config.NUMBER_TEAMS/2) ? seasonStatus.week - 1 : seasonStatus.week

            if (pageType == 1) { 
                return( 
                    <div> <RecentGames recentGames= {currentGames.recentGames} recentWeekNum = {last_started_week} isRegSzn = {seasonStatus.season_type == '2'}/></div>
                )
            } else if (pageType == 2){ 
                return (
                    <div style={{ width:1000}}>
                        <ScheduledGames upcomingGames={currentGames.upcomingGames} recentWeekNum={seasonStatus.week} isRegSzn = {seasonStatus.season_type == '2'}/>
                    </div>
                )
            } else if (pageType == 3 ){
                return (
                    <div style={{ width:700, borderColor:'red'}} >
                    <SelectedTeamInfo recentWeekNum={seasonStatus.week} isRegSzn = {seasonStatus.season_type == '2'} />
                    </div>
                )
            } else {
                return( 
                    <div className='loading'>Loading app...</div>
                        )
            }
    }

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    return (
        <div>
            <button onClick={ () => setPageType(1)}> Recent Games </button>
            <button onClick={ () => setPageType(2)}> Upcoming Games </button>
            <button onClick={ () => setPageType(3)}> Select Team </button>
            {returnPageType()}
        </div>
    )

}

export default Page;