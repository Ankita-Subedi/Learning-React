import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className="container mx-auto px-4 py-4">
      {/* Header Wrapper */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <a
            className="text-3xl text-pink-500 font-semibold inline-block border-r-2 border-pink-500 pr-4"
            href="#home"
          >
            <div className="inline-block">
              LO <br />
              GO
            </div>
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          className="text-pink-500 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:">
          <ul className="flex text-lg space-x-6">
            {["Home", "About Us", "Services", "Portfolio", "Gallery", "Packages", "Contact Us", "FAQ"].map(
              (item) => (
                <li
                  key={item}
                  className="border-b-2 border-transparent hover:border-pink-500 text-gray-700 hover:text-pink-500"
                >
                  <a href={`#${item.toLowerCase().replace(/\s+/g, "")}`}>{item}</a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${isOpen ? "block" : "hidden"} mt-4 md:hidden bg-white shadow-lg rounded-lg`}
      >
        <ul className="flex flex-col text-lg space-y-4 p-4">
          {["Home", "About Us", "Services", "Portfolio", "Gallery", "Packages", "Contact Us", "FAQ"].map(
            (item) => (
              <li
                key={item}
                className="border-b-2 border-transparent hover:border-pink-500 text-gray-700 hover:text-pink-500"
              >
                <a href={`#${item.toLowerCase().replace(/\s+/g, "")}`}>{item}</a>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
