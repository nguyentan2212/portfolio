import React from "react";
import Image from "next/image";
import Link from "next/link";
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
        className="rounded-full outline-2 outline-primary outline mt-16 mb-5"
        src={avatar}
        alt="avatar"
      />
      <p className="font-semibold">Welcome To My Portfolio!</p>
      <h1 className="text-6xl leading-[1.3] font-heading">
        Hi, I'm Nguyen Minh Tan
      </h1>
      <h1 className="text-[#f9004d] text-6xl leading-[1.3] font-heading">
        Web Developer.
      </h1>
      <p className="max-w-2xl text-center mb-4 text-gray text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex flex-row justify-center items-center gap-3">
        <Link className="btn-social" href="https://www.linkedin.com/">
          <FaLinkedinIn size={15} />
        </Link>
        <Link className="btn-social" href="https://www.linkedin.com/">
          <FaFacebookF size={15} />
        </Link>
        <Link className="btn-social" href="https://www.linkedin.com/">
          <FaTelegramPlane size={15} />
        </Link>
        <Link className="btn-social" href="https://www.linkedin.com/">
          <FaGithubAlt size={15} />
        </Link>
      </div>
      <button className="my-6 py-3 px-4 bg-primary hover:bg-black rounded-md text-white font-semibold flex flex-row items-center gap-2 duration-150 transition-all ease-linear">
        Contact me
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Hero;
