"use client"
import React from 'react'
import DashboardNav from '../Nav'
import Footer from '@/components/Footer/Footer'
import Wishlist from './wishlist'
import Navbar from '@/components/Navbar'

export default function page() {
  return (
        <div className=' bg-blue-50'>
            <div className='mb-20'>
                    <Navbar/>
            </div>
            <div className=' w-full flex justify-center items-center bg-black h-30 '>
              <h1 className='text-white text-3xl font-extrabold'>
                My Bookings
              </h1>
            </div>
            <DashboardNav name={'Wishlist'}/>
            <Wishlist/>
            <Footer/>
        </div>
  )
}
