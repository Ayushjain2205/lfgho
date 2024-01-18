import React from "react";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import Decorator from "../../components/UI/Decorator";
import PayCard from "../../components/UI/PayCard";

const gridItems = [
  { href: "/home/points", imgSrc: "/svgs/home1.svg", label: "cred points" },
  { href: "/home/rewards", imgSrc: "/svgs/home2.svg", label: "Rewards" },
  { href: "/home/liquidity", imgSrc: "/svgs/home3.svg", label: "Liquidity" },
  { href: "/home", imgSrc: "/svgs/home4.svg", label: "View all" },
];

const Index = () => {
  return (
    <Layout>
      <Decorator />
      <PayCard />
      <span className="text-[16px] font-[500] mt-[30px] mb-[20px] block w-full">
        EXPLORE CRED
      </span>
      <div className="grid grid-cols-2 gap-[29px]">
        {gridItems.map(({ href, imgSrc, label }, index) => (
          <Link key={index} href={href}>
            <div className="flex flex-col items-center justify-center w-full cursor-pointer">
              <div className="flex items-center justify-center w-full h-[117px] rounded-[20px] bg-[#4D9C7D0D]">
                <img src={imgSrc} className="h-[32px] w-[32px]" alt={label} />
              </div>
              <span className="text-[14px] font-[500] mt-[10px]">{label}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-row justify-between items-center mb-[40px] pl-[28px] pr-[20px] h-[60px] w-[336px] mt-[40px] rounded-[10px] bg-[#4D9C7D0D]">
        <img className="" src="/svgs/dude.svg" alt="" />
        <div className="flex flex-row gap-[10px] items-center">
          <span>check wallet</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.88566 2.0175C4.93211 1.97094 4.98728 1.93399 5.04803 1.90879C5.10877 1.88358 5.1739 1.87061 5.23966 1.87061C5.30543 1.87061 5.37055 1.88358 5.4313 1.90879C5.49204 1.93399 5.54722 1.97094 5.59366 2.0175L11.5937 8.0175C11.6402 8.06394 11.6772 8.11912 11.7024 8.17987C11.7276 8.24061 11.7406 8.30573 11.7406 8.3715C11.7406 8.43727 11.7276 8.50239 11.7024 8.56313C11.6772 8.62388 11.6402 8.67905 11.5937 8.7255L5.59366 14.7255C5.49978 14.8194 5.37244 14.8721 5.23966 14.8721C5.10689 14.8721 4.97955 14.8194 4.88566 14.7255C4.79178 14.6316 4.73903 14.5043 4.73903 14.3715C4.73903 14.2387 4.79178 14.1114 4.88566 14.0175L10.5327 8.3715L4.88566 2.7255C4.8391 2.67905 4.80216 2.62388 4.77695 2.56313C4.75174 2.50239 4.73877 2.43727 4.73877 2.3715C4.73877 2.30573 4.75174 2.24061 4.77695 2.17987C4.80216 2.11912 4.8391 2.06394 4.88566 2.0175Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
