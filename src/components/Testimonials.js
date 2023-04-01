import React from 'react'
import Cards from './Cards'
import { useState } from 'react';
import { FiChevronLeft,FiChevronRight} from "react-icons/fi";

const Testimonials = (props) => {
    let reviews=props.reviews
    const[index,setIndex]=useState(0);
    function leftShiftHandler(){
        if(index-1<0)
        {
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }
    }
    function rightShiftHandler(){
        if(index+1>=reviews.length)
        {
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }
    function generateHandler(){
       let randomPerson= Math.floor(Math.random()*reviews.length);
        setIndex(randomPerson)
    }
  return (
    <div className='w-[100vw] max-[500px]:h-[32rem]   md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 md:p-7 transition-all duration-700 hover:shadow-xl'>
    <Cards review={reviews[index]}></Cards>
    <div className='mt-5 mx-auto cursor-pointer text-5xl text-violet-400 flex gap-10 font-bold'>
    <button onClick={leftShiftHandler} className='cursor-pointer hover:text-violet-500'>
     <FiChevronLeft/>
    </button>
    <button onClick={rightShiftHandler} className=' cursor-pointer hover:text-violet-500'>
    <FiChevronRight/>
    </button>
</div>
<div>
    <button onClick={generateHandler} className='text-white  hover:bg-violet-500 bg-violet-400 mt-5 py-3 px-10 rounded-md transition-all duration-200 font-bold cursor-pointer'>Surprise Me</button>
</div>
</div>
  )
}

export default Testimonials;
