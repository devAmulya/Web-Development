import {useState} from 'react';
import './App.css'
import Counter from './components/Counter'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [count,setCount] = useState(0);
  function handleClick(){
    setCount(count+1);
  }
  return (
    <div>
      <Button handleClick = {handleClick}>
        <h1>{count}</h1>
      </Button>
      <Counter />
      <Card name = "Amulya Gupta">
        <h1>Best Web Dev Learning</h1>
        <p>Trying to be consistent in this</p>
        <p>Will complete the course soon</p>
      </Card>
    </div>
  )
}

export default App
