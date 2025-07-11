"use client"

import React, { useState, use } from 'react'
import Navbar from '@/components/Navbar'
import BrandNav from './BrandNav'
import BikeDesc from './BikeDesc'
import Footer from '@/components/Footer/Footer'

export default function Page(props) {
    const { brandname } = use(props.params);
    const [nav, setNav] = useState('bikes');

    return (
        <div>
            <div className='my-20'>
                <Navbar />
            </div>
            <div className='mt-30'>
                <BrandNav navname={nav} setNav={setNav} />
            </div>
            <div>
                <BikeDesc brand={brandname} navPage={nav} />
            </div>
            <Footer />
        </div>
    );
}
