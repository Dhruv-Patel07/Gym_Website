import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import NumberCounter from 'number-counter'

import {motion} from 'framer-motion'
const Hero = () => {
  const transition = {type: 'spring', duration : 3}
  const mobile=window.innerWidth<=768?true:false;
  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
          initial={{left:mobile?'150px':'307px'}}
          whileInView={{left:'8px'}}
          transition={{...transition,type:'tween'}}
          ></motion.div>
          <span>The best fitness club on the planet Earth</span>
        </div>
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape   </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>In here we will help you  to shape your ideal body  and live up your life to fullest</span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span><NumberCounter end={140} start={100} delay='4' postFix='+'/></span>
            <span>Coaches</span>
          </div>
          <div>
            <span><NumberCounter end={1000} start={900} delay='4' postFix='+'/></span>
            <span>members joined</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={20} delay='4' postFix='+'/></span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get Started </button>
          <button className="btn">Learn More  </button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div 
        initial={{right:'-7rem'}}
        whileInView={{right:'4rem'}}
        transition={transition}
        className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span><span>116 bpm</span>
        </motion.div>

        <img src={hero_image} className="hero-image" />
        <motion.img
         initial={{right:'5rem'}}
         whileInView={{right:'20rem'}}
         transition={transition}
         src={hero_image_back} alt="" className="hero-image-back" />

        <motion.div 
          initial={{right:'50rem'}}
          whileInView={{right:'30rem'}}
          transition={transition}
        className="calories">
          <img src={Calories} alt="" />
          <div>
          <span>Calories Burned </span><span>207 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero