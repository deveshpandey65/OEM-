'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: 'How old do I need to be to rent a car?',
        answer: 'You must be at least 21 years old. Some locations may require a minimum age of 25.',
    },
    {
        question: 'What documents do I need to rent a car?',
        answer: 'You’ll need a valid driver’s license, government-issued ID, and a credit/debit card.',
    },
    {
        question: 'What types of vehicles are available for rent?',
        answer: 'We offer a wide range including sedans, SUVs, convertibles, and luxury cars.',
    },
    {
        question: 'Can I rent a car with a debit card?',
        answer: 'Yes, most locations accept debit cards, but a refundable security deposit may be required.',
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">FAQ's</h2>
            <div className="w-16 h-1 bg-[#ffa633] rounded-full mb-6" />

            {faqs.map((faq, index) => (
                <div key={index} className="mb-3 border border-gray-200 rounded-md overflow-hidden">
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full px-4 py-4 flex justify-between items-center text-left text-lg font-medium text-gray-800 hover:bg-gray-100 transition"
                    >
                        {faq.question}
                        {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>

                    {openIndex === index && (
                        <div className="px-4 pb-4 text-gray-600">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
