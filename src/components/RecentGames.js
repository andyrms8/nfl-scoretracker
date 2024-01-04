import React, { useState } from 'react'; //different
import '../App.css';
import Chart from './Chart.js'


function RecentGames(props) {

    const [selectedWeek, setSelectedWeek] = useState(props.recentWeekNum)

    function handleWeekSelection (event) {
        setSelectedWeek(event.target.value)
    }

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

    const charts = returnRecentGameMappings()
    const seasonType = props.isRegSzn ?  'Regular Season ' : 'Playoffs '
    const weeks = Array.from({ length: props.recentWeekNum}, (_, index) => index + 1);
    const weekOptions = (weeks).map((weekNum) => {
        return <option key={weekNum} value={weekNum}>{"Week" + weekNum}</option>
    })


    return (<div>
        {seasonType}
            <select className="selectTeam" value={selectedWeek} onChange={handleWeekSelection}>
                <option className='selectTeam' disabled={true} value= {selectedWeek}>
                    Week {selectedWeek}
                </option>
                {weekOptions}
            </select>
        {charts}
    </div>)

}

export default RecentGames