import React, { useState } from 'react'
import head1 from '../../assets/head4.png'
import head2 from '../../assets/head2.png'
import head3 from '../../assets/head3.png'
import { AnimatePresence, easeInOut, motion } from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower'


const headPhoneDetails = [
  {
    id: 1,
    image: head1,
    title: "Headphone",
    subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: '$100',
    modal: "Modal White",
    bgColor: '#aba9a6',
  },
  {
    id: 2,
    image: head3,
    title: "Headphone2",
    subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: '$200',
    modal: "Modal Pink",
    bgColor: '#8b5958',
  },
  {
    id: 3,
    image: head2,
    title: "Headphone3",
    subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: '$300',
    modal: "Modal Blue",
    bgColor: '#5d818c',
  },
]
const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut
      },
    },
    exit: {
      opacity: 0,
      y: 10,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: easeInOut
      },
    },
  }
}

export default function landing() {
  const [activeHeadPhone, setActiveheadPhone] = useState(headPhoneDetails[0])
  const handleActiveData = (Data) => {
    setActiveheadPhone(Data)
  }
  return (
    <>
      <section className='bg-brandDark text-white font-varela'>
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[580px]'>


          {/* Headphone info */}

          <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]'>
            <div className='space-y-5 text-center md:text-left'>
              <AnimatePresence mode='wait'>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: 'white',
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -750,
                    scale: 10,
                    mixBlendMode: 'difference',
                  }}
                >
                  <motion.h1
                    key={activeHeadPhone.id}
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className='text-3xl lg:text-6xl font-bold font-varela'>{activeHeadPhone.title}</motion.h1>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode='wait'>
                <motion.p
                  key={activeHeadPhone.id}
                  variants={fadeUp(0.4)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className='text-sm leading-loose text-white/80'>{activeHeadPhone.subtitle}</motion.p>
              </AnimatePresence>
              <AnimatePresence mode='wait'>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeHeadPhone.bgColor,
                    zIndex: 999,
                    rotate: -720,
                    followSpeed: 0.5,
                    scale: 6,
                    backgroundElement: (
                      <div>
                        <img src={activeHeadPhone.image} />
                      </div>
                    )
                  }}
                >


                  <motion.button
                    key={activeHeadPhone.id}
                    variants={fadeUp(0.4)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{ backgroundColor: activeHeadPhone.bgColor }} className='px-4 py-2 inline-block font-normal rounded-sm'>
                    Buy and Listen
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>


              {/* Headphone list seperator */}

              <div className='flex items-center justify-center md:justify-start gap-4 !mt-22'>
                <div className='w-20 h-[1px] bg-white'></div>
                <p className='text-nowrap'>Top Headphones for you</p>
                <div className='w-20 h-[1px] bg-white'></div>
              </div>


              {/* Headphone list switch */}

              <div className='grid grid-cols-3 gap-10'>
                {headPhoneDetails.map((item) => {
                  return (
                    <UpdateFollower
                      mouseOptions={{
                        backgroundColor: item.bgColor,
                        zIndex: 9999,
                        followSpeed: 0.5,
                        scale: 5,
                        text: 'View Details',
                        textFontSize: '3px'
                      }}
                    >
                      <div
                        key={item.id}
                        onClick={() => handleActiveData(item)}
                        className='grid grid-cols-2 place-items-center cursor-pointer'>
                        <div>
                          <img src={item.image} alt='' className='w-[200px] ' />
                        </div>
                        <div className='space-y-2'>
                          <p className='text-base font-bold'>{item.price}</p>
                          <p className='text-xs font-normal text-nowrap'>{item.modal}</p>
                        </div>
                      </div>
                    </UpdateFollower>
                  )

                }

                )}
              </div>
            </div>
          </div>



          {/*Main Image */}

          <div className='flex flex-col justify-end items-center'>
            <AnimatePresence mode='wait'>

            </AnimatePresence>
            <motion.img
              key={activeHeadPhone.id}
              initial={{ opacity: 1, scale: 0.9, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
              exit={{
                opacity: 0, scale: 0.9, y: 100,
                transition: {
                  duration: 0.2
                },
              }}
              src={activeHeadPhone.image} alt=""
              className='w-[300px] md:w-[400px] xl:w-[500px] ' />

          </div>

        </div>
      </section>
    </>
  )
}
