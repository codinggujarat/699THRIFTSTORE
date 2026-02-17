import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center container-custom text-center">
            <h1 className="text-[120px] md:text-[200px] font-display text-accent leading-none animate-pulse">404</h1>
            <h2 className="text-4xl md:text-6xl font-display text-white mb-6">PAGE DROPPED?</h2>
            <p className="text-secondaryText font-mono mb-8 max-w-md">
                The page you are looking for has either been sold out, removed, or never existed in this timeline.
            </p>
            <Link to="/" className="btn-primary">
                BACK TO HOME
            </Link>
        </div>
    );
};

export default NotFound;
