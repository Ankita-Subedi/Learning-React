import React from "react";

const Image = () => {
  return (
    <div className="container mx-auto margin">
      <div className="relative flex flex-col md:flex-row md:justify-between items-center my-8">
        <p className="text-2xl mb-4 md:mb-0">Video Gallery</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Image Grid */}
        <div className="grid grid-cols-1 gap-4 md:col-span-1">
          <img
            src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Image 1"
            className="w-full h-full object-cover"
          />
          <img
            src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Image 2"
            className="w-full h-full object-cover"
          />
          <img
            src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Image 3"
            className="w-full h-full object-cover"
          />
          <img
            src="https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Image 4"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Video Side Element */}
        <div className="h-auto md:col-span-3">
          <video
            src="https://www.w3schools.com/html/movie.mp4"
            alt="Video"
            className="w-full h-full object-cover"
            controls
          />
        </div>
      </div>
    </div>
  );
};

export default Image;
