import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

const flashDeals = [
    {
        title: 'Yamaha R15',
        image: '/assets/img/bike.png',
        discount: '30% Off',
        price: '$1,400',
        bikesLeft: 5,
    },
    {
        title: 'Royal Enfield Classic',
        image: '/assets/img/bike.png',
        discount: '25% Off',
        price: '$2,200',
        bikesLeft: 3,
    },
    {
        title: 'Honda Activa',
        image: '/assets/img/bike.png',
        discount: '40% Off',
        price: '$900',
        bikesLeft: 10,
    },
    {
        title: 'TVS Apache',
        image: '/assets/img/bike.png',
        discount: '20% Off',
        price: '$1,150',
        bikesLeft: 6,
    },
    {
        title: 'Yamaha R15',
        image: '/assets/img/bike.png',
        discount: '30% Off',
        price: '$1,400',
        bikesLeft: 5,
    },
    {
        title: 'Royal Enfield Classic',
        image: '/assets/img/bike.png',
        discount: '25% Off',
        price: '$2,200',
        bikesLeft: 3,
    },
    {
        title: 'Honda Activa',
        image: '/assets/img/bike.png',
        discount: '40% Off',
        price: '$900',
        bikesLeft: 10,
    },
    {
        title: 'TVS Apache',
        image: '/assets/img/bike.png',
        discount: '20% Off',
        price: '$1,150',
        bikesLeft: 6,
    },
];

const FlashSaleSection = () => {
    const [timeLeft, setTimeLeft] = useState(3600); // 1 hour
    const router = useRouter();
    const scrollRef = useRef(null);

    // Countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Auto scroll logic
    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const scrollAmount = 220; // One card width

        const scrollInterval = setInterval(() => {
            if (!container) return;

            if (container.scrollLeft + container.clientWidth >= container.scrollWidth - scrollAmount) {
                // Reset without animation to beginning
                container.scrollTo({ left: 0, behavior: 'auto' });
            } else {
                // Normal smooth scroll
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }, 2000);

        return () => clearInterval(scrollInterval);
    }, []);

    const formatTime = (seconds) => {
        const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const s = String(seconds % 60).padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">
                    Flash <span className="underline decoration-[#0a5ebe]">Sale</span>
                </h2>
                <p className="text-gray-500 mt-2">Grab the hottest deals before the time runs out!</p>
                <div className="mt-3 text-lg font-semibold text-red-600">
                    Ends in: {formatTime(timeLeft)}
                </div>
            </div>

            <div className="relative px-6">
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto no-scrollbar py-4 scroll-smooth"
                >
                    {[...flashDeals, ...flashDeals].map((deal, idx) => (
                        <div
                            key={idx}
                            className="min-w-[220px] bg-white rounded-2xl p-5 shadow hover:shadow-lg transition-all duration-300"
                        >
                            <img
                                src={deal.image}
                                alt={deal.title}
                                className="w-full h-32 object-contain mb-4"
                            />
                            <h3 className="text-xl font-bold">{deal.title}</h3>
                            <p className="text-orange-600 font-medium">{deal.discount}</p>
                            <p className="text-gray-700">{deal.price}</p>
                            <p className="text-sm text-gray-400">{deal.bikesLeft} bikes left</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-6">
                <button
                    className="bg-black text-white px-6 py-2 rounded-md hover:bg-[#0a5ebe] transition-all"
                    onClick={() => router.push('/flashsale')}
                >
                    View All Deals
                </button>
            </div>
        </section>
    );
};

export default FlashSaleSection;
