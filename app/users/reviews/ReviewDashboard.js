'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';

export default function AllReviews() {
    const [reviews, setReviews] = useState([]);
    const [openActionId, setOpenActionId] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get(`http://localhost:5000/api/reviews/user`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log('Fetched reviews:', res.data);
                setReviews(res.data); // API response must be an array of reviews
            } catch (err) {
                console.error('Error fetching reviews:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    return (
        <div className="p-6 mx-[5%]">
            <h2 className="text-2xl font-bold mb-4">
                All Reviews <span className="text-sm text-gray-500">({reviews.length})</span>
            </h2>

            <div className="overflow-auto bg-white shadow-md rounded-lg">
                {loading ? (
                    <div className="text-center py-10 text-gray-500">Loading reviews...</div>
                ) : reviews.length === 0 ? (
                    <div className="text-center py-10 text-gray-500">No reviews found.</div>
                ) : (
                    <table className="min-w-[900px] w-full text-sm text-left">
                        <thead className="bg-gray-100 text-gray-700 uppercase">
                            <tr>
                                <th className="px-4 py-2"><input type="checkbox" /></th>
                                <th className="px-4 py-2">Car Name</th>
                                <th className="px-4 py-2">Review</th>
                                <th className="px-4 py-2">Ratings</th>
                                <th className="px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviews.map((r, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50 transition-all duration-200">
                                    <td className="px-4 py-3"><input type="checkbox" /></td>
                                    <td className="px-4 py-3 min-w-[200px]">
                                        <div className="font-medium">{r.model_name}</div>
                                    </td>
                                    <td className="px-4 py-3 max-w-sm">{r.comment}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-1 text-orange-500">
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <FaStar key={i} className={i < r.rating_stars ? 'fill-orange-500' : 'fill-gray-300'} />
                                            ))}
                                        </div>
                                    </td>

                                    <td className="px-4 py-3 relative">
                                        <button
                                            onClick={() => setOpenActionId(openActionId === index ? null : index)}
                                            className="text-gray-600 hover:text-black"
                                        >
                                            <BsThreeDotsVertical />
                                        </button>
                                        {openActionId === index && (
                                            <div className="absolute right-0 top-10 bg-white border rounded shadow w-28 z-10">
                                                <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">View</button>
                                                <button className="block w-full px-4 py-2 text-left hover:bg-red-100 text-red-600">Delete</button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                {/* Pagination (static) */}
                {!loading && reviews.length > 0 && (
                    <div className="flex justify-between items-center px-4 py-3 text-sm text-gray-600">
                        <span>Showing 1 to {reviews.length} of {reviews.length} entries</span>
                        <div className="flex items-center gap-2">
                            <button className="px-3 py-1 border rounded hover:bg-gray-100">Prev</button>
                            <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
                            <button className="px-3 py-1 border rounded hover:bg-gray-100">Next</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
