import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/background.png')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-void/80 via-void/50 to-void"></div>
            </div>

            {/* Floating Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <h2 className="text-secondary text-sm md:text-lg font-light tracking-[0.3em] mb-4 uppercase drop-shadow-md">
                        Master the Quran from Home
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent via-white to-accent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        RISE WITH <br /> KNOWLEDGE
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-8 text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed"
                >
                    With Qualified Ustazhs & Antigravity Learning
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 flex flex-col sm:flex-row justify-center gap-6 items-center"
                >
                    <a href="#contact" className="px-8 py-3 bg-secondary text-void font-bold rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] min-w-[180px] text-center">
                        Start Learning
                    </a>
                    <a href="#curriculum" className="px-8 py-3 border border-glass-border bg-glass text-white rounded-full hover:bg-glass/20 hover:border-white/50 transition-all backdrop-blur-sm min-w-[180px] text-center">
                        View Curriculum
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
