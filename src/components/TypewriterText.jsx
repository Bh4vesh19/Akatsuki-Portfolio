import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ texts, className = "" }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentFullText = texts[currentTextIndex];

            if (isDeleting) {
                setDisplayedText(prev => prev.slice(0, -1));
                if (displayedText === "") {
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
                }
            } else {
                setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
                if (displayedText === currentFullText) {
                    setTimeout(() => setIsDeleting(true), 2000); // Wait before deleting
                    return;
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentTextIndex, texts]);

    return (
        <span className={`${className} inline-block min-h-[1.5em]`}>
            {displayedText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[2px] h-[1em] bg-akatsuki-red ml-1 align-middle"
            />
        </span>
    );
};

export default TypewriterText;
