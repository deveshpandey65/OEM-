import React, { useState } from 'react';
import { FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const filters = [
    { label: "Brand", options: ["Toyota", "Honda", "Ford", "BMW", "Audi", "Mercedes-Benz", "Volkswagen", "Nissan", "Hyundai", "Kia"] },
    { label: "Price", options: ["<10000", "10000-20000", "20000-30000", ">30000"] },
    { label: "Year", options: ["2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "Older"] },
    { label: "Mileage", options: ["Under 10,000 miles", "10,000 - 20,000 miles", "20,000 - 30,000 miles", "30,000 - 40,000 miles", "Over 40,000 miles"] },
    { label: "Fuel Type", options: ["Gasoline", "Diesel", "Electric", "Hybrid"] },
    { label: "Car Category", options: ["Sedan", "SUV", "Truck", "Coupe", "Convertible", "Hatchback", "Minivan", "Wagon"] },
    { label: "Rental Type", options: ["Daily", "Weekly", "Monthly"] },
    { label: "Car Specifications", options: ["Transmission", "Seats", "Doors", "Color", "Engine Size"] },
    { label: "Availability", options: ["Available Now", "Coming Soon", "Not Available"] },
    { label: "Color", options: ["Red", "Blue", "Black", "White", "Silver", "Green", "Yellow", "Gray"] },
    { label: "Capacity", options: ["1-2 people", "3-4 people", "5-6 people", "7+ people"] },
    { label: "Transmission", options: ["Automatic", "Manual", "Semi-Automatic"] },
    { label: "Rating", options: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"] },
    { label: "Reviews", options: ["Less than 10 reviews", "10-50 reviews", "50-100 reviews", "More than 100 reviews"] },
];

export default function Filter({ selectedFilters, setSelectedFilters, originalCars, setFilterCars, setShow, carsShow }) {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (label) => {
        setOpenSections((prev) => ({
            ...prev,
            [label]: !prev[label]
        }));
    };

    const handleCheckboxChange = (filterLabel, option) => {
        setSelectedFilters(prev => {
            const prevOptions = prev[filterLabel] || [];
            const newOptions = prevOptions.includes(option)
                ? prevOptions.filter(o => o !== option)
                : [...prevOptions, option];
            return { ...prev, [filterLabel]: newOptions };
        });
    };

    const applyFilters = () => {
        let filtered = [...originalCars];

        if (selectedFilters.Brand?.length) {
            filtered = filtered.filter(car => selectedFilters.Brand.includes(car.brand));
        }

        if (selectedFilters.Transmission?.length) {
            filtered = filtered.filter(car => selectedFilters.Transmission.includes(car.type));
        }

        if (selectedFilters.Price?.length) {
            filtered = filtered.filter(car =>
                selectedFilters.Price.some(priceRange => {
                    const price = car.price;
                    if (priceRange === "<10000") return price < 10000;
                    if (priceRange === "10000-20000") return price >= 10000 && price <= 20000;
                    if (priceRange === "20000-30000") return price > 20000 && price <= 30000;
                    if (priceRange === ">30000") return price > 30000;
                    return false;
                })
            );
        }

        setFilterCars(filtered);
        carsShow(filtered.slice(0, 5));
        setShow(5);
    };

    const resetFilters = () => {
        setSelectedFilters({});
        setFilterCars(originalCars);
        carsShow(originalCars.slice(0, 5));
        setShow(5);
    };

    return (
        <aside className="bg-white h-fit p-4 rounded-xl shadow w-full lg:col-span-1">
            <h3 className="font-bold text-base mb-4">What Are You Looking For</h3>

            {filters.map((filter, idx) => (
                <div key={idx} className="mb-3 border-b pb-2">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSection(filter.label)}
                    >
                        <p className="font-semibold text-sm">{filter.label}</p>
                        {openSections[filter.label] ? (
                            <FaChevronUp className="text-xs" />
                        ) : (
                            <FaChevronDown className="text-xs" />
                        )}
                    </div>

                    {openSections[filter.label] && (
                        <div className="mt-2 space-y-1">
                            {filter.options.map((option, i) => (
                                <label key={i} className="flex items-center text-sm gap-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedFilters[filter.label]?.includes(option) || false}
                                        onChange={() => handleCheckboxChange(filter.label, option)}
                                        className="accent-teal-600"
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            <button
                className="bg-teal-700 text-white w-full mt-4 py-2 rounded text-sm font-medium flex items-center justify-center gap-1"
                onClick={applyFilters}
            >
                <FaSearch className="text-sm" /> Filter results
            </button>

            <button
                className="text-red-600 text-sm mt-2 underline w-full text-center"
                onClick={resetFilters}
            >
                Reset Filter
            </button>
        </aside>
    );
}
