import React from "react";
import {Tilt}from "react-tilt";
import {motion} from "framer-motion";
import {styles} from "../styles.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import {technologies} from "../constants";
import SectionWrapper from "../hoc/SectionWrapper.jsx";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='w-36'>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-36 green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-1 px-1 min-h-[150px] justify-evenly flex items-center flex-col'
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
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                Aspiring junior software developer with a background in the hospitality industry. My hospitality experience has honed my ability to thrive in
                high-pressure project-driven environments, where my focus, action-oriented approach, and commitment to
                quality shine. I am a perpetual learner who views challenges as opportunities, firmly believing in
                creative problem-solving.
            </motion.p>
            <p className={`${styles.sectionSubText} mt-5`}>My toolkit:</p>
            <div className='mt-5 flex flex-wrap gap-5'>
                {technologies.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(About, "about");