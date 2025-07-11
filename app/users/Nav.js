'use client';
import { useEffect, useState } from 'react';
import {
    FaTh, FaCalendarCheck, FaStar, FaHeart,
    FaComments, FaWallet, FaMoneyBill, FaCog
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const navItems = [
    { name: 'Dashboard', icon: <FaTh />, url: '/users' },
    { name: 'My Bookings', icon: <FaCalendarCheck />, url: '/users/my-bookings' },
    { name: 'Reviews', icon: <FaStar />, url: '/users/reviews' },
    { name: 'Wishlist', icon: <FaHeart />, url: '/users/wishlist' },
    { name: 'Payments', icon: <FaMoneyBill />, url: '/users/payments' },
    { name: 'Settings', icon: <FaCog />, url: '/users/settings' },
];

export default function DashboardNav({name}) {
    const [active, setActive] = useState('');
    const router = useRouter();
    useEffect(
        () =>{
            setActive(name)
        }
    )

    const handleClick = (item) => {
        setActive(item.name);
        router.push(item.url);
    };

    return (
        <div className="flex items-center justify-center gap-4 p-4 bg-white border-b flex-wrap">
            {navItems.map((item) => (
                <button
                    key={item.name}
                    onClick={() => handleClick(item)}
                    className={`flex flex-col items-center px-4 py-3 rounded-md w-[110px] transition-colors duration-200 ${active === item.name
                            ? 'bg-yellow-400 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                >
                    <div className="text-xl">{item.icon}</div>
                    <span className="mt-1 text-xs font-semibold">{item.name}</span>
                </button>
            ))}
        </div>
    );
}
