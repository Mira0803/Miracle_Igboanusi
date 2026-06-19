import React, { useState, useEffect } from 'react';
import type { ThemeProps, MousePosition } from '../types';
import { HERO_ROLES, HERO_STATS} from '../data/constaints';
import { SOCIALS } from '../data/socials';

const Hero: React.FC<ThemeProps> = ({ isDark }): React.JSX.Element => {
    const [roleIndex, setRoleIndex] = useState<number>(0);
    const [mouse, setMouse]         = useState<MousePosition>({ x: 0, y: 0 });

    useEffect((): (() => void) => {
        const id = setInterval((): void => {
        setRoleIndex((i) => (i + 1) % HERO_ROLES.length);
        }, 3000);
        return (): void => clearInterval(id);
    }, []);

    useEffect((): (() => void) => {
        const onMove = (e: MouseEvent): void => {
        setMouse({ x: (e.clientX / window.innerWidth) - 0.5, y: (e.clientY / window.innerHeight) - 0.5 });
        };
        window.addEventListener('mousemove', onMove);
        return (): void => window.removeEventListener('mousemove', onMove);
    }, []);

    const blobs = [
        { color: 'rgba(99,102,241,0.18)',  size: 600, left: '5%',  top: '15%', mx: -60, my: -40, dur: 8  },
        { color: 'rgba(139,92,246,0.14)',  size: 480, left: '60%', top: '5%',  mx: 40,  my: 60,  dur: 10 },
        { color: 'rgba(6,182,212,0.12)',   size: 420, left: '45%', top: '58%', mx: -30, my: -50, dur: 12 },
    ];

    return (
        <section id="hero" className="min-h-screen relative flex items-center overflow-hidden px-6 md:px-16">

            {/* Background blobs */}
            {blobs.map((b, i) => (
                <div
                key={i}
                className="absolute rounded-full pointer-events-none"
                style={{
                    width: b.size, height: b.size,
                    background: `radial-gradient(circle,${b.color},transparent 70%)`,
                    left: b.left, top: b.top,
                    transform: `translate(${mouse.x * b.mx}px,${mouse.y * b.my}px)`,
                    transition: 'transform 0.9s ease',
                    animation: `blobFloat ${b.dur}s ease-in-out infinite alternate`,
                }}
                />
            ))}

            {/* Dot-grid overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                backgroundImage: isDark
                    ? 'radial-gradient(rgba(99,102,241,0.14) 1px,transparent 1px)'
                    : 'radial-gradient(rgba(99,102,241,0.09) 1px,transparent 1px)',
                backgroundSize: '32px 32px',
                }}
            />

            {/* Left sidebar social icons */}
            <div className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-10">
                <span
                className={`text-[0.6rem] tracking-[0.14em] mb-1 ${isDark ? 'text-white/40' : 'text-slate-400'}`}
                style={{ fontFamily: 'DM Mono, monospace', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                    Follow Me
                </span>
                <div className="w-px h-7 bg-linear-to-b from-transparent to-indigo-400/25" />
                {SOCIALS.map((s) => {
                    const Icon = s.icon;
                    return (
                        <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={s.label}
                        className={`w-9 h-9 rounded-lg flex items-center justify-center no-underline border border-indigo-400/20 transition-all duration-200 hover:scale-110 hover:bg-indigo-500/15 hover:border-indigo-400/40 ${
                            isDark ? 'bg-white/4 text-white/40' : 'bg-black/3 text-slate-400'
                        }`}
                        style={{ backdropFilter: 'blur(10px)' }}
                        >
                        <Icon className="w-4 h-4" />
                        </a>
                    );
        })}
                <div className="w-px h-7 bg-linear-to-b from-indigo-400/25 to-transparent" />
            </div>

            {/* Main layout */}
            <div className="flex items-center justify-between gap-12 w-full max-w-300 mx-auto pt-17">

                {/* ── Left text ── */}
                <div className="flex-1 min-w-0" style={{ animation: 'heroEntrance 0.9s ease both' }}>

                {/* Mono label */}
                <div
                    className="flex items-center gap-3 text-indigo-400 text-[0.72rem] tracking-[0.14em] mb-6"
                    style={{ fontFamily: 'DM Mono, monospace' }}
                >
                    <span className="w-6 h-px bg-indigo-400 inline-block" />
                    Miracle Igboanusi
                </div>

                {/* Animated role heading */}
                <h1
                    className={`font-black leading-tight tracking-tight mb-1 text-4xl md:text-5xl xl:text-6xl ${isDark ? 'text-white' : 'text-slate-900'}`}
                    style={{ fontFamily: 'Syne, sans-serif' }}
                >
                    <span
                    key={roleIndex}
                    className="inline-block"
                    style={{ animation: 'heroEntrance 0.5s ease both' }}
                    >
                    {HERO_ROLES[roleIndex]}
                    </span>
                    <br />
                    <span
                    style={{
                        background: 'linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                    >
                    & Web Designer.
                    </span>
                </h1>

                <p className={`text-base leading-loose max-w-115 mt-6 mb-10 ${isDark ? 'text-white/50' : 'text-slate-500'}`}>
                    Based in Lagos, Nigeria. I craft dynamic, responsive web experiences
                    with React and TypeScript, blending technical precision with a unique
                    perspective from GIS data analytics.
                </p>

                {/* Stats */}
                <div className="flex gap-10 mb-10 flex-wrap">
                    {HERO_STATS.map((s) => (
                    <div key={s.label}>
                        <div
                            className="font-extrabold text-4xl leading-none"
                            style={{
                                fontFamily: 'Syne, sans-serif',
                                background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                        {s.value}
                        </div>

                        <div
                            className={`text-[0.68rem] tracking-wider mt-1 ${isDark ? 'text-white/40' : 'text-slate-400'}`}
                            style={{ fontFamily: 'DM Mono, monospace' }}
                        >
                            {s.label}
                        </div>
                    </div>
                    ))}
                </div>

                {/* CTAs */}
                <div className="flex gap-4 flex-wrap">
                    <a
                    href="#projects"
                        className="px-8 py-3 rounded-full text-white font-semibold text-sm no-underline transition-all duration-200 hover:-translate-y-0.5"
                        style={{
                            background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                            boxShadow: '0 4px 28px rgba(99,102,241,0.4)',
                        }}
                    >
                        View Projects
                    </a>

                    <a
                        href="#contact"
                        className={`px-8 py-3 rounded-full font-semibold text-sm no-underline border border-indigo-400/20 transition-all duration-200 hover:bg-indigo-500/10 hover:border-indigo-400/40 ${
                            isDark ? 'text-white bg-white/4' : 'text-slate-800 bg-black/3'
                        }`}
                        style={{ backdropFilter: 'blur(10px)' }}
                    >
                        Contact Me
                    </a>

                </div>
            </div>

                {/* ── Right: Avatar card ── */}
            <div
                className="hidden lg:block flex-none relative"
                style={{ animation: 'heroEntrance 1.1s 0.2s ease both' }}
            >
                {/* Halo glow */}
                <div
                    className="absolute -inset-6 rounded-[38px] opacity-45 pointer-events-none"
                    style={{
                    background: 'linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4,#6366f1)',
                    backgroundSize: '300% 300%',
                    animation: 'gradientSpin 6s linear infinite',
                    filter: 'blur(30px)',
                    }}
                />

                {/* Animated border wrapper */}
                <div
                    className="relative p-0.75 rounded-[28px] z-10"
                    style={{
                    background: 'linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4,#6366f1)',
                    backgroundSize: '300% 300%',
                    animation: 'gradientSpin 4s linear infinite',
                    }}
                >
                    {/* Card */}
                    <div
                    className="w-67.5 h-82.5 rounded-[26px] relative overflow-hidden flex items-end justify-center"
                    style={{
                        background: isDark
                        ? 'linear-gradient(160deg,#13102a 0%,#1a1040 100%)'
                        : 'linear-gradient(160deg,#f0eeff 0%,#e8e0ff 100%)',
                    }}
                    >
                        {/* Profile image */}
                            <img src="./profilepofolio.jfif" alt="mira-profile" className="w-full h-full object-cover" />
                
                    </div>
                </div>

                {/* Sparkle dots */}
                <div
                    className="absolute w-2.5 h-2.5 rounded-full z-5"
                    style={{ background: '#8b5cf6', top: '-10px', right: '18px', boxShadow: '0 0 12px #8b5cf6', animation: 'sparkle 2s ease-in-out infinite' }}
                />
                <div
                    className="absolute w-2 h-2 rounded-full z-5"
                    style={{ background: '#06b6d4', bottom: '18px', left: '-10px', boxShadow: '0 0 12px #06b6d4', animation: 'sparkle 2.5s ease-in-out infinite' }}
                />

                <span 
                    className="absolute text-violet-400/50 text-base z-5" 
                    style={{ bottom: '8px', right: '-18px' }}
                >
                    ✦
                </span>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <div className="scroll-line-track" />

                <span
                    className={`text-[0.58rem] tracking-[0.14em] ${isDark ? 'text-white/40' : 'text-slate-400'}`}
                    style={{ fontFamily: 'DM Mono, monospace' }}
                >
                    scroll
                </span>
            </div>
        </section>
    );
};

export default Hero;
