import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Login = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 flex items-center justify-center container-custom bg-background text-white">
            <div className="max-w-md w-full bg-surface border border-white/10 p-8 animate-in fade-in zoom-in duration-300">
                <h1 className="text-4xl font-display text-white mb-8 text-center">LOGIN</h1>

                <form className="space-y-6">
                    <div>
                        <label className="block text-secondaryText font-mono text-sm mb-2">EMAIL</label>
                        <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 text-sm font-mono placeholder:text-gray-600 focus:outline-none focus:border-white transition-colors text-white" placeholder="ENTER YOUR EMAIL" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="block text-secondaryText font-mono text-sm">PASSWORD</label>
                            <Link to="/forgot-password" className="text-xs text-white hover:underline font-mono">FORGOT?</Link>
                        </div>
                        <input type="password" className="w-full bg-transparent border-b border-white/20 py-3 text-sm font-mono placeholder:text-gray-600 focus:outline-none focus:border-white transition-colors text-white" placeholder="ENTER YOUR PASSWORD" />
                    </div>

                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="remember" className="accent-white" />
                        <label htmlFor="remember" className="text-secondaryText text-sm font-mono cursor-pointer">Remember me</label>
                    </div>

                    <button className="w-full py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">SIGN IN</button>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-surface text-secondaryText font-mono">OR CONTINUE WITH</span>
                        </div>
                    </div>

                    <button type="button" className="w-full py-4 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
                        <Instagram size={20} /> INSTAGRAM
                    </button>
                </form>

                <p className="mt-8 text-center text-secondaryText font-mono text-sm">
                    DON'T HAVE AN ACCOUNT? <Link to="/signup" className="text-white hover:text-gray-300 underline">SIGN UP</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
