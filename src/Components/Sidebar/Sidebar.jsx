import React from "react";
import drum from "../../assets/Frame.png";
import framone from "../../assets/Frame (1).png";
import framtwo from "../../assets/Frame (2).png";
import framthree from "../../assets/Frame (3).png";
import framfour from "../../assets/Frame (4).png";
import { IoIosArrowDown } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
const Sidebar = () => {
  return (
    <div className="w-60 h-screen  p-4 border-r ">
      <div className="flex gap-[5px] pl-[10px] rounded">
        <img src={drum} alt="" className="w-[24px] h-[24px]" />
        <h2 className="text-lg font-semibold mb-4">trackeet</h2>
      </div>
      <nav>
        <ul className="space-y-2">
          <div className="flex rounded hover:bg-gray-200 pl-[10px]">
            <img
              src={framone}
              alt=""
              className="w-[19.5px] h-[16.5px] mt-[10px]"
            />
            <li>
              <a href="#" className="block py-2 px-4">
                Expenses
              </a>
            </li>
          </div>

          <div className="flex rounded hover:bg-gray-200 pl-[10px]">
            <img
              src={framtwo}
              alt=""
              className="w-[19.5px] h-[16.5px] mt-[10px]"
            />
            <li>
              <a href="#" className="block py-2 px-4 ">
                Budgets
              </a>
            </li>
          </div>

          <div className="flex rounded hover:bg-gray-200 pl-[10px]">
            <img
              src={framthree}
              alt=""
              className="w-[19.5px] h-[16.5px] mt-[10px]"
            />
            <li>
              <a href="#" className="block py-2 px-4 ">
                Reports
              </a>
            </li>
          </div>

          <div className=" gap-1 pl-[10px] ">
            {/* start */}
            <div className="group">
              <li>
                <a className=" transition cursor-pointer flex">
                <img src={framfour} alt=""  className='w-[19.5px] h-[16.5px] mt-[2px]'/>
                 <p className="ml-[15px] ">
                  Settings</p>
                  <IoIosArrowDown className="pt-[6px] w-[20px] h-[20px] ml-[90px]" />
                </a>
              </li>
              <div className="hidden group-hover:flex flex-col absolute  w-50 h-50  z-10 rounded-[10px]  duration-300">
                <div className="flex flex-col pt-3 leading-8  w-[200px]">
                  <a href="" className="hover:rounded hover:bg-gray-200 w-[100%] pl-[35px] ">
                    Personal
                  </a>
                  <a href="" className="hover: rounded hover:bg-gray-200 w-[100%] pl-[35px]">
                    Business
                  </a>
                  <a href="" className="hover:rounded hover:bg-gray-200 w-full pl-[35px]">
                    Security
                  </a>
                </div>
              </div>
            </div>
            {/* end */}
          </div>
        </ul>
      </nav>
<div className="mt-[400px] md:mt-[800px]">
      <hr className="text-[#344054]"/>
    <div className="flex items-center justify-center p-8 ">
      <div className="flex items-center space-x-2">
          <div className="bg-gray-300 h-14 w-14 rounded-full flex items-center justify-center  text-[#344054] font-bold text-[16px]">
           PJ 
          </div>
        <div>
          <h2 className="text-[#344054] font-bold text-[14px]">Paul James</h2>
          <p className="text-gray-500 font-normal text-[14px]">useremail@email.com</p>
        </div>
      </div>
      
      <div className="flex items-center cursor-pointer">
        <div className="text-gray-500 hover:text-gray-700 size-[20px] pl-[10px]">
        <LuLogOut />
        </div>
      </div>

    </div>
    </div>
    </div>
  );
};

export default Sidebar;
