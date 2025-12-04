import React from 'react';
import { Github, Twitter, Instagram, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10 bg-transparent text-center relative z-10 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Bhavesh Suthar. All rights reserved.
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>Made with</span>
                    <span className="text-akatsuki-red font-bold">AKATSUKI SPIRIT</span>
                </div>

                <div className="flex items-center gap-6">
                    {[
                        { icon: Instagram, href: "https://instagram.com/bh4vesh.19" },
                        { icon: Twitter, href: "https://twitter.com/bh4vesh_19" },
                        { icon: Github, href: "https://github.com/Bh4vesh19" }
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-akatsuki-red transition-colors"
                        >
                            <social.icon size={20} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
