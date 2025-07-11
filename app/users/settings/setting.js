'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaUser, FaLock, FaBell, FaSlidersH, FaPlug } from 'react-icons/fa';
import ChangePasswordModal from './changePassword';
import ChangeEmailModal from './changeEmail';

const navItems = [
    { id: 'profile', label: 'Profile', icon: <FaUser /> },
    { id: 'security', label: 'Security', icon: <FaLock /> },
    { id: 'preferences', label: 'Preferences', icon: <FaSlidersH /> },
    { id: 'notifications', label: 'Notifications', icon: <FaBell /> },
];
const userData={}

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div className="min-h-screen mx-[5%] bg-gray-50 p-6 flex gap-6 flex-col md:flex-row">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow rounded p-4 space-y-2 h-fit md:h-screen">
                <h2 className="font-bold text-lg mb-4">Settings</h2>
                {navItems.map(item => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center gap-2 p-2 rounded 
              ${activeTab === item.id ? 'bg-orange-500 text-white' : 'hover:bg-gray-100 text-gray-700'}`}
                    >
                        {item.icon}
                        {item.label}
                    </button>
                ))}
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-white p-6 rounded shadow">
                {activeTab === 'profile' && <ProfileForm />}
                {activeTab === 'security' && <SecuritySettings />}
                {activeTab === 'preferences' && <PreferencesSettings />}
                {activeTab === 'notifications' && <NotificationsSettings />}
                {activeTab === 'integration' && <IntegrationSettings />}
                

                {/* Add other tabs like <SecurityForm /> etc. here */}
            </div>
        </div>
    );
}

function ProfileForm() {
    const [formData, setFormData] = useState(null);
    const [originalData, setOriginalData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/user/me', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const user = response.data.user;

                const mappedData = {
                    firstName: user.first_name || '',
                    lastName: user.last_name || '',
                    phone: user.phone || '',
                    email: user.email || '',
                    address: user.address || '',
                    country: user.country || '',
                    state: user.state || '',
                    city: user.city || '',
                    pincode: user.pincode || '',
                };

                setFormData(mappedData);
                userData.email = mappedData.email
                userData.phone=mappedData.phone
                setOriginalData(mappedData);
            } catch (error) {
                console.error('Failed to fetch user:', error.response?.data || error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(
                'http://localhost:5000/api/user/update',
                { updateData: formData },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            alert('Profile updated successfully!');
            setOriginalData(formData);
        } catch (error) {
            console.error('Error updating user:', error.response?.data || error.message);
            alert('Failed to update profile');
        }
    };

    const handleCancel = () => {
        if (originalData) setFormData(originalData);
    };

    if (loading) return <p>Loading...</p>;
    if (!formData) return <p>Failed to load user data.</p>;

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-4">Profile</h2>

            {/* Basic Information */}
            <div className="mb-6 border p-4 rounded">
                <h3 className="font-semibold text-lg mb-2">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input label="First Name" value={formData.firstName} onChange={val => handleChange('firstName', val)} required />
                    <Input label="Last Name" value={formData.lastName} onChange={val => handleChange('lastName', val)} required />
                    <Input label="Phone Number" value={formData.phone} readOnly />
                    <Input label="Email" value={formData.email} readOnly />

                </div>
            </div>

            {/* Address Information */}
            <div className="border p-4 rounded">
                <h3 className="font-semibold text-lg mb-2">Address Information</h3>
                <div className="mb-4">
                    <Input
                        label="Address"
                        textarea
                        value={formData.address}
                        onChange={val => handleChange('address', val)}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Country" value={formData.country} onChange={val => handleChange('country', val)} required />
                    <Input label="State" value={formData.state} onChange={val => handleChange('state', val)} required />
                    <Input label="City" value={formData.city} onChange={val => handleChange('city', val)} required />
                    <Input label="Pincode" value={formData.pincode} onChange={val => handleChange('pincode', val)} required />
                </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
                <button
                    type="button"
                    onClick={handleCancel}
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                >
                    Save Changes
                </button>
            </div>
        </form>
    );
}
function Input({ label, value, onChange, required, textarea, readOnly }) {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
                {label}{required && <span className="text-red-500"> *</span>}
            </label>
            {textarea ? (
                <textarea
                    value={value}
                    onChange={e => !readOnly && onChange(e.target.value)}
                    rows="3"
                    readOnly={readOnly}
                    className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 ${readOnly ? 'bg-gray-100 cursor-not-allowed' : 'focus:ring-orange-400'
                        }`}
                />
            ) : (
                <input
                    type="text"
                    value={value}
                    onChange={e => !readOnly && onChange(e.target.value)}
                    readOnly={readOnly}
                    className={`border border-gray-300 rounded px-3 py-2 focus:outline-none ${readOnly ? 'bg-gray-100 cursor-not-allowed' : 'focus:ring-2 focus:ring-orange-400'
                        }`}
                />
            )}
        </div>
    );
}



