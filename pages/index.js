//next image
import Image from "next/image";

//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <h1 className="text-white font-bold text-4xl xl:text-6xl">
            A Full-Stack <br /> <span className="text-accent"> Developer </span>{" "}
            & Design <br /> Enthusiast{" "}
          </h1>
          {/* subtitle */}
          <p className="text-xl max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-white">
            I’m Hasib Sarker, a driven and accomplished Full Stack web developer
            with a wealth of experience in building cutting-edge web
            applications using JavaScript, React.js, and Next.js
          </p>
          {/* btn */}
          <div className="absolute flex justify-center xl:justify-start bottom-20">
            {/* <ProjectsBtn /> */}
          </div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        <div className="w-full h-full max-w-[532px] max-h-[678px] absolute top-36 lg:bottom-0 lg:right-[6%]">
          {/* avatar img */}
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Home;
