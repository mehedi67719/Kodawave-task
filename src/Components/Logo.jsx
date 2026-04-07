import React from 'react';

const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl italic">K</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
                Koda<span className="text-blue-600">wave</span>
            </span>
        </div>
    );
};

export default Logo;