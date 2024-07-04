import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'
import ProductionHouse from './Components/ProductionHouse'
import GeneraMovieList from './Components/GeneraMovieList'

function App() {
  return (
    <>
      <Header />

      <Slider />

      <ProductionHouse />

      <GeneraMovieList />
    </>
  )
}

export default App
