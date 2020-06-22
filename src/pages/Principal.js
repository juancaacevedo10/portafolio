import React from 'react'
import Header from '../components/Header'
import Presentacion from '../components/Presentacion'
import Carrusel from '../components/Carrusel'
import Footer from '../components/Footer'

export default function Principal () {
  return (
    <div>
      <Header></Header>
      <Presentacion></Presentacion>
      <Carrusel></Carrusel>
      <Footer></Footer>
    </div>
  )
}
