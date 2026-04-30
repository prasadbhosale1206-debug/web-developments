import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (

     <div className='w-full absolute left-0 top-0 h-screen duration-200' style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white text-black px-3 py-2 rounded-3xl'>
          <button
          onClick={()=> setColor("red")}
          className='outline-none px-4 py-1 rounded-full shadow-large'
          style={{backgroundColor:"red"}}
          >Red</button>
           <button
           onClick={()=> setColor("green")}
          className='outline-none px-4 py-1 rounded-full shadow-large'
          style={{backgroundColor:"green"}}
          >Green</button>
           <button
           onClick={()=> setColor("blue")}
          className='outline-none px-4 py-1 rounded-full shadow-large'
          style={{backgroundColor:"blue"}}
          >Blue</button>
           <button
           onClick={()=> setColor("pink")}
          className='outline-none px-4 py-1 rounded-full shadow-large'
          style={{backgroundColor:"pink"}}
          >Pink</button>
        </div>
      </div>
     </div>
  )
}

export default App
