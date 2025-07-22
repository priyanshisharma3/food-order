import React from "react"
import { createRoot } from "react-dom/client"
import './index.css'
import { resList } from "./restList.js"

const Header = () => {
    return (
        <div className="header">
            <div>
                <img src="https://images-platform.99static.com//Ba6VdSQsbU4OpiyQEzLi7yHy9KQ=/440x521:1494x1575/fit-in/500x500/99designs-contests-attachments/127/127439/attachment_127439993" className="company-logo"/>
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

const RestaurantCard = (props) => {
   return(
    <div className="res-card">
        <div className="img-card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/x4uyxvihmg8qa3pddkgf" alt="food_img" className="res-img"/>
        </div>
        <div className="res-desc">
            <h3>{props.resName}</h3>
            <h4 className="cuisines">{props.cuisines}</h4>
            <h4 className="ratings">{props.ratings}</h4>
            <h4>{props.delTime}</h4>
        </div>
        
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
                <RestaurantCard
                    resName="Meghana Foods"
                    cuisines="Italian, North Indian, Asian"
                    ratings="4.4 stars"
                    delTime="38 minutes"/>
                <RestaurantCard
                    resName="KFC"
                    cuisines="Burger, Pizza, Fries"
                    ratings="4.3 stars"
                    delTime="30 minutes"/>
                <RestaurantCard
                    resName="McD"
                    cuisines="Burger, Drinks, Fries"
                    ratings="4.3 stars"
                    delTime="30 minutes"/>
                <RestaurantCard
                    resName="Dominos"
                    cuisines="Pizza, Drinks, Desserts"
                    ratings="4.5 stars"
                    delTime="15 minutes"/>
                <RestaurantCard
                    resName="Haldirams"
                    cuisines="Pav Bhaji, Punjabi, Chhole Bhature"
                    ratings="4.5 stars"
                    delTime="15 minutes"/>
                {/* <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/> */}
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