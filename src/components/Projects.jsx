import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { AkatsukiCloud } from './Icons';

const Projects = () => {
    const projects = [
        {
            title: "Portfolio Website",
            description: "A premium, high-performance personal portfolio built with React and Tailwind CSS. Features a custom Akatsuki-inspired aesthetic with deep red and black themes, glassmorphism effects, and smooth Framer Motion animations. Includes a fully responsive design, interactive elements, and a seamless looping background for an immersive user experience.",
            tags: ["React", "Tailwind CSS", "Framer Motion", "Vite", "Responsive Design"],
            link: "#",
            github: "https://github.com/Bh4vesh19",
            image: "bg-gradient-to-br from-gray-900 to-black"
        },
        {
            title: "Cyber Neon HUD Portfolio",
            description: "A futuristic, sci-fi inspired portfolio featuring a Cyber Neon HUD (Heads-Up Display) interface. Implements advanced CSS animations, glowing neon effects, and a high-tech visual style to create an immersive cyberpunk experience.",
            tags: ["React", "Tailwind CSS", "Vite", "Cyberpunk UI", "Neon Effects"],
            link: "https://bh4vesh19.github.io/Porttfolio/",
            github: "https://github.com/Bh4vesh19/Porttfolio",
            image: "bg-gradient-to-br from-cyan-900 to-blue-900"
        }
    ];

    return (
        <section id="projects" className="py-12 md:py-20 px-4 relative bg-black/5">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
                        <Layers className="text-akatsuki-red" />
                        Featured <span className="text-akatsuki-red neon-text">Projects</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="group relative rounded-3xl overflow-hidden glass-card hover:border-akatsuki-red/50 transition-all duration-500"
                        >
                            {/* Project Image Placeholder */}
                            <div className={`h-48 md:h-64 ${project.image} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                <AkatsukiCloud className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-20 text-white/5 group-hover:text-akatsuki-red/20 transition-all duration-500 scale-150 group-hover:scale-100" />
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-akatsuki-red transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-6 line-clamp-3">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-akatsuki-red transition-colors">
                                        <Github size={20} /> Code
                                    </a>
                                    {project.link !== "#" && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-akatsuki-red transition-colors">
                                            <ExternalLink size={20} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Neon Aura Effect */}
                            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 shadow-[inset_0_0_40px_rgba(230,0,0,0.2)]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
