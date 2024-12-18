import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        What Our Clients Say
      </motion.h2>
      <blockquote>
        "Modern CPA helped us streamline our finances and grow confidently."
      </blockquote>
      <p>- John Doe, CEO</p>
    </section>
  );
};

export default Testimonials;
