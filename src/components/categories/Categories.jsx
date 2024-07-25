import React from 'react'
import head from '../../assets/headphone.png'
import home from '../../assets/appliances.png'
import book from '../../assets/books.png'
import earphones from '../../assets/earphones.png'
import phone from '../../assets/iphone.png'
import videogame from '../../assets/videogame.png'
import { UpdateFollower } from 'react-mouse-follower'
import {motion} from 'framer-motion'

const categoriesData=[
    {
        title:'Headphones',
        image:head
    },
    {
        title:'Home Appliances',
        image:home
    },
    {
        title:'Books',
        image:book
    },
    {
        title:'Earphones',
        image:earphones
    },
    {
        title:'Mobiles',
        image:phone
    },
    {
        title:'Video Games',
        image:videogame
    },

]

const fadeUp = (delay) => {
    return {
      hidden: {
        opacity: 0,
        y: 100,
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: delay,
        },
      },
    }
}

export default function Categories() {
  return (
    <>
      <section className='font-poppins bg-gray-100 py-8'>
      <div className="cointainer py-14">
        <motion.h1 initial='hidden' whileInView="show" variants={fadeUp(0.2)} className='text-center font-bold text-3xl pb-10'>Categories</motion.h1>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6' >
        {categoriesData.map((data)=>(
            <UpdateFollower
            mouseOptions={{
                backgroundColor:'white',
                zIndex: 9999,
                rotate: 720,
                followSpeed: 0.5,
                scale: 5,
                mixBlendMode:'darken',
                backgroundElement: (
                  <div>
                    <img src={data.image} />
                  </div>
                )
              }}
            >
            <div className='flex flex-col items-center justify-center p-5 max-w-[300] w-[180px] h-[220px] mx-auto shadow-lg rounded-lg bg-white '>
                <motion.img initial='hidden' whileInView="show" variants={fadeUp(0.3)} className='w-[100px] mb-4' src={data.image} alt=''/>
                <h1 className='text-center text-xl font-bold'>{data.title}</h1>
            </div>
            </UpdateFollower>
        ))}
      </div>
      </section>
    </>
  )
}
