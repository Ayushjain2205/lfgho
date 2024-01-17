import React from "react";
import Navbar from "../UI/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="px-[27px] pt-[22px] mb-[65px]">{children}</div>
      <Navbar />
    </div>
  );
};

export default Layout;
