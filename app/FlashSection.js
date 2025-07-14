'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import FlashDealSection from './FlashDeal'

const flashDealsData = {
    past: [
        {
            id: 1,
            title: 'Ather 450X',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdAGSOVt11fY8nUlMw9ohgTf35uQ5jdDM4Lw&s',
            discount: '22% Off',
            bikesSold: 320,
            saleTime: '45min',
            bikesLeft: 0,
            time: 0
        },
        {
            id: 2,
            title: 'Ola S1 Pro',
            image: 'https://assets.otocapital.in/production/amethyst-ola-s1-pro-image.png',
            discount: '30% Off',
            bikesSold: 510,
            saleTime: '60min',
            bikesLeft: 0,
            time: 0
        }
    ],
    current: [
        {
            id: 3,
            title: 'TVS iQube',
            image: 'https://img-cdn.evfy.in/products/iqube-PrimaryImage.webp',
            discount: '18% Off',
            price: '1,25,000',
            discountPrice: '1,02,500',
            bikesLeft: 7,
            time: 2400
        },
        {
            id: 4,
            title: 'Vida V1 Pro',
            image: 'https://rukminim3.flixcart.com/image/850/1000/xif0q/electric-bike-scooter/c/q/x/-original-imagz8xnkeykwmpc.jpeg?q=90&crop=false',
            discount: '25% Off',
            price: '1,45,000',
            discountPrice: '1,08,750',
            bikesLeft: 5,
            time: 4200
        }
    ],
    upcoming: [
        {
            id: 5,
            title: 'Bajaj Chetak EV',
            image: 'https://cdn.bajajauto.com/-/media/chetakv2/content-image/image-series/3502_image.webp',
            discount: '20% Off',
            price: '1,30,000',
            discountPrice: '1,04,000',
            bikesLeft: 10,
            time: 6000
        },
        {
            id: 6,
            title: 'Ola S1 Air',
            image: 'https://imgd.aeplcdn.com/1280x720/n/bw/models/colors/ola-select-model-neon-1690531574765.jpg',
            discount: '28% Off',
            price: '1,10,000',
            discountPrice: '79,200',
            bikesLeft: 8,
            time: 7500
        }
    ]
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

            {/* <div className="text-center mt-10">
                <button
                    onClick={() => router.push('/flashsale')}
                    className="bg-black text-white px-6 py-2 rounded-md hover:bg-[#0a5ebe] transition-all"
                >
                    View All Deals
                </button>
            </div> */}
        </section>
    );
};

export default FlashSaleSection;
