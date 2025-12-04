import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-6">Let's <span className="text-akatsuki-red neon-text">Connect</span></h2>
                        <p className="text-gray-400 mb-10 text-lg">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Mail, text: "bhaveshsutharb830@gmail.com", href: "mailto:bhaveshsutharb830@gmail.com" },
                                { icon: Phone, text: "+91 7715915731", href: "tel:+917715915731" },
                                {
                                    icon: MapPin,
                                    text: "View Location on Map",
                                    href: "https://www.google.com/maps/search/?api=1&query=bldg+no.+b%2F18+flat+no.303+%2Csaidham+society%2Cshanti+vidya+nagari%2C+near+gcc+club+mira+road+(e)+401107",
                                    target: "_blank"
                                }
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    target={item.target}
                                    rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                                    className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/5 transition-colors group"
                                >
                                    <div className="p-3 rounded-full bg-akatsuki-red/10 text-akatsuki-red group-hover:bg-akatsuki-red group-hover:text-white transition-all">
                                        <item.icon size={24} />
                                    </div>
                                    <span className="text-gray-300 group-hover:text-white transition-colors">{item.text}</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-akatsuki-red focus:shadow-[0_0_15px_rgba(230,0,0,0.3)] transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-akatsuki-red focus:shadow-[0_0_15px_rgba(230,0,0,0.3)] transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-akatsuki-red focus:shadow-[0_0_15px_rgba(230,0,0,0.3)] transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-akatsuki-red text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-600 shadow-[0_0_20px_rgba(230,0,0,0.4)] hover:shadow-[0_0_30px_rgba(230,0,0,0.6)] transition-all transform hover:-translate-y-1"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
