'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';

const dummyDeals = [
    {
        id: '1',
        name: 'Vida V1 Pro',
        originalPrice: 1200,
        salePrice: 899,
        image: '/assets/img/bike.png', // You can replace this with a real image URL or a local image
    },
    {
        id: '2',
        name: 'Ather 450X',
        originalPrice: 1400,
        salePrice: 999,
        image: '/assets/img/bike.png',
    },
    {
        id: '3',
        name: 'Ola S1 Air',
        originalPrice: 1000,
        salePrice: 749,
        image: '/assets/img/bike.png',
    },
    {
        id: '3',
        name: 'Ola S1 Air',
        originalPrice: 1000,
        salePrice: 749,
        image: '/assets/img/bike.png',
    },
    {
        id: '3',
        name: 'Ola S1 Air',
        originalPrice: 1000,
        salePrice: 749,
        image: '/assets/img/bike.png',
    },
    {
        id: '3',
        name: 'Ola S1 Air',
        originalPrice: 1000,
        salePrice: 749,
        image: '/assets/img/bike.png',
    },
];

export default function FlashSale() {
    const [deals, setDeals] = useState([]);

    useEffect(() => {
        // simulate API delay
        const loadDeals = () => {
            setTimeout(() => {
                setDeals(dummyDeals);
            }, 500);
        };
        loadDeals();
    }, []);

    return (
        <main className="flex flex-col">
            <Navbar />
            <section className="w-full mt-20 px-6 py-10 bg-orange-50 min-h-screen">
                <h1 className="text-4xl font-bold text-center mb-10 text-orange-600">⚡ Flash Sale</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {deals.length > 0 ? (
                        deals.map((bike) => (
                            <div
                                key={bike.id}
                                className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
                            >
                                <img
                                    src={bike.image}
                                    alt={bike.name}
                                    className="w-full h-52 object-contain rounded"
                                />
                                <h2 className="text-xl font-semibold mt-3">{bike.name}</h2>
                                <p className="text-gray-500 line-through">₹{bike.originalPrice}</p>
                                <p className="text-lg font-bold text-red-600">Now: ₹{bike.salePrice}</p>
                                <button className="mt-4 w-full py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                                    Book Now
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-center col-span-3">No flash sales at the moment.</p>
                    )}
                </div>
            </section>
            <Footer />
        </main>
    );
}
