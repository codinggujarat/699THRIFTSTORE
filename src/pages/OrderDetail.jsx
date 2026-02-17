import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const OrderDetail = () => {
    const { id } = useParams();

    return (
        <div className="animate-in fade-in zoom-in duration-300">
            <Link to="/account/orders" className="flex items-center gap-2 text-secondaryText hover:text-white font-mono mb-6 text-sm transition-colors">
                <ArrowLeft size={16} /> BACK TO ORDERS
            </Link>

            <div className="flex justify-between items-start mb-8">
                <div>
                    <h2 className="text-2xl font-display text-white mb-1">ORDER #{id}</h2>
                    <p className="text-secondaryText font-mono text-sm">Placed on Oct 24, 2023</p>
                </div>
                <button className="hidden sm:block btn-secondary text-xs px-4 py-1">DOWNLOAD INVOICE</button>
            </div>

            {/* Tracking Visual */}
            <div className="mb-12 relative py-4">
                <div className="absolute top-1/2 left-0 w-full h-px bg-border -z-10"></div>
                <div className="flex justify-between relative px-2">
                    {['Processing', 'Shipped', 'Out for Delivery', 'Delivered'].map((step, i) => (
                        <div key={step} className="flex flex-col items-center gap-2 bg-surface px-2 z-10">
                            <div className={`w-4 h-4 rounded-full border-2 ${i === 3 ? 'bg-green-500 border-green-500' : 'bg-surface border-accent'}`}></div>
                            <span className={`text-[10px] sm:text-xs font-mono whitespace-nowrap ${i === 3 ? 'text-green-500' : 'text-accent'}`}>{step}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Items */}
            <div className="space-y-4 mb-8">
                <h3 className="text-white font-display tracking-wider text-lg border-b border-border pb-2">ITEMS</h3>
                {[1, 2].map(i => (
                    <div key={i} className="flex gap-4 p-4 border border-border bg-surfaceLight hover:border-white transition-colors">
                        <div className="w-16 h-20 bg-surface shrink-0">
                            <img src={`https://placehold.co/400x500/1a1a1a/ffffff?text=Item+${i}`} alt="Item" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <h4 className="text-white font-display text-lg">VINTAGE RACING JACKET</h4>
                                <p className="text-white font-mono text-sm">₹4,599</p>
                            </div>
                            <p className="text-secondaryText font-mono text-xs mt-1">Size: L • Qty: 1</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Totals */}
            <div className="border-t border-border pt-4">
                <div className="flex justify-between text-white font-display text-xl">
                    <span>TOTAL PAID</span>
                    <span>₹9,198</span>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
