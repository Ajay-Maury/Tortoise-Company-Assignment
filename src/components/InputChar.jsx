import React, { useState } from 'react'
import "./InputChar.css";

const InputChar = ({ inputtxt, char, handleReset, handleInput }) => {
  return (
    <div className='input-container'>
      <div className='input-box'>
        <input
          className='input-char'
          type='text'
          value={inputtxt}
          onKeyUp={handleInput}
          disabled={char == "Suscess" || char == "Failure"}
        />
      </div>
      <div className='button-container'>
        <button className='reset-button' onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default InputChar
