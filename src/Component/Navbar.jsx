import React from "react";
import { FaFile } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex">
      <div className="nav flex mx-16 my-7 items-center ">
        <div className="logo">
          <FaFile size={"1.5em"} />
        </div>
        <ul className="list flex mx-5 max-md:block">
          <li className="p-2 text-sm hover:text-[#91cc5d]">
            <NavLink  to={"/Explore"} className={(e)=>{
return e.isActive?'text-[#91cc5d]':''
            }}>
              Explore
            </NavLink>
          </li>
          <li className="p-2 text-sm hover:text-[#91cc5d]">
            <NavLink className={(e)=>{
return e.isActive?'text-[#91cc5d]':''
            }} to={"/Customize"}>
              Customize
            </NavLink>
          </li>
          <li className="p-2 text-sm hover:text-[#91cc5d]">
            <NavLink to={"/Read"} className={(e)=>{
return e.isActive?'text-[#91cc5d]':''
            }}>
              Read
            </NavLink>
          </li>
          <li className="p-2 text-sm hover:text-[#91cc5d]">
            <NavLink  to={"/Learn"} className={(e)=>{
return e.isActive?'text-[#91cc5d]':''
            }}>
              Learn
            </NavLink>
          </li>
          <li className="p-2 text-sm hover:text-[#91cc5d]">
            <NavLink  to={"/Contact"} className={(e)=>{
return e.isActive?'text-[#91cc5d]':''
            }}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
     
      <NavLink to='/Signup' className="signup absolute right-16 my-7 border-[1.3px] border-black px-5 py-2 rounded-lg text-sm font-semibold text-black max-md:w-10:relative " onClick={
        ()=>{
                // document.querySelector('.navbar').classList.add('hidden')
        }
      }>
        Sign up
      </NavLink>
    </div>
  );
};

export default Navbar;
