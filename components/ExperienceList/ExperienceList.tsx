import React from "react";
import Experience from "./Experience";

type Props = {};

const ExperienceList = (props: Props) => {
  return (
    <div className="container pb-24 text-3xl flex flex-col">
      <h2 className="section-title">My Experience</h2>
      <div className="grid grid-cols-2 gap-8">
        <Experience
          title="Computer Science"
          subtitle="Stanford University - 2003"
          desc="Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut."
        />
        <Experience
          title="Computer Science"
          subtitle="Stanford University - 2003"
          desc="Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut."
        />
        <Experience
          title="Computer Science"
          subtitle="Stanford University - 2003"
          desc="Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut."
        />
        <Experience
          title="Computer Science"
          subtitle="Stanford University - 2003"
          desc="Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut."
        />
      </div>
    </div>
  );
};

export default ExperienceList;
