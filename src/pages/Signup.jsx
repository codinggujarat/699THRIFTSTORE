import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 flex items-center justify-center container-custom bg-background text-white">
            <div className="max-w-md w-full bg-surface border border-white/10 p-8 animate-in fade-in zoom-in duration-300">
                <h1 className="text-4xl font-display text-white mb-8 text-center">CREATE ACCOUNT</h1>

                <form className="space-y-6">
                    <div>
                        <label className="block text-secondaryText font-mono text-sm mb-2">FULL NAME</label>
                        <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-sm font-mono placeholder:text-gray-600 focus:outline-none focus:border-white transition-colors text-white" placeholder="ENTER YOUR NAME" />
                    </div>
                    <div>
                        <label className="block text-secondaryText font-mono text-sm mb-2">EMAIL</label>
                        <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 text-sm font-mono placeholder:text-gray-600 focus:outline-none focus:border-white transition-colors text-white" placeholder="ENTER YOUR EMAIL" />
                    </div>
                    <div>
                        <label className="block text-secondaryText font-mono text-sm mb-2">PHONE</label>
                        <input type="tel" className="w-full bg-transparent border-b border-white/20 py-3 text-sm font-mono placeholder:text-gray-600 focus:outline-none focus:border-white transition-colors text-white" placeholder="ENTER YOUR PHONE" />
                    </div>
                    <div>
                        <label className="block text-secondaryText font-mono text-sm mb-2">PASSWORD</label>
                        <input type="password" className="w-full bg-transparent border-b border-white/20 py-3 text-sm font-mono placeholder:text-gray-600 focus:outline-none focus:border-white transition-colors text-white" placeholder="CREATE PASSWORD" />
                    </div>
                    <div>
                        <label className="block text-secondaryText font-mono text-sm mb-2">CONFIRM PASSWORD</label>
                        <input type="password" className="w-full bg-transparent border-b border-white/20 py-3 text-sm font-mono placeholder:text-gray-600 focus:outline-none focus:border-white transition-colors text-white" placeholder="REPEAT PASSWORD" />
                    </div>

                    <div className="flex items-start gap-2">
                        <input type="checkbox" id="terms" className="accent-white mt-1" />
                        <label htmlFor="terms" className="text-secondaryText text-sm font-mono cursor-pointer leading-tight">
                            I agree to the <Link to="/terms" className="text-white hover:text-gray-300 underline">Terms of Service</Link> and <Link to="/privacy" className="text-white hover:text-gray-300 underline">Privacy Policy</Link>
                        </label>
                    </div>

                    <button className="w-full py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">CREATE ACCOUNT</button>
                </form>

                <p className="mt-8 text-center text-secondaryText font-mono text-sm">
                    ALREADY HAVE AN ACCOUNT? <Link to="/login" className="text-white hover:text-gray-300 underline">LOGIN</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
