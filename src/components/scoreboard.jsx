function Scoreboard({thisScore,bestScore}){
    return(
        <div className="scoreBoard">

            <h3 className="thisScoreContainer">This Score: {thisScore}</h3>
            <h3 className="bestScoreContainer">Best Score: {bestScore}</h3>
        </div>
    )
}
export default Scoreboard