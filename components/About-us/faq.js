'use client';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
    "What is about rental car deals?",
    "In which areas do you operate?",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium?",
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia?",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?",
    "eque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit?",
    "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod?",
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
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col gap-4">
                {faqs.map((question, index) => (
                    <div key={index} className="bg-white rounded shadow-sm">
                        <button
                            onClick={() => toggle(index)}
                            className="w-full px-6 py-4 text-left flex justify-between items-center font-semibold text-gray-800 hover:bg-gray-50 transition"
                        >
                            {question}
                            <FaChevronDown
                                className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>
                        {openIndex === index && (
                            <div className="px-6 pb-4 text-gray-600">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula libero at
                                    metus facilisis, sed fermentum nulla pharetra.
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
