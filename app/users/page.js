"use client"
import React, { useEffect, useState } from 'react'
import DashboardNav from './Nav'
import DashboardCards from './dashboardOptions'
import BookingAndTransaction from './bookings-transactions'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar'
import {useRouter} from 'next/navigation'

export default function page() {
  const router= useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  useEffect(() => {
      const verifyToken = async () => {
        const token = localStorage.getItem('token');
  
        if (!token) {
          console.log('not token')
          router.push('/signin');
          return;
        }
  
        try {
          const response = await fetch('http://localhost:5000/api/user/profile', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          if (response.status === 200) {
            setIsLoggedIn(true);
          } else {
            localStorage.removeItem('token');
            router.push('/signin');
          }
        } catch (error) {
          console.error("Token invalid or request failed:", error);
          localStorage.removeItem('token');
          router.push('/signin');
        }
      };
  
      verifyToken();
    }, [router]);
    if (!isLoggedIn) {
      return null;
    }
  return (
    <div className=' bg-blue-50'>
        <div className='mb-20'>
          <Navbar/>
        </div>
        <div className=' w-full flex justify-center items-center bg-black h-30 '>
          <h1 className='text-white text-3xl font-extrabold'>
            User Dashboard
          </h1>
        </div>
        <DashboardNav name={'Dashboard'}/>
        <DashboardCards/>
        <BookingAndTransaction/>
        <Footer/>
    </div>
  )
}
