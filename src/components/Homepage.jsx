import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../redux/activeTab";

const Homepage = () => {

const activeTab = useSelector((state) => state.activeTab.value);
const dispatch = useDispatch();

    return (
    <div className="">
        <div>
            <div className="text-4xl font-bold text-gray-800 ml-6">Worlds beyond measure await..</div>
            <div className="pt-2 ml-10 text-2xl text-green-600 font-semibold">Turn the page, discover your destiny.</div>
            <Link to='/browse'><button className="h-16 w-48 mt-10 ml-16 text-xl shadow-md bg-green-700 text-stone-100 rounded-md " onClick={()=>dispatch(changeTab('Browse'))}>Start Exploring</button></Link>
        </div>
<div className="w-full h-128 flex overflow-y-hidden">
    
            <img className="-ml-24 -mb-16" src="../public/images/iron.png" alt="did not work" />
            <img className="-mr-32" src="../public/images/steel.png" alt="did not work" />

</div>

    </div>
    )
}

export default Homepage;