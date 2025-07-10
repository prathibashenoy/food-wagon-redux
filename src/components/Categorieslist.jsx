import React from "react";

function Categorieslist(props) {

    return (
        <article className="flex flex-col">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-md border-2">            
              <img  src={props.image} className="w-full h-full object-cover"  alt="" />                              
              </div>
              <div className="flex items-center py-5 pl-4">
                <p>{props.name}</p>
              </div>
               
              
        </article> 
    );
}

export default Categorieslist;