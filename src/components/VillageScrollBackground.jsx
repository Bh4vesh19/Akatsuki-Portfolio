
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const VillageScrollBackground = () => {
    const { scrollYProgress } = useScroll();
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            setIsMobile(true);
        }
    }, []);

    // Parallax transforms - symbols move at different speeds relative to scroll
    // Reduced intensity for mobile/performance
    const y1 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -30 : -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -60 : -200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 30 : 100]);
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -45]);

    // Configuration for the symbols - Use simpler transforms for mobile
    const symbols = [
        {
            src: "/village-signs/leaf.png",
            alt: "Hidden Leaf",
            top: "10%",
            left: "5%",
            className: "w-16 md:w-64 lg:w-80", // Smaller on mobile
            y: y1,
            rotate: rotate1
        },
        {
            src: "/village-signs/sand.png",
            alt: "Hidden Sand",
            top: "25%",
            right: "5%",
            className: "w-14 md:w-56 lg:w-72",
            y: y2,
            rotate: rotate2
        },
        {
            src: "/village-signs/stone.png",
            alt: "Hidden Stone",
            top: "40%",
            left: "10%",
            className: "w-14 md:w-48 lg:w-64",
            y: y3,
            rotate: rotate1
        },
        // Reduce items for mobile to improve low-end performance
        ...(!isMobile ? [
            {
                src: "/village-signs/hot water.png",
                alt: "Hidden Hot Water",
                top: "55%",
                right: "8%",
                className: "w-20 md:w-52 lg:w-68",
                y: y1,
                rotate: rotate2
            },
            {
                src: "/village-signs/rain.png",
                alt: "Hidden Rain",
                top: "70%",
                left: "8%",
                className: "w-20 md:w-56 lg:w-72",
                y: y2,
                rotate: rotate1
            },
            {
                src: "/village-signs/waterfall.png",
                alt: "Hidden Waterfall",
                top: "85%",
                right: "5%",
                className: "w-24 md:w-64 lg:w-80",
                y: y3,
                rotate: rotate2
            }
        ] : [])
    ];

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
                        opacity: 0.05,
                        willChange: 'transform' // Hardware acceleration hint
                    }}
                    className={`select-none ${symbol.className}`}
                    // Simplified initial animation for mobile
                    initial={isMobile ? { opacity: 0.1 } : { opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }} // Once true for better performance
                    transition={{ duration: 1 }}
                >
                    <img
                        src={`${import.meta.env.BASE_URL}${symbol.src.replace(/^\//, '')}`}
                        alt={symbol.alt}
                        className="w-full h-auto filter grayscale invert drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                        loading="lazy" // Lazy load images
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default VillageScrollBackground;
