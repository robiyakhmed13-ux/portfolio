import { useState, useEffect } from "react";
import { translations, langLabels, cvFiles, cvFileNames, projectIcons, type Lang } from "./data/translations";
import { Particles, Section, Glass, Badge, Heading } from "./components/UI";

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navItems = [
    { key: "about", label: t.nav.about },
    { key: "experience", label: t.nav.experience },
    { key: "projects", label: t.nav.projects },
    { key: "skills", label: t.nav.skills },
    { key: "contact", label: t.nav.contact },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a12",
        color: "#e0dce8",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <Particles />

      {/* Gradient orbs */}
      <div
        style={{
          position: "fixed",
          top: "-20%",
          right: "-10%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,130,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "-30%",
          left: "-15%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(100,80,200,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ═══════ NAV ═══════ */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 24px",
          height: 70,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrollY > 50 ? "rgba(10,10,18,0.85)" : "transparent",
          backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
          borderBottom: scrollY > 50 ? "1px solid rgba(255,255,255,0.05)" : "none",
          transition: "all 0.4s",
        }}
      >
        <div
          onClick={() => scrollTo("hero")}
          style={{
            cursor: "pointer",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 22,
            color: "#fff",
            letterSpacing: "-0.02em",
          }}
        >
          R<span style={{ color: "#a882ff" }}>.</span>A
        </div>

        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {navItems.map((item) => (
            <span key={item.key} className="nav-link" onClick={() => scrollTo(item.key)}>
              {item.label}
            </span>
          ))}
          <div style={{ display: "flex", gap: 6, marginLeft: 8 }}>
            {(Object.keys(langLabels) as Lang[]).map((l) => (
              <button
                key={l}
                className={`lang-btn ${lang === l ? "active" : ""}`}
                onClick={() => setLang(l)}
              >
                {langLabels[l]}
              </button>
            ))}
          </div>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}
        style={{
          display: "none",
          position: "fixed",
          top: 70,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(10,10,18,0.97)",
          backdropFilter: "blur(20px)",
          zIndex: 99,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.3s",
        }}
      >
        {navItems.map((item) => (
          <span
            key={item.key}
            className="nav-link"
            style={{ fontSize: 20 }}
            onClick={() => scrollTo(item.key)}
          >
            {item.label}
          </span>
        ))}
        <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
          {(Object.keys(langLabels) as Lang[]).map((l) => (
            <button
              key={l}
              className={`lang-btn ${lang === l ? "active" : ""}`}
              onClick={() => {
                setLang(l);
                setMenuOpen(false);
              }}
            >
              {langLabels[l]}
            </button>
          ))}
        </div>
      </div>

      {/* ═══════ HERO ═══════ */}
      <div
        id="hero"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 24px 80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: 800, textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 14,
              color: "#a882ff",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 20,
              animation: "fadeInUp 0.8s ease-out both",
            }}
          >
            {t.hero.greeting}
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(36px, 7vw, 68px)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 20,
              background: "linear-gradient(135deg, #ffffff 0%, #c4a8ff 50%, #8b6cc7 100%)",
              backgroundSize: "200% 200%",
              animation: "gradientShift 6s ease infinite, fadeInUp 0.8s ease-out 0.1s both",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.03em",
            }}
          >
            {t.hero.name}
          </h1>
          <p
            style={{
              fontSize: "clamp(14px, 2.5vw, 17px)",
              color: "#999",
              fontWeight: 500,
              marginBottom: 24,
              letterSpacing: "0.02em",
              animation: "fadeInUp 0.8s ease-out 0.2s both",
            }}
          >
            {t.hero.title}
          </p>
          <p
            style={{
              fontSize: "clamp(16px, 2.5vw, 20px)",
              color: "#bbb",
              lineHeight: 1.7,
              maxWidth: 620,
              margin: "0 auto 40px",
              animation: "fadeInUp 0.8s ease-out 0.3s both",
            }}
          >
            {t.hero.tagline}
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
              animation: "fadeInUp 0.8s ease-out 0.4s both",
            }}
          >
            <button className="cta-primary" onClick={() => scrollTo("projects")}>
              {t.hero.cta1} →
            </button>
            <a
              href={cvFiles[lang]}
              download={cvFileNames[lang]}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary"
              onClick={(e) => {
                e.preventDefault();
                fetch(cvFiles[lang])
                  .then((res) => res.blob())
                  .then((blob) => {
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = cvFileNames[lang];
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    window.URL.revokeObjectURL(url);
                  });
              }}
            >
              ↓ {t.hero.cta2}
            </a>
            <button className="cta-secondary" onClick={() => scrollTo("contact")}>
              {t.hero.cta3}
            </button>
          </div>
          {/* Scroll indicator */}
          <div style={{ marginTop: 80, animation: "fadeInUp 0.8s ease-out 0.6s both", opacity: 0.4 }}>
            <div
              style={{
                width: 24,
                height: 40,
                border: "2px solid rgba(255,255,255,0.2)",
                borderRadius: 12,
                margin: "0 auto",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: 4,
                  height: 8,
                  background: "#a882ff",
                  borderRadius: 4,
                  position: "absolute",
                  left: "50%",
                  top: 8,
                  transform: "translateX(-50%)",
                  animation: "floatParticle 2s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ ABOUT ═══════ */}
      <Section id="about">
        <Heading>{t.about.heading}</Heading>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24, marginTop: 32 }}>
          <Glass>
            <p style={{ lineHeight: 1.8, color: "#bbb", fontSize: 16, marginBottom: 16 }}>{t.about.p1}</p>
            <p style={{ lineHeight: 1.8, color: "#bbb", fontSize: 16, marginBottom: 16 }}>{t.about.p2}</p>
            <p style={{ lineHeight: 1.8, color: "#bbb", fontSize: 16 }}>{t.about.p3}</p>
          </Glass>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            <Glass>
              <h3
                style={{
                  color: "#c4a8ff",
                  fontSize: 15,
                  fontWeight: 600,
                  marginBottom: 16,
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {t.about.interests}
              </h3>
              {t.about.interestList.map((item: string, i: number) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#a882ff", flexShrink: 0 }} />
                  <span style={{ color: "#ccc", fontSize: 15 }}>{item}</span>
                </div>
              ))}
            </Glass>
            <Glass>
              <h3
                style={{
                  color: "#c4a8ff",
                  fontSize: 15,
                  fontWeight: 600,
                  marginBottom: 16,
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {t.philosophy.heading}
              </h3>
              <p style={{ color: "#999", fontSize: 14, marginBottom: 16, fontStyle: "italic" }}>
                {t.philosophy.intro}
              </p>
              {t.philosophy.items.map((item: string, i: number) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                  <span style={{ color: "#a882ff", fontFamily: "'JetBrains Mono', monospace", fontSize: 12, marginTop: 3 }}>
                    →
                  </span>
                  <span style={{ color: "#ccc", fontSize: 14, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </Glass>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                borderRadius: 12,
                background: "rgba(168,130,255,0.08)",
                border: "1px solid rgba(168,130,255,0.15)",
              }}
            >
              <span style={{ fontSize: 16 }}>📍</span>
              <span style={{ color: "#ccc", fontSize: 14 }}>{t.about.location}</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                borderRadius: 12,
                background: "rgba(80,200,120,0.08)",
                border: "1px solid rgba(80,200,120,0.15)",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#50c878",
                  animation: "pulseGlow 2s infinite",
                }}
              />
              <span style={{ color: "#ccc", fontSize: 14 }}>{t.about.availability}</span>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════ EXPERIENCE ═══════ */}
      <Section id="experience">
        <Heading>{t.experience.heading}</Heading>
        <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 24 }}>
          {t.experience.jobs.map((job: any, i: number) => (
            <Glass key={i} hover>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: 8,
                  marginBottom: 16,
                }}
              >
                <div>
                  <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 600, fontFamily: "'Playfair Display', serif" }}>
                    {job.company}
                  </h3>
                  <p style={{ color: "#a882ff", fontSize: 15, fontWeight: 500, marginTop: 4 }}>{job.role}</p>
                </div>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 13,
                    color: "#888",
                    padding: "4px 12px",
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.05)",
                  }}
                >
                  {job.period}
                </span>
              </div>
              {job.bullets.map((b: string, j: number) => (
                <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8 }}>
                  <span style={{ color: "#a882ff", marginTop: 6, fontSize: 6 }}>●</span>
                  <span style={{ color: "#bbb", fontSize: 14, lineHeight: 1.7 }}>{b}</span>
                </div>
              ))}
            </Glass>
          ))}

          {/* Education */}
          <div style={{ marginTop: 20 }}>
            <h3
              style={{
                color: "#c4a8ff",
                fontSize: 15,
                fontWeight: 600,
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              {t.experience.education}
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
              {t.experience.edu.map((ed: any, i: number) => (
                <Glass key={i} style={{ padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 24 }}>🎓</span>
                    <div>
                      <p style={{ color: "#fff", fontSize: 15, fontWeight: 600 }}>
                        {ed.degree}{" "}
                        {ed.status && (
                          <span style={{ color: "#a882ff", fontWeight: 400, fontSize: 13 }}>{ed.status}</span>
                        )}
                      </p>
                      <p style={{ color: "#888", fontSize: 13, marginTop: 2 }}>{ed.school}</p>
                    </div>
                  </div>
                </Glass>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3
              style={{
                color: "#c4a8ff",
                fontSize: 15,
                fontWeight: 600,
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              {t.experience.achievements}
            </h3>
            {t.experience.achList.map((a: string, i: number) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 18 }}>🏆</span>
                <span style={{ color: "#ccc", fontSize: 15 }}>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════ PROJECTS ═══════ */}
      <Section id="projects">
        <Heading>{t.projects.heading}</Heading>
        <div
          style={{
            marginTop: 32,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {t.projects.items.map((proj: any, i: number) => (
            <Glass key={i} hover style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "linear-gradient(135deg, rgba(168,130,255,0.2), rgba(100,80,200,0.1))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    flexShrink: 0,
                  }}
                >
                  {projectIcons[i]}
                </div>
                <div>
                  <h3 style={{ color: "#fff", fontSize: 19, fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>
                    {proj.name}
                  </h3>
                  <p style={{ color: "#a882ff", fontSize: 13, fontWeight: 500, marginTop: 2 }}>{proj.subtitle}</p>
                </div>
              </div>
              <p style={{ color: "#aaa", fontSize: 14, lineHeight: 1.7, marginBottom: 16, flex: 1 }}>{proj.desc}</p>
              <div style={{ marginBottom: 16 }}>
                {proj.features.map((f: string, j: number) => (
                  <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 6 }}>
                    <span style={{ color: "#50c878", fontSize: 10, marginTop: 5 }}>✦</span>
                    <span style={{ color: "#bbb", fontSize: 13, lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", marginTop: "auto" }}>
                {proj.tech.map((tech: string, j: number) => (
                  <Badge key={j} text={tech} />
                ))}
              </div>
            </Glass>
          ))}
        </div>
      </Section>

      {/* ═══════ SKILLS ═══════ */}
      <Section id="skills">
        <Heading>{t.skills.heading}</Heading>
        <div
          style={{
            marginTop: 32,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {t.skills.categories.map((cat: any, i: number) => (
            <Glass key={i} hover>
              <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 600, marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
                <span
                  style={{
                    width: 28,
                    height: 3,
                    borderRadius: 2,
                    background: "linear-gradient(90deg, #a882ff, transparent)",
                    display: "inline-block",
                  }}
                />
                {cat.name}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {cat.items.map((item: string, j: number) => (
                  <Badge key={j} text={item} />
                ))}
              </div>
            </Glass>
          ))}
        </div>
      </Section>

      {/* ═══════ CONTACT ═══════ */}
      <Section id="contact" style={{ paddingBottom: 80 }}>
        <div style={{ textAlign: "center" }}>
          <Heading>{t.contact.heading}</Heading>
          <p style={{ color: "#999", fontSize: 17, marginBottom: 8, marginTop: 8 }}>{t.contact.subtitle}</p>
          <p style={{ color: "#777", fontSize: 14, marginBottom: 40 }}>{t.contact.based}</p>
        </div>
        <Glass style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Email */}
            <a
              href="mailto:robiyakhmed13@gmail.com"
              className="contact-link"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "16px 24px",
                borderRadius: 14,
                background: "rgba(168,130,255,0.06)",
                border: "1px solid rgba(168,130,255,0.12)",
                textDecoration: "none",
              }}
            >
              <span style={{ fontSize: 20 }}>✉️</span>
              <div style={{ textAlign: "left" }}>
                <p style={{ color: "#888", fontSize: 12, marginBottom: 2 }}>Email</p>
                <p style={{ color: "#c4a8ff", fontSize: 15, fontWeight: 500 }}>robiyakhmed13@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+99893105041"
              className="contact-link"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "16px 24px",
                borderRadius: 14,
                background: "rgba(168,130,255,0.06)",
                border: "1px solid rgba(168,130,255,0.12)",
                textDecoration: "none",
              }}
            >
              <span style={{ fontSize: 20 }}>📱</span>
              <div style={{ textAlign: "left" }}>
                <p style={{ color: "#888", fontSize: 12, marginBottom: 2 }}>Phone</p>
                <p style={{ color: "#c4a8ff", fontSize: 15, fontWeight: 500 }}>+998 93 105 05 41</p>
              </div>
            </a>

            {/* Social links */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { href: "https://github.com/rose1304003", icon: "🐙", label: "GitHub" },
                { href: "https://www.linkedin.com/in/robiyakhon-akhmedova-06467b324", icon: "💼", label: "LinkedIn" },
                { href: "https://t.me/robiyakhmedova", icon: "✈️", label: "Telegram" },
                { href: "https://github.com/robiyakhmed13-ux", icon: "🌹", label: "GitHub 2" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    padding: 14,
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    textDecoration: "none",
                  }}
                >
                  <span style={{ fontSize: 18 }}>{link.icon}</span>
                  <span style={{ color: "#ccc", fontSize: 14, fontWeight: 500 }}>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </Glass>
      </Section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "40px 24px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p style={{ color: "#555", fontSize: 13, fontFamily: "'JetBrains Mono', monospace" }}>
          © 2025 Robiyakhon Akhmedova. Built with passion & code.
        </p>
      </footer>
    </div>
  );
}
