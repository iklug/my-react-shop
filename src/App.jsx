import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import bookObject from './data/bookObject'
import Header from './components/Header'
import Homepage from './components/Homepage'
import { Route, Routes } from 'react-router-dom'
import Wishlist from './components/Wishlist'
import Cart from './components/Cart'
import { createContext } from 'react'
import { useDispatch, useSelector } from "react-redux";



export const ShopContext = createContext({
  cart: [],
  wishlist: [],
  activeTab: null,
  addToCart: ()=>{},
  changeCart: ()=>{},
  addToWishlist: ()=>{},

});


function App() {


  const wishlist = useSelector((state) => state.wishlist.value);
  const dispath = useDispatch();

  // const [activeTab, setActiveTab] = useState(null)
  // const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);


const addToCart = (item) => {
  const inCart = cart.find(x => x.title === item.title);
  inCart ? setCart(cart.map(cartItem => cartItem.title === item.title ? {...inCart, quantity: inCart.quantity + 1} : cartItem)) 
  : setCart(prev => [...prev, {...item, quantity: 1 }]);
  
}

const changeCart = (item) => {
  setCart(cart.map(cartItem => cartItem.title === item.title ? {...item, quantity: event.target.value} : cartItem))
  console.log(event.target.value)
}


// const addToWishlist = (item) => {
  
//   event.target.textContent === 'On Wishlist' ? console.log('sorry, already in wishlist') :
//   setWishlist(prev => [...prev, item]);
// }

const createPayload = (item, event) => {
  console.log(event.target.value);
  console.log(item.title);
}



  return (

    <div>
      <Header 
      // handleSelection={(e)=>{e.target.textContent === 'Start Exploring' 
      // ? setActiveTab('Browse') : setActiveTab(e.target.textContent)}}
      />
      <div className='pt-32 overflow-hidden'>
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/browse' element={bookObject.map(item=><Card book={item} key={item.isbn} inWish={wishlist.filter(thing => thing.title === item.title).length > 0}/>)}/> 
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/cart' element={<Cart cart={cart} addToCart={addToCart} changeCart={changeCart}/>}/>  
          <Route path='*' element={<Homepage />} />      
      </Routes>
        </div>
    </div>

  )
}

export default App
