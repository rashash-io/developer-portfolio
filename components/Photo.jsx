"use client";

import { motion } from "framer-motion";

//Logo
import Image from "next/image";
import Logo from "../public/logo1000.webp";

const Photo = () => {
  return (
    <div className="w-full h-full relative ">
      <div className="h-[200px]"></div>
      
      <motion.div 
        initial={{opacity: 0}} 
        animate={{opacity: 1, transition: {delay:2, duration:0.4, ease: "easeIn"}}}
      >
        {/* Image */}
       
       <motion.div 
          initial={{opacity: 0} }
          animate={{
            opacity: 1,
            transition: {delay:0.2 , duration:0.8, ease: "easeInOut"}}}   
        >
    
          <div className=" box-shadow-animate rounded-full overflow-hidden transition-all  w-[198px] h-[198px] xl:w-[300px] xl:h-[300px] mix-blend-lighten absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
            <Image 
              src={Logo}
              priority 
              quality={100} 
              fill 
              alt="" 
              className="object-contain border-accent  rounded-full border-4 "
            />
     
            
          </div>
        </motion.div>


        {/* Circle */}
        <motion.svg 
          className=" w-[200px] xl:w-[400px] h-[200px] xl:h-[400px] absolute  top-[50%] translate-y-[-50%]  left-[50%] translate-x-[-50%] " 
          fill="transparent"
          viewBox="0 -40 506 586"
          xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle 
              cx="253" 
              cy="253" 
              r="250" 
              stroke="#4db5ff" 
              strokeWidth="4" 
              strokeLinecap="round"
              strokeLinejoin="round"
              initial = {{strokeDasharray: "24 10 0 0"}}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120,360],
              }}
              transition={{
                duration: 20,
                repeat:  Infinity,
                repeatType: "reverse", 
              }}
            />
        </motion.svg>
      </motion.div>
      
    </div>
  );
};

export default Photo