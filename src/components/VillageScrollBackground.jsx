

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const VillageScrollBackground = () => {
    const { scrollYProgress } = useScroll();
    const [isLowSpec, setIsLowSpec] = React.useState(false);

    React.useEffect(() => {
        const checkLowSpec = () => {
            const isMobileUA = typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            const isSmallScreen = window.innerWidth < 1024; // Treat tablets and small laptops as "low spec" for layout simplification
            setIsLowSpec(isMobileUA || isSmallScreen);
        };

        checkLowSpec();
        window.addEventListener('resize', checkLowSpec);
        return () => window.removeEventListener('resize', checkLowSpec);
    }, []);

    // Parallax transforms - symbols move at different speeds relative to scroll
    // Reduced intensity for mobile/performance
    const y1 = useTransform(scrollYProgress, [0, 1], [0, isLowSpec ? -30 : -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, isLowSpec ? -60 : -200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, isLowSpec ? 30 : 100]);
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -45]);

    // Configuration for the symbols - Use simpler transforms for mobile
    const symbols = [
        {
            src: "/village-signs/leaf.png",
            alt: "Hidden Leaf",
            top: "10%",
            left: "2%", // Pushed to edge
            className: "w-16 md:w-32 lg:w-48 opacity-20", // Smaller and less obtrusive
            y: y1,
            rotate: rotate1
        },
        {
            src: "/village-signs/sand.png",
            alt: "Hidden Sand",
            top: "25%",
            right: "2%", // Pushed to edge
            className: "w-14 md:w-28 lg:w-40 opacity-20",
            y: y2,
            rotate: rotate2
        },
        {
            src: "/village-signs/stone.png",
            alt: "Hidden Stone",
            top: "40%",
            left: "3%", // Pushed to edge
            className: "w-14 md:w-24 lg:w-36 opacity-20",
            y: y3,
            rotate: rotate1
        },
        // Reduce items for low spec/mobile to improve performance
        ...(!isLowSpec ? [
            {
                src: "/village-signs/hot water.png",
                alt: "Hidden Hot Water",
                top: "55%",
                right: "4%",
                className: "w-20 md:w-28 lg:w-44 opacity-20",
                y: y1,
                rotate: rotate2
            },
            {
                src: "/village-signs/rain.png",
                alt: "Hidden Rain",
                top: "70%",
                left: "4%",
                className: "w-20 md:w-30 lg:w-48 opacity-20",
                y: y2,
                rotate: rotate1
            },
            {
                src: "/village-signs/waterfall.png",
                alt: "Hidden Waterfall",
                top: "85%",
                right: "3%",
                className: "w-24 md:w-36 lg:w-52 opacity-20",
                y: y3,
                rotate: rotate2
            }
        ] : []),
        // Add one more for balance on large screens only
        ...(!isLowSpec ? [{
            src: "/village-signs/cloud.png",
            alt: "Hidden Cloud",
            top: "15%",
            right: "15%",
            className: "w-16 md:w-24 lg:w-36 opacity-10",
            y: y3,
            rotate: rotate1
        }] : [])
    ].filter(item => item.src && item.src !== "/village-signs/cloud.png"); // Filter out the placeholder if file doesn't exist (safety)


    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full w-full">
            {symbols.map((symbol, index) => (
                <motion.div
                    key={index}
                    style={{
                        position: 'absolute',
                        top: symbol.top,
                        left: symbol.left,
                        right: symbol.right,
                        y: symbol.y,
                        rotate: symbol.rotate,
                        opacity: 0.1, // Overall low opacity
                        willChange: 'transform'
                    }}
                    className={`select-none ${symbol.className}`}
                    initial={isLowSpec ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "100px" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <img
                        src={`${import.meta.env.BASE_URL}${symbol.src.replace(/^\//, '')}`}
                        alt={symbol.alt}
                        className="w-full h-auto filter grayscale invert opacity-50" // Removed drop-shadow for performance
                        loading="lazy"
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default VillageScrollBackground;

