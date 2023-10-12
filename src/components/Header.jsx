
const Header = () => {
    return (
     
        <div className="flex flex-row bg-stone-50 shadow-md mb-12 fixed w-full">
            <div className="h-24  flex">
                <div>ICON</div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Browse</li>
                    </ul>
                </div>
            </div>
            <div className="flex">
            <ul>
                <li>Wishlist</li>
                <li>Cart</li>
            </ul>
            </div>
            
        </div>
    )
}

export default Header;