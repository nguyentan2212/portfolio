import React from "react";
import TimelineItem from "./TimelineItem";

type Props = {};

const Timeline = (props: Props) => {
  return (
    <div className="bg-[#fbf8f8] w-full">
      <div className="container py-20 text-3xl flex flex-col">
        <h2 className="section-title">My Experience</h2>
        <div className="grid grid-cols-2 gap-8">
          <TimelineItem
            title="Computer Science"
            subtitle="Stanford University - 2003"
            desc="Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut."
          />
          <TimelineItem
            title="Computer Science"
            subtitle="Stanford University - 2003"
            desc="Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut."
          />
          <TimelineItem
            title="Computer Science"
            subtitle="Stanford University - 2003"
            desc="Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut."
          />
          <TimelineItem
            title="Computer Science"
            subtitle="Stanford University - 2003"
            desc="Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut."
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
