import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Research from './components/Research';
import News from './components/News';
import Media from './components/Media';
import Team from './components/Team';
import Mentoring from './components/Mentoring';
import TraineeVoices from './components/TraineeVoices';
import Alumni from './components/Alumni';
import Publications from './components/Publications';
import Funding from './components/Funding';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NextHero from './design/NextHero';
import ScientificField from './design/ScientificField';
import HeroBackdrop from './design/HeroBackdrop';
import NextResearch from './design/NextResearch';
import ThemeSwitch from './design/ThemeSwitch';
import { resolveDesign, resolveTheme } from './design/version';
import './design/next.css';

const App: React.FC = () => {
  const theme = resolveTheme(window.location.search);
  const version = resolveDesign(window.location.search);
  return (
    <div className={`min-h-screen bg-slate-50 flex flex-col font-sans ${version === 'next' ? `design-next theme-${theme}` : ''}`}>
      {version === 'next' && <ScientificField theme={theme} />}
      {version === 'next' && <HeroBackdrop theme={theme} />}
      <Navbar />
      <main className="flex-grow">
        {version === 'next' ? <NextHero /> : <Hero />}
        <Bio />
        {version === 'next' ? <NextResearch /> : <Research />}
        <News />
        <Media />
        <TraineeVoices />
        <Mentoring />
        <Team />
        <Alumni />
        <Publications />
        <Funding />
        <Contact />
      </main>
      <Footer pinnedReveal={version === 'next'} />
      {version === 'next' && <ThemeSwitch theme={theme} />}
    </div>
  );
};

export default App;
