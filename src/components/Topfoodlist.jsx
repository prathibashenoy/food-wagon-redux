import React from "react";

function Topfoodlist(props) {

    return (

      <article className="flex-col">
              <div>
                <img className="w-60 h-50" src={props.photo} alt="Food pic 1" />
              </div>
              <div className="my-5">
              <h1 className="font-bold text-gray-700">{props.name}</h1>
              </div>
              <div>
                <p className="bg-orange-200 inline px-2 py-1 rounded text-orange-700 font-bold">{props.days}</p>
              </div>           
       </article>
    );
    
}

export default Topfoodlist;
