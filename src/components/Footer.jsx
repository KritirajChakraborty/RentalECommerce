import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <footer className="max-w-screen-2xl mx-auto ">
        {/* footer top */}

        <div className="mt-20 mb-10 px-4 md:px-28 flex flex-col md:flex-row items-start justify-between gap-8">
          {/* company info */}
          <div className="md:w-[400px]">
            <Link to="/">
              <img src="/logo.svg" alt="" />
            </Link>
            <p className="my-8 text-Black/75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="flex items-center gap-6">
              <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              <FaTwitter className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              <FaInstagram className="w-5 h-5 cursor-pointer hover:text-orange-500" />
            </div>
          </div>

          {/* Catalog */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">CATALOG</h4>
            <div className="flex flex-col justify-between space-y-2">
              <Link to="/shop">
                <button
                  onClick={handleClick}
                  className="text-sm block hover:text-orange-500 border-none"
                >
                  Furnitures
                </button>
              </Link>
              <Link to="/shop">
                <button
                  onClick={handleClick}
                  className="text-sm block hover:text-orange-500 border-none"
                >
                  Electronics
                </button>
              </Link>
              <Link to="/shop">
                <button
                  onClick={handleClick}
                  className="text-sm block hover:text-orange-500 border-none"
                >
                  Bed
                </button>
              </Link>
              <Link to="/shop">
                <button
                  onClick={handleClick}
                  className="text-sm block hover:text-orange-500 border-none"
                >
                  Utility
                </button>
              </Link>
            </div>
          </div>

          {/* CUSTOMER SERVICES */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">CUSTOMER SERVICES</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-orange-500">
                Contact Us
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Track Your Order
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Product Care & Repair
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Book an Appointment
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Shipping & Returns
              </Link>
            </div>
          </div>

          {/* ABOUT US */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">ABOUT US</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-orange-500">
                Our Products
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                FAQ
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                About Us
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
      {/* footer bottom */}
      <div className="bg-Black">
        <p className="text-white text-center items-center py-3">
          © {currentYear} RentExchange, Inc.
        </p>
      </div>
    </>
  );
}
