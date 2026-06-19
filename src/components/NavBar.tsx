import React, { useState, useEffect } from 'react';
import type { NavBarProps } from '../types';
import { NAV_LINKS } from '../data/constaints';
import { Sun, Moon } from "lucide-react";

const NavBar: React.FC<NavBarProps> = ({ isDark, onToggleTheme }): React.JSX.Element => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect((): (() => void) => {
    const onScroll = (): void => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return (): void => window.removeEventListener('scroll', onScroll);
  }, []);

  const textMuted  = isDark ? 'rgba(226,232,240,0.5)'  : 'rgba(30,41,59,0.5)';
  const textFull   = isDark ? '#e2e8f0'                 : '#1e293b';
  const navBg      = scrolled
    ? isDark ? 'rgba(8,8,16,0.88)' : 'rgba(248,250,252,0.88)'
    : 'transparent';
  const navBorder  = scrolled
    ? isDark ? 'rgba(99,102,241,0.12)' : 'rgba(99,102,241,0.1)'
    : 'transparent';

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '68px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(1.5rem,5vw,4rem)',
        background: navBg,
        borderBottom: `1px solid ${navBorder}`,
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'background 0.4s ease, border-color 0.4s ease',
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        className="font-black text-xl tracking-tight no-underline"
        style={{
          fontFamily: 'Syne, sans-serif',
          background: 'linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {'<Mira />'}
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none m-0 p-0 items-center">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="no-underline text-xs tracking-widest transition-all duration-200"
              style={{
                fontFamily: 'DM Mono, monospace',
                color: textMuted,
              }}
              onMouseEnter={(e): void => { (e.currentTarget as HTMLAnchorElement).style.color = textFull; }}
              onMouseLeave={(e): void => { (e.currentTarget as HTMLAnchorElement).style.color = textMuted; }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right controls */}
      <div className="flex items-center gap-3">
        {/* Theme toggle */}
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
          style={{
            width: '38px', height: '38px', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1rem', cursor: 'pointer',
            background: isDark ? 'rgba(99,102,241,0.12)' : 'rgba(99,102,241,0.08)',
            border: isDark ? '1px solid rgba(99,102,241,0.3)' : '1px solid rgba(99,102,241,0.2)',
            color: isDark ? '#e2e8f0' : '#1e293b',
            transition: 'all 0.3s ease',
          }}
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700" />
          )}
        </button>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={(): void => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="md:hidden"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: '1.3rem', padding: '4px',
            color: isDark ? '#e2e8f0' : '#1e293b',
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute', top: '68px', left: 0, right: 0,
            background: isDark ? 'rgba(8,8,16,0.97)' : 'rgba(248,250,252,0.97)',
            backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
            borderBottom: `1px solid ${navBorder}`,
            padding: '0.5rem 0 1rem',
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(): void => setMenuOpen(false)}
              style={{
                display: 'block', padding: '0.75rem 2rem',
                fontFamily: 'DM Mono, monospace', fontSize: '0.85rem',
                color: textMuted, textDecoration: 'none', letterSpacing: '0.04em',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;