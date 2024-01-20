import React from "react";
import Layout from "../../components/Layout/Layout";
import Done from "../../components/Lottie/Done";

const success = () => {
  return (
    <Layout>
      <div className="flex flex-col h-[540px] gap-[20px] items-center justify-center">
        <p>Payment Complete!</p>
        <Done />
      </div>
    </Layout>
  );
};

export default success;
