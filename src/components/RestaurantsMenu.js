import { useState } from "react";
import { useParams } from "react-router";
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";

const RestaurantsMenu = () =>{
    const [showIndex , setShowIndex] = useState(0);
    const {resId}  = useParams();

    const resInfo = useRestaurantMenu(resId);

    //const resInfo = useRestaurantMenu(resId);
    if(resInfo === null)return <Shimmer/>;

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    const categories =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
                c.card?.['card']?.['@type'] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
       // console.log(categories);
    return (
        <div className ="text-center">
            <h2 className = "font-bold my-6 text-2xl ">{name}</h2>
            <p className = "font-bold text-lg">
            {cuisines.join(',')} - {costForTwoMessage}
            </p>
            {/* category accordian*/ }
            {categories.map((category,index) =>(
                <RestaurantCategory
                key = {category?.card?.card.title}
                data = {category?.card?.card}
                showItems = {index === showIndex ? true : false}
                setShowIndex = {() => setShowIndex(index === showIndex ? null : index)}
                />
            ))}
        </div>
    )
    console.log(cardData);
}

export default RestaurantsMenu;