import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="about">
      <motion.h2
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        About Us
      </motion.h2>
      <motion.p
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        At Modern CPA, we provide tailored financial solutions ensuring success
        with professional expertise and integrity.
      </motion.p>
    </section>
  );
};

export default About;
