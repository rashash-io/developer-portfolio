import { Button } from "../components/ui/button";
import {FiDownload} from "react-icons/fi";
import Socials from "./Socials";
import Photo from "../components/Photo";
import Stats from "../components/Stats";
import GitHubStats from "../components/gitHubStats/GitHubStats";

const Home = () => {
  return (
    <section className="h-full bg-darknavy pt-8 xl:pt-0 min-h-[85vh] ">
      <div className="container mx-auto h-full ">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-6">
          
          {/* CARD */}
          <div className="text-center bg-[url('/bg.png')] bg-no-repeat bg-cover bg-blend-saturation bg-dark/80 xl:text-left p-6 mt-4 rounded-3xl border  border-accent order-2 xl:order-none hover:border-pinkred transition-all duration-700">
            <h1 className="text-pinkred/80"><strong>Hola! You can call me</strong></h1>
            <h1 className="h1">
              <span className="text-accent gradient-text ">RA$HASH</span>
            </h1>
            <h1>
              <div className="flex justify-center align-center">
                <ul className="flex  md:pl-0 flex-col md:flex-row md:justify-center md:gap-6">
                  <li className="flex gap-2 text-white/40 hover:text-white/90 transition-all duration-500"><span className="text-pinkred">{">"}</span>Engineer</li>
                  <li className="flex gap-2 text-white/40 hover:text-white/90 transition-all duration-500"><span className="text-pinkred">{">"}</span>Web Developer</li>
                  <li className="flex gap-2 text-white/40 hover:text-white/90 transition-all duration-500"><span className="text-pinkred">{">"}</span>Ethical Hacker</li>
                </ul>
              </div>
            </h1>
            <p className="leading-snug max-w-[500px] mb-4 text-white/60 hover:text-white transition-all duration-500">
              I excel at crafting & securing digital experiences and I am proficient in various programming languages and technologies.
            </p>

            {/* Button & Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline"
                size="lg"
                className="hover:gradient-text border-pinkred text-pinkred  hover:border-accent hover:scale-110 transform-gpu transition-all duration-700 uppercase flex items-center gap-2 rounded-full"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="xl:mb-0">
                <Socials 
                  containerStyles="flex gap-4"
                  iconStyles="hover:scale-125 transform-gpu w-12 h-12  border border-accent rounded-full flex justify-center items-center text-accent text-2xl  hover:bg-accent hover:text-primary transition-all duration-700"
                />
              </div>
            </div>
          </div>

          {/* Logo w/circle animation */}
          <div className="order-1 xl:order-none mb-0 w-full h-full">
            <Photo />
          </div>
        </div>
        <GitHubStats />
         
      </div>

      <Stats />
      
    </section>
  );
}; 

export default Home