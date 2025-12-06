import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { AkatsukiCloud } from './Icons';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`fixed top-4 left-0 right-0 mx-auto z-50 w-[95%] max-w-6xl transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}
            >
                <div className={`relative px-6 py-3 rounded-full glass-panel flex items-center justify-between transition-all duration-500 ${isScrolled ? 'shadow-2xl' : 'shadow-lg'}`}>
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2 group shrink-0">
                        <AkatsukiCloud className="w-8 h-5 md:w-10 md:h-6 text-akatsuki-red group-hover:drop-shadow-[0_0_8px_rgba(230,0,0,0.8)] transition-all duration-300" />
                        <span className="text-white font-bold text-base md:text-lg tracking-wider group-hover:text-akatsuki-red transition-colors">BHAVESH</span>
                    </a>

                    {/* Desktop Links - Optimized for different screen sizes */}
                    <div className="hidden lg:flex items-center gap-4 xl:gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm text-gray-300 hover:text-white hover:shadow-[0_0_10px_rgba(230,0,0,0.6)] transition-all duration-300 px-3 py-1 rounded-full hover:bg-white/5"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href={`${import.meta.env.BASE_URL}resume%20bhavesh.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-300 hover:text-akatsuki-red font-medium transition-colors border-2 border-transparent hover:border-b-akatsuki-red/50 hover:-translate-y-0.5"
                        >
                            Resume
                        </a>
                        <a
                            href="#contact"
                            className="px-5 py-2 rounded-full bg-gradient-to-r from-akatsuki-red to-red-600 text-white text-sm font-medium hover:shadow-[0_0_15px_rgba(220,20,60,0.5)] transition-all duration-300 transform hover:scale-105"
                        >
                            Contact Me
                        </a>
                    </div>

                    {/* Intermediate/Tablet Links - Condensed version or keep hidden until lg */}
                    {/* Decided to hide on md and show hamburger for cleaner look on tablets/small laptops < 1024px */}

                    {/* Mobile Menu Button & Contact Icon (Visible on < lg) */}
                    <div className="flex items-center gap-4 lg:hidden">
                        <a href="#contact" className="text-white hover:text-akatsuki-red transition-colors">
                            <Mail size={20} />
                        </a>
                        <button
                            className="text-white hover:text-akatsuki-red transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl lg:hidden flex flex-col items-center justify-center gap-8"
                    >
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                            <AkatsukiCloud className="absolute top-10 left-10 w-96 h-96 text-akatsuki-red animate-pulse-slow blur-3xl" />
                        </div>

                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="text-3xl text-white font-light hover:text-akatsuki-red tracking-wider relative z-10"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <motion.a
                            href={`${import.meta.env.BASE_URL}resume%20bhavesh.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-3xl text-white font-light hover:text-akatsuki-red tracking-wider relative z-10"
                        >
                            Resume
                        </motion.a>

                        <motion.a
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="text-3xl text-akatsuki-red font-bold hover:scale-110 transition-all duration-300 relative z-10"
                        >
                            Contact Me
                        </motion.a>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-8 flex flex-col items-center gap-4 text-gray-500 z-10"
                        >
                            <a href="mailto:bhaveshsutharb830@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Mail size={18} /> bhaveshsutharb830@gmail.com
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
