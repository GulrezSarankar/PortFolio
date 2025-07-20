import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-slate-100 text-slate-800 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center text-teal-600"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left: Summary */}
          <motion.div
            className="md:w-1/2 text-lg space-y-5"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p>
              Hello! I'm <span className="font-semibold text-teal-600">Gulrez Shabir Sarankar</span>, a passionate <span className="font-semibold">Java Developer</span> specializing in backend development and clean code practices. I focus on building scalable systems using Java, Spring Boot, JPA, and secure architecture principles.
            </p>
            <p>
              My approach to software development is rooted in constant learning, collaborative development, and a deep understanding of core backend fundamentals like database design, API integration, and security.
            </p>
            <p>
              I thrive in fast-paced environments, enjoy solving real-world problems with code, and am always looking to improve both personally and professionally.
            </p>
          </motion.div>

          {/* Right: Education, Skills, etc */}
          <motion.div
            className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h4 className="text-lg font-semibold text-teal-600 mb-1">Education</h4>
              <p className="text-sm">HSC – 76.55%</p>
              <p className="text-sm">B.Sc in Information Technology – 8.14 CGPA</p>
              {/* <p className="text-sm">M.Sc Computer Science - (Appearing) </p> */}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-teal-600 mb-1">Certifications</h4>
              <ul className="text-sm list-disc list-inside">
                <li>Java Developer</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-teal-600 mb-1">Languages</h4>
              <ul className="text-sm list-disc list-inside">
                <li>Java</li>
                <li>HTML, CSS, JavaScript</li>
                <li>Core Java</li>
                <li> C & C++</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-teal-600 mb-1">Technologies</h4>
              <ul className="text-sm list-disc list-inside">
                <li>Spring Boot, JPA, Hibernate</li>
                <li>MySQL, SQL Server, MongoDB</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Resume Button */}
        <div className="mt-10 text-center">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full font-medium transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
