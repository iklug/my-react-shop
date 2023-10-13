import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import bookObject from './data/bookObject'
import Header from './components/Header'
import Homepage from './components/Homepage'
function App() {


  return (
    <div className="">
      <Header />
      <div className='pt-32 overflow-hidden'>
        <Homepage/>
        {/* {bookObject.map(item => <Card book={item} key={item.isbn}/>)} */}
      </div>
      </div>
  )
}

export default App
