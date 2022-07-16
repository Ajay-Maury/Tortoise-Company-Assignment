import React from "react";
import "./CharacterToType.css";

const CharacterToType = ({ char }) => {
  return (
    <div className="display-char" >
      {char}
    </div>
  );
};

export default CharacterToType;
