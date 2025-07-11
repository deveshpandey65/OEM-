import React from 'react'
import BrandDescription from './descHero'
import VehicalList from './vehicalList'
import BikeSeries from './bikeSeries'
import ScooterSeries from './scooterSeries'
import SimilarBrands from './similarBrand'
import BikeOptions from './BikeOptions'
import DiscontinuedBikes from './DiscontinuedBikes'
import BikeGallery from './BikeGallery'
import BikeVideos from './BikeVideos'
import UserReviews from './UserReviews'
import NewsSection from './BikesNews'
import QASection from './QASection'
import FAQSection from './FAQSection'
import ShowroomGrid from './Showroom'

export default function BikeDesc({ brand, navPage }) {
  return (
      <div className=' bg-gray-100 px-[5%] grid md:grid-cols-[70%_30%] grid-cols-1 gap-6'>
        {/* left Section */}
        <div>
              <BrandDescription brand={brand} nav={navPage}/>
              <VehicalList brand={brand} nav={navPage}/>
              <BikeGallery brand={brand}/>
              <BikeVideos brand={brand}/>
              <UserReviews brand={brand}/>
              <NewsSection brand={brand}/>
              <QASection brand={brand}/>
              <FAQSection brand={brand}/>
              <ShowroomGrid brand={brand}/>
        </div>
        {/* Right Section*/}
        <div className='mt-[80px]'>
          <BikeSeries brand={brand} />
          <ScooterSeries brand={brand}/>
          <SimilarBrands/>
          <BikeOptions/>
          <DiscontinuedBikes/>
        </div>
        
    </div>
  )
}
