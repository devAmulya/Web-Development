import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import LoginBtn from './components/LoginBtn'
import LogoutButton from './components/LogoutButton';

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
   const[isLoggedIn, setLoggedIn] = useState(true);
    // if(isLoggedIn){
    //   return (
    //     <>
    //       <LogoutButton />
    //     </>
    //   )
    // }
    // else{
    //   return(
    //     <div>
    //       <LoginBtn />
    //     </div>
    //   )
    // }
    // return(
    //    <div>
    //     {isLoggedIn ? <LogoutButton /> : <LoginBtn /> }
    //   </div>
    // )
  
    if(!isLoggedIn){
      return(
        <LoginBtn />
      )
    }
  
    return(
      <div>
        <h1>Welcome to website</h1>
        <div>
          {isLoggedIn && <LogoutButton />}
        </div>
      </div>
    )
   
    // return(
    //   <div>
    //     hello
    //   </div>
    // )
}

export default App
