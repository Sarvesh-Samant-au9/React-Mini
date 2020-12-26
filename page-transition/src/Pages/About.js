import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Image from "../Images/ImageNew4.jpg";
import { motion } from "framer-motion";
import { animationTwo, transition } from "../Animations";

const About = () => {
  return (
    <>
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={animationTwo}
        transition={transition}
      >
        <Header />
        <Hero
          image={Image}
          title="Exotic Locations"
          description="Into the WildLife"
        />
      </motion.div>
    </>
  );
};

export default About;
