import React from "react";
import Skill from "./Skill";
import { SiTypescript, SiJavascript, SiCsharp, SiCplusplus, SiReact, SiSolidity } from "react-icons/si";
import { Fade } from "react-awesome-reveal";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="container py-10 md:py-20 text-3xl flex flex-col">
      <h2 className="section-title">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Fade direction="up" duration={500}>
          <Skill
            icon={<SiJavascript size={40} />}
            title="Javascript"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
          <Skill
            icon={<SiTypescript size={40} />}
            title="Typescript"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
          <Skill
            icon={<SiCsharp size={40} />}
            title="C#"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
          <Skill
            icon={<SiCplusplus size={40} />}
            title="C++"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
          <Skill
            icon={<SiReact size={40} />}
            title="Reactjs/Nextjs"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
          <Skill
            icon={<SiSolidity size={40} />}
            title="Solidity"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
        </Fade>
      </div>
    </div>
  );
};

export default Skills;
