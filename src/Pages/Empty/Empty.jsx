// import React, { useState } from 'react'
import drum from "../../assets/Frame.png";
import Sidebar from '../../Components/Sidebar/Sidebar'
import { RiMenu2Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { LuCircleSlash2 } from "react-icons/lu";

const Empty = () => {

  return (
    <div>
        <div className='hidden absolute bg-white md:block md:absolute'>
        <Sidebar/>
        </div>
        <div>
        <div className='flex justify-between text-[20px] mt-[20px]'>
         <div className="flex rounded md:hidden pl-[20px]">
          <img src={drum} alt="" className="w-[24px] h-[24px] " />
          <h2 className="text-lg font-semibold mb-4">trackeet</h2>
         </div>
         <div className='md:hidden pr-[20px]'>
         <RiMenu2Line />
         </div>
        </div>
        <hr className='md:hidden'/>
        </div>
        <div className='m-[14px] md:pl-[250px]'>
            <div className='mb-[50px]'>
            <h2 className='font-bold text-[24px]'>Hi, Paul</h2>
            <p className='font-normal text-[16px]'>What will you do today?</p>
            </div>
          <div>
          <div className="flex justify-between gap-[12px] border-[#101828] border rounded-xl p-[20px] mb-[40px]">
            <div>
            <p className='font-normal text-[16px]'>Your total expenses</p>
            <h2 className='font-bold text-[20px]'>NGN 0.00</h2>
            </div>
            <div className='bg-[#101828] text-[#ffffff] h-[38px] w-[50px] md:w-[100px] border rounded-xl pl-[15px] pt-[10px] mt-[10px] '>
            <FaPlus className='md:hidden'/>
            <h2 className='font-normal text-[10px] pl-[2px] hidden md:block'>Add Expenses</h2>
            </div>
         </div>

         </div>
        </div>
        <div className='border-[#101828] border rounded-xl text-center m-[15px] h-[150px] pt-[20px] md:ml-[264px] '>
        <LuCircleSlash2 className='w-[27px] h-[27px] text-[#98A2B3] m-auto '/>
            <div>
                <h5 className='font-bold text-[14px] text-[#101828] pt-[10px]'>No expenses have been added yet!</h5>
                 <p className='font-normal text-[12px] text-[#475467] pt-[10px]'>Once you add any expenses, they'll start showing <br />up here.</p>
            </div>
        </div>
    </div>
  )
}

export default Empty