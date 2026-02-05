import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, BookOpen, Globe } from 'lucide-react';

const services = [
    {
        title: "Weightless Learning",
        subtitle: "በቀላሉ፣ ባሉበት ቦታ ሆነው የሚማሩት",
        icon: <Wifi size={32} />,
        description: "Connect from anywhere in the world. Our platform removes the gravity of distance, bringing knowledge to you.",
        delay: 0.2
    },
    {
        title: "Elevated Excellence",
        subtitle: "በብቁ ኡስታዞች የሚሰጥ የላቀ ትምህርት",
        icon: <BookOpen size={32} />,
        description: "Learn from highly qualified Ustazhs who elevate your understanding of the Quran with precision and care.",
        delay: 0.4
    },
    {
        title: "Transcending Boundaries",
        subtitle: "ለህፃናትና ለአዋቂዎች፣ የትም ቦታ ቢሆኑ",
        icon: <Globe size={32} />,
        description: "Programs designed for all ages. Ascend through levels of knowledge regardless of your starting point.",
        delay: 0.6
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-void opacity-90 z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-secondary text-sm uppercase tracking-widest mb-2">Our Services</h2>
                    <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Ascending through Knowledge
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: service.delay, duration: 0.8, type: "spring" }}
                            whileHover={{ y: -15, scale: 1.02 }}
                            className="bg-glass backdrop-blur-lg border border-glass-border p-8 rounded-2xl relative overflow-hidden group hover:border-secondary/30 transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="bg-glass-border w-16 h-16 rounded-full flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                                    {service.icon}
                                </div>
                                <h4 className="text-2xl font-semibold text-white mb-2 group-hover:text-secondary transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-sm text-secondary/80 mb-4 font-light font-sans">
                                    {service.subtitle}
                                </p>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
