export default function NotFound() {
  return (
    <main className="not-found-scene">
      <div className="not-found-glow" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <header className="not-found-header">
        <a className="not-found-brand" href="/" aria-label="العودة إلى فَرْق">
          <i aria-hidden="true" />
          <span>
            <b>فَرْق</b>
            <small>بيت إبداعي سعودي</small>
          </span>
        </a>
        <span className="not-found-code">ERROR / 404</span>
      </header>

      <section className="not-found-content" aria-labelledby="not-found-title">
        <div className="error-number" aria-hidden="true">
          <span>4</span>
          <i>
            <b />
            <b />
          </i>
          <span>4</span>
        </div>

        <div className="not-found-message">
          <span className="not-found-eyebrow"><i /> إحداثيات غير موجودة</span>
          <h1 id="not-found-title">يبدو إنك<br />رحت بعيد.</h1>
          <p>الصفحة اللي تدور عليها مو هنا،<br />بس طريق الرجعة واضح.</p>
          <div className="not-found-actions">
            <a className="back-home" href="/">
              <span>ارجع للرئيسية</span>
              <b aria-hidden="true">←</b>
            </a>
            <a className="contact-link" href="mailto:info@farqagency.co">تواصل معنا ↗</a>
          </div>
        </div>
      </section>

      <footer className="not-found-footer">
        <span>FARQ SIGNAL / LOST &amp; FOUND</span>
        <i aria-hidden="true" />
        <span>RIYADH / 24.7136° N</span>
      </footer>
    </main>
  );
}
