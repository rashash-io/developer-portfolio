// Components
import { GitHubStats, HomeIntroCard, Photo, Stats } from "../components/";

export const Home = () => {
  return (
    <section className="h-full bg-darknavy pt-8 xl:pt-0 min-h-[85vh] ">
      <div className="container mx-auto h-full ">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-6">
          <HomeIntroCard />

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

export default Home;
