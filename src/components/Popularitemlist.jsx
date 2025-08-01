import React from "react";
import { useNavigate } from "react-router-dom";
import SelectedPopularitem from "../routes/SelectedPopularitem"; // ✅ Correct path based on your folder structure


function Popularitemlist(props) {
   
     const navigate = useNavigate();
     const handleOrder = () => {
        navigate(`/SelectedPopularitem/${props.id}`, { state: props });
     };
    

    return (
        <article className="container flex-col ">
              <div className="w-40 h-35 ">
                <img className="rounded-lg" src={props.snap} alt="Cheese Burger" />
              </div>
              <div className="pt-5">
                <h3 className="font-bold ">{props.dish}</h3>
              </div>
              <div>
                <span className="flex flex-row text-orange-400 "><img src="./icons/map-marker-alt.png" alt="Location icon" />{props.location}</span>
              </div>
              <div>
                <p className="font-bold">${props.price}</p>
              </div>
              <button onClick={handleOrder} className="bg-orange-500 px-5 py-2 text-white rounded-md w-40">Order Now</button>
            </article>
    );
}
export default Popularitemlist;