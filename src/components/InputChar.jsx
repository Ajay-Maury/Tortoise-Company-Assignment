import React, { useState } from 'react'

const InputChar = ({inputChar, setInputChar }) => {
  const handleInput = (e) => {
    console.log(e.target.value);
    setInputChar(e.target.value);
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "70%" }}>
        <input
          type='text'
        //   value={inputChar}
          onKeyUp={handleInput}
          style={{ width: "100%",height:"40px" }}
        />
      </div>
      <div style={{ width: "30%" }}>
        <button style={{ width: "100%",height:"45px",background:"red",fontWeight:"bolder",fontSize:"1em" }}>Reset</button>
      </div>
    </div>
  );
};

export default InputChar
