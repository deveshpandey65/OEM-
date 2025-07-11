"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // Optional: or use Font Awesome

const faqs = [
    {
        question: "How old do I need to be to rent a car?",
        answer: "You must be at least 21 years old with a valid driver's license.",
    },
    {
        question: "What documents do I need to rent a car?",
        answer: "You’ll need a valid driver's license, ID proof, and a credit/debit card.",
    },
    {
        question: "What types of vehicles are available for rent?",
        answer: "We offer sedans, SUVs, convertibles, trucks, and more.",
    },
    {
        question: "Can I rent a car with a debit card?",
        answer: "Yes, debit cards are accepted, but conditions may apply.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold">FAQ’s</h3>
            <div className="w-6 h-1 bg-orange-500 mt-1 mb-4 rounded" />

            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="border border-gray-100 rounded-md mb-3"
                >
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="flex items-center justify-between w-full p-4 text-left focus:outline-none"
                    >
                        <span className="text-base font-medium">{faq.question}</span>
                        <ChevronDown
                            className={`w-5 h-5 transition-transform ${openIndex === index ? "rotate-180" : ""
                                }`}
                        />
                    </button>
                    {openIndex === index && (
                        <div className="px-4 pb-4 text-sm text-gray-600">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
