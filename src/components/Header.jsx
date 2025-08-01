import { Link } from "react-router-dom";
import Cart from "../routes/Cart";
import { useSelector } from "react-redux";


function Header(){
  const cartItems = useSelector((state) => state.cart.items);
     const totalQuantity = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

   return (
    <>
       <header className=" container	flex items-center justify-between mx-auto">
        <div>
          <img src="/images/foodwagonLogo.png" alt="" />
        </div>
        
        <div className="flex items-center space-x-4 ">
          <span className="flex items-center  font-bold">
            Deliver to:  
            <img src="/icons/map-marker-alt.png" alt="location" />
             Current Location Mohammadpur Bus Stand,Dhaka
             </span>
        </div>
        <div className="flex items-center pl-3 ">
          <img  className="" src="/icons/Search.png" alt="search icon" />
          <span>Search Food</span>
        </div>
        <div>
          <button className="px-4 pl-3 py-1 rounded-lg shadow-md hover:shadow-lg transition-shadow text-orange-500 font-semibold">Login</button>
        </div>
        
        <div className="flex items-center pl-3 relative ">
          <Link to="/cart">
          <img  className="w-7 h-7" src="/icons/shopping_cart.png" alt="shopping cart" />       
          <span className="absolute -top-2 -right-2 text-orange-500 text-s ">{totalQuantity}</span>   
          </Link>
        </div>
        
      </header> 
    </>
    
   );
}

export default Header;














