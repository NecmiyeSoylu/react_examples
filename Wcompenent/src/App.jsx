import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './login'
import { arr } from './dizin' //buda componentin tamamının değil bir kısmının exo-port edilmesin örneği
//gördiüğün üzere eğere bir compenentin tamamını export ettipğin zaman alta export defoult compenetin_adı yazılır başka sayfaya import ederkende istediğin idmle import edersin
//sadece bir kısmı export edeceğinde fonksiyonun dışında tanımlayıp basına export yazman gerekir import ederlkende {} kullnamallı ve değişkenn kendi adınn kullamarka import etmelisn bu kadr :))
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Login />
      </div>
      <div>
        {
          arr.map((value, index) => (
            <div key={index}>{value.name}</div>
          ))}
      </div>
    </>
  )
}

export default App
