import React from "react";
import Navbar from "../UI/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <Navbar />
    </div>
  );
};

export default Layout;
