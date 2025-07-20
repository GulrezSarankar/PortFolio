import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-16 fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
        <h1 className="text-xl font-bold text-indigo-600">Gulrez Portfolio</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-indigo-500">Home</a></li>
          <li><a href="#about" className="hover:text-indigo-500">About</a></li>
          <li><a href="#skills" className="hover:text-indigo-500">Skills</a></li>
          <li><a href="#projects" className="hover:text-indigo-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
