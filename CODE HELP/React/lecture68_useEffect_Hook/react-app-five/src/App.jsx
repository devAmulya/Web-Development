import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoggerComponent from './components/LoggerComponent'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
import ResizeComponent from './components/ResizeComponent'
import MultiEffectComponent from './components/MultiEffectComponent'


function App() {
  
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);
  // useEffect(() => {
  //     first
    
  //     return () => {
  //       second
  //     }
  //   }, [third])

  // variation : 1 -- runs on every render
  // useEffect(() => {
  //   alert("Hello")
  // })

  // variation : 2 -- runs on only first render
  // useEffect(() => {
  //   alert("First Render");
  // }, [])

  // variation : 3 -- runs on a single dependencies
  // useEffect(() => {
  //   alert("Run EVery time and count is updated")
  // },[count])

  // variation : 4 -- multiple dependencies
  // useEffect(() => {
  //   alert('Run EVery time when count or total is updated');
  // }, [count,total])

  // variation : 5 -- with clean up function
  // useEffect(() => {
  //   alert("Count is updated")
  
  //   return () => {
  //     alert("COunt is unmounted from UI")
  //   }
  // }, [count])
  
  

  // function handleClick(){
  //   setCount(count+1);
  // }

  // function handleClick1(){
  //   setTotal(total+1);
  // }



  return (

    <div>

      {/* <LoggerComponent /> */}
      {/* <TimerComponent /> */}
      {/* <DataFetcher /> */}
      {/* <ResizeComponent /> */}
      {/* <MultiEffectComponent /> */}

      {/* UseEffect Hook <br />
      <button onClick={handleClick}>Click Me</button>
      <br />
      Count is: {count} <br />
      <button onClick={handleClick1}>Click Me 1</button>
      <br />
      Count is: {total} */}

    </div>
  )
}

export default App
