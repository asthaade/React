import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from "../utils/userContext";
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';


const Body = () =>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants , setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText]  = useState("");
    //console.log("Body Rendered");

    const {loggedInUser,setUserName } = useContext(UserContext);
    useEffect(()=>{
        fetchData();
    },[])

    
    const fetchData = async() =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6451559&lng=75.8335843&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        //console.log(json);
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
    }
    //console.log(listOfRestaurants.length);

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>Looks like you're offline pls check your internet connection</h1>
    if (listOfRestaurants.length === 0) {
        return <Shimmer/>;
    }
    return (
        <div className = "body">
            <div className ="filter flex">
                <div className = "search m-4 p-4">
                    <input
                    type="text"
                    className="border border-black"
                    value={searchText}
                    onChange = {(e) =>{
                        setSearchText(e.target.value);
                    }}
                    />
                    <button className = "px-4 py-2 bg-green-100 m-4 rounded-lg hover:bg-green-200"
                    onClick = {() =>{
                        const filteredRestaurant = listOfRestaurants.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestaurants(filteredRestaurant);
                    }}
                    >Search</button>
                </div>
                <div className = "search m-4 p-4 flex items-center">
                <button className = "px-2 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setListOfRestaurants(filteredList);
                }}
                > Top Rating Restaurants
                </button>
                </div>
                <div className = "search m-4 p-4 flex items-center">
                    <label>UserName: </label>
                    <input
                    className= "border border-black m-2"
                    value = {loggedInUser}
                    onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
            </div>
            <div className = "flex flex-wrap">
                {filteredRestaurants.map((restaurant) =>(
                    <Link
                    key = {restaurant.info.id}
                    to = {"/restaurants/" + restaurant.info.id}
                    ><RestaurantCard resData = {restaurant}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Body;