export default function Impressum() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">Legal</p>
        <h1 className="mb-12 text-3xl font-semibold sm:text-4xl">Impressum</h1>

        <div className="space-y-8 text-zinc-300 leading-7">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-lg font-semibold text-white">Angaben gemäß § 5 ECG</h2>
            <p>Lukas Peter Oldenburg</p>
            <p>Ahorngasse 2</p>
            <p>2521 Trumau, Österreich</p>
            <p className="mt-3">
              Telefon:{" "}
              <a href="tel:+436642186939" className="hover:text-white transition">
                +43 664 2186939
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a href="mailto:lukas.peter.oldenburg@gmail.com" className="hover:text-white transition">
                lukas.peter.oldenburg@gmail.com
              </a>
            </p>
            <p className="mt-3 text-sm text-zinc-500">
              Die Bekanntgabe der E-Mail-Adresse stellt keine Einwilligung zur Übersendung
              unerbetener Nachrichten gemäß TKG § 101 dar.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-lg font-semibold text-white">Inhalt der Website</h2>
            <p>Portfolio von Lukas Peter Oldenburg.</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-lg font-semibold text-white">Bildnachweis</h2>
            <p>
              Die Bilder auf dieser Website stammen von{" "}
              <a
                href="https://unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-4 hover:opacity-80 transition"
              >
                Unsplash
              </a>{" "}
              und werden unter der Unsplash License verwendet.
              Das Portraitfoto wurde von Lukas Peter Oldenburg bereitgestellt.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-lg font-semibold text-white">Webdesign & Entwicklung</h2>
            <p>Lukas Peter Oldenburg</p>
          </div>
        </div>
      </section>
    </main>
  );
}
