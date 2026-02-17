import React, { useEffect } from 'react';
import { X, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import QuantityStepper from './QuantityStepper';

const CartDrawer = ({ isOpen, onClose }) => {
    const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />
            <div className="fixed inset-y-0 right-0 w-full max-w-md bg-surface border-l border-border z-50 flex flex-col shadow-2xl transform transition-transform duration-300">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                    <h2 className="text-2xl font-display text-white tracking-widest">YOUR CART ({cartItems.length})</h2>
                    <button onClick={onClose} className="p-2 hover:bg-surfaceLight rounded-full transition-colors text-white">
                        <X size={24} />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {cartItems.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                            <p className="text-secondaryText font-mono">Your cart is empty.</p>
                            <button onClick={onClose} className="btn-secondary">
                                START SHOPPING
                            </button>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={`${item.id}-${item.size}`} className="flex gap-4 group">
                                <div className="w-24 h-32 bg-surfaceLight overflow-hidden shrink-0 border border-border">
                                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-display text-lg text-white leading-tight mb-1">{item.name}</h3>
                                        <div className="flex items-center gap-2 text-sm text-secondaryText font-mono mb-2">
                                            <span>Size: {item.size}</span>
                                            <span>•</span>
                                            <span>₹{item.price * item.quantity}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <QuantityStepper
                                            quantity={item.quantity}
                                            onIncrease={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                            onDecrease={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                            min={1}
                                        />
                                        <button
                                            onClick={() => removeFromCart(item.id, item.size)}
                                            className="p-2 text-secondaryText hover:text-accent transition-colors"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="p-6 border-t border-border bg-surfaceLight space-y-4">
                        <div className="flex justify-between items-center text-white font-display text-xl tracking-wider">
                            <span>SUBTOTAL</span>
                            <span>₹{cartTotal}</span>
                        </div>
                        <p className="text-xs text-secondaryText font-mono text-center">
                            Shipping & taxes calculated at checkout.
                        </p>
                        <Link
                            to="/checkout"
                            onClick={onClose}
                            className="btn-primary w-full flex justify-between items-center px-6"
                        >
                            <span>CHECKOUT</span>
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartDrawer;
