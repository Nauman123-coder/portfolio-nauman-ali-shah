import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Nauman</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Full Stack AI Developer, building{" "}
            <br className="sm:block hidden" />
            AI applications in healthcare
          </p>

          <div className="flex gap-5 mt-8" style={{ position: "relative", zIndex: 10 }}>
            <a href="https://github.com/Nauman123-coder" target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:opacity-100 hover:text-[#915EFF] transition-all duration-200">
              <FaGithub size={26} />
            </a>
            <a href="https://www.linkedin.com/in/nauman-ali-shah-27387b351" target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:opacity-100 hover:text-[#915EFF] transition-all duration-200">
              <FaLinkedin size={26} />
            </a>
            <a href="https://x.com/NaumanAS393" target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:opacity-100 hover:text-[#915EFF] transition-all duration-200">
              <FaXTwitter size={26} />
            </a>
          </div>

          <div style={{ position: "relative", zIndex: 10, marginTop: "20px" }}>
            <a href="/cv.pdf" download className="inline-flex items-center gap-2 py-3 px-6 rounded-full border-2 border-[#915EFF] text-white text-[13px] font-bold hover:bg-[#915EFF] transition-all duration-300">
              ↓ Download CV
            </a>
          </div>
        </div>
      </div>

      {!isMobile && <ComputersCanvas />}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;