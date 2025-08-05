import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <UserCard name="React Developer" description="Web developer in modern era"/>
      <UserCard name="Maharana Paratap" description="Great Fighter in AD"/>
      <UserCard name="Maharaj Singh" description="great ruler in medieval era"/>
    </div>
  )
}

export default App
