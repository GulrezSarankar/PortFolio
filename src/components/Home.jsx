import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="md:w-1/2 bg-teal-600 flex flex-col justify-center items-center p-10 text-white">
        <img
          src="/gulrez.jpg"
          alt="Gulrez Shabir Sarankar"
          className="w-60 h-60 object-cover rounded-full border-4 border-white shadow-xl"
        />
        <h2 className="mt-4 text-xl font-semibold">Gulrez Shabir Sarankar</h2>
        <div className="flex gap-6 mt-6 text-2xl">
          <a href="https://github.com/GulrezSarankar" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/gulrez-sarankar/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 bg-slate-900 text-white flex flex-col justify-center px-10 py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Gulrez Shabir Sarankar
        </h1>
        <h2 className="text-2xl text-teal-400 font-semibold mb-4">
          Java Developer
        </h2>
        <p className="text-slate-300 max-w-lg mb-6">
          Experienced in backend development using Java, Spring Boot, and
          databases like MySQL, SQL Server, and MongoDB. Passionate about clean
          architecture and learning new technologies.
        </p>
        <div className="flex gap-4">
          <a
            href="/resume.pdf"
            download
            className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-full font-medium transition duration-300"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="border border-teal-400 hover:bg-teal-500 px-5 py-2 rounded-full font-medium transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
