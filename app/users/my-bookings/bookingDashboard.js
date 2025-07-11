'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const statusColors = {
    CONFIRMED: 'bg-blue-100 text-blue-800',
    PENDING: 'bg-orange-100 text-orange-800',
    COMPLETED: 'bg-green-100 text-green-800',
    CANCELLED: 'bg-red-100 text-red-800',
};

export default function BookingDashboard() {
    const [filter, setFilter] = useState('All');
    const [dateFilter, setDateFilter] = useState('This Week');
    const [sortOrder, setSortOrder] = useState('Latest');
    const [openActionId, setOpenActionId] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

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

    const filteredBookings = bookings
        .filter((b) => (filter === 'All' ? true : b.status === filter))
        .sort((a, b) => {
            const aDate = new Date(a.date);
            const bDate = new Date(b.date);
            return sortOrder === 'Latest' ? bDate - aDate : aDate - bDate;
        });

    return (
        <div className="p-4 md:p-6 max-w-[95%] mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h1 className="text-2xl font-bold">
                    All Bookings <span className="text-sm text-gray-500">({filteredBookings.length})</span>
                </h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    + Add Booking
                </button>
            </div>

            {/* Filters */}
            <div className="flex flex-col lg:flex-row lg:items-center flex-wrap gap-2 mb-4">
                <div className="flex flex-wrap gap-2">
                    {['All', 'CONFIRMED', 'PENDING', 'COMPLETED', 'CANCELLED'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setFilter(tab)}
                            className={`px-4 py-2 rounded ${filter === tab ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="flex gap-2 mt-2 lg:mt-0 lg:ml-auto">
                    <select
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                        className="px-3 py-2 border rounded text-gray-600"
                    >
                        <option>This Week</option>
                        <option>This Month</option>
                    </select>

                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="px-3 py-2 border rounded text-gray-600"
                    >
                        <option value="Latest">Sort by Latest</option>
                        <option value="Oldest">Sort by Oldest</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-auto bg-white shadow-md rounded-lg">
                <table className="min-w-[900px] w-full text-sm text-left">
                    <thead className="bg-gray-100 text-gray-700 uppercase">
                        <tr>
                            <th className="px-4 py-2">Booking ID</th>
                            <th className="px-4 py-2">Vehicle</th>
                            <th className="px-4 py-2">Battery</th>
                            <th className="px-4 py-2">Range (km)</th>
                            <th className="px-4 py-2">Time Slot</th>
                            <th className="px-4 py-2">Booked On</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBookings.map((b) => (
                            <tr key={b._id} className="border-b hover:bg-gray-50 transition-all duration-200">
                                <td className="px-4 py-3">{b._id.slice(-6).toUpperCase()}</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3 min-w-[200px]">
                                        <img
                                            src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTgCszdRwbMb12RGXAZkmERhV3KHjYZAPi5M1Kk5LEv4dK5tPcEKBUTNIDdvWWEOlC2cGOqeyAcRXIH2ijdixc_jfZDzJBJ1WnlCbmWvmsyd4eNDntdctQOpA"
                                            alt="Vehicle"
                                            className="w-12 h-12 object-cover rounded-xl"
                                        />
                                        <span>{b.vehical?.model_name || 'N/A'}</span>
                                    </div>
                                </td>
                                <td className="px-4 py-3">{b.vehical?.battery_capacity || 'N/A'}</td>
                                <td className="px-4 py-3">{b.vehical?.range_km || 'N/A'}</td>
                                <td className="px-4 py-3">{b.time_slot}</td>
                                <td className="px-4 py-3">{new Date(b.date).toLocaleString()}</td>
                                <td className="px-4 py-3 font-semibold text-red-600">₹{b.price.toLocaleString()}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[b.status] || 'bg-gray-100 text-gray-800'}`}>
                                        {b.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 relative w-12">
                                    <button
                                        onClick={() => setOpenActionId(openActionId === b._id ? null : b._id)}
                                        className="text-gray-600 hover:text-black"
                                    >
                                        <BsThreeDotsVertical />
                                    </button>
                                    {openActionId === b._id && (
                                        <div className="absolute right-0 top-10 bg-white border rounded shadow w-28 z-10">
                                            <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">View</button>
                                            <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">Edit</button>
                                            <button className="block w-full px-4 py-2 text-left hover:bg-red-100 text-red-600">Delete</button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                        {!loading && filteredBookings.length === 0 && (
                            <tr>
                                <td colSpan="9" className="text-center py-4 text-gray-500">
                                    No bookings found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}



















// // BookingDashboard.jsx

// 'use client';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { BsThreeDotsVertical } from 'react-icons/bs';


// const bookingData = [
//     {
//         id: "#1001",
//         name: "Ferrari 458 MM Speciale",
//         type: "Hourly",
//         pickup: "45, Avenue, Mark Street, USA",
//         dropoff: "21, Avenue, Windham, USA",
//         bookedOn: "15 Sep 2023, 09:00 AM",
//         total: "$300",
//         img:'https://dreamsrent.dreamstechnologies.com/html/template/assets/img/cars/car-04.jpg',
//         status: "Upcoming",
//     },
//     {
//         id: "#1002",
//         name: "Toyota Camry SE 350",
//         type: "Day",
//         pickup: "1646 West St, Grand Rapids",
//         dropoff: "26 Platinum Drive, Canonburg",
//         bookedOn: "18 Sep 2023, 08:10 PM",
//         total: "$500",
//         img: 'https://dreamsrent.dreamstechnologies.com/html/template/assets/img/cars/car-04.jpg',
//         status: "Inprogress",
//     },
//     {
//         id: "#1003",
//         name: "Kia Soul 2016",
//         type: "Weekly",
//         pickup: "14 Stratford Park, Pittsburg",
//         dropoff: "11 Pleasant Hill, Pittsburg",
//         bookedOn: "21 Sep 2023, 04:15 PM",
//         total: "$600",
//         img: 'https://dreamsrent.dreamstechnologies.com/html/template/assets/img/cars/car-04.jpg',
//         status: "Cancelled",
//     },
//     {
//         id: "#1004",
//         name: "Audi A3 2019 new",
//         type: "Monthly",
//         pickup: "63 White Pine Lane, Martinsville",
//         dropoff: "14 Roane Avenue, Herndon",
//         bookedOn: "04 Oct 2023, 08:00 AM",
//         total: "$1500",
//         img: 'https://dreamsrent.dreamstechnologies.com/html/template/assets/img/cars/car-04.jpg',
//         status: "Inprogress",
//     },
//     {
//         id: "#1005",
//         name: "Chevrolet Camaro",
//         type: "Day",
//         pickup: "24 Better Street, Kansas City",
//         dropoff: "77 Geraldine Lane, Newyork",
//         bookedOn: "16 Oct 2023, 12:30 PM",
//         total: "$450",
//         img: 'https://dreamsrent.dreamstechnologies.com/html/template/assets/img/cars/car-04.jpg',
//         status: "Cancelled",
//     },
//     {
//         id: "#1006",
//         name: "Acura Sport Version",
//         type: "Hourly",
//         pickup: "78 Cityview Drive, Glenolden",
//         dropoff: "66 Ottis Street, Shawnee",
//         bookedOn: "24 Oct 2023, 05:40 PM",
//         total: "$250",
//         img: 'https://dreamsrent.dreamstechnologies.com/html/template/assets/img/cars/car-04.jpg',
//         status: "Completed",
//     },
// ];

// const statusColors = {
//     Upcoming: 'bg-blue-100 text-blue-800',
//     Inprogress: 'bg-orange-100 text-orange-800',
//     Completed: 'bg-green-100 text-green-800',
//     Cancelled: 'bg-red-100 text-red-800',
// };

// export default function BookingDashboard() {
//     const [filter, setFilter] = useState('All');
//     const [dateFilter, setDateFilter] = useState('This Week');
//     const [sortOrder, setSortOrder] = useState('Latest');
//     const [openActionId, setOpenActionId] = useState(null);

//     const [bookings, setBookings] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchBookings = async () => {
//             try {
//                 const token = localStorage.getItem('token'); 
//                 const res = await axios.get('http://localhost:5000/api/user/bookings', {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });
//                 setBookings(res.data.data);
//                 console.log( res.data.data);
//             } catch (err) {
//                 console.error('Error fetching bookings:', err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBookings();
//     }, []);

//     const filteredBookings = bookingData
//         .filter((b) => (filter === 'All' ? true : b.status === filter))
//         .sort((a, b) => {
//             const aDate = new Date(a.bookedOn);
//             const bDate = new Date(b.bookedOn);
//             return sortOrder === 'Latest' ? bDate - aDate : aDate - bDate;
//         });

//     return (
//         <div className="p-4 md:p-6 max-w-[95%] mx-auto">
//             {/* Header */}
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
//                 <h1 className="text-2xl font-bold">
//                     All Bookings <span className="text-sm text-gray-500">({filteredBookings.length})</span>
//                 </h1>
//                 <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//                     + Add Booking
//                 </button>
//             </div>

//             {/* Tabs & Filters */}
//             <div className="flex flex-col lg:flex-row lg:items-center flex-wrap gap-2 mb-4">
//                 {/* Status Tabs */}
//                 <div className="flex flex-wrap gap-2">
//                     {['All', 'Upcoming', 'Inprogress', 'Completed', 'Cancelled'].map((tab) => (
//                         <button
//                             key={tab}
//                             onClick={() => setFilter(tab)}
//                             className={`px-4 py-2 rounded ${filter === tab ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
//                         >
//                             {tab}
//                         </button>
//                     ))}
//                 </div>

//                 <div className="flex gap-2 mt-2 lg:mt-0 lg:ml-auto">
//                     {/* Date Filter */}
//                     <select
//                         value={dateFilter}
//                         onChange={(e) => setDateFilter(e.target.value)}
//                         className="px-3 py-2 border rounded text-gray-600"
//                     >
//                         <option>This Week</option>
//                         <option>This Month</option>
//                     </select>

//                     {/* Sort Order */}
//                     <select
//                         value={sortOrder}
//                         onChange={(e) => setSortOrder(e.target.value)}
//                         className="px-3 py-2 border rounded text-gray-600"
//                     >
//                         <option value="Latest">Sort by Latest</option>
//                         <option value="Oldest">Sort by Oldest</option>
//                     </select>
//                 </div>
//             </div>

//             {/* Responsive Table */}
//             <div className="overflow-auto bg-white shadow-md rounded-lg">
//                 <table className="min-w-[900px] w-full text-sm text-left">
//                     <thead className="bg-gray-100 text-gray-700 uppercase">
//                         <tr>
//                             <th className="px-4 py-2">Booking ID</th>
//                             <th className="px-4 py-2">Car Name</th>
//                             <th className="px-4 py-2">Rental Type</th>
//                             <th className="px-4 py-2">Pickup</th>
//                             <th className="px-4 py-2">Dropoff</th>
//                             <th className="px-4 py-2">Booked On</th>
//                             <th className="px-4 py-2">Total</th>
//                             <th className="px-4 py-2">Status</th>
//                             <th className="px-4 py-2">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredBookings.map((b) => (
//                             <tr key={b.id} className="border-b hover:bg-gray-50 transition-all duration-200">
//                                 <td className="px-4 py-3">{b.id}</td>
//                                 <td className="px-4 py-3">
//                                     <div className="flex items-center gap-3 min-w-[200px]">
//                                         <img src={b.img} className="w-12 h-12 object-cover rounded-xl" alt="Car" />
//                                         <span>{b.name}</span>
//                                     </div>
//                                 </td>
//                                 <td className="px-4 py-3">{b.type}</td>
//                                 <td className="px-4 py-3">{b.pickup}</td>
//                                 <td className="px-4 py-3">{b.dropoff}</td>
//                                 <td className="px-4 py-3">{b.bookedOn}</td>
//                                 <td className="px-4 py-3 font-semibold text-red-600">{b.total}</td>
//                                 <td className="px-4 py-3">
//                                     <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[b.status]}`}>
//                                         {b.status}
//                                     </span>
//                                 </td>
//                                 <td className="px-4 py-3 relative w-12">
//                                     <button
//                                         onClick={() => setOpenActionId(openActionId === b.id ? null : b.id)}
//                                         className="text-gray-600 hover:text-black"
//                                     >
//                                         <BsThreeDotsVertical />
//                                     </button>
//                                     {openActionId === b.id && (
//                                         <div className="absolute right-0 top-10 bg-white border rounded shadow w-28 z-10">
//                                             <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">View</button>
//                                             <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">Edit</button>
//                                             <button className="block w-full px-4 py-2 text-left hover:bg-red-100 text-red-600">Delete</button>
//                                         </div>
//                                     )}
//                                 </td>
//                             </tr>
//                         ))}
//                         {filteredBookings.length === 0 && (
//                             <tr>
//                                 <td colSpan="9" className="text-center py-4 text-gray-500">
//                                     No bookings found.
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
//   }