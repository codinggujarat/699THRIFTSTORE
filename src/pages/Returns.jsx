import React from 'react';

const Returns = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 container-custom max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display text-white mb-12 text-center">RETURNS & REFUNDS</h1>

            <div className="space-y-6">
                <div className="bg-surface border border-border p-6">
                    <h3 className="text-xl font-display text-white mb-4">RETURN POLICY</h3>
                    <p className="text-secondaryText font-mono text-sm leading-relaxed">
                        We accept returns within 7 days of delivery. <br />
                        Items must be unworn, unwashed, and in the same condition as received. <br />
                        Original tags (if any) must be attached.
                    </p>
                </div>

                <div className="bg-surface border border-border p-6">
                    <h3 className="text-xl font-display text-white mb-4">HOW TO RETURN</h3>
                    <p className="text-secondaryText font-mono text-sm leading-relaxed">
                        1. Enter your Order ID below to check eligibility.<br />
                        2. If eligible, you will receive a shipping label via email.<br />
                        3. Pack the item securely and ship it back to us.
                    </p>
                </div>

                <div className="bg-surfaceLight border border-border p-8 mt-12">
                    <h3 className="text-xl font-display text-white mb-4 text-center">CHECK ELIGIBILITY</h3>
                    <form className="flex gap-4">
                        <input type="text" placeholder="ORDER ID" className="input-field flex-1" />
                        <button className="btn-primary">CHECK</button>
                    </form>
                </div>

                <div className="bg-surface border border-border p-6">
                    <h3 className="text-xl font-display text-white mb-4">REFUNDS</h3>
                    <p className="text-secondaryText font-mono text-sm leading-relaxed">
                        Refunds are processed as Store Credit within 48 hours of us receiving the return. <br />
                        Original shipping charges are non-refundable.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Returns;
