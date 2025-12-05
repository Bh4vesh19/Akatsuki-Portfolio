
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TypewriterParagraph = ({ text, speed = 15, className = "" }) => {
    const [displayedText, setDisplayedText] = useState("");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        if (isInView && !hasStarted) {
            setHasStarted(true);
        }
    }, [isInView]);

    useEffect(() => {
        if (!hasStarted) return;

        let currentIndex = 0;
        const intervalId = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [hasStarted, text, speed]);

    return (
        <p ref={ref} className={`${className} min-h-[1.5em] inline-block`}>
            {displayedText}
            {displayedText.length < text.length && (
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-[2px] h-[1em] bg-akatsuki-red ml-1 align-middle"
                />
            )}
        </p>
    );
};

export default TypewriterParagraph;
