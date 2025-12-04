import React from 'react';
import { motion } from 'framer-motion';
import { Code2, FileCode, Coffee, Globe, Palette, Braces, GitBranch, Brain, BookOpen, Database } from 'lucide-react';

const Skills = () => {
    const skills = [
        { name: "Python", icon: Code2, level: "Intermediate" },
        { name: "C", icon: FileCode, level: "Intermediate" },
        { name: "Java", icon: Coffee, level: "Basic" },
        { name: "HTML", icon: Globe, level: "Advanced" },
        { name: "CSS", icon: Palette, level: "Advanced" },
        { name: "JavaScript", icon: Braces, level: "Intermediate" },
        { name: "Git", icon: GitBranch, level: "Basic" },
        { name: "Problem Solving", icon: Brain, level: "Ongoing" },
        { name: "Continuous Learning", icon: BookOpen, level: "Forever" },
    ];

    return (
        <section id="skills" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Technical <span className="text-akatsuki-red neon-text">Arsenal</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Tools and technologies I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-akatsuki-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="p-4 bg-black/40 rounded-full border border-white/5 group-hover:border-akatsuki-red/50 group-hover:shadow-[0_0_15px_rgba(230,0,0,0.3)] transition-all duration-300">
                                <skill.icon size={32} className="text-gray-300 group-hover:text-akatsuki-red transition-colors" />
                            </div>

                            <div className="text-center z-10">
                                <h3 className="text-white font-semibold mb-1">{skill.name}</h3>
                                <span className="text-xs text-gray-500 uppercase tracking-wider">{skill.level}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
