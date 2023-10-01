import React from 'react';
/* import * as FaIcons from "react-icons/fa"; */
import * as AiIcons from "react-icons/ai";
/* import * as IoIcons from "react-icons/io"; */
import * as BiIcons from "react-icons/bi";


export const SidebarData=[
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text',
    },
   
    {
        title:'Event Schedule',
        path:'/event',
        icon:<BiIcons.BiTime/>,
        cName:'nav-text',
    },
    {
        title:'Club info',
        path:'/clubdb',
        icon:<AiIcons.AiOutlineInfoCircle/>,
        cName:'nav-text',
    },
    {
        title:'Contact',
        path:'/support',
        icon:<BiIcons.BiSolidContact/>,
        cName:'nav-text',
    },
]