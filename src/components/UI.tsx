import { useState, useEffect, useRef, type ReactNode, type CSSProperties } from "react";

// ─── Animated background particles ───
export function Particles() {
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {Array.from({ length: 18 }).map((_, i) => {
        const size = Math.random() * 4 + 2;
        const opacity = Math.random() * 0.3 + 0.1;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: size,
              height: size,
              borderRadius: "50%",
              background: `rgba(168, 130, 255, ${opacity})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatParticle ${Math.random() * 20 + 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * -20}s`,
            }}
          />
        );
      })}
    </div>
  );
}

// ─── Section wrapper with fade-in on scroll ───
export function Section({
  id,
  children,
  style,
}: {
  id: string;
  children: ReactNode;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)",
        maxWidth: 1100,
        margin: "0 auto",
        padding: "100px 24px 40px",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

// ─── Glassmorphism card ───
export function Glass({
  children,
  style,
  hover,
  onClick,
}: {
  children: ReactNode;
  style?: CSSProperties;
  hover?: boolean;
  onClick?: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 20,
        padding: 28,
        transition: "all 0.35s cubic-bezier(.4,0,.2,1)",
        transform: hover && hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow:
          hover && hovered
            ? "0 20px 60px rgba(168,130,255,0.12)"
            : "0 4px 20px rgba(0,0,0,0.1)",
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── Tech badge ───
export function Badge({ text }: { text: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "5px 14px",
        borderRadius: 100,
        fontSize: 12,
        fontWeight: 500,
        background: "rgba(168,130,255,0.12)",
        color: "#c4a8ff",
        border: "1px solid rgba(168,130,255,0.2)",
        letterSpacing: "0.02em",
        margin: "3px 4px 3px 0",
      }}
    >
      {text}
    </span>
  );
}

// ─── Gradient heading ───
export function Heading({ children }: { children: ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "clamp(28px, 5vw, 42px)",
        fontWeight: 700,
        color: "#fff",
        marginBottom: 12,
        letterSpacing: "-0.02em",
        lineHeight: 1.2,
      }}
    >
      <span
        style={{
          background: "linear-gradient(135deg, #fff 0%, #c4a8ff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {children}
      </span>
    </h2>
  );
}
