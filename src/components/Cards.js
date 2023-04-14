import React from 'react'
import {FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

const Cards = (props) => {
    let review=props.review;
  return (
    <div className='flex flex-col relative'>
        <div className='absolute top-[-7rem]  z-[10] mx-auto' >
            <img className="aspect-square  object-cover rounded-full  w-[140px] h-[140px] z-[25]" src={review.image}/>
            <div className='absolute   top-[0rem] z-[-20] mx-auto rounded-full w-[140px] h-[140px] left-[7px] bg-red-400'></div>
        </div>
        <div className='text-center mt-7'>
            <p className='tracking-wider font-bold text-2xl'> {review.name}</p>
        </div>
        <div className='text-center mt-4'>
            <p className='text-violet-400 uppercase text-md'>{review.job}</p>
        </div>
        <div className="mx-auto mt-5 text-[#6af3b3]">
        <FaQuoteLeft/>
        </div>
        <div className='text-center mt-4 text-slate-500'>
            {review.text}
        </div>
        <div className="mx-auto mt-5 text-[#6af3b3]"><FaQuoteRight/></div>
       
        
        
    </div>
  )
}

export default Cards