function SecuritySettings() {
    const [googleAuth, setGoogleAuth] = useState(true);
    const [twoFactor, setTwoFactor] = useState(true);
    const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
    const [showChangeEmailModal, setShowChangeEmailModal] = useState(false);
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Security</h2>
            <hr className="mb-6" />

            {showChangePasswordModal && (
                <ChangePasswordModal onClose={setShowChangePasswordModal} />
            )}
            {showChangeEmailModal && (
                <ChangeEmailModal onClose={setShowChangeEmailModal} />
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <Card>
                    <CardHeader>Password</CardHeader>
                    <p className="text-sm text-gray-600">Otp verification is required</p>
                    <button 
                        className="mt-2 px-4 py-1.5 rounded bg-black text-white hover:bg-gray-800 text-sm font-medium"

                        text="Change" onClick={() => setShowChangePasswordModal(true)}>Change</button>
                </Card>

                

                <Card>
                    <CardHeader>Phone Number Verification</CardHeader>
                    <p className="text-green-600 text-sm">Verified Mobile Number: 7261937185</p>
                    <div className="flex gap-2 mt-2">
                        <ActionButton text="Change" />
                        <DangerTextButton text="Remove" />
                    </div>
                </Card>
                 
                
                <Card>
                    <CardHeader>Email Verification</CardHeader>
                    <p className="text-green-600 text-sm">Verified Email:{userData.email} </p>
                    <div className="flex gap-2 mt-2">
                        <button
                            className="mt-2 px-4 py-1.5 rounded bg-black text-white hover:bg-gray-800 text-sm font-medium"

                            text="Change" onClick={() => setShowChangeEmailModal(true)}>Change</button>

                    </div>
                </Card>
                

                <Card>
                    <CardHeader>Delete Account</CardHeader>
                    <DangerButton text="Delete" />
                </Card>
            </div>
        </div>
    );
}
function PreferencesSettings() {
    const [language, setLanguage] = useState('English');
    const [region, setRegion] = useState('United States (English)');

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Preferences</h2>
            <hr className="mb-6" />

            <div className="space-y-6">
                {/* Language */}
                <div className="bg-white border p-4 rounded">
                    <h3 className="font-semibold text-md">Language</h3>
                    <p className="text-sm text-gray-500 mb-2">Select display language</p>
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="mt-1 w-full md:w-1/2 px-4 py-2 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                    </select>
                </div>

                {/* Region / Locale */}
                <div className="bg-white border p-4 rounded">
                    <h3 className="font-semibold text-md">Region / Locale</h3>
                    <p className="text-sm text-gray-500 mb-2">Select region</p>
                    <select
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        className="mt-1 w-full md:w-1/2 px-4 py-2 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                        <option>United States (English)</option>
                        <option>India (Hindi)</option>
                        <option>Spain (Spanish)</option>
                        <option>France (French)</option>
                        <option>Germany (German)</option>
                    </select>
                </div>
            </div>
        </div>
    );
}


