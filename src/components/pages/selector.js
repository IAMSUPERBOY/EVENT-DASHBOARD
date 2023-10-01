import React from 'react';
import { BiChevronDown } from 'react-icons/bi';

    const Selector=()=>{
        return (
          <div class='w-full text-color-black font-medium'>
            <div class='bg-white p-2 flex items-center justify-center rounded-lg'>
      Clubname
      <BiChevronDown size={20} />
            </div>
            <ul class="bg-white mt-2">
              <li class='p-2 text-sm hover:bg-sky-700 hover:text-white'>
                Sample
              </li>
              <li class='p-2 text-sm hover:bg-sky-700 hover:text-white'>
                Sample
              </li>
              <li class='p-2 text-sm hover:bg-sky-700 hover:text-white'>
                Sample
              </li>
              <li class='p-2 text-sm hover:bg-sky-700 hover:text-white'>
                Sample
              </li>
            </ul>
      
          </div>
        );
      };


export default Selector;