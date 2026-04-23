const { useState, useEffect, useRef } = React;

// ---- i18n ----
const COPY = {
  pl: {
    nav: ["Usługi", "Funkcje", "Aktualności", "Kontakt"],
    navSub: ["Agenci AI", "Automatyzacje", "Integracje", "Wsparcie 24/7"],
    utility: ["Rzeszów, Polska", "hello@silversword.ai", "+48 12 345 67 89"],
    hours: "Pn–Pt · 08–16",
    heroEyebrow: "Rozwiązania AI dla firm",
    heroH1: ["Twoja firma,", "wyostrzona jak", "srebrne ostrze."],
    heroSub: "Projektujemy i wdrażamy agentów AI oraz automatyzacje dla małych i średnich firm. Mniej ręcznej pracy, więcej czasu na to, co naprawdę się liczy.",
    watchDemo: "Zobacz demo",
    watchDemoSub: "2 min — co potrafią agenci",
    ctaPrimary: "Wyślij zapytanie",
    trusted: "Zaufali nam",
    scroll: "Przewiń",
    featuresKicker: "Co wdrażamy",
    featuresTitle: "Dwie rzeczy, które robimy naprawdę dobrze.",
    featuresSub: "Bez vendor-lockin, bez miesięcy analiz. Wdrożenia liczone w tygodniach, nie w kwartałach.",
    f1Title: "Agenci AI szyci na miarę",
    f1Body: "Asystenci, którzy odpowiadają klientom, kwalifikują leady i obsługują zgłoszenia 24/7. Uczą się na Waszych danych i integrują z CRM, pocztą i Slackiem.",
    f1Bullets: ["Integracje z Twoim stackiem", "Polski i angielski", "Wdrożenie w 2–4 tygodnie", "Monitoring jakości odpowiedzi"],
    f1Cta: "Zobacz przykłady",
    f2Title: "Automatyzacje procesów",
    f2Body: "Zamieniamy ręczną, powtarzalną pracę w ciche, niezawodne procesy. Faktury, raporty, onboarding, dane między systemami — dzieje się samo.",
    f2Bullets: ["Redukcja pracy ręcznej o 60–90%", "Alerty i raporty jakości", "Integracje API i RPA", "Bez vendor-lockin"],
    f2Cta: "Umów konsultację",
    newsKicker: "Z kroniki",
    newsTitle: "Aktualności i notatki z pracowni.",
    newsSub: "Studia przypadków, poradniki i zmiany w naszych usługach.",
    readMore: "Czytaj wszystkie wpisy",
    posts: [
    { tag: "Studium przypadku", date: "12.04.2026", title: "Jak agent AI obsłużył 4 300 zgłoszeń w kancelarii prawnej w jeden kwartał.", excerpt: "Zbudowaliśmy asystenta pierwszej linii, który kwalifikuje sprawy i przygotowuje notatki dla prawników.", read: "6 min", color: "blood" },
    { tag: "Poradnik", date: "02.04.2026", title: "Siedem procesów, które warto zautomatyzować w pierwszej kolejności.", excerpt: "Praktyczna lista oparta o 30+ wdrożeń w firmach z sektora MŚP.", read: "4 min", color: "gold" },
    { tag: "Aktualizacja", date: "21.03.2026", title: "Nowy moduł: agent do ofertowania B2B w języku polskim.", excerpt: "Tworzy spersonalizowane oferty na podstawie briefu klienta i cennika z ERP.", read: "3 min", color: "silver" }],

    finalKicker: "Porozmawiajmy",
    finalTitle: ["Opowiedz nam o swoim problemie —", "zaproponujemy ostrze na miarę."],
    finalSub: "Odpowiadamy w ciągu 5 minut w godzinach pracy. Pierwsza rozmowa i wstępna wycena — bezpłatnie.",
    stats: [["5 min.", "czas odpowiedzi"], ["2–4 tyg.", "pierwsze wdrożenie"], ["60–90%", "mniej pracy ręcznej"], ["0 zł", "rozmowa wstępna"]],
    form: { name: "Imię i nazwisko", company: "Firma", email: "E-mail", phone: "Telefon (opcjonalnie)", msg: "Opisz swój problem lub proces — im więcej szczegółów, tym lepiej", submit: "Wyślij zapytanie", consent: "Zgadzam się na przetwarzanie danych w celu odpowiedzi na zapytanie.", privacy: "Twoje dane są bezpieczne. Nie udostępniamy ich osobom trzecim." },
    footerCols: [
    { title: "Usługi", items: ["Agenci AI", "Automatyzacje", "Integracje", "Wsparcie"] },
    { title: "Firma", items: ["O nas", "Zespół", "Kariera", "Kontakt"] },
    { title: "Zasoby", items: ["Blog", "Studia przypadków", "Poradniki", "Newsletter"] }],

    footerTag: "Forge your edge.",
    footerBottom: ["© 2026 Silver Sword Solutions sp. z o.o.", "NIP 1234567890", "Polityka prywatności", "Regulamin"],
    menu: "Menu", close: "Zamknij"
  },
  en: {
    nav: ["Services", "Features", "News", "Contact"],
    navSub: ["AI agents", "Automations", "Integrations", "24/7 Support"],
    utility: ["Rzeszów, Poland", "hello@silversword.ai", "+48 12 345 67 89"],
    hours: "Mon–Fri · 08–16",
    heroEyebrow: "AI solutions for business",
    heroH1: ["Your business,", "honed like a", "silver blade."],
    heroSub: "We design and ship AI agents and automations for small and mid-sized companies. Less manual work, more time for what actually matters.",
    watchDemo: "Watch the demo",
    watchDemoSub: "2 min — what our agents do",
    ctaPrimary: "Send a request",
    trusted: "Trusted by",
    scroll: "Scroll",
    featuresKicker: "What we ship",
    featuresTitle: "Two things we do really well.",
    featuresSub: "No vendor lock-in, no months of analysis. Deployments measured in weeks, not quarters.",
    f1Title: "Tailor-made AI agents",
    f1Body: "Assistants that answer customers, qualify leads and handle tickets 24/7. Trained on your data, plugged into your CRM, inbox and Slack.",
    f1Bullets: ["Integrates with your stack", "Polish and English", "Live in 2–4 weeks", "Answer-quality monitoring"],
    f1Cta: "See examples",
    f2Title: "Process automations",
    f2Body: "We turn manual, repetitive work into quiet, reliable pipelines. Invoices, reports, onboarding, cross-system data — it just happens.",
    f2Bullets: ["60–90% less manual work", "Alerts and quality reports", "API and RPA integrations", "No vendor lock-in"],
    f2Cta: "Book a consultation",
    newsKicker: "From the chronicle",
    newsTitle: "Updates and notes from the workshop.",
    newsSub: "Case studies, guides, and changes to our services.",
    readMore: "Read all posts",
    posts: [
    { tag: "Case study", date: "Apr 12, 2026", title: "How one AI agent handled 4,300 tickets at a law firm in a single quarter.", excerpt: "We built a first-line assistant that qualifies cases and drafts notes for lawyers.", read: "6 min", color: "blood" },
    { tag: "Guide", date: "Apr 2, 2026", title: "Seven processes worth automating first.", excerpt: "A practical list based on 30+ deployments in SMB companies.", read: "4 min", color: "gold" },
    { tag: "Update", date: "Mar 21, 2026", title: "New module: B2B quoting agent in Polish.", excerpt: "Crafts personalized offers from a client brief and your ERP pricelist.", read: "3 min", color: "silver" }],

    finalKicker: "Let's talk",
    finalTitle: ["Tell us your problem —", "we'll forge a blade for it."],
    finalSub: "We reply within 5 minutes during business hours. First call and rough estimate — free.",
    stats: [["5 min.", "reply time"], ["2–4 wks", "first launch"], ["60–90%", "less manual work"], ["Free", "first call"]],
    form: { name: "Full name", company: "Company", email: "Email", phone: "Phone (optional)", msg: "Describe your problem or process — the more detail, the better", submit: "Send request", consent: "I consent to processing my data for the purpose of this request.", privacy: "Your data is safe. We don't share it with third parties." },
    footerCols: [
    { title: "Services", items: ["AI agents", "Automations", "Integrations", "Support"] },
    { title: "Company", items: ["About", "Team", "Careers", "Contact"] },
    { title: "Resources", items: ["Blog", "Case studies", "Guides", "Newsletter"] }],

    footerTag: "Forge your edge.",
    footerBottom: ["© 2026 Silver Sword Solutions Ltd.", "VAT PL1234567890", "Privacy", "Terms"],
    menu: "Menu", close: "Close"
  }
};

