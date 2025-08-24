import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // function handleClick(){
  //   alert("I am Clicked");
  // }

  // function handleMOuseOver(){
  //   alert("Dont Hover")
  // }

  // return (
  //   <div>
  //     <p onMouseOver={handleMOuseOver}>
  //       I am a Paragraph.
  //     </p>
  //     <button onClick={handleClick}>
  //       Click me
  //     </button>
  //   </div>
  // )

  function handleInputChange(e){
    console.log("Value : ", e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault();
    alert("Form submitted")
  }
  return(
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => handleInputChange(e)}/>
        <button type='submit'>Submit</button>
      </form> */}

      <button onClick={() => alert("Button clicked")}>
        click me
      </button>

    </div>
  )
}

export default App
