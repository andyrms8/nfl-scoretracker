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
            // nextGameFound : false, //shouldnt need, parent will pass down game-id, ScheduledGameInfo will only be invoked when a game is found
            // gameInProgress: true, //NEED
            // nextGameDateString : "",//NEED
            // nextGameTimeString: "", //NEED
            // nextGameWeek: 0, //NEED
            // nextGameTime: "", 
            // nextGameId: "", //maybe just rename to game ID
            // labels: [1], //don't need
            // awayScores:[0], //don't need
            // homeScores:[0], //don't need
            // intervalID: -1 //don't need
        }
    }

    render(){
        const {NextScheduledGame} = this.props

        return (
            <div>
                
                {}
                    Next game: Week {NextScheduledGame.week}
                    <br></br>
                    Date: {NextScheduledGame.date}
                    <br></br>
                    Time: {NextScheduledGame.time}
          </div>

        )
    }

}

export default ScheduledGameInfo