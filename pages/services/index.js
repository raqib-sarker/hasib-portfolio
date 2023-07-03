import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  return (
    <section className="relative pt-16 bg-blueGray-50 mt-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="hidden xl:flex justify-end xl:max-w-none w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4  mr-auto ml-auto -mt-78">
            <div className="">
              <Image
                src={"/bulb.png"}
                width={100}
                height={100}
                alt=""
                className=" align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  {/*  */}
                </svg>
                <h4 className="text-xl font-bold text-white">
                  Great for your awesome project
                </h4>
                <p className="text-md font-light mt-2 text-white text-justify">
                  Building a web app has never been easier than assembling
                  pre-made components. From landing pages to interactive
                  dashboards, you can effortlessly customize and develop your
                  web applications.
                </p>
              </blockquote>
            </div>
          </div>

          <div className="w-full md:w-6/12 px-4 mt-5 xl:mt-0">
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 px-4">
                <div className="relative flex flex-col mt-4">
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-xl mb-1 font-semibold">
                      Custom Web App
                    </h6>
                    <p className="mb-3 text-blueGray-500">
                      I am specialize in developing tailor-made web applications
                      that meet your specific business requirements.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-xl mb-1 font-semibold">
                      Responsive Design
                    </h6>
                    <p className="mb-3 text-blueGray-500">
                      I create visually appealing and mobile-friendly web
                      designs that adapt seamlessly to different screen sizes
                      and devices.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 mt-4">
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-xl mb-1 font-semibold">E-commerce</h6>
                    <p className="mb-3 text-blueGray-500">
                      Boost your online business with my robust e-commerce
                      solutions. From secure payment gateways to intuitive
                      product.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-xl mb-1 font-semibold">
                      Maintenance and Support
                    </h6>
                    <p className="mb-3 text-blueGray-500">
                      To ensure your application remains up-to-date, secure, and
                      performs optimally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          className="px-4 mx-36 py-2 text-gray-100 bg-[#F13024] rounded dark:bg-red-400 dark:hover:bg-red-500 hover:bg-red-600"
          href="/work"
        >
          See Projects
        </Link>
      </div>
    </section>
  );
};

export default Services;
