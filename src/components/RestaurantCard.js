import {CDN_URL} from "../../utils/constants";

const RestaurantCard = (props) => {
        const { avgRating,
                name,
                veg,
                costForTwo,
                cloudinaryImageId } = props.resList?.data 
   return(
    <div className="res-card">
        <div className="img-card">
            <img
                src={CDN_URL + cloudinaryImageId}
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

            <h4 className="costForTwo">Cost for two: ₹{costForTwo / 100}</h4>
        </div>
    </div>
   )
}

export default RestaurantCard;