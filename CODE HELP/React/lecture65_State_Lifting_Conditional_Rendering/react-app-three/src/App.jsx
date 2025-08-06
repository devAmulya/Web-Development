import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  //create state
  //manage state
  // change state
  // syn state in child

    const[name, setName] = useState('');
  return (
    <div>
        <Card title = "Card1" name = {name} setName = {setName} />
        {/* <p>I am inside Parent COmponent and value is : {name}</p> */}
        <Card title = "Card2" name = {name} setName= {setName}/>
    </div>
  )
}

export default App
