import React from "react";

const Mainview = () => {
  return (
    <>
      <div className="flex justify-between mx-16 mt-14 max-md:block">
        <div className="content w-[40%] max-md:w-[100%]">
          <p className="head font-bold text-5xl">Formatify:</p>
          <p className="head font-bold text-5xl">Simplifying Research</p>
          <p className="mt-4 ">
            Paper format offers a platform for research paper formatting,
            ensuring a seamless experience with customization option
          </p>
          <div className="explore flex mt-7 justify-between w-[72%] max-md:block">
            <button className="px-4 py-2 text-sm font-medium bg-[#91cc5d] rounded-lg text-white max-md:w-[70vw] ">
              Start Formatting
            </button>
            <button className="px-4 py-2 text-sm font-medium  rounded-lg text-black border-[1px] border-black max-md:w-[70vw]">
              Format Your Paper
            </button>
          </div>
        </div>
        <div className="image text-xl w-[60%]">
          <img src="src/Images/p2.png" alt="" className="text-xl h-[75vh]" />
        </div>
      </div>
      <div className="self flex mx-16 my-10 justify-between w-[80vw] max-md:block">
        <div className="selfcards px-3 py-2 text-center">
          <p className='mb-2 text-lg'>Testimonal</p>
          <p className="text-3xl font-bold">Rating 4.5🌟</p>
        </div>
        <div className="selfcards px-3 py-2 text-center">
          <p className='mb-2  text-lg'>FAQS</p>
          <p className="text-3xl font-bold">Resources</p>
        </div>
        <div className="selfcards px-3 py-2 text-center">
          <p className='mb-2  text-lg'>Offer</p>
          <p className="text-3xl font-bold">Free</p>
        </div>
        <div className="selfcards px-3 py-2 text-center">
          <p className='mb-2 text-lg'>User Satisfaction Rate</p>
          <p className="text-3xl font-bold">93.2%</p>
        </div>
      </div>
    </>
  );
};

export default Mainview;
