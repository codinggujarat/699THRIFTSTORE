import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { User, Package, MapPin, Settings, LogOut } from 'lucide-react';

const Account = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear auth logic here
        navigate('/login');
    };

    const navItems = [
        { name: 'PROFILE', path: '/account', icon: <User size={20} />, end: true },
        { name: 'ORDERS', path: '/account/orders', icon: <Package size={20} /> },
        { name: 'ADDRESSES', path: '/account/addresses', icon: <MapPin size={20} /> },
        { name: 'SETTINGS', path: '/account/settings', icon: <Settings size={20} /> },
    ];

    return (
        <div className="container-custom pt-32 pb-20 min-h-screen">
            <h1 className="text-4xl md:text-6xl font-display text-white mb-12">MY ACCOUNT</h1>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Sidebar */}
                <aside className="w-full lg:w-64 shrink-0">
                    <nav className="flex flex-col gap-2">
                        {navItems.map(item => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                end={item.end}
                                className={({ isActive }) => `flex items-center gap-3 px-4 py-3 font-display tracking-wider transition-colors ${isActive ? 'bg-accent text-white' : 'bg-surface text-secondaryText hover:text-white hover:bg-surfaceLight'}`}
                            >
                                {item.icon}
                                {item.name}
                            </NavLink>
                        ))}
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 px-4 py-3 font-display tracking-wider bg-surface text-secondaryText hover:text-red-500 hover:bg-surfaceLight transition-colors mt-8 text-left"
                        >
                            <LogOut size={20} />
                            LOGOUT
                        </button>
                    </nav>
                </aside>

                {/* Content Area */}
                <main className="flex-1 bg-surface border border-border p-8 min-h-[500px]">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Account;
