import resList from "../../utils/restList";
import RestaurantCard from "./RestaurantCard";

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

export default Body;