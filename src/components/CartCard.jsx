
import { useState, memo, useMemo, useContext } from "react";
import { ShopContext } from "../App";

const CartCard = ({book})=>{

const {cart, changeCart} = useContext(ShopContext);


    const handleChange = (event) => {
        setQuantity(event.target.value);

    }

    return (
        <div className="h-40 ml-8 border-b-2 border-slate-100 flex gap-4 justify-start items-center overflow-scroll">
            <img src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`} alt="" className="w-20" />
            <div className="flex gap-8">
                <div>
                    <h1 className="font-bold text-lg">{book.title}</h1>
                    <p className="text-sm italic">{'by ' + book.author}</p>
                    
                </div>
                
                <div className="flex flex-col items-start gap-3">
                <p className="text-xl font-bold ml-2">${book.price}</p>
                  
                    <button className="text-green-800 ml-2"onClick={handleChange}>{'Remove from cart'}</button>
                    </div>
                    <div className="flex-col flex gap-2">
                        <label htmlFor="quantity" className="italic font-thin text-sm">Quantity</label>
                        <select name="Quantity" value={book.quantity} onChange={()=>changeCart(book)} id="quantity" className="border border-stone-200">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                </div>
                
            </div>
       
    )
}

export default CartCard;