import React from 'react'
import { MdMenu, MdOutlineShoppingCart,} from 'react-icons/md'
import { SlEarphones,SlUserFollow,SlUserFollowing } from 'react-icons/sl'
import { UpdateFollower } from 'react-mouse-follower'
import { motion } from "framer-motion"

const NavBarMenu = [
  {
    id: 1,
    title: 'Home',
    link: '#'
  },
  {
    id: 3,
    title: 'Blog',
    link: '#'
  },
  {
    id: 4,
    title: 'About',
    link: '#'
  },
  {
    id: 5,
    title: 'Contact',
    link: '#'
  },

]
export default function Nav() {
  return (
    <>
      <div className='bg-brandDark text-white py-8 font-varela '>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='flex justify-between items-center container'>


          {/* Logo and Text Section */}

          <div>
            <a href='#' className='text-xl font-bold uppercase'>
              Ecommerce
            </a>
          </div>


          {/* Menu Section */}

          <div className='hidden md:block'>
            <ul className='flex items-center gap-4'>
              {NavBarMenu.map((item) => (
                <li key={item.id}>
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: 'white',
                      zIndex: 999,
                      followSpeed: 1.5,
                      scale: 5,
                      mixBlendMode: 'difference',
                    }}
                  >
                    <a href={item.link} className='inline-block text-sm py-2 px-3 uppercase'>{item.title}</a>
                  </UpdateFollower>
                </li>
              ))}
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: 'white',
                  zIndex: 999,
                  followSpeed: 1.5,
                  scale: 5,
                  mixBlendMode: 'difference',
                }}
              >
                <button className='text-2xl ps-14'>
                  <MdOutlineShoppingCart />
                </button>
                <button className='text-xl ps-6 ' >
                  <SlUserFollow />
                </button>
              </UpdateFollower>


            </ul>
          </div>


          {/* Mobile Hamburger Section */}

          <div className='md:hidden'>
            <MdMenu />
          </div>
        </motion.nav>
      </div>
    </>

  )
}

