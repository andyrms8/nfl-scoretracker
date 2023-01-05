import React, { Component } from 'react'; //different

import './App.css';
import "chart.js/auto";
import RecentGames from './RecentGames.js'
import ScheduledGames from './ScheduledGames';
import SelectedTeamInfo from './SelectedTeamInfo.js'
import hardcoded_schedule from './schedule.js';


const API_KEY_ARRAY = ["ej4vj5g8enqynbjy9ysrfcxk", "fpdyxywaa7tnbd5db9qq47d8"]
const API_KEY = API_KEY_ARRAY[0]
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

const PRINT_FLAG = false;

export function print(msg, obj = 0) {
    if (PRINT_FLAG == true){
        if (obj === 0) console.log(msg)
        else console.log(msg, obj) 
    }
};

class Page extends React.Component{

    constructor(props){
        print("----------Page Component Ctor started execution...----------")
        super(props);
        this.state = {
            pageType: 3,
            schedule: {}, 
            recentGamesList : [], //gameIDs for ongoing games
            upcomingGamesList: [],//gameInfos for upcoming games
            upcomingWeekNum: -1,
            recentWeekNum: 0,
            seasonEnded: false
        }
        this.updateWeek = this.updateWeek.bind(this)
        this.moveUpcomingToRecent = this.moveUpcomingToRecent.bind(this)
        this.fetchSchedule = this.fetchSchedule.bind(this)
        this.returnPageType = this.returnPageType.bind(this)
        print("----------Page Component Ctor ended execution.----------")
    }

    componentDidMount(){
        print("----------Page Component ComponentDidMount() started execution...----------")
        this.fetchSchedule()
        this.setState(prevState=>({recentWeekNum: prevState.upcomingWeekNum}), ()=>{print("recentWeekNum was set to: ", this.state.recentWeekNum)})
        print("----------Page Component ComponentDidMount() ended execution.----------")
    }


    // componentDidUpdate(this.props, this.state.upcomingWeekNum){
    //     //seState clear recentGames, fetchSchedule as callaback;
    //     
    // }

    componentDidUpdate(prevState){
        if (prevState.upcomingWeekNum != this.state.upcomingWeekNum){

            print("Entered condition in componentDidUpdate.prevState.upcomingWeekNum != this.state.upcomingWeekNum: ",prevState.upcomingWeekNum, this.state.upcomingWeekNum)
            //this.moveUpcomingToRecent(); //can't call, as we run setState inside, which triggers this, which calls the func (infinite loop)
        }

    }

    //EFFECT: Makes a call to the season schedule API, sets state.schedule to the response, and calls this.updateWeek()
    fetchSchedule(){
        print("----------Page Component fetchSchedule() started execution...----------")
        if (HARD_CODE_FLAG == false) {
            print("Page Component fetching schedule schedule using API...")
            print("endpoint used: ", PROXY_URL + SCHEDULE_API_ENDPOINT)
            fetch(PROXY_URL + SCHEDULE_API_ENDPOINT, requestOptions) //fetch returns a promise, which is automatically passed as the parameter response in .then()
            .then( (response) => {    
                print("Season Schedule response status: ", response.status)           
                if (!response.ok){
                    console.log(response.statusText)
                }
                return response.json()
            })
            .then( (data) =>{
                print("Season Schedule: ", data)
                this.setState({schedule: data})
                this.updateWeek(data)
            })
            .catch( (error) => {
                console.error(error)
            })
        }
        else{
            this.setState({schedule: hardcoded_schedule})
            this.updateWeek(hardcoded_schedule)
        }
        print("----------Page Component fetchSchedule() ended execution.----------")
     
    }

    //EFFECT: moves newly started games from upcomingGamesList to recentGamesList, set's a timer to run when the next game starts
    //In the event that the upcomingGamesList is empty, calls fetchSchedule() to clear the recentGamesList and fetch next/current week's games
    moveUpcomingToRecent(){
        print("----------Page Components moveUpcomingToRecent() started execution...----------")
        
        let newUpcomingGamesList  = [...this.state.upcomingGamesList]

        //clears the game charts if an upcoming game has started
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
            this.fetchSchedule(); //fetches the schedule again, calls updateWeek to add upcoming week's games 
        }
        print("----------Page Components moveUpcomingToRecent() ended execution...----------")
    }

    //EFFECT: asynchronously --> sets upcomingWeekNum to current week #, adds all games to upcomingGamesList, 
    updateWeek(schedule){
        print("----------Page Components updateWeek() started execution...----------")
        let upcomingWeekNumFound = false;

        for (let weekIndex in schedule["weeks"] ){
            let weekSchedule = schedule["weeks"][weekIndex]
            let lastGameTimeOfWeek = weekSchedule['games'][weekSchedule['games'].length - 1]["scheduled"]
            
            if (Date.parse(lastGameTimeOfWeek) - Date.now() > 0 && upcomingWeekNumFound == false) {
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
                if (Date.parse(upcoming[0]["scheduled"]) - Date.now() > 0){ //if none of this upcoming weeks games have started
                    past_current = [...schedule["weeks"][weekIndex - 1]['games']].reverse().map( game => game["id"]) //show game charts from last week
                    this.setState({recentWeekNum: weekIndex})
                }

                print("Going to set recentGamesList to: ", past_current)
                print("Going to set upComingGamesList to:", upcoming)
                print("weekSchedule['games'] :", weekSchedule['games']);
                this.setState({upcomingWeekNum: Number(weekIndex) + 1, upcomingGamesList: upcoming, recentGamesList: past_current})

                let msecondsTNG = Date.parse(upcoming[0]["scheduled"]) - Date.now()
                setTimeout(this.moveUpcomingToRecent, msecondsTNG);


                break
            }

        }

        if (upcomingWeekNumFound == false ){
            this.setState({seasonEnded: false})
        }
        else{

        }
        print("----------Page Components updateWeek() ended execution.----------")
    }

    returnPageType(){
        const pageType = this.state.pageType;
        const state = this.state;
        print("Page Component Rendered Again. State: ", state)

        //If we've recieved the schedule from API call and have defined props to pass to children
        if (this.state.upcomingWeekNum!= -1 && Object.keys( state.schedule).length != 0){

            if (pageType == 1) { 
                return( 
                    <div> <RecentGames recentGamesList= {this.state.recentGamesList}/></div>
                )
            }

            else if (pageType == 2){ 
                return (
                    <div style={{ width:1000}}>
                        <ScheduledGames upcomingGamesList={state.upcomingGamesList} week={state.upcomingWeekNum}/>
                    </div>
                )
            }
            
            else if (pageType == 3 && this.state.upcomingWeekNum!= -1){
                return (
                    <div style={{ width:700, borderColor:'red'}} >
                    <SelectedTeamInfo schedule={state.schedule} upcomingWeekNum={state.upcomingWeekNum} seasonEnded = {state.seasonEnded} />
                    </div>
                )
            }
        }
    
        else{
            return( 
                <div className='loading'>Loading app...</div>
            )
        }
    }

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