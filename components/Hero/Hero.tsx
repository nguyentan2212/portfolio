import React from "react";
import Image from "next/image";
import { Element, scroller } from "react-scroll";
import avatar from "../../public/images/tan.jpg";
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
    <Element
      name="home"
      className="w-full flex flex-col justify-center items-center bg-[#fbf8f8]"
    >
      <Image
        className="rounded-full outline-2 outline-primary outline mt-10 md:mt-16 mb-5"
        src={avatar}
        alt="avatar"
        width={150}
        height={150}
      />
      <p className="font-semibold">Welcome To My Portfolio!</p>
      <h1 className="text-2xl md:text-6xl leading-[1.3] font-heading">
        {"Hi, I'm Nguyen Minh Tan"}
      </h1>
      <h1 className="text-[#f9004d] text-2xl md:text-6xl leading-[1.3] font-heading">
        Web Developer.
      </h1>
      <p className="max-w-2xl text-center mb-4 text-gray text-base">
        As a fresher programmer majoring in Software Engineering, I have learned
        and experienced projects using ReactJS and JavaScript at school.
      </p>
      <div className="flex flex-row justify-center items-center gap-3">
        <a
          className="btn-rounded-gradient"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/nguyentan2212"
        >
          <FaLinkedinIn size={15} />
        </a>
        <a
          className="btn-rounded-gradient"
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/tannguyenminh2212"
        >
          <FaFacebookF size={15} />
        </a>
        <a
          className="btn-rounded-gradient"
          target="_blank"
          rel="noreferrer"
          href="https://www.t.me/nguyentan2212"
        >
          <FaTelegramPlane size={15} />
        </a>
        <a
          className="btn-rounded-gradient"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/nguyentan2212"
        >
          <FaGithubAlt size={15} />
        </a>
      </div>
      <button
        className="relative z-0 btn-gradient my-6 py-3 px-4 text-lg rounded-md text-white font-semibold flex flex-row items-center gap-2"
        onClick={() =>
          scroller.scrollTo("contact", {
            spy: true,
            smooth: true,
            hashSpy: true,
            duration: 1000,
            isDynamic: true,
          })
        }
      >
        Contact me
        <FaAngleRight />
      </button>
    </Element>
  );
};

export default Hero;
