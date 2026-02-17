import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [step, setStep] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(step + 1);
    }

    return (
        <div className="min-h-screen pt-32 pb-20 flex items-center justify-center container-custom">
            <div className="max-w-md w-full bg-surface border border-border p-8 animate-in fade-in zoom-in duration-300">
                <h1 className="text-3xl font-display text-white mb-2 text-center">RECOVER PASSWORD</h1>
                <p className="text-secondaryText font-mono text-sm text-center mb-8">
                    {step === 1 ? "Enter your email to receive an OTP." : step === 2 ? "Enter the OTP sent to your email." : "Create a new password."}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {step === 1 && (
                        <div>
                            <label className="block text-secondaryText font-mono text-sm mb-2">EMAIL</label>
                            <input required type="email" className="input-field" placeholder="ENTER YOUR EMAIL" />
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <label className="block text-secondaryText font-mono text-sm mb-2">OTP CODE</label>
                            <input required type="text" className="input-field text-center tracking-[1em]" placeholder="0000" maxLength={4} />
                        </div>
                    )}

                    {step === 3 && (
                        <>
                            <div>
                                <label className="block text-secondaryText font-mono text-sm mb-2">NEW PASSWORD</label>
                                <input required type="password" className="input-field" placeholder="NEW PASSWORD" />
                            </div>
                            <div>
                                <label className="block text-secondaryText font-mono text-sm mb-2">CONFIRM PASSWORD</label>
                                <input required type="password" className="input-field" placeholder="CONFIRM PASSWORD" />
                            </div>
                        </>
                    )}

                    <button className="btn-primary w-full">
                        {step === 1 ? "SEND OTP" : step === 2 ? "VERIFY OTP" : "RESET PASSWORD"}
                    </button>
                </form>

                <p className="mt-8 text-center text-secondaryText font-mono text-sm">
                    REMEMBERED IT? <Link to="/login" className="text-white hover:text-accent underline">LOGIN</Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
