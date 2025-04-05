"use client";

import CountUp from "react-countup";

import { homepageStats } from "../lib";

export const Stats = () => {
  return (
    <section className="mt-6  xl:pt-0 xl:pb-0   bg-black/30 ">
      <div className=" container mx-auto p-4">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {homepageStats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-center"
                key={index}
              >
                <span className="text-2xl text-pinkred hidden md:inline">
                  {"<"}
                </span>
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold text-pinkred  md:text-white"
                />
                <span className="text-2xl text-pinkred hidden md:inline">
                  {">"}
                </span>
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/60`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
