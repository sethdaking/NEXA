import { motion } from 'framer-motion'
import Typewriter from "typewriter-effect";

import {styles} from '../style'


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className='flex flex-col justify-center items-center mt-5'>
        </div>
          
          

        <div>

          <h1 className={`${styles.heroHeadText} `}>Unleashing the Power of  
          <Typewriter className={`${styles.heroSubText} mt-2 text-[#56CD2D]`}
 
            onInit={(typewriter) => {
                typewriter
                    .typeString("AI.")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Humanity.")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Knowledge.")
                    .start();
            }}
            />
      </h1>

                <Typewriter className={`${styles.heroSubText} mt-2 text-white-100`}
      
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("We develop the future.")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("We Transform Industries.")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("We Empower Humanity.")
                      .start();
                      }}
                  />

                <div>
                <button className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent flex mt-[20px] ">
                  Learn More
              </button>

                </div>

        </div>

      </div>

        
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.dev
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}

                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />

              
            </div>
          </a>
        </div>
      
    </section>
  )
}

export default Hero