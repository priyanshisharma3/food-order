import React from "react"
import { createRoot } from "react-dom/client"
import './index.css'
import { resList } from "./restList"

const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

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
        const { avgRating,
                name,
                veg } = props.resList?.data 
   return(
    <div className="res-card">
        <div className="img-card">
            <img
                src={CDN_URL + props.resList.data.cloudinaryImageId}
                alt={props.resList.data.name}
                className="res-img"
                />
        </div>
        <div className="res-desc">
            <h3>{name}</h3>

            <h4 className="discounts">{props.resList.data?.aggregatedDiscountInfoV2?.descriptionList[0]?.meta || "No discounts today"}</h4>

            <div className="food-info">
                 <h4 className="ratings">{avgRating} stars</h4>
                {
                    veg === false ? (
                        <div id="non-veg"></div>
                    ) : (
                        <div id="veg"></div>
                    )
                }
            </div>

            <h4 className="costForTwo">Cost for two: ₹{props.resList.data.costForTwo / 100}</h4>
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
                {resList.map((restaurant) => (
                        <RestaurantCard
                        key={restaurant.data.id || index}
                        resList={restaurant}
                        />
                    ))}
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