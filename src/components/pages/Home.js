import React, { useState } from 'react';
import { Eventdetail } from './eventdata';

function getdate()
{
    const today=new Date();
    const month=today.getMonth()+1;
    const year=today.getFullYear();
    const day=today.getDate();
    return `${day}/${month}/${year}`;

}

let wi=0;
wi=Math.floor(window.screen.width/3)


function Home() {
    const [today,setToday]=useState(getdate())
    
  return (
    <>
<div class='text-5xl text-center pt-4 border-blue-500 border-solid'>
    Today's Events
</div>
<div class="flex gap-12 pl-1 pt-4 flex-wrap">
{Eventdetail.map((item,index)=>{
    if (item.date!==today)
    return ( 
    <>
      
      <div class="max-w-sm bg-white border border-gray-900 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href={item.link}>
        <img class="rounded-t-lg" src={item.image} alt="" />
    </a>
    
</div>
</>
    )
  })}




</div>



    </>
  )
}

export default Home;