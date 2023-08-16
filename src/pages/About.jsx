import React from 'react'

export default function About() {
  return (
    <div className='flex flex-col flex-start max-w-[960px] w-[90%] items-start border-2 border-gray-800  rounded-md px-2 mx-auto gap-3 my-2'>
      <details className='text-start my-2'>
          <summary className='font-bold'>About Us</summary>
          This is text formattor ,in which we can change case ,refactor document and restructure our data.This is basic concept idea and only uses react components and routes and use state hook...
          </details>
          <details className='text-start'>
          <summary className='font-bold'>About Me</summary>
           Hi ,I m a Front End Developer and also a business owner of textile business.
          </details>
         
        
    </div>
  )
}
