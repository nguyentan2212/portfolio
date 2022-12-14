import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="relative font-main text-base font-normal">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
