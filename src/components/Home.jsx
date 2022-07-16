import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import CharacterToType from "./CharacterToType";
import Header from "./Header";
import InputChar from "./InputChar";
import Timer from "./Timer";


const Home = () => {
  const allChars = "abcdefghijklmnopqrstuvwxyz";
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [inputtxt, setInputtxt] = useState('');
const [bestScore,setBestScore] = useState("00:000")
  const [char, setChar] = useState(allChars[Math.floor(Math.random() * 20)]);
  const [start, setStart] = useState(false);
  const intervalId = useRef(null);
  const correctCount = useRef(0);

  const handleReset = () => {
    // console.log("Reset", intervalId.current);
    clearInterval(intervalId.current);
    setSeconds(0);
    setMinutes(0);
    setStart(false);
    setChar(allChars[Math.floor(Math.random() * 20)]);
    setInputtxt('')
    correctCount.current = 0
  };

  useEffect(() => {
let score = JSON.parse(localStorage.getItem("bestScore"));
    if (score) {
  setBestScore(`${score.mins}:${score.sec}`)
}
    intervalId.current = setInterval(() => {
      if (start) {
        setSeconds(seconds + 1);
        if (seconds === 599) {
          setMinutes(minutes + 1);
          setSeconds(0);
        }
      }
    }, 100);
    return () => {
      clearInterval(intervalId.current);
    };
  }, [start, seconds]);

  const handleInput = (e) => {
    setInputtxt(inputtxt + e.key);
    if (!start) setStart(true);
    if (char == e.key) {
      setChar(allChars[Math.floor(Math.random() * 20)]);
      correctCount.current = correctCount.current + 1;
    } else {
      let time = seconds + 300
      if (time >= 599) {
        setMinutes(minutes + Math.floor(time / 600));
        setSeconds(time - 600);
      }
      else {
        setSeconds(time)
      }
    }
    if (correctCount.current >= 20) {
      handleResults();
    }
  };

  const handleResults = () => {
    clearInterval(intervalId.current);
    correctCount.current = 0;
    setStart(false);
    
    let score = JSON.parse(localStorage.getItem("bestScore"));
    score = score ? Number(score.mins+""+score.sec) : score
    let bestSo = {
      mins: minutes < 10 ? "0" + minutes : minutes,
      sec:
        seconds < 10 ? "00" + seconds : seconds < 100 ? "0" + seconds : seconds,
    };

    
    let x = Number(bestSo.mins + "" + bestSo.sec);
    // console.log("x",x,"score",score,bestSo)
    if (!score || score == 0 || score>x) {
      localStorage.setItem("bestScore", JSON.stringify(bestSo));
      setChar("Suscess");
    } else {
      setChar("Failure");
    }
  };
  return (
    <div className='main-div'>
      <Header />
      <CharacterToType char={char} />
      <Timer minutes={minutes} seconds={seconds} bestTime={bestScore} />
      <InputChar
        inputtxt={inputtxt}
        char={char}
        handleReset={handleReset}
        handleInput={handleInput}
      />
    </div>
  );
};

export default Home;
