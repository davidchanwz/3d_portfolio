import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { david } from '../assets';

const Hero = () => {
  return (
    <section className="relative w-full h-screen 
    mx-auto">
      <div className={`${styles.paddingX} absolute
      inset-0 top-[120px] max-w-7xl mx-auto flex flex-row
      items-start gap-5`}>
        <div className="flex flex-col
        justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="flex flex-row w-max">
          <img src={david} alt='david' className='border-[#915eff] border-2 rounded-full w-[70px] h-[70px] ml-[-45px] mr-3 mt-6 sm:w-[140px] sm:h-[140px] object-contain sm:m-3' />
          <div>
            <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span
              className="text-[#915eff]">David</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop cool stuff for <span className="line-through">fun</span> <span>work</span>
              <br className="sm:block hidden" />
            </p>

          </div>
        </div>

      </div>

      <ComputersCanvas />
      <div className="absolute xs:bottom-10
      bottom-32 w-full flex justify-center
      items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl
          border-4 border-secondary flex justify-center
          items-start">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repreatType: 'loop'
              }}
              className="w-3 h-3 rounded-full
            bg-secondary mb-1"/>
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero