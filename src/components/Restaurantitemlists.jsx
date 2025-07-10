import React from "react";

function Restaurantitemlists(props) {

    return (
        <article className="container mx-auto flex-col">
              <div className="w-50 h-40 relative ">
                <img className="rounded-lg object-cover" src={props.foodpic} alt="food world" />
                <div class="absolute top-2 left-2 flex space-x-1">
                <span class="bg-orange-500 text-white text-xs px-2 py-1 rounded flex flex-row"><img src="./icons/discount.png" alt="" />{props.discount}</span>
                <span class="bg-yellow-400 text-white text-xs px-2 py-1 rounded flex flex-row"><img src="./icons/time.png" alt="" />Fast</span>
              </div>
              </div>
              <div className="flex flex-row gap-3 pt-5">
                <img className="w-12 h-12" src={props.icon} alt="" />                
                <div>
                  <p className="font-bold">{props.restname}</p> 
                  <span className='flex flex-row text-yellow-500'><img src="./icons/star.png" alt="" />{props.rating}</span>
                  </div>        
                </div>
                <div className={"mt-1 text-xs  px-2 py-1 rounded inline-block ${props.openingcolor}"}>{props.openingtext}</div>
            </article>
    );
}

export default Restaurantitemlists;