import React from "react";

const Features = () => {
  return (
    <div className="features bg-[#f0f0f0]  pt-[40vh]">
      <div className="f1 flex justify-between items-center ">
        <div className="image w-[30%] mx-16">
          <img src="src/Images/p4.jpg" alt="" />
        </div>
        <div className="content w-[45%] mr-16">
          <p className="head font-bold text-4xl text-left">Formatify:</p>
          <p className="head font-bold text-4xl text-left">
            Leading the way in paper formatting services
          </p>
          <p className="mt-4 w-[60%] text-left">
            PaperFormatPro offers a user-friendly platform for academic paper
            formatting, providing customizable options for a seamless
            experience. It aims to simplify the formatting process and enhance
            user experience.
          </p>
          <button className="px-4 py-2 text-sm font-medium bg-[#91cc5d] rounded-lg text-white mt-9">
            Start Formatting
          </button>
        </div>
      </div>
      <div className="f2 flex items-center justify-center  mt-[40vh]">
        <div className="wrapi text-center w-[70%] ">
          <div className="text-5xl font-extrabold leading-[70px] tracking-normal">
            Enhanced Formatting Experience
          </div>
          <div className="sub flex justify-center mt-4">
            <div className="w-[60%] text-3xl font-semibold leading-[40px] tracking-normal ">
              Formatify rewards users with enhanced customization options,
              improving paper presentation.
            </div>
          </div>
        </div>
      </div>
      <div className="f3 flex mt-[40vh] pb-16 justify-between items-center">
        <div className="image w-[30%] mx-16">
          <img src="src/Images/p5.jpg" alt="" />
        </div>
        <div className="content w-[45%] mr-16">
          <p className="head font-bold text-4xl text-left">Formatify Pro</p>
          <p className="mt-4 w-[80%] text-left">
            Formatify is revolutionizing academic paper formatting. It provides
            a user-friendly platform with customizable options, making paper
            formatting accessible and efficient for all users. It's a
            game-changer in the academic world.
          </p>
          <button className="px-4 py-2 text-sm font-medium bg-[#91cc5d] rounded-lg text-white mt-9">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
