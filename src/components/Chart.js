import React, {useState, useEffect } from 'react'; //different

import '../App.css';
import "chart.js/auto";
import {Line} from 'react-chartjs-2';
import game from '../game.js';
import { plugins } from 'chart.js/auto';
import config from '../config.json'
import { fetch_api_response } from '../helpers/helper.js';

const HARD_CODE_FLAG = false;

const PRINT_FLAG = true;

export function print(msg, obj = 0) {
    if (PRINT_FLAG == true){
        if (obj === 0) console.log(msg)
        else console.log(msg, obj) 
    }
};

function Chart (props){

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    const [numScoringPlays, setNumScoringPlays] = useState(0)
    const [labels, setLabels] = useState([1]) //TODO: do we really need this, why did we initially use it for <Line> component?
    const [scores, setScores] = useState({"away":[{x:1, y:0}], "home":[{x:1, y:0}]})
    const [gameSummary, setGameSummary] = useState({})
    const [homeName, setHomeName] = useState("")
    const [awayName, setAwayName] = useState("")

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    useEffect( () => {
        print("----------Starting FetchBoxScoreData interval execution...----------")
        const intervalID = setInterval( () => {
            let status_name = gameSummary.header?.competitions[0]?.status?.status_name
            if (status_name != "STATUS_FINAL"){
                FetchBoxScoreData()
            } else{
                clearInterval(intervalID)
                print("Game is over: ", props.gameStatusInfo.id, "is over or delayed. Stopping API Calls")
            }
        }, 300000 ) //can set wait (2nd arg) to props.index * 1250 if worried about rate limit
        print("----------Starting FetchBoxScoreData interval execution...----------")
        }, [] 
    )

// ---------------------------------------------------------------------------------------------------------------------------------------------------- /

    useEffect( ()=> {
        FetchBoxScoreData();
    }, [props.gameStatusInfo.id])

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    useEffect( () => {
        if (Object.keys(gameSummary).length != 0){
            updateData()
        }
    }, [gameSummary]
    )
// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    //EFFECT: makes an API call to get Game Box data for the props.GameID, updates scoring state for this Chart component
    async function FetchBoxScoreData(){
        print("----------Chart Component FetchBoxScoreData() started execution...----------")
        const GAME_ENDPOINT = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/summary?event='+ props.gameStatusInfo.id
        
        if (HARD_CODE_FLAG == false){
            try{
                const data = await fetch_api_response(GAME_ENDPOINT)
                print("Game data:", data) 
                setGameSummary(data)
            }
            catch(error) { 
                console.error(error)
            }
        }

        if (HARD_CODE_FLAG ){//code in here will replace the else clause  
            print("Game data:", game)
            setGameSummary(game)            
        }
        print("----------Chart Component FetchBoxScoreData() ended execution.----------")

    }

 // ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    //EFFECT: takes in a game object and updates score state arrays to pass into Line Chart as props
    function updateData(){
        print("----------Chart Component updateData() started execution...----------")

        setAwayName(gameSummary.boxscore.teams[0].team.name)
        setHomeName(gameSummary.boxscore.teams[1].team.name)
        
        let status = gameSummary.header.competitions[0].status
        let overtime = false

        if (status.altDetail == "OT" ) { //set overtime state so chart has additional quarters
            overtime = true
        }

        // Too much code below for the simple sake of not having to update the homeScores and awayScores array... just clear both and recalculate every time we make an API call, don't try to overoptimize

        // //Case 1) Scores haven't changed take the current timestamp, append it labels, take the current scores, append to homeScores and awayScores (using setState)
        // if (gameSummary['summary']['home']['points'] == homeScores.slice(-1)[0].y && gameSummary['summary']['away']['points'] == awayScores.slice(-1)[0].y){

        //     // Case 2) One team scored. check which team last scored, add points accordingly
        //     //take the current timestap, append it twice to labels twice (so we'll have vertical jump. 
        //     //take the current scores, append to homeScores and awayScores), take newscores, append them to homeScores and awayscores


        //Case 3)Missing multiple scores: clear pre-existing data, restart counter at 0. iterate through all the scoring drives, all plays, check if they are scoring plays. If yes, create new plots for them
        //For each scoring play, plot the team’s (old score, play timestamp) and (new score, play timestamp) . At the start of the loop for every scoring drive, increment counter
        //console.log("# scoring drives: ",gameSummary['scoring_drives'].length)

        // if (gameSummary['scoring_drives'].length - numScoringPlays > 1){ 
            print("MISSING MULTIPLE SCORING PLAYS...RESTARTING PLOT ")

            let newLabels = [1]
            let newAwayScores = [{x:1, y:0}]
            let newHomeScores = [{x:1, y:0}]
            let scoringPlays = 0
            
            if (gameSummary.scoringPlays){
                for (let play of gameSummary['scoringPlays']){
                    print("Scoring Play: ", play)
                    let xTime = 0;
                    if ("period" in play){
                        xTime = clockToDecimalRep(play.period.number, play.clock.displayValue, true); //edge case: overtime is represented as period 5
                     // } else{
                    //     xTime = clockToDecimalRep(play.overtime.number, play.clock, false);
                    // }
                    newHomeScores.push( {x: xTime, y: newHomeScores.slice(-1)[0].y}, {x: xTime, y: play.homeScore})
                    newAwayScores.push( {x: xTime, y: newAwayScores.slice(-1)[0].y}, {x: xTime, y: play.awayScore})
                    
                    newLabels.push(xTime)
                    scoringPlays += 1
                    }
                }
            }
            
            //add last point in plot
            const current_clock = status.displayClock ? status.displayClock : "00:00" //if no displayClock attr, 
            
            if (status.altDetail == "OT"){ //overtime
                print("clock :", gameSummary["clock"])
                //TODO: figure out how to get overtime quarter number for postseason (reg-season can only have 1 OT)
                let xTime = clockToDecimalRep(5, current_clock, false)
                print("PUTTING ON LAST DOTS FOR OVERTIME. TIME IS: ", xTime )
                newHomeScores.push({x: xTime, y: gameSummary['summary']['home']['points']})
                newAwayScores.push({x: xTime, y: gameSummary['summary']['away']['points']})
            }
            else //no overtime
            {
                const period = status.period ? status.period : 4 
                if (status.type.name == "STATUS_SCHEDULED"){ //TODO: check if this is the correct way to handle this edge case (is STATUS_SCHEDULED shown for games where the start time has passed but the game hasn't kicked off yet?)
                    period = 1
                }
                //^^^ TODO: small bug where we're past the scheduled star time but game hasn't kicked off yet, so status.period is undefined and period gets set to 4
                let xTime = clockToDecimalRep(period, current_clock, true)
                newHomeScores.push({x: xTime, y: [...newHomeScores].slice(-1)[0].y, /*z: "testHome"*/})
                newAwayScores.push({x: xTime, y: [...newAwayScores].slice(-1)[0].y, /*z:"testAway"*/})
            }
            
            print("newHomeScores: ", newHomeScores);
            print("newAwayScores: ", newAwayScores);
            
            setNumScoringPlays(scoringPlays)
            setScores({"away": [...newAwayScores], "home": [...newHomeScores] })
        //}
        
        let status_name = status.type.name
        print("----------Chart Component updateData() started execution...----------")
    
    }

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //
    //EFFECT: takes in a quarter number, string denoting time left in quarter, and converts them to a float representating how much
    //of the 15 minute quarter is past 
    function clockToDecimalRep(quarter, timeString, reg_quarter){
        print("quarter: ", quarter)
        print("timeString: ", timeString)
        print("reg_quarter: ", reg_quarter)
        const [h, m] = timeString.split(':');
        let timeDecimal = (+h + (+m/60)).toFixed(2);
        var portionOfQuarter
        reg_quarter? portionOfQuarter = 1 - timeDecimal/15 : portionOfQuarter =  1 - timeDecimal/10
        return (quarter + portionOfQuarter)
    }
// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    function decimalToClockRep(float){
        let quarter = float % 1;
        let decimals = float - quarter;
        let timeLeftDecimal = 15 * ( 1- decimals)
        let minutes = timeLeftDecimal % 1
        let seconds = (timeLeftDecimal - minutes * 60).toFixed(2)
        return "".concat("Q",quarter.toString(), " ", minutes.toString() + ":" + seconds.toString())
    }

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

    const getRGB = (color) => {
        color = parseInt(color.substring(1), 16);
        const r = color >> 16;
        const g = (color - (r<<16)) >> 8;
        const b = color - (r<<16) - (g<<8);
        return [r, g, b];
    }
    
    const isSimilar = ([r1, g1, b1], [r2, g2, b2]) => {
        return Math.abs(r1-r2)+Math.abs(g1-g2)+Math.abs(b1-b2) < 100;
      }
