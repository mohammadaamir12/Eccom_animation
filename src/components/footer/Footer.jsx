import React from 'react'
import {FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram} from 'react-icons/fa'
import {FaMapLocation} from 'react-icons/fa6'
import payment from '../../assets/payment.png'
import {motion} from 'framer-motion'

export default function Footer() {
  return (
    <>
      <footer className='bg-brandDark text-white pt-12 pb-8'>
        <div className="container">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
              {/* Company details */}
              <motion.div
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{
                  delay:0.6,
                  duration:0.6
              }}
              className='space-y-6'>
             <h1 className='text-3xl font-bold uppercase'>playing</h1>
             <p className='text-sm max-w-[300px]'>
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
             </p>
             
             <div>
             <p className='flex items-center gap-2'>
               <FaPhone/>
              +1 (234) 70095
             </p>
             <p className='flex items-center gap-2'>
                <FaMapLocation/>
              Noida, Uttar Pradesh
             </p>
             </div>
             </motion.div>
             
             {/* footer links */}
             <motion.div
             initial={{opacity:0,y:100}}
             whileInView={{opacity:1,y:0}}
             transition={{
                 delay:0.6,
                 duration:0.6
             }}
             className='space-y-6'>
                <h1 className='text-3xl font-bold'>Qucik Search</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                    <div>
                        <ul className='space-y-2'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact us</li>
                            <li>privacy Policy</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='space-y-2'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact us</li>
                            <li>privacy Policy</li>
                        </ul>
                    </div>
                </div>
             </motion.div>

             {/* Social links */}
             <motion.div
                initial={{opacity:0,y:100}}
                whileInView={{opacity:1,y:0}}
                transition={{
                    delay:0.6,
                    duration:0.6
                }}
              className='space-y-6'>
                <h1 className='text-3xl font-bold'>Follow us</h1>
                <div className='flex items-center gap-3 mt-4'>
                    <FaFacebook className='text-3xl hover:scale-105 duration-300'/>
                    <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
                    <FaTelegram className='text-3xl hover:scale-105 duration-300'/>
                    <FaGoogle className='text-3xl hover:scale-105 duration-300'/>
                </div>
                <div className='space-y-2'>
                    <p>
                        Payment Method
                    </p>
                    <img src={payment} alt='' className='w-[45%]' />
                </div>
             </motion.div>
             
             </div>
              {/* copyright section */}
              <p className='text-white text-center mt-8 border-t-2 pt-8'>
                @ 2024, All Rights Reserved
              </p>
             </div>

               </footer>
    </>
  )
}
