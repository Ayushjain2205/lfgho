import React, { useState } from "react";

const Widget = () => {
  const [stage, setStage] = useState(1);

  const handleProceed = () => {
    setStage(stage + 1);
  };

  return (
    <div className="flex flex-row h-screen bg-slate-50">
      <div className="flex flex-col h-[640px] w-[375px] m-auto shadow-lg">
        {stage === 1 && (
          <div className="flex flex-col items-center justify-center h-[425px]">
            <button onClick={handleProceed}>Buy</button>
          </div>
        )}

        {stage === 2 && (
          <div>
            <div className="flex flex-col items-center justify-center h-[425px] bg-[#90C0AD]">
              <div className="flex bg-white h-[100px] w-[100px]">
                <img src="/svgs/makeup_logo.svg" alt="" />
              </div>
              <div className="flex flex-row gap-[10px] items-center mt-[10px]">
                <p className="text-[22px] font-bold text-white ">
                  Happy Cosmetics
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8V8ZM12.03 4.97C11.9586 4.89882 11.8735 4.84277 11.7799 4.80522C11.6863 4.76766 11.5861 4.74936 11.4853 4.75141C11.3845 4.75347 11.2851 4.77583 11.1932 4.81717C11.1012 4.85851 11.0185 4.91797 10.95 4.992L7.477 9.417L5.384 7.323C5.24182 7.19052 5.05378 7.1184 4.85948 7.12183C4.66518 7.12525 4.47979 7.20397 4.34238 7.34138C4.20497 7.47879 4.12625 7.66418 4.12283 7.85848C4.1194 8.05278 4.19152 8.24083 4.324 8.383L6.97 11.03C7.04128 11.1012 7.12616 11.1572 7.21958 11.1949C7.313 11.2325 7.41305 11.2509 7.51375 11.2491C7.61444 11.2472 7.71374 11.2251 7.8057 11.184C7.89766 11.1429 7.9804 11.0837 8.049 11.01L12.041 6.02C12.1771 5.8785 12.2523 5.68928 12.2504 5.49296C12.2485 5.29664 12.1698 5.10888 12.031 4.97H12.03Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="mt-[20px] text-[18px] text-[#f1f1f1]">
                Total Amount
              </p>
              <p className="text-[26px] font-[500] text-white">$109</p>
            </div>
            <div className="flex flex-col h-[215px] bg-[#fff] p-[16px]">
              <div className="flex flex-row items-center gap-[8px] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M15 0H5C4.33696 0 3.70107 0.263392 3.23223 0.732233C2.76339 1.20107 2.5 1.83696 2.5 2.5V17.5C2.5 18.163 2.76339 18.7989 3.23223 19.2678C3.70107 19.7366 4.33696 20 5 20H15C15.663 20 16.2989 19.7366 16.7678 19.2678C17.2366 18.7989 17.5 18.163 17.5 17.5V2.5C17.5 1.83696 17.2366 1.20107 16.7678 0.732233C16.2989 0.263392 15.663 0 15 0V0ZM13.75 8.75C13.75 9.74456 13.3549 10.6984 12.6517 11.4017C11.9484 12.1049 10.9946 12.5 10 12.5C9.00544 12.5 8.05161 12.1049 7.34835 11.4017C6.64509 10.6984 6.25 9.74456 6.25 8.75C6.25 7.75544 6.64509 6.80161 7.34835 6.09835C8.05161 5.39509 9.00544 5 10 5C10.9946 5 11.9484 5.39509 12.6517 6.09835C13.3549 6.80161 13.75 7.75544 13.75 8.75V8.75ZM10 13.75C13.2787 13.75 15.1825 14.7825 16.25 15.9438V17.5C16.25 17.8315 16.1183 18.1495 15.8839 18.3839C15.6495 18.6183 15.3315 18.75 15 18.75H5C4.66848 18.75 4.35054 18.6183 4.11612 18.3839C3.8817 18.1495 3.75 17.8315 3.75 17.5V15.9438C4.8175 14.7813 6.72125 13.75 10 13.75Z"
                    fill="black"
                  />
                </svg>
                <p>Contact details</p>
              </div>
              <div className="flex flex-col mt-[2px]">
                <label
                  htmlFor="firstName"
                  className="mb-[6px] mt-[8px] text-[14px]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="yield"
                  name="yield"
                  value="Ayush Jain"
                  className="p-[12px] h-[42px] border border-black rounded-[6px]"
                />
              </div>
              <button
                onClick={handleProceed}
                className="self-center h-[45px] w-full mt-[40px] bg-[#90C0AD] rounded-[10px] text-white font-bold"
              >
                Proceed
              </button>
            </div>
          </div>
        )}

        {stage === 3 && (
          <div className="flex flex-col items-center justify-center h-[80px] bg-[#90C0AD]">
            <div className="flex flex-row gap-[16px] items-center w-full p-[16px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15 8.00014C15 7.86753 14.9473 7.74036 14.8535 7.64659C14.7598 7.55282 14.6326 7.50014 14.5 7.50014H2.70699L5.85399 4.35414C5.90048 4.30766 5.93736 4.25247 5.96252 4.19173C5.98768 4.13099 6.00063 4.06589 6.00063 4.00014C6.00063 3.9344 5.98768 3.8693 5.96252 3.80856C5.93736 3.74782 5.90048 3.69263 5.85399 3.64614C5.80751 3.59966 5.75232 3.56278 5.69158 3.53762C5.63084 3.51246 5.56574 3.49951 5.49999 3.49951C5.43425 3.49951 5.36915 3.51246 5.30841 3.53762C5.24767 3.56278 5.19248 3.59966 5.14599 3.64614L1.14599 7.64614C1.09943 7.69259 1.06249 7.74776 1.03728 7.80851C1.01207 7.86925 0.9991 7.93438 0.9991 8.00014C0.9991 8.06591 1.01207 8.13103 1.03728 8.19178C1.06249 8.25252 1.09943 8.3077 1.14599 8.35414L5.14599 12.3541C5.19248 12.4006 5.24767 12.4375 5.30841 12.4627C5.36915 12.4878 5.43425 12.5008 5.49999 12.5008C5.56574 12.5008 5.63084 12.4878 5.69158 12.4627C5.75232 12.4375 5.80751 12.4006 5.85399 12.3541C5.90048 12.3077 5.93736 12.2525 5.96252 12.1917C5.98768 12.131 6.00063 12.0659 6.00063 12.0001C6.00063 11.9344 5.98768 11.8693 5.96252 11.8086C5.93736 11.7478 5.90048 11.6926 5.85399 11.6461L2.70699 8.50014H14.5C14.6326 8.50014 14.7598 8.44747 14.8535 8.3537C14.9473 8.25993 15 8.13275 15 8.00014Z"
                  fill="white"
                />
              </svg>

              <div className="flex bg-white h-[60px] w-[60px]">
                <img src="/svgs/makeup_logo.svg" alt="" />
              </div>
              <p className="text-[20px] font-semibold text-white ">
                Happy Cosmetics
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Widget;
