import React from 'react'

const Timer = ({ minutes, seconds, bestTime }) => {
 
  return (
    <div>
      <h3>
        Time : {minutes < 10 ? "0" + minutes : minutes} :
        {seconds < 10
          ? "00" + seconds
          : seconds < 100
          ? "0" + seconds
          : seconds}
      </h3>
      <p>my best time : {bestTime}s!</p>
    </div>
  );
};

export default Timer
