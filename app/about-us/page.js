import AboutSection from "@/components/About-us/aboutsection";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import FAQSection from "../../components/About-us/faq";
import TestimonialSection from "@/components/About-us/peoplereview";
import WhyChooseUs from "@/components/About-us/why-choose-us";

export default function page() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f6fbfa]">
        <div className="h-20">
              <Navbar />
        </div>
        <section className="bg-[#242726] py-20 px-4 relative overflow-hidden">
            <div className="text-center  relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
                About Us
            </h2>
            </div>
        </section>
        <AboutSection/>
        <WhyChooseUs/>
        <FAQSection/>
        <TestimonialSection/>
        <Footer />
    </div>
  )
}
