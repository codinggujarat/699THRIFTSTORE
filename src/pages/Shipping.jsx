import React, { useState } from 'react';

const Shipping = () => {
    const [pincode, setPincode] = useState('');
    const [checkResult, setCheckResult] = useState(null);

    const checkPincode = (e) => {
        e.preventDefault();
        // Hardcoded 5 valid pincodes for demo
        const validPincodes = ['400001', '110001', '560001', '600001', '700001', '123456'];

        if (validPincodes.includes(pincode)) {
            setCheckResult({ success: true, msg: 'Deliverable. Estimated 5-7 Days.' });
        } else {
            setCheckResult({ success: false, msg: 'Not available for this pincode yet.' });
        }
    };

    return (
        <div className="min-h-screen pt-32 pb-20 container-custom max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display text-white mb-12 text-center">SHIPPING INFO</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-surface border border-border p-6 text-center">
                    <h3 className="text-2xl font-display text-white mb-2">STANDARD</h3>
                    <p className="text-accent font-mono text-xl mb-4">FREE</p>
                    <p className="text-secondaryText font-mono text-sm">On orders above ₹999 <br /> 5-7 Business Days</p>
                </div>
                <div className="bg-surface border border-border p-6 text-center">
                    <h3 className="text-2xl font-display text-white mb-2">EXPRESS</h3>
                    <p className="text-accent font-mono text-xl mb-4">₹99</p>
                    <p className="text-secondaryText font-mono text-sm">Flat Rate <br /> 2-3 Business Days</p>
                </div>
            </div>

            <div className="bg-surfaceLight border border-border p-8 mb-12 max-w-lg mx-auto">
                <h3 className="text-xl font-display text-white mb-4 text-center">CHECK AVAILABILITY</h3>
                <form onSubmit={checkPincode} className="flex gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="ENTER PINCODE"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        className="input-field flex-1 text-center font-mono"
                        maxLength={6}
                    />
                    <button className="btn-secondary">CHECK</button>
                </form>
                {checkResult && (
                    <p className={`text-center font-mono text-sm ${checkResult.success ? 'text-green-500' : 'text-red-500'}`}>
                        {checkResult.msg}
                    </p>
                )}
            </div>

            <div className="bg-surface border border-border p-8">
                <h3 className="text-xl font-display text-white mb-4">IMPORTANT NOTES</h3>
                <ul className="list-disc list-inside space-y-2 text-secondaryText font-mono text-sm">
                    <li>Orders are processed within 24-48 hours.</li>
                    <li>You will receive a tracking link via email/SMS once shipped.</li>
                    <li>COD (Cash on Delivery) is currently NOT available for high-value items (+₹5000).</li>
                </ul>
            </div>
        </div>
    );
};

export default Shipping;
