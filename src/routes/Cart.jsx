import React from 'react'
import CartItem from '../components/Cartitem';
import { useSelector } from 'react-redux';

function Cart(){
  const cartItems=useSelector(state=> state.cart.items);
  console.log(cartItems);

   const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <main>
      <section className='container mx-auto py-16'>
        <div>
          <h1 className='font-bold text-2xl text-center my-10 py-10'>
            My Cart
          </h1>
          <div>
            {
              cartItems.map((item) =>(
                <CartItem key={item.id} cartItem={item} />
              ))
            }
          </div>
        </div>
        <button className='w-full my-5 py-2 bg-orange-500 text-white rounded-md'>Checkout Total: ${total}</button>
      </section>
    </main>  

  )
}

export default Cart;