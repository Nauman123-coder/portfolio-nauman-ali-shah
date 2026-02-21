// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
// import { certifications } from "../constants";

// const CertCard = ({ index, title, issuer, link, category }) => (
//   <motion.div
//     layout
//     initial={{ opacity: 0, scale: 0.9 }}
//     animate={{ opacity: 1, scale: 1 }}
//     exit={{ opacity: 0, scale: 0.9 }}
//     transition={{ duration: 0.2 }}
//     className='bg-black-200 p-4 rounded-2xl sm:w-[280px] w-full border border-white/5 hover:border-[#915eff]/50 transition-all'
//   >
//     <div className='flex flex-col h-full justify-between gap-3'>
//       <div>
//         <h3 className='text-white font-bold text-[16px] leading-tight mb-1'>
//           {title}
//         </h3>
//         <p className='text-secondary text-[12px] italic'>{issuer}</p>
//       </div>
      
//       <div className='flex justify-between items-center pt-2 border-t border-white/5'>
//         <span className='text-[8px] py-1 px-2 bg-tertiary rounded text-[#915eff] font-bold uppercase'>
//           {category}
//         </span>
//         <a 
//           href={link} 
//           target='_blank' 
//           rel='noreferrer' 
//           className='text-[11px] font-bold blue-text-gradient hover:underline'
//         >
//           Verify Link
//         </a>
//       </div>
//     </div>
//   </motion.div>
// );

// const Certifications = () => {
//   const [activeTab, setActiveTab] = useState("AI & ML");
//   const categories = ["AI & ML", "Healthcare", "Business", "Data & Management"];

//   const filteredCerts = certifications.filter((cert) => cert.category === activeTab);

//   return (
//     <div className='mt-8 bg-black-100 rounded-[20px]'>
//       <div className='pt-10 px-6 bg-tertiary rounded-2xl pb-8'>
//         <motion.div variants={textVariant()} className="text-center">
//           <p className={styles.sectionSubText}>My Academic Achievements</p>
//           <h2 className={styles.sectionHeadText}>Certifications.</h2>
//         </motion.div>

//         {/* Categories centered with a small top margin to stay close to title */}
//         <div className='mt-6 flex flex-wrap justify-center gap-3'>
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveTab(cat)}
//               className={`py-2 px-5 rounded-full text-[13px] font-bold transition-all border-2 ${
//                 activeTab === cat 
//                 ? "bg-[#915eff] border-[#915eff] text-white" 
//                 : "bg-black-200 border-transparent text-secondary hover:border-[#915eff]/40"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Tighter margin here ensures cards sit nicely below the buttons */}
//       <div className={`${styles.paddingX} mt-8 pb-10 flex flex-wrap gap-6 justify-center`}>
//         <AnimatePresence mode='popLayout'>
//           {filteredCerts.length > 0 ? (
//             filteredCerts.map((cert, index) => (
//               <CertCard 
//                 key={`${activeTab}-${cert.title}`} 
//                 index={index} 
//                 {...cert} 
//               />
//             ))
//           ) : (
//             <p className="text-secondary italic text-[14px] mt-4">
//               Coming soon: {activeTab} certifications.
//             </p>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Certifications, "certifications");

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";

const CertCard = ({ index, title, issuer, logo, link, category }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.2 }}
    className='bg-black-200 p-4 rounded-2xl sm:w-[280px] w-full border border-white/5 hover:border-[#915eff]/50 transition-all'
  >
    <div className='flex flex-col h-full justify-between gap-3'>
      <div>
        <h3 className='text-white font-bold text-[16px] leading-tight mb-2'>
          {title}
        </h3>

        {/* Issuer row with logo */}
        <div className='flex items-center gap-2'>
          {logo && (
            <img
              src={logo}
              alt={issuer}
              className='w-5 h-5 object-contain rounded-sm'
            />
          )}
          <p className='text-secondary text-[12px]'>{issuer}</p>
        </div>
      </div>

      <div className='flex justify-between items-center pt-2 border-t border-white/5'>
        <span className='text-[8px] py-1 px-2 bg-tertiary rounded text-[#915eff] font-bold uppercase'>
          {category}
        </span>
        <a
          href={link}
          target='_blank'
          rel='noreferrer'
          className='text-[11px] font-bold blue-text-gradient hover:underline'
        >
          Verify Link
        </a>
      </div>
    </div>
  </motion.div>
);

const Certifications = () => {
  const [activeTab, setActiveTab] = useState("AI & ML");
  const categories = ["AI & ML", "Healthcare", "Business", "Data & Management"];

  const filteredCerts = certifications.filter((cert) => cert.category === activeTab);

  return (
    <div className='mt-8 bg-black-100 rounded-[20px]'>
      <div className='pt-10 px-6 bg-tertiary rounded-2xl pb-8'>
        <motion.div variants={textVariant()} className="text-center">
          <p className={styles.sectionSubText}>My Academic Achievements</p>
          <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>

        <div className='mt-6 flex flex-wrap justify-center gap-3'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`py-2 px-5 rounded-full text-[13px] font-bold transition-all border-2 ${
                activeTab === cat
                ? "bg-[#915eff] border-[#915eff] text-white"
                : "bg-black-200 border-transparent text-secondary hover:border-[#915eff]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className={`${styles.paddingX} mt-8 pb-10 flex flex-wrap gap-6 justify-center`}>
        <AnimatePresence mode='popLayout'>
          {filteredCerts.length > 0 ? (
            filteredCerts.map((cert, index) => (
              <CertCard
                key={`${activeTab}-${cert.title}`}
                index={index}
                {...cert}
              />
            ))
          ) : (
            <p className='text-secondary text-[12px] italic'>{issuer}
              Coming soon: {activeTab} certifications.
            </p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "certifications");