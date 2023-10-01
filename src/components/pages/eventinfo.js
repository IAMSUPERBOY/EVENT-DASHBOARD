import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Eventdetail } from './eventdata';



function Eventdetails() {
  const [isHovering,setIsHovering]=useState(false);
  
  const [hoveredindex,setHovered]=useState(-1)
  const handleMouseOver=(index)=>{
   
      setIsHovering(true);
      setHovered(index);
   
  }
  const handleMouseOut=()=>{
    setIsHovering(false);
    setHovered(-1);
  }
 

  useEffect(()=>{AOS.init();},[])
  return (
    <>
     <h1 class='font-semibold text-center text-3xl'>Upcoming Events</h1>
    <div className='flex lg:pl-52 gap-20 pt-20 flex-wrap'>
  
     
    {Eventdetail.map((item,index)=>
    {
       
      const isHovering=hoveredindex===index ;
      return(
        <>
      
       {(isHovering)?
       <div className=' bg-white   border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl md:min-h-[75px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-w-[200px] w-[400px]' size data-aos="flip-right" data-aos-delay="50" onMouseOut={handleMouseOut}>

       <p class="text-2xl p-5 w-fit font-bold text-gray-900 dark:text-black" onMouseOver={()=>handleMouseOver(index)} >
       {item.name}
       <div class="px-6 py-4">
     <div class="font-semibold text-xl"   >  
     {item.description}
     </div>
      <p class="text-gray-700 pt-5 text-base"  >
        {item.date}
      </p>
      <div class='pt-5'></div>
      <a href={item.link} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Register
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
      
    </div> 
       </p>
      
    
     
     
      </div>
       :<img  src={item.image} style={{ minWidth: 200 ,maxWidth:400 , maxHeight:400 }} onMouseOver={()=>handleMouseOver(index)} />}      
      </>
      )
    })}
      
   </div>
    </>
 
  )
 
}

export default Eventdetails;