import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import bookObject from './data/bookObject'
import Header from './components/Header'
import Homepage from './components/Homepage'
function App() {

  const [activeTab, setActiveTab] = useState(null)

const handleSelection = (e) => {
  const selection = e.target.textContent;
  setActiveTab(selection)

}

  return (
    <div className="">
      <Header activeTab={activeTab} handleSelection={handleSelection} />
      <div className='pt-32 overflow-hidden'>
        <Homepage/>
        {/* {bookObject.map(item => <Card book={item} key={item.isbn}/>)} */}
      </div>
      </div>
  )
}

export default App
