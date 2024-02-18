import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log("the companenet is rendered")//hocam gördüğün gibi sadece bir statein değerini değiştirdiğinde dahi tüm companent baştan render edeilir tüm kodlar çalıştırılır
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Hasan")
  const [surname, setSurname] = useState("Sabbah")
  const change = () => {
    setName("Necmiye")
    setSurname("Soylu")
    setShow(true)
  }
  const increase = () => {
    setCount(count + 1)
  }
  const [show, setShow] = useState(false)
  const [userInfo, setUserInfo] = useState({ username: "necmiyesoylu", password: 1234 })
  const [arr, setArr] = useState(["Ankara", "İstanbul", "Antalya", "Muş"])
  return (
    <>
      <div>
        {name} {surname}
      </div>
      <div>
        {/* <button onClick={() => { setName("Necmiye"), setSurname("Soylu") }}>change</button> */}
        <button onClick={change}>change</button>
        {/* iki yötem var işte :)) */}
      </div>
      <div>
        {show ? <div>{userInfo.username} : {userInfo.password}</div> : <div>secret</div>}
      </div>
      <div>
        {arr.map((e, itr) => (<div key={itr}>{e}</div>))}
      </div>
      <div>
        {count}
        <button onClick={increase}>increase</button>
      </div>
    </>
  )
}

export default App
