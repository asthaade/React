import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
//import About from './components/About';
import Body from './components/Body';
import Contact from './components/Contact';
import Error from './components/Error';
//import Grocery from './components/Grocery';
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import Header from './components/Header';
import RestaurantsMenu from './components/RestaurantsMenu';
import appStore from "./utils/appStore";
import UserContext from "./utils/userContext";

const Grocery = lazy(()=> import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));

const AppLayout =()=>{
    const [userName, setUserName] = useState();

    useEffect(()=>{
        const data = {
            name :"Astha Ade"
        }
        setUserName(data.name);
    },[])

    return(
        <Provider store = {appStore}>
        <UserContext.Provider value = {{loggedInUser: userName, setUserName}}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <AppLayout/>,
        children :[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:(
                    <Suspense fallback = {<h2>loading.......</h2>}><About/></Suspense>
                ),
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/grocery',
                element:(
                    <Suspense fallback = {<h2>loading.......</h2>}><Grocery/></Suspense>
                ),
            },
            {
                path:'/restaurants/:resId',
                element:<RestaurantsMenu/>
            },
            {
                path : '/cart',
                element:<Cart/>
            }
        ],
        errorElement:<Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router = {appRouter} />);