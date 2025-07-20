import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "Java", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Spring Boot", "JPA", "Hibernate"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "SQL Server", "MongoDB"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Power BI", "WordPress"],
  },
  {
    title: "Technologies",
    skills: ["Microservices", "OOPs", "Core Java"],
  },
  {
    title: "Certifications",
    skills: [
      "Power BI",
      "ChatGPT in Excel",
      "Microsoft SQL Server",
    ],
  },
  
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center text-slate-800"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-slate-100 rounded-xl p-6 shadow hover:shadow-lg transition duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-teal-600">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-teal-100 text-teal-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
