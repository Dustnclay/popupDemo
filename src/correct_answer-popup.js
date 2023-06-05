import React, { useState, useEffect} from "react";
import ReactDOM from "react-dom";
// import { Dropdown, DropdownButton } from "react-bootstrap";
import chest from './dripChest.gif'
import JSConfetti from "js-confetti";

// import { motion, useAnimation } from "framer-motion"


export const CorrectAnswerPopup = props => {
    const {  explanation, points_earned, has_answer, onClose } = props;
    

    console.log('explanation', props)
    // useEffect(() => {
    //     if ( explanation.info.trim() == '' ) {
    //         onClose()
    //     }
    // }, [])


    let points_text = null


    const empty = () => {
    }

    const title = 'Example 1'

    //Render nothing
    // if ( explanation.info.trim() == '' ) {
    //     return (
    //         <></>
    //     )
    // }

    // const controls = useAnimation();

    // useEffect(() => {
    //   const startAnimation = async () => {
    //     await controls.start({ delay:-3 });
    //     await controls.start({ y: 50 });
    //      await controls.start({ scaleY: 0.2, scaleX: 1.5 });
    //   };
  
    //   startAnimation();
    // }, [controls]);
const confettiButton = document.querySelector('.confetti');
const canvas = document.querySelector('.up-popup ');

const jsConfetti = new JSConfetti();

function confettiClick () {
    jsConfetti.addConfetti().then(() => jsConfetti.addConfetti({
        emojis: ['🪙', '✨'],
    }))
}

    return (
        <div className='up-popup__container'>
            <div className='up-popup up-popup--correct'>
                <div className='up-popup__icon-wrapper'>
                    <div className='up-popup__icon-wrapper--cropped'></div>
                </div>

                <div className='up-popup__icon'>
                    <svg
                        width='37'
                        height='27.61'
                        viewBox='0 0 13 9'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M5.05469 8.8125C5.28906 9.04688 5.6875 9.04688 5.92188 8.8125L12.8125 1.92188C13.0469 1.6875 13.0469 1.28906 12.8125 1.05469L11.9688 0.210938C11.7344 -0.0234375 11.3594 -0.0234375 11.125 0.210938L5.5 5.83594L2.85156 3.21094C2.61719 2.97656 2.24219 2.97656 2.00781 3.21094L1.16406 4.05469C0.929688 4.28906 0.929688 4.6875 1.16406 4.92188L5.05469 8.8125Z'
                            fill='currentColor'></path>
                    </svg>
                    <svg
                        className='up-popup__icon--shadow'
                        width='37'
                        height='27.61'
                        viewBox='0 0 13 9'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M5.05469 8.8125C5.28906 9.04688 5.6875 9.04688 5.92188 8.8125L12.8125 1.92188C13.0469 1.6875 13.0469 1.28906 12.8125 1.05469L11.9688 0.210938C11.7344 -0.0234375 11.3594 -0.0234375 11.125 0.210938L5.5 5.83594L2.85156 3.21094C2.61719 2.97656 2.24219 2.97656 2.00781 3.21094L1.16406 4.05469C0.929688 4.28906 0.929688 4.6875 1.16406 4.92188L5.05469 8.8125Z'
                            fill='currentColor'></path>
                    </svg>
                </div>
                <img src={chest} 
                    style={{width:'150px',marginTop:'22px'}}
                />
                {/* <motion.img src={coin} 
                      initial={{ y: 0, scaleX: 4 }}
                      animate={controls}
                      transition={{ duration: 1 }}
                />
                <motion.img src={coin} 
                      initial={{ x: 200, scaleX: 4 }}
                      animate={controls}
                      transition={{ duration: 1 }}
                />
                <motion.img src={coin} 
                      initial={{ x: -100, scaleX: 4 }}
                      animate={controls}
                      transition={{ duration: 1 }}
                /> */}
                <h3 className='up-popup__heading up-popup__heading__correct'>{title}</h3>

                <p className='up-popup__p'>
                Using a strong and unique password is a good practice for securing your home wireless network. It is important to use a strong password, which is a combination of letters, numbers, and special characters, and to not share it with anyone. It is also important to enable encryption and to use a firewall to help protect your network from unauthorized access.
                </p>
                <button style={{backgroundColor:'white', width:'120px', height:'40px'}} onClick={() => {props.setViewPop1(false)}}>Close</button>
                <br/>
                <button className="confetti" onClick={() => {confettiClick()}}>Confetti</button>
            </div>
        </div>
    );
};
