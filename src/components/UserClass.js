import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                name : "Default ",
                location : "Default",
                avatar_url:"https://dummy",
            }
        }
        //console.log(this.props.name + " Constructor Called");
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/asthaade");
        const json = await data.json();

        this.setState({
            userInfo:json,
        })
        //console.log(json);
    }

    componentDidUpdate(){
        //console.log('component Updated');
    }

    componentWillUnmount(){
        //console.log('component will Unmounted');
    }
    render(){
        const {name,location,avatar_url} = this.state.userInfo;
        
        //console.log( this.props.name + " Rendered ");
        return(
            <div>
                <img src = {avatar_url}/>
                <h2>Name : {name}</h2>
                <h3>Location : {location} </h3>
                <h4>Contact : @asthaade </h4>
            </div>
        )
    }
}

export default UserClass;