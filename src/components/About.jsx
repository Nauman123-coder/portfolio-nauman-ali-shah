import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Update: Changed extension to .jpeg
import profileImg from "../assets/profile-img.jpeg"; 

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className='flex flex-col-reverse md:flex-row gap-10 items-center justify-between'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I'm a driven AI developer with a medical background and expertise in Python and
          TensorFlow, specializing in full-stack frameworks like Next.js and FastAPI. I
          leverage my clinical knowledge to build secure, HIPAA-compliant, and intelligent
          healthcare applications that optimize patient outcomes. I’m a fast learner who
          bridges the gap between medicine and technology to solve complex clinical problems.
          Let’s collaborate to build the future of digital health!
        </motion.p>

        {/* Image Container */}
        <motion.div
          variants={fadeIn("left", "", 0.1, 1)}
          className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] flex justify-center items-center'
        >
          <img 
            src={profileImg} 
            alt='profile' 
            className='w-full h-full object-cover rounded-full border-4 border-[#915eff] shadow-card'
          />
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");