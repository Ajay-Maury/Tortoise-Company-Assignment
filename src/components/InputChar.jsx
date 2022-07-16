import React, { useState } from 'react'
import "./InputChar.css";

const InputChar = ({inputChar, setInputChar }) => {
  const handleInput = (e) => {
    console.log(e.target.value);
    setInputChar(e.target.value);
  };
  return (
    <div className='input-container'>
      <div className='input-box'>
        <input className='input-char'
          type='text'
        //   value={inputChar}
          onKeyUp={handleInput}
        />
      </div>
      <div className='button-container'>
        <button className='reset-button'>Reset</button>
      </div>
    </div>
  );
};

export default InputChar
