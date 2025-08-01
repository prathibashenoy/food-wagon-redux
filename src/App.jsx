import './App.css'
import Popularitemlist from './components/Popularitemlist';
import Topfoodlist from './components/Topfoodlist'
import Topiconlist from './components/Topiconlist';
import Restaurantitemlists from './components/Restaurantitemlists';
import Categorieslist from './components/Categorieslist';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  const topfood = [
    {
      id:1,
      photo :"./images/TopList1.png",
      Name :"Greys Vage",
      days :"6 Days Remaining"      
    },
    {
      id:2,
      photo :"./images/TopList2.png",
      Name :"Greys Vage",
      days :"6 Days Remaining"      
    },
    {
      id :3,
      photo : "./images/TopList3.png",
      Name : "Greys Vage",
      days :"6 Days Remaining"      
    },
    {
      id:4,
      photo :"./images/TopList4.png",
      Name :"Greys Vage",
      days :"6 Days Remaining"      
    }
  ]
  
  const listoftopfood = topfood.map(topfood => <Topfoodlist key={topfood.id} photo={topfood.photo} name={topfood.Name} days={topfood.days}/>);

  const topicon = [
    {
      id:1,
      pic:"./icons/selectlocation.png",
      dept:"Select location",
      content:"Choose the location where your food will be delivered."
    },
    {
      id:2,
      pic:"./icons/chooseorder.png",
      dept:"Select order",
      content:"Check over hundreds of menus to pick your favorite food."
    },
    {
      id:3,
      pic:"./icons/payadvanced.png",
      dept:"Pay advanced",
      content:"It's quick, safe, and simple. Select several methods of payment."
    },
    {
      id:4,
      pic:"./icons/enjoymeal.png",
      dept:"Enjoy meals",
      content:"Food is made and delivered directly to your home."
    }
  ]

  const listoftopicon = topicon.map(topicon => <Topiconlist key={topicon.id} pic={topicon.pic} dept={topicon.dept} content={topicon.content}/>)

  const popular = [
    {
      id:1,
      snap:"/images/cheeseburger.png",
      dish:"Cheese Burger",
      location:"Burger Arena",
      description:"A delicious cheese burger with a juicy beef patty, melted cheese, fresh lettuce, tomato, onions, and tangy sauces, all stacked in a soft toasted bun. Perfect for satisfying your cravings!",
      price:"3.88"

    },
    {
      id:2,
      snap:"/images/toffescake.png",
      dish:"Toffe’s Cake",
      location:"Top Sticks",
      description:"Toffe’s Cake is a rich, moist dessert infused with caramel and toffee flavors. Topped with creamy frosting, it offers a perfect blend of sweetness and softness in every bite.",
      price:"4.00"
    },
    {
      id:3,
      snap:"/images/dancake.png",
      dish:"Dancake",
      location:"Cake World",
      description:"Dancake is a soft, fluffy cake with rich, buttery flavor, perfect for tea time or dessert. Lightly sweet and moist, it melts in your mouth with every delightful bite.",
      price:"1.99"
    },
    {
      id:4,
      snap:"/images/crispysandwich.png",
      dish:"Crispy Sandwich",
      location:"Fastfood Dine",
      description:"Crispy Sandwich is a delicious snack with golden, crunchy bread filled with fresh veggies, cheese, and savory sauces. Every bite offers a perfect contrast of crispiness outside and softness inside.",
      price:"3.00"
    },
    {
      id:5,
      snap:"/images/thaisoup.png",
      dish:"Thai Soup",
      location:"Foody man",
      description:"Thai Soup is a flavorful blend of spicy, sour, and savory tastes, made with herbs, lemongrass, vegetables, and tender meat or tofu. It's warming, aromatic, and deeply satisfying with every spoonful.",
      price:"3.00"

    }
  ]
  const popularitems = popular.map(popular => <Popularitemlist key={popular.id} id={popular.id} snap={popular.snap} dish={popular.dish} location={popular.location} description={popular.description} price={popular.price}/>)
  
  const restaurant = [
    {
      id:1,
      foodpic:"./images/foodworld.png",
      discount:"20% off",
      icon:"./icons/friendly.png",
      restname:"Foodworld",
      rating:"46",
      openingcolor:" bg-orange-200 text-orange-800",
      openingtext:"Opens tomorrow"
    },
    {
      id:2,
      foodpic:"./images/pizzahub.png",
      discount:"15% off",
      icon:"./icons/pizza.png",
      restname:"Pizzahub",
      rating:"40",
      openingcolor:" bg-orange-200 text-orange-800",
      openingtext:"Opens tomorrow"
    },
    {
      id:3,
      foodpic:"./images/donuts-hut1.png",
      discount:"10% off",
      icon:"./icons/dunkin.png",
      restname:"Donuts hut",
      rating:"20",
      openingcolor:" bg-green-200 text-green-800",
      openingtext:"Open Now"
    },
    {
      id:4,
      foodpic:"./images/donuts-hut2.png",
      discount:"15% off",
      icon:"./icons/subway.png",
      restname:"Donuts hut",
      rating:"50",
      openingcolor:" bg-green-200 text-green-800",
      openingtext:"Open Now"
    },
    {
      id:5,
      foodpic:"./images/rubytuesday.png",
      discount:"10% off",
      icon:"./icons/ruby.png",
      restname:"Ruby Tuesday",
      rating:"26",
      openingcolor:" bg-green-200 text-green-800",
      openingtext:"Open Now"
    },
    {
      id:6,
      foodpic:"./images/kuakatafriedchicken.png",
      discount:"25% off",
      icon:"./icons/kfc.png",
      restname:"Ruby Tuesday",
      rating:"53",
      openingcolor:" bg-green-200 text-green-800",
      openingtext:"Open Now"
    },
    {
      id:7,
      foodpic:"./images/redsquare.png",
      discount:"25% off",
      icon:"./icons/kfc.png",
      restname:"Ruby Tuesday",
      rating:"53",
      openingcolor:" bg-green-200 text-green-800",
      openingtext:"Open Now"
    },
    {
      id:8,
      foodpic:"./images/tacobell.png",
      discount:"10% off",
      icon:"./icons/taco.png",
      restname:"Taco Bell",
      rating:"35",
      openingcolor:"bg-green-200 text-green-800",
      openingtext:"Open Now"
    }
  ]
     
  const restaurantlists = restaurant.map(restaurant =><Restaurantitemlists key={restaurant.id} foodpic={restaurant.foodpic} discount={restaurant.discount} icon={restaurant.icon} restname={restaurant.restname} rating={restaurant.rating} openingcolor={restaurant.openingcolor} openingtext={restaurant.openingtext}/>)

  const categories = [
    {
      id:1,
      image:"./images/pizza.png",
      name:"Pizza"

    },
    {
      id:2,
      image:"./images/burger.png",
      name:"Burger"
    },
    {
      id:3,
      image:"./images/noodles.png",
      name:"Noodles"
    },
    {
      id:4,
      image:"./images/sub-sandwich.png",
      name:"Sub-Sandwich"
    },
    {
      id:5,
      image:"./images/chowmein.png",
      name:"Chowmein"
    },
    {
      id:6,
      image:"./images/steak.png",
      name:"Steak"

    }
  ]

const categoriesitems = categories.map(categories => <Categorieslist key={categories.id} image={categories.image} name={categories.name}/>)



  return (
    <>
      <main>
        <section className="bg-yellow-400 relative">
          <div className="container mx-auto py-5 h-100 gap-y-100">
            <div>
              <h1 className="text-white text-5xl font-bold mt-5 pt-5">Are you starving?</h1>
            </div>
            <div className="mt-5">
              <span className="my-7 py-5 text-gray-700">Within a few clicks, find meals that are accessible near you</span>
            </div>         
            
            <div  className="grid grid-cols-2">
              <div className="grid grid-rows-2 my-4 bg-white text-black  max-w-lg rounded-lg shadow-md">
                <div className="flex flex-row" >
                  <div className="bg-orange-100 rounded mx-6 mt-4 mb-4 w-30 h-10">
                    <button className="flex flex-row p-2 font-bold  "><img className="" src="./icons/bikeIcon.png" alt="bike icon" /> Delivery</button>
                  </div>
                  <div className="mt-4">
                    <button className="flex flex-row p-2 px-6"><img className="px-2" src="./icons/pickupIcon.png" alt="pickup icon" /> Pick up</button>
                  </div>                 
                              
                </div>
                <div className="border-t border-gray-200 pl-2 ">    
                  <input className="placeholder-shown:border-gray-500  bg-gray-200 mt-2 py-2 my-1 pl-2 rounded-lg w-80" placeholder="Enter your address" />    
                  <button className="bg-orange-500 ml-5 px-5 py-2 text-white rounded-md w-35">Find Food</button>     
                </div>
                
              </div>
              <div>
                <img className="absolute right-35 bottom-0 w-80 h-70" src="./images/ImageBase.png" alt="pickup icon" />
              </div>           
            </div>   
          </div>      
        </section>
        <section className="container mx-auto">
          <div className="mt-15 flex flex-row gap-8">
            {listoftopfood}
          </div>
        </section>
        <section className="bg-orange-50">
          <div className="container mx-auto mt-20 pt-15">
            <h1 className="font-bold text-3xl text-center text-orange-600">How does it work</h1>
          </div>
          <div className="container mx-auto mt-10 flex flex-row gap-8 justify-center">
            {listoftopicon}
          </div>
        </section>
        <section className= "bg-orange-50">
          <div>
            <h1 className="font-bold text-3xl text-center ">Popular items</h1>
          </div>
          
          <div className="flex flex-row pt-5 mt-7">
            <img className="w-25 h-25 item-center mt-7" src="./icons/leftcircle.png" alt="" />
            {popularitems}
            <img className="w-25 h-25 item-center mt-7" src="./icons/rightcircle.png" alt="" />
          
          </div>
        </section>
        <section className= "bg-orange-50">
          <div>
            <h1 className="font-bold text-3xl text-center pt-20 ">Featured Restaurants</h1>
          </div>
          <div className="container mx-auto grid grid-cols-4 space-y-10 ">
           {restaurantlists}
          </div>
          <div className='flex justify-center items-center pb-9 '>
            <button className="flex items-center gap-2 px-4 py-2 text-white font-semibold bg-orange-500 rounded-lg shadow-md hover:bg-orange-600" >View All <img src="./icons/righticon.png" alt="" /></button>
          </div>
        </section>
        <section className="bg-orange-40 ">
          <div className=" container mx-auto flex flex-row  pt-15  justify-between items-center ">
            <div>
              <h1 className="font-bold text-3xl">Search by Food</h1>
            </div>
            <div className="flex flex-row flex items-center gap-1 ">
              <p className="font-bold text-orange-500 flex flex-row items-center gap-3">View All<img className="w-5 h-5" src="./icons/orangerighticon.png" alt="" /></p>
              <img className="w-25 h-25 item-center mt-7 mr-0 pr-0" src="./icons/leftcircle.png" alt="" />
              <img className="w-25 h-25 item-center mt-7 ml-0 pl-0" src="./icons/rightcircle.png" alt="" />
            </div>      
          </div> 
          <div className="container mx-auto grid grid-cols-6  flex justify-around">
             {categoriesitems}      
                 
          </div>        
            
        </section>
        <section  className="bg-orange-100 " >
          <div className="container mx-auto flex items-center justify-center pt-10 ">
           
            <div className="bg-white mt-9 rounded-2xl shadow-md px-5 py-5  flex items-center justify-center gap-12 inline-block">
              <div className="flex flex-row flex justify-center align-center pt-4">
                <article className="grid grid-cols-2 border-r-2 border-gray-200 ">
                     <img className='w-25 h-25 pl-3' src="./icons/dailydiscount.png" alt="" />
                     < h1 className='text-orange-500 font-semibold text-2xl w-20 flex align-center'>Daily Discount</ h1>
                </article>
                <article className="grid grid-cols-2 border-r-2 border-gray-200">
                     <img className='w-25 h-25 pl-3' src="./icons/livetracing.png" alt="" />
                     < h1 className='text-orange-500 font-semibold text-2xl w-20 flex align-center'>Live Tracing</h1>
                </article>
                <article className="grid grid-cols-2">
                     <img className='w-25 h-25 pl-3' src="./icons/quickdelivery.png" alt="" />
                     < h1 className='text-orange-500 font-semibold text-2xl w-20 flex align-center'>Quick Delivery</h1>
                </article>                
              </div>
            </div>
          </div>          
        </section>
        <section>
          <img src="./images/back.png" alt="" />
       </section>
       <section>
          <article>
            <div className='pt-5 '>
              <div className="container mx-auto flex items-center justify-center pt-10 ">
                <div className="bg-white mt-9 rounded-2xl shadow-md px-5 py-5  flex items-center justify-center gap-12 inline-block ">
                  <article className="grid grid-cols-3">
                    <div className='grid grid-cols	'>
                      <h1 className='font-bold text-4xl pt-9'>
                        Best deals <span className='text-orange-500'>Crispy Sandwiches</span>
                      </h1>
                      <p className='pt-3'>Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.</p>
                      <div className='flex justify-center items-center pb-9 '>
                        <button className="flex items-center gap-2 px-4 py-4 text-white font-semibold bg-orange-500 rounded-lg shadow-md w-80 flex justify-center" >Proceed to order <img src="./icons/righticon.png" alt="" /></button>
                      </div>
                    </div>                    
                    <div className="col-span-2">
                      <img src="./images/Crispy.png" alt="" />
                    </div>                    
                  </article>                  
                </div>
              </div>              
              <div className="container mx-auto flex items-center justify-center pt-7 ">
                <div className="bg-white mt-9 rounded-2xl shadow-md px-5 py-5  flex items-center justify-center gap-12 inline-block ">
                  <article className="grid grid-cols-3">
                    <div className="col-span-2">
                      <img src="./images/fried.png" alt="" />
                    </div>
                    <div className='grid grid-cols pl-3	'>
                      <h1 className='font-bold text-4xl pt-9'>
                        Celebrate  parties with <span className='text-orange-500'>Fried Chicken </span>
                      </h1>
                      <p className='pt-3'>Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken..</p>
                      <div className='flex justify-center items-center pb-9 '>
                        <button className="flex items-center gap-2 px-4 py-4 text-white font-semibold bg-orange-500 rounded-lg shadow-md w-80 flex justify-center" >Proceed to order <img src="./icons/righticon.png" alt="" /></button>
                      </div>
                    </div>                    
                                        
                  </article>                  
                </div>
              </div> 
            </div>
            <div className="container mx-auto flex items-center justify-center pt-10 ">
                <div className="bg-white mt-9 rounded-2xl shadow-md px-5 py-5  flex items-center justify-center gap-12 inline-block ">
                  <article className="grid grid-cols-3">
                    <div className='grid grid-cols	'>
                      <h1 className='font-bold text-4xl pt-9'>
                        Wanna eat hot & spicy <span className='text-orange-500'>Pizza?</span>
                      </h1>
                      <p className='pt-3'>Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.</p>
                      <div className='flex justify-center items-center pb-9 '>
                        <button className="flex items-center gap-2 px-4 py-4 text-white font-semibold bg-orange-500 rounded-lg shadow-md w-80 flex justify-center" >Proceed to order <img src="./icons/righticon.png" alt="" /></button>
                      </div>
                    </div>                    
                    <div className="col-span-2">
                      <img src="./images/spicypizza.png" alt="" />
                    </div>                    
                  </article>                  
                </div>
              </div>
          </article>
       </section> 
       <section className='relative w-full h-full mt-9'>
          <img src="./images/background.png" alt="" />
          <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4'>
            <h1 className='font-bold text-4xl w-120 text-white'>Are you ready to order with the best deals?</h1>
            <div className='flex justify-center items-center pb-9 '>
              <button className="flex items-center gap-2 px-2 py-2 mt-7 text-white font-semibold bg-orange-500 rounded-lg  border-0 w-60 flex justify-center" >Proceed to order <img src="./icons/righticon.png" alt="" /></button>
            </div>
          </div>
        </section> 
               
      </main>
    </>
  )
}

export default App
