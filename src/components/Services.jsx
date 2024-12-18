import React from "react";
import { motion } from "framer-motion";

const services = ["Tax Planning", "Audit Support", "Financial Consulting"];

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-container">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>{service}</h3>
            <p>
              Professional {service.toLowerCase()} services tailored for you.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
