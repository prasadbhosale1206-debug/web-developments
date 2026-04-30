import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)

  const addvalue=()=>{
    // if(counter<20){
     setCounter(counter+1)

    // }
    
    // console.log("clicked",counter)
  }

  const removevalue=()=>{
    // if(counter>0){
   setCounter(counter-1)
    // }
 
  }

  return (
    <>
   <h1>chai our react</h1>
   <h2>Counter value:{counter}</h2>
 
   <button
     onClick={addvalue}>add value {counter}</button>
   <br/>
   <button
   onClick={removevalue}
   >remove value {counter}</button>
   {/* <p>Footer:{counter}</p> */}




    </>
  )
}

export default App
