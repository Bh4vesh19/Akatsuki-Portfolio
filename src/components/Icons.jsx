import React from 'react';

export const AkatsukiCloud = ({ className = "w-12 h-8" }) => (
    <img
        src="/cloud.png"
        alt="Akatsuki Cloud"
        className={`${className} object-contain drop-shadow-[0_0_8px_rgba(230,0,0,0.6)]`}
    />
);

export const Sharingan = ({ className = "w-10 h-10" }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#E60000" stroke="black" strokeWidth="2" />
        <circle cx="50" cy="50" r="15" fill="black" />
        <circle cx="50" cy="50" r="25" fill="none" stroke="black" strokeWidth="1" />
        {/* Tomoe 1 */}
        <circle cx="50" cy="20" r="6" fill="black" />
        <path d="M50,20 Q60,10 50,5" fill="none" stroke="black" strokeWidth="2" />
        {/* Tomoe 2 */}
        <circle cx="75" cy="65" r="6" fill="black" />
        {/* Tomoe 3 */}
        <circle cx="25" cy="65" r="6" fill="black" />
    </svg>
);

export const Kunai = ({ className = "w-6 h-12" }) => (
    <svg viewBox="0 0 30 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M15,100 L5,30 L10,30 L10,10 L5,10 L15,0 L25,10 L20,10 L20,30 L25,30 Z" fill="#333" stroke="#666" strokeWidth="1" />
        <circle cx="15" cy="8" r="3" fill="none" stroke="#666" strokeWidth="1" />
    </svg>
);
