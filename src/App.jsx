import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import bookObject from './data/bookObject'
import Header from './components/Header'
function App() {


  return (
    <div className="">
      <Header />
      <div className='pt-32'>
        {bookObject.map(item => <Card book={item} key={item.isbn}/>)}
      </div>
      </div>
  )
}

export default App
