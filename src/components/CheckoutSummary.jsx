import { useContext, useState } from "react";
import { useMemo } from "react";
import { ShopContext } from "../App";
import { useSelector } from "react-redux";




const CheckoutSummary = () => {

const cart = useSelector((state) => state.cart.value);


// const {cart} = useContext(ShopContext);

const amount = useMemo(()=> { return cart.map(x => x.quantity).reduce((x,y)=> Number(x)+Number(y))}, [cart]);



const cost = cart.map(x => x.price * x.quantity).reduce((x,y)=>x+y).toFixed(2);
const tax = (cost * .08).toFixed(2);


const [purchase, setPurchase] = useState(false);


    return (
        <>
         <div className="flex-col flex w-80 h-40 bg-zinc-50 gap-3 p-4 shadow-sm text-zinc-800">
        <div className="flex justify-between font-bold border-b border-slate-200">
            <p>Order summary</p>
            <p>{amount + ' item(s)'}</p>
            
        </div>
        <div className="flex justify-between">
            <p>Items subtotal</p>
            <p>{'$'+cost}</p>
        </div>
        <div className="flex justify-between">
            <p>Estimated Tax</p>
            <p>{'$'+tax}</p>
        </div>
        <div className="flex justify-between font-bold border-t border-slate-200">
            <p>Order total</p>
            <p>{`$${(Number(tax) + Number(cost)).toFixed(2)}`}</p>
        </div>
    </div>
    <div className="flex justify-center mt-5">
    <button className="bg-blue-600 text-zinc-50 h-12 w-48 text-md rounded-md m-auto" onClick={()=>setPurchase(!purchase)}>Checkout</button>

    

    </div>
    {purchase && 
        <div>beep boop lol</div>
    }
        </>
    )
}

export default CheckoutSummary;