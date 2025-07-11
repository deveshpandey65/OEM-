import Navbar from '@/components/Navbar'
import React from 'react'
import FAQSection from './FAQSection'
import Footer from '@/components/Footer/Footer'

export default function page() {
  return (
    <div>
      <Navbar/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}
