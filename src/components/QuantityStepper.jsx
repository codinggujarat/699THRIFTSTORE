import React from 'react';
import { Minus, Plus } from 'lucide-react';

const QuantityStepper = ({ quantity, onIncrease, onDecrease, min = 1, max = 10 }) => {
    return (
        <div className="flex items-center border border-border bg-surfaceLight">
            <button
                onClick={onDecrease}
                disabled={quantity <= min}
                className="p-2 hover:bg-surface disabled:opacity-50 disabled:cursor-not-allowed text-white transition-colors"
            >
                <Minus size={16} />
            </button>
            <span className="px-4 font-mono text-white min-w-[3ch] text-center">{quantity}</span>
            <button
                onClick={onIncrease}
                disabled={quantity >= max}
                className="p-2 hover:bg-surface disabled:opacity-50 disabled:cursor-not-allowed text-white transition-colors"
            >
                <Plus size={16} />
            </button>
        </div>
    );
};

export default QuantityStepper;
