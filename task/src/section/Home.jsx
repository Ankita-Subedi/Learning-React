import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <>
      <div id="home" className="w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden mb-16">
        <Carousel>
          <div className="relative w-full h-full">
            <img
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Slide 1"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-blue-800 bg-opacity-40 p-4 md:p-8">
              <p className="text-3xl sm:text-4xl mb-4 font-bold">
                We make your special day MEMORABLE
              </p>
              <div className="mb-4 flex space-x-4 flex-wrap justify-center">
                <button className="px-6 py-2 border-2 border-white font-semibold text-sm sm:text-base">
                  Portfolio
                </button>
                <button className="px-6 py-2 bg-pink-500 font-semibold text-sm sm:text-base">
                  Get Started
                </button>
              </div>
              <p className="text-lg sm:text-xl">
                Best wedding planner & event organiser in town
              </p>
            </div>
          </div>

          <div className="relative w-full h-full">
            <img
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Slide 2"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-blue-800 bg-opacity-40 p-4 md:p-8">
              <p className="text-3xl sm:text-4xl mb-4 font-bold">
                We make your special day MEMORABLE
              </p>
              <div className="mb-4 flex space-x-4 flex-wrap justify-center">
                <button className="px-6 py-2 border-2 border-white font-semibold text-sm sm:text-base">
                  Portfolio
                </button>
                <button className="px-6 py-2 bg-pink-500 font-semibold text-sm sm:text-base">
                  Get Started
                </button>
              </div>
              <p className="text-lg sm:text-xl">
                Best wedding planner & event organiser in town
              </p>
            </div>
          </div>

          <div className="relative w-full h-full">
            <img
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Slide 3"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-blue-800 bg-opacity-40 p-4 md:p-8">
              <p className="text-3xl sm:text-4xl mb-4 font-bold">
                We make your special day MEMORABLE
              </p>
              <div className="mb-4 flex space-x-4 flex-wrap justify-center">
                <button className="px-6 py-2 border-2 border-white font-semibold text-sm sm:text-base">
                  Portfolio
                </button>
                <button className="px-6 py-2 bg-pink-500 font-semibold text-sm sm:text-base">
                  Get Started
                </button>
              </div>
              <p className="text-lg sm:text-xl">
                Best wedding planner & event organiser in town
              </p>
            </div>
          </div>
        </Carousel>
      </div>

      <div className="w-full flex-1 flex items-center justify-center mb-16 px-4 sm:px-8 md:px-16">
        <p className="text-sm sm:text-base md:text-xl text-center">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>
      </div>
    </>
  );
};

export default Home;
