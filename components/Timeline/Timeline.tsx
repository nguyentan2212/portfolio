import React from "react";
import { Element } from "react-scroll";
import TimelineItem from "./TimelineItem";

type Props = {};

const Timeline = (props: Props) => {
  return (
    <Element name="experience" className="bg-[#fbf8f8] w-full">
      <div className="container py-10 md:py-20 text-3xl flex flex-col">
        <h2 className="section-title">My Experience</h2>
        <div className="grid grid:grid-cols-1 lg:grid-cols-2 gap-8">
          <TimelineItem
            title="Personal Portfolio"
            subtitle="Nov 2022 - Dec 2022"
            url="https://github.com/nguyentan2212/portfolio"
            desc="Created a portfolio website showcasing my personal information using NextJs and TypeScript. This project uses GitHub to manage source code and is deployed on Vercel. Technologies used: NextJs, TypeScript, Vercel."
          />
          <TimelineItem
            title="UIT E-Learning"
            subtitle="Apr 2022 - Jun 2022"
            url="https://github.com/TranHoangdbz/SE350M21_UITE-learning"
            desc="An e-learning website made according to the requirements of a course project. As a developer, I created website layout, login and registration pages, implemented JWT and Google OAuth 2.0 for website authentication. Technologies used: ReactJs, JavaScript, REST API."
          />
          <TimelineItem
            title="NFT Marketplace"
            subtitle="Sep 2021 - Dec 2021"
            url="https://github.com/nguyentan2212/FunMarketplace"
            desc="Build a website with essential functions that allow users to mint and trade NFT. The front-end uses ReactJs and interacts with smart contracts on the blockchain via Web3Js. The smart contract uses Solidity and is deployed on the Ethereum testnet. Technologies used: ReactJs, JavaScript, Solidity."
          />
          <TimelineItem
            title="Computer Science"
            subtitle="Apr 2021 - Jun 2021"
            url="https://github.com/nguyentan2212/tooka-book"
            desc="Build a bookstore management website with basic functions. Used Bootstrap, Material Design and ReactJs to develop front-end of the website. Interact with back-end through the REST API. Technologies used: ReactJs, Bootstrap, Material Design, REST API"
          />
        </div>
      </div>
    </Element>
  );
};

export default Timeline;
