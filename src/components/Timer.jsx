import React, { useState } from 'react'

const Timer = ({ currTime, bestTime }) => {
  return (
    <div>
      <h3>Time : {currTime}</h3>
      <p>my best time : {bestTime}s!</p>
    </div>
  );
};

export default Timer
