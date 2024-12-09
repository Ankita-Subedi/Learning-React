import React from 'react';

const Team = () => {
  return (
    <div className='margin'>
        <p className='text-2xl mb-2 md:mb-8 text-center'>Our Teams</p>
    <div className="grid grid-cols-5 gap-6 container">
      {/* Image 1 - Align at top */}
      <div className="flex flex-col space-y-2">
        <img
          src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="pic"
          className="mb-4"
        />
        <p>John Doe</p>
        <p>Event Manager</p>
      </div>

      {/* Image 2 - Slightly down */}
      <div className="flex flex-col space-y-2 mt-8">
        <img
          src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="pic"
          className="mb-4"
        />
        <p>John Doe</p>
        <p>Event Manager</p>
      </div>

      {/* Image 3 - Align at top */}
      <div className="flex flex-col space-y-2">
        <img
          src="https://images.pexels.com/photos/1687675/pexels-photo-1687675.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="pic"
          className="mb-4"
        />
        <p>John Doe</p>
        <p>Event Manager</p>
      </div>

      {/* Image 4 - Slightly down */}
      <div className="flex flex-col space-y-2 mt-8">
        <img
          src="https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="pic"
          className="mb-4"
        />
        <p>John Doe</p>
        <p>Event Manager</p>
      </div>

      {/* Image 5 - Align at top */}
      <div className="flex flex-col space-y-2">
        <img
          src="https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="pic"
          className="mb-4"
        />
        <p>John Doe</p>
        <p>Event Manager</p>
      </div>
    </div>
    </div>
  );
};

export default Team;
