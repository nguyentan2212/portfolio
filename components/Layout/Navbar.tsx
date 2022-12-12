import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import Link from "next/link";
import { Link as ScrollLink, scroller } from "react-scroll";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="sticky top-0 w-full bg-[#fbf8f8] z-50">
      <div className="container flex flex-row justify-between items-center py-5 font-semibold font-inter">
        <Link href="#">
          <Image src={logo} alt="logo" />
        </Link>
        <div className="hidden md:flex flex-row gap-6 items-center">
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={500}
            isDynamic={true}
            offset={-80}
            className="navbar-item cursor-pointer"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="skills"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={500}
            isDynamic={true}
            className="navbar-item cursor-pointer"
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="experience"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={500}
            isDynamic={true}
            className="navbar-item cursor-pointer"
          >
            Experience
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={600}
            isDynamic={true}
            className="navbar-item cursor-pointer"
          >
            Contact
          </ScrollLink>
          <a
            className="relative rounded-full text-white px-4 py-2 bg-transparent btn-gradient"
            href="Nguyen-Minh-Tan-CV.pdf"
            download
          >
            My CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
