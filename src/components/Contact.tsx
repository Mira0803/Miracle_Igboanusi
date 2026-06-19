import React, { useState } from 'react';
import type { ThemeProps } from '../types';
import { useInView } from '../hooks/useInView';


const Contact: React.FC<ThemeProps> = ({ isDark }): React.JSX.Element => {
    const [ref, inView] = useInView(0.2);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [sent, setSent] = useState<boolean>(false);

    const handleSubmit = (): void => {
        if (!name || !email || !message) return;
        const mailto = `mailto:miracleigboanusi@gmail.com?subject=Portfolio Enquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}`;
        window.location.href = mailto;
        setSent(true);
        setTimeout(() => setSent(false), 4000);
    };

    const inputClass = `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors duration-200 ${
        isDark
        ? 'bg-white/[0.05] border-indigo-400/20 text-white placeholder:text-white/30 focus:border-indigo-400/50'
        : 'bg-white/80 border-indigo-400/20 text-slate-800 placeholder:text-slate-400 focus:border-indigo-400/50'
    }`;

    return (
        <section id="contact" className="px-6 md:px-16 py-24">
            <div
                ref={ref}
                className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >

                <h2
                    className={`font-black text-4xl md:text-5xl tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}
                    style={{ fontFamily: 'Syne, sans-serif' }}
                >
                    Let's build something{' '}
                    <span
                        style={{
                        background: 'linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        }}
                    >
                        great.
                    </span>
                </h2>

                <p className={`text-base leading-loose mb-10 ${isDark ? 'text-white/50' : 'text-slate-500'}`}>
                    I'm open to full-time, part-time, and freelance frontend opportunities.
                    Have a project in mind? I'd love to hear about it.
                </p>

                {/* Form card */}
                <div
                className={`rounded-2xl border border-indigo-400/18 p-8 text-left ${
                    isDark ? 'bg-white/4' : 'bg-white/70'
                }`}
                style={{ backdropFilter: 'blur(20px)' }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                        <label
                            className={`block text-[0.65rem] tracking-widest mb-1.5 ${isDark ? 'text-white/40' : 'text-slate-400'}`}
                            style={{ fontFamily: 'DM Mono, monospace' }}
                        >
                            NAME
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e): void => setName(e.target.value)}
                            placeholder="Your name"
                            className={inputClass}
                        />
                        </div>
                        <div>
                        <label
                            className={`block text-[0.65rem] tracking-widest mb-1.5 ${isDark ? 'text-white/40' : 'text-slate-400'}`}
                            style={{ fontFamily: 'DM Mono, monospace' }}
                        >
                            EMAIL
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e): void => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            className={inputClass}
                        />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label
                        className={`block text-[0.65rem] tracking-widest mb-1.5 ${isDark ? 'text-white/40' : 'text-slate-400'}`}
                        style={{ fontFamily: 'DM Mono, monospace' }}
                        >
                            MESSAGE
                        </label>
                        <textarea
                        value={message}
                        onChange={(e): void => setMessage(e.target.value)}
                        placeholder="Tell me about your project..."
                        rows={4}
                        className={`${inputClass} resize-y min-h-22.5`}
                        />
                    </div>

                    <button
                        onClick={handleSubmit}
                        className={`w-full py-3.5 rounded-xl border-none cursor-pointer font-semibold text-base text-white transition-all duration-300 ${
                        sent
                            ? 'shadow-[0_4px_24px_rgba(34,197,94,0.35)]'
                            : 'shadow-[0_4px_28px_rgba(99,102,241,0.4)] hover:shadow-[0_6px_36px_rgba(99,102,241,0.55)] hover:-translate-y-0.5'
                        }`}
                        style={{
                        background: sent
                            ? 'linear-gradient(135deg,#22c55e,#16a34a)'
                            : 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                        }}
                    >
                        {sent ? 'Message sent!' : 'Send Message'}
                    </button>
                </div>

                {/* Direct email */}
                <p
                    className={`mt-6 text-[0.82rem] ${isDark ? 'text-white/30' : 'text-slate-400'}`}
                    style={{ fontFamily: 'DM Mono, monospace' }}
                >
                    Or email directly:{' '}
                    <a
                        href="mailto:miracleigboanusi@gmail.com"
                        className="text-violet-400 underline underline-offset-4"
                    >
                        miracleigboanusi@gmail.com
                    </a>
                </p>
            </div>
        </section>
    );
    };

    export default Contact;
