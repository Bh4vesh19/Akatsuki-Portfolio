import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Terminal, Database, Layout } from 'lucide-react';
import { AkatsukiCloud } from './Icons';

import TypewriterParagraph from './TypewriterParagraph';

const About = () => {
    const learningItems = [
        { icon: Terminal, text: "Strengthening programming fundamentals" },
        { icon: Code, text: "Building hands-on projects" },
        { icon: Layout, text: "Learning full-stack development concepts" },
        { icon: Database, text: "Exploring databases and backend logic" },
        { icon: Layout, text: "Practicing clean UI layout structure" },
    ];

    return (
        <section id="about" className="py-12 md:py-20 px-4 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-6 md:gap-12 items-center"
                >
                    {/* Left Column: Profile & Summary */}
                    <div className="space-y-6 md:space-y-8">
                        {/* Profile Summary Card */}
                        <div className="glass-card p-5 md:p-8 rounded-2xl relative overflow-hidden group hover:border-akatsuki-red/30 transition-colors h-full flex flex-col justify-center">

                            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-1 h-6 bg-akatsuki-red rounded-full"></span>
                                Profile Summary
                            </h3>
                            <TypewriterParagraph
                                text="I am a dedicated 2nd-year BCA student at Tilak Vidyapeth University with a strong passion for software development. My journey involves deep-diving into core programming languages like Python, C, and Java, while simultaneously exploring modern web technologies. I am actively seeking internship opportunities and planning to pursue an MCA to further specialize in full-stack development and software engineering."
                                className="text-gray-300 leading-relaxed text-sm md:text-lg"
                                speed={10}
                            />
                        </div>
                    </div>

                    {/* Right Column: About Content & Education */}
                    <div className="space-y-6 md:space-y-8">
                        <div className="glass-panel p-5 md:p-8 rounded-3xl border-l-4 border-l-akatsuki-red">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">About Me</h2>
                            <TypewriterParagraph
                                text="Hello! I'm Bhavesh Suthar, a programming enthusiast based in Mumbai. I believe in the power of code to solve real-world problems. Currently, I am focused on mastering the fundamentals of computer science and applying them through hands-on projects. Whether it's building a CLI tool in Python or designing a responsive UI with React, I enjoy every step of the creation process. My goal is to build scalable, efficient, and user-friendly applications that make a difference."
                                className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base"
                                speed={10}
                            />

                            {/* Education Card */}
                            <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center gap-4">
                                <div className="p-3 bg-akatsuki-red/20 rounded-lg text-akatsuki-red shrink-0">
                                    <BookOpen size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div className="overflow-hidden">
                                    <h4 className="text-white font-semibold truncate text-sm md:text-base">BCA – Tilak Vidyapeth University</h4>
                                    <p className="text-gray-400 text-xs md:text-sm">2nd Year Student</p>
                                </div>
                            </div>
                        </div>

                        {/* Current Learning */}
                        <div>
                            <h3 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-2 h-6 md:h-8 bg-akatsuki-red rounded-full"></span>
                                Current Learning
                            </h3>
                            <div className="grid gap-3">
                                {learningItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ x: 20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-akatsuki-red/30 transition-all"
                                    >
                                        <item.icon size={18} className="text-akatsuki-red" />
                                        <span className="text-gray-300 text-sm">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
