import React from "react";

function Topiconlist(props) {

    return (
      <article className="w-50 h-80">
              <div>
                <img className="w-35 h-30 flex pl-10" src={props.pic} alt="" />
              </div>
              <div>
                <h2 className="font-bold flex justify-center text-gray-700 content-center ">{props.dept}</h2>
              </div>
              <div>
                <p className="font-sm flex justify-center text-gray-500 content-center  ">{props.content}</p>
              </div>      

      </article>
    );
}

export default Topiconlist;