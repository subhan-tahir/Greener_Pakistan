import React from "react";
import { navbarItems } from "./script";
import { NavLink, Link } from "react-router-dom";

const SideBar = ({ toggleSideBar, handleClick }) => {
  return (
    <>
      <div
        className={`w-[250px] h-screen fixed top-0 z-20 overflow-y-auto bg-white transition-transform duration-500
         ${toggleSideBar ? "translate-x-0" : "translate-x-[-250px]"}`}
      >
        <div className="p-3 flex flex-col  gap-[20px]  h-[700px]">
          
            <ul className={` flex flex-col gap-2`}>
              {navbarItems.map((value, i) => (
                <li className={''} >
                 <NavLink
                    key={i}
                    to={`${value.path}`}
                    onClick={handleClick}
                    className="no-underline cursor-pointer hover:text-[--primaryColor] text-[14px] font-bold"

                  >
                    {/* <li className={`cursor-pointer hover:text-[--primaryColor] ${value.item === 'Contact US' ? 'bg-[--primaryColor] p-2 rounded-full text-white text-[16px] text-center':'text-[14px]'} ${itemIndex === 0 ? 'font-bold':''}`}> */}
                    {value.item}
                  </NavLink>
                   <ul className="flex flex-col gap-2  text-[12px] ">

              {value.dropDownItems?.map((value, i) => (
                <>
                <li key={i} className="">
                  <Link
                    to={`/service#${value.dropDownPath}`}
                    onClick={handleClick}
                    className="no-underline"
                  >
                    {value.item}

                   
                  </Link>
                
                </li>
                  { value.item==='Solar Maintainance Support' && <hr className='pt-2 border-slate-950 '/>}</>
              ))}
            </ul>
                   <ul className="flex flex-col gap-2  text-[12px] ">

              {value.dropDownItems1?.map((value, i) => (
                <li key={i} className="">
                  <Link
                    to={`/service#${value.item}`}
                    onClick={handleClick}
                    className="no-underline"
                  >
                    {value.item}
                  </Link>
                </li>
              ))}
            </ul>
                </li>
              ))}
            </ul>

           

          
         
        </div>
      </div>
    </>
  );
};

export default SideBar;
