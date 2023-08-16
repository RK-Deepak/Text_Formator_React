
import React, { useState } from 'react'
import {BsFillMoonFill,BsEmojiSunglasses} from "react-icons/bs"
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
     
     let setmystyle=props.setmystyle;
    
     let showalert=props.showAlert;

     

     const [theme,settheme]=useState("light");

 
    
    let pinkish={
      
        color:"grey",
        backgroundColor:"pink"
      
    }
    let greenish=
    {
      color:"purple",
      backgroundColor:"green"
    }
    let yellowish=
    {
      color:"black",
      backgroundColor:"yellow"
    }
  

     function themechange()
     {
       if(theme==="light")
       {
        setmystyle(
          {
            color:"white",
            backgroundColor:"black",
          }
          
        )
        showalert("Changed to Dark theme","Success");
        settheme("dark")
      
       
       }
       else if(theme==="dark")
       {
        setmystyle(
          {
            color:"black",
            backgroundColor:"white"

          }
        )
        showalert("Changed to Light theme","Success");
       settheme("light");
     

     }
     

    }
    function customchange(pattern)
    {
      showalert("Changed to custome theme","Success");
        setmystyle(pattern);
     
    }

    
    

     
  return (
    <div className='flex w-[90%] max-w-[960px] mx-auto justify-between items-center p-2'>
      <div>
          <img src='https://media1.thehungryjpeg.com/thumbs2/ori_3808955_9xwt5p8lere79eph17ct3ra38auvlokebuo687e3_monogram-tf-logo-design.jpg' alt='' width={50} className='rounded-full'/>
      </div>
      <div className='flex gap-2 items-center'>
        <div className='flex gap-2 '>
          <div className='w-[20px] aspect-square bg-pink-300 rounded-md' onClick={()=>customchange(pinkish)
          }></div>
          <div className='w-[20px] aspect-square bg-green-300 rounded-md' onClick={()=>
          customchange(greenish)}></div>
          <div className='w-[20px] aspect-square bg-yellow-300 rounded-md' onClick={()=>
     customchange(yellowish)}></div>
        </div>
         <ul className='flex list-none font-bold gap-2'>
          <NavLink to='/'><li>Home</li></NavLink>
          <NavLink to='/about'><li>About</li></NavLink>
         </ul>
         {(theme==="light")?<BsFillMoonFill onClick={themechange}/>:<BsEmojiSunglasses onClick={themechange}/>}
      </div>
    </div>
  )
}
