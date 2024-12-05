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
    //STATE VARIABLES
    const [pageType, setPageType] = useState(3);
    const [currentGames, setCurrentGames] = useState({"recentGames": [], "upcomingGames": []});
    const [startedWeekStatus, setStartedWeekStatus] = useState({"year": 0, "season_type": 0, "week": 0});
    const [upcomingWeekStatus, setUpcomingWeekStatus] = useState({"year": 0, "season_type": 0, "week": 0});
    
// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    useEffect( ()=> {
        updateSeasonStatus()
    }, [] ) //only runs once

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //
    
    //REQUIRES: startedWeekStatus (the week for which we want to display game charts) was modfified (and not just initialized)
    //EFFECT: updates currentGames.recentGames with games that have already started
    //MODIFIES: currentGames.recentGames
    useEffect( ()=> {
        if (startedWeekStatus.year != 0){
            updateCurrentEvents()
        }
    }, [startedWeekStatus])

    //REQUIRES: upcomingWeekStatus (the week for which we want to display scheduled games) was modfified (and not just initialized)
    //EFFECT: updates currentGames.upcomingGames with games that have not started yet
    //MODIFIES: currentGames.upcomingGames
    useEffect( ()=> {
        if (upcomingWeekStatus.year != 0){
            updateUpcomingEvents()
        }
    }, [upcomingWeekStatus])
    
// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    //EFFECT: updates the season status (year, season_type, week) for both game charts and game schedules when page initially loads
    //MODIFIES: startedWeekStatus, upcomingWeekStatus state variables
    async function updateSeasonStatus(){
        print("----------Page Component updateSeasonStatus() started execution...----------")

        if (HARD_CODE_FLAG == false) {
            try {
                let { $meta: { parameters: current_events } } = await fetch_api_response(config.EVENTS_API_ENDPOINT)
                print("current events", current_events) //TODO: add error handling for when API returns no games (post-season is over)?
                let year = current_events["season"][0]
                let season_type = Number(current_events["seasontypes"][0])
                let week = Number(current_events["week"][0])
                print("week " + week + " of the " + year + " season")  
                setStartedWeekStatus({"year": year, "season_type": season_type, "week": week})
                setUpcomingWeekStatus({"year": year, "season_type": season_type, "week": week})
            } catch(error) {
                console.error(error)
            }
        } else {
            // this.setState({schedule: hardcoded_schedule}) #: add hardcoded schedule
            // this.updateCurrentEvents(hardcoded_schedule)
        }
        print("----------Page Component updateSeasonStatus() ended execution.----------")
    }

    // ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    //REQUIRES: games is an array of game objects from the config.WEEK_SCHEDULE_API_ENDPOINT, statuses is an array of game status strings
    //EFFECT: returns an array of all game objects from games with a status in statuses
    const gamesWithStatuses = (games, statuses) => {
        let result = []
        for (let gameInfo of games ){
            const status = gameInfo.status.type.name
            if (statuses.includes(status)) {
                result.push(gameInfo)
            }
        }
        return result
    }

    //EFFECT: fetches schedule for the respective week specified by the startedWeekStatus state variable, updates
    //currentGames.recentGames with a list of game objects that have started 
    //MODIFIES: currentGames.recentGames
    async function updateCurrentEvents(){
        print("----------Page Components updateCurrentEvents() started execution...----------")
       
        let year = startedWeekStatus.year, season_type = startedWeekStatus.season_type, week = startedWeekStatus.week
        let week_games = await fetch_week_schedule_for(year, season_type, week)
        let past_current = gamesWithStatuses(week_games, ["STATUS_FINAL", "STATUS_IN_PROGRESS", "STATUS_END_PERIOD", "STATUS_HALFTIME"])
        past_current = past_current.filter((game) => new Date(game.date) <= Date.now());
        past_current.sort((a,b) => Date.parse(b.date) - Date.parse(a.date)) //sort by descending date (latest recent games first)
        setCurrentGames( (prevState) => ({...prevState, recentGames: past_current}))
        
        print("Going to set currentGames.past_current to: ", past_current)
        print("----------Page Components updateCurrentEvents() ended execution.----------")
    }

    //REQUIRES: valid year, season_type, week
    //EFFECTS: returns an array of game objects for the given year, season_type, week
    async function fetch_week_schedule_for(year, season_type, week){
        print("fetching schedule of week " + week + " of the " + year + " season")
        let upcoming_week_endpoint = config.WEEK_SCHEDULE_API_ENDPOINT.replace('{{year}}', year)
                                        .replace('{{season_type}}', season_type)
                                        .replace('{{week}}', week)
        let response = await fetch_api_response(upcoming_week_endpoint) 
        let { events: week_games } = response 
        return week_games
    }

    //EFFECT: fetches schedule for the respective week specified by the upcomingWeekStatus state variable, updates
    //currentGames.upcomingGames with a list of game objects that have not started yet
    //MODIFIES: currentGames.upcomingGames
    async function updateUpcomingEvents(){
        print("----------Page Components updateUpcomingEvents() started execution...----------")
        let year = upcomingWeekStatus.year, season_type = upcomingWeekStatus.season_type, week = upcomingWeekStatus.week
        let week_games = await fetch_week_schedule_for(year, season_type, week)

        let upcoming = gamesWithStatuses(week_games, ["STATUS_SCHEDULED"])
        upcoming = upcoming.filter((game) => new Date(game.date) > Date.now());

        if (upcoming.length == 0){ //if all games returned by EVENTS_API_ENDPOINT finished, it could be a Tuesday, so we fetch the next week's games
            if (week_games.length != 0){  //alternatively check if, week < week_games.league[0].calender[1].entries.length 
                //try subsequent week
                setUpcomingWeekStatus({"year": year, "season_type": season_type, "week": week + 1})
            } else {
                setUpcomingWeekStatus({"year": year, "season_type": season_type + 1, "week": 1})
            }
        } 

        setCurrentGames((prevState) => ({ ...prevState, upcomingGames: upcoming}))

        if (upcoming.length > 0){ //as long as there's are still upcoming games (Superbowl is not over)
            let msecondsTNG = Date.parse(upcoming[0]["date"]) - Date.now()
            print("hours to next scheduled game:", msecondsTNG/3600000)
            setTimeout(moveUpcomingToRecent, msecondsTNG);
        }     

        print("week_games", week_games)
        print("Going to set currentGames.upcomingGames to: ",  upcoming)           
        print("----------Page Components updateCurrentEvents() ended execution.----------")
    }

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    //EFFECT: moves newly started games from upcomingGames to recentGames, sets a timer to run itself again when 
    //the next game starts. If the upcomingGames is empty, call updateSeasonStatus() to fetch the next week's scheduled games
    //MODIFIES: currentGames.recentGames, currentGames.upcomingGames
    const moveUpcomingToRecent = () => { //TODO: consider edge case where we move a game from upcoming to recent, but recent is custom selected to be an older week
        print("----------Page Components moveUpcomingToRecent() started execution...----------")
        
        let newStartedGames = currentGames.recentGames, newUpcomingGames = currentGames.upcomingGames
        //clears the game charts if a game in the upcoming week has started (next week, same season type, or next season type)
        if (upcomingWeekStatus.week ==  startedWeekStatus.week + 1 || upcomingWeekStatus.season_type > startedWeekStatus.season_type){
            newStartedGames = []
        }
    
        print("recentGames before: ", newStartedGames)
        print("upcomingGames before :", newUpcomingGames)

        for (let game of newUpcomingGames){
            let msecondsTNG = Date.parse(game["date"]) - Date.now()
            if (msecondsTNG <= 0) {
                newStartedGames.unshift(newUpcomingGames.shift())
            }
        }

        print("recentGames after: ", newStartedGames)
        print("upcomingGames after :", newUpcomingGames)
        
        setCurrentGames({recentGames: newStartedGames, upcomingGames: newUpcomingGames})
        let msecondsTNG = Date.parse(newUpcomingGames[0]["date"]) - Date.now()
        print("hours to next scheduled game:", msecondsTNG/3600000)

        if (newUpcomingGames.length > 0){
            setTimeout( moveUpcomingToRecent, Math.max(msecondsTNG, 0))//add a delay to make sure we fire after the next scheduled game has started
        } else {
            updateSeasonStatus(); //no more upcoming games, fetches the schedule again, calls updateCurrentEvents to add upcoming week's games 
        }
        print("----------Page Components moveUpcomingToRecent() ended execution...----------")
    }

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

