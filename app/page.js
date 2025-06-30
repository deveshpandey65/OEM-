
import BannerHero from '@/components/BannerHero/BannerHero';
import BikeCategories from '@/components/BikeCategories/BikeCategories';
import BlogSection from '@/components/BlogHome/Blog';
import FeaturedBikes from '@/components/FeaturedBikes/FeaturedBikes';
import Footer from '@/components/Footer/Footer';
import Testimonials from '@/components/HomeReview/Testimonials';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Navbar from '@/components/Navbar';
import PopularBikes from '@/components/PopularBikes.js/PopularBikes';
import PricingSection from '@/components/pricingPlans/pricingPlans';
import Quality from '@/components/SlidingQualityHome/Quality';
import WhyChooseDreamsRent from '@/components/WhyChooseDreamsRent/WhyChooseDreamsRent';

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="relative w-full h-[60px] overflow-hidden">
        <Navbar />
      </div>
      <div className="relative w-full h-fit ">
        <BannerHero />
      </div>
        <BikeCategories/>
        <FeaturedBikes/>
        <WhyChooseDreamsRent/>
        <HowItWorks/>
        <PopularBikes/>
        <Quality/>
        <PricingSection/>
        <Testimonials/>
        <BlogSection/>
        <Footer/>
      
    </main>
  );
}
