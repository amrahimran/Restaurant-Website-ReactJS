import React,{useState} from "react";
import { FaBars,FaSearch,FaShoppingCart,FaTimes,FaTruck,FaHeart,FaWallet,FaQuestionCircle,FaTag,FaStar,FaUsers} from 'react-icons/fa';

const Navbar = () => {
    const[nav,setNav]=useState(false);

    return ( <div className=" max-w-[1300px] mx-auto flex justify-between items-center px-4 py-2">
        <div className='flex items-center'>
            <div onClick={()=>setNav(!nav)} className="cursor-pointer">
            <FaBars size={30}></FaBars>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2" >
                Best<span className="font-bold">Eats</span>
            </h1>
            <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] mr-[15%]" >
                <p className="bg-black text-white p-2 rounded-full">Delivery</p>
                <p className="p-2">Pickup</p>
            </div>
            <div className="bg-gray-200 flex items-center px-2 rounded-full w-[200px] sm:w-[400px]  lg:w-[600px] mr-[10%] ">
            <FaSearch size={25}></FaSearch>
            <input 
            className="bg-transparent w-full focus:outline-none p-2" 
            type="text" 
            placeholder="Search items here"/>
            </div>
            <button className="bg-black rounded-full text-white hidden md:flex items-center p-2  ">
                <FaShoppingCart size={20} className="mr-2"></FaShoppingCart>Cart
            </button>

            {/* Mobile Menu */}
            {/* Overlay */}
            {nav? <div className=" fixed top-0 left-0 z-10 h-screen w-full bg-black/80"></div> : ''} 

            {/* JS template used above. only if nav is true, the overlay is visible. this is simple to the && conditional template we used in the Dojo's Blog Project. */}
            

            {/* Side-drawer Menu */}
            {/* <div className="fixed top-0 left-0 h-screen w-[300px] bg-white z-10 duration-300"> */}
            <div className={nav? 'fixed top-0 left-0 h-screen w-[300px] bg-white z-10 duration-300': 'fixed top-0 left-[-100%] h-screen w-[300px] bg-white z-10 duration-300'}>
                <FaTimes onClick={()=>setNav(!nav)} size={20} className="absolute top-4 right-4"></FaTimes>
                <h2 className="text-2xl p-4" >
                Best<span className="font-bold">Eats</span>
            </h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='flex text-xl py-4'><FaTruck size={25}className="mr-4"></FaTruck>Orders</li>
                    <li className='flex text-xl py-4'><FaHeart size={25}className="mr-4"></FaHeart>Favorites</li>
                    <li className='flex text-xl py-4'><FaWallet size={25}className="mr-4"></FaWallet>Wallet</li>
                    <li className='flex text-xl py-4'><FaQuestionCircle size={25}className="mr-4"></FaQuestionCircle>Help</li>
                    <li className='flex text-xl py-4'><FaTag size={25}className="mr-4"></FaTag>Promotions</li>
                    <li className='flex text-xl py-4'><FaStar size={25}className="mr-4"></FaStar>Best Ones</li>
                    <li className='flex text-xl py-4'><FaUsers size={25}className="mr-4"></FaUsers>Invite Friends</li>
                </ul>
            </nav>
            </div>
        </div>

    </div> );
}
 
export default Navbar;