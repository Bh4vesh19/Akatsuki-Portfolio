import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { AkatsukiCloud } from './Icons';
import { database } from '../firebase';
import { ref, push, serverTimestamp } from 'firebase/database';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        let isTimedOut = false;

        // Safety timeout: Stop loading after 10 seconds
        const timeoutId = setTimeout(() => {
            isTimedOut = true;
            setStatus('error');
        }, 10000);

        try {
            await push(ref(database, 'messages'), {
                ...formData,
                timestamp: serverTimestamp()
            });

            if (!isTimedOut) {
                clearTimeout(timeoutId);
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 3000);
            }
        } catch (error) {
            if (!isTimedOut) {
                clearTimeout(timeoutId);
                console.error("Error adding document: ", error);
                setStatus('error');
            }
        }
    };

    return (
        <section id="contact" className="py-12 md:py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Let's <span className="text-akatsuki-red neon-text">Connect</span></h2>
                            <div className="absolute -top-12 -right-12 opacity-30 animate-pulse-slow">
                                <AkatsukiCloud className="w-48 h-28 text-akatsuki-red drop-shadow-[0_0_10px_rgba(230,0,0,0.5)]" />
                            </div>
                        </div>
                        <p className="text-gray-400 mb-8 md:mb-10 text-base md:text-lg relative z-10 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-4 md:space-y-6">
                            {[
                                { icon: Mail, text: "bhaveshsutharb830@gmail.com", href: "mailto:bhaveshsutharb830@gmail.com", break: true },
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
                                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl glass hover:bg-white/5 transition-colors group"
                                >
                                    <div className="p-2 md:p-3 rounded-full bg-akatsuki-red/10 text-akatsuki-red group-hover:bg-akatsuki-red group-hover:text-white transition-all shrink-0">
                                        <item.icon size={20} className="md:w-6 md:h-6" />
                                    </div>
                                    <span className={`text-gray-300 group-hover:text-white transition-colors text-sm md:text-base ${item.break ? 'break-all' : ''}`}>{item.text}</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-5 md:p-8 rounded-3xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'submitting' || status === 'success'}
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-akatsuki-red focus:shadow-[0_0_15px_rgba(230,0,0,0.3)] transition-all disabled:opacity-50"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'submitting' || status === 'success'}
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-akatsuki-red focus:shadow-[0_0_15px_rgba(230,0,0,0.3)] transition-all disabled:opacity-50"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'submitting' || status === 'success'}
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-akatsuki-red focus:shadow-[0_0_15px_rgba(230,0,0,0.3)] transition-all resize-none disabled:opacity-50"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting' || status === 'success'}
                                className={`w-full py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all transform duration-300 min-h-[60px] ${status === 'success'
                                    ? 'bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-105'
                                    : status === 'error'
                                        ? 'bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.4)]'
                                        : 'bg-akatsuki-red hover:bg-red-600 shadow-[0_0_20px_rgba(230,0,0,0.4)] hover:shadow-[0_0_30px_rgba(230,0,0,0.6)] hover:-translate-y-1'
                                    } disabled:cursor-not-allowed`}
                            >
                                {status === 'submitting' ? (
                                    <Loader2 size={24} className="animate-spin" />
                                ) : status === 'success' ? (
                                    <>
                                        <CheckCircle2 size={20} /> Message Sent!
                                    </>
                                ) : status === 'error' ? (
                                    <>
                                        <AlertCircle size={20} /> Failed.
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>

                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center"
                                >
                                    <p className="text-red-400 text-sm mb-2">Connection failed.</p>
                                    <a
                                        href={`mailto:bhaveshsutharb830@gmail.com?subject=Portfolio Contact: ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`}
                                        className="text-white underline hover:text-akatsuki-red transition-colors text-sm"
                                    >
                                        Click here to send via Email app instead
                                    </a>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
