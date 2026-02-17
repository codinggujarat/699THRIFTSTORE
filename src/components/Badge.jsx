import React from 'react';

const Badge = ({ children, variant = 'default', className = '' }) => {
    const variants = {
        default: 'bg-surfaceLight text-secondaryText border-border',
        accent: 'bg-accent text-white border-accent',
        outline: 'border-white text-white bg-transparent',
        success: 'bg-success text-white border-success',
        warning: 'bg-warning text-black border-warning',
        new: 'bg-blue-600 text-white border-blue-600',
    };

    return (
        <span className={`px-2 py-1 text-xs font-mono border ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;
