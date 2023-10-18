
import { useState, memo, useContext } from "react";
import { ShopContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/wishlist";
import { addToCart } from "../redux/cart";


const Card = ({book, inWish})=>{

// const {addToCart, addToWishlist} = useContext(ShopContext);

const wishlist = useSelector((state) => state.wishlist.value);
const cart = useSelector((state)=>state.cart.value);
const dispatch = useDispatch();




    return (
        <div className="h-72 border-b-2 border-slate-100 flex gap-4 justify-start ml-28 items-center overflow-scroll">
            <img src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`} alt="" className="h-60" />
            <div className="flex flex-col gap-8 justify-center">
                <div>
                    <p className='font-thin text-xs'>{book.series}</p>
                    <h1 className="font-bold text-lg">{book.title}</h1>
                    <p className="text-md italic">{'by ' + book.author}</p>
                </div>
                
                <div className="flex flex-col items-start gap-3">
                <p className="text-2xl font-bold ml-2">${book.price}</p>
                    <button className="h-12 w-32 text-lg font-semibold shadow-sm bg-green-700 text-stone-200 rounded-lg" onClick={()=>{dispatch(addToCart(book))}}>Add to Cart</button>
                    <button className="text-green-800 ml-2"onClick={()=>{dispatch(add(book))}}>{inWish ? 'On Wishlist' :"Want to read"}</button>
                </div>
                
            </div>
        </div>
    )
}

export default Card;