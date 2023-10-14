import { Link } from "react-router-dom";

const Header = ({activeTab, handleSelection, wishlist, cart}) => {
    return (
     
        <div className="h-20 flex flex-row bg-stone-50 shadow-md fixed w-full justify-between pl-6 pr-8">
            <div className="h-16  flex">
                <div className="h-16 w-16 mt-2 rounded-full bg-stone-50 border-8 border-stone-200 flex items-center justify-center pr-2 select-none">
                    <p className="text-yellow-800 font-bold">SAND</p>
                    <p className="text-3xl font-extrabold mb-1 text-yellow-400">||</p>
                    <p className="text-yellow-800 font-bold">SUN</p>
                </div>
                <div>
                    <ul className="h-16 flex gap-6 pl-10 text-xl text-gray-800 font-semibold items-end select-none">
                        <li className={activeTab === 'Home' ? 'text-green-600' : 'text-gray-800'} onClick={handleSelection}><Link to='/'>Home</Link></li>
                        <li className={activeTab === 'Browse' ? 'text-green-600' : 'text-gray-800'} onClick={handleSelection}><Link to='/browse'>Browse</Link></li>
                    </ul>
                </div>
            </div>
            <div >
            <ul className="h-16 flex gap-4 text-xl justify-end items-end mr-4 font-semibold select-none">
                <li className={activeTab === 'Wishlist' ? 'text-green-600' : 'text-gray-800'} onClick={handleSelection}><Link to='/wishlist'>Wishlist</Link></li>
                {wishlist.length > 0 && <div className="h-4 w-4 rounded-full bg-teal-200 text-purple-800 -ml-5 mb-4 opacity-70 text-xs text-center">{wishlist.length}</div>}

                <li className={activeTab === 'Cart' ? 'text-green-600' : 'text-gray-800'} onClick={handleSelection}><Link to='/cart'>Cart</Link></li>
                {cart.length > 0 && <div className="h-4 w-4 rounded-full bg-teal-200 text-purple-800 -ml-5 mb-4 opacity-70 text-xs text-center">{cart.map(item => item.quantity).reduce((x,y)=>Number(x)+Number(y))}</div>}
            </ul>
            </div>
            
        </div>
    )
}

export default Header;