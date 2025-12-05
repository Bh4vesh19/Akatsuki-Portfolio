
import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2, FileCode, Coffee, Globe, Palette, Braces,
    GitBranch, Database, Terminal, Cpu, Layers, Command
} from 'lucide-react';

const TechMarquee = () => {
    const techs = [
        { name: "React", icon: Code2 },
        { name: "Tailwind", icon: Palette },
        { name: "Firebase", icon: Database },
        { name: "JavaScript", icon: Braces },
        { name: "Python", icon: Terminal },
        { name: "HTML5", icon: Globe },
        { name: "CSS3", icon: FileCode },
        { name: "Git", icon: GitBranch },
        { name: "Java", icon: Coffee },
        { name: "VS Code", icon: Command },
        { name: "Framer", icon: Layers },
        { name: "API", icon: Cpu },
    ];

    // Duplicate list to create seamless loop
    const marqueeItems = [...techs, ...techs, ...techs];

    return (
        <div className="w-full py-6 md:py-10 overflow-hidden relative z-10 opacity-80 hover:opacity-100 transition-opacity">
            {/* Gradient Masks for Fade Effect */}
            <div className="absolute inset-y-0 left-0 w-10 md:w-20 bg-gradient-to-r from-akatsuki-black to-transparent z-20" />
            <div className="absolute inset-y-0 right-0 w-10 md:w-20 bg-gradient-to-l from-akatsuki-black to-transparent z-20" />

            <motion.div
                className="flex w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20 // Speed of scroll
                }}
            >
                {marqueeItems.map((tech, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 md:gap-3 px-4 py-2 md:px-8 md:py-3 mx-2 border border-white/5 rounded-full bg-white/5 backdrop-blur-sm whitespace-nowrap hover:border-akatsuki-red/30 hover:bg-white/10 transition-colors cursor-default group"
                    >
                        <tech.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-akatsuki-red transition-colors" />
                        <span className="text-sm md:text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechMarquee;
