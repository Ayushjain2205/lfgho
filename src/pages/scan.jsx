import React, { useState } from "react";
import dynamic from "next/dynamic";
import Layout from "../components/Layout/Layout";
import Decorator from "../components/UI/Decorator";

// Import QrReader without SSR
const QrReader = dynamic(() => import("react-qr-scanner"), {
  ssr: false,
});

const Scan = () => {
  const [result, setResult] = useState("No result");

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      console.log(result);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 250,
    width: 240,
  };

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <Decorator />
        <p className="mt-[60px] text-[16px] font-[500]">SCAN & PAY</p>

        <QrReader
          delay={100}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
          legacyMode={true}
        />
        <p className="mt-[30px]">earn cred points while you do it</p>
      </div>
    </Layout>
  );
};

export default Scan;
