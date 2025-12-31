import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Research from './components/Research';
import News from './components/News';
import Media from './components/Media';
import Team from './components/Team';
import Mentoring from './components/Mentoring';
import Alumni from './components/Alumni';
import Publications from './components/Publications';
import Funding from './components/Funding';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Bio />
        <Research />
        <News />
        <Media />
        <Mentoring />
        <Team />
        <Alumni />
        <Publications />
        <Funding />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;