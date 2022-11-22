import React from "react";

type Props = {
  title: string;
  subtitle: string;
  desc: string;
};

const Experience = (props: Props) => {
  return (
    <div className="pl-10 flex flex-col items-start gap-3 relative before:absolute before:inset-x-0 before:top-1 before:w-4 before:h-4 before:bg-black before:border-[3px] before:border-black before:hover:bg-white before:rounded-full after:absolute after:left-[6px] after:bottom-0 after:w-[3px] after:h-4/5 after:bg-slate-200">
      <p className="text-base text-gray font-inter font-semibold">
        {props.subtitle}
      </p>
      <h3 className="text-xl text-black font-heading">{props.title}</h3>
      <p className="text-gray text-base">{props.desc}</p>
    </div>
  );
};

export default Experience;
