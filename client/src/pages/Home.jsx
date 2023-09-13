/* eslint-disable no-unused-vars */
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from "valtio";

import state from '../store';
import CustomButton from '../components/CustomButton';
import {
  headContainerAnimation,
  headContentAnimation, 
  headTextAnimation, 
  slideAnimation 
  } from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img
              src='./myLogo.svg'
              alt='My Logo'
              className='w-16 h-16 object-contain'
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h2 className="head-text">
                DESIGN.
              </h2>
              <span className="sub-text italic">ON THE FLY.</span>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
              >
              <p className="max-w-md font-normal text-white-600 text-base">
                Create your unique and exclusive shirt design with our brand new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
              </p>

              <CustomButton 
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home