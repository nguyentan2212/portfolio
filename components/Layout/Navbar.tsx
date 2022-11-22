import React from "react";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="sticky top-0 w-full shadow-sm bg-white">
      <div className="container flex flex-row justify-between items-center py-5 font-semibold font-inter">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <div className="flex flex-row gap-6 items-center">
          <Link href="/" className="navbar-item">
            Home
          </Link>
          <Link href="#" className="navbar-item">
            Projects
          </Link>
          <Link href="#" className="navbar-item">
            Experience
          </Link>
          <button className="relative rounded-full text-white px-4 py-2 bg-transparent btn-gradient">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
