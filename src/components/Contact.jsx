import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="contact"
      className="contact"
    >
      <h2>Contact Us</h2>
      <p>Email: info@moderncpa.com | Phone: (123) 456-7890</p>
    </motion.footer>
  );
};

export default Contact;
