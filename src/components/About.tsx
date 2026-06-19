import React from 'react';
import type { ThemeProps } from '../types/index';
import { SKILLS } from '../data/skills';
import type { Skill } from '../types';
import { useInView } from '../hooks/useInView';

const About: React.FC<ThemeProps> = ({ isDark }): React.JSX.Element => {
  const [leftRef, leftInView]   = useInView(0.15);
  const [rightRef, rightInView] = useInView(0.15);

  const muted = isDark ? 'text-white/50' : 'text-slate-500';

  const codeRows = [
    { key: 'name',      val: '"Miracle Igboanusi"',   valColor: '#a3e635' },
    { key: 'role',      val: '"Frontend Developer"',  valColor: '#a3e635' },
    { key: 'location',  val: '"Lagos, Nigeria"',      valColor: '#a3e635' },
    { key: 'stack',     val: '["React","TS","SCSS"]', valColor: '#fb923c' },
    { key: 'gis',       val: '["QGIS","ArcGIS"]',    valColor: '#fb923c' },
    { key: 'available', val: 'true',                  valColor: '#22c55e' },
  ];

  return (
    <section id="about" className="relative">
      {/* Top divider */}
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(to right,transparent,rgba(99,102,241,0.35),transparent)' }}
      />

      <div className="px-6 md:px-16 py-24 max-w-300 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: bio */}
        <div
          ref={leftRef}
          className={`transition-all duration-700 ${leftInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
        >

          <h2
            className={`font-black text-4xl md:text-5xl tracking-tight leading-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            The human behind{' '}
            <span
              style={{
                background: 'linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              the code.
            </span>
          </h2>

          <p className={`text-base leading-loose mb-4 ${muted}`}>
            I'm Miracle Igboanusi, a Frontend Developer based in Lagos, Nigeria, with
            a BSc from Nnamdi Azikiwe University. I specialise in crafting responsive,
            pixel-perfect interfaces using React, TypeScript, and modern CSS tooling.
          </p>
          <p className={`text-base leading-loose mb-8 ${muted}`}>
            My background in GIS data analysis gives me a unique analytical edge — I
            bring the same care for spatial thinking to every UI layout I design. Open
            to full-time, part-time, and freelance frontend opportunities.
          </p>

          {/* Skill pills */}
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill: Skill) => (
              <span
                key={skill.name}
                className={`text-[0.66rem] px-3 py-1.5 rounded-full border cursor-default
                  transition-all duration-200 hover:scale-105 hover:text-violet-400
                  hover:bg-indigo-500/10 hover:border-indigo-400/40 ${
                    isDark
                      ? 'bg-white/4 border-indigo-400/18 text-white/50'
                      : 'bg-white/70 border-indigo-400/18 text-slate-500'
                  }`}
                style={{ fontFamily: 'DM Mono, monospace', backdropFilter: 'blur(8px)' }}
                title={skill.category}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: code card ── */}
        <div
          ref={rightRef}
          className={`flex justify-center transition-all duration-700 delay-150 ${rightInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
        >
          <div className="relative w-full max-w-90">
            {/* Glow behind card */}
            <div
              className="absolute -inset-5 rounded-3xl pointer-events-none"
              style={{ background: 'radial-gradient(circle,rgba(99,102,241,0.18),transparent 70%)' }}
            />

            {/* Code card */}
            <div
              className={`relative rounded-2xl border border-indigo-400/18 p-7 text-[0.78rem] leading-[1.9] ${
                isDark ? 'bg-white/4' : 'bg-white/80'
              }`}
              style={{ fontFamily: 'DM Mono, monospace', backdropFilter: 'blur(20px)' }}
            >
              {/* Window dots */}
              <div className="flex gap-1.5 mb-5">
                {['#ef4444', '#f59e0b', '#22c55e'].map((c) => (
                  <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                ))}
              </div>

              {/* Code content — all in one parent div */}
              <div>
                <div>
                  <span style={{ color: '#8b5cf6' }}>const</span>{' '}
                  <span style={{ color: '#06b6d4' }}>developer</span>{' '}
                  <span className={isDark ? 'text-white/50' : 'text-slate-400'}>=</span>{' '}
                  <span className={isDark ? 'text-white' : 'text-slate-800'}>{'{'}</span>
                </div>

                {codeRows.map(({ key, val, valColor }) => (
                  <div key={key} className="pl-5">
                    <span style={{ color: '#93c5fd' }}>{key}</span>
                    <span className={isDark ? 'text-white/50' : 'text-slate-400'}>: </span>
                    <span style={{ color: valColor }}>{val}</span>
                    <span className={isDark ? 'text-white/50' : 'text-slate-400'}>,</span>
                  </div>
                ))}

                <div>
                  <span className={isDark ? 'text-white' : 'text-slate-800'}>{'}'}</span>
                  <span className={isDark ? 'text-white/50' : 'text-slate-400'}>;</span>
                </div>
              </div>
            </div>

            {/* Badge — top right */}
            <div
              className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full text-white text-[0.65rem] font-medium tracking-wider shadow-[0_4px_20px_rgba(99,102,241,0.4)]"
              style={{
                fontFamily: 'DM Mono, monospace',
                background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                animation: 'blobFloat 4s ease-in-out infinite alternate',
              }}
            >
              Open to work ✦
            </div>

            {/* Badge — bottom left */}
            <div
              className={`absolute -bottom-4 -left-4 px-3 py-1.5 rounded-full text-[0.65rem] tracking-wider border border-cyan-400/30 text-cyan-400 ${
                isDark ? 'bg-white/7' : 'bg-white/90'
              }`}
              style={{
                fontFamily: 'DM Mono, monospace',
                backdropFilter: 'blur(10px)',
                animation: 'blobFloat 5s ease-in-out infinite alternate',
              }}
            >
              Lagos 🇳🇬
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(to right,transparent,rgba(99,102,241,0.35),transparent)' }}
      />
    </section>
  );
};

export default About;