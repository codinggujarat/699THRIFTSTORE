import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, Package } from 'lucide-react';
import confetti from 'canvas-confetti';

const OrderConfirmation = () => {
    const location = useLocation();
    const orderId = location.state?.orderId || '#ORD-000000';

    useEffect(() => {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    }, []);

    return (
        <div className="min-h-screen pt-32 pb-20 flex items-center justify-center container-custom bg-background text-white">
            <div className="max-w-xl w-full bg-surface border border-white/10 p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white via-gray-500 to-white"></div>

                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/10 rounded-full text-green-500 mb-6">
                    <CheckCircle size={40} />
                </div>

                <h1 className="text-4xl font-display text-white mb-2">ORDER CONFIRMED!</h1>
                <p className="text-secondaryText font-mono mb-8">Thank you for coppin'. Your drip is on the way.</p>

                <div className="bg-surfaceLight p-6 mb-8 border border-dashed border-white/20">
                    <p className="text-sm text-secondaryText font-mono mb-1">ORDER NUMBER</p>
                    <p className="text-2xl text-white font-display tracking-wider">{orderId}</p>
                </div>

                <div className="space-y-4">
                    <Link to="/track-order" className="w-full py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors block">
                        TRACK ORDER
                    </Link>
                    <Link to="/shop" className="w-full py-4 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors block">
                        CONTINUE SHOPPING
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;
