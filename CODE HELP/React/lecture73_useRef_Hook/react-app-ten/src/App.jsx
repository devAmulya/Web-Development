import { useState, useEffect } from 'react'
import './App.css'
import { useRef } from 'react';

function App() {
  const [count, setCount] = useState(0)
  // let val = useRef(0);
  
  // let btnRef = useRef();

  // function handleIncrement(){
  //   val.current = val.current + 1;
  //   console.log(val);
  //   setCount(count+1);
  // }

  // function changeColor(){
  //   btnRef.current.style.backgroundColor = "red";
  // }

  // useEffect(() => {
  //   console.log("Next render");
  // })

  let timerRef = useRef(null);
  const [time, setTime] = useState(0);
  function startTimer(){
    timerRef.current = setInterval(() => {
      setTime(time => time+1)
    },1000);
  }
  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  function resetTimer(){
    stopTimer();
    setTime(0);
  }

  return (
    <div>
      <h1>StopWatch: {time} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <br /><br />
      <button onClick={stopTimer}>Stop</button>
      <br /><br />
      <button onClick={resetTimer}>Reset</button>
      <br /><br />





      {/* <button ref={btnRef} onClick={handleIncrement}>
        Increment
      </button>
      <br />

      <button onClick={changeColor}>
        Change Color of 1st Button
      </button>
      <br />
      <div>
        Count : {count} and val : {val.current} 
      </div> */}
    </div>
  )
}

export default App
