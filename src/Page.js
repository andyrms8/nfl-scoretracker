import React, { Component } from 'react'; //different

import './App.css';
import "chart.js/auto";
import RecentGames from './RecentGames.js'
import ScheduledGames from './ScheduledGames';
import SelectedTeamInfo from './SelectedTeamInfo.js'
import hardcoded_schedule from './schedule.js';


const API_KEY_ARRAY = ["ej4vj5g8enqynbjy9ysrfcxk", "fpdyxywaa7tnbd5db9qq47d8", "mufeknj78chgd66rbvmfcc68"]
const API_KEY = "z5tetu8hua4n8xtszw5pktgd" //cnvtpxu6xxma5k8uuedzhm98
const YEAR = "2023"
//const season = "REG"; //3 types: PRE, REG, PST
const HARD_CODE_FLAG = false;

const PROXY_URL = 'https://cryptic-scrubland-72951.herokuapp.com/'

const requestOptions = {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Credentials': 'true'
    },
};

const PRINT_FLAG = true;

export function print(msg, obj = 0) {
    if (PRINT_FLAG == true){
        if (obj === 0) console.log(msg)
        else console.log(msg, obj) 
    }
};

class Page extends React.Component{

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    constructor(props){
        print("----------Page Component Ctor started execution...----------")
        super(props);
        this.state = {
            pageType: 3,
            season: 'REG',
            schedule: {}, 
            recentGamesList : [], //gameIDs for ongoing games
            upcomingGamesList: [],//gameInfos for upcoming games
            upcomingWeekNum: -1,
            recentWeekNum: 0,
        }
        this.updateSeasonWeek = this.updateSeasonWeek.bind(this)
        this.moveUpcomingToRecent = this.moveUpcomingToRecent.bind(this)
        this.fetchSchedule = this.fetchSchedule.bind(this)
        this.returnPageType = this.returnPageType.bind(this)

        print("----------Page Component Ctor ended execution.----------")
    }

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    componentDidMount(){
        print("----------Page Component ComponentDidMount() started execution...----------")
        this.fetchSchedule()
        //this.setState(prevState=>({recentWeekNum: prevState.upcomingWeekNum}), ()=>{print("recentWeekNum was set to: ", this.state.recentWeekNum)})
        print("----------Page Component ComponentDidMount() ended execution.----------")
    }

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    componentDidUpdate(prevState){
        if (prevState.upcomingWeekNum != this.state.upcomingWeekNum){

            print("Entered condition in componentDidUpdate.prevState.upcomingWeekNum != this.state.upcomingWeekNum: ",prevState.upcomingWeekNum, this.state.upcomingWeekNum)
            //this.moveUpcomingToRecent(); //can't call, as we run setState inside, which triggers this, which calls the func (infinite loop)
        }

    }

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    //EFFECT: Makes a call to the season schedule API, sets state.schedule to the response, and calls this.updateSeasonWeek()
    fetchSchedule(){
        print("----------Page Component fetchSchedule() started execution...----------")
        print("SEASON TYPE: ", this.state.season)
        if (HARD_CODE_FLAG == false) {
            print("Page Component fetching schedule schedule using API...")
            const SCHEDULE_API_ENDPOINT = 'http://api.sportradar.us/nfl/official/trial/v7/en/games/' + YEAR + '/' + this.state.season + '/schedule.json?api_key=' + API_KEY
            print("endpoint used: ", PROXY_URL + SCHEDULE_API_ENDPOINT)
            fetch(PROXY_URL + SCHEDULE_API_ENDPOINT, requestOptions) //fetch returns a promise, which is automatically passed as the parameter response in .then()
            .then( (response) => {    
                print("season Schedule response status: ", response.status)           
                if (!response.ok){
                    console.log(response.statusText)
                }
                return response.json()
            })
            .then( (data) =>{
                print("season Schedule: ", data)
                this.setState({schedule: data})
                    this.updateSeasonWeek(data)
            })
            .catch( (error) => {
                console.error(error)
            })
        }
        else{
            this.setState({schedule: hardcoded_schedule})
            this.updateSeasonWeek(hardcoded_schedule)
        }
        print("----------Page Component fetchSchedule() ended execution.----------")
     
    }

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    //EFFECT: moves newly started games from upcomingGamesList to recentGamesList, sets a timer to run itself again when 
    //the next game starts. If the upcomingGamesList is empty, call fetchSchedule() to fetch the next week's scheduled games
    moveUpcomingToRecent(){
        print("----------Page Components moveUpcomingToRecent() started execution...----------")
        
        let newUpcomingGamesList  = [...this.state.upcomingGamesList]

        //clears the game charts if a game in the upcoming week has started 
        let newRecentGamesList = this.state.recentWeekNum == this.state.upcomingWeekNum ? [...this.state.recentGamesList] : []
    
        print("recentGamesList before: ", newRecentGamesList)
        print("upcomingGamesList before :", newUpcomingGamesList)

        for (let game of newUpcomingGamesList){
            let msecondsTNG = Date.parse(game["scheduled"]) - Date.now()
            if (msecondsTNG <= 0) {
                newRecentGamesList.unshift(newUpcomingGamesList.shift()['id'])
            }
        }
        
        this.setState(prevState => ({upcomingGamesList: newUpcomingGamesList, recentGamesList: newRecentGamesList, recentWeekNum: prevState.upcomingWeekNum}))
        print("recentGamesList after: ", newRecentGamesList)
        print("upcomingGamesList after :", newUpcomingGamesList)
        let msecondsTNG = Date.parse(newUpcomingGamesList[0]["scheduled"]) - Date.now()
        print("hours to next scheduled game:", msecondsTNG/3600000)

        if (newUpcomingGamesList.length > 0){
            setTimeout( this.moveUpcomingToRecent, Math.max(msecondsTNG, 0))//add a delay to make sure we fire after the next scheduled game has started
        }
        else {
            this.fetchSchedule(); //fetches the schedule again, calls updateSeasonWeek to add upcoming week's games 
        }
        print("----------Page Components moveUpcomingToRecent() ended execution...----------")
    }

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    //EFFECT: asynchronously --> sets upcomingWeekNum to current week #, adds all games to upcomingGamesList, 
    updateSeasonWeek(schedule){
        print("----------Page Components updateSeasonWeek() started execution...----------")
        let upcomingWeekNumFound = false;

        for (let weekIndex in schedule["weeks"] ){
            let weekSchedule = schedule["weeks"][weekIndex]
            let lastGameOfWeek = weekSchedule['games'][weekSchedule['games'].length - 1]
            
            print("weekIndex: ", weekIndex )
            print("schedule[weeks].length: ", schedule["weeks"].length)
            print("this.state.season:" , this.state.season)
            if ( (Date.parse(lastGameOfWeek["scheduled"]) - Date.now() > 0 && upcomingWeekNumFound == false) || ((Number(weekIndex) + 1 == schedule["weeks"].length) && this.state.season == "PST")) { //found the week we're in or we're past the last week
                print("WE ARE IN WEEK # ", Number(weekIndex) + 1)
                
                upcomingWeekNumFound = true;
                
                var past_current = [], upcoming = []
                for (let gameInfo of weekSchedule['games'] ){
                    //print("gameInfo['id']:", gameInfo['id'])
                    if (gameInfo["status"] == "scheduled" || gameInfo["status"] == "created" || gameInfo["status"] == "flex-schedule") {
                        upcoming.push(gameInfo)
                    }
                    else if (gameInfo["status"] == "inprogress" || gameInfo["status"] == "closed" || gameInfo["status"] == 'complete'){
                        past_current.unshift(gameInfo["id"])
                    }
                    else{
                        console.error("SOMEHOW WE HAVE A GAME THAT IS NEITHER: scheduled, inprogress, closed, created, or flex-schedule. its status is", gameInfo[''], )
                    }
                }
                if (past_current.length == 0){ //if no games have have started for the upcoming week, show game charts from last week
                    if(weekIndex != 0){ // and if the upcoming week isn't week 1
                        past_current = [...schedule["weeks"][weekIndex - 1]['games']].reverse().map( game => game["id"])  
                        this.setState({recentWeekNum: Number(weekIndex)}) //set recentWeekNum to last week = weekIndex = 1 less than upcomingWeekNum
                    }
                }
                else{ //it's week 1, or games have already started for the upcoming week
                    this.setState({recentWeekNum : Number(weekIndex) + 1})
                }
                
                

                print("Going to set recentGamesList to: ", past_current)
                print("Going to set upComingGamesList to:", upcoming)
                print("weekSchedule['games'] :", weekSchedule['games']);
                this.setState({upcomingWeekNum: Number(weekIndex) + 1, upcomingGamesList: upcoming, recentGamesList: past_current})

                if (upcoming.length > 0){ //as long as there's are still upcoming games (Superbowl is not over)
                    let msecondsTNG = Date.parse(upcoming[0]["scheduled"]) - Date.now()
                    setTimeout(this.moveUpcomingToRecent, msecondsTNG);
                }
                
                

                break
            }

        }

        if (upcomingWeekNumFound == false ){

            if (this.state.season == 'REG'){
                this.setState({season: 'PST' }, function() {setTimeout(this.fetchSchedule, 1200)})
                print("Regular Season Ended")
            }
            else if (this.state.season == 'PST'){
                print("Post-Season Ended")
            }
           

        }
        else{

        }
        print("----------Page Components updateSeasonWeek() ended execution.----------")
    }

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //



// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    returnPageType(){
        const pageType = this.state.pageType;
        const state = this.state;
        print("Page Component Rendered Again. State: ", state)

