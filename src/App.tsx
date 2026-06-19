import React, { useState, useEffect } from 'react';
import NavBar   from './components/NavBar';
import Hero     from './components/Hero';
import Projects from './components/Projects';
import About    from './components/About';
import Contact  from './components/Contact';
import Footer   from './components/Footer';

const App: React.FC = (): React.JSX.Element => {
  const [isDark, setIsDark] = useState<boolean>(true);

  const toggleTheme = (): void => {
    setIsDark((prev) => !prev);
  };

  // Keep <html> background in sync so there's no flash on scroll edges
  useEffect((): void => {
    document.documentElement.style.background = isDark ? '#080810' : '#f8fafc';
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  }, [isDark]);

  return (
    <>

      <div
        data-theme={isDark ? 'dark' : 'light'}
        style={{
          background: isDark
            ? 'linear-gradient(160deg,#080810 0%,#0d0b1a 50%,#080810 100%)'
            : 'linear-gradient(160deg,#f8fafc 0%,#f0f4ff 50%,#f8fafc 100%)',
          minHeight: '100vh',
          color: isDark ? '#e2e8f0' : '#1e293b',
          transition: 'background 0.5s ease, color 0.3s ease',
        }}
      >
        <NavBar   isDark={isDark} onToggleTheme={toggleTheme} />
        <Hero     isDark={isDark} />
        <Projects isDark={isDark} />
        <About    isDark={isDark} />
        <Contact  isDark={isDark} />
        <Footer   isDark={isDark} />
      </div>
    </>
  );
};

export default App;