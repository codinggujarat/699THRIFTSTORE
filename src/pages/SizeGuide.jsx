import React from 'react';

const SizeGuide = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 container-custom max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-display text-white mb-12 text-center">SIZE GUIDE</h1>

            <div className="bg-surface border border-border p-8 mb-12">
                <h2 className="text-2xl font-display text-white mb-6">JACKETS & OUTERWEAR</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left font-mono text-secondaryText text-sm">
                        <thead className="bg-surfaceLight text-white border-b border-border">
                            <tr>
                                <th className="p-4">SIZE</th>
                                <th className="p-4">CHEST (in)</th>
                                <th className="p-4">LENGTH (in)</th>
                                <th className="p-4">SLEEVE (in)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            <tr><td className="p-4 text-white">S</td><td className="p-4">20-22</td><td className="p-4">26</td><td className="p-4">23</td></tr>
                            <tr><td className="p-4 text-white">M</td><td className="p-4">22-24</td><td className="p-4">27</td><td className="p-4">24</td></tr>
                            <tr><td className="p-4 text-white">L</td><td className="p-4">24-26</td><td className="p-4">28</td><td className="p-4">25</td></tr>
                            <tr><td className="p-4 text-white">XL</td><td className="p-4">26-28</td><td className="p-4">29</td><td className="p-4">26</td></tr>
                            <tr><td className="p-4 text-white">XXL</td><td className="p-4">28-30</td><td className="p-4">30</td><td className="p-4">27</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="bg-surface border border-border p-8">
                <h2 className="text-2xl font-display text-white mb-6">HOW TO MEASURE</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="bg-surfaceLight aspect-[3/4] flex items-center justify-center p-8">
                        {/* Placeholder for illustration */}
                        <div className="border-2 border-dashed border-white/20 w-full h-full flex items-center justify-center text-secondaryText font-mono">
                            ILLUSTRATION HERE
                        </div>
                    </div>
                    <ul className="space-y-4 font-mono text-secondaryText text-sm list-disc pl-4">
                        <li><span className="text-white block">CHEST</span> Measure across the chest from armpit to armpit.</li>
                        <li><span className="text-white block">LENGTH</span> Measure from the highest point of the shoulder to the bottom hem.</li>
                        <li><span className="text-white block">SLEEVE</span> Measure from the shoulder seam to the cuff.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SizeGuide;
