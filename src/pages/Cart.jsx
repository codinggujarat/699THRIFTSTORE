import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const navigate = useNavigate();

    const handleApplyPromo = (e) => {
        e.preventDefault();
        if (promoCode.toUpperCase() === 'THRIFT20') {
            setDiscount(cartTotal * 0.2);
            alert('Promo code applied!');
        } else {
            alert('Invalid promo code');
            setDiscount(0);
        }
    };

    const finalTotal = cartTotal - discount;

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background text-white pt-20">
                <h2 className="text-4xl font-display uppercase mb-4">Your Cart is Empty</h2>
                <p className="text-secondaryText font-mono text-sm mb-8">Looks like you haven't found your drip yet.</p>
                <Link to="/shop" className="btn-primary">
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 text-white">
            <div className="container-custom">
                <h1 className="text-4xl md:text-6xl font-display text-white mb-12 uppercase tracking-wide">Shopping Bag</h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Cart Items */}
                    <div className="lg:col-span-8">
                        <div className="border-t border-white/10">
                            {cartItems.map(item => (
                                <div key={`${item.id}-${item.size}`} className="py-8 border-b border-white/10 flex gap-6">
                                    <Link to={`/product/${item.id}`} className="w-24 h-32 shrink-0 bg-surfaceLight overflow-hidden">
                                        <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover transition-transform hover:scale-105" />
                                    </Link>

                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-display text-lg uppercase tracking-wide">
                                                    <Link to={`/product/${item.id}`} className="text-white hover:text-secondaryText transition-colors">{item.name}</Link>
                                                </h3>
                                                <span className="font-mono text-sm">₹{item.price * item.quantity}</span>
                                            </div>
                                            <p className="text-xs font-mono text-secondaryText uppercase tracking-widest mb-1">{item.brand} — {item.size}</p>
                                        </div>

                                        <div className="flex justify-between items-end">
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center border border-white/10">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                                        className="p-3 hover:bg-white hover:text-black transition-colors"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Minus size={12} />
                                                    </button>
                                                    <span className="w-8 text-center font-mono text-xs">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                                        className="p-3 hover:bg-white hover:text-black transition-colors"
                                                    >
                                                        <Plus size={12} />
                                                    </button>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id, item.size)}
                                                className="text-secondaryText hover:text-red-500 transition-colors text-[10px] underline font-mono uppercase tracking-widest"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="lg:col-span-4">
                        <div className="bg-surfaceLight/50 backdrop-blur-sm p-8 sticky top-32 border border-white/10">
                            <h2 className="font-display text-xl uppercase tracking-widest mb-8 text-white">Order Summary</h2>

                            <div className="space-y-4 mb-8 font-mono text-xs text-secondaryText border-b border-white/10 pb-8">
                                <div className="flex justify-between">
                                    <span className="uppercase tracking-wide">Subtotal</span>
                                    <span className="text-white">₹{cartTotal}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="uppercase tracking-wide">Shipping</span>
                                    <span className="text-white">{finalTotal > 999 ? 'FREE' : '₹99'}</span>
                                </div>
                                {discount > 0 && (
                                    <div className="flex justify-between text-white">
                                        <span className="uppercase tracking-wide">Discount</span>
                                        <span>-₹{Math.round(discount)}</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-between font-display text-xl uppercase tracking-widest mb-8 text-white">
                                <span>Total</span>
                                <span>₹{finalTotal > 999 ? finalTotal : finalTotal + 99}</span>
                            </div>

                            <form onSubmit={handleApplyPromo} className="mb-6 flex gap-2">
                                <input
                                    type="text"
                                    placeholder="PROMO CODE"
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                    className="flex-1 bg-transparent border border-white/20 px-4 py-3 text-xs uppercase focus:outline-none focus:border-white text-white placeholder-gray-600 transition-colors"
                                />
                                <button className="bg-transparent border border-white text-white text-xs font-bold uppercase px-6 hover:bg-white hover:text-black transition-colors">Apply</button>
                            </form>

                            <button
                                onClick={() => navigate('/checkout')}
                                className="block w-full py-4 bg-white text-black text-center text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-white hover:border hover:border-white border border-transparent transition-all flex justify-between items-center px-6"
                            >
                                Checkout <ArrowRight size={16} />
                            </button>

                            <div className="mt-6 text-[10px] text-gray-500 font-mono text-center uppercase tracking-wide">
                                Secure Checkout - Free Shipping over ₹999
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
