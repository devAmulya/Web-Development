import { useState, createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA';

// step1 : create Context
const UserContext = createContext();
const ThemeContext = createContext();
// s2
// step3 : pass value
// Consume value

function App() {
  const [user,setUser] = useState({name:"Amulya"});
  const [theme, setTheme] = useState('light')


  return (
    <UserContext.Provider value = {user}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div id = "container" style={{backgroundColor:theme==='light'?"beige":"black"}}>
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
    



    // <div>
    //   {/* step2 : wrap all child inside a provider */}
    //   <UserContext.Provider value={user}>
    //     <ChildA />
    //   </UserContext.Provider>
    // </div>
  )
}

export default App
export {UserContext}
export {ThemeContext}

