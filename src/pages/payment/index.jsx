import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import SwipeButton from "./SwipeButton"; // Make sure this path is correct

const Payment = () => {
  const [reset, setReset] = useState(0);

  const handleSubmit = () => {
    console.log("Payment Verified");
    // Add logic here for what happens after payment verification
  };

  return (
    <Layout>
      <div className="flex flex-col h-screen justify-between">
        <div className="flex-grow flex flex-col items-center justify-center">
          <div className="flex bg-white h-[100px] w-[100px]">
            <img src="/svgs/makeup_logo.svg" alt="Happy Cosmetics Logo" />
          </div>
          <p className="text-[22px] font-bold mt-4">Happy Cosmetics</p>
          <p className="mt-2">is requesting</p>
          <p className="text-[32px] font-[500] mt-2">$109</p>
        </div>
        <div className="pb-8 px-4 mb-[80px] w-full">
          <SwipeButton onSwipeSuccess={handleSubmit} />
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
