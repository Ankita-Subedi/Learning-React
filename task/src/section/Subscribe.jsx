import React from "react";
import Feedback from "../components/Feedback";

const Subscribe = () => {
  return (
    <div className="bg-customBlue px-6 py-16 sm:py-24 lg:px-36 lg:py-36 relative grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Feedback Section */}
      <div className="absolute left-0 bottom-0 lg:relative lg:bottom-auto lg:left-auto">
        <Feedback />
      </div>

      {/* Subscription Section */}
      <div className="container flex flex-col items-start space-y-6">
        <h2 className="text-2xl lg:text-4xl font-bold text-white">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-white">
          Stay updated with the latest news and offers. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Adipisci quidem fugiat consectetur.
          Voluptates, deleniti ex?
        </p>
        <input
          className="w-full lg:w-auto px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          placeholder="Enter your email"
        />
      </div>
    </div>
  );
};

export default Subscribe;
