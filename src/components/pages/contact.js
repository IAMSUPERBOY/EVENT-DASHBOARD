import React from 'react'
import img from  "./assets/myphoto-good.JPG"
function Contact() {
  return (
    
    <div class="flex pt-40 justify-center ">
    <div class="w-full max-w-sm border rounded-lg shadow dark:bg-gray-800 dark:border-gray-100">
    <div class="flex flex-col items-center pb-10">
        <img class="w-40 h-40 mb-3 pt-4 rounded-full shadow-lg" src={img} alt="my image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 text-center dark:text-black">Suraj Krishna
        <p class="text-sm text-gray-500 dark:text-gray-400">CS STUDENT CET</p>
        <p class="text-sm text-gray-500 dark:text-gray-400">Github: <a class="text-xs font-thin text-blue-500" href="https://github.com/IAMSUPERBOY">IAMSUPERBOY</a></p>
        <p class="text-sm text-gray-500 dark:text-gray-400"><a class="text-xs font-thin text-blue-500" href="https://www.linkedin.com/in/suraj-krishna-ss/">LinkedIn</a></p>
</h5>
        
        <div class="flex mt-4 space-x-3 md:mt-6">
        </div>
    </div>
</div>
    
       </div>
       
  )
}

export default Contact;