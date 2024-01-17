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
    height: 240,
    width: 320,
  };

  return (
    <Layout>
      <div>
        <Decorator />
        <QrReader
          delay={100}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
          legacyMode={true}
        />
        {/* <p>{result}</p> */}
      </div>
    </Layout>
  );
};

export default Scan;
