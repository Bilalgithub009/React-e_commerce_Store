import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, Badge } from "antd";
import { signOut } from "firebase/auth/cordova";
import {auth} from '../utilis/firebase';  
import { ShopOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import {message} from 'antd';
import { CartContext } from "../Context/CartContext";
import AuthContextProvider, { AuthContext } from "../Context/AuthContext";
// import { auth } from "../utilis/firebase";
// import  Auth from './Navbar';


export function Navbar({searchProductsFunc, searchProducts, selectedCategoryFunc, selectedCategory, category}) 
 {


// Navbar Toggler
const [isOpen, setIsOpen] = useState(false);
const toggleNavbar = () => {
    setIsOpen(!isOpen);
};

// get user with the help of AuthContext
const { user , setuser} = useContext(AuthContext)
console.log("user",user);

//logout function
const logoutUser = async()=>{
  await signOut(auth)
  message.success('Logout Successfully')
}

//show cart length on badge.
const {cartItems} = useContext(CartContext)

    return(
     <>
       {/* Navbar Start */}
         <nav className="navbar  flex top-full items-center flex-wrap justify-between px-5 py-3 border border-b-gray-400">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to={"/"}><span className="nav-heading font-bold text-3xl "><Link to={'/dashboard'}>Bilal E Commerce Store</Link> <ShopOutlined></ShopOutlined></span></Link>
        </div>
  
        {/* Toggler button */}
        <button
          onClick={toggleNavbar}
          className="lg:hidden px-3 py-2 text-white shadow-black hover:drop-shadow-xl"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
   
        {/* Main Div ⬇*/}
        <div className={`p-2 w-full lg:flex lg:items-center lg:w-auto transition-transform duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} lg:max-h-none lg:opacity-100`}>
          <div className="navInputs flex flex-col lg:flex-row lg:items-center lg:justify-end gap-5 text-sm lg:flex-grow">
            <input
              className="font-semibold p-2 w-64 rounded-md focus:outline-none focus:drop-shadow-lg placeholder:text-gray-500"
              type="text"
              value={searchProducts}
              onChange={searchProductsFunc}
              placeholder="Search Products"
            />
  
            <select
              value={selectedCategory}
              onChange={selectedCategoryFunc}
              className="font-semibold text-gray-500 p-2 w-64 rounded-md focus:outline-none focus:drop-shadow-lg">
              <option className="font-semibold" value="Select Category" disabled>
                Select Category
              </option>
              <option className="font-semibold" value="">
                All Products
              </option>
              {category.map((value, index) => ( 
                <option value={value} key={index}>
                  {value[0].toUpperCase() + value.slice(1)}  {/* value get karke first latter upperCase kia h. */}
                </option>
              ))}
            </select>
          </div>

          {/* cart icon from ant design */}
          <Link to="/Cart">
           <div className="cartIcon">
             <Badge count={cartItems.length} className="ml-5 mr-2">
             <ShoppingCartOutlined className="text-3xl text-white cursor-pointer">
             </ShoppingCartOutlined>
             </Badge>
           </div>
          </Link>

          {/* login/logout button & avatar ⬇*/}
            {user?.isLogin
             ?
             <>
             <div className="btnOrAvatarDiv">
              <Link to={"/Signin"}>
               <button 
               className="bg-white ml-5 mr-5 text-blue-600 text-md font-semibold p-1.5 w-24 hover:font-bold rounded-md"
               onClick={logoutUser}
               >Logout</button>
              </Link>
              <Avatar 
              src={user?.userInfo?.photoUrl} 
              style={{ backgroundColor: '#3a47d5', cursor: 'pointer' }} 
              icon={<UserOutlined/>} 
              />
              </div>
             </>
            :
            <>
            <div className="btnOrAvatarDiv">
              <Link to={"/Signin"}>
                <button className="bg-white ml-5 text-blue-600 text-md font-semibold p-1.5 w-24 hover:font-bold rounded-md">Signin</button>
              </Link>

              <Link to={"/Signup"}>
                <button className="bg-white ml-5 text-blue-600 text-md font-semibold p-1.5 w-24 hover:font-bold rounded-md">Signup</button>
              </Link>
            </div>
            </>
            }
          {/* login/logout button & avatar ⬆*/}
        </div>
        {/* Main Div ⬆ */}

      </nav>
      {/* Navbar End */}
   </>
 )
}


export default Navbar;