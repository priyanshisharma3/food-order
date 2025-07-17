import React from "react"
import { createRoot } from "react-dom/client"
import './index.css'

const Header = () => {
    return (
        <div className="header">
            <div className="company-logo">
                <img src="https://short-link.me/13ky1" width={150}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
   return(
    <div className="res-card">
        <h3>Meghana Foods</h3>
    </div>
   )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">
                <input type="text" placeholder="Search for any restaurant" className="search-box"/>
                <button className="search">Search</button>
            </div>
            <div className="rest-contain">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header /> 
            <Body/>
        </div>
    )
}

const root = createRoot(document.querySelector('.container'))

root.render(<AppLayout/>)