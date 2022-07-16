import React, { useState } from 'react'
import ChaeacterToType from './ChaeacterToType'
import Header from './Header'
import InputChar from './InputChar'
import Timer from './Timer'

const Home = () => {
    const [currTime, setCurrTime] = useState("0:000");
    const [bestTime, setBestTime] = useState("0:000");
      const [inputChar, setInputChar] = useState("");
     
  return (
    <div
          style={{
          boxSizing:"border-box",
        width: "50%",
        margin: "10% auto",
        textAlign: "center",
              background: "teal",
        fontSize:"1.3em"
      }}
    >
      <Header />
      <ChaeacterToType char={"A"} />
      <Timer
        currTime={currTime}
        setCurrTime={setCurrTime}
        bestTime={bestTime}
        setBestTime={setBestTime}
      />
      <InputChar inputChar={inputChar} setInputChar={setInputChar} />
    </div>
  );
}

export default Home
