import React from 'react';

const Settings = () => {
    return (
        <div className="animate-in fade-in duration-300 max-w-xl">
            <h2 className="text-2xl font-display text-white mb-8">SETTINGS</h2>

            <div className="space-y-8">
                {/* Password */}
                <section>
                    <h3 className="text-white font-display text-lg mb-4 text-accent">CHANGE PASSWORD</h3>
                    <form className="space-y-4">
                        <input type="password" placeholder="CURRENT PASSWORD" className="input-field" />
                        <input type="password" placeholder="NEW PASSWORD" className="input-field" />
                        <input type="password" placeholder="CONFIRM NEW PASSWORD" className="input-field" />
                        <button className="btn-secondary w-full">UPDATE PASSWORD</button>
                    </form>
                </section>

                <div className="w-full h-px bg-border"></div>

                {/* Notifications */}
                <section>
                    <h3 className="text-white font-display text-lg mb-4 text-accent">NOTIFICATIONS</h3>
                    <div className="space-y-4">
                        <label className="flex items-center justify-between cursor-pointer group">
                            <span className="text-secondaryText font-mono text-sm group-hover:text-white transition-colors">Order Updates</span>
                            <input type="checkbox" defaultChecked className="accent-accent w-5 h-5 bg-surfaceLight border-border" />
                        </label>
                        <label className="flex items-center justify-between cursor-pointer group">
                            <span className="text-secondaryText font-mono text-sm group-hover:text-white transition-colors">New Drops & Promos</span>
                            <input type="checkbox" defaultChecked className="accent-accent w-5 h-5" />
                        </label>
                    </div>
                </section>

                <div className="w-full h-px bg-border"></div>

                {/* Danger Zone */}
                <section>
                    <h3 className="text-red-500 font-display text-lg mb-4">DANGER ZONE</h3>
                    <button className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors w-full py-3 font-display tracking-wider">
                        DELETE ACCOUNT
                    </button>
                </section>
            </div>
        </div>
    );
};

export default Settings;
