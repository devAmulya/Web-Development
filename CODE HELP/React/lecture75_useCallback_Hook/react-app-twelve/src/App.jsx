import { useState, useCallback } from 'react'
import './App.css'
// import ChildComponent from './components/ChildComponent';
import ExpensiveComponent from './components/ExpensiveComponent';

function App() {
  // const [count, setCount] = useState(0)
  // // function handleIncrement(){
  // //   setCount(count+1);
  // // }
  // const handleIncrement = useCallback(() => {
  //   setCount(count+1);
  // },[count])
  // return (
  //   <div>
  //     <div>
  //       Count : {count}
  //     </div><br />
  //     <div>
  //       <button onClick={handleIncrement}>Increment</button>
  //     </div><br />
  //     <div>
  //       <ChildComponent buttonName = "Click Me" handleclick = {handleIncrement} />
  //     </div>
  //   </div>
  // )

  return(
    <div>
      <ExpensiveComponent />
    </div>
  )
}

export default App
