import { useState } from 'react'
import './App.css'
import Product from './Product'
import Container from './Container'
function App() {


  return (
    <>
      {/* <Product productName="Hair Cream" price={195} ></Product>
      <hr></hr>
      <Product productName="Hair Oil" price={90} ></Product>
      <hr></hr>
      <Product productName="Hair Cream" price={195} ></Product> */}

      <Container>
        <Product productName="hat" price={70} />
        <Product productName="t-shirt" price={350} />
      </Container>
    </>
  )
}

export default App
