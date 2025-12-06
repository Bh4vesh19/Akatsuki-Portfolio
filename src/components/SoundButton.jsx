import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const SoundButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // Initialize audio
    useEffect(() => {
        audioRef.current = new Audio(`${import.meta.env.BASE_URL}theme.mp3`);
        audioRef.current.loop = true;
        audioRef.current.volume = 0.4; // Start at 40% volume so it's not too loud

        // Cleanup
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            // Promise handling for browsers that block autoplay
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setIsPlaying(true);
                    })
                    .catch((error) => {
                        console.error("Audio playback error:", error);
                        setIsPlaying(false);
                    });
            }
        }
    };

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            onClick={togglePlay}
            className={`fixed bottom-6 right-6 z-50 p-3 rounded-full border border-white/10 backdrop-blur-md transition-all duration-300 ${isPlaying
                    ? "bg-akatsuki-red/20 text-akatsuki-red shadow-[0_0_20px_rgba(230,0,0,0.4)] animate-pulse-slow"
                    : "bg-black/50 text-gray-400 hover:text-white"
                }`}
            title={isPlaying ? "Mute Theme" : "Play Theme"}
        >
            {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}

            {/* Visual Equalizer Rings */}
            {isPlaying && (
                <>
                    <span className="absolute inset-0 rounded-full border border-akatsuki-red/30 animate-ping-slow" />
                    <span className="absolute inset-0 rounded-full border border-akatsuki-red/10 animate-ping-slower delay-300" />
                </>
            )}
        </motion.button>
    );
};

export default SoundButton;
