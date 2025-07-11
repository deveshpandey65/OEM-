// components/HondaFAQSection.jsx
"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
    {
        question: "Which are the most popular Honda Bikes available in India?",
        answer:
            "The most popular Honda Bikes are Honda SP 125, Honda Shine, Honda Unicorn available in India with starting price Rs 68,794.",
    },
    {
        question: "Which is the highest-priced bike in Honda?",
        answer:
            "The highest-priced bike model of Honda is Honda Gold Wing with price 39.20 Lakh.",
    },
    {
        question: "Which is the most mileage efficient bike in Honda?",
        answer:
            "2025 Honda XL750 Transalp is the most mileage efficient model in Honda with a mileage of 70 kmpl.",
    },
    {
        question: "Which is the lowest-priced bike model in Honda?",
        answer:
            "The lowest-priced model of Honda is the Honda Shine 100 with price 68,794.",
    },
    {
        question: "What are the upcoming bike from Honda?",
        answer: "",
    },
];

export default function FAQSection({brand}) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full mb-4 max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Honda Bikes FAQs</h2>

            {faqData.map((item, index) => (
                <div key={index} className="border-b py-4">
                    <div
                        onClick={() => toggleFaq(index)}
                        className="flex justify-between items-start cursor-pointer"
                    >
                        <p className="font-medium">Q) {item.question}</p>
                        <div className="text-gray-400 mt-1">
                            {openIndex === index ? <FaMinus /> : <FaPlus />}
                        </div>
                    </div>

                    {openIndex === index && item.answer && (
                        <p className="text-sm text-gray-700 mt-2">A) {item.answer}</p>
                    )}
                </div>
            ))}
        </div>
    );
}
