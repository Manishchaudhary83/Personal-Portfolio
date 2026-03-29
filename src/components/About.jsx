import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'
import { div } from 'framer-motion/client'
function About() {
  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.6, ease: 'easeOut'}}
    viewport={{once: true}}
    id='about'
    className='py-20 bg-dark-200'
    >
        <div className='container mx-auto px-6'>
        {/* Heading */}
        <h2 className='text-3xl font-bold text-center mb-4 '>About 
            <span className='text-blue'>Me</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passionate</p>

            {/* image + my journey */}
            <div className='flex flex-col md:flex-row items-center gap-12'>
                {/* image */}
                <div className='md:w-1/2 rounded-2xl overflow-hidden h-225'>
                <motion.img 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.9, ease: 'easeOut'}}
                viewport={{once: false, amount:0.2}}
                className='w-full h-full object-cover'
                src={assets.profileImg} alt="profile" />
                </div>

                {/* Text-content */}
                <motion.div 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.9, ease: 'easeOut'}}
                viewport={{once: false, amount:0.2}}
                className='md:w-1/2'
                >
                    <div className='rounded-2xl p-8'>
                        <h3 className='text-2xl font-semibold mb-6 '>My Journey</h3>
                        <p className='text-gray-300 mb-6 text-justify'>I am a passionate Full Stack Developer focused on React and modern web technologies. My journey began with learning programming fundamentals and building small projects, which grew into developing real-world applications. I enjoy creating responsive, user-friendly solutions and integrating Artificial Intelligence to build smart and innovative systems.</p>
                        <p className='text-gray-300 mb-12 text-justify'>Outside of coding, I enjoy exploring AI innovations, experimenting with new web tools, listening to music, and spending time outdoors. These activities keep me inspired and fuel my creativity for building better applications.</p>
                    
                    {/* cards */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                        {
                            aboutInfo.map((data, index) => (
                                <div key={index} className='bg-dark-300 rounded-2xl p-6  transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                                    <div className='text-blue text-4xl mb-4 '>
                                        <data.icon/>
                                    </div>
                                    <h3 className='text-xl font-semibold mb-3'>
                                        {data.title}
                                    </h3> 
                                    <p className='text-gray-400'>
                                        {data.description}
                                    </p>   
                                </div>
                            ))
                        }
                    </div>
                    </div>
                </motion.div>
            </div>
        </div>

    </motion.div>
  )
}

export default About
