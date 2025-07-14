"use client";

import Image from "next/image";
import Link from "next/link";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaBehance,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { motion } from "framer-motion";

export default function Footer() {
    const footerSections = [
        {
            title: "Company",
            links: [
                { label: "About Us", href: "/about-us" },
                { label: "Bikes", href: "/listing" },
            ],
        },
        {
            title: "Vehicles Type",
            links: [
                { label: "Electric", href: "#" },
                { label: "Scooters", href: "#" },
                { label: "Sports", href: "#" },
                { label: "Racing Bikes", href: "#" },
                { label: "Off-road", href: "#" },
            ],
        },
        {
            title: "Quick Links",
            links: [
                { label: "My account", href: "/users" },
                { label: "Dealers", href: "#" },
                { label: "Financial Services", href: "#" },
            ],
        },
        {
            title: "Resources",
            links: [
                { label: "Support", href: "/contact-us" },
                { label: "Security", href: "#" },
                { label: "Help Centers", href: "/contact-us" },
            ],
        },
    ];

    return (
        <motion.footer
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pt-20 pb-10 px-4 bg-[#f6fbfa] bg-[url('https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bg/ban-bg-01.png')] bg-no-repeat bg-left bg-contain"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm text-gray-700">
                {/* Contact Section */}
                <div className="md:col-span-1 space-y-4">
                    <div className="flex items-center gap-2">
                        <Link href="/">
                            <Image
                                src="https://dreamsrent.dreamstechnologies.com/html/template/assets/img/logo.svg"
                                alt="Logo"
                                width={200}
                                height={200}
                            />
                        </Link>
                    </div>
                    <p className="font-semibold">Want To Book A Bike Instantly Contact Us !!!</p>
                    <p className="flex items-center gap-2">
                        <FaPhoneAlt size={14} /> +1 (888) 760 1940
                    </p>
                    <p className="flex items-center gap-2">
                        <FaEnvelope size={14} /> support@example.com
                    </p>
                    <div className="flex flex-col gap-2 pt-4">
                        <Image
                            src="https://dreamsrent.dreamstechnologies.com/html/template/assets/img/icons/play-icon.svg"
                            alt="Google Play"
                            width={130}
                            height={40}
                        />
                        <Image
                            src="https://dreamsrent.dreamstechnologies.com/html/template/assets/img/icons/play-icon.svg"
                            alt="App Store"
                            width={130}
                            height={40}
                        />
                    </div>
                </div>

                {/* Footer Links */}
                {footerSections.map((section, i) => (
                    <div key={i}>
                        <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                        <ul className="space-y-6">
                            {section.links.map((link, j) => (
                                <li key={j}>
                                    <Link href={link.href}>
                                        <span className="hover:text-[#ffa633] cursor-pointer">{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom Footer */}
            <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto text-sm text-gray-600">
                <p>
                    Copyright © 2024 <span className="font-semibold text-gray-800">Coveten</span>. All Rights Reserved.
                </p>
                <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded px-3 py-1 gap-2">
                        <Image
                            src="https://flagcdn.com/us.svg"
                            alt="EN"
                            width={18}
                            height={12}
                            className="rounded-sm"
                        />
                        English
                    </div>
                    <div className="flex items-center border rounded px-3 py-1 gap-2">
                        <MdLanguage size={16} />
                        USD
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                        <FaFacebookF className="hover:text-black cursor-pointer" />
                        <FaInstagram className="hover:text-black cursor-pointer" />
                        <FaBehance className="hover:text-black cursor-pointer" />
                        <FaTwitter className="hover:text-black cursor-pointer" />
                        <FaLinkedinIn className="hover:text-black cursor-pointer" />
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
