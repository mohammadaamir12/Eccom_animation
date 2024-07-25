import React from 'react'
import Nav from './components/navbar/Nav'
import Landing from './components/landing/Landing'
import { UpdateFollower } from 'react-mouse-follower';
import Categories from './components/categories/Categories';
import Products from './components/products/Products';
import Footer from './components/footer/Footer';


export default function App() {
  return (
    <main className='overflow-x-hidden'>
      <UpdateFollower
        mouseOptions={{
          backgroundColor: 'white',
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Nav />
        <Landing />
        
      </UpdateFollower>
      <UpdateFollower
        mouseOptions={{
          backgroundColor: 'black',
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
      <Categories/>
      <Footer/>
      </UpdateFollower>

    </main>
  )
}
