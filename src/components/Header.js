import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/userContext';

const Header = ()=>{
    const [btnNameReact , setBtnNameReact] = useState('Login');

    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    //Subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items);
    //console.log(cartItems);


    return(
        <div className = "flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50">
            <div className ="logo-container">
                <img
                className="w-56"
                src= {LOGO_URL}/>
            </div>
        <div className="flex items-center">
            <ul className = "flex p-4 m-4">
                <li className = "m-4">Online Status: {onlineStatus ? "✅": "🔴"}</li>
                <li className = "m-4">
                <Link to ='/'>Home</Link></li>
                <li className = "m-4">
                    <Link to = '/about'>About Us</Link></li>
                <li className = "m-4">
                    <Link to = '/contact'>Contact Us</Link></li>
                <li className = "m-4">
                    <Link to = '/grocery'>Grocery</Link></li>
                <li className = "m-4 font-bold ">
                    <Link to = '/cart'>Cart ({cartItems.length} items)</Link></li>
                <button
                className="login"
                onClick = {() => {
                    btnNameReact === "Login"
                    ? setBtnNameReact("Logout")
                    : setBtnNameReact("Login");
                }}>
                    {btnNameReact}
                </button>
                <li className = "m-4">{loggedInUser}</li>
            </ul>
        </div>
        </div>
    )
};

export default Header;