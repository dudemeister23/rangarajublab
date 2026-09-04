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
import NextResearch from './design/NextResearch';
import PreviewSwitch from './design/PreviewSwitch';
import { resolveDesign } from './design/version';
import './design/next.css';

const App: React.FC = () => {
  const version = resolveDesign(window.location.search);
  return (
    <div className={`min-h-screen bg-slate-50 flex flex-col font-sans ${version === 'next' ? 'design-next' : ''}`}>
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
      <Footer />
      <PreviewSwitch version={version} />
    </div>
  );
};

export default App;
