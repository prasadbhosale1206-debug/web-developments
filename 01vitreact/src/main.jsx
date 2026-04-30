import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
// import Chai from './Chai.jsx'

// function Name(){
//   <div>
//     <h1>Tejas Shelake</h1>
//   </div>
// }


// const reactElement={
//     type:'a',
//     props: {
//         href: 'https://google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit google'
// }

const anotheruser="chai our code"

const reactElement=React.createElement(
  'a',
  {href:"https://google.com",target:'_blank'},
  "click me to visit google",
  anotheruser
)

// const AnotherElement=(
//    <div>
//   <a href="https://google.com" target="_blank">visit google</a>
//   </div>
// )
createRoot(document.getElementById('root')).render(
  <StrictMode>
 {/* {    AnotherElement } */ }
{ reactElement}
   <App />
 
  </StrictMode>


)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Chai />
//   </StrictMode>
// )