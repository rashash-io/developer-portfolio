"use client";

import { Button } from '../../components/ui/button';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiImessage } from 'react-icons/si';
import { FaFilePdf, FaLocationDot, FaDiscord } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { MdOpenInNew, MdEmail, MdEventAvailable} from "react-icons/md";

import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaPython } from "react-icons/fa";





const about = {
  title: "About Me",
  description: "BS.c Computer Engineering, Ethical Hacker, Web Developer",
  info: [
    {
      fieldName : "Name",
      fieldValue: "RA$HASH",
      href: '',
      icon: <IoPersonSharp />,
    },
    {
      fieldName : "Location",
      fieldValue: "Cairo, Egypt",
      href: '',
      icon: <FaLocationDot />,
    },

    {
      fieldName : "Freelance",
      fieldValue: "Available",
      href: '',
      icon: <MdEventAvailable />,
    },
    {
      fieldName : "E-Mail",
      fieldValue: "info@rashash.io",
      href: 'mailto:info@rashash.io',
      icon: <MdEmail />,
    },
    {
      fieldName : "Discord",
      fieldValue: "rashash.io",
      href: 'https://discord.com/users/1303504973774192720/',
      icon: <FaDiscord />,
    },
    {
      fieldName : "iMessage",
      fieldValue: "iMessage@rashash.io ",
      href: 'sms:imessage@rashash.io',
      icon: <SiImessage />,
    },
    {
      fieldName : "GitHub",
      fieldValue: "rashash-io",
      href: 'https://github.com/rashash-io',
      icon: <FaGithub />,
    },
  ],
};

const education  = {
  icon: '/assets/resume/badge.svg',
  title: "My Education",
  description: "My degrees & courses.",
  items: [
    {
      institution: "TCM Academy",
      degree:"A few of their hacking courses",
      duration: "2024",
    },
    
    {
      institution: "MSA University",
      degree:"B.Sc Computer Engineering",
      duration: "2015 - 2023",
    },
    {
      institution: "Russian Cultural Center",
      degree:"Full Stack PHP Backend Diploma",
      duration: "2018 - 3 Months 108 Hrs.",
    },
    {
      institution: "Arab Academy of Science & Technology(AAST)",
      degree: "Won 1st place in Enterpreneurship Rally",
      duration: "2018 - 3 Months.",

    },
    
    {
      institution: "Manor House American Sch.",
      degree:"American Diploma",
      duration: "2010 - 2015",
    },
    
  ],
};

const skills = {
  title: "My Skills",
  description: "Languages I'm comfortable around ;)", 
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "ReactJS",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaBootstrap />,
      name: "BootStrap",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../components/ui/tooltip';

import { ScrollArea } from "../../components/ui/scroll-area";
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0 bg-darkbg'
    >
      <div className="container pt-8 mx-auto  min-h-[85vh]">
        <Tabs 
          defaultValue='skills'
          className='flex flex-col xl:flex-row gap-[60px]'
          >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <Button variant="outline" className="flex  rounded-md " >
              
              <span className='text-2xl pr-3'><FaFilePdf /></span>
              <a href="https://rashash.io/resume.pdf" target="_blank"  rel="noopener noreferrer">save/view resume as PDF</a>
            </Button>
            
            <TabsTrigger className="bg-black/30" value="education">Education</TabsTrigger>
            <TabsTrigger className="bg-black/30" value="skills">Skills</TabsTrigger>
            <TabsTrigger className="bg-black/30" value="about">About Me</TabsTrigger>
          </TabsList>
        {/* CONTENT */}
        <div className='min-h-[70vh] w-full'>
          
        


          {/* Education */}
          <TabsContent value="education" className="w-full">
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{education.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                {education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {education.items.map((item, index)=> {
                    return (
                      <li key={index} className='bg-black/30 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-white'>{item.degree}</h3>
                        <div className='flex items-center gap-3'>
                          {/* DOT */}
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60 '>{item.institution}</p>
                        </div>
                      </li> 
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
        
          
          {/* Skills */}
          <TabsContent value="skills" className="w-full h-full">
            <div className='flex flex-col gap-[30px]'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {skills.description}
                </p>
              </div>
              <ul className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:gap-[30px] gap-4'>
                {skills.skillList.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100 }>
                        <Tooltip>
                          <TooltipTrigger className='shadow-xl w-[110px] h-[110px] bg-black/30 rounded-full border-accent-hover  border-2 flex justify-center items-center group'>
                            <div className='text-6xl group-hover:text-accent transition-all duration-300 '>
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitilize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </div>
            
          </TabsContent>
        
        
          {/* About Me */}
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className='flex flex-col gap-[30px]'>
              <h3 className='text-4xl font-bold'>{about.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
              <div className='flex flex-col md:flex-row gap-4 lg:flex-row items-center justify-center'>

           
              </div>
              <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                
                {about.info.map((item, index)=>{
                  return(
                    <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                      <div className='grid grid-cols-[40%_60%]  md:gap-2 w-full '>
                        
                        {/* Left Part */}
                        <div className='flex items-center gap-2'>
                          <span className='text-accent text-2xl'>{item.icon}</span>
                          <span className='text-sm md:text-base md:text-accent text-white/60'>{item.fieldName}</span>
                        </div>
                          
                        {/* Right Part */}
                        <div className='flex  items-center gap-1'>
                          <span className='text-base lg:text-xl'>{item.fieldValue}</span>
                          {item.href != '' && 
                            <a href={item.href} target="_blank"  rel="noopener noreferrer">
                              <MdOpenInNew className="text-accent hover:text-white border-b-2 border-accent/35 " />
                            </a>}
                        </div>
                      </div>

                     
                      
                      

                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>
        </div>
        
        
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume