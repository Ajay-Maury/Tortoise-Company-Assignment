import React from "react";

const ChaeacterToType = ({ char }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "90%",
        height: "100px",
        background: "white",
        margin: "auto",
        borderRadius: "5px",
        alignItems: "center",
              justifyContent: "center",
              fontSize: "3em",
              fontWeight: "bold",
        color:"green"
      }}
    >
      {char}
    </div>
  );
};

export default ChaeacterToType;
