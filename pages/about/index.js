import React from "react";
import Link from "next/link";
import Image from "next/image";
//icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  SiFramer,
  FaWordpress,
  FaFigma,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/hi2";

//components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

const About = () => {
  return (
    <>
      {/* about me section */}
      <section className="flex items-center xl:h-screen font-poppins dark:bg-gray-800">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 hidden xl:flex justify-end xl:max-w-none">
              <div className="relative lg:max-w-md">
                <Image
                  src={"/avatar6.png"}
                  width={537}
                  height={678}
                  alt=""
                  className="translate-z-0  w-full h-full"
                />
              </div>
            </div>
            <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="pl-4 mb-6 border-l-4 border-blue-500 mt-36 lg:mt-0">
                <span className="text-sm text-gray-600 uppercase dark:text-gray-400">
                  Who am I?
                </span>
                <h1 className="mt-2 md:text-5xl dark:text-gray-300 text-white font-bold text-4xl xl:text-6xl">
                  About Me
                </h1>
              </div>
              <p className="mb-6 text-base leading-7 text-white text-justify">
                Hello, my name is Hasib Sarker. I am a junior front-end
                developer with a strong focus on working with front-end
                technologies, particularly React. <br />I have a solid
                understanding of the latest front-end technologies and
                frameworks, with a particular expertise in React. I believe in
                continuously learning and staying up-to-date with emerging
                trends to deliver cutting-edge solutions. <br />
                My biggest strength as a front-end developer lies in my ability
                to tackle complex problems and find innovative solutions. I have
                a strong analytical mindset, which allows me to break down
                challenges into smaller, manageable tasks. This enables me to
                deliver high-quality code and meet project deadlines
                effectively.
              </p>
              <Link
                className="px-4 py-2 text-gray-100 bg-[#F13024] rounded dark:bg-red-400 dark:hover:bg-red-500 hover:bg-red-600"
                href="/services"
              >
                See Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
