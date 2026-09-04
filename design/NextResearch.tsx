import React, { useRef, useState } from 'react';
import { PROJECTS, RESEARCH_COPY } from '../constants';

export default function NextResearch() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  return (
    <section id="research" className="next-research">
      <header><p className="next-eyebrow">Explore our science</p><h2>{RESEARCH_COPY.title}</h2><p>{RESEARCH_COPY.description}</p></header>
      <div role="tablist" aria-label="Research projects" className="next-research-tabs">
        {PROJECTS.map((project, index) => (
          <button key={project.id} ref={el => { tabs.current[index] = el; }} id={`tab-${project.id}`} role="tab" aria-selected={selected === index} aria-controls={`panel-${project.id}`} tabIndex={selected === index ? 0 : -1}
            onClick={() => setSelected(index)} onKeyDown={event => {
              let next: number;
              if (event.key === 'ArrowRight') next = (index + 1) % PROJECTS.length;
              else if (event.key === 'ArrowLeft') next = (index - 1 + PROJECTS.length) % PROJECTS.length;
              else if (event.key === 'Home') next = 0;
              else if (event.key === 'End') next = PROJECTS.length - 1;
              else return;
              event.preventDefault(); setSelected(next); tabs.current[next]?.focus();
            }}><span aria-hidden="true">0{index + 1}</span>{project.title}</button>
        ))}
      </div>
      {PROJECTS.map((project, index) => (
        <div key={project.id} id={`panel-${project.id}`} role="tabpanel" aria-labelledby={`tab-${project.id}`} tabIndex={0} hidden={selected !== index} className="next-research-panel">
          <div><h3>{project.title}</h3><p>{project.description}</p>{project.linkUrl && <a href={project.linkUrl} target="_blank" rel="noreferrer">Read the research <span aria-hidden="true">↗</span></a>}</div>
          {project.image && <img src={project.image} alt={project.title} loading="lazy" />}
        </div>
      ))}
    </section>
  );
}
