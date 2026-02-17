import React from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
    // Mock Orders
    const orders = [
        { id: '#ORD-98214', date: 'Oct 24, 2023', total: 4599, status: 'Delivered', items: 2 },
        { id: '#ORD-98211', date: 'Sep 12, 2023', total: 2899, status: 'Delivered', items: 1 },
        { id: '#ORD-98100', date: 'Aug 05, 2023', total: 8999, status: 'Processing', items: 3 },
    ];

    return (
        <div className="animate-in fade-in duration-300">
            <h2 className="text-2xl font-display text-white mb-6">MY ORDERS</h2>

            <div className="space-y-4">
                {orders.map(order => (
                    <div key={order.id} className="border border-border p-4 hover:border-accent transition-colors">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                            <div>
                                <h3 className="font-display text-white text-lg">{order.id}</h3>
                                <p className="text-secondaryText font-mono text-xs">{order.date}</p>
                            </div>
                            <div className={`px-3 py-1 text-xs font-mono border ${order.status === 'Delivered' ? 'border-green-500 text-green-500' : 'border-yellow-500 text-yellow-500'}`}>
                                {order.status.toUpperCase()}
                            </div>
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-border">
                            <span className="text-white font-mono">₹{order.total} <span className="text-secondaryText text-xs">({order.items} Items)</span></span>
                            <Link to={`/account/orders/${order.id.replace('#', '')}`} className="text-accent hover:text-white font-mono text-sm underline">
                                VIEW DETAILS
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;
