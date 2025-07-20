import React from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "Smart Contact Manager",
    description:
      "A secure and user-friendly web app to manage, store, and organize your contacts with login/signup, role-based access, and dark mode support.",
    technologies: ["Spring Boot", "React", "Tailwind CSS", "JWT", "MySQL"],
    image: "/images/smart_contact_manager.png", // Add this image in your public/images folder
    github: "https://github.com/GulrezSarankar/SCM.git",
    demo: "https://your-live-scm.com",
  },
  {
    title: "E-Commerce Web App",
    description:
      "A fully functional e-commerce platform with Admin & User panels. Built with Java Spring Boot and React. Includes JWT Auth, product management, cart, and orders.",
    technologies: ["Java", "Spring Boot", "React", "Tailwind CSS", "JWT", "SQL Server"],
    image: "/images/ecommerce_project.png",
    github: "https://github.com/GulrezSarankar/ECommerce.git",
    demo: "https://your-ecommerce-demo.com",
  },
  // {
  //   title: "Summary Generator",
  //   description:
  //     "An AI-powered tool to generate text summaries using React frontend and a Python backend with Google’s NLP models.",
  //   technologies: ["React", "Python", "Flask", "Google NLP", "Tailwind CSS"],
  //   image: "/images/summary_generator.png", // Add image if available
  //   github: "https://github.com/yourusername/summary-generator",
  //   demo: "https://your-summary-demo.com",
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-slate-800"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-teal-700">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white bg-gray-800 px-4 py-2 rounded hover:bg-black"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white bg-teal-600 px-4 py-2 rounded hover:bg-teal-700"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
