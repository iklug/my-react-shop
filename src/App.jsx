import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import bookObject from './data/bookObject'
import Header from './components/Header'
import Homepage from './components/Homepage'
import { Route, Routes } from 'react-router-dom'


function App() {

  const [activeTab, setActiveTab] = useState(null)

const handleSelection = (e) => {
  const selection = e.target.textContent;
  selection === 'Start Exploring' ? setActiveTab('Browse') : setActiveTab(selection);

}

  return (

    <div>
      <Header activeTab={activeTab} handleSelection={handleSelection} />
      <div className='pt-32 overflow-hidden'>
      <Routes>
          <Route path='/' element={<Homepage handleSelection={handleSelection} />}/>
          <Route path='/browse' element={bookObject.map(item=><Card book={item} key={item.isbn}/>)}/>  
          <Route path='*' element={<Homepage />} />      
      </Routes>
        </div>
    </div>
  )
}

export default App
