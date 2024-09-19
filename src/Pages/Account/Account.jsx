import React from "react";
import frameone from "../../assets/Frame (5).png";
import call from "../../assets/Featured icon.png";
import house from "../../assets/Featured icon (1).png";
const Account = () => {
  return (
    <div className="mt-[40px] md:mt-[277px]">
        <div className="sm:w-[320px] md:w-[500px] h-[420px] sm:mx-auto">
      <div className="text-center">

        <div className="flex justify-center text-[#101828] ">
          <img src={frameone} alt="" className="size-[24px] mt-1 md:size-[30px] md:mt-[10px]" />
          <h2 className=" text-[20px] font-bold md:text-[30px]">
            trackeet
          </h2>
        </div>

        <h1 className="font-bold text-[24px] text-[#101828] mt-[20px] mb-[20px] md:text-[40px]">
          Create Account
        </h1>
        <p className="font-normal text-[16px] text-[#475467] mb-[30px] md:text-[25px]">
          Choose an account type
        </p>
      </div>

      <div className="px-4 w-[100%] h-[100px]">
        <div className="flex gap-[12px] border-[#E4E7EC] hover:border-[#101828] border rounded-xl p-[20px]">
          <img src={call} alt="" className="text-[#E4E7EC] size-[50px]" />
          <div className=" w-[215px]">
            <h2 className="font-bold text-[#344054] text-[16px] md:text-[20px]">Personal</h2>
            <p className="font-normal text-[#475467] text-[14px] md:text-[15px]">
              Sign up as an individual
            </p>
          </div>
          <input
            type="checkbox"
            className=" border-[#D0D5DD] border rounded size-[16px] mt-[15px] md:ml-[120px] cursor-pointer"
          />
        </div>

        <div className="flex gap-[12px] border-[#E4E7EC] hover:border-[#101828] border rounded-xl  p-[20px] mt-[30px]">
          <img src={house} alt="" className="text-[#E4E7EC] size-[50px]" />
          <div className=" w-[215px]">
            <h2 className="font-bold text-[#344054] text-[16px] md:text-[20px]">Business</h2>
            <p className="font-normal text-[#475467] text-[14px]">
              Sign up as a business
            </p>
          </div>
          <input
            type="checkbox"
            className=" border-[#D0D5DD] border rounded size-[16px] mt-[15px] md:ml-[120px] cursor-pointer"
          />
        </div>
          <button className="w-full bg-[#101828] text-[#FFFFFF] h-[46px] border rounded-lg mt-[30px] text-[16px] font-bold">Continue</button>
        
        <p className="text-center mt-[30px] text-[#475467] text-[14px] font-normal">Already have an account? <a href="#" className="text-[#101828] font-bold text-[14px]">Login</a></p>
      </div>
      </div>
    </div>
  );
};

export default Account;
