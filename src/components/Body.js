import resList from "../../utils/restList";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

    const [listOfRest, filterList] = useState(resList);
    
    return (
        <div className="body">
            <div className="search-bar">
                <input type="text" placeholder="Search for any restaurant" className="search-box"/>
                <button className="search">Search</button>
                <button className="filter-1" onClick={() => {
                    const setList = listOfRest.filter(
                        (res) => res.data.avgRating > 4
                    )
                    filterList(setList)
                }}>Top Rated</button>
            </div>
            <div className="rest-contain">
                {listOfRest.map((restaurant) => (
                        <RestaurantCard
                        key={restaurant.data.id || index}
                        resList={restaurant}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Body;