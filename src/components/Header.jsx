
function Header(){
   return (
    <>
       <header className=" container	flex items-center justify-between mx-auto">
        <div>
          <img src="/images/foodwagonLogo.png" alt="" />
        </div>
        
        <div className="flex items-center ">
          <span className="flex items-center  font-bold">
            Deliver to:  
            <img src="/icons/map-marker-alt.png" alt="location" />
             Current Location Mohammadpur Bus Stand,Dhaka
             </span>
        </div>
        <div className="flex items-center ">
          <img  className="" src="/icons/Search.png" alt="search icon" />
          <span>Search Food</span>
        </div>
        <div>
          <button className="px-4 py-1 rounded-lg shadow-md hover:shadow-lg transition-shadow text-orange-500 font-semibold">Login</button>
        </div>
      </header> 
    </>
    
   );
}

export default Header;














