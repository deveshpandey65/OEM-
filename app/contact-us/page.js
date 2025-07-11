'use client';

import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar';
import axios from 'axios';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:5000/api/contact/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong. Try again later.');
        }
    };
      

    return (
        <div>
            <Navbar/>
            <div className="mt-20 max-w-6xl mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold text-center mb-2">Contact Us</h1>
                <p className="text-center text-gray-600 mb-10">
                    We’d love to hear from you! Reach out to us using the form below or through the contact details.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Form Section */}
                    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-5">
                        <div>
                            <label className="block mb-1 font-medium">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Message</label>
                            <textarea
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-[#ffa633] hover:bg-orange-500 text-white px-6 py-2 rounded font-semibold transition"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="bg-white p-6 rounded-lg shadow space-y-6">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                            <p className="text-gray-600">Feel free to contact us through the following channels:</p>
                        </div>

                        <div className="flex items-start gap-4">
                            <MapPin className="text-orange-500" />
                            <div>
                                <p className="font-medium">Office Address</p>
                                <p className="text-gray-600">4635 Pheasant Ridge Road, City Hollywood, USA</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone className="text-orange-500" />
                            <div>
                                <p className="font-medium">Phone</p>
                                <p className="text-gray-600">+1 123 456 7890</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Mail className="text-orange-500" />
                            <div>
                                <p className="font-medium">Email</p>
                                <p className="text-gray-600">info@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
