import React from "react";
import Layout from "../../components/Layout/Layout";
import Decorator from "../../components/UI/Decorator";
import Confetti from "react-confetti";

const claim = () => {
  return (
    <Layout>
      <Confetti width="385" height="665" />
      <Decorator />
      <div className="flex flex-col items-center">
        <p className="text-[20px] text-[#4D9C7D] font-[500] mt-[38px] mb-[25px] w-full text-center">
          wohooo, congratulations!
        </p>
        <div className="flex flex-col gap-[42px] justify-center items-center mb-[66px] w-[271px] h-[277px] rounded-[10px] bg-[#F4F7F6] border-[3px] border-[#4D9C7D]">
          <img src="/images/brand6.png" />
          <p className="text-[20px] w-[200px] text-center">
            $100 off on your next purchase
          </p>
        </div>
        <p className="font-[300]">reward stored in wallet</p>
      </div>
    </Layout>
  );
};

export default claim;
