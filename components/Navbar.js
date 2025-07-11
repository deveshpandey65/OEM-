'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Plus, User, Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const router = useRouter();
    const [isLoggedIn,setIsLoggedIn]=useState(false)

      useEffect(() => {
        const verifyToken = async () => {
          const token = localStorage.getItem('token');
    
          if (!token) {
            console.log('not token')
            // router.push('/signin');
            return;
          }
    
          try {
            const response = await fetch('http://localhost:5000/api/user/profile', {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            if (response.status === 200) {
              console.log( 'verify :',response)
              setIsLoggedIn(true);
            }
          } catch (error) {
            console.error("Token invalid or request failed:", error);
            // localStorage.removeItem('token');
            // router.push('/signin');
          }
        };
    
        verifyToken();
      }, [router]);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Listings', href: '/listing' },
        {
            name: 'Pages',
            dropdown: [
                { name: 'About Us', href: '/about-us' },
                { name: 'FAQ', href: '/faq' },
                { name: 'Contact Us', href: '/contact-us' },
            ],
        },
    ];

    if (isLoggedIn) {
        navItems.push({ name: 'Dashboard', href: '/users' });
    }

    return (
        <nav className="bg-white fixed top-0 w-full z-50 shadow-sm">
            <div className="p-4 flex justify-between items-center h-[69px]" onMouseLeave={() => setDropdownOpen(null)}>
                {/* Left: Hamburger + Logo */}
                <div className="flex items-center space-x-4">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-[#0a5ebe] md:block lg:hidden">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                    <Link href="/">
                        <img
                            src="/assets/img/image.png"
                            alt="Logo"
                            className="h-10"
                        />
                    </Link>
                </div>

                {/* Center: Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative"
                            onMouseEnter={() => item.dropdown && setDropdownOpen(index)}
                            onClick={() => item.dropdown && setDropdownOpen(dropdownOpen === index ? null : index)}
                        >
                            {item.dropdown ? (
                                <button className="text-md font-semibold flex items-center gap-1 hover:text-[#0a5ebe]">
                                    {item.name}
                                    <ChevronDown size={18} />
                                </button>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="text-md font-semibold hover:text-[#0a5ebe]"
                                >
                                    {item.name}
                                </Link>
                            )}

                            {dropdownOpen === index && item.dropdown && (
                                <div className="absolute top-[35px] left-0 bg-white shadow-sm rounded-sm py-2 w-40 z-50 border-t-2 border-[#0a5ebe]">
                                    {item.dropdown.map((subItem, subIdx) => (
                                        <Link
                                            key={subIdx}
                                            href={subItem.href}
                                            className="block px-4 py-2 text-sm hover:text-[#0a5ebe] transition-all duration-300 hover:translate-x-2"
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right: Icons */}
                <div className="hidden md:flex items-center space-x-4">
                    {!isLoggedIn && (
                        <div
                            className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center cursor-pointer"
                            onClick={() => router.push('/signin')}
                        >
                            <User size={18} />
                        </div>
                    )}
                    {isLoggedIn && (
                    <Link
                        href="/users/settings"
                        className="bg-[#0a5ebe] hover:bg-white text-white hover:text-black border border-[#0a5ebe] font-semibold px-4 py-2 rounded-md flex items-center gap-2 text-sm"
                    >
                        <Plus size={16} />
                        <span>Profile</span>
                    </Link>)}
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile Drawer */}
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
                            className="h-6"
                        />
                    </Link>
                    <X size={24} className="text-gray-600 cursor-pointer" onClick={() => setIsOpen(false)} />
                </div>

                <div>
                    {navItems.map((item, index) => (
                        <div key={index}>
                            {item.dropdown ? (
                                <>
                                    <button
                                        className="w-full bg-black text-white px-4 py-3 flex justify-between items-center text-sm font-medium"
                                        onClick={() => setDropdownOpen(dropdownOpen === index ? null : index)}
                                    >
                                        {item.name}
                                        <ChevronDown size={16} />
                                    </button>
                                    {dropdownOpen === index && (
                                        <div className="pl-4 bg-[#2e2c2adf]">
                                            {item.dropdown.map((subItem, subIdx) => (
                                                <Link
                                                    key={subIdx}
                                                    href={subItem.href}
                                                    className="block text-white text-sm px-4 py-2 hover:text-[#0a5ebe] transition-all duration-300 hover:translate-x-2"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="block bg-black text-white px-4 py-3 text-sm font-medium hover:text-[#0a5ebe]"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}

                    <hr className="my-3 border-gray-200" />

                    {/* Profile + Add Listing */}
                    <div className="flex items-center justify-between px-4 mb-4">
                        {!isLoggedIn && (
                            <div
                                className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center cursor-pointer"
                                onClick={() => router.push('/signin')}
                            >
                                <User size={18} />
                            </div>
                        )}
                        <Link
                            href="/add-listing"
                            className="bg-[#0a5ebe] text-white font-semibold px-4 py-2 rounded-md flex items-center gap-2 text-sm"
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
