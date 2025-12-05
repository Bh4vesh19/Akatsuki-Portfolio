import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ setLoading }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + 1;
            });
        }, 25); // Adjust speed here

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            setLoading(false);
        }
    }, [progress, setLoading]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black" />

            {/* Naruto Running Animation Container */}
            <div className="relative w-full max-w-2xl h-64 flex flex-col justify-end pb-10 overflow-hidden">



                {/* Running Naruto */}
                <motion.div
                    className="absolute bottom-0 w-24 h-24 md:w-32 md:h-32 z-20"
                    style={{
                        left: `${progress}%`,
                        transform: 'translateX(-50%)'
                    }}
                >
                    <img
                        src={`${import.meta.env.BASE_URL}naruto_transparent.gif`}
                        alt="Naruto Running"
                        className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(255,165,0,0.5)]"
                    />
                </motion.div>

                {/* Ground Line */}
                <div className="w-full h-[2px] bg-gray-800 relative z-10">
                    <motion.div
                        className="h-full bg-akatsuki-red shadow-[0_0_15px_rgba(220,38,38,0.8)]"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Loading Text */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-akatsuki-red font-bold tracking-widest text-sm md:text-base mt-4 flex items-center gap-2"
                    style={{ fontFamily: "'Ninja Naruto', sans-serif" }}>
                    LOADING <span className="w-10 text-white" style={{ fontFamily: "sans-serif" }}>{progress}%</span>
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
