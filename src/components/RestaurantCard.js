import { useContext } from 'react';
import { CDN_URL } from '../utils/constants';
import UserContext from '../utils/userContext';
const RestaurantCard = (props) =>{
    const {resData} = props;

    const {loggedInUser} = useContext(UserContext);
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
    } = resData?.info;
    return (
        <div className = "p-4 m-4 w-[280px] bg-gray-100 rounded-lg hover:bg-gray-200">
            <img  className="rounded-lg"
            alt="res-logo"
            src= {CDN_URL + resData.info.cloudinaryImageId
            }
            />
            <h3 className = "font-bold py-4 px -4 text-lg">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString}</h4>
            <h4 className = "font-bold"> User: {loggedInUser}</h4>
            <div></div>
        </div>

    )
};

export default RestaurantCard;