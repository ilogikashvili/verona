import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ padding: "24px" }}
    >
      <h1>About Page</h1>
      <p>This page is built from the routes configured in App.js.</p>
    </motion.section>
  );
};

export default AboutPage;

