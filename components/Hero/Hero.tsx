import React from "react";
import Image from "next/image";
import avatar from "../../public/images/author.jpg";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaGithubAlt,
  FaTelegramPlane,
  FaAngleRight,
} from "react-icons/fa";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#fbf8f8]">
      <Image
        className="rounded-full outline-2 outline-primary outline mt-10 md:mt-16 mb-5"
        src={avatar}
        alt="avatar"
      />
      <p className="font-semibold">Welcome To My Portfolio!</p>
      <h1 className="text-2xl md:text-6xl leading-[1.3] font-heading">
        {"Hi, I'm Nguyen Minh Tan"}
      </h1>
      <h1 className="text-[#f9004d] text-2xl md:text-6xl leading-[1.3] font-heading">
        Web Developer.
      </h1>
      <p className="max-w-2xl text-center mb-4 text-gray text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex flex-row justify-center items-center gap-3">
        <a className="btn-rounded-gradient" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nguyentan2212">
          <FaLinkedinIn size={15} />
        </a>
        <a className="btn-rounded-gradient" target="_blank" rel="noreferrer" href="https://www.facebook.com/tannguyenminh2212">
          <FaFacebookF size={15} />
        </a>
        <a className="btn-rounded-gradient" target="_blank" rel="noreferrer" href="https://www.t.me/nguyentan2212">
          <FaTelegramPlane size={15} />
        </a>
        <a className="btn-rounded-gradient" target="_blank" rel="noreferrer" href="https://github.com/nguyentan2212">
          <FaGithubAlt size={15} />
        </a>
      </div>
      <button className="relative z-0 btn-gradient my-6 py-3 px-4 text-lg rounded-md text-white font-semibold flex flex-row items-center gap-2">
        Contact me
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Hero;