//EFFECT: returns the component to be rendered based on the pageType state variable
    const returnPageType = () => {
        print("Function Component Rendered Again.")

            if (pageType == 1) { 
                return( 
                    <div> 
                        <RecentGames recentGames= {currentGames.recentGames} 
                            startedWeekStatus = {startedWeekStatus} 
                            isRegSzn = {startedWeekStatus.season_type == '2'} 
                            setStartedWeekStatus = {setStartedWeekStatus}
                        />
                    </div>
                )
            } else if (pageType == 2){ 
                return (
                    <div>
                        <ScheduledGames upcomingGames={currentGames.upcomingGames} 
                            recentWeekNum={upcomingWeekStatus.week} 
                            isRegSzn = {upcomingWeekStatus.season_type == '2'}
                        />
                    </div>
                )
            } else if (pageType == 3 ){
                return (
                    <div >
                        <SelectedTeamInfo recentWeekNum={upcomingWeekStatus.week} 
                            isRegSzn = {upcomingWeekStatus.season_type == '2'} 
                        />
                    </div>
                )
            } else {
                return( 
                    <div className='loading'>Loading app...</div>
                )
            }

    }

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //
    //EFFECT: renders the page
    return (
        <div className='scheduledGames'>
            <button className='btn' onClick={ () => setPageType(1)}>  <div className='btn-text'> PAST </div> </button>
            <button className='btn' onClick={ () => setPageType(2)}> <div className='btn-text'> UPCOMING  </div> </button>
            <button className='btn' onClick={ () => setPageType(3)}> <div className='btn-text'> SELECT TEAM </div> </button>
            {returnPageType()}
        </div>
    )

}

export default Page;