import React from 'react'; //different
import '../App.css';
import ScheduledGameInfo from './ScheduledGameInfo';
import config from '../config.json'

const PRINT_FLAG = true;

export function print(msg, obj = 0) {
    if (PRINT_FLAG == true){
        if (obj === 0) console.log(msg)
        else console.log(msg, obj) 
    }
};

function calcWeekFromSeasonStatus(season_type, week){
    return (season_type - 2) * config.REGULAR_SEASON_WEEKS + Number(week)
}

function ScheduledGames(props){
    

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    //EFFECT: takes the props array of upcoming game objects and maps them to an array of ScheduledGameInfo elements
    const returnUpcomingGames = () => {
        let games = props.upcomingGames
       
        const allUpcomingGames =  games.map((game, index) => {
            return (<ScheduledGameInfo key={game["id"]} NextScheduledGame={game}/>)
        })

       return allUpcomingGames;
    }

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //
    
    print("ScheduledGames Component view of upcomingGames:", props.upcomingGames)
    const seasonType = props.isRegSzn == true ?  '' : 'Playoffs '
    const scheduledGames = returnUpcomingGames()

    return (<div className='center'>
        {seasonType}
        Week {props.recentWeekNum}
        {/* <br></br> */}
        {scheduledGames}
    </div>)
    
}



export default ScheduledGames