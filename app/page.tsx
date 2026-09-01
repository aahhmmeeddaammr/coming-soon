import type { CSSProperties } from 'react';

const signals = ['واضح', 'قريب', 'جريء', 'مختلف'];

function FarqWordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`farq-wordmark ${className}`}>
      <span className="sr-only">فَرْق</span>
      <i className="wordmark-image" aria-hidden="true" />
      <sup>®</sup>
    </span>
  );
}

export default function Home() {
  return (
    <main id="launch-scene" className="launch-scene">
      <div className="ambient-light" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <header className="launch-header">
        <a className="brand" href="mailto:info@farqagency.co" aria-label="تواصل مع فَرْق">
          <span className="brand-mark">
            <i className="brand-mark-image" aria-hidden="true" />
          </span>
          <span>
            <small>بيت إبداعي سعودي</small>
            <em>RIYADH / KSA</em>
          </span>
        </a>

        <output className="live-status" aria-label="الموقع الجديد قيد التجهيز">
          <i />
          <span>NEW WORLD IN PROGRESS</span>
        </output>

        <a className="header-contact" href="mailto:info@farqagency.co">
          <span>ابدأ مشروعًا</span>
          <b>↗</b>
        </a>
      </header>

      <section className="launch-core" aria-labelledby="launch-title">
        <div className="pattern-track pattern-track-one" aria-hidden="true">
          <i /><i />
        </div>
        <div className="pattern-track pattern-track-two" aria-hidden="true">
          <i /><i />
        </div>

        <div className="statement">
          <span className="eyebrow"><FarqWordmark className="meta-wordmark" /><span>/ RIYADH / 24.7136° N</span></span>
          <h1 id="launch-title">
            <span>نرجع بشكل</span>
            <span className="accent-line">ما يشبه غيره.</span>
          </h1>
          <p>نصنع عالمنا الجديد الآن.</p>
        </div>

        <div className="kinetic-mark" aria-hidden="true">
          <div className="mark-orbit orbit-a" />
          <div className="mark-orbit orbit-b" />
          <div className="mark-glow" />
          <div className="mark-slice slice-top">
            <i />
          </div>
          <div className="mark-slice slice-middle">
            <i />
          </div>
          <div className="mark-slice slice-bottom">
            <i />
          </div>
          <span className="mark-index">01 / DIFFERENCE</span>
        </div>

        <div className="cut-line" aria-hidden="true"><i /></div>
        <span className="giant-type" aria-hidden="true"><i /></span>
      </section>

      <footer className="launch-footer">
        <fieldset className="signal-system">
          <legend className="sr-only">{`قيم فَرْق: ${signals.join('، ')}`}</legend>
          <span className="signal-label">FARQ SIGNAL / 01—04</span>
          <div className="signal-stage" aria-hidden="true">
            {signals.map((signal, index) => (
              <span className="signal-word" style={{ '--signal-index': index } as CSSProperties} key={signal}>
                <b>0{index + 1}</b>
                <strong>{signal}</strong>
              </span>
            ))}
          </div>
          <div className="signal-ticks" aria-hidden="true">
            {signals.map((signal, index) => <i style={{ '--signal-index': index } as CSSProperties} key={signal} />)}
          </div>
        </fieldset>
        <div className="launch-progress" aria-hidden="true"><i /></div>
        <div className="footer-meta">
          <span>قريبًا / COMING SOON</span>
          <span className="copyright">© 2026 <FarqWordmark className="footer-wordmark" /></span>
        </div>
      </footer>
    </main>
  );
}
