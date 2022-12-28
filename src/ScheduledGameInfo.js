import React, { Component } from 'react'; //different

import './App.css';
import "chart.js/auto";
import {Line} from 'react-chartjs-2';
import schedule from './schedule.js'
import game from './game.js';

class ScheduledGameInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nextGameFound : false,
            gameInProgress: true,
            nextGameDateString : "",
            nextGameTimeString: "",
            nextGameWeek: 0,
            nextGameTime: "",
            nextGameId: "",
            labels: [1],
            awayScores:[0],
            homeScores:[0],
            intervalID:-1
        }
    }

    render(){
        return (
            <div style={{ width:1000}}>
                
                {}
                    Next game: Week {state.nextGameWeek}
                    <br></br>
                    Date: {state.nextGameDateString}
                    <br></br>
                    Time: {state.nextGameTimeString}
          </div>

        )
    }

}

export default ScheduledGameInfo