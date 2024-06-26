import Image from "next/image";
import React from "react";
import PriceStat from "../PriceStat/PriceStat";

const Intro = () => {
  return (
    <section>
      <div className="bg-black py-8 md:py-10">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-8 flex flex-wrap justify-between md:mb-16">
            <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
              <h1 className="mb-4 text-4xl font-bold  sm:text-5xl md:mb-8 md:text-6xl text-yellow-500">
                Zeus
                <br />
                Chain
              </h1>
              <p className="max-w-md leading-relaxed text-white  xl:text-lg">
                Zeus Chain is a revolutionary blockchain platform designed to
                enable the creation and execution of smart contracts and
                decentralized applications (dApps). Our mission is to provide a
                scalable, secure, and efficient blockchain infrastructure that
                empowers developers and businesses to innovate and transform
                industries.
              </p>
            </div>

            <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
              <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                <Image
                  src="https://images.unsplash.com/photo-1531816458010-fb7685eecbcb?auto=format&q=75&fit=crop&w=550&h=550"
                  alt="Photo by Kaung Htet"
                  height="500"
                  width="500"
                  className=" h-full w-full object-cover object-center"
                />
              </div>

              <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1631603090989-93f9ef6f9d80?auto=format&q=75&fit=crop&w=550&h=550"
                  alt="Photo by Manny Moreno"
                  height="500"
                  width="500"
                  className=" h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          <PriceStat />
        </div>
      </div>
    </section>
  );
};

export default Intro;
