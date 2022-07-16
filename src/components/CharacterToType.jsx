import React from "react";
import "./CharacterToType.css";

const CharacterToType = ({ char }) => {
  return (
    // <div className='display-char' {className=`${char == "Failure"? "Failure":""}`}>
    <div className={char=="Failure" ? "red":"green" }>
      {char}
    </div>
  );
};

export default CharacterToType;
