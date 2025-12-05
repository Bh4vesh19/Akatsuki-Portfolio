import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { AkatsukiCloud } from './Icons';
import TypewriterText from './TypewriterText';
import SplitText from './SplitText';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen py-24 md:py-0 w-full overflow-hidden flex items-center justify-center">
            {/* Background Layer - Now handled globally in App.jsx */}
            <div className="absolute inset-0 z-0">
                {/* Animated Clouds Overlay */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -200, opacity: 0 }}
                            animate={{
                                x: ['100vw', '-20vw'],
                                opacity: [0, 0.8, 0]
                            }}
                            transition={{
                                duration: 20 + Math.random() * 10,
                                repeat: Infinity,
                                delay: i * 5,
                                ease: "linear"
                            }}
                            className="absolute"
                            style={{
                                top: `${10 + Math.random() * 60}%`,
                                width: `${100 + Math.random() * 100}px`,
                                height: `${60 + Math.random() * 60}px`
                            }}
                        >
                            <AkatsukiCloud className="text-akatsuki-cloud/20 w-full h-full" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16 md:mt-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="p-6 md:p-12 rounded-3xl glass-card border-none md:border md:border-white/10"
                >
                    <div className="flex flex-col items-center justify-center mb-6 gap-2">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent stroke-white tracking-wider leading-tight text-center"
                            style={{
                                fontFamily: "'Ninja Naruto', sans-serif",
                                WebkitTextStroke: "1px white"
                            }}>
                            <SplitText text="BHAVESH" className="" delay={0.2} />
                        </h1>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-akatsuki-red tracking-wider leading-tight text-center"
                            style={{ fontFamily: "'Ninja Naruto', sans-serif" }}>
                            <SplitText text="SUTHAR" className="" delay={0.4} />
                        </h1>
                    </div>

                    <div className="text-lg md:text-2xl text-gray-300 font-light mb-8 h-8 flex items-center justify-center font-inter tracking-wide">
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
                                whileHover={{ scale: 1.2, color: '#E60000' }}
                                className="text-gray-400 transition-colors p-2 glass rounded-full"
                            >
                                <social.icon size={24} />
                            </motion.a>
                        ))}
                    </div>

                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-3 bg-akatsuki-red text-white rounded-full font-medium shadow-[0_0_20px_rgba(230,0,0,0.4)] hover:shadow-[0_0_30px_rgba(230,0,0,0.6)] transition-all text-sm md:text-base"
                    >
                        View My Work <ArrowRight size={18} />
                    </motion.a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
            >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-gray-500 rounded-full animate-bounce" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
