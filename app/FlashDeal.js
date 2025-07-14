// components/FlashDealSection.js
'use client';
import React from 'react';

const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
};

const FlashDealSection = ({ title, deals, category, timers, onDealClick }) => {
    return (
        <div className="w-full">
            <h3 className="text-2xl font-bold mb-6 text-center border-b pb-2">{title}</h3>
            <div className="grid grid-cols-1 gap-6">
                {deals.map((deal, index) => {
                    const key = `${category}-${index}`;
                    const soldBikes = deal.totalBikes - deal.bikesLeft;

                    return (
                        <div
                            key={key}
                            onClick={() => onDealClick?.(deal)} // Optional click handler
                            className="bg-white rounded-xl hover:shadow-2xl shadow-md p-4 hover:border-1 border-gray-500 transition cursor-pointer"
                        >
                            <img
                                src={deal.image}
                                alt={deal.title}
                                className="w-full h-52 object-contain rounded mb-3"
                            />
                            <h2 className="text-xl font-semibold">{deal.title}</h2>

                            {category === 'upcoming' ? (
                                <>
                                    <p className=" text-green-400">Current Price: ₹{deal.price}</p>
                                    <p className="text-lg font-bold text-red-600">Sale Price: ₹{deal.discountPrice[0]}
                                        <span>XXXX</span>
                                    </p>

                                </>
                            ) : category === 'past' ? (
                                <>
                                     </>
                            ) : (
                                <>
                                    <p className="text-gray-500 line-through">₹{deal.price}</p>
                                    <p className="text-lg font-bold text-red-600">Now: ₹{deal.discountPrice}</p>
                                            <p className="text-sm text-gray-400">{deal.bikesLeft} bikes left</p>

                                </>
                            ) }

                            
                            {category === 'past' && (
                                <>
                                    <p className="text-sm text-green-600 mt-1">
                                        Sold: {deal.bikesSold} bikes 
                                    </p>
                                    <p className="text-sm text-green-600 mt-1">
                                        In: {deal.saleTime}
                                    </p>
                                </>
                            )}

                            <p className="text-sm text-red-600 mt-1">
                                {category === 'past'
                                    ? 'Sale Ended'
                                    : category === 'current'
                                        ? `Ends In: ${formatTime(timers[key])}`
                                        : `Starts In: ${formatTime(timers[key])}`}
                            </p>

                            <button
                                disabled={category === 'past'}
                                className={`mt-4 w-full py-2 rounded ${category === 'past'
                                    ? 'bg-gray-400 text-white cursor-not-allowed':
                                    category ==='upcoming'?'bg-green-500 text-white hover:bg-green-600':
                                     'bg-orange-500 text-white hover:bg-orange-600'
                                    }`}
                            >
                                {category === 'upcoming' ? 'Notify Me' : 'Book Now'}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FlashDealSection;
