import React from 'react'


export default function Alert(props) {
  let alert=props.alert;
  return (
    <>
    {alert &&
      <div className='py-2  bg-green-400 max-w-[960px]  w-[90%] text-start mx-auto px-2 rounded-md font-bold text-sm'>
          {alert.type} : {alert.message}
  
      </div>

    }
    </>
   
  )
}
