import { Link } from "react-router-dom";
import CartCard from "./CartCard";
import CheckoutSummary from "./CheckoutSummary";
const Cart = ({cart, changeCart}) => {


    return (
    
    
                <div id="masterDiv" className="flex justify-between"> 
                    <div id="cartCard" className=" w-full">
                        {cart.length === 0 ?
                            <div className="mt-16 flex items-center flex-col gap-8 ">
                             <p className="text-3xl text-green-600">Your cart is empty.</p>
                                <Link to='/browse'><button className="bg-green-100 text-green-900 font-semibold text-md h-16 w-48 rounded-lg border-b-2 border-b-green-600">Start Adding Books</button></Link>
                        </div>
                        :
                        <div>{cart.map(item => <CartCard book={item} cart={cart} changeCart={changeCart}/>)}</div>}
                    </div>
                   
                    {cart.length > 0 &&
                     <div id="checkoutSummary div" className="mr-10 mt-16">
                    <CheckoutSummary cart={cart} />
                    </div>
                    }
                </div>
    )
}



export default Cart;