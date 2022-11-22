import React from "react";
import Skill from "./Skill";
import { FaGithubAlt } from "react-icons/fa";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="container py-24 text-3xl flex flex-col">
      <h2 className="section-title">
        My Skills
      </h2>
      <div className="grid grid-cols-3 gap-6">
        <Skill
          icon={<FaGithubAlt size={40} />}
          title="Product Design"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <Skill
          icon={<FaGithubAlt size={40} />}
          title="Product Design"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <Skill
          icon={<FaGithubAlt size={40} />}
          title="Product Design"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <Skill
          icon={<FaGithubAlt size={40} />}
          title="Product Design"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <Skill
          icon={<FaGithubAlt size={40} />}
          title="Product Design"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <Skill
          icon={<FaGithubAlt size={40} />}
          title="Product Design"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />
      </div>
    </div>
  );
};

export default Skills;
