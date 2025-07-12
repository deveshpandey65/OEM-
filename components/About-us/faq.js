'use client';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
    {
        question: "What is NAVEauto and how is it different from other platforms?",
        answer:
            "NAVEauto is India’s first full-stack mobility e-commerce platform. Unlike typical vehicle listing sites, we offer a seamless end-to-end journey—from discovery and financing to delivery and long-term support.",
    },
    {
        question: "Do you sell both electric and fuel-based vehicles?",
        answer:
            "Yes, we offer 2W, 3W, and 4W vehicles across ICE (Internal Combustion Engine) and EV (Electric Vehicle) segments through verified dealership networks.",
    },
    {
        question: "How does NAVEauto ensure trust and transparency?",
        answer:
            "We verify every dealer, enable transparent pricing, support paperless processes, and offer embedded financing and insurance options—all within a single platform.",
    },
    {
        question: "Is doorstep delivery and onboarding available?",
        answer:
            "Absolutely. We offer hyperlocal delivery and ownership onboarding in select cities with plans to scale nationwide soon.",
    },
    {
        question: "Can I apply for a loan or finance through NAVEauto?",
        answer:
            "Yes. Our platform supports embedded finance, allowing you to compare, apply, and get approval directly through the purchase journey—100% paperless.",
    },
    {
        question: "What post-sale services do you offer?",
        answer:
            "We provide intelligent service reminders, insurance renewal support, and upcoming ownership add-ons to ensure long-term convenience and peace of mind.",
    },
    {
        question: "Where is NAVEauto available right now?",
        answer:
            "We’re currently operational in select metro and Tier 1 cities, and rapidly expanding to more regions. You can check availability when entering your location on our platform.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#f3f7f6] py-20 px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="w-14 h-1 mx-auto bg-[#ffa633] rounded-full mb-4" />
                <p className="text-gray-600">
                    Have a question about NAVEauto? We’ve got answers to help you move smarter.
                </p>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col gap-4">
                {faqs.map((item, index) => (
                    <div key={index} className="bg-white rounded shadow-sm">
                        <button
                            onClick={() => toggle(index)}
                            className="w-full px-6 py-4 text-left flex justify-between items-center font-semibold text-gray-800 hover:bg-gray-50 transition"
                        >
                            {item.question}
                            <FaChevronDown
                                className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>
                        {openIndex === index && (
                            <div className="px-6 pb-4 text-gray-600">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
