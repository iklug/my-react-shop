import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import bookObject from './data/bookObject'
import Header from './components/Header'
import Homepage from './components/Homepage'
import { Route, Routes } from 'react-router-dom'
import Wishlist from './components/Wishlist'
import Cart from './components/Cart'

function App() {

  const [activeTab, setActiveTab] = useState(null)
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

const handleSelection = (e) => {
  const selection = e.target.textContent;
  selection === 'Start Exploring' ? setActiveTab('Browse') : setActiveTab(selection);
}


const addToCart = (item) => {
  const inCart = cart.find(x => x.title === item.title);
  inCart ? setCart(cart.map(cartItem => cartItem.title === item.title ? {...inCart, quantity: inCart.quantity + 1} : cartItem)) 
  : setCart(prev => [...prev, {...item, quantity: 1 }]);
  
}

const changeCart = (item) => {
  setCart(cart.map(cartItem => cartItem.title === item.title ? {...item, quantity: event.target.value} : cartItem))
  console.log(event.target.value)
}

const addToWishlist = (item) => {
  
  event.target.textContent === 'On Wishlist' ? console.log('sorry, already in wishlist') :
  setWishlist(prev => [...prev, item]);
}





  return (

    <div>
      <Header 
      activeTab={activeTab}
      wishlist={wishlist} 
      cart={cart} 
      handleSelection={handleSelection} 
      />
      <div className='pt-32 overflow-hidden'>
      <Routes>
          <Route path='/' element={<Homepage handleSelection={handleSelection} />}/>
          <Route path='/browse' element={bookObject.map(item=><Card book={item} key={item.isbn} addToCart={addToCart} addToWishlist={addToWishlist} wishlist={wishlist} inWish={wishlist.filter(thing => thing.title === item.title).length > 0}/>)}/> 
          <Route path='/wishlist' element={<Wishlist wishlist={wishlist}/>}/>
          <Route path='/cart' element={<Cart cart={cart} addToCart={addToCart} changeCart={changeCart}/>}/>  
          <Route path='*' element={<Homepage />} />      
      </Routes>
        </div>
    </div>
  )
}

export default App
