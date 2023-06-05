import React, { useState, useEffect} from "react";
import ReactDOM from "react-dom";
// import { Dropdown, DropdownButton } from "react-bootstrap";
import check from './check.gif'


import { motion, useAnimation } from "framer-motion"


export const Popup5 = props => {
    const {  explanation, points_earned, has_answer, onClose } = props;
    

    let points_text = null


    const empty = () => {
    }

    const title = 'Example 3'

    const svgVariants = {
        hidden: {rotate:0},    
        visible:{rotate:0,
        transition: {duration: 1}}
    }
    const pathVariants = {
       hidden:{
        opacity: 0,
        pathLength: 0,
       },
       visible:{
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: "easeInOut"
        }}

    }
    

    return (
        <div className='up-popup__container'>
            <div className='up-popup up-popup--correct'>
                <div className='up-popup__icon-wrapper'>
                    <div className='up-popup__icon-wrapper--cropped'></div>
                </div>

                <div className='up-popup__icon'>
                    {/* <motion.svg
                    style={{marginTop:'-20px', marginLeft:'-22px'}}
                    variants={svgVariants}
                    initial='hidden'
                    animate='visible'
                        width='37'
                        height='27.61'
                        viewBox='0 0 13 9'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <motion.path
                            variants={pathVariants}
                            d='M5.05469 8.8125C5.28906 9.04688 5.6875 9.04688 5.92188 8.8125L12.8125 1.92188C13.0469 1.6875 13.0469 1.28906 12.8125 1.05469L11.9688 0.210938C11.7344 -0.0234375 11.3594 -0.0234375 11.125 0.210938L5.5 5.83594L2.85156 3.21094C2.61719 2.97656 2.24219 2.97656 2.00781 3.21094L1.16406 4.05469C0.929688 4.28906 0.929688 4.6875 1.16406 4.92188L5.05469 8.8125Z'
                            fill='currentColor'/>
                    </motion.svg>
                    <motion.svg
                    style={{marginTop:'-18px', marginLeft:'-18px'}}
                        variants={svgVariants}
                        initial='hidden'
                        animate='visible'
                        className='up-popup__icon--shadow'
                        width='37'
                        height='27.61'
                        viewBox='0 0 13 9'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <motion.path
                            variants={pathVariants}
                            d='M5.05469 8.8125C5.28906 9.04688 5.6875 9.04688 5.92188 8.8125L12.8125 1.92188C13.0469 1.6875 13.0469 1.28906 12.8125 1.05469L11.9688 0.210938C11.7344 -0.0234375 11.3594 -0.0234375 11.125 0.210938L5.5 5.83594L2.85156 3.21094C2.61719 2.97656 2.24219 2.97656 2.00781 3.21094L1.16406 4.05469C0.929688 4.28906 0.929688 4.6875 1.16406 4.92188L5.05469 8.8125Z'
                            fill='currentColor'/>
                    </motion.svg> */}

                    <img src={check} 
                    style={{width:'50px',marginTop:'22px'}}
                    />

                </div>
              
                <h3  style={{marginTop:'40px'}}className='up-popup__heading up-popup__heading__correct'>{title}</h3>

                <p className='up-popup__p'>
                Using a strong and unique password is a good practice for securing your home wireless network. It is important to use a strong password, which is a combination of letters, numbers, and special characters, and to not share it with anyone. It is also important to enable encryption and to use a firewall to help protect your network from unauthorized access.
                </p>
                <button style={{backgroundColor:'white', width:'120px', height:'40px'}} onClick={() => {props.setViewPop5(false)}}>Close</button>

            </div>
        </div>
    );
};
