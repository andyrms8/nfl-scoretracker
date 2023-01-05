import React, { Component } from 'react'; //different
import './App.css';
import ScheduledGameInfo from './ScheduledGameInfo';

const PRINT_FLAG = false;

export function print(msg, obj = 0) {
    if (PRINT_FLAG == true){
        if (obj === 0) console.log(msg)
        else console.log(msg, obj) 
    }
};

class ScheduledGames extends React.Component{
    constructor(props){
        super(props);
        this.returnUpcomingGames = this.returnUpcomingGames.bind(this)
    }

    returnUpcomingGames (){
        let games = this.props.upcomingGamesList
       
        const allUpcomingGames =  games.map((game, index) => {
            let NextGame = {gameData: {...game}, week: this.props.week}
            return (<ScheduledGameInfo key={game["id"]} NextScheduledGame={ NextGame}/>)
        })

       return allUpcomingGames;
    }

    render(){
        print("ScheduledGames Component view of upcomingGamesList:",this.props.upcomingGamesList)
        const scheduledGames = this.returnUpcomingGames()

        
        return (<div>
            Week {this.props.week}
            {scheduledGames}
        </div>)
    }
}



export default ScheduledGames