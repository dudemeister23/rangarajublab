import React from 'react';
import { Theme, THEMES } from './version';

const LABELS: Record<Theme, [string, string]> = {
  light: ['☀', 'Light'],
  dark: ['☾', 'Dark'],
};

export default function ThemeSwitch({ theme }: { theme: Theme }) {
  const choose = (next: Theme) => {
    if (next === theme) return;
    const url = new URL(window.location.href);
    url.searchParams.set('theme', next);
    // A new document lets extensions reevaluate the dark-theme opt-out.
    window.location.assign(url.href);
  };
  return (
    <div className="theme-switch" role="group" aria-label="Color theme">
      {THEMES.map(option => (
        <button key={option} type="button" aria-pressed={option === theme} onClick={() => choose(option)}>
          <span aria-hidden="true">{LABELS[option][0]}</span> {LABELS[option][1]}
        </button>
      ))}
    </div>
  );
}
