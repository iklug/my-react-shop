import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { changeTab } from "../redux/activeTab";


const Wishlist = () => {

const wishlist = useSelector((state)=>state.wishlist.value);
const dispatch = useDispatch();
    // const {wishlist} = useContext(ShopContext)
    // const [showX, setShowX] = useState(false);


    return (
<div className="flex flex-wrap gap-6 justify-center">
    
            
            {wishlist.length > 0 ? 
            wishlist.map(item => 
            <img className="w-60" src={`https://covers.openlibrary.org/b/isbn/${item.isbn}-L.jpg`} key={item.title}></img>)
            :<div className="mt-16 flex items-center flex-col gap-8">
                 <p className="text-3xl text-green-600">Your wishlist is empty.</p>
                    <Link to='/browse'><button className="bg-green-100 text-green-900 font-semibold text-md h-16 w-48 rounded-lg border-b-2 border-b-green-600" onClick={()=>dispatch(changeTab('Browse'))}>Start Adding Books</button></Link>
            </div>
            }
    
</div>   
    )
}



export default Wishlist;