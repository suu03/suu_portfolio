import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import { getProjects } from './projects';
import { applyLanguage, languages, locales, readLanguage } from './locales';
import { Profile, Stack } from './profile';
import './style.css';

function projectMediaUrl(path) {
  return `${import.meta.env.BASE_URL}${path.slice(1)}`;
}

function ProjectDescription({ project, className, detail = false }) {
  return (
    <p className={className}>
      {detail ? project.detailDescription ?? project.description : project.description}
      {project.descriptionNote && <><br /><strong>{project.descriptionNote}</strong></>}
    </p>
  );
}

function ProjectDialog({ project, onClose, copy }) {
  const dialog = useRef(null);
  const [selected, setSelected] = useState(0);
  const allMedia = project.media?.length ? project.media : (project.cover ? [{ type: 'image', src: project.cover, label: project.title }] : []);
  const phoneScreens = allMedia.filter((item) => project.coverImages?.includes(item.src));
  const items = allMedia.filter((item) => !phoneScreens.includes(item));
  const media = items[selected];
  const showPhoneScreens = selected === items.length && phoneScreens.length > 0;

  useEffect(() => {
    dialog.current.showModal();
  }, []);

  return (
    <dialog className={phoneScreens.length ? "dialog-with-phone-screens" : undefined} ref={dialog} onClose={onClose} aria-labelledby="project-title" onClick={(event) => {
      if (event.target === event.currentTarget) dialog.current.close();
    }}>
      <div className="dialog-content">
        <button className="close" onClick={() => dialog.current.close()} aria-label={copy.close} autoFocus>×</button>
        <h2 id="project-title">{project.title}</h2>
        <section className="project-implementation" aria-labelledby="project-overview-title">
          <h3 id="project-overview-title">{copy.overviewHeading}</h3>
          <ProjectDescription project={project} className="project-overview-description" detail />
        </section>
        {(items.length > 1 || (items.length > 0 && phoneScreens.length > 0)) && (
          <div className="media-controls" role="group" aria-label={copy.gallery}>
            {items.map((item, index) => (
              <button key={item.src} aria-pressed={index === selected} onClick={() => setSelected(index)}>{item.label}</button>
            ))}
            {phoneScreens.length > 0 && (
              <button aria-pressed={showPhoneScreens} onClick={() => setSelected(items.length)}>{copy.iosDemo}</button>
            )}
          </div>
        )}
        {media?.type === 'image' && <img className="detail-image" src={projectMediaUrl(media.src)} alt={media.label} />}
        {media?.type === 'video' && (
          <video
            key={media.src}
            className={media.silent ? 'silent-demo' : undefined}
            controls
            controlsList={media.silent ? 'nodownload noremoteplayback' : undefined}
            disablePictureInPicture={media.silent}
            disableRemotePlayback={media.silent}
            muted={media.silent}
            playsInline
            preload="metadata"
            aria-label={media.label}
            src={projectMediaUrl(media.src)}
          />
        )}
        {showPhoneScreens && (
          <ul className="phone-screens" tabIndex={0} aria-label={copy.gallery}>
            {phoneScreens.map((item) => (
              <li key={item.src}>
                <img src={projectMediaUrl(item.src)} alt={item.label} />
              </li>
            ))}
          </ul>
        )}
        {project.responsibilities && (
          <section className="project-implementation" aria-labelledby="project-responsibilities-title">
            <h3 id="project-responsibilities-title">{copy.responsibilitiesHeading}</h3>
            {project.responsibilitiesIntro && <p>{project.responsibilitiesIntro}</p>}
            <ul>
              {project.responsibilities.map((item) => (
                typeof item === 'string' ? <li key={item}>{item}</li> : (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                  </li>
                )
              ))}
            </ul>
          </section>
        )}
        {project.implementation && (
          <section className="project-implementation" aria-labelledby="project-implementation-title">
            <h3 id="project-implementation-title">{copy.implementationHeading}</h3>
            <ul>
              {project.implementation.map(([title, description]) => (
                <li key={title}>
                  <strong>{title}</strong>
                  <p>
                    {description.split('`').map((part, index) =>
                      index % 2 ? <code key={index}>{part}</code> : part
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}
        {project.stackGroups && (
          <section className="project-stack" aria-labelledby="project-stack-title">
            <h3 id="project-stack-title">{copy.stackHeading}</h3>
            <dl>
              {project.stackGroups.map(([category, tools]) => (
                <div key={category}>
                  <dt>{copy.stackLabels[category]}</dt>
                  <dd>{tools.map((tool) => copy.stackToolNames?.[tool] ?? tool).join(copy.stackSeparator)}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}
      </div>
    </dialog>
  );
}

function ProjectCard({ project, onOpen, copy, featured }) {
  const cover = project.cover ?? project.media?.find((item) => item.type === 'image')?.src;
  const video = project.media?.find((item) => item.type === 'video');
  const Preview = project.listOnly ? 'div' : 'button';
  const openProps = project.listOnly ? {} : {
    type: 'button',
    'aria-label': copy.projectDetails(project.title),
    onClick: onOpen,
  };
  return (
    <article className={featured ? "project project-featured" : "project"} data-scroll-reveal>
      <Preview className={`preview ${project.id}`} {...openProps}>
        {project.coverImages ? (
          <div className="project-cover-gallery" aria-hidden="true">
            {project.coverImages.map((src) => <img key={src} src={projectMediaUrl(src)} alt="" loading="lazy" />)}
          </div>
        ) : cover ? (
          <img className="project-cover" src={projectMediaUrl(cover)} alt="" loading="lazy" />
        ) : project.previewIcons ? (
          <div className="project-preview-icons" aria-hidden="true">
            {project.previewIcons.map((icon) => (
              <span key={icon} className="icon-mark" style={{ '--icon-image': `url("${import.meta.env.BASE_URL}stack/${icon}.svg")` }} />
            ))}
          </div>
        ) : video ? (
          <div className="film" aria-hidden="true">
            <video muted playsInline preload="metadata" src={projectMediaUrl(video.src)} />
            <span className="play">▶</span>
          </div>
        ) : (
          <div className="project-type" aria-hidden="true">
            {project.title}
          </div>
        )}
      </Preview>
      <div className="project-info">
        <h3>
          {project.listOnly ? project.title : <button {...openProps}>{project.title}</button>}
        </h3>
        <ProjectDescription project={project} className="project-description" />
      </div>
    </article>
  );
}

function App() {
  const [language, setLanguage] = useState(readLanguage);
  const [projectId, setProjectId] = useState(null);
  const [filter, setFilter] = useState("all");
  const main = useRef(null);
  const languageControl = useRef(null);
  const copy = locales[language];
  const projects = getProjects(language);
  const project = projects.find((item) => item.id === projectId);
  const visibleProjects = filter === "all" ? projects : projects.filter((item) => item.group === filter);
  const projectsByYear = new Map();
  for (const item of visibleProjects) {
    const year = item.period ?? item.year ?? null;
    if (!projectsByYear.has(year)) projectsByYear.set(year, []);
    projectsByYear.get(year).push(item);
  }
  const orderedProjects = [...projectsByYear].sort(([a], [b]) =>
    Number.parseInt(b ?? 0, 10) - Number.parseInt(a ?? 0, 10)
  ).flatMap(([, items]) => items);

  useEffect(() => {
    applyLanguage(language);
  }, [language]);

  useEffect(() => {
    const control = languageControl.current;
    const closeOnOutsidePress = (event) => {
      if (control.open && !control.contains(event.target)) control.open = false;
    };
    document.addEventListener('pointerdown', closeOnOutsidePress);
    return () => document.removeEventListener('pointerdown', closeOnOutsidePress);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver !== "function") return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.setAttribute("data-scroll-reveal", "entered");
        observer.unobserve(entry.target);
      }
    }, { threshold: 0 });

    for (const element of main.current.querySelectorAll('[data-scroll-reveal="true"]')) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [filter]);

  return (
    <>
      <div className="intro" id="top">
        <header className="shell header">
          <a className="brand" href="#top">Suu<span>.</span></a>
          <nav aria-label={copy.navigation}>
            <a href="#about">{copy.about}</a>
            <a href="#stack">{copy.stack}</a>
            <a href="#work">{copy.work}</a>
            <a href="#contact">{copy.contact}</a>
          </nav>
          <details
            className="language-control"
            ref={languageControl}
            onBlur={(event) => {
              // A touch can blur the summary without moving focus to the tapped option.
              if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) {
                event.currentTarget.open = false;
              }
            }}
            onKeyDown={(event) => {
              if (event.key !== 'Escape' || !event.currentTarget.open) return;
              event.currentTarget.open = false;
              event.currentTarget.querySelector('summary').focus();
            }}
          >
            <summary aria-label={`${copy.language} (${languages[language].name})`}>
              {languages[language].short}
            </summary>
            <div className="language-options">
              {Object.entries(languages).filter(([code]) => code !== language).map(([code, { name, short }]) => (
                <button key={code} type="button" lang={code} aria-label={name} onClick={(event) => {
                  const control = event.currentTarget.closest('details');
                  if (document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                    document.startViewTransition(() => flushSync(() => setLanguage(code)));
                  } else {
                    setLanguage(code);
                  }
                  control.open = false;
                  control.querySelector('summary').focus();
                }}>
                  {short}
                </button>
              ))}
            </div>
          </details>
        </header>
        <section className="shell hero" aria-labelledby="hero-title">
          <h1 className="hero-title" id="hero-title">
            <span className="title-name">
              Suu
              <svg className="name-underline" viewBox="0 0 236 27" aria-hidden="true">
                <path
                  d="M3 17 C29 7 70 3 125 4 S227 4 233 10 C238 15 158 14 105 14 C91 14 80 14 73 15 C108 15 163 14 204 23"
                  pathLength="1"
                />
              </svg>
            </span>
            <span className="title-portfolio" lang="en">Portfolio</span>
          </h1>
        </section>
      </div>
      <main ref={main}>
        <Profile copy={copy} />
        <Stack copy={copy} />
        <section className="work" id="work" aria-labelledby="work-title">
          <div className="shell work-content">
            <div className="section-heading" data-scroll-reveal>
              <h2 className="display-title" id="work-title" lang="en" data-scroll-reveal>Latest Projects</h2>
              <p className="work-intro">{copy.workIntro}</p>
            </div>
            <div className="project-filters" role="group" aria-label={copy.filterLabel}>
              {Object.entries(copy.filters).map(([key, label]) => (
                <button key={key} type="button" aria-pressed={filter === key} onClick={() => setFilter(key)}>{label}</button>
              ))}
            </div>
            <div className="projects">
              {orderedProjects.map((item) => (
                <ProjectCard
                  key={item.id}
                  project={item}
                  copy={copy}
                  featured={filter === "all" && item.id === visibleProjects[0]?.id}
                  onOpen={() => setProjectId(item.id)}
                />
              ))}
            </div>
          </div>
          <section className="contact" id="contact" aria-labelledby="contact-title">
            <div className="shell contact-inner" data-scroll-reveal>
              <h2 className="display-title" id="contact-title" lang="en" data-scroll-reveal>Contact Me</h2>
              <div className="skill-list contact-links">
                {[
                  { href: "https://github.com/suu03", icon: "github", label: "GitHub" },
                ].map(({ href, icon, label }) => (
                  <a key={icon} href={href}>
                    <span className="icon-mark" style={{ '--icon-image': `url("${import.meta.env.BASE_URL}contact/${icon}.svg")` }} aria-hidden="true" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </section>
      </main>
      <footer className="shell footer">
        <a href="#top"><span className="icon-mark back-to-top-icon" aria-hidden="true" />{copy.toTop}</a>
      </footer>
      {project && <ProjectDialog project={project} copy={copy} onClose={() => setProjectId(null)} />}
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
