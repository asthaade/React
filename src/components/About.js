import { Component } from 'react';
import UserContext from '../utils/userContext';
import UserClass from "./UserClass";

class About extends Component{
    constructor(props){
        super(props);
        //console.log("Parent Constructor");
    }

    componentDidMount(){ // this is use to make an API call
        //console.log("Parent Component did Mounted");
    }
    render(){
        //console.log("Parent Render");
    return (
        <div>
            <h2>About Class Component</h2>
            <div>
                <UserContext.Consumer>
                    {({loggedInUser})=>(
                        <h1 className = "text-xl font-bold" >{loggedInUser}</h1>
                    )}
                </UserContext.Consumer>
            </div>
            <h3>This is Namaste React Series</h3>
            <UserClass name = {"Astha "} location = {"Indore"}/>
        </div>
    )
}
}

export default About;