// ---- Icons/Emblems ----
const SwordEmblem = ({ size = 44, gold = false }) =>
<svg width={size} height={size} viewBox="0 0 44 44" fill="none" style={{ display: "block", filter: gold ? "drop-shadow(0 0 10px rgba(201,169,97,0.35))" : "none" }}>
    <defs>
      <linearGradient id="swg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#f3e2b3" />
        <stop offset="0.5" stopColor="#d4b26a" />
        <stop offset="1" stopColor="#8a7542" />
      </linearGradient>
      <linearGradient id="swsilver" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#6b6b72" />
        <stop offset="0.35" stopColor="#d8d8df" />
        <stop offset="0.5" stopColor="#f4f4f7" />
        <stop offset="0.65" stopColor="#d8d8df" />
        <stop offset="1" stopColor="#5e5e66" />
      </linearGradient>
      <linearGradient id="swhilt" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#d4b26a" />
        <stop offset="1" stopColor="#8a7542" />
      </linearGradient>
      <radialGradient id="swbg" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="rgba(201,169,97,0.22)" />
        <stop offset="0.7" stopColor="rgba(201,169,97,0.06)" />
        <stop offset="1" stopColor="rgba(201,169,97,0)" />
      </radialGradient>
    </defs>
    {/* Heraldic ring */}
    {gold && <circle cx="22" cy="22" r="21" fill="url(#swbg)" />}
    <circle cx="22" cy="22" r="20.5" stroke={gold ? "url(#swg)" : "currentColor"} strokeWidth="1.4" />
    <circle cx="22" cy="22" r="17.5" stroke={gold ? "url(#swg)" : "currentColor"} strokeWidth="0.5" opacity=".45" />
    {/* Cardinal ticks */}
    {[0, 90, 180, 270].map((a) =>
  <line key={a} x1="22" y1="1" x2="22" y2="3.8" stroke={gold ? "url(#swg)" : "currentColor"} strokeWidth="1.4" transform={`rotate(${a} 22 22)`} />
  )}

    {/* === SILVER SWORD === blade points up */}
    {/* Blade (diamond cross-section shown via center highlight) */}
    <path d="M22 5.5 L24.2 9 L24.2 27 L22 29.5 L19.8 27 L19.8 9 Z"
          fill={gold ? "url(#swsilver)" : "currentColor"}
          stroke={gold ? "#3a3a40" : "currentColor"} strokeWidth="0.5" strokeLinejoin="miter" />
    {/* Blade fuller / centerline highlight */}
    <line x1="22" y1="9" x2="22" y2="27" stroke={gold ? "#ffffff" : "currentColor"} strokeWidth="0.4" opacity={gold ? ".7" : ".4"} />
    {/* Tip highlight */}
    <path d="M22 5.5 L23 8" stroke={gold ? "#ffffff" : "currentColor"} strokeWidth="0.5" opacity=".75" />

    {/* Crossguard */}
    <path d="M12 27 L32 27 L30.5 29 L13.5 29 Z"
          fill={gold ? "url(#swhilt)" : "currentColor"}
          stroke={gold ? "#4a3a1e" : "currentColor"} strokeWidth="0.4" />
    <circle cx="12" cy="28" r="1.6" fill={gold ? "url(#swhilt)" : "currentColor"} />
    <circle cx="32" cy="28" r="1.6" fill={gold ? "url(#swhilt)" : "currentColor"} />

    {/* Grip */}
    <rect x="20.8" y="29" width="2.4" height="7" fill={gold ? "#2a2418" : "currentColor"} stroke={gold ? "url(#swhilt)" : "currentColor"} strokeWidth="0.5" />
    <line x1="20.8" y1="31" x2="23.2" y2="31" stroke={gold ? "url(#swhilt)" : "currentColor"} strokeWidth="0.4" />
    <line x1="20.8" y1="33" x2="23.2" y2="33" stroke={gold ? "url(#swhilt)" : "currentColor"} strokeWidth="0.4" />

    {/* Pommel */}
    <circle cx="22" cy="37.6" r="1.8" fill={gold ? "url(#swhilt)" : "currentColor"} stroke={gold ? "#4a3a1e" : "currentColor"} strokeWidth="0.4" />
  </svg>;


