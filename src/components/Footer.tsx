import React from 'react';
import { type ThemeProps } from '../types';
import { FOOTER_SOCIALS } from '../data/socials';

const Footer: React.FC<ThemeProps> = ({ isDark }): React.JSX.Element => {
    return (
        <footer
            className={`border-t px-6 md:px-16 py-7 flex items-center justify-between flex-wrap gap-4 ${
                isDark ? 'border-indigo-500/10' : 'border-indigo-500/8'
            }`}
        >
            <p
                className={`text-[0.68rem] tracking-wider ${isDark ? 'text-white/30' : 'text-slate-800/30'}`}
                style={{ fontFamily: 'DM Mono, monospace' }}
            >
                © {new Date().getFullYear()} Miracle Igboanusi. All rights reserved.
            </p>

            <div className="flex gap-5 items-center">
                {FOOTER_SOCIALS.map((s) => {
                    const Icon = s.icon;
                    return (
                        <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={s.label}
                        className={`flex items-center gap-1.5 no-underline text-[0.75rem] transition-opacity duration-200 hover:opacity-100 ${
                            isDark ? 'text-white/30' : 'text-slate-800/30'
                        }`}
                        style={{ fontFamily: 'DM Mono, monospace' }}
                        >
                        <Icon className="w-4 h-4" />
                        {s.label}
                        </a>
                    );
                })}
            </div>
        </footer>
    );
};

export default Footer;
