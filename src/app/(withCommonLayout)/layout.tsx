import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/Footer/Footer";

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar /> {children}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default CommonLayout;
