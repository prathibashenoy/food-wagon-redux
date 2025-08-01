  import React from "react";
  import { useDispatch } from "react-redux";
  import { incrementItem,DecrementItem, removeItem } from "../features/cart/cartSlice";

  function CartItem(props) {
   const product = props.cartItem;
      const dispatch = useDispatch()
function handleClickToIncr(){
    dispatch(incrementItem(product))
}
function handleClickToDecr(){
    dispatch(DecrementItem(product))
}
function handleClickToDelete(){
    dispatch(removeItem(product))
}

   
  if (!product) return <p>No product data found.</p>; // 👈 Prevent crash

    return (
        <article className='flex flex-row justify-between align-center items-center space-y-5'>
              <img className="w-30 aspect-square rounded-sm" src={product.snap} alt="" />
              <h3 className='text-lg font-semibold'>{product.dish}</h3>
              <span>${product.price}</span>
              <div className='space-x-2'>
                  <button onClick={handleClickToDecr} className='bg-orange-500 text-white w-5 h-5 pb-6 rounded-sm text-sm'>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={handleClickToIncr} className='bg-orange-500 text-white w-5 h-5 pb-6 rounded-sm text-sm'>+</button>
                  <button onClick={handleClickToDelete}  className="bg-orange-500 text-white  h-6 rounded-sm  text-sm text-center px-3 ml-5">Delete From cart</button>         

              </div>
              
        </article>
    );
  }

  export default CartItem;