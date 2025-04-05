"use client";
import './styles.css'

import { useEffect, useState } from 'react'

// Data
import { daysAndMonths } from '../../lib';

// API Links
const apiLinks = {
  githubApi: "https://api.github.com/users/rashash-io",
  githubContributionsApi: "https://github-contributions-api.jogruber.de/v4/rashash-io",
};

export const GitHubStats = () => {
  const [contributions, setContributions] = useState([]);
  const [totalContributions, setTotalContributions] = useState([]);
  const [totalPublicRepos, setTotalPublicRepos] = useState([]);

  
  useEffect(() => {
    fetch(apiLinks.githubContributionsApi)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let contrib = data.contributions;
        let contribYear = contrib.slice(0,365);
        setContributions(contribYear);
        setTotalContributions(data.total);
      });
      fetch(apiLinks.githubApi)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTotalPublicRepos(data.public_repos);
      });
  
  }, []);

  
  return (
    <div className=" flex justify-center items-center mt-4 ">
      <div className="flex justify-center items-center flex-wrap  bg-black/50 rounded-2xl ">
        <div className="flex flex-col  justify-center items-center gap-2 mt-4">
          <h3 className="h3">My GitHub activity</h3>
          <div className="flex gap-4 leading-snug flex-wrap">
            <div className="flex justify-center items-center gap-2 text-white/50">
              <span className="text-6xl  text-pinkred">
                {totalContributions[2025]}
              </span>
              <p className="text-xs">
                contributions <br />
                since Jan 2025
              </p>
            </div>
            <div className="flex justify-center items-center gap-2 text-white/50 ">
              <span className="text-6xl  text-pinkred">{totalPublicRepos}</span>
              <p className="text-xs">
                Public
                <br />
                Repositories
              </p>
            </div>
          </div>
        </div>
        <div className="mp flex flex-col ">
          <br />

          <div className="graph ContributionCalendar-label text-left border-2 border-accent/30 ">
            <ul className="months">
              {daysAndMonths.months.map((month, index) => {
                return (
                  <li className="text-[12px]" key={index}>
                    {month}
                  </li>
                );
              })}
            </ul>

            <ul className="days">
              {daysAndMonths.days.map((day, index) => {
                return <li key={index}>{day}</li>;
              })}
            </ul>

            <ul className="squares  ">
              {contributions.map((contribution, index) => {
                let count = contribution.count;
                return (
                  <li
                    className={count !== 0 ? "bg-blue-500 " : "bg-[#161c22]"}
                    key={index}
                  ></li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;