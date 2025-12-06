import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { AkatsukiCloud } from './Icons';
import TypewriterText from './TypewriterText';
import SplitText from './SplitText';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center py-20 lg:py-0">
            {/* Background Layer - Now handled globally in App.jsx */}
            <div className="absolute inset-0 z-0">
                {/* Animated Clouds Overlay - Optimized count and movement */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(4)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -200, opacity: 0 }}
                            animate={{
                                x: ['100vw', '-20vw'],
                                opacity: [0, 0.6, 0] // Slightly lower max opacity
                            }}
                            transition={{
                                duration: 25 + Math.random() * 10, // Slower for calmness
                                repeat: Infinity,
                                delay: i * 6,
                                ease: "linear"
                            }}
                            className="absolute"
                            style={{
                                top: `${15 + Math.random() * 50}%`, // Keep more central/upper
                                width: `${100 + Math.random() * 80}px`,
                                height: `${60 + Math.random() * 40}px`
                            }}
                        >
                            <AkatsukiCloud className="text-akatsuki-cloud/15 w-full h-full" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center h-full w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="p-6 md:p-10 lg:p-12 rounded-3xl glass-card border-none md:border md:border-white/10 w-full max-w-3xl mx-auto shadow-2xl backdrop-blur-xl"
                >
                    <div className="flex flex-col items-center justify-center mb-6 md:mb-8 gap-1 md:gap-3">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent stroke-white tracking-wider leading-tight text-center"
                            style={{
                                fontFamily: "'Ninja Naruto', sans-serif",
                                WebkitTextStroke: "1px white"
                            }}>
                            <SplitText text="BHAVESH" className="" delay={0.2} />
                        </h1>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-akatsuki-red tracking-wider leading-tight text-center"
                            style={{ fontFamily: "'Ninja Naruto', sans-serif" }}>
                            <SplitText text="SUTHAR" className="" delay={0.4} />
                        </h1>
                    </div>

                    <div className="text-base sm:text-lg md:text-2xl text-gray-300 font-light mb-6 md:mb-10 h-8 flex items-center justify-center font-inter tracking-wide">
                        <TypewriterText texts={["Aspiring Web Developer", "Programming Learner", "Problem Solver"]} />
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4 md:gap-6 mb-8 md:mb-10">
                        {[
                            { icon: Instagram, href: "https://instagram.com/bh4vesh.19" },
                            { icon: Twitter, href: "https://twitter.com/bh4vesh_19" },
                            { icon: Github, href: "https://github.com/Bh4vesh19" }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.15, color: '#E60000', backgroundColor: "rgba(255,255,255,0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                className="text-gray-400 transition-all p-3 glass rounded-full hover:border-akatsuki-red/50"
                            >
                                <social.icon size={22} className="md:w-6 md:h-6" />
                            </motion.a>
                        ))}
                    </div>

                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-akatsuki-red text-white rounded-full font-medium shadow-[0_0_20px_rgba(230,0,0,0.4)] hover:shadow-[0_0_30px_rgba(230,0,0,0.6)] transition-all text-sm md:text-base tracking-wide"
                    >
                        View My Work <ArrowRight size={18} />
                    </motion.a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 hidden sm:block"
            >
                <div className="w-5 h-9 md:w-6 md:h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