const Diamond = ({ size = 6, color = "var(--gold)" }) =>
<span aria-hidden style={{ width: size, height: size, background: color, transform: "rotate(45deg)", display: "inline-block", flex: "0 0 auto" }} />;


const LineDiamond = ({ w = 32, color = "currentColor", opacity = .5 }) =>
<svg width={w} height="8" viewBox="0 0 32 8" fill="none" style={{ display: "block", opacity }}>
    <path d="M0 4 H12" stroke={color} strokeWidth="1" />
    <path d="M20 4 H32" stroke={color} strokeWidth="1" />
    <path d="M13 4 L16 1.5 L19 4 L16 6.5 Z" stroke={color} strokeWidth="1" fill="none" />
  </svg>;


const GoldRule = ({ style = {} }) =>
<div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(201,169,97,0.4), rgba(201,169,97,0.9), rgba(201,169,97,0.4), transparent)", ...style }} />;


// Witcher-ish symbols (original, not copied): four sigils for feature cards
const Sigil = ({ kind = "knot", size = 64 }) => {
  const s = size;
  if (kind === "agent") {
    return (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="28" stroke="var(--gold-dim)" strokeWidth="0.8" />
        <circle cx="32" cy="32" r="22" stroke="var(--gold)" strokeWidth="0.6" opacity=".6" />
        <circle cx="32" cy="32" r="10" stroke="var(--gold)" strokeWidth="1.2" />
        <circle cx="32" cy="32" r="3" fill="var(--gold)" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) =>
        <g key={a} transform={`rotate(${a} 32 32)`}>
            <line x1="32" y1="4" x2="32" y2="10" stroke="var(--gold)" strokeWidth="1" />
            <circle cx="32" cy="14" r="1.2" fill="var(--gold)" />
          </g>
        )}
        <path d="M10 32 L54 32 M32 10 L32 54" stroke="var(--gold-dim)" strokeWidth="0.5" opacity=".4" />
      </svg>);

  }
  if (kind === "flow") {
    return (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="28" stroke="var(--gold-dim)" strokeWidth="0.8" />
        <path d="M16 22 L32 32 L48 22 M16 42 L32 32 L48 42" stroke="var(--gold)" strokeWidth="1.2" fill="none" />
        <rect x="12" y="18" width="8" height="8" stroke="var(--gold)" strokeWidth="1" transform="rotate(45 16 22)" />
        <rect x="44" y="18" width="8" height="8" stroke="var(--gold)" strokeWidth="1" transform="rotate(45 48 22)" />
        <rect x="12" y="38" width="8" height="8" stroke="var(--gold)" strokeWidth="1" transform="rotate(45 16 42)" />
        <rect x="44" y="38" width="8" height="8" stroke="var(--gold)" strokeWidth="1" transform="rotate(45 48 42)" />
        <circle cx="32" cy="32" r="4" fill="var(--gold)" />
      </svg>);

  }
  return null;
};

// Filler visual for posts / hero — layered geometric parchment-style
const Vignette = ({ tone = "gold", label }) => {
  const toneMap = {
    gold: ["rgba(201,169,97,0.22)", "rgba(201,169,97,0.04)"],
    blood: ["rgba(162,52,39,0.30)", "rgba(162,52,39,0.05)"],
    silver: ["rgba(185,180,165,0.22)", "rgba(185,180,165,0.04)"]
  };
  const [a, b] = toneMap[tone] || toneMap.gold;
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", background: `radial-gradient(ellipse at 30% 40%, ${a}, ${b} 60%), linear-gradient(180deg, #1a1713, #0f0d0a)` }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(240,232,213,0.04) 0 1px, transparent 1px 24px)" }} />
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 200 120" preserveAspectRatio="none">
        <circle cx="70" cy="60" r="42" stroke="rgba(240,232,213,0.18)" fill="none" strokeWidth="0.4" />
        <circle cx="70" cy="60" r="28" stroke="rgba(240,232,213,0.12)" fill="none" strokeWidth="0.4" />
        <path d="M70 18 L70 102 M28 60 L112 60" stroke="rgba(240,232,213,0.12)" strokeWidth="0.3" />
        <path d="M40 30 L100 90 M100 30 L40 90" stroke="rgba(240,232,213,0.08)" strokeWidth="0.3" />
      </svg>
      {label &&
      <div style={{ position: "absolute", left: 16, bottom: 14, right: 16, display: "flex", alignItems: "center", gap: 8 }}>
          <Diamond size={5} color="var(--gold)" />
          <span className="mono" style={{ fontSize: 10, color: "var(--ink-soft)", letterSpacing: ".22em", textTransform: "uppercase" }}>{label}</span>
        </div>
      }
    </div>);

};

