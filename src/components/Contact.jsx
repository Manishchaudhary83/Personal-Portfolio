import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa'
import { FaSquareWhatsapp } from 'react-icons/fa6';

export default function Contact() {
      const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "1a71b1ec-b87b-41d3-8299-d5ef870fe108");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("");
      alert("Form Submitted Successfully")
      event.target.reset();
    } else {
        alert(data.message)
      setResult("");
    }
  };

  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:1, ease: 'easeOut'}}
    viewport={{once: false, amount:0.2}}
    id='contact'    
    className='py-20 bg-dark-200'
    >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>Get In
                <span className='text-blue'>Touch</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or do you want to collaborate? Let's talk!</p>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto '>
                {/* contact form */}
                <div>
                    <form onSubmit={onSubmit} className='space-y-6' method='post'>
                        <div>
                            <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                            <input name="name" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type="text" required />
                        </div>
                        <div>
                            <label htmlFor="email" className='block text-gray-300 mb-2'>Email Address</label>
                            <input name="email" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type="email" required/>
                        </div>
                        <div>
                            <label htmlFor="message" className='block text-gray-300 mb-2'>Your Message</label>
                            <textarea name="message" className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type="text" required/>
                        </div>
                        <div>
                            <button className=' w-full px-6 py-3 text-center bg-blue rounded-lg font-medium hover:bg-blue-700 transition duration-300 cursor-pointer' type='submit'>{result? result : "Send Message" }</button>
                        </div>
                    </form>
                </div>

                {/* contact information */}
                <div className='space-y-8'>
                    <div className='flex items-start'>
                        <div className='text-blue text-2xl mr-4 ' >
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2 '>Location</h3>
                            <p className='text-gray-400'>Bharatpur-10, Chitwan</p>
                        </div>   
                    </div>
                    <div className='flex items-start'>
                        <div className='text-blue text-2xl mr-4 ' >
                            <FaEnvelope />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2 '>Email</h3>
                            <p className='text-gray-400'>jaiswalmanishm01@gmail.com</p>
                        </div>   
                    </div>
                    <div className='flex items-start'>
                        <div className='text-blue text-2xl mr-4 ' >
                            <FaPhone />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2 '>Phone</h3>
                            <p className='text-gray-400'>+977-9765041950</p>
                        </div>   
                    </div>

                    <div className='pt-4'>
                        <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                        <div className='flex space-x-4 '>
                            <a href="https://github.com/Manishchaudhary83" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-white hover:bg-blue hover:text-white transition duration-300'>
                                <FaGithub />
                            </a>

                            <a href="https://www.linkedin.com/in/manish-chaudhary-1459bb368/" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text- hover:bg-blue hover:text-white transition duration-300'>
                                <FaLinkedin />
                            </a>
                            <a href="https://web.whatsapp.com/" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-[green] hover:bg-[green] hover:text-white transition duration-300'>
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
      
    </motion.div>
  )
}
