import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
// import Image from "../Images/img1.jpg";
import Image from "../Images/ImageNew6.jpg";
import { motion } from "framer-motion";
import { animationOne, transition } from "../Animations";

const Home = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <Header />
      <Hero
        image={Image}
        title="Love Nature"
        description="Once in a Life Time"
      />
    </motion.div>
  );
};

export default Home;
