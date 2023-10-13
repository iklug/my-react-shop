
const Header = () => {
    return (
     
        <div className="h-20 flex flex-row bg-stone-50 shadow-md fixed w-full justify-between pl-6 pr-8">
            <div className="h-16  flex">
                <div className="h-16 w-16 mt-2 rounded-full bg-stone-50 border-4 border-stone-200 flex items-center justify-center pr-2 select-none">
                    <p className="text-yellow-800 font-semibold">SAND</p>
                    <p className="text-3xl text-yellow-400">||</p>
                    <p className="text-yellow-800 font-semibold">SUN</p>
                </div>
                <div>
                    <ul className="h-16 flex gap-6 pl-10 text-xl text-green-800 font-semibold items-end select-none">
                        <li>Home</li>
                        <li>Browse</li>
                    </ul>
                </div>
            </div>
            <div >
            <ul className="h-16 flex gap-4 text-xl justify-end items-end">
                <li className="text-green-800 font-semibold select-none">Wishlist</li>
                <li className="text-green-800 font-semibold select-none">Cart</li>
            </ul>
            </div>
            
        </div>
    )
}

export default Header;