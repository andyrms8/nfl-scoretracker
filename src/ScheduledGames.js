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

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    //EFFECT: takes the props array of upcoming game objects and maps them to an array of ScheduledGameInfo elements
    returnUpcomingGames (){
        let games = this.props.upcomingGamesList
       
        const allUpcomingGames =  games.map((game, index) => {
            let NextGame = {gameData: {...game}, week: this.props.upcomingWeekNum }
            return (<ScheduledGameInfo key={game["id"]} NextScheduledGame={ NextGame}/>)
        })

       return allUpcomingGames;
    }

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    render(){
        const seasonType = this.props.season === 'REG' ?  'Regular Season ' : 'Playoffs '

        print("ScheduledGames Component view of upcomingGamesList:",this.props.upcomingGamesList)
        const scheduledGames = this.returnUpcomingGames()

        
        return (<div>
            {seasonType}
            Week {this.props.upcomingWeekNum}
            {scheduledGames}
        </div>)
    }
}



export default ScheduledGames