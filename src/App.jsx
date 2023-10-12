import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import bookObject from './data/bookObject'

function App() {


  return (
    <>
      <Card />
      <img src={`https://covers.openlibrary.org/b/isbn/${bookObject[3].isbn}-M.jpg`}></img>
    </>
  )
}

export default App
