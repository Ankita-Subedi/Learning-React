import React from 'react';

const Contact = () => {
  return (
    <div className="flex justify-center margin">
      <div className="flex flex-col items-center text-center space-y-4">
        <p className='text-3xl text-pink-500'>Have a Question About Our Company And Events Setups</p>
        <p className='text-xl'>Let us take care of it! We are willing to give some advice and support whatever you need.</p>
        <button className="px-6 py-2 border-2 border-black font-semibold text-sm sm:text-base">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Contact;
