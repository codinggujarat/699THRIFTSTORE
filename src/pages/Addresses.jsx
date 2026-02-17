import React from 'react';
import { Plus, Edit2, Trash2, MapPin } from 'lucide-react';

const Addresses = () => {
    return (
        <div className="animate-in fade-in duration-300">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-display text-white">SAVED ADDRESSES</h2>
                <button className="flex items-center gap-2 text-accent hover:text-white font-mono text-sm transition-colors">
                    <Plus size={16} /> ADD NEW
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map(i => (
                    <div key={i} className="border border-border p-6 hover:border-accent transition-colors relative group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-2 text-white font-display text-xl">
                                <MapPin size={20} className="text-accent" />
                                <span>HOME</span>
                            </div>
                            {i === 1 && <span className="text-[10px] bg-accent text-white px-2 py-1 font-mono">DEFAULT</span>}
                        </div>

                        <p className="text-secondaryText font-mono text-sm leading-relaxed mb-6">
                            Aman Nayak <br />
                            123, Street Name, Area <br />
                            City, State - 400001 <br />
                            +91 98765 43210
                        </p>

                        <div className="flex gap-4 border-t border-border pt-4">
                            <button className="flex items-center gap-2 text-secondaryText hover:text-white text-xs font-mono">
                                <Edit2 size={12} /> EDIT
                            </button>
                            <button className="flex items-center gap-2 text-secondaryText hover:text-red-500 text-xs font-mono">
                                <Trash2 size={12} /> DELETE
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Addresses;
