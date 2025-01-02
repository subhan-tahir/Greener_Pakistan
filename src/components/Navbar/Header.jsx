import React, { useState, useRef } from "react";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { contactButtons, navbarItems } from "./script";
import logo from "/src/assets/logo.webp";
import { NavLink,Link } from "react-router-dom";
import SideBar from "./SideBar";
import barBtn from '/src/assets/bar.png'
const Header = () => {
  const [sidebar, setSideBar] = useState(false);
  let toggleSideBarHandler = () => {
    setSideBar(!sidebar);
    document.body.classList.add("overflow-hidden");
  };

  let overlayHandler = () => {
    setSideBar(false);
    document.body.classList.remove("overflow-hidden");
  };
  const handleLinkClick = () => {
    setSideBar(false);
    document.body.classList.remove("overflow-hidden");
  };
  return (
    <>
      {/*Desktop navbar*/}
      <div className="w-full absolute sm:top-0 top-6 z-10">
        {/*top header */}
        <div className="sm:flex hidden justify-between px-8 m-2 py-2">
          {/*left section */}
          <div className="flex items-center gap-6 text-white">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[--primaryColor]" />
              <a href="#">
                <div>info@greener.com.pk</div>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[--primaryColor]" />
              <a href="#">
                <div>0333-1111526</div>
              </a>
            </div>
          </div>
          {/*right section*/}
          <div className="flex gap-2">
            {contactButtons.map((value, index) => {
              const Icon = value.icon;
              return (
                <button
                  key={index}
                  className="p-[4px] bg-white rounded-[6px] text-[20px] text-[--primaryColor]"
                >
                  <a href="#">
                    <Icon />
                  </a>
                </button>
              );
            })}
          </div>
        </div>
        {/*bottom header */}
        <div className="header flex  justify-between bg-[white] px-4 py-3 mx-6  rounded-[25px]">
          <div className="flex justify-center  items-center">
          <NavLink to={'/'}><img src={logo} alt="" className="w-[130px] object-cover" /></NavLink>
          </div>
          <div>
            <ul className="lg:flex hidden gap-6  justify-center items-center">
              {navbarItems.map((value, index) => {
                return (
                  
                    <NavLink to={value.path} key={index}>
                      {" "}
                      <div className="!h-full ">

                     
                       <li
                     
                       className="text-[17px] hover:text-[--primaryColor] transition-colors ease-in-out  inline-block font-[400] cursor-pointer relative dropdown-hover-item"
 
                       tabIndex={index}
                     >
                        {value.item}
                        {value.item === "Services" && (
                          <div className="w-full  dropdown-holder ">

                          
                          <div className="absolute  gap-4  left-[-100px]  z-[50] bg-white rounded-[15px] py-6 px-2 flex  shadow shadow-black">

                            <div className="w-[200px]">
                              <ul className="flex text-[15px]   flex-col gap-2 text-black">
                                {
                                 value.dropDownItems.map((dropdownItem,dropdownIndex)=>
                                  <li key={dropdownIndex} className="list-item hover:text-[--primaryColor] transition-colors">
                                 <Link to={`/service#${dropdownItem.dropDownPath}`}>
                                   {dropdownItem.item}
                                 </Link>
                               </li>
                                    
                                  )
                                }
                                
                              </ul>
                            </div>
                            <div className="border-l border-black"></div> 
                            <div className="w-[220px] pr-8">
                              <ul className="flex flex-col text-[15px] gap-2 text-black ">
                                {
                                  value.dropDownItems1.map((dropdownItem1,dropdownIndex1)=>

                                    <li key={dropdownIndex1} className="hover:text-[--primaryColor] transition-colors"><a href={`/service#${dropdownItem1.path}`}>{dropdownItem1.item}</a></li>
                                  
                                 ) }
                             
                              </ul>
                            </div>
                          </div>
                          </div>
                          
                        )}

                        {
                          value.item === 'Products' &&(
                            <div className="absolute   dropdown-holder   w-[300px] left-[-100px]  z-[50] bg-white rounded-[15px] py-6 px-2   shadow shadow-black">
                                <ul className=" text-[15px] gap-2 text-black ">
                                  <li className="hover:text-[--primaryColor] transition-colors">LV/HT Cables</li>
                                </ul>
                              </div>

                          )
                        }
                      </li>
                      </div>
                    </NavLink>
                  
                );
              })}

              <NavLink to="/contact">
                {" "}
                <li>
                  <button className="bg-[--primaryColor] text-[19px] border-[3px] border-[--primaryColor]  text-[black] w-[200px] h-[55px] btn-style  rounded-full">
                    Contact Us
                  </button>
                </li>
              </NavLink>
            </ul>
            <button 
              onClick={toggleSideBarHandler}
              className="lg:hidden flex  items-center justify-center h-full relative  p-2 text-white "
            >
              <img src={barBtn} alt="" className="w-[40px]" />
            </button>
          </div>
        </div>
      </div>

      {/*sidebar */}

      {/*overlay */}
      {sidebar && (
        <div
          onClick={overlayHandler}
          className={`fixed top-0   z-[20] w-full h-screen ${"bg-[rgba(0,0,0,0.5)]"}`}
        ></div>
      )}
      <SideBar toggleSideBar={sidebar} handleClick={handleLinkClick} />
    </>
  );
};

export default Header;
