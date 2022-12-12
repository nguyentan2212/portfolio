import React, { FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";
import banner from "../../public/images/it-service.png";

type Props = {};

const HireMeForm = (props: Props) => {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Element name="contact" className="container py-10 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-5">
      <Image src={banner} alt="banner" />
      <div className="flex flex-col items-center">
        <h2 className="font-heading text-4xl text-black mb-4">Hire Me!</h2>
        <p className="text-base text-gray">
          I am available for freelancing work. Please connect with me via phone:
        </p>
        <p className="text-base text-gray font-inter mb-8">
          <Link
            className="font-bold transition-all hover:text-primary ease-in-out duration-200"
            href="tel:0945241778"
          >
            0945 241 778
          </Link>
          {" or email: "}
          <Link
            className="font-bold transition-all hover:text-primary ease-in-out duration-200"
            href="mailto:nguyentan2212@gmail.com"
          >
            nguyentan2212@gmail.com
          </Link>
        </p>
        <form
          className="w-full flex flex-col md:grid gap-4 md:grid-cols-2 md:gap-7 font-inter"
          onSubmit={submitHandler}
        >
          <input
            className="rounded-md border-none bg-slate-200 focus:ring-1 focus:ring-primary py-4"
            type="text"
            name="name"
            placeholder="Name"
          ></input>
          <input
            className="rounded-md border-none bg-slate-200 focus:ring-1 focus:ring-primary py-4"
            type="text"
            name="email"
            placeholder="Email"
          ></input>
          <input
            className="rounded-md border-none bg-slate-200 focus:ring-1 focus:ring-primary py-4"
            type="text"
            name="phonenumber"
            placeholder="Phone number"
          ></input>
          <input
            className="rounded-md border-none bg-slate-200 focus:ring-1 focus:ring-primary py-4"
            type="text"
            name="subject"
            placeholder="Subject"
          ></input>
          <textarea
            className="md:col-span-2 min-h-[150px] rounded-md border-none bg-slate-200 focus:ring-1 focus:ring-primary py-4"
            name="message"
            placeholder="Write your message..."
          />
          <button
            type="submit"
            className="relative mx-auto md:col-span-2 rounded-md font-bold font-inter text-white px-4 py-2 bg-transparent btn-gradient"
          >
            Send Message
          </button>
        </form>
      </div>
    </Element>
  );
};

export default HireMeForm;
