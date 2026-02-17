import React from 'react';
import { Instagram, Smartphone, Mail, Plus } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 container-custom">
            <h1 className="text-4xl md:text-6xl font-display text-white mb-12 text-center">GET IN TOUCH</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                {/* Form */}
                <form className="space-y-6 bg-surface p-8 border border-border h-fit">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="NAME" className="input-field" />
                        <input type="email" placeholder="EMAIL" className="input-field" />
                    </div>
                    <input type="text" placeholder="SUBJECT" className="input-field" />
                    <textarea placeholder="MESSAGE" rows="6" className="input-field"></textarea>
                    <button className="btn-primary w-full">SEND MESSAGE</button>

                    <a href="https://instagram.com/699_thriftstore" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full flex items-center justify-center gap-2 mt-4">
                        <Instagram size={20} /> DM US ON INSTAGRAM
                    </a>
                </form>

                {/* Info & FAQ */}
                <div>
                    <div className="mb-12 space-y-6">
                        <div className="flex items-center gap-4 text-white hover:text-accent transition-colors">
                            <div className="w-12 h-12 bg-surface border border-border flex items-center justify-center">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-display text-xl">EMAIL US</h3>
                                <p className="font-mono text-secondaryText text-sm">hello@699thrift.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-white hover:text-accent transition-colors">
                            <div className="w-12 h-12 bg-surface border border-border flex items-center justify-center">
                                <Smartphone size={24} />
                            </div>
                            <div>
                                <h3 className="font-display text-xl">WHATSAPP</h3>
                                <p className="font-mono text-secondaryText text-sm">+91 98765 43210</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-display text-white mb-6">FAQ</h2>
                    <div className="space-y-4">
                        {['How do I track my order?', 'Do you ship internationally?', 'What is your return policy?', 'Are all items authentic vintage?'].map((q, i) => (
                            <div key={i} className="border border-border bg-surfaceLight">
                                <button className="w-full flex justify-between items-center p-4 text-left text-white hover:text-accent transition-colors group">
                                    <span className="font-mono text-sm">{q}</span>
                                    <Plus size={16} className="text-secondaryText group-hover:rotate-45 transition-transform duration-300" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
