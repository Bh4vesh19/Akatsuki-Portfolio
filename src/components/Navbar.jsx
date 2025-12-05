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
                    <a href="#home" className="flex items-center gap-2 group">
                        <AkatsukiCloud className="w-10 h-6 text-akatsuki-red group-hover:drop-shadow-[0_0_8px_rgba(230,0,0,0.8)] transition-all duration-300" />
                        <span className="text-white font-bold text-lg tracking-wider group-hover:text-akatsuki-red transition-colors">BHAVESH</span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
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
                            href="#contact"
                            className="px-5 py-2 rounded-full bg-gradient-to-r from-akatsuki-red to-red-600 text-white text-sm font-medium hover:shadow-[0_0_15px_rgba(220,20,60,0.5)] transition-all duration-300 transform hover:scale-105"
                        >
                            Contact Me
                        </a>
                    </div>

                    {/* Mobile Menu Button & Contact Icon */}
                    <div className="flex items-center gap-4 md:hidden">
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col items-center gap-8"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl text-white font-light hover:text-akatsuki-red hover:scale-110 transition-all duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl text-akatsuki-red font-semibold hover:scale-110 transition-all duration-300"
                        >
                            Contact Me
                        </a>

                        <div className="mt-8 flex flex-col items-center gap-4 text-gray-400">
                            <a href="mailto:bhaveshsutharb830@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Mail size={18} /> bhaveshsutharb830@gmail.com
                            </a>
                            <a href="tel:+917715915731" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Phone size={18} /> +91 7715915731
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
