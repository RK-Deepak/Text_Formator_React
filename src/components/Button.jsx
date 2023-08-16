
import React from 'react'

export default function Button({name,func}) {
  return (
    <div>
       <button className='px-4 py-2 bg-green-500 font-bold rounded-md '  onClick={func}>{name}</button>
    </div>
  )
}
