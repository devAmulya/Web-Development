import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement,increment, incrementByValue, reset } from './features/counter/counterSlice';

function App() {

  const [amount, setAmount] =useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick(){
    dispatch(increment());
  }

  function handleDecrementClick(){
    dispatch(decrement());
  }

  function handleResetClick(){
    dispatch(reset());
  }

  function handleIncreaseClick(){
    dispatch(incrementByValue(amount));
  }

  return (
    <div className='container'>
      <input type="number" value={amount} placeholder='Enter Amount' onChange = {(e) => setAmount(e.target.value)}/> 
      <button onClick={handleIncreaseClick}> Increase</button>
      <br />
      <span>Count: {count}   </span>
      <button onClick={handleIncrementClick}> + </button>
      <button onClick={handleDecrementClick}> - </button><br />
      <button onClick={handleResetClick}> Reset </button>
    </div>
  )
}

export default App
