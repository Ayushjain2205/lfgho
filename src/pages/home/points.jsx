import React from "react";
import Layout from "../../components/Layout/Layout";
import Decorator from "../../components/UI/Decorator";

const Points = () => {
  return (
    <Layout>
      <Decorator />
      <div className="flex justify-center items-center mt-[43px] h-[63px] w-full bg-[#F4F7F6] rounded-[10px]">
        <span className="text-[#4D9C7D] font-bold text-[20px]">12,000</span>
      </div>
      <p className="mt-[42px] text-[16px] font-medium">OFFERS FOR YOU</p>
      <div className="flex gap-[30px] mt-[20px] overflow-x-auto no-scrollbar">
        {/* Cards go here */}
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 flex flex-col p-[20px] min-w-[244px] h-[307px] bg-[#F4F7F6] rounded-[10px]"
          >
            <div className="absolute bottom-0 left-0 w-full h-[45px] bg-black text-white flex items-center justify-center rounded-b-[10px]">
              claim
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Points;
