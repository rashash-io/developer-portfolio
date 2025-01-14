import Link from "next/link";
import { Button } from "./ui/button";
import { MdOutlineWork } from "react-icons/md";

//components
import Nav from "./Nav";
import MobileNav from "../app/MobileNav";

//Logo
import Image from "next/image";
import Logo from "../public/logo1000.webp";

const Header = () => {
return ( 
        <header className=" h-[15vh]  bg-darkbg/60 grad-bg-nav  text-white border-b-2 border-accent shadow-2xl">
            
            <div className="flex flex-col justify-center ">
                    <div className="container mx-auto flex justify-between items-center">
                    
                {/* Logo */}

                {/* desktop nav & hire me*/}
                <div className="hidden xl:flex items-center py-8 xl:py-8 gap-8">
                    <Nav />
                    <Link href="/contact">   

                        <Button className="rounded-full flex gap-2 justify-center items-center ">
                            
                            <span className="text-2xl"><MdOutlineWork /></span>
                            <span>Hire Me!</span>
                            
                        </Button>
                       
                    </Link>
                    
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    
                    <MobileNav />
                </div>
            </div>
            

                <div className=" w-full h-[6px] bg-gradient-to-l from-cyan-400 via-violet-600 to-fuchsia-600  inline-block text-transparent bg-clip-text"></div>
            </div>
        </header>
    )
}
export default Header
