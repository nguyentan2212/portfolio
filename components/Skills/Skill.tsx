import React, { ReactElement } from "react";
import { Fade } from "react-awesome-reveal";

type Props = {
  icon: ReactElement;
  title: string;
  desc: string;
  delay?: number;
};

const Skill = (props: Props) => {
  return (
    <Fade cascade triggerOnce direction="up" delay={props.delay ? props.delay : 0}>
      <div className="flex flex-col items-start">
        <div className="mb-6 p-5 rounded-md bg-slate-200 text-black hover:bg-black hover:text-white duration-200 ease-in-out">{props.icon}</div>
        <h3 className="font-heading text-xl mb-3">{props.title}</h3>
        <p className="text-gray text-base">{props.desc}</p>
      </div>
    </Fade>
  );
};

export default Skill;
