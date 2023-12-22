import React, { Component } from 'react'; //different

import './App.css';
import "chart.js/auto";
import {Line} from 'react-chartjs-2';
import schedule from './schedule.js'
import game from './game.js';


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

class ScheduledGameInfo extends React.Component {
    constructor(props) {
        super(props)

        //console.log("dateObj",dateObj)
        this.state = {
            
            // home: props.NextScheduledGame.gameData["home"]["name"],
            // away: props.NextScheduledGame.gameData["away"]["name"],
            // week: props.NextScheduledGame.week,
            // date: dateObj.toLocaleString([], date_options),
            // time: dateObj.toLocaleString([], time_options)
        }
        //console.log("this.state.date", this.state.date)
    }

    render(){
        const state = this.state
        const dateObj = new Date(this.props.NextScheduledGame.gameData["scheduled"])
        const away = this.props.NextScheduledGame.gameData["away"]["name"]
        const home = this.props.NextScheduledGame.gameData["home"]["name"]

        var nextGameTitle;
        const gameInfo = this.props.NextScheduledGame.gameData
        console.log("this.props.NextScheduledGame.gameData", this.props.NextScheduledGame.gameData)
        if (typeof gameInfo != 'undefined'){
            nextGameTitle =  ('title' in gameInfo ? gameInfo['title'] : '')
        }

        return (
            <div className='scheduledGame'>
                    {nextGameTitle}
                    <br></br>
                    {away} at {home}    
                    <br></br>
                    Date: {dateObj.toLocaleString([], date_options)}
                    <br></br>
                    Time: {dateObj.toLocaleString([], time_options)}
            </div>

        )
    }

}

export default ScheduledGameInfo