function NotificationsSettings() {
    const [notifyTypes, setNotifyTypes] = useState({
        offers: true,
        bookings: true,
        newCar: true,
    });

    const [push, setPush] = useState(true);
    const [desktop, setDesktop] = useState(true);
    const [email, setEmail] = useState(true);

    const toggleNotify = (key) => {
        setNotifyTypes(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Notifications</h2>
            <hr className="mb-6" />

            <div className="bg-white p-6 rounded shadow space-y-6">
                {/* Notify me when... */}
                <div>
                    <h3 className="font-semibold text-md mb-2">Notify me when...</h3>
                    <div className="flex flex-wrap gap-4">
                        <ToggleBox
                            label="Special Offers & Discounts"
                            checked={notifyTypes.offers}
                            onChange={() => toggleNotify('offers')}
                        />
                        <ToggleBox
                            label="Booking Confirmations"
                            checked={notifyTypes.bookings}
                            onChange={() => toggleNotify('bookings')}
                        />
                        <ToggleBox
                            label="When new car added"
                            checked={notifyTypes.newCar}
                            onChange={() => toggleNotify('newCar')}
                        />
                    </div>
                </div>

                {/* Push Notifications */}
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-semibold">Mobile Push notifications</p>
                        <p className="text-sm text-gray-500">Receive push notification when you allow the option</p>
                    </div>
                    <GreenToggle value={push} onChange={() => setPush(!push)} />
                </div>

                {/* Desktop Notifications */}
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-semibold">Desktop notifications</p>
                        <p className="text-sm text-gray-500">Receive desktop notification when you allow the option</p>
                    </div>
                    <GreenToggle value={desktop} onChange={() => setDesktop(!desktop)} />
                </div>

                {/* Email Notifications */}
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-semibold">Email notifications</p>
                        <p className="text-sm text-gray-500">Receive notifications through mails when you allow the option</p>
                    </div>
                    <GreenToggle value={email} onChange={() => setEmail(!email)} />
                </div>
            </div>
        </div>
    );
}

function IntegrationSettings() {
    const [googleCalendar, setGoogleCalendar] = useState(true);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Integrations</h2>
            <hr className="mb-6" />

            <div className="bg-white p-4 border rounded shadow-sm w-full max-w-lg flex items-center justify-between">
                {/* Google Calendar Icon & Text */}
                <div className="flex items-start gap-4">
                    <img
                        src="https://www.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_30_2x.png"
                        alt="Google Calendar"
                        className=""
                    />
                    <div>
                        <p className="font-semibold text-md">Google Calendar</p>
                        <p className="text-sm text-gray-500">
                            Powerful & free service to organize your schedule and coordinate events
                        </p>
                    </div>
                </div>

                {/* Toggle Switch */}
                <GreenToggle value={googleCalendar} onChange={() => setGoogleCalendar(!googleCalendar)} />
            </div>
        </div>
    );
}


  

// Checkbox-like toggle box
function ToggleBox({ label, checked, onChange }) {
    return (
        <label className="flex items-center gap-2 cursor-pointer">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="appearance-none w-4 h-4 border-2 border-black checked:bg-black checked:border-black rounded-sm"
            />
            <span className="text-sm font-medium">{label}</span>
        </label>
    );
}

// Green toggle switch
function GreenToggle({ value, onChange }) {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={value} onChange={onChange} />
            <div className="w-10 h-5 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-500 rounded-full peer peer-checked:bg-green-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-4 after:w-4 after:rounded-full after:transition-transform peer-checked:after:translate-x-5" />
        </label>
    );
  }

// ----------------------------
// Utility UI Components
// ----------------------------
const Card = ({ children }) => (
    <div className="bg-white p-4 border rounded shadow-sm">{children}</div>
);

const CardHeader = ({ children }) => (
    <div className="flex justify-between items-center font-semibold text-black text-md mb-2">
        {children}
    </div>
);

const ActionButton = ({ text }) => (
    <button
     className="mt-2 px-4 py-1.5 rounded bg-black text-white hover:bg-gray-800 text-sm font-medium">
        {text}
    </button>
);

const DangerButton = ({ text }) => (
    <button className="mt-2 px-4 py-1.5 rounded bg-red-600 text-white hover:bg-red-700 text-sm font-medium">
        {text}
    </button>
);

const DangerTextButton = ({ text }) => (
    <button className="text-red-600 text-sm font-medium hover:underline">{text}</button>
);

const Toggle = ({ value, onChange }) => (
    <label className="relative inline-flex items-center cursor-pointer ml-2">
        <input type="checkbox" checked={value} onChange={onChange} className="sr-only peer" />
        <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-green-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4" />
    </label>
  );

