import React from "react";
import { FaFile } from "react-icons/fa";
const Signup = () => {
  return (
    <div className="signuppage flex justify-center items-center md:p-14">
    <div className="signup flex justify-between w-[100%] border rounded-xl">
      <div className="left text-center border py-5 md:w-[40%] rounded-xl">
        <div className="logname flex justify-center items-center mt-10">
          <div className="logo">
            {" "}
            <FaFile />
          </div>
          <div className="name text-2xl font-extrabold text-green-400 px-2">
            Formatify
          </div>
        </div>
        <div className="textsign mt-7 text-3xl font-extrabold">
          SignUp for Formatify
        </div>
        <div className="options mt-5">
          <div className="goggle py-2 ">
            <button className="border-2 px-5 py-3 rounded-lg border-[#91cc5d] text-lg font-semibold">
              <div className="logo inline px-2">
                <img
                  src="src/Images/google.png"
                  className="w-7 inline"
                  alt=""
                />
              </div>
              Sign up with Google
            </button>
          </div>
          <div className="git py-2">
            <button className="border-2 px-5 py-3 rounded-lg border-[#91cc5d] text-lg font-semibold">
              <div className="logo inline px-2">
                <img src="src/Images/code.png" className="w-7 inline" alt="" />
              </div>
              Sign up with Google
            </button>
          </div>
        </div>
        <div className="orsign mt-7  flex items-center justify-center">
          <hr className="w-[10%]" />
          <div className="textor text-lg text-slate-400">
            Or sign up with e-mail
          </div>
          <hr className="w-[10%] " />
        </div>
        <div className="forms mt-8">
          <div className="inner">
            <form action="" className="mt-5 px-4 py-2">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
            
              />
              <input
                type="button"
                value="Sign Up"
                className="mt-5 tracking-wide font-semibold bg-[#95ea4a] text-gray-800 w-full py-4 rounded-lg hover:bg-[#91cc5d] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              />
            </form>
            <div className="terms mt-5 text-gray-400">
              I agree to abide by Formatify 
             
             &nbsp; <a href="#" className="underline">Terms of Service and its Privacy
              Policy</a>
            </div>
          </div>
        </div>
      </div>
      <div className="right flex justify-center items-center md:w-1/2 max-md:hidden">

      <img src="src/Images/p7.jpg" className="inline h-full" alt="" />

      </div>
    </div></div>
  );
};

export default Signup;
