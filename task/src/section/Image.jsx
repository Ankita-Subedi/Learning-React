import React from "react";

const Image = () => {
  return (

    <div id="gallery" className="container mx-auto margin">
      <div className="relative flex flex-col md:flex-row md:justify-between items-center my-8">
        <p className="text-2xl mb-4 md:mb-0">Image Gallery</p>
        <button className="px-8 py-2 border-2 border-pink-500 font-semibold">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1fr_3fr] gap-4">
        {/* Image Grid */}
        <div className="grid grid-cols-3">
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
          <img
            src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Image 5"
            className="w-full h-full object-cover"
          />
          <img
            src="https://images.pexels.com/photos/1128783/pexels-photo-1128783.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Image 6"
            className="w-full h-full object-cover"
          />
          <img
            src="https://images.pexels.com/photos/931796/pexels-photo-931796.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Image 7"
            className="w-full h-full object-cover"
          />
          <img
            src="https://images.pexels.com/photos/752842/pexels-photo-752842.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Image 8"
            className="w-full h-full object-cover"
          />
          <img
            src="https://images.pexels.com/photos/1199605/pexels-photo-1199605.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Image 9"
            className="w-full h-full object-cover"
          />
          <img
            src="https://images.pexels.com/photos/574011/pexels-photo-574011.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Image 10"
            className="w-full h-full object-cover"
          />
          <img
            src="https://images.pexels.com/photos/1683989/pexels-photo-1683989.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Image 11"
            className="w-full h-full object-cover"
          />
          <img
            src="https://images.pexels.com/photos/1488318/pexels-photo-1488318.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Image 12"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Full-Width Image */}
        <div className="h-auto">
          <img
            src="https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Large Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Image;
