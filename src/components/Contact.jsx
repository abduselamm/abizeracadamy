import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative flex justify-center items-center overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-cosmic/10 to-transparent pointer-events-none"></div>

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    default: { duration: 0.8 }
                }}
                className="relative z-10 bg-glass backdrop-blur-xl border border-glass-border p-12 rounded-3xl text-center max-w-xl w-full mx-6 shadow-[0_0_50px_rgba(0,77,64,0.2)]"
            >
                <h2 className="text-3xl font-bold text-white mb-8">Start Your Journey Today</h2>

                <div className="flex flex-col gap-6">
                    <a href="tel:+251930355453" className="flex items-center justify-center gap-4 bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 transition-all group">
                        <div className="bg-secondary p-2 rounded-full text-void group-hover:scale-110 transition-transform">
                            <Phone size={20} />
                        </div>
                        <span className="text-xl font-light text-white group-hover:text-secondary transition-colors">+251 930 35 54 53</span>
                    </a>

                    <a href="https://t.me/abizer_quran_academy" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 bg-[#229ED9]/20 hover:bg-[#229ED9]/30 p-4 rounded-xl border border-[#229ED9]/30 transition-all group">
                        <div className="bg-[#229ED9] p-2 rounded-full text-white group-hover:scale-110 transition-transform">
                            <Send size={20} />
                        </div>
                        <span className="text-xl font-light text-white group-hover:text-[#229ED9] transition-colors">Join on Telegram</span>
                    </a>
                </div>
            </motion.div>
        </section>
    )
}

export default Contact;
