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
        <header className=" h-[15vh]  bg-darkbg/60 grad-bg-nav  text-white border-b-2 border-accent shadow-2xl outline flex justify-center">

            <div className="w-5/6 mx-auto flex justify-between items-center">
                    
                {/* Logo */}
                <div className="gradient-background rounded-full   transition-all  w-[100px] h-[100px] xl:w-[120px] xl:h-[120px] overflow-hidden ">
                    <Image 
                        src={Logo} 
                      
                        
                        alt="logo" 
                        className=" box-shadow-animate rounded-full gradient-text"/>    
                </div>

                {/* desktop nav & hire me*/}
                <div className="hidden xl:flex items-center py-8 xl:py-8 gap-8 text-2xl">
                    <Nav />
                    <Link href="/contact">   

                        <Button className="rounded-full flex gap-2 justify-center items-center text-2xl ">
                            
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
        </header>
    )
}
export default Header
