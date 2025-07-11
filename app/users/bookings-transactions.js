'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const statusColors = {
    CONFIRMED: 'bg-blue-100 text-blue-800',
    PENDING: 'bg-orange-100 text-orange-800',
    COMPLETED: 'bg-green-100 text-green-800',
    CANCELLED: 'bg-red-100 text-red-800',
};

const StatusBadge = ({ status }) => (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
    </span>
);

export default function BookingAndTransaction() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('http://localhost:5000/api/user/bookings', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setBookings(res.data.data || []);
            } catch (err) {
                console.error('Error fetching bookings:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    const lastFiveBookings = bookings.slice(-5).reverse();
    const confirmedTransactions = bookings.filter(b => b.status === 'CONFIRMED');

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-6 py-4 mx-[5%]">
            {/* Last 5 Bookings */}
            <div className="md:col-span-2 bg-white rounded-lg shadow border border-gray-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 px-4 py-2">
                    <h3 className="text-lg font-semibold">Last 5 Bookings</h3>
                    <select className='border-2 rounded-md p-1 border-gray-300 mt-2 sm:mt-0'>
                        <option>Last 30 Days</option>
                        <option>Last 7 Days</option>
                    </select>
                </div>
                <div className="overflow-x-auto">
                    <div className="min-w-[800px]">
                        {/* Table Header */}
                        <div className="grid grid-cols-6 gap-4 px-4 py-2 font-semibold text-sm bg-gray-100 text-gray-700 border-b border-gray-300">
                            <div>Vehicle</div>
                            <div>Rent Type</div>
                            <div>Start Time</div>
                            <div>Date</div>
                            <div>Price</div>
                            <div>Status</div>
                        </div>

                        {/* Table Body */}
                        {lastFiveBookings.map((b, i) => (
                            <div key={i} className="grid grid-cols-6 gap-4 items-center px-4 py-3 border-b border-gray-200 text-sm">
                                <div className="flex items-center gap-2">
                                    <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTgCszdRwbMb12RGXAZkmERhV3KHjYZAPi5M1Kk5LEv4dK5tPcEKBUTNIDdvWWEOlC2cGOqeyAcRXIH2ijdixc_jfZDzJBJ1WnlCbmWvmsyd4eNDntdctQOpA"
                                        alt={b.vehical?.model_name || 'Vehicle'}
                                        className="w-10 h-10 rounded object-cover" />
                                    <span className="font-medium">{b.vehical?.model_name || 'N/A'}</span>
                                </div>

                                <div>{b.rent_type || 'N/A'}</div>
                                <div>{b.time_slot || 'N/A'}</div>
                                <div>{new Date(b.date).toLocaleDateString()}</div>
                                <div className="text-red-600 font-semibold">₹{b.price || '0'}</div>
                                <div>
                                    <StatusBadge status={b.status} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-lg shadow border border-gray-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 mb-2 gap-2">
                    <h3 className="text-lg font-semibold">Recent Transactions</h3>
                    <select className='border-2 p-1 rounded border-gray-300'>
                        <option>Last 30 Days</option>
                        <option>Last 7 Days</option>
                    </select>
                </div>

                {confirmedTransactions.length === 0 ? (
                    <p className="text-center text-gray-500 p-4">No transactions found.</p>
                ) : (
                    confirmedTransactions.map((t, i) => (
                        <div key={i} className="flex flex-col sm:flex-row p-4 items-start gap-4 border-t border-gray-200">
                            <img src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTgCszdRwbMb12RGXAZkmERhV3KHjYZAPi5M1Kk5LEv4dK5tPcEKBUTNIDdvWWEOlC2cGOqeyAcRXIH2ijdixc_jfZDzJBJ1WnlCbmWvmsyd4eNDntdctQOpA'
                                alt={t.car}
                                className="w-12 h-12 rounded object-cover" />
                            <div className="flex-1">
                                <p className="font-semibold">{t.car}</p>
                                <p className="text-sm text-gray-500">Rent Type : {t.rentType || 'NA'}</p>
                                <div className="mt-1">
                                    <StatusBadge status={t.status} />
                                </div>
                                <p className="text-sm text-gray-500 mt-2">
                                    Price : <span className="text-gray-700">{t.price}</span>
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