// ---------------------------------------------------------------------------------------------------------------------------------------------------- //


    print("----------Chart Component render() started execution...----------")


    const awayScores = scores.away
    const homeScores = scores.home
    let overtime = gameSummary.header?.competitions[0]?.status?.altDetail == "OT" ? true : false
    let away_point_radii = [5, ...awayScores.slice(1, awayScores.length - 1).map((value, index) => (value.y === awayScores[index].y) ? 0 : 5), 5];
    let home_point_radii = [5, ...homeScores.slice(1, homeScores.length - 1).map((value, index) => (value.y === homeScores[index].y) ? 0 : 5), 5];
    print("away_point_radii: ", away_point_radii)
    print("home_point_radii: ", home_point_radii)
    print('array lengths: ', Object.keys(awayScores).length.toString() + " " +  Object.keys(homeScores).length.toString())
    print("awayScores:", JSON.stringify(awayScores))
    print("homeScores:",  JSON.stringify(homeScores))

    const hoverValue = {
        id: "hoverValue",
        afterDatasetsDraw(chart, args, pluginOptions){
            const {ctx, data, options} = chart
            //print()
            // print("ctx: ", ctx)
            // print("data: ", data)
            // print(chart.getActiveElements())
            chart.getActiveElements().forEach((active) =>{
                const value = data.datasets[active.datasetIndex].data[active.index];
                const fontSize = options.hoverRadius;
                print(active.element.$context.raw)
                // ctx.save();

                // console.log(fontSize)
                ctx.fillText("asdf \n score1 \n score2", active.element.x, active.element.y)
            })
            
        }
    }

    var  nextGameTitle;
    if (typeof gameSummary != 'undefined'){
        nextGameTitle =  ('title' in gameSummary ? gameSummary['title'] : '')
    } //TODO: is gameSummary ever invalid?

    //first render: ComponentDidMount yet to run so we return loading screen
    print("gameSummary", gameSummary)
    if (Object.keys(gameSummary).length == 0) { 
        return( 
            <div className='loading'>Loading Game Chart...</div>
        )
    }
    
    let awayColor = "#" + gameSummary.boxscore.teams[0].team.color
    let homeColor = "#" + gameSummary.boxscore.teams[1].team.color

    //use away team's alternative color if it's primary is too similar to the home team's (similarity metric defined in isSimilar)
    if (isSimilar(getRGB(awayColor), getRGB(homeColor))){ 
        awayColor = "#" + gameSummary.boxscore.teams[0].team.alternateColor
    }   

    awayColor += "80"; //adds transparency
    homeColor += "80"; 

    return (
        <div className='startedGame'>
            {nextGameTitle}
            <Line data= {{   
                            labels: labels,  
                            datasets: [ {id: 'away', label: awayName, data: awayScores, backgroundColor: awayColor, borderColor: awayColor, pointRadius: away_point_radii},
                                        {id: 'home', label: homeName, data: homeScores, borderWidth: 5, backgroundColor: homeColor, borderColor: homeColor, pointRadius: home_point_radii} 
                                        ]
                        }}  
                    options={{
                            clip: false,
                            hoverRadius: 5,
                            scales: {
                                x: {
                                    type: 'linear',
                                    min: 1,
                                    max: overtime? 6: 5, //awayScores.length > 0? Math.max(awayScores.splice(-1)[0].x, homeScores.splice(-1)[0].x): 5,
                                    ticks: {
                                        callback: (value) => {
                                            if ( [1,2,3,4].includes(value) ){
                                                return `Q${value}`
                                            } else if (value == 5){
                                                return overtime? "OVERTIME": "FINAL"
                                            }
                                            else if (value == 6){
                                                return "FINAL"
                                            }
                                            else {
                                                return ""
                                            } 
                                        }
                                    },
                                    title: {
                                        display: true,
                                        text: 'Quarter'
                                    }
                                }, 
                                y:{
                                    min:0,
                                    max: Math.max(...awayScores.concat(homeScores).map(o=> o.y)) + 1,
                                    title: {
                                        display: true,
                                        text: 'Points'
                                    }
                                },
                            },
                            plugins: {
                                tooltip: {
                                    mode: 'index',
                                    intersect: true,
                                    callbacks: {
                                        datasetIndex: function() {},
                                        dataIndex: function() {},
                                        title: function(tooltipItems){ //callback automatically takes in a toolTipItem array []
                                            

                                            //print("tooltipItems: ", tooltipItems)
                                            let float = tooltipItems[0].parsed.x
                                            
                                            if (float == 5 || float == 6){
                                                return "End of Regulation"
                                            }

                                            let quarter = Math.floor(float);
                                            let decimals = float - quarter;
                                            let timeLeftDecimal = 15 * ( 1- decimals)
                                            let minutes = Math.floor(timeLeftDecimal)
                                            let seconds = ((timeLeftDecimal - minutes) * 60).toFixed(0)
                                            
                                            return "".concat("Q",quarter.toString(), " ", minutes.toString() + ":" +  (seconds > 10 ? seconds.toString() : '0' + seconds.toString()) )
                                        
                                        },
                                        label: function(context) {//callback automatically takes in a toolTipItem
                                            // print("context:" , context)
                                            let label = context.dataset.label;               
                                            return label + ": " + context.parsed.y;
                                            
                                        }
                                    }
                                    },
                                //  hover: {
                                //     mode: 'index',
                                //     intersect: false
                                //  }
                            }
                            
                            }}  
                    //plugins = {[hoverValue ]} //can uncomment to see what it does
                            
                            
                            />
        </div>

    )
}

export default Chart