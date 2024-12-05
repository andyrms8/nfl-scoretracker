import React, { useState } from 'react'; //different
import '../App.css';
import Chart from './Chart.js'
import config from '../config.json'

const WILD_CARD_WEEK = 19;
const DIVISIONAL_ROUND = 20;
const CONFERENCE_CHAMPIONSHIP = 21;
const SUPERBOWL = 22;

function RecentGames(props) {
    
    const [maxWeek, setMaxWeek] = useState(calcWeekFromSeasonStatus(props.startedWeekStatus.season_type, props.startedWeekStatus.week))

    const returnRecentGameMappings = () => {
        let recentGames = props.recentGames
       
        const allRecentGames =  recentGames.map((recentGame, index) => { //TODO: figure out logic to query different weeks apart form what is passed down
                                                                         //idea: have distinct prop vars for RecentGames and ScheduledGames that are initialzied to the same value
                                                                        //pass down a setter so we can adjust the value of the prop var in the parent Page component
                                                                        //tradeoffs vs querying in the children? (queryin in children results in two boxscore queries, one for each child)
            return (<Chart key={recentGame.id} gameStatusInfo={recentGame} index = {index}/>)
        })

       return allRecentGames;
    }

    function calcWeekFromNum (num) {
        return num <= config.REGULAR_SEASON_WEEKS ? num : num - config.REGULAR_SEASON_WEEKS
    }
    
    function handleWeekSelection (event) {
        const selectedSeason = calcSeasonTypeFromNum(event.target.value)
        const selectedWeek = calcWeekFromNum(event.target.value)
        props.setStartedWeekStatus({"year": status.year, "season_type": selectedSeason, "week": selectedWeek})
    }

    const status = props.startedWeekStatus
    const charts = returnRecentGameMappings()
    const seasonType = props.isRegSzn ?  '' : 'Playoffs '
    const weeks = Array.from({ length: maxWeek}, (_, index) => index + 1);
    const weekOptions = (weeks).map((weekNum) => {
        return <option key={weekNum} value={weekNum}>{Text(weekNum)}</option>
    })

    // Value of 
    function calcWeekFromSeasonStatus(season_type, week){
        return (season_type - 2) * config.REGULAR_SEASON_WEEKS + Number(week)
    }

    function calcSeasonTypeFromNum(num){
        return num/config.REGULAR_SEASON_WEEKS > 1? 3: 2
    }

    function Text(week){
        switch (week){
            case WILD_CARD_WEEK:
                return "Wild Card Round"
            case DIVISIONAL_ROUND:
                return "Divisional Round"
            case CONFERENCE_CHAMPIONSHIP:
                return "Conference Championship"
            case SUPERBOWL:
                return "Super Bowl"
            default:
                return "Week " + week
        }
    }

    const num = calcWeekFromSeasonStatus(status.season_type, status.week)

    return (<div className='center'>
        {seasonType}
            <select className="selectTeam" value={num} onChange={handleWeekSelection}>
                <option className='selectTeam' disabled={true} value= {Text(num)}>
                    {Text(num)}
                </option>
                {weekOptions}
            </select>
        {charts}
    </div>)

}

export default RecentGames