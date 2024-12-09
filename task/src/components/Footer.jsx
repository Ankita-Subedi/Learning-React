import React from "react";

const Footer = () => {
  return (
    <div className="bg-customBlue text-white">
      <div className="container">
        <div className="flex flex-col space-y-2 text-center">
          <a id="home" className="mt-6 text-3xl font-medium" href="#">
            LOGO
          </a>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            reprehenderit.
          </p>
          <hr className='className="h-1 bg-gray-400"' />
        </div>

        <div className="flex justify-between mt-6 pb-6">
          <div>
            <ul>
              <p className="border-b border-white inline-block mb-2">
                Quick Links
              </p>
              <li className="mb-1">
                <a href="#">About Us</a>
              </li>
              <li className="mb-1">
                <a href="#">FAQ</a>
              </li>
              <li className="mb-1">
                <a href="#">Contact Us</a>
              </li>
              <li className="mb-1">
                <a href="#">About Us</a>
              </li>
              <li className="mb-1">
                <a href="#">About Us</a>
              </li>
              <div className="flex items-center space-x-2">
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-pinterest-p"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </div>
            </ul>
          </div>

          <div>
            <ul>
              <p className="border-b border-white inline-block mb-2">Contact</p>
              <li className="flex items-center space-x-2 mb-1">
                <i className="fa-solid fa-phone"></i>
                <a
                  href="tel:+01-1233434,9812345673"
                  className="hover:underline"
                >
                  +01-1233434, 9812345673
                </a>
              </li>
              <li className="flex items-center space-x-2 mb-1">
                <i className="fa-solid fa-location-dot"></i>
                <a href="#" className="hover:underline">
                  Kathmandu, Nepal 44170
                </a>
              </li>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8829590999135!2d85.34018587532313!3d27.69001207619248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199d73661acd%3A0xd37e1e660936263!2sSCA%20Techno%20Consult!5e0!3m2!1sen!2snp!4v1733750914910!5m2!1sen!2snp"
                  width="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                ></iframe>
              </div>
            </ul>
          </div>

          <div>
            <ul>
              <p className="border-b border-white inline-block mb-2">Gallery</p>
              <li className="mb-1">
                <a href="#">Photo Gallery</a>
              </li>
              <li className="mb-1">
                <a href="#">Video Gallery</a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="mb-1">
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
