import React from 'react'
import { useContext } from 'react';
import {UserContext } from '../App'
import {ThemeContext } from '../App'

const ChildC = () => {
    const user = useContext(UserContext);
    const {theme,setTheme} = useContext(ThemeContext);
    function handleClick(){
        if(theme == "light"){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
    }
  return (

    // <div>
    //   Hello {user.name}
    //   <br />Data Provided : {user.name}
    // </div>

    <div>
        <button onClick={handleClick}>
            Change Theme
        </button>
        <br /><br />
        data : {user.name}
    </div>
  )
}

export default ChildC
