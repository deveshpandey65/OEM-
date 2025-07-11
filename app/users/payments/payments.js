'use client';
import React, { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import axios from 'axios';

const modeColors = {
    UPI: 'bg-blue-100 text-blue-600',
    Card: 'bg-purple-100 text-purple-600',
    NetBanking: 'bg-sky-200 text-sky-600',
    Wallet: 'bg-purple-100 text-purple-600',
    Cash: 'bg-blue-100 text-blue-600',
};

const statusColors = {
    success: 'bg-green-100 text-green-600',
    Pending: 'bg-yellow-100 text-yellow-600',
    Failed: 'bg-red-100 text-red-600',
};

export default function Payments() {
    const [payments, setPayments] = useState([]);
    const [openActionId, setOpenActionId] = useState(null);

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
                    total: `₹${p.paidAmount}`,
                    img: '/car-placeholder.jpg', // Replace with actual image if available
                    mode: p.paidThrough,
                    status: p.status,
                }));

                setPayments(formatted);
            } catch (error) {
                console.error('Error fetching payments:', error);
            }
        };

        fetchPayments();
    }, []);

    return (
        <div className="p-4 md:p-6 mx-[5%] space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="text-xl md:text-2xl font-bold">Payments</h2>
                <div className="flex gap-2 flex-wrap">
                    <select className="px-3 py-2 border rounded text-gray-600 text-sm">
                        <option>This Week</option>
                        <option>This Month</option>
                    </select>
                    <select className="px-3 py-2 border rounded text-gray-600 text-sm">
                        <option>Sort By Relevance</option>
                        <option>Sort By Amount</option>
                    </select>
                </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-x-auto">
                <h3 className="text-lg font-semibold px-4 pt-4 pb-2">
                    All Payments <span className="text-sm text-gray-500">({payments.length})</span>
                </h3>

                {/* Table */}
                <table className="w-full text-xs sm:text-sm text-left min-w-[800px]">
                    <thead className="bg-gray-100 text-gray-700 uppercase">
                        <tr>
                            <th className="px-4 py-2"><input type="checkbox" /></th>
                            <th className="px-4 py-2">Booking ID</th>
                            <th className="px-4 py-2">Car Name</th>
                            <th className="px-4 py-2">Paid on</th>
                            <th className="px-4 py-2">Total</th>
                            <th className="px-4 py-2">Mode</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {payments.map((item) => (
                            <tr key={item.id} className="border-b hover:bg-gray-50 transition-all">
                                <td className="px-4 py-3"><input type="checkbox" /></td>
                                <td className="px-4 py-3">{item.id.toUpperCase()}</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTgCszdRwbMb12RGXAZkmERhV3KHjYZAPi5M1Kk5LEv4dK5tPcEKBUTNIDdvWWEOlC2cGOqeyAcRXIH2ijdixc_jfZDzJBJ1WnlCbmWvmsyd4eNDntdctQOpA"
                                            alt={item.car}
                                            className="w-10 h-10 rounded object-cover" />
                                        <div>
                                            <div className="font-medium">{item.car}</div>
                                            <div className="text-xs text-gray-500">{item.subtext}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3">{item.date}</td>
                                <td className="px-4 py-3 font-semibold text-gray-700">{item.total}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-1 text-xs rounded-full font-medium whitespace-nowrap ${modeColors[item.mode]}`}>
                                        {item.mode}
                                    </span>
                                </td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-1 text-xs rounded-full font-medium whitespace-nowrap ${statusColors[item.status]}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 relative">
                                    <button onClick={() => setOpenActionId(openActionId === item.id ? null : item.id)}>
                                        <BsThreeDotsVertical />
                                    </button>
                                    {openActionId === item.id && (
                                        <div className="absolute right-0 mt-2 bg-white shadow border rounded w-28 z-10">
                                            <button className="w-full px-4 py-2 text-left hover:bg-gray-100">View</button>
                                            <button className="w-full px-4 py-2 text-left hover:bg-gray-100">Download</button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 text-sm text-gray-600 gap-2">
                    <span>Showing 1 to {payments.length} of {payments.length} entries</span>
                    <div className="flex items-center gap-1">
                        <button className="px-2 py-1 border rounded text-gray-600 hover:bg-gray-100">Prev</button>
                        <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
                        <button className="px-2 py-1 border rounded text-gray-600 hover:bg-gray-100">Next</button>
                    </div>
                </div>
            </div>
        </div>

    );
}
