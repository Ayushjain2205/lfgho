import React from "react";
import Layout from "../../components/Layout/Layout";
import Done from "../../components/Lottie/Done";
import Link from "next/link";

const success = () => {
  return (
    <Layout>
      <div className="flex flex-col h-[540px] gap-[20px] items-center justify-center">
        <p>Payment Complete!</p>
        <Done />
        <div className="flex flex-row items-center gap-[2px]">
          <p className="text-[18px]">
            You recieved <span className="font-semibold">1000</span>
          </p>
          <img className="mt-[6px]" src="/svgs/coin.svg" alt="" />
        </div>
        <Link href="/home/points">
          <button className="h-[45px] w-[213px] bg-black rounded-[10px] text-white">
            redeem points
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default success;
