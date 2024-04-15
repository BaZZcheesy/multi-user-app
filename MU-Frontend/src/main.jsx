import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Person from './Person.jsx'
import './index.css'

const data = {
  name: "Max Muster",
  hobbies: ["surf", "eat", "sleep"]
}

const root = document.getElementById("root")

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Person person={data} />
    <App />
  </React.StrictMode>,
)