        //If we've recieved the schedule from API call and have defined props to pass to children
        // if (this.state.upcomingWeekNum!= -1 && Object.keys( state.schedule).length != 0){

            if (pageType == 1) { 
                return( 
                    <div> <RecentGames recentGamesList= {this.state.recentGamesList} recentWeekNum = {state.recentWeekNum} regseasonEnded = {state.season == 'REG'}/></div>
                )
            }

            else if (pageType == 2){ 
                return (
                    <div style={{ width:1000}}>
                        <ScheduledGames upcomingGamesList={state.upcomingGamesList} upcomingWeekNum={state.upcomingWeekNum} regseasonEnded = {state.season == 'REG'}/>
                    </div>
                )
            }
            
            else if (pageType == 3 && this.state.upcomingWeekNum!= -1 ){
                return (
                    <div style={{ width:700, borderColor:'red'}} >
                    <SelectedTeamInfo schedule={state.schedule} recentWeekNum={state.recentWeekNum} upcomingWeekNum={state.upcomingWeekNum} regseasonEnded = {state.season == 'REG'} />
                    </div>
                )
            }
        
    
        else {
            return( 
                <div className='loading'>Loading app...</div>
            )
        }
    }

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    render(){
    
        return (
            <div>
                <button onClick={()=> this.setState({pageType: 1})}> Recent Games </button>
                <button onClick={()=>this.setState({pageType: 2})}> Upcoming Games </button>
                <button onClick={()=>this.setState({pageType: 3})}> Select Team </button>
                {this.returnPageType()}
            </div>
          
        )

       
    };

}

export default Page;