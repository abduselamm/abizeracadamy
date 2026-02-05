import React from 'react';
import { motion } from 'framer-motion';
import { Award, UserCheck, Star, Book } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-secondary text-sm uppercase tracking-widest mb-2">About Us</h2>
                        <h3 className="text-4xl font-bold text-white mb-6">
                            Guiding You on the Path of <span className="text-secondary">Light</span>
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-6 font-light">
                            Abizer Online Quran Academy is dedicated to connecting students with the Holy Book through highly qualified and experienced Ustazhs. We believe in learning that transcends physical boundaries, offering a spiritual journey from the comfort of your home.
                        </p>
                        <div className="flex gap-4">
                            <div className="p-4 bg-glass border border-glass-border rounded-xl flex-1 backdrop-blur-md">
                                <UserCheck className="text-secondary mb-2" />
                                <h4 className="font-semibold text-white">Qualified Ustazhs</h4>
                                <p className="text-xs text-gray-400 mt-1">Certified experts in Tajweed</p>
                            </div>
                            <div className="p-4 bg-glass border border-glass-border rounded-xl flex-1 backdrop-blur-md">
                                <Award className="text-secondary mb-2" />
                                <h4 className="font-semibold text-white">Islamic Studies Program</h4>
                                <p className="text-xs text-gray-400 mt-1">Authentic certification path</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Curriculum Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 gap-6"
                    >
                        <div id="curriculum" className="bg-gradient-to-r from-cosmic/40 to-void border border-glass-border p-8 rounded-2xl relative overflow-hidden group hover:border-secondary/30 transition-colors duration-500">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Book size={100} />
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">Tajweed</h4>
                            <p className="text-gray-300 font-light">Master the art of recitation with precise articulation and phonetic rules.</p>
                        </div>

                        <div className="bg-gradient-to-r from-cosmic/40 to-void border border-glass-border p-8 rounded-2xl relative overflow-hidden group hover:border-secondary/30 transition-colors duration-500">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Star size={100} />
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">Hifz (Memorization)</h4>
                            <p className="text-gray-300 font-light">Structured memorization programs tailored for both children and adults.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
