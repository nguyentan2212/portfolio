import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaGithubAlt,
  FaTelegramPlane,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-[#fbf8f8] w-full font-inter">
      <div className="container pt-10 md:pt-20 pb-10 grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16">
        <div className="flex flex-col gap-8">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <p className="text-base text-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <div className="flex flex-row justify-start items-center gap-3">
            <a
              className="btn-rounded-gradient"
              target="_blank"
              href="https://www.linkedin.com/in/nguyentan2212"
            >
              <FaLinkedinIn className="relative z-10" size={15} />
            </a>
            <a
              className="btn-rounded-gradient"
              target="_blank"
              href="https://www.facebook.com/tannguyenminh2212"
            >
              <FaFacebookF className="relative z-10" size={15} />
            </a>
            <a
              className="btn-rounded-gradient"
              target="_blank"
              href="https://www.t.me/nguyentan2212"
            >
              <FaTelegramPlane className="relative z-10" size={15} />
            </a>
            <a
              className="btn-rounded-gradient"
              target="_blank"
              href="https://github.com/nguyentan2212"
            >
              <FaGithubAlt className="relative z-10" size={15} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-heading text-2xl mb-6 pb-[10px] border-b border-slate-200 relative before:absolute before:w-[60px] before:h-[3px] before:inset-x-0 before:bottom-[-2px] before:bg-gradient after:absolute after:w-[10px] after:h-[3px] after:bg-[#fbf8f8] after:bottom-[-2px] after:left-[40px]">
            Explore
          </h3>
          <div className="flex flex-col items-start gap-3 font-inter text-base text-gray">
            <Link className="link-list-item" href="/">
              Home
            </Link>
            <Link className="link-list-item" href="/">
              Skills
            </Link>
            <Link className="link-list-item" href="/">
              Projects
            </Link>
            <Link className="link-list-item" href="/">
              Experience
            </Link>
            <Link className="link-list-item" href="/">
              Get My CV
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-heading text-2xl mb-6 pb-[10px] border-b border-slate-200 relative before:absolute before:w-[60px] before:h-[3px] before:inset-x-0 before:bottom-[-2px] before:bg-gradient after:absolute after:w-[10px] after:h-[3px] after:bg-[#fbf8f8] after:bottom-[-2px] after:left-[40px]">
            Get in Touch
          </h3>
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-row gap-4 justify-start items-center">
              <div className="rounded-full p-2 bg-gradient text-white">
                <FaFacebookF size={15} />
              </div>
              <a
                className="text-base text-gray font-inter transition-all ease-in-out duration-300 hover:text-primary"
                target="_blank"
                href="https://www.facebook.com/tannguyenminh2212"
              >
                @tannguyenminh2212
              </a>
            </div>
            <div className="flex flex-row gap-4 justify-start items-center">
              <div className="rounded-full p-2 bg-gradient text-white">
                <FaPhone size={15} />
              </div>
              <Link
                className="text-base text-gray font-inter transition-all ease-in-out duration-300 hover:text-primary"
                href="tel:0945241778"
              >
                0945241778
              </Link>
            </div>

            <div className="flex flex-row gap-4 justify-start items-center">
              <div className="rounded-full p-2 bg-gradient text-white">
                <FaEnvelope size={15} />
              </div>
              <Link
                className="text-base text-gray font-inter transition-all ease-in-out duration-300 hover:text-primary"
                href="mailto:nguyentan2212@gmail.com"
              >
                nguyentan2212@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
