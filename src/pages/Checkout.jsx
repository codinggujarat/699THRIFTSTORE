import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShieldCheck, Truck, CreditCard } from 'lucide-react';

const Checkout = () => {
    const { cartTotal } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        pincode: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate payment / order placement
        alert('Order Placed Successfully!');
        navigate('/');
    };

    const shipping = cartTotal > 999 ? 0 : 99;
    const finalTotal = cartTotal + shipping;

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 text-white">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Form Section */}
                    <div className="lg:col-span-7">
                        <h1 className="text-3xl font-display text-white mb-8 uppercase tracking-wide">Checkout</h1>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Contact */}
                            <div>
                                <h2 className="text-xs font-bold uppercase tracking-widest mb-4 text-secondaryText">Contact Information</h2>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    className="w-full border-b border-white/20 py-3 text-sm font-mono placeholder-gray-600 focus:outline-none focus:border-white transition-colors bg-transparent text-white"
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Shipping Address */}
                            <div>
                                <h2 className="text-xs font-bold uppercase tracking-widest mb-4 text-secondaryText">Shipping Address</h2>
                                <div className="grid grid-cols-2 gap-6 mb-6">
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        required
                                        className="w-full border-b border-white/20 py-3 text-sm font-mono placeholder-gray-600 focus:outline-none focus:border-white transition-colors bg-transparent text-white"
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        required
                                        className="w-full border-b border-white/20 py-3 text-sm font-mono placeholder-gray-600 focus:outline-none focus:border-white transition-colors bg-transparent text-white"
                                        onChange={handleChange}
                                    />
                                </div>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Address"
                                    required
                                    className="w-full border-b border-white/20 py-3 text-sm font-mono placeholder-gray-600 focus:outline-none focus:border-white transition-colors bg-transparent mb-6 text-white"
                                    onChange={handleChange}
                                />
                                <div className="grid grid-cols-2 gap-6 mb-6">
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        required
                                        className="w-full border-b border-white/20 py-3 text-sm font-mono placeholder-gray-600 focus:outline-none focus:border-white transition-colors bg-transparent text-white"
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="text"
                                        name="pincode"
                                        placeholder="Pincode"
                                        required
                                        className="w-full border-b border-white/20 py-3 text-sm font-mono placeholder-gray-600 focus:outline-none focus:border-white transition-colors bg-transparent text-white"
                                        onChange={handleChange}
                                    />
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    required
                                    className="w-full border-b border-white/20 py-3 text-sm font-mono placeholder-gray-600 focus:outline-none focus:border-white transition-colors bg-transparent text-white"
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Payment Method - Static for now */}
                            <div>
                                <h2 className="text-xs font-bold uppercase tracking-widest mb-4 text-secondaryText">Payment Method</h2>
                                <div className="border border-white/10 p-4 flex items-center gap-4 bg-surfaceLight">
                                    <CreditCard size={20} className="text-white" />
                                    <span className="text-sm font-mono text-white">Credit / Debit Card (Razorpay)</span>
                                </div>
                                <p className="text-[10px] text-gray-500 mt-2 font-mono uppercase">
                                    <ShieldCheck size={10} className="inline mr-1" />
                                    Secure Encripted Payment
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors mt-8"
                            >
                                Pay Now — ₹{finalTotal}
                            </button>
                        </form>
                    </div>

                    {/* Order Summary (Sidebar) */}
                    <div className="lg:col-span-5">
                        <div className="bg-surfaceLight p-8 sticky top-32 border border-white/5">
                            <h2 className="text-xl font-display uppercase tracking-widest mb-8 text-white">Order & Shipping</h2>

                            <div className="space-y-4 mb-8 font-mono text-xs text-secondaryText">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="text-white">₹{cartTotal}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span className="text-white">{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                                </div>
                            </div>

                            <div className="border-t border-white/10 pt-6 flex justify-between font-display text-lg uppercase tracking-widest mb-8 text-white">
                                <span>Total</span>
                                <span>₹{finalTotal}</span>
                            </div>

                            <div className="space-y-4 text-secondaryText">
                                <div className="flex items-start gap-4">
                                    <Truck size={16} className="mt-1" />
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest mb-1 text-white">Standard Delivery</h4>
                                        <p className="text-[10px] font-mono">5-7 Business Days</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <ShieldCheck size={16} className="mt-1" />
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest mb-1 text-white">Secure Checkout</h4>
                                        <p className="text-[10px] font-mono">SSL Encrypted Payment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Checkout;
