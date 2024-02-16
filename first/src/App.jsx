import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let mid = 30
  let fin = 90
  let arr = [
    "hasan sabbah",
    "nizam ulmulk",
    "cengiz han"
  ]
  return (
    <div>
      {
        (mid * 0.40 + fin * 0.60) / 2 <= 50 ? <p>passed</p> : <p>fail</p>
      }
      {
        arr.map((name, index) => (
          <div style={{ border: "1px solid black", backgroundColor: "orange" }} key={index}>{name} </div>
        ))
      }
    </div>
  )
}

export default App
