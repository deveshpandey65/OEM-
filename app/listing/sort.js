import React from 'react';
import { FaListUl, FaMapMarkedAlt, FaThLarge } from 'react-icons/fa';

export default function Sort({ originalCars,show,setShow, setCarsShow }) {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [sortby, setSortby] = React.useState("Newest");

    const handleSortChange = (e) => {
        setSortby(e.target.value);
        setCurrentPage(1);
        let sortedCars = [...originalCars];

        if (e.target.value === "Newest") {
            sortedCars.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        } else if (e.target.value === "Price: Low to High") {
            sortedCars.sort((a, b) => a.price - b.price);
        } else if (e.target.value === "Price: High to Low") {
            sortedCars.sort((a, b) => b.price - a.price);
        }

        setCarsShow(sortedCars.slice(0, show));
    };

    const handleShowChange = (e) => {
        const val = parseInt(e.target.value);
        setShow(val);
        setCurrentPage(1);
        originalCars.length > val
            ? setCarsShow(originalCars.slice(0, val))
            : setCarsShow(originalCars);
    };

    return (
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center px-4 py-4 bg-white mt-4 rounded-xl shadow gap-4">
            <p className="text-sm font-medium">
                Showing {(currentPage - 1) * show + 1}-{Math.min(currentPage * show, originalCars.length)} of {originalCars.length} Cars
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 w-full sm:w-auto">
                <div className="flex items-center text-sm gap-2 w-full sm:w-auto">
                    <span>Show:</span>
                    <select
                        value={show}
                        onChange={handleShowChange}
                        className="border border-gray-300 rounded px-2 py-1 w-full sm:w-auto"
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                    </select>
                </div>

                <div className="flex items-center text-sm gap-2 w-full sm:w-auto">
                    <span>Sort By:</span>
                    <select
                        value={sortby}
                        onChange={handleSortChange}
                        className="border border-gray-300 rounded px-2 py-1 w-full sm:w-auto"
                    >
                        <option>Newest</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>
                </div>

                <div className="flex gap-2 mt-2 sm:mt-0">
                    <button className="bg-teal-800 text-white p-2 rounded"><FaThLarge /></button>
                    <button className="bg-gray-100 text-gray-800 p-2 rounded"><FaListUl /></button>
                </div>
            </div>
        </div>
    );
}