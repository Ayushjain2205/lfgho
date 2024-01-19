import React from "react";
import Layout from "../../components/Layout/Layout";
import Decorator from "../../components/UI/Decorator";
import Link from "next/link";

const Points = () => {
  const cardData = [
    { imgSrc: "/images/offer1.png", coins: 2000 },
    { imgSrc: "/images/offer2.png", coins: 1500 },
    { imgSrc: "/images/offer3.png", coins: 3000 },
    { imgSrc: "/images/offer4.png", coins: 2500 },
  ];

  return (
    <Layout>
      <Decorator />
      <div className="flex justify-center items-center mt-[43px] h-[63px] w-full bg-[#F4F7F6] rounded-[10px]">
        <div className="flex flex-row gap-[6px] items-center justify-center text-[#4D9C7D] font-bold text-[20px]">
          <img className="mt-[6px]" src="/svgs/coin.svg" alt="" />
          <p>12,000</p>
        </div>
      </div>
      <p className="mt-[42px] text-[16px] font-medium">OFFERS FOR YOU</p>
      <div className="flex gap-[30px] mt-[20px] px-[5px] overflow-x-auto no-scrollbar">
        {cardData.map((card, index) => (
          <Link key={index} href="/home/redeem">
            <div className="relative flex-shrink-0 flex flex-col p-[20px] items-center min-w-[244px] h-[307px] bg-[#F4F7F6] rounded-[10px]">
              <img src={card.imgSrc} alt={`Offer ${index + 1}`} />
              <div className="absolute bottom-0 left-0 w-full h-[45px] bg-black text-white flex gap-[10px] items-center justify-center rounded-b-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10V10ZM12.5 10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10ZM5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5C10.1658 5 10.3247 4.93415 10.4419 4.81694C10.5592 4.69973 10.625 4.54076 10.625 4.375C10.625 4.20924 10.5592 4.05027 10.4419 3.93306C10.3247 3.81585 10.1658 3.75 10 3.75C8.3424 3.75 6.75269 4.40848 5.58058 5.58058C4.40848 6.75269 3.75 8.3424 3.75 10C3.75 10.1658 3.81585 10.3247 3.93306 10.4419C4.05027 10.5592 4.20924 10.625 4.375 10.625C4.54076 10.625 4.69973 10.5592 4.81694 10.4419C4.93415 10.3247 5 10.1658 5 10ZM16.25 10C16.25 9.83424 16.1842 9.67527 16.0669 9.55806C15.9497 9.44085 15.7908 9.375 15.625 9.375C15.4592 9.375 15.3003 9.44085 15.1831 9.55806C15.0658 9.67527 15 9.83424 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C9.83424 15 9.67527 15.0658 9.55806 15.1831C9.44085 15.3003 9.375 15.4592 9.375 15.625C9.375 15.7908 9.44085 15.9497 9.55806 16.0669C9.67527 16.1842 9.83424 16.25 10 16.25C11.6576 16.25 13.2473 15.5915 14.4194 14.4194C15.5915 13.2473 16.25 11.6576 16.25 10Z"
                    fill="white"
                  />
                </svg>
                <span>{card.coins}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Points;
