"use client";
import Navbar from "@/components/Navbar";
import { carsData } from "../cars";
import Header from "./UpperDetail";
import CarGallery from "./Gallary";
import { ExtraServices } from "./ExtaServices";
import { DescriptionSection } from "./Description";
import { CarFeatures, Specifications } from "./Features";
import { use } from "react";
import Pricing from "./Pricing";
import  { CarLocationMap, OwnerInfo, ShareIcons } from "./OwnerDetail";
import TariffTable from "./Tarrif";
import FAQSection from "./faq";
import PoliciesSection from "./policies";
import ReviewSection from "./Reviews";
import ReviewForm from "./Reply";
import CarCard from "./Intrested";
import InterestedCars from "./Intrested";
import Footer from "@/components/Footer/Footer";


export default function CarDetailPage({ params }) {
    const { id } = use(params);
    const carId = parseInt(id);
    const car = carsData.find(c => c.id === carId);

    if (!car) return <div className="p-6 text-red-500">Car not found</div>;

    return (
        <div className="bg-blue-50">
            <div className="relative w-full h-20 text-black flex items-center justify-center bg-gray-800">
                <Navbar/>
            </div>
            <div className="relative w-full h-30 text-white flex items-center justify-center bg-gray-800">
                <h1 className="text-4xl font-bold">{car.name}</h1>
            </div>
            <div>
                <Header car={car} />
            </div>
            <div className="mt-2 mx-[10%] grid grid-cols-1 gap-4 lg:grid-cols-[70%_30%]  px-4">
                <div className=" ">
                    <CarGallery images={car.images} distance={car.distance} delivery={car.delivery} />
                    <ExtraServices/>
                    <DescriptionSection/>
                    <Specifications/>
                    <CarFeatures/>
                    <TariffTable/>
                    <FAQSection/>
                    <PoliciesSection/>
                    <ReviewSection/>
                    <ReviewForm/>
                </div>
                <div className=" sticky  right-[10%]">
                    <Pricing/>
                    <OwnerInfo/>
                    <CarLocationMap/>
                    <ShareIcons/>
                </div>

            </div>
            <div className=" px-[10%]">
                <InterestedCars />
            </div>
            <Footer/>
        </div>
    );
}
