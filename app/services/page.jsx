"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'We offer web development solutions, frontend backend you name it! We can devolop websites, e-commerce, web applications, content management systems (CMS), and more. We deliver a tailored project for all your needs.',
    href: "",
    img: "./services2.jpeg",
  },
  {
    num: '02',
    title: 'Web Hosting',
    description: 'We are currently starting to offer shared web hosting solutions for small projects. At this moment we support only small & low traffic projects, but as the project keeps on growing we keep on adding more features.',
    href: "",
    img: "./services1.jpeg",
  },
  {
    num: '03',
    title: 'Pen Testing',
    description: 'Reduce your risk of a breach by identifying and patching vulnerabilities. Penetration Testing enables you to address exploratory risk analysis and business logic testing so you can systematically find and eliminate critical vulnerabilities to ensure safe & private experience for your users',
    href: "",
    img: "./services1.jpeg",
  },
  {
    num: '04',
    title: 'SEO',
    description: "Search Engine Optimization (SEO) is crutial to a sucessful bussiness. Basicaly get organic traffic for your website & rank on search engines with a few tweaks here and there, your website's traffic will increase which means your business will benifit",
    href: "",
    img: "./services3.jpeg",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className=" bg-darkbg min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      
      
      <div className="container mx-auto pt-8">
        <motion.div 
          initial={{opacity: 0}} 
          animate={{
            opacity: 1, 
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] mb-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="grad-border border-4 ">
              <div 
                className=" h-full bg-[url('/grid.svg')] shadow-2xl bg-black hover:border-accentgreen      p-4 rounded-xl flex-1 transition-all duration-1000 flex flex-col  gap-6 group ">

                  {/* TOP */}
                    <div className=" w-full overflow-hidden h-[300px] rounded-2xl  border-pinkred border-2 relative group"> 
                      
                      
                      <div className=" z-20 p-4 absolute w-full flex h-full justify-between items-end ">
                        <div className="text-5xl font-extrabold text-outline text-transparent border bg-darknavy p-3  rounded-3xl    group-hover:text-outline-hover transition-all duration-500">
                          {service.num}
                        </div>
                        <Link href={service.href} className=" hover:scale-125 w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                          <BsArrowDownRight className="  text-primary text-3xl hover:text-purple"/>
                        </Link>
                      </div>
                      <div className="z-1  scale-150 absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
                        <img className="transition-all duration-300 z-0 w-full shadow-lg scale-150" src={service.img}/>
                      </div>
                    </div>
                  
                  {/* TITLE */}
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2> 
                  {/* BORDER 
                  <div className="border-b self-center border-white/20 w-64"></div>
                  */}
                  {/* DESCRIPTION */}
                  <p className="text-white/60">{service.description}</p>
                
                  </div>
                  
              </div>
            );
          })}

        </motion.div>
      </div>
    </section>
  );
};

export default Services