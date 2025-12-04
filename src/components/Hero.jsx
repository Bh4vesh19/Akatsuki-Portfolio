import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { AkatsukiCloud } from './Icons';
import TypewriterText from './TypewriterText';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
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
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="p-6 md:p-12 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(230,0,0,0.15)] bg-black/10 backdrop-blur-[4px]"
                >
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        BHAVESH <span className="text-akatsuki-red neon-text">SUTHAR</span>
                    </motion.h1>

                    <div className="text-xl md:text-2xl text-gray-300 font-light mb-8 h-8">
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
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
            >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-gray-500 rounded-full animate-bounce" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
