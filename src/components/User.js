import { useState } from "react";
const User = ({name,location}) =>{
    const [count] = useState(0);
    return(
        <div className = "user-cards">
            <h2>Count : {count}</h2>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
        </div>
    )
}

export default User;