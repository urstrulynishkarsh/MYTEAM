import React from "react";
import reviews from "./data";
import Testimonials from "./components/Testimonials";


const App = () => {
  return (
    <div className="w-[100vw] h-[100vh] max-[500px]:absolute top-[-5.5rem]  flex flex-col justify-center items-center gap-y-5 bg-gray-200 ">
      <div className="text-center">
        <h1 className="text-4xl max-[500px]:mt-[5rem] max-[500px]:absolute max-[500px]:left-[17%] max-[500px]:top-[5%]   font-bold">Our Testimonials</h1>
        {/* <div className="bg-violet-500   w-1/5 mt-1 mx-auto"></div> */}
        <div className="w-[9rem] h-[4px] bg-violet-500 mt-[10px] md:mt-[10px] mx-auto"></div>
        <Testimonials reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
