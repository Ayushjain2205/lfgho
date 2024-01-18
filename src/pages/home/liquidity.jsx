import React from "react";
import Layout from "../../components/Layout/Layout";
import Decorator from "../../components/UI/Decorator";

const liquidity = () => {
  return (
    <Layout>
      <Decorator />
      <p className="mt-[28px] font-[500] text-[16px]">
        ADD LIQUIDITY TO PROTOCOL
      </p>
      <p className="text-[16px] leading-[20px] mt-[20px] mb-[30px]">
        Thankyou for contributing to the pool.
        <br />
        The community welcomes you.
      </p>
      <div className="flex flex-col">
        <label htmlFor="firstName" className="mb-[6px] text-[14px]">
          Amount to pool
        </label>
        <input
          type="text"
          id="amount"
          name="amount"
          value="$500"
          className="p-[12px] h-[48px] border border-black rounded-[6px]"
        />
      </div>
      <div className="flex flex-col mt-[26px]">
        <label htmlFor="amount" className="mb-[6px] text-[14px]">
          Degree of risk
        </label>
        <select
          id="risk"
          name="risk"
          className="p-2 h-[48px] border border-black rounded-[6px] appearance-none"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="flex flex-col mt-[26px]">
        <label htmlFor="firstName" className="mb-[6px] text-[14px]">
          Yield you will earn (%)
        </label>
        <input
          type="text"
          id="yield"
          name="yield"
          value="14%"
          className="p-[12px] h-[48px] border border-black rounded-[6px]"
        />
      </div>
      <button className="self-center h-[45px] w-[213px] mt-[40px] bg-[#000] rounded-[10px] text-white">
        confirm
      </button>
    </Layout>
  );
};

export default liquidity;
