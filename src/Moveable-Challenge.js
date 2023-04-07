import challengeImg from './img-challenge/200x200.png'
import React, { useState } from "react";
import MovableImage from './img-challenge/MovableImage';

function MoveableChallenge(){
    const [count, setCount] = useState(0);
  
    const handleCountChange = event => {
      setCount(parseInt(event.target.value));
    };
  
    const handleButtonClick = () => {
      setCount(count + 1);
    };
  
    return (
      <div> 
        <MovableImage
          src={challengeImg}
          alt="Challenge Image"
          count={count}
          onCountChange={handleCountChange}
          onButtonClick={handleButtonClick}
        />
      </div>
    );
  }  

export default MoveableChallenge;