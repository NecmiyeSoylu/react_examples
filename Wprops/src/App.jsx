import { useState } from 'react'
import './App.css'
import Product from './Product'
function App() {


  return (
    <>
      <Product productName="Hair Cream" price={195} ></Product>
      <hr></hr>
      <Product productName="Hair Oil" price={90} ></Product>
      <hr></hr>
      <Product productName="Hair Cream" price={195} ></Product>
    </>
  )
}

export default App
