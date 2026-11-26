import React from 'react';

const periods = ['2025.07 – 2026.06', '2023.09 – 2025.06', '2020.01 – 2023.08', '2019.09 – 2019.12', '2019.07 – 2019.08'];

// Icon filenames correspond to the Simple Icons brand slugs.
const skills = [
  ['Frontend', [
    ['HTML', 'html5'],
    ['CSS', 'css'],
    ['JavaScript', 'javascript'],
    ['TypeScript', 'typescript'],
  ]],
  ['Frameworks', [
    ['React', 'react'],
    ['Next.js', 'nextdotjs'],
    ['Tailwind CSS', 'tailwindcss'],
    ['FastAPI', 'fastapi'],
  ]],
  ['Backend', [
    ['Python', 'python'],
    ['PostgreSQL', 'postgresql'],
  ]],
  ['Cloud', [
    ['AWS', 'amazonaws'],
    ['Firebase', 'firebase'],
  ]],
  ['Design', [
    ['Figma', 'figma'],
    ['Sketch', 'sketch'],
    ['Miro', 'miro'],
  ]],
];

export function Profile({ copy }) {
  return (
    <section className="shell about" id="about" aria-labelledby="about-title">
      <div data-scroll-reveal>
        <h2 className="display-title" id="about-title" lang="en" data-scroll-reveal>About</h2>
        <h3>{copy.profession}</h3>
        <p>{copy.biography}</p>
      </div>
      <div data-scroll-reveal>
        <h3>{copy.experience}</h3>
        <ul className="timeline">
          {periods.map((period, index) => {
            const [name, role] = copy.jobs[index];
            return (
              <li key={period}>
                <span>{period}</span>
                <div><strong>{name}</strong>{role && <p>{role}</p>}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function Stack({ copy }) {
  return (
    <section className="shell stack" id="stack" aria-labelledby="stack-title">
      <h2 className="display-title section-heading" id="stack-title" lang="en" data-scroll-reveal>My Stack</h2>
      <dl className="skills" data-scroll-reveal>
        {skills.map(([area, items]) => (
          <div className="skill-group" key={area}>
            <dt>{copy.skillGroups[area]}</dt>
            <dd>
              <ul className="skill-list" role="list">
                {items.map(([name, icon]) => (
                  <li key={icon}>
                    <span className="icon-mark" style={{ '--icon-image': `url("${import.meta.env.BASE_URL}stack/${icon}.svg")` }} aria-hidden="true" />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
