import React, { useState } from 'react';
import { Package, Search, Truck } from 'lucide-react';

const TrackOrder = () => {
    const [orderId, setOrderId] = useState('');
    const [result, setResult] = useState(null);

    const handleTrack = (e) => {
        e.preventDefault();
        // Mock tracking logic
        if (orderId.length > 3) {
            setResult({
                status: 'Shipped',
                location: 'Mumbai Hub',
                date: 'Expected By Oct 28'
            });
        }
    };

    return (
        <div className="min-h-screen pt-32 pb-20 container-custom max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-display text-white mb-8 text-center">TRACK YOUR DRIP</h1>

            <form onSubmit={handleTrack} className="flex gap-4 mb-12">
                <input
                    type="text"
                    placeholder="ENTER ORDER ID (e.g. #ORD-12345)"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    className="input-field flex-1"
                />
                <button className="btn-primary">TRACK</button>
            </form>

            {result && (
                <div className="bg-surface border border-border p-8 animate-in fade-in slide-in-from-bottom-4">
                    <div className="flex items-center gap-4 mb-8 text-white">
                        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                            <Truck size={32} />
                        </div>
                        <div>
                            <h3 className="font-display text-2xl">{result.status}</h3>
                            <p className="font-mono text-secondaryText text-sm">{result.date}</p>
                        </div>
                    </div>

                    <div className="relative pl-8 border-l-2 border-border space-y-8">
                        {[
                            { title: 'Order Placed', time: 'Oct 24, 10:00 AM', done: true },
                            { title: 'Processing', time: 'Oct 24, 02:00 PM', done: true },
                            { title: 'Shipped', time: 'Oct 25, 09:00 AM', done: true },
                            { title: 'Out for Delivery', time: 'Pending', done: false },
                        ].map((event, i) => (
                            <div key={i} className="relative">
                                <div className={`absolute -left-[39px] top-1 w-4 h-4 rounded-full border-2 bg-surface ${event.done ? 'border-accent bg-accent' : 'border-border'}`}></div>
                                <h4 className={`font-display ${event.done ? 'text-white' : 'text-secondaryText'}`}>{event.title}</h4>
                                <p className="text-secondaryText font-mono text-xs">{event.time}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TrackOrder;
