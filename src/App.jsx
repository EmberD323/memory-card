import { useState } from 'react'

import './style/App.css'
import Card from './components/getImages'
import shuffle from './components/shuffle';
import Scoreboard from './components/scoreboard';

function App() {
  let [imageData, setImageData] = useState([]);
  let [gameStatus, setGameStatus] = useState(false);
  let [bestScore,setBestScore] = useState(0);
  let [thisScore,setThisScore] = useState(0);

  function handlePlayGame(){
    setGameStatus(!gameStatus)
  }
  function handleShuffle(thisRoundData){
    let shuffledImageData = shuffle(thisRoundData);
    setImageData(shuffledImageData);
  }
  function handleGameFinish(){
    setBestScore(thisScore);
    setThisScore(0);
    //set all isClicked to no
    let resetData = imageData;
    resetData.map((gif)=>{
      gif.isClicked = "no";
    })
    setImageData(resetData);
  }
  function handleRound(thisRoundData){
    setThisScore(thisScore+1);
    handleShuffle(thisRoundData)
   
  }
  function handleImageClick(e){
    //find gif in array
    let thisRoundData = imageData;
    thisRoundData.map((gif)=>{
      if(gif.id == e.target.id){
        //if already clicked end game -set score to 0
        if(gif.isClicked == "yes"){
          handleGameFinish()
        }
        else{//otherwise change click to yes and add to current score
          gif.isClicked = "yes";
          handleRound(thisRoundData);
        }
        
      }
    })
  }


  return(
    <>
      <button className={gameStatus?"hide":"reveal"} onClick={handlePlayGame}>Play Game</button>
    
      <div className={gameStatus?"reveal":"hide"}>
        <h1 className="heading">Dog Memory Card Game</h1>
        <div className="text">
          <h2 className="explain">Challenge: Only click each image once, try get a best score of 10!</h2>
          <Scoreboard thisScore={thisScore} bestScore={bestScore}/>
        </div>
        
        <div className="imageCards" onClick={handleImageClick}>
          <Card setImageData={setImageData} imageData={imageData}/>
        </div>
      </div>
    </>
  )

}

export default App
