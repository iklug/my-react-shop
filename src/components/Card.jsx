
import { useState, memo } from "react";

const Card = ({book, addToCart, addToWishlist, wishlist, inWish})=>{





const handleChange = () => {
    addToWishlist(book);
}




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
                    <button className="h-12 w-32 text-lg font-semibold shadow-sm bg-green-700 text-stone-200 rounded-lg" onClick={()=>addToCart(book)}>Add to Cart</button>
                    <button className="text-green-800 ml-2"onClick={handleChange}>{inWish ? 'On Wishlist' :"Want to read"}</button>
                </div>
                
            </div>
        </div>
    )
}

export default Card;