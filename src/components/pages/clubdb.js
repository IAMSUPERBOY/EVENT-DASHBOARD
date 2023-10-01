import React from 'react'
import Selector from './selector';
import IMAGE from './event.jpg'
import { BiChevronDown } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import { Clubdata } from './clubdata';
import './clubdb.css';


function Dropdown(){
  const [openSections, setOpenSections] = useState([]);

  // Function to toggle the open/close state of a section
  const toggleSection = (sectionId) => {
    if (openSections.includes(sectionId)) {
      // Close the section if it's open
      setOpenSections(openSections.filter((id) => id !== sectionId));
    } else {
      // Open the section if it's closed
      setOpenSections([...openSections, sectionId]);
    }
  };

 
  return (
    <div className='pt-5 m-5'> 
      {Clubdata.map((item, index) => {
        const sectionId = `accordion-open-body-${index + 1}`;
        const isOpen = openSections.includes(sectionId);

        return (
          <div key={index} className='p-10'>
            <button
              type="button" id={item.name}
              className={`flex-row items-center w-full p-5 text-left text-3xl font-extrabold text-blue-500 border ${
                isOpen ? 'border-b-0 border-gray-200' : 'border-b-0 border-gray-200'
              } rounded-lg focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-80 dark:border-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-blue-100`}
              data-accordion-target={`#${sectionId}`}
              aria-expanded={isOpen}
              aria-controls={sectionId}
              onClick={() => toggleSection(sectionId)}
            >
              <span className="items-center"  >
                <a href={item.link}>
                {item.name}
                </a>

              </span>
            </button>

            <div
              id={sectionId}
              className={`p-5 border rounded-lg ${
                isOpen ? ' border-gray-200 bg-blue-100 h-1/4' : 'border-b-0 border-gray-200'
              } dark:border-gray-700 ${isOpen ? 'block' : 'hidden'}`}
              aria-labelledby={`accordion-open-heading-${index + 1}`}
            >
              <p className="m-2 rounded-l dark:text-black">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
  
export default Dropdown;