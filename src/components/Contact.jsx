import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real projects, integrate with EmailJS or backend API
    alert("Message sent! Thank you.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-slate-800 mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-8 rounded-xl shadow-md space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
