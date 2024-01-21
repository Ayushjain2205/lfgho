import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Layout from "../components/Layout/Layout";
import Decorator from "../components/UI/Decorator";

// Import QrReader without SSR
const QrReader = dynamic(() => import("react-qr-scanner"), {
  ssr: false,
});

const Scan = () => {
  const [result, setResult] = useState("No result");
  const router = useRouter(); // Initialize useRouter

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      console.log(data);
      setTimeout(() => {
        router.push("/payment");
      }, 2000);
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
        <p className="mt-[60px] mb-[40px] text-[16px] font-[500]">SCAN & PAY</p>

        <QrReader
          delay={100}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
          constraints={{
            video: { facingMode: "environment" },
          }}
          legacyMode={true}
        />
        <p className="mt-[30px]">earn cred points while you do it</p>
      </div>
    </Layout>
  );
};

export default Scan;
