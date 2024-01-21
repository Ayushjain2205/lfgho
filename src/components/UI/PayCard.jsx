import React from "react";

const PayCard = () => {
  return (
    <div className="relative flex flex-col mt-[30px] p-[20px] w-[334px] h-[216px] bg-[#F4F7F6] rounded-[10px] overflow-hidden">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <span className="text-[14px] font-[500] text-[#90C0AD]">
            iyushjain@entropay
          </span>
          <span className="mt-[24px] text-[#c4c4c4] font-[500]">Jan 2024</span>
          <span className="text-[24px] font-bold">$342</span>
          <span className=" text-[#c4c4c4] font-[500]">$500</span>
        </div>
        <div className="flex flex-col mt-[16px] mr-[18px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="93"
            height="88"
            viewBox="0 0 93 88"
            fill="none"
          >
            <rect
              x="0.295898"
              y="9.87695"
              width="86.4756"
              height="77.7856"
              fill="#11543A"
              fill-opacity="0.5"
            />
            <rect
              x="16.8145"
              y="0.225098"
              width="75.6108"
              height="75.6108"
              fill="#90C0AD"
            />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[45px] bg-black text-white flex items-center justify-center rounded-b-[10px]">
        pay bill
      </div>
    </div>
  );
};

export default PayCard;
