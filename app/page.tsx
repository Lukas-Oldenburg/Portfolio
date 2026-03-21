'use client';

import Image from 'next/image';

const techStack = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
];

const timeline = [
  {
    year: '2016 – 2020',
    title: 'BG/BRG Baden',
    subtitle: 'Naturwissenschaften und computerunterstützte Geometrie',
    text: 'Solide Grundlage in analytischem Denken, naturwissenschaftlichem Arbeiten und technischem Verständnis.',
  },
  {
    year: '2020 – 2025',
    title: 'HTL Wiener Neustadt',
    subtitle: 'Informatik',
    text: 'Schwerpunkt auf Softwareentwicklung, Machine Learning, Datenbanken und methodischer Projektarbeit.',
  },
  {
    year: '2023 – 2024',
    title: 'MTH Retail Group',
    subtitle: 'IT-Praktikum',
    text: 'IT-Support, Netzwerkdiagnose, Switch-Konfiguration, Webdesign und technische Dokumentation.',
  },
  {
    year: '2025 – 2026',
    title: 'Zivildienst',
    subtitle: 'Aktuelle Praxisphase',
    text: 'Praxis unter realem Zeitdruck mit Verantwortung, Struktur und sauberer Ausführung.',
  },
  {
    year: 'ab 2026',
    title: 'TU Wien',
    subtitle: 'Informatikstudium',
    text: 'Fokus auf Data Science und Cybersecurity.',
  },
];

const certificates = [
  {
    title: 'EBCL A',
    subtitle: 'European Business Competence Licence',
    text: 'Wirtschaftliche Grundlagen als Ergänzung zum technischen Profil.',
  },
  {
    title: 'EBCL B',
    subtitle: 'European Business Competence Licence',
    text: 'Abschlussprüfung noch ausständig.',
  },
  {
    title: 'Englisch C1',
    subtitle: 'ESE-zertifiziert',
    text: 'Sicheres Niveau für technische Dokumentation und internationale Kommunikation.',
  },
];

const projects = [
  {
    title: 'GPS Anomaly Detection – LKW Walter',
    subtitle: 'Machine Learning / Diplomprojekt',
    text: 'KI-basierte Anomalieerkennung in GPS-Daten mit Autoencoder, MLP, K-Means und DBSCAN. Fokus auf Datenbereinigung, Feature Engineering und saubere Auswertung.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'CRM-System – Wittek',
    subtitle: 'Desktop App / Database Application',
    text: 'Desktop-CRM mit PostgreSQL-Backend zur Verwaltung von Kunden-, Auftrags- und Wartungsdaten mit Fokus auf klare Struktur und Wartbarkeit.',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function Home() {
  const handleScrollToNext = () => {
    const sectionIds = ['hero', 'tech-stack', 'timeline', 'certificates', 'projects'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const currentY = window.scrollY;
    const offset = 140;

    for (const section of sections) {
      if (section.offsetTop > currentY + offset) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    sections[0]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <section
        id="hero"
        className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-10"
      >
        <div>
          <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
            Software Development · Machine Learning · Data
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Lukas Peter Oldenburg
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Informatik-HTL-Absolvent mit Fokus auf Softwareentwicklung, Machine Learning,
            Datenanalyse und strukturierte, saubere Systeme.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/Lukas-Oldenburg"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/lukas-oldenburg-5774ba3ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              LinkedIn
            </a>
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              CV Download
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md scale-90 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-3 shadow-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
              <Image
                src="/portrait.jpg"
                alt="Lukas Peter Oldenburg"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <button
        type="button"
        onClick={handleScrollToNext}
        className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 animate-bounce flex-col items-center gap-1 text-zinc-400 transition hover:text-white"
      >
        <span className="text-xs">Scroll</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <section id="tech-stack" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">Tech Stack</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Technologien</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {techStack.map((tech) => (
            <div key={tech.name} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <img src={tech.icon} alt={tech.name} className="mb-4 h-10 w-10" />
              <div className="text-sm font-medium text-white">{tech.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="timeline" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">Timeline</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Ausbildung & Weg</h2>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block" />
          <div className="space-y-10">
            {timeline.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={item.title} className="relative grid items-center md:grid-cols-2">
                  <div className={isLeft ? 'md:pr-14' : 'md:col-start-2 md:pl-14'}>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                      <div className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">{item.year}</div>
                      <h3 className="text-2xl font-semibold">{item.title}</h3>
                      <p className="mt-1 text-zinc-400">{item.subtitle}</p>
                      <p className="mt-4 leading-7 text-zinc-300">{item.text}</p>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-[#0a0a0f] md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="certificates" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">Certificates</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Zertifikate</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {certificates.map((cert) => (
            <div key={cert.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-500">{cert.subtitle}</p>
              <p className="mt-4 leading-7 text-zinc-300">{cert.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">Projects</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Projekte</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
              <div className="h-60 overflow-hidden">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="mb-2 text-xs uppercase tracking-[0.25em] text-zinc-500">{project.subtitle}</div>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-4 leading-7 text-zinc-300">{project.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}