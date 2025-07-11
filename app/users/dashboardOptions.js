import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCalendarCheck, FaWallet, FaMoneyBillWave, FaCar } from 'react-icons/fa';

export default function DashboardCards() {
    const [bookings, setBookings] = useState([]);
    const [wishlistCars, setWishlistCars] = useState([]);
    const [loading, setLoading] = useState(true);

    const [payments, setPayments] = useState([]);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const token = localStorage.getItem('token');

                const response = await axios.get(`http://localhost:5000/api/payment/user`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const formatted = response.data.payments.map((p, i) => ({
                    id: p._id.slice(-6),
                    car: p.vehicleId?.model_name || 'Unknown Vehicle',
                    subtext: p.paidThrough,
                    date: new Date(p.paidOn).toLocaleString(),
                    total: p.paidAmount,
                    img: '/car-placeholder.jpg', // Replace with actual image if available
                    mode: p.paidThrough,
                    status: p.status,
                }));
                console.log(formatted)
                setPayments(formatted);
            } catch (error) {
                console.error('Error fetching payments:', error);
            }
        };

        fetchPayments();
    }, []);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('http://localhost:5000/api/user/bookings', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setBookings(res.data.data);
            } catch (err) {
                console.error('Error fetching bookings:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);
    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/wishlist', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setWishlistCars(res.data);
            } catch (err) {
                console.error('Error fetching wishlist:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchWishlist();
    }, []);

    const cards = [
        {
            title: 'My Bookings',
            value: loading ? 'Loading...' : bookings.length,
            icon: <FaCalendarCheck />,
            iconColor: 'bg-teal-700',
            linkText: 'View all Bookings',
            linkUrl: '/users/my-bookings',
        },
        {
            title: 'Total Transactions',
            value: loading ? 'Loading...' : payments.reduce((acc, curr) => acc + curr.total, 0),            icon: <FaMoneyBillWave />,
            iconColor: 'bg-green-500',
            linkText: 'View all Transactions',
            linkUrl: '/users/payments',
        },
        {
            title: 'Wishlist Cars',
            value: loading ? 'Loading...' : wishlistCars.length,
            icon: <FaCar />,
            iconColor: 'bg-red-500',
            linkText: 'Go to Wishlist',
            linkUrl: '/users/wishlist',
        },
    ];

    return (
        <div className="p-6 mx-[5%] overflow-hidden flex flex-col justify-center items-center ">
            <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
            <div className="flex flex-wrap justify-center items-center w-full wrap:my-4">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="bg-white w-80 m-4 rounded-md shadow-sm p-6 border border-gray-300 hover:shadow-md transition-shadow wrap-break-word"
                    >
                        <div className="flex justify-between mx-4 items-start">
                            <div>
                                <p className="text-gray-600 font-semibold">{card.title}</p>
                                <h3 className="text-2xl font-bold">{card.value}</h3>
                            </div>
                            <div className={`w-12 h-12 mx-4 text-white flex items-center justify-center rounded-full ${card.iconColor}`}>
                                <span className="text-xl">{card.icon}</span>
                            </div>
                        </div>
                        <hr className="my-4" />
                        <a href={card.linkUrl} className="text-teal-700 font-medium hover:underline flex items-center gap-1">
                            {card.linkText} →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
