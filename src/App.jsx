import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import bookObject from './data/bookObject'

function App() {


  return (
    <div className="w-4/5 m-auto">
    {bookObject.map(item => <Card book={item}/>)}
    </div>
  )
}

export default App
