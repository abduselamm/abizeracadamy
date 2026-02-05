import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const Navigation = () => {
    return (
        <div className="fixed top-6 left-0 right-0 flex justify-center z-50 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                className="pointer-events-auto bg-glass backdrop-blur-xl border border-glass-border px-8 py-3 rounded-full flex items-center gap-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            >
                <a href="#" className="flex items-center gap-2 text-secondary font-medium tracking-wide hover:text-white transition-colors group">
                    <BookOpen size={20} className="group-hover:text-white transition-colors" />
                    <span>Abizer</span>
                </a>

                <div className="w-[1px] h-6 bg-glass-border"></div>

                <div className="flex gap-6">
                    {['Services', 'About', 'Curriculum', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-accent/80 text-sm font-light hover:text-secondary hover:shadow-[0_0_10px_rgba(212,175,55,0.3)] transition-all duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </motion.nav>
        </div>
    );
};

export default Navigation;
