import React from "react";
import { Fade } from "react-awesome-reveal";

type Props = {};

const GetCV = (props: Props) => {
  return (
    <div className="w-full bg-fixed bg-[url('/images/hero-banner.jpg')] py-24 relative before:absolute before:inset-0 before:w-full before:h-full before:opacity-90 before:bg-gradient">
      <div className="relative w-full z-10">
        <p className="font-main font-semibold text-lg md:text-xl text-center text-white mb-2">
          SO WHAT IS NEXT?
        </p>
        <h1 className="font-heading text-center text-3xl md:text-7xl text-white font-extrabold max-w-4xl mx-auto">
          Are You Ready? Let's Get To Work!
        </h1>
        <Fade
          cascade
          direction="up"
          className="flex flex-row justify-center mt-10"
        >
          <button
            className="py-2 px-6 md:py-4 md:px-9 bg-white hover:bg-black rounded-md text-primary hover:text-white hover:duration-150 transition-all ease-linear font-main font-semibold text-lg"
            onClick={() => console.log("click!")}
          >
            Get My CV
          </button>
        </Fade>
      </div>
    </div>
  );
};

export default GetCV;
