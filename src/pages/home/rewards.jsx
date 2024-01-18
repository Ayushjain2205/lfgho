import React from "react";
import Layout from "../../components/Layout/Layout";
import Decorator from "../../components/UI/Decorator";

const rewards = () => {
  return (
    <Layout>
      <Decorator />
      <div className="flex flex-col items-center">
        <p className="text-[16px] font-[500] mt-[38px] mb-[16px] w-full">
          WIN REWARDS
        </p>
        <div className="w-[271px] h-[277px] mb-[50px] rounded-[10px] bg-[#F4F7F6]"></div>
        <button className="h-[45px] w-[213px] bg-[#000] rounded-[10px] text-white">
          claim now
        </button>
      </div>
    </Layout>
  );
};

export default rewards;
