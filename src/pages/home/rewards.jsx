import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Decorator from "../../components/UI/Decorator";
import { useRouter } from "next/router";

const Rewards = () => {
  const [currentCard, setCurrentCard] = useState(1);
  const [isFlickering, setIsFlickering] = useState(true);
  const router = useRouter();

  useEffect(() => {
    let interval;
    if (isFlickering) {
      interval = setInterval(() => {
        setCurrentCard(Math.floor(Math.random() * 8) + 1);
      }, 400);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isFlickering]);

  const handleClaimClick = () => {
    setIsFlickering(false);
    setCurrentCard(6);
    setTimeout(() => {
      router.push("/home/claim");
    }, 1500);
  };

  return (
    <Layout>
      <Decorator />
      <div className="flex flex-col items-center">
        <p className="text-[16px] font-[500] mt-[38px] mb-[16px] w-full text-center">
          WIN REWARDS
        </p>
        {/* Card display */}
        <div
          className={`flex justify-center items-center mb-12 w-[271px] h-[277px] rounded-[10px] bg-[#F4F7F6] ${
            isFlickering ? "flicker" : ""
          }`}
        >
          <img
            src={`/images/brand${currentCard}.png`}
            alt={`Brand ${currentCard}`}
          />
        </div>
        <button
          className="h-[45px] w-[213px] bg-black rounded-[10px] text-white"
          onClick={handleClaimClick}
          disabled={!isFlickering}
        >
          claim now
        </button>
      </div>
    </Layout>
  );
};

export default Rewards;
