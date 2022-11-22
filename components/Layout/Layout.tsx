import React, { ReactNode } from "react";
import Navbar from "./Navbar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="relative w-full font-main text-base font-normal">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
