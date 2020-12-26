import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Image from "../Images/ImageNew2.jpg";
import { motion } from "framer-motion";
import { animationThree, transition } from "../Animations";

const Services = () => {
  return (
    <motion.div
      initial="out"
      animate="end"
      exit="out"
      variants={animationThree}
      transition={transition}
    >
      <Header />
      <Hero image={Image} title="Wild Beasts" description="Live in a Forest" />
    </motion.div>
  );
};

export default Services;
