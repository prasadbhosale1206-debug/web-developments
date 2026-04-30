import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componants/Header/Header'
import Footer from './componants/Footer/Footer'
import Home from './componants/Home/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header />
       <Home />
       <Footer />
  {/* <h1 className="bg-green-600 text-black p-3 w-full">
  React Router
</h1> */}

 

    </>
  )
}

export default App
