import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Demo from './Demo.jsx'

const data = {
  name: "Max Muster",
  hobbies: ["surf", "eat", "sleep"]
}

const clickFun = () => {
  console.log("Clickfun clicked")
}

const root = document.getElementById("root")

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Demo p1="Salam" person={data} fun={clickFun}/>
    <App />
  </React.StrictMode>,
)
