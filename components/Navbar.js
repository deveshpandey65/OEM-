'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Plus, User, Menu, X } from 'lucide-react';
import clsx from 'clsx'; 
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const router = useRouter();


    const navItems = [
        {
            name: 'Home',
            href: '/',
            isPreview: true, // <-- Mark this
            dropdown: [
                { name: 'Car Rental', badge: 'New', image: 'https://dreamsrent.dreamstechnologies.com/html/template/assets/img/menu/home-01.svg', href: '/home1' },
                { name: 'Car Rental 1', badge: 'Hot', image: 'https://dreamsrent.dreamstechnologies.com/html/template/assets/img/menu/home-02.svg', href: '/home2' },
                { name: 'Bike Rental', badge: 'New', image: 'https://dreamsrent.dreamstechnologies.com/html/template/assets/img/menu/home-03.svg', href: '/home3' },
                { name: 'Yacht Rental', badge: 'New', image: 'https://dreamsrent.dreamstechnologies.com/html/template/assets/img/menu/home-04.svg', href: '/home4' },
            ],
        },
        {
            name: 'Listings',
            href: '/listing',
            dropdown: [
                { name: 'List View', href: '/listing' },
                { name: 'Map View', href: '/map-view' },
            ],
        },
        {
            name: 'Pages',
            href: '#',
            dropdown: [
                { name: 'About Us', href: '/about-us' },
                { name: 'FAQ', href: '/faq' },
            ],
        },
        {
            name: 'Blog',
            href: '#',
            dropdown: [
                { name: 'Latest Posts', href: '/blog' },
                { name: 'Single Post', href: '/blog/post' },
            ],
        },
        {
            name: 'Dashboard',
            href: '#',
            dropdown: [
                { name: 'My Listings', href: '/dashboard/listings' },
                { name: 'Bookings', href: '/dashboard/bookings' },
            ],
        },
    ];

    return (
        <nav className="bg-white fixed top-0 w-full z-50"
        >
            {/* Navbar Container */}
            <div className="p-4 flex justify-between items-center h-[69px]"
                onMouseLeave={() => setDropdownOpen(null)}
                >

                {/* Left: Hamburger + Logo */}
                <div className="flex items-center space-x-4">
                    {/* Hamburger for md and below */}
                    <button onClick={() => setIsOpen(!isOpen)} className="text-[#ffa633] md:block lg:hidden">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Logo */}
                    <Link href="/">
                        <img
                            src="https://dreamsrent.dreamstechnologies.com/html/template/assets/img/logo.svg"
                            alt="Logo"
                            className="h-10"
                        />
                    </Link>
                </div>

                {/* Center: Desktop Nav Links (visible only on lg+) */}
                <div className="hidden lg:flex items-center space-x-8"
                
                >
                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative group "
                            onMouseEnter={() => setDropdownOpen(index)}
                            // onMouseLeave={() => setDropdownOpen(null)}
                            onClick={() => setDropdownOpen(dropdownOpen === index ? null : index)}

                        >
                            <button className="text-md font-semibold  flex items-center gap-1 hover:text-[#ffa633]">
                                {item.name}
                                <ChevronDown size={18} />
                            </button>

                            {dropdownOpen === index && (
                                item.isPreview ? (
                                    <div className="fixed left-2 top-[60px] z-50 w-[98%] bg-white shadow-xl p-4 border-t-2 border-[#ffa633] grid grid-cols-4 gap-4 rounded-md">
                                        {item.dropdown.map((subItem, subIdx) => (
                                            <Link key={subIdx} href={subItem.href} className="block group transition-transform duration-300 hover:-translate-y-1">
                                                <div className="w-full h-[330px] overflow-hidden ">
                                                    <img src={subItem.image} alt={subItem.name} className="w-fit h-fit object-cover" />
                                                </div>
                                                <div className="mt-2 flex items-center justify-center gap-2 hover:text-[#ffa633]">

                                                    <span className="text-sm font-semibold">{subItem.name}</span>
                                                    {subItem.badge && (
                                                        <span className={clsx(
                                                            "text-xs font-bold px-2 py-0.5 rounded",
                                                            subItem.badge === "New" ? "bg-green-500 text-white" :
                                                                subItem.badge === "Hot" ? "bg-red-500 text-white" : ""
                                                        )}>
                                                            {subItem.badge}
                                                        </span>
                                                    )}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="absolute top-[35px] left-0 bg-white shadow-sm rounded-sm py-2 w-40 z-50 border-t-2 border-[#ffa633]">
                                        {item.dropdown.map((subItem, subIdx) => (
                                            <Link
                                                href={subItem.href}
                                                key={subIdx}
                                                className="block px-4 py-2 text-sm hover:text-[#ffa633] transition-all duration-300 hover:translate-x-2"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )
                            )}

                        </div>
                    ))}
                </div>

                {/* Right: Icons always visible on md+, hidden on sm */}
                <div className="hidden md:flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[rgb(255, 0, 0)] bg-black text-white rounded-full flex items-center justify-center"
                        onClick={() => router.push('/signin')}>
                        <User size={18} />
                    </div>
                    <Link
                        href="/add-listing"
                        className="bg-[#ffa633] hover:bg-white text-white border-[#ffa633] border-[1px] hover:text-black   font-semibold px-4 py-2 rounded-md flex items-center space-x-2 text-sm"
                    >
                        <Plus size={16} />
                        <span>Add Listing</span>
                    </Link>
                    
                </div>
            </div>

            {/* Overlay (click to close) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-rgb(255,0,0) bg-opacity-30 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Slide-In Drawer */}
            <div
                className={clsx(
                    "fixed top-0 left-0 h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out w-68 max-w-xs overflow-y-auto",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex items-center justify-between p-4 border-b">
                    <Link href="/">
                        <img
                            src="https://dreamsrent.dreamstechnologies.com/html/template/assets/img/logo.svg"
                            alt="Logo"
                            className="h-[26px] mx-auto min-mx-2  "
                        />
                    </Link>
                    <div className="flex justify-end p-2"
                        onClick={() => setIsOpen(false)}
                    >
                        <X size={24} className="text-gray-600 cursor-pointer" />
                    </div>
                </div>
                <div className="">
                    {navItems.map((item, index) => (
                        <div key={index} className=''>
                            <button
                                className="w-full bg-black text-white h-[44px] p-4 mb-[1px] hover:text-[#ffa633] flex justify-between items-center text-sm font-medium text-left py-2"
                                onClick={() => setDropdownOpen(dropdownOpen === index ? null : index)}
                            >
                                {item.name}
                                <ChevronDown size={16} />
                            </button>
                            {dropdownOpen === index && (
                                <div className="pl-4 bg-[#2e2c2adf]">

                                    {item.dropdown.map((subItem, subIdx) => (
                                        <Link
                                            href={subItem.href}
                                            key={subIdx}
                                            className="flex items-center h-[44px] text-white text-sm hover:text-[#ffa633] transform transition-all duration-300 hover:translate-x-2"

                                            onClick={() => setIsOpen(false)}
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Divider */}
                    <hr className="my-3 border-gray-200" />

                    {/* Profile and Add Listing (always shown in mobile view) */}
                    <div className="flex items-center justify-between">
                        <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                            <User size={18} />
                        </div>
                        <Link
                            href="/add-listing"
                            className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-4 py-2 rounded-md flex items-center space-x-2 text-sm"
                            onClick={() => setIsOpen(false)}
                        >
                            <Plus size={16} />
                            <span>Add Listing</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
