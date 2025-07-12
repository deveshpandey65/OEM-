'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import BannerHero from '@/components/BannerHero/BannerHero';
import BikeCategories from '@/components/BikeCategories/BikeCategories';
import BlogSection from '@/components/BlogHome/Blog';
import FeaturedBikes from '@/components/FeaturedBikes/FeaturedBikes';
import Footer from '@/components/Footer/Footer';
import Testimonials from '@/components/HomeReview/Testimonials';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import PopularBikes from '@/components/PopularBikes.js/PopularBikes';
import PricingSection from '@/components/pricingPlans/pricingPlans';
import Quality from '@/components/SlidingQualityHome/Quality';
import WhyChooseDreamsRent from '@/components/WhyChooseDreamsRent/WhyChooseDreamsRent';
import FlashSaleSection from './FlashSection';
import HeroSlider from './HeroSlider';

const dummyFlashSales = [
  {
    id: '1',
    name: 'Vida V1 Pro',
    price: 2000,
    salePrice: 899,
    image: '/assets/img/bike.png',
    bikesLeft: 10, 
    time: 1800
  },
  {
    id: '3',
    name: 'Ola S1 Air',
    price: 1800,
    salePrice: 749,
    image: '/assets/img/bike1.png',
    bikesLeft: 4,
    time: 1300
  },
];


export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isManuallyClosed, setIsManuallyClosed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const router = useRouter();
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!showModal) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === dummyFlashSales.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [showModal, dummyFlashSales.length]);
  const flashSaleEnd = new Date();
  flashSaleEnd.setHours(flashSaleEnd.getHours() + 1); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const verifyToken = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/user/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 200) setIsLoggedIn(true);
      } catch (err) {
        console.error('Token validation failed:', err);
      }
    };

    verifyToken();
  }, [router]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const end = flashSaleEnd.getTime();
      const distance = end - now;

      if (distance > 0) {
        setTimeLeft(distance);
        if (!isManuallyClosed) {
          setShowModal(true);
        }
      } else {
        setShowModal(false);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isManuallyClosed]);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <main className="flex flex-col">
      <div className="relative w-full h-[60px] overflow-hidden">
        <Navbar />
      </div>

      {/* Flash Sale Modal */}
      {showModal && (
        <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-fit bg-white rounded-xl shadow-lg p-6 max-w-4xl  relative">
            <button
              onClick={() => {
                setShowModal(false);
                setIsManuallyClosed(true);
              }}
              className="absolute top-2 right-3 text-xl text-gray-500 hover:text-black"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center mb-1 text-orange-600">
              ⚡ Flash Sale Deals
            </h2>
            

            {/* Slider */}
            <div className="w-full flex justify-center items-center py-2 px-1">
              {dummyFlashSales.length > 0 && (
                <div className="w-[200px] bg-orange-50 p-4 rounded-lg shadow-md transition-all duration-500 ease-in-out">
                  <img
                    src={dummyFlashSales[currentIndex].image}
                    alt={dummyFlashSales[currentIndex].name}
                    className="w-full h-40 object-contain mb-2 rounded"
                  />
                  <p className="text-center text-sm mb-3 text-gray-600">
                    Ends in <span className="font-semibold text-red-600">{formatTime(timeLeft)}</span>
                  </p>
                  <h3 className="text-lg font-semibold">{dummyFlashSales[currentIndex].name}</h3>
                  <p className="text-gray-500 line-through">₹{dummyFlashSales[currentIndex].price}</p>
                  <p className="text-red-600 font-bold">₹{dummyFlashSales[currentIndex].salePrice}</p>
                </div>
              )}
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setShowModal(false);
                  setIsManuallyClosed(true);
                  router.push('/flashsale');
                }}
                className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
              >
                View All Flash Sales
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Main Content */}
      <div className="relative w-full h-fit">
        <BannerHero />
      </div>
      <HeroSlider/>
      <FlashSaleSection/>
      <BikeCategories />
      <FeaturedBikes />
      <WhyChooseDreamsRent />
      <HowItWorks />
      <PopularBikes />
      <Quality />
      <PricingSection />
      <Testimonials />
      <BlogSection />
      <Footer />
    </main>
  );
}
