import React, { Component } from 'react'; //different

import './App.css';
import "chart.js/auto";
import {Line} from 'react-chartjs-2';
import schedule from './schedule.js'
import game from './game.js';
import SelectedTeamInfo from './SelectedTeamInfo.js'
import ScheduledGameInfo from './ScheduledGameInfo';
import RecentGames from './RecentGames.js'
import hardcoded_schedule from './schedule.js';


const TEAM = "Los Angeles Chargers"
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

class Page extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            schedule, 
            pageType: 3,
            recentGamesList : [],
            upcomingGamesList: [],
            weekNum: -1,
            seasonEnded: false
        }
      this.updateState = this.updateState.bind(this)
    }

    componentDidMount(){

        if (HARD_CODE_FLAG == false){
            console.log("About to fetch")
            console.log(PROXY_URL + SCHEDULE_API_ENDPOINT)
            fetch(PROXY_URL + SCHEDULE_API_ENDPOINT, requestOptions) //fetch returns a promise, which is automatically passed as the parameter response in .then()
            .then( (response) => {    
                console.log("Season Schedule fetch request status: ", response.status)           
                if (!response.ok){
                    console.log(response.statusText)
                }
                return response.json()
            })
            .then( (data) =>{
                console.log("Season Schedule: ", data)
                this.updateState(data)
            })
            .catch( (error) => {
                console.log(error)
            })
        }
        else{
            this.updateState(hardcoded_schedule)
        }

        
    }

    updateState(schedule){
        let weekNumFound = false;


        for (let weekIndex in schedule["weeks"] ){
            let weekSchedule = schedule["weeks"][weekIndex]
            let lastGameTimeOfWeek = weekSchedule['games'][weekSchedule['games'].length - 1]["scheduled"]
            
            if (Date.parse(lastGameTimeOfWeek) - Date.now() > 0 && weekNumFound == false) {
                console.log ("WE ARE IN WEEK # ", Number(weekIndex) + 1)
                this.setState({weekNum: Number(weekIndex) + 1})
                weekNumFound = true;
            }
        }

        if (weekNumFound == false){
            this.setState({seasonEnded: false})
        }
    }

    componentDidUpdate(){
    
    }

    render(){

        const {pageType} = this.state;
 

    
        //first render: ComponentDidMount yet to run so we return loading screen
        if (pageType == 1) { 
            return( 
                <div className='loading'>Recent Games here</div>
            )
        }

        //INVARIANT: ComponentDidMount has run by at this point

        else if (pageType == 2){ //no game happening atm: show date of next game
            return (
                <div style={{ width:1000}}>
                    Upcoming Games here
              </div>
    
            )
    
        }
    

        //INVARIANT: there is currently a game ongoing
        else if (pageType == 3 && this.state.weekNum!= -1){
            return (
                <div style={{ width:700, borderColor:'red'}} >
                   <SelectedTeamInfo schedule={this.state.schedule} weekNum={this.state.weekNum} seasonEnded = {this.state.seasonEnded} />
                </div>
    
            )
    
        }

        else{
            return( 
                <div className='loading'>Loading app...</div>
            )
        }
       
    };

}

export default Page;