import React, { Component } from 'react'; //different
import './App.css';
import Chart from './Chart.js'


class RecentGames extends React.Component{
    constructor(props){
        super(props);
        this.returnRecentGameMappings = this.returnRecentGameMappings.bind(this)
    }

    returnRecentGameMappings (){
        let gameIDs = this.props.recentGamesList
       
        const allRecentGames =  gameIDs.map((gameID, index) => {
            return (<Chart key={gameID} GameID={gameID} index = {index}/>)
        })

       return allRecentGames;
    }

    render(){

        const charts = this.returnRecentGameMappings()
        const seasonType = this.props.season === 'REG' ?  'Regular Season ' : 'Playoffs '
        return (<div>
            {seasonType}
             Week {this.props.recentWeekNum}
            {charts}
        </div>)
    }
}



export default RecentGames