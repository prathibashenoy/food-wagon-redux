

function Footer(){
 return(
    <footer className='bg-black'>
          <div className='container mx-auto pt-9 text-white'>
            <div>
              <h2 className='font-bold text-lg'>Our top cities</h2>
            </div>
            <div className='grid grid-cols-5 flex justify-evenly pt-5 pb-7 gap-20 border-b-1 border-gray-500 text-gray-400'>
              <div className='flex flex-col'>
                <span>San Francisco</span>
                <span>Miami</span>
                <span>San Diego</span>
                <span>East Bay</span>
                <span>Long Beach</span>
              </div>
              <div className='flex flex-col'>
                <span>Los Angeles</span>
                <span>Washington DC</span>
                <span>Seattle</span>
                <span>Portland</span>
                <span>Nashville</span>
              </div>
              <div className='flex flex-col'>
                <span>New York City</span>
                <span>Orange County</span>
                <span>Atlanta</span>
                <span>Charlotte</span>
                <span>Denver</span>
              </div>
              <div className='flex flex-col'>
                <span>Chicago</span>
                <span>Phoenix</span>
                <span>Las Vegas</span>
                <span>Sacramento</span>
                <span>Oklahoma City</span>
              </div>
              <div className='flex flex-col'>
                <span>Columbus</span>
                <span>New Mexico</span>
                <span>Albuquerque</span>
                <span>Sacramento</span>
                <span>New Orleans</span>
              </div>              
            </div>
            <div className='flex flex-row gap-30  border-b-1 border-gray-500 pb-10'>
              <div className='pt-7 flex flex-row gap-15'>

              <div className='flex flex-col'>
                <h2 className='font-bold text-md'>Company</h2>
                <div className='flex flex-col pt-7  text-gray-400'>
                  <span>About us</span>
                  <span>Team</span>
                  <span>Careers</span>
                  <span>Blog</span>        
                </div>
              </div>

              <div className='flex flex-col'>
                <div>
                <h2 className='font-bold text-md'>Contact</h2>
                <div className='flex flex-col pt-7  text-gray-400'>
                  <span>Help & Support</span>
                  <span>Partner with us </span>
                  <span>Ride with us</span>                          
                </div>
              </div>       
              </div>
              

              <div className='flex flex-col'>
                <h2 className='font-bold text-md'>Legal</h2>
                 <div className='flex flex-col pt-7  text-gray-400'>
                  <span>Terms & Conditions</span>
                  <span>Refund & Cancellation</span>
                  <span>Privacy Policy</span>
                  <span>Cookie Policy</span>        
                 </div>
              </div>       
              </div>  
               <div className='pt-7 flex flex-col text-gray-600'>
                  <h1 className='font-bold '>FOLLOW US</h1>
                  <div className='pt-5 flex flex-row gap-5'>
                    <img src="./icons/insta.png" alt="instagram image" />
                    <img src="./icons/facebook.png" alt="facebook image" />
                    <img src="./icons/twitter.png" alt="twitter image" />
                  </div>
                  <p className='font-bold pt-5'>Receive exclusive offers in your mailbox</p>
                  <div className='flex flex-row pt-5'>                        
                    <input class="placeholder-shown:border-gray-500  bg-gray-200 mt-2 py-2 my-1 pl-2 rounded-lg w-80" placeholder="&#9993;Enter your address" />    
                    <button className="bg-orange-500 ml-2 text-white rounded-md w-30">Subscribe</button>                      

                  </div>
              
                </div>       

            </div>
            <div className='pt-5 flex justify-between items-center text-sm'>
              <span>All rights Reserved &#169; My Company, 2025</span>
              <span>Made with &#129505; by Prathiba</span>
            </div>
              
          </div>

        </footer> 
 );

}

export default Footer;