// ---- Language switch ----
function LangSwitch({ lang, setLang, compact = false }) {
  const isPL = lang === "pl";
  return (
    <div onClick={() => setLang(isPL ? "en" : "pl")} role="button" aria-label="Language"
    style={{ position: "relative", display: "inline-flex", alignItems: "center", padding: 2, border: "1px solid var(--rule-strong)", background: "rgba(240,232,213,0.03)", cursor: "pointer", borderRadius: 2 }}>
      <div style={{ position: "absolute", top: 2, bottom: 2, left: isPL ? 2 : "50%", width: "calc(50% - 2px)", background: "var(--ink)", transition: "left .25s" }} />
      {["PL", "EN"].map((l, i) => {
        const active = i === 0 === isPL;
        return <div key={l} style={{ position: "relative", zIndex: 2, padding: compact ? "4px 10px" : "5px 13px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".22em", color: active ? "var(--bg)" : "var(--ink-soft)", transition: "color .25s" }}>{l}</div>;
      })}
    </div>);

}

// ---- Utility bar ----
function UtilityBar({ t, lang }) {
  return (
    <div className="hide-mobile" style={{ borderBottom: "1px solid var(--rule)", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--ink-muted)", background: "rgba(0,0,0,0.2)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "9px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><Diamond size={4} /> {t.utility[0]}</span>
          <span style={{ opacity: .3 }}>·</span>
          <a href={`mailto:${t.utility[1]}`} style={{ color: "inherit" }}>{t.utility[1]}</a>
          <span style={{ opacity: .3 }}>·</span>
          <span>{t.utility[2]}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span>{t.hours}</span>
          <span style={{ opacity: .3 }}>·</span>
          {["LinkedIn", "GitHub", "X"].map((s) => <a key={s} href="#" style={{ color: "inherit" }}>{s}</a>)}
        </div>
      </div>
    </div>);

}

// ---- Main Nav ----
function TopBar({ t, lang, setLang, menuOpen, setMenuOpen }) {
  const [hover, setHover] = useState(-1);
  return (
    <>
      <UtilityBar t={t} lang={lang} />
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(14,13,11,0.82)", backdropFilter: "blur(14px)", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, height: 78 }}>
            {/* Logo */}
            <a href="#" style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none", color: "var(--ink)" }}>
              <SwordEmblem size={50} gold />
              <div style={{ borderLeft: "1px solid var(--rule-strong)", paddingLeft: 14, lineHeight: 1.1 }}>
                <div className="display-caps" style={{ fontSize: 15, color: "var(--ink)" }}>Silver Sword</div>
                <div className="display" style={{ fontSize: 12, fontStyle: "italic", color: "var(--ink-muted)", marginTop: 2, letterSpacing: ".08em" }}>· solutions ·</div>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hide-mobile" style={{ alignItems: "center", gap: 2, flex: "1 1 auto", justifyContent: "center" }}>
              {t.nav.map((n, i) =>
              <React.Fragment key={i}>
                  <div
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(-1)}
                  style={{ position: "relative", padding: "28px 14px", cursor: "pointer" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span className="mono" style={{ fontSize: 9, color: "var(--gold-dim)" }}>{`0${i + 1}`}</span>
                      <span className="display-caps" style={{ fontSize: 12, color: i === 0 || hover === i ? "var(--ink)" : "var(--ink-soft)", transition: "color .2s" }}>{n}</span>
                      {i === 0 && <span style={{ color: hover === 0 ? "var(--gold)" : "var(--ink-muted)", fontSize: 9, transition: "color .2s" }}>▾</span>}
                    </div>
                    {i === 0 &&
                  <div style={{ position: "absolute", left: 14, right: 14, bottom: 20, display: "flex", alignItems: "center", gap: 4, color: "var(--gold)" }}>
                        <span style={{ flex: 1, height: 1, background: "var(--gold)" }} />
                        <Diamond size={4} color="var(--gold)" />
                        <span style={{ flex: 1, height: 1, background: "var(--gold)" }} />
                      </div>
                  }
                    {hover === i && i !== 0 &&
                  <div style={{ position: "absolute", left: 14, right: 14, bottom: 22, height: 1, background: "var(--ink-soft)" }} />
                  }
                    {i === 0 && hover === 0 &&
                  <div style={{ position: "absolute", top: "100%", left: -20, zIndex: 20, minWidth: 300, background: "linear-gradient(180deg, #1a1713, #121008)", border: "1px solid var(--rule-strong)", padding: "22px 24px", boxShadow: "0 24px 48px -8px rgba(0,0,0,0.6)" }}>
                        <div className="label" style={{ marginBottom: 14, color: "var(--gold)" }}>◆ {lang === "pl" ? "Nasze usługi" : "Services"}</div>
                        {t.navSub.map((s, si) =>
                    <a href="#" key={si} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 0", borderBottom: si < t.navSub.length - 1 ? "1px solid var(--rule)" : "none", textDecoration: "none", color: "inherit" }}>
                            <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                              <Diamond size={5} color="var(--gold)" />
                              <span className="display" style={{ fontSize: 16, fontWeight: 500, color: "var(--ink)" }}>{s}</span>
                            </span>
                            <span className="mono" style={{ fontSize: 10, color: "var(--gold)" }}>→</span>
                          </a>
                    )}
                      </div>
                  }
                  </div>
                  {i < t.nav.length - 1 && <span style={{ color: "var(--ink-muted)", display: "inline-flex" }}><LineDiamond w={22} /></span>}
                </React.Fragment>
              )}
            </nav>

            {/* Right cluster */}
            <div className="hide-mobile" style={{ alignItems: "center", gap: 14 }}>
              <LangSwitch lang={lang} setLang={setLang} />
              <button className="btn primary" style={{ padding: "11px 20px", fontSize: 10 }}>{t.ctaPrimary} <span className="arrow">→</span></button>
            </div>

            {/* Mobile hamburger */}
            <button aria-label="Menu" onClick={() => setMenuOpen(true)} className="show-mobile"
            style={{ display: "none", background: "transparent", border: "1px solid var(--rule-strong)", color: "var(--ink)", padding: "10px 12px", cursor: "pointer", borderRadius: 2, alignItems: "center", gap: 10 }}>
              <svg width="18" height="12" viewBox="0 0 18 12"><path d="M0 1 H18 M0 6 H18 M0 11 H18" stroke="currentColor" strokeWidth="1.4" /></svg>
              <span className="display-caps" style={{ fontSize: 10 }}>{t.menu}</span>
            </button>
          </div>
        </div>
      </header>
    </>);

}

// ---- Mobile Drawer ----
function MobileDrawer({ open, onClose, t, lang, setLang }) {
  useEffect(() => {
    document.body.classList.toggle("scroll-lock", open);
    return () => document.body.classList.remove("scroll-lock");
  }, [open]);
  if (!open && typeof window !== "undefined" && !window.__drawerOnceOpened) {
    return null;
  }
  if (open && typeof window !== "undefined") window.__drawerOnceOpened = true;
  return (
    <div className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
      <div className="backdrop" onClick={onClose} />
      <aside className="sheet">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <SwordEmblem size={34} gold />
            <div className="display-caps" style={{ fontSize: 13 }}>Silver Sword</div>
          </div>
          <button onClick={onClose} aria-label="Close" style={{ background: "transparent", border: "1px solid var(--rule-strong)", color: "var(--ink)", padding: "8px 12px", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, borderRadius: 2 }}>
            <svg width="12" height="12" viewBox="0 0 12 12"><path d="M1 1 L11 11 M11 1 L1 11" stroke="currentColor" strokeWidth="1.4" /></svg>
            <span className="display-caps" style={{ fontSize: 10 }}>{t.close}</span>
          </button>
        </div>
        <GoldRule />

        <nav style={{ marginTop: 20 }}>
          {t.nav.map((n, i) =>
          <a href="#" key={i} onClick={onClose} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 0", borderBottom: "1px solid var(--rule)", color: "var(--ink)", textDecoration: "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span className="mono" style={{ fontSize: 10, color: "var(--gold-dim)" }}>{`0${i + 1}`}</span>
                <span className="display" style={{ fontSize: 22, fontWeight: 500 }}>{n}</span>
              </div>
              <span className="mono" style={{ fontSize: 11, color: "var(--gold)" }}>→</span>
            </a>
          )}
        </nav>

        <div style={{ marginTop: 22 }}>
          <div className="label" style={{ marginBottom: 10, color: "var(--gold)" }}>◆ {lang === "pl" ? "Usługi" : "Services"}</div>
          {t.navSub.map((s, i) =>
          <a href="#" key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", color: "var(--ink-soft)", textDecoration: "none" }}>
              <Diamond size={4} color="var(--gold-dim)" />
              <span className="body" style={{ fontSize: 14 }}>{s}</span>
            </a>
          )}
        </div>

        <div style={{ marginTop: 26, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <LangSwitch lang={lang} setLang={setLang} />
          <span className="mono" style={{ color: "var(--ink-muted)", fontSize: 10 }}>{t.hours}</span>
        </div>

        <button className="btn primary" onClick={onClose} style={{ marginTop: 22, width: "100%", justifyContent: "center" }}>
          {t.ctaPrimary} <span className="arrow">→</span>
        </button>

        <div style={{ marginTop: 30, paddingTop: 20, borderTop: "1px solid var(--rule)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {t.utility.map((u, i) => <span key={i} className="mono" style={{ fontSize: 11, color: "var(--ink-muted)", letterSpacing: ".1em" }}>{u}</span>)}
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 14 }}>
            {["LinkedIn", "GitHub", "X"].map((s) => <a key={s} href="#" className="mono" style={{ color: "var(--ink-soft)", fontSize: 10, textTransform: "uppercase", letterSpacing: ".2em" }}>{s}</a>)}
          </div>
        </div>
      </aside>
    </div>);

}

// ---- Hero ----
function Hero({ t }) {
  return (
    <section style={{ marginTop: 24, position: "relative" }}>
      <div style={{ position: "relative", aspectRatio: "16/9", minHeight: 480, maxHeight: 720, overflow: "hidden", border: "1px solid var(--rule-strong)", background: "linear-gradient(180deg, #1a1713 0%, #0c0a07 100%)" }}>
        {/* Animated background */}
        <div className="hero-bg">
          <div className="hero-bg-img" />
          <div className="hero-bg-grain" />
          <div className="hero-flicker" />
          <div className="hero-bg-veil" />
        </div>
        {/* Subtle brand color washes on top */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 40%, rgba(201,169,97,0.08), transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(162,52,39,0.08), transparent 60%)", pointerEvents: "none" }} />

        {/* Chips top-left */}
        <div style={{ position: "absolute", top: 24, left: 28, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <div className="chip"><span className="dot" />LIVE · {t.heroEyebrow}</div>
          <span className="mono hide-mobile" style={{ color: "var(--ink-muted)", fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase" }}>
</span>
        </div>

        {/* Bottom-left content */}
        <div style={{ position: "absolute", left: 28, right: 28, bottom: 36, display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 28, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 820, flex: "1 1 480px" }}>
            <h1 className="display" style={{ margin: 0, fontSize: "clamp(42px, 7vw, 96px)", lineHeight: 1.0, fontWeight: 500, color: "var(--ink)", letterSpacing: "-0.02em" }}>
              <div>{t.heroH1[0]}</div>
              <div style={{ fontStyle: "italic", color: "var(--gold)" }}>{t.heroH1[1]}</div>
              <div>{t.heroH1[2]}</div>
            </h1>
            <p style={{ maxWidth: 580, marginTop: 22, fontSize: "clamp(14px, 1.4vw, 17px)", color: "var(--ink-soft)", lineHeight: 1.55 }}>{t.heroSub}</p>

            <div style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap", alignItems: "stretch" }}>
              <button className="btn primary" style={{ padding: "15px 26px" }}>{t.ctaPrimary} <span className="arrow">→</span></button>
              <button style={{ display: "flex", alignItems: "center", gap: 14, padding: "8px 20px 8px 8px", background: "rgba(240,232,213,0.04)", border: "1px solid var(--rule-strong)", color: "var(--ink)", cursor: "pointer", transition: "all .2s", borderRadius: 2 }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--gold)"}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--rule-strong)"}>
                <span style={{ width: 44, height: 44, borderRadius: "50%", border: "1px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(201,169,97,0.08)" }}>
                  <span style={{ width: 0, height: 0, borderLeft: "9px solid var(--gold)", borderTop: "6px solid transparent", borderBottom: "6px solid transparent", marginLeft: 3 }} />
                </span>
                <span style={{ lineHeight: 1.15, textAlign: "left" }}>
                  <span className="display-caps" style={{ fontSize: 11, display: "block", color: "var(--ink)" }}>{t.watchDemo}</span>
                  <span className="mono" style={{ marginTop: 3, fontSize: 10, color: "var(--ink-muted)", display: "block" }}>{t.watchDemoSub}</span>
                </span>
              </button>
            </div>
          </div>

          {/* Trusted row */}
          <div className="hide-mobile" style={{ minWidth: 240 }}>
            <div className="label" style={{ marginBottom: 12 }}>◆ {t.trusted}</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {["Kirat", "Thornwood", "Ferox Ltd", "Aurum Lab"].map((n, i) =>
              <div key={i} style={{ height: 38, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--rule)", background: "rgba(240,232,213,0.02)" }}>
                  <span className="display-caps" style={{ fontSize: 10, color: "var(--ink-soft)" }}>{n}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom scroll hint */}
        <div className="hide-mobile" style={{ position: "absolute", left: "50%", bottom: 14, transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: 10, color: "var(--ink-muted)" }}>
          <span className="mono" style={{ fontSize: 10, letterSpacing: ".28em", textTransform: "uppercase" }}>{t.scroll}</span>
          <span style={{ width: 1, height: 24, background: "linear-gradient(180deg, var(--gold) 0%, transparent 100%)" }} />
        </div>
      </div>
    </section>);

}

// ---- Spotlight hover handler ----
const spotlightMove = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", e.clientX - r.left + "px");
  e.currentTarget.style.setProperty("--my", e.clientY - r.top + "px");
};

// ---- Features ----
function Features({ t }) {
  const items = [
  { title: t.f1Title, body: t.f1Body, bullets: t.f1Bullets, cta: t.f1Cta, sigil: "agent" },
  { title: t.f2Title, body: t.f2Body, bullets: t.f2Bullets, cta: t.f2Cta, sigil: "flow" }];

  return (
    <section style={{ marginTop: 120 }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 46, gap: 28, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 460px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14, color: "var(--gold)" }}>
            <Diamond size={5} />
            <span className="label" style={{ color: "var(--gold)" }}>{t.featuresKicker} · 02</span>
            <span style={{ flex: 1, maxWidth: 80, height: 1, background: "var(--gold-dim)" }} />
          </div>
          <h2 className="display" style={{ margin: 0, fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.01em" }}>{t.featuresTitle}</h2>
          <p style={{ marginTop: 16, color: "var(--ink-soft)", fontSize: 16, maxWidth: 560, lineHeight: 1.55 }}>{t.featuresSub}</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 28 }}>
        {items.map((it, i) =>
        <article key={i} onMouseMove={spotlightMove} className="card-lift spotlight" style={{ position: "relative", padding: "36px 32px 32px", background: "linear-gradient(180deg, #15130f 0%, #0e0c09 100%)", border: "1px solid var(--rule-strong)", overflow: "hidden" }}>
            {/* corner flourishes */}
            <div style={{ position: "absolute", top: 0, left: 0, width: 40, height: 40, borderTop: "1px solid var(--gold)", borderLeft: "1px solid var(--gold)" }} />
            <div style={{ position: "absolute", bottom: 0, right: 0, width: 40, height: 40, borderBottom: "1px solid var(--gold)", borderRight: "1px solid var(--gold)" }} />

            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 56, height: 56, border: "1px solid var(--gold-dim)", background: "radial-gradient(circle, rgba(201,169,97,0.1), transparent 70%)" }}>
                  <Sigil kind={it.sigil} size={38} />
                </div>
                <div>
                  <div className="mono" style={{ fontSize: 10, color: "var(--gold)", letterSpacing: ".3em" }}>{`0${i + 1} / 02`}</div>
                  <div className="display-caps" style={{ fontSize: 11, color: "var(--ink-muted)", marginTop: 4 }}>{it.sigil}</div>
                </div>
              </div>
            </div>

            <h3 className="display" style={{ margin: "0 0 16px", fontSize: 30, fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.005em" }}>{it.title}</h3>
            <p style={{ margin: 0, fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.6 }}>{it.body}</p>

            <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0" }}>
              {it.bullets.map((b, bi) =>
            <li key={bi} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: bi < it.bullets.length - 1 ? "1px solid var(--rule)" : "none" }}>
                  <Diamond size={5} color="var(--gold)" />
                  <span style={{ fontSize: 13, color: "var(--ink)" }}>{b}</span>
                </li>
            )}
            </ul>

            <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid var(--rule-strong)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <a href="#" className="display-caps" style={{ fontSize: 11, color: "var(--gold)", display: "inline-flex", alignItems: "center", gap: 10 }}>{it.cta} <span className="arrow">→</span></a>
              <span className="mono" style={{ color: "var(--ink-muted)", fontSize: 10 }}>↳ 2–4 wks</span>
            </div>
          </article>
        )}
      </div>
    </section>);

}

// ---- News ----
function News({ t }) {
  return (
    <section style={{ marginTop: 130 }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 46, gap: 24, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 460px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14, color: "var(--gold)" }}>
            <Diamond size={5} />
            <span className="label" style={{ color: "var(--gold)" }}>{t.newsKicker} · 03</span>
            <span style={{ flex: 1, maxWidth: 80, height: 1, background: "var(--gold-dim)" }} />
          </div>
          <h2 className="display" style={{ margin: 0, fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.01em" }}>{t.newsTitle}</h2>
          <p style={{ marginTop: 16, color: "var(--ink-soft)", fontSize: 16, maxWidth: 560, lineHeight: 1.55 }}>{t.newsSub}</p>
        </div>
        <a href="#" className="display-caps hide-mobile" style={{ fontSize: 11, color: "var(--gold)", paddingBottom: 4, borderBottom: "1px solid var(--gold)", display: "inline-flex", alignItems: "center", gap: 10 }}>{t.readMore} <span className="arrow">→</span></a>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
        {t.posts.map((p, i) =>
        <article key={i} onMouseMove={spotlightMove} className="card-lift spotlight" style={{ position: "relative", overflow: "hidden", background: "#15130f", border: "1px solid var(--rule-strong)", display: "flex", flexDirection: "column" }}>
            <div style={{ height: 200, borderBottom: "1px solid var(--rule-strong)" }}>
              <Vignette tone={p.color} label={`cover · 16:9`} />
            </div>
            <div style={{ padding: 24, display: "flex", flexDirection: "column", flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <span className="chip" style={{ fontSize: 9, padding: "5px 11px" }}><Diamond size={4} color={p.color === "blood" ? "var(--blood)" : p.color === "silver" ? "var(--silver)" : "var(--gold)"} />{p.tag}</span>
                <span className="mono" style={{ color: "var(--ink-muted)", fontSize: 10 }}>{p.date}</span>
              </div>
              <h3 className="display" style={{ margin: "4px 0 10px", fontSize: 22, lineHeight: 1.25, fontWeight: 500, letterSpacing: "-0.005em" }}>{p.title}</h3>
              <p style={{ margin: "0 0 22px", color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.55, flex: 1 }}>{p.excerpt}</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 16, borderTop: "1px solid var(--rule)" }}>
                <span className="mono" style={{ color: "var(--ink-muted)", fontSize: 10 }}>↻ {p.read}</span>
                <a href="#" className="display-caps" style={{ fontSize: 10, color: "var(--gold)", display: "inline-flex", alignItems: "center", gap: 8 }}>{lang === "pl" ? "Czytaj" : "Read"} <span className="arrow">→</span></a>
              </div>
            </div>
          </article>
        )}
      </div>

      <div className="show-mobile" style={{ display: "none", justifyContent: "center", marginTop: 34 }}>
        <a href="#" className="btn ghost">{t.readMore} <span className="arrow">→</span></a>
      </div>
    </section>);

}

// ---- Final CTA ----
function FinalCTA({ t }) {
  return (
    <section id="kontakt" style={{ marginTop: 140, position: "relative" }}>
      <div style={{ position: "relative", background: "linear-gradient(180deg, #1a1712 0%, #0b0a07 100%)", border: "1px solid var(--gold-dim)", padding: "clamp(40px, 6vw, 80px) clamp(28px, 5vw, 72px)", overflow: "hidden" }}>
        {/* Inner ornamental rule */}
        <div style={{ position: "absolute", top: 18, left: 18, right: 18, bottom: 18, border: "1px solid rgba(201,169,97,0.18)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(201,169,97,0.04) 0 1px, transparent 1px 16px)" }} />
        {/* Big emblem watermark */}
        <div style={{ position: "absolute", left: -120, bottom: -120, opacity: .06, color: "var(--gold)" }}>
          <SwordEmblem size={460} />
        </div>

        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)", gap: "clamp(32px, 5vw, 64px)", alignItems: "start" }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16, color: "var(--gold)" }}>
              <Diamond size={5} />
              <span className="label" style={{ color: "var(--gold)" }}>{t.finalKicker} · 04</span>
              <span style={{ flex: 1, maxWidth: 80, height: 1, background: "var(--gold-dim)" }} />
            </div>
            <h2 className="display" style={{ margin: "0 0 22px", fontSize: "clamp(34px, 5vw, 64px)", fontWeight: 500, lineHeight: 1.05, letterSpacing: "-0.01em" }}>
              <div>{t.finalTitle[0]}</div>
              <div style={{ fontStyle: "italic", color: "var(--gold)" }}>{t.finalTitle[1]}</div>
            </h2>
            <p style={{ margin: "0 0 32px", maxWidth: 500, fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.55 }}>{t.finalSub}</p>

            <GoldRule style={{ maxWidth: 260, marginBottom: 30 }} />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px 28px", maxWidth: 460 }}>
              {t.stats.map((s, i) =>
              <div key={i}>
                  <div className="display" style={{ fontSize: 36, fontWeight: 500, color: "var(--gold)", letterSpacing: "-0.01em" }}>{s[0]}</div>
                  <div className="mono" style={{ color: "var(--ink-muted)", marginTop: 4, fontSize: 10, textTransform: "uppercase", letterSpacing: ".22em" }}>{s[1]}</div>
                </div>
              )}
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} style={{ position: "relative", background: "rgba(240,232,213,0.04)", border: "1px solid var(--rule-strong)", padding: "clamp(24px, 3vw, 36px)", minWidth: 0 }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: 28, height: 28, borderTop: "1px solid var(--gold)", borderLeft: "1px solid var(--gold)" }} />
            <div style={{ position: "absolute", top: 0, right: 0, width: 28, height: 28, borderTop: "1px solid var(--gold)", borderRight: "1px solid var(--gold)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, width: 28, height: 28, borderBottom: "1px solid var(--gold)", borderLeft: "1px solid var(--gold)" }} />
            <div style={{ position: "absolute", bottom: 0, right: 0, width: 28, height: 28, borderBottom: "1px solid var(--gold)", borderRight: "1px solid var(--gold)" }} />

            <div className="label" style={{ marginBottom: 18, color: "var(--gold)" }}>◆ formularz · request form</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
              <input className="inp" placeholder={t.form.name} />
              <input className="inp" placeholder={t.form.company} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
              <input className="inp" type="email" placeholder={t.form.email} />
              <input className="inp" type="tel" placeholder={t.form.phone} />
            </div>
            <textarea className="inp" placeholder={t.form.msg} style={{ marginBottom: 14 }} />
            <label style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 20, cursor: "pointer" }}>
              <input type="checkbox" style={{ marginTop: 3, accentColor: "var(--gold)" }} />
              <span className="mono" style={{ lineHeight: 1.5, fontSize: 10, color: "var(--ink-soft)", letterSpacing: ".06em" }}>{t.form.consent}</span>
            </label>
            <button className="btn primary" style={{ width: "100%", justifyContent: "center", padding: "15px 26px" }} type="submit">{t.form.submit} <span className="arrow">→</span></button>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 16, justifyContent: "center" }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1 L2 3 V6.5 C2 8.5 4 10.5 6 11 C8 10.5 10 8.5 10 6.5 V3 L6 1 Z" stroke="var(--gold)" strokeWidth="0.8" /></svg>
              <span className="mono" style={{ fontSize: 9, color: "var(--ink-muted)", letterSpacing: ".1em" }}>{t.form.privacy}</span>
            </div>
          </form>
        </div>
      </div>
    </section>);

}

// ---- Footer ----
function Footer({ t, lang }) {
  return (
    <footer style={{ marginTop: 80, paddingTop: 56, borderTop: "1px solid var(--rule)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, marginBottom: 56 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
            <div style={{ transform: "rotate(180deg)", display: "inline-flex" }}>
              <SwordEmblem size={40} gold />
            </div>
            <div className="display-caps" style={{ fontSize: 15 }}>Silver Sword</div>
          </div>
          <p className="display" style={{ margin: "0 0 20px", fontStyle: "italic", color: "var(--gold)", fontSize: 22, fontWeight: 500, letterSpacing: "-0.005em" }}>{t.footerTag}</p>
          <p className="mono" style={{ color: "var(--ink-muted)", fontSize: 11, letterSpacing: ".06em", lineHeight: 1.6 }}>{t.utility[0]}<br />{t.utility[1]}<br />{t.utility[2]}</p>
        </div>
        {t.footerCols.map((c, i) =>
        <div key={i}>
            <div className="label" style={{ marginBottom: 18, color: "var(--gold)" }}>◆ {c.title}</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {c.items.map((it, ii) =>
            <li key={ii} style={{ padding: "7px 0" }}>
                  <a href="#" style={{ color: "var(--ink-soft)", fontSize: 14, transition: "color .2s" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--gold)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--ink-soft)"}>{it}</a>
                </li>
            )}
            </ul>
          </div>
        )}
      </div>

      <GoldRule />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 20, flexWrap: "wrap", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
          {t.footerBottom.map((f, i) =>
          <React.Fragment key={i}>
              <span className="mono" style={{ color: "var(--ink-muted)", fontSize: 10, letterSpacing: ".12em" }}>{f}</span>
              {i < t.footerBottom.length - 1 && <span style={{ color: "var(--ink-muted)", opacity: .4 }}>·</span>}
            </React.Fragment>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {["LinkedIn", "GitHub", "X"].map((s) => <a key={s} href="#" className="mono" style={{ color: "var(--ink-soft)", fontSize: 10, textTransform: "uppercase", letterSpacing: ".2em" }}>{s}</a>)}
        </div>
      </div>
    </footer>);

}

// ---- App ----
let lang = "pl";
function App() {
  const defaults = /*EDITMODE-BEGIN*/{
    "lang": "pl",
    "accent": "gold"
  } /*EDITMODE-END*/;
  const [v, setTweak] = window.useTweaks ? window.useTweaks(defaults) : [defaults, () => {}];
  const [langState, setLangState] = useState(v.lang || "pl");
  lang = langState;
  useEffect(() => {if (v && v.lang && v.lang !== langState) setLangState(v.lang);}, [v.lang]);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = COPY[langState] || COPY.pl;
  const setLangBoth = (l) => {setLangState(l);setTweak && setTweak("lang", l);};

  const TP = window.TweaksPanel;
  const TS = window.TweakSection,Tr = window.TweakRadio;

  return (
    <div style={{ position: "relative" }}>
      <TopBar t={t} lang={langState} setLang={setLangBoth} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileDrawer open={menuOpen} onClose={() => setMenuOpen(false)} t={t} lang={langState} setLang={setLangBoth} />
      <div className="page">
        <Hero t={t} />
        <Features t={t} />
        <News t={t} />
        <FinalCTA t={t} />
        <Footer t={t} lang={langState} />
      </div>
      {TP &&
      <TP title="Tweaks">
          <TS label="Language / Język" />
          <Tr label="Interface" value={langState} onChange={(x) => setLangBoth(x)} options={[{ value: "pl", label: "PL" }, { value: "en", label: "EN" }]} />
        </TP>
      }
    </div>);

}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);