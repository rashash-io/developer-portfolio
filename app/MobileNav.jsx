"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '../components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { CiMenuFries } from 'react-icons/ci';
import { FaFilePdf } from 'react-icons/fa';
import { BiSolidContact } from 'react-icons/bi';

//Logo
import Image from "next/image";
import Logo from "../public/logo1000.webp";
import { div } from 'framer-motion/client';

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },

  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
  <Sheet>
    <SheetTrigger className='flex justify-center items-center py-8'>
      <CiMenuFries className='text-[32px] text-accent'/>
    </SheetTrigger>
    <SheetContent className="flex flex-col justify-around items-center">
      <SheetTitle>Menu</SheetTitle>
      
      
      { /* LOGO */ }
        <Link href="/" className='flex justify-center'>
              <div className="items-center  rounded-full ">
                <Image src={Logo} width={150} height={150} alt="logo" className="box-shadow-animate rounded-full  gradient-text  "/>      
              </div>              
        </Link>     
     
      { /* NAV */ }
      <nav className='flex flex-col justify-center items-center  bg-darkbg/30 py-3 rounded-xl shadow-lg border-y-2 border-pinkred/50 gap-2 w-[90%]'>
      <span className='text-white/30'>Navigation</span>
        {links.map((link, index) => {
          return (
              <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent "} text-xl capitalize hover:text-accent transition-all`}>
                <div className='flex justify-between w-48 '>
                  <span className='text-pinkred/50'>{">"}</span>
                  <div className={`${link.path === pathname && "text-accent border-b-2  border-accent"}`}>{link.name}</div>
                  <span className='text-pinkred/50'>{"<"}</span>
                </div>
              </Link> 
          );
        })}
      </nav>
      {/* BUTTONS */}
      <div className='flex flex-col gap-4 items-center justify-center w-full bg-darkbg py-3'>
      <span className='text-white/30'>Links</span>
        <Button variant="outline" className="flex  rounded-md " >
            <span className='text-xl pr-2'><FaFilePdf /></span>
            <a href="https://rashash.io/resume.pdf" target="_blank"  rel="noopener noreferrer">PDF resume</a>
        </Button>
        <Button variant="outline" className="flex  rounded-md " >
            <span className='text-xl pr-2'><BiSolidContact /></span>
            <a href="https://rashash.io/rashash-contact.vcf" target="_blank"  rel="noopener noreferrer">save my contact</a>
        </Button>
      </div>

    </SheetContent>
  </Sheet>
  );  
};

export default MobileNav