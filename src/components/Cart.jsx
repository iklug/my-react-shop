import { Link } from "react-router-dom";
import CartCard from "./CartCard";
import CheckoutSummary from "./CheckoutSummary";
import { useContext } from "react";
import { ShopContext } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { changeTab } from "../redux/activeTab";




const Cart = () => {

    // const {cart} = useContext(ShopContext);
    // const activeTab = useSelector((state) => state.activeTab.value);
    const cart = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();

    return (
    
    
                <div id="masterDiv" className="flex justify-between"> 
                    <div id="cartCard" className=" w-full">
                        {cart.length === 0 ?
                            <div className="mt-16 flex items-center flex-col gap-8 ">
                             <p className="text-3xl text-green-600">Your cart is empty.</p>
                                <Link to='/browse'><button className="bg-green-100 text-green-900 font-semibold text-md h-16 w-48 rounded-lg border-b-2 border-b-green-600" onClick={()=>dispatch(changeTab('Browse'))} >Start Adding Books</button></Link>
                        </div>
                        :
                        <div>{cart.map(item => <CartCard book={item} key={item.isbn}/>)}</div>}
                    </div>
                   
                    {cart.length > 0 &&
                     <div id="checkoutSummary div" className="mr-10 mt-16">
                    <CheckoutSummary />
                    </div>
                    }
                </div>
    )
}



export default Cart;