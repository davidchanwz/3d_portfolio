import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";


const Tech = () => {
  return (

    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          My tools
        </p>
        <h2 className={`${styles.sectionHeadText} pb-5`}>
          Technology.
        </h2>
      </motion.div>


      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");