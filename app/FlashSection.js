'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import FlashDealSection from './FlashDeal'

const flashDealsData = {
    past: [
        { id:4,title: 'Yamaha R15', image: '/assets/img/bike.png', discount: '30% Off', price: '1,400', discountPrice: '1000', bikesLeft: 0, time: 0 },
        { id: 4,title: 'Royal Enfield Classic', image: '/assets/img/bike.png', discount: '25% Off', price: '2,200', discountPrice: '1800', bikesLeft: 0, time: 0 },
    ],
    current: [
        { id: 1,title: 'Honda Activa', image: '/assets/img/bike.png', discount: '40% Off', price: '900', discountPrice: '700', bikesLeft: 10, time: 1800 },
        { id: 2, title: 'TVS Apache', image: '/assets/img/bike.png', discount: '20% Off', price: '1,150', discountPrice: '1000', bikesLeft: 6, time: 3600 },
    ],
    upcoming: [
        { id: 4, title: 'Suzuki Gixxer', image: '/assets/img/bike.png', discount: '35% Off', price: '1,800', discountPrice: '1400', bikesLeft: 12, time: 5400 },
        { id: 4, title: 'KTM Duke 200', image: '/assets/img/bike.png', discount: '28% Off', price: '2,500', discountPrice: '2000', bikesLeft: 8, time: 7200 },
    ],
};

const FlashSaleSection = () => {
    const router = useRouter();
    const [timers, setTimers] = useState(() => {
        const initial = {};
        Object.entries(flashDealsData).forEach(([section, deals]) => {
            deals.forEach((deal, index) => {
                initial[`${section}-${index}`] = deal.time;
            });
        });
        return initial;
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setTimers((prev) => {
                const updated = {};
                Object.entries(prev).forEach(([key, time]) => {
                    updated[key] = time > 0 ? time - 1 : 0;
                });
                return updated;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleBuyNowClick = (deal) => {
        // Optional: Navigate to bike details or show modal
        console.log('Clicked deal:', deal.title);
        router.push(`/listing/${deal.id}`);
        // Example: router.push(`/bike/${deal.title}`);
    };
    const handleNotifyMeClick = (deal) => {
        // Optional: Navigate to bike details or show modal
        console.log('Clicked Notify:', deal.title);

        // Example: router.push(`/bike/${deal.title}`);
    };

    return (
        <section className="py-16 bg-gray-50 px-4 md:px-8">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">
                    Flash <span className="underline decoration-[#0a5ebe]">Sale</span>
                </h2>
                <p className="text-gray-500 mt-2">Don’t miss out on these limited-time deals!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FlashDealSection
                    title="⌛ Past Deals"
                    deals={flashDealsData.past}
                    category="past"
                    timers={timers}
                />
                <FlashDealSection
                    title="🔥 Current Deals"
                    deals={flashDealsData.current}
                    category="current"
                    timers={timers}
                    onDealClick={handleBuyNowClick}
                />
                <FlashDealSection
                    title="🕒 Upcoming Deals"
                    deals={flashDealsData.upcoming}
                    category="upcoming"
                    timers={timers}
                    onDealClick={handleNotifyMeClick}
                />
            </div>

            <div className="text-center mt-10">
                <button
                    onClick={() => router.push('/flashsale')}
                    className="bg-black text-white px-6 py-2 rounded-md hover:bg-[#0a5ebe] transition-all"
                >
                    View All Deals
                </button>
            </div>
        </section>
    );
};

export default FlashSaleSection;
