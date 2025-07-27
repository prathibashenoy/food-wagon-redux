import React from 'react'
import { useLocation } from 'react-router-dom';

function SelectedPopularitem() {
   const location = useLocation();
  const popularItem = location.state;

  return (
    <>
    <div className="p-4 container mx-auto py-20">
      <h1 className="text-2xl font-bold mb-4 text-center pb-10">Selected Popular Item</h1>
      <div className='grid grid-cols-2 '>
         <div className='flex justify-center'>
            <img
             src={popularItem.snap}
             alt={popularItem.dish}
             className="w-60 h-60 rounded-lg mb-4"
            />
         </div>
         <div className='space-y-2'>
            <h2 className="text-xl font-bold">{popularItem.dish}</h2>
            <p className="text-orange-500">{popularItem.location}</p>
            <p>{popularItem.description}</p>
            <p className="font-bold text-lg">{popularItem.price}</p>
            <button className="bg-orange-500 px-5 py-2 text-white font-bold rounded-md w-40">Add To Cart</button>
         </div>
         
      
      </div>
      
    </div>
    </>
  );
}

export default SelectedPopularitem;