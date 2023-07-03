import React from "react";
import Image from "next/image";
import Link from "next/link";

const Work = () => {
  return (
    <div className="w-4/5 mx-auto mt-24 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {/* Card 1 */}
      <div className="rounded overflow-hidden shadow-lg mt-4">
        <Image
          className="w-full hidden xl:flex justify-end xl:max-w-none"
          src="/language-camp.jpg"
          alt="language-camp"
          width={500}
          height={300}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Language Camp</div>
          <p className="text-white text-base hidden xl:flex justify-end xl:max-w-none">
            An interactive Languages Learning Platform. The website utilizes a
            CRUD (Create, Read, Update, Delete) system to enable seamless
            management.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <Link
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            href="https://language-camp-896cf.web.app/"
            target="_blank"
          >
            Live
          </Link>
          <Link
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            href="https://github.com/techhasib/language-camp-client-side"
            target="_blank"
          >
            Client
          </Link>
          <Link
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            href="https://github.com/techhasib/language-camp-server-side"
            target="_blank"
          >
            Server
          </Link>
        </div>
      </div>
      {/* Card 2 */}
      <div className="rounded overflow-hidden shadow-lg mt-4">
        <Image
          className="w-full hidden xl:flex justify-end xl:max-w-none"
          src="/car-market.jpg"
          alt="Car Market Photo"
          width={500}
          height={300}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Car Market</div>
          <p className="text-white text-base hidden xl:flex justify-end xl:max-w-none">
            A simple full-stack Toy Marketplace.An interactive and user-friendly
            platform for buying and selling car toys.Client Cart Functionality,
            Add or Remove from Cart.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <Link
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            href="https://car-markets.web.app"
            target="_blank"
          >
            Live
          </Link>
          <Link
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            href="https://github.com/techhasib/toy-marketplace-client-side"
            target="_blank"
          >
            Client
          </Link>
          <Link
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            href="https://github.com/techhasib/toy-marketplace-server-side"
            target="_blank"
          >
            Server
          </Link>
        </div>
      </div>
      {/* Card 3 */}
      <div className="rounded overflow-hidden shadow-lg mt-4">
        <Image
          className="w-full hidden xl:flex justify-end xl:max-w-none"
          src="/recipe.jpg"
          alt="Recipe"
          width={500}
          height={300}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Foodies Hub</div>
          <p className="text-white text-base hidden xl:flex justify-end xl:max-w-none">
            A Recipe Website. Developed a dedicated website for showcasing
            recipes from a specific cuisine, showcasing expertise in content
            curation.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <Link
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            href="https://64552c15e3077d051148be19--shimmering-gnome-273e05.netlify.app/"
            target="_blank"
          >
            Live
          </Link>
          <Link
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            href="https://github.com/techhasib/chef-recipe-hunter-client-side"
            target="_blank"
          >
            Client
          </Link>
          <Link
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            href="https://github.com/techhasib/chef-recipe-hunter-server-side"
            target="_blank"
          >
            Server
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
