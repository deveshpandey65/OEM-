// components/HondaQASection.jsx
"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const qnaData = [
    {
        id: 1,
        question: "Are there different riding modes available in Honda X-ADV?",
        answer: "The Honda CB750 Hornet comes equipped with dual-channel ABS, which prevents...",
        askedBy: "Shrikant Sahu",
        askedOn: "27 Jun 2025",
        answered: true,
    },
    {
        id: 2,
        question: "What type of engine does the Honda Rebel 500 use?",
        answer:
            "The Honda Rebel 500 is powered by a 4-stroke, 8-valve, parallel twin, DOHC engine...",
        askedBy: "Shrikant Sahu",
        askedOn: "27 Jun 2025",
        answered: true,
    },
    {
        id: 3,
        question: "How many riding modes does Honda CB1000 Hornet SP have?",
        answer:
            "The Honda CB1000 Hornet SP comes with five riding modes – Standard, Sport...",
        askedBy: "Shrikant Sahu",
        askedOn: "24 Jun 2025",
        answered: true,
    },
    {
        id: 4,
        question: "What are the key safety features of Honda CB750 Hornet?",
        answer:
            "The Honda CB750 Hornet comes equipped with dual-channel ABS, which prevents...",
        askedBy: "Shrikant Sahu",
        askedOn: "24 Jun 2025",
        answered: true,
    },
    {
        id: 5,
        question: "What type of display does Honda X-ADV have?",
        answer: "The Honda CB750 Hornet comes equipped with dual-channel ABS, which prevents...",
        askedBy: "Shrikant Sahu",
        askedOn: "23 Jun 2025",
        answered: true,
    },
];

export default function QASection({brand}) {
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="w-full mb-4 max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Q&amp;A on Honda</h2>

            {qnaData.map((item) => (
                <div
                    key={item.id}
                    className="border-b py-4"
                >
                    <div
                        className="flex justify-between items-start cursor-pointer"
                        onClick={() => toggle(item.id)}
                    >
                        <div>
                            <p className="text-sm text-gray-600">{item.askedBy} asked on {item.askedOn}</p>
                            <p className="font-medium mt-1">Q) {item.question}</p>
                        </div>
                        <div className="text-gray-400 mt-1">
                            {openId === item.id ? <FaMinus /> : <FaPlus />}
                        </div>
                    </div>

                    {openId === item.id && item.answered && (
                        <div className="mt-3 ml-6">
                            <p className="text-sm text-gray-500 mb-1">By Bikedekho experts on {item.askedOn}</p>
                            <p className="text-sm text-gray-700 mb-2">
                                A) {item.answer} <span className="text-blue-600 cursor-pointer">...Read More</span>
                            </p>
                            <div className="text-sm text-blue-600 flex gap-4">
                                <span className="cursor-pointer hover:underline">Reply on this answer</span>
                                <span className="cursor-pointer hover:underline">View all Answer</span>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
