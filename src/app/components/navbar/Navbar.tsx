import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="mx-auto flex justify-between items-center">
      <div className="hidden md:flex space-x-4">
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
        </a>
        <a href="#" className="text-purple-600 hover:text-purple-800">
          <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        </a>
        <a href="#" className="text-red-600 hover:text-red-800">
          <Image src="/tiktok.png" alt="TikTok" width={24} height={24} />
        </a>
        <a href="#" className="text-red-600 hover:text-red-800">
          <Image src="/youtube.png" alt="YouTube" width={24} height={24} />
        </a>
      </div>
      <div className="logo text-2xl font-semibold text-gray-800">
        <a href="/">EduWellFit</a>
      </div>
      <div className="hidden sm:flex space-x-6">
        <a href="/" className="text-gray-700 hover:text-gray-900">
          Homepage
        </a>
        <a href="/contact" className="text-gray-700 hover:text-gray-900">
          Contact
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          About
        </a>
      </div>
    </div>
  );
};

export default Navbar;
