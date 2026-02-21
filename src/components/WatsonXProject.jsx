import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./WatsonXProject.css";

const useInView = (threshold = 0.12) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`
    }}>{children}</div>
  );
};

const GitHubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const MicIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
    <line x1="12" y1="19" x2="12" y2="23"/>
    <line x1="8" y1="23" x2="16" y2="23"/>
  </svg>
);

const GlobeIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const SpeakerIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
  </svg>
);

const BrainIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.07-4.6A3 3 0 0 1 4 11a3 3 0 0 1 1.5-2.6 2.5 2.5 0 0 1 4-3.4z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.07-4.6A3 3 0 0 0 20 11a3 3 0 0 0-1.5-2.6 2.5 2.5 0 0 0-4-3.4z"/>
  </svg>
);

const FlaskIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6m-6 0v7L5.5 18A2 2 0 0 0 7.4 21h9.2a2 2 0 0 0 1.9-3L15 10V3M9 3H6m12 0h-3"/>
  </svg>
);

const ServerIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
    <line x1="6" y1="6" x2="6.01" y2="6"/>
    <line x1="6" y1="18" x2="6.01" y2="18"/>
  </svg>
);

const pipeline = [
  {
    step: "01",
    icon: <MicIcon size={26} />,
    title: "Voice Capture",
    desc: "User speaks into the browser mic. Raw audio is streamed to Watson STT for real-time transcription into digital text.",
    color: "#3b82f6"
  },
  {
    step: "02",
    icon: <BrainIcon size={26} />,
    title: "LLM Translation",
    desc: "Transcribed text is passed to Mistral-Medium-2505 on IBM Watsonx.ai. The model generates a high-context, accurate translation.",
    color: "#f59e0b"
  },
  {
    step: "03",
    icon: <SpeakerIcon size={26} />,
    title: "Speech Synthesis",
    desc: "Translated text is sent to Watson TTS, which synthesizes natural-sounding audio output in the target language.",
    color: "#10b981"
  },
];

const techStack = [
  { name: "IBM Watsonx.ai", cat: "LLM Platform", color: "#3b82f6" },
  { name: "Mistral-Medium-2505", cat: "Translation Model", color: "#3b82f6" },
  { name: "Watson STT", cat: "Speech-to-Text", color: "#f59e0b" },
  { name: "Watson TTS", cat: "Text-to-Speech", color: "#f59e0b" },
  { name: "Python / Flask", cat: "Backend", color: "#10b981" },
  { name: "Bootstrap", cat: "Frontend", color: "#10b981" },
  { name: "JavaScript / jQuery", cat: "Client Logic", color: "#10b981" },
  { name: "Docker", cat: "Containerization", color: "#6366f1" },
];

const architecture = [
  {
    file: "server.py",
    role: "The Nervous System",
    desc: "Flask application handling all API routes, request coordination, and response orchestration between the frontend and AI services.",
    icon: <ServerIcon size={22} />,
    color: "#3b82f6"
  },
  {
    file: "worker.py",
    role: "The Brain",
    desc: "Core logic for Watsonx LLM processing, Watson STT transcription, and TTS synthesis. All AI operations live here.",
    icon: <BrainIcon size={22} />,
    color: "#f59e0b"
  },
  {
    file: "index.html + script.js",
    role: "The Face",
    desc: "Responsive Bootstrap UI with CSS keyframe animations and jQuery-powered async interactions for a seamless voice experience.",
    icon: <FlaskIcon size={22} />,
    color: "#10b981"
  },
];

const stats = [
  { value: "E→S", detail: "English to Spanish", label: "Current Config" },
  { value: "3", detail: "Core Services", label: "IBM Watson APIs" },
  { value: "RTT", detail: "Real-time", label: "Translation Speed" },
  { value: "∞", detail: "Language pairs", label: "Extensible To" },
];

export default function WatsonxProject() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [activeBar, setActiveBar] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveBar(b => (b + 1) % 7), 180);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="wx-page">

      {/* Background layers */}
      <div className="wx-bg-grid" style={{ pointerEvents: "none" }} />
      <div className="wx-bg-glow" style={{
        pointerEvents: "none",
        transform: `translateY(${scrollY * 0.15}px)`
      }} />

      {/* ── NAVBAR ── */}
      <nav className="wx-nav">
        <span className="wx-brand">WATSONX <span className="wx-brand-accent">/ VOICE</span></span>
        <div className="wx-nav-actions">
          <button className="wx-btn-ghost" onClick={() => navigate("/")}>
            ← Back to Portfolio
          </button>
          <a
            href="https://github.com/Nauman123-coder/Watsonx-Voice-Translation-Assistant"
            target="_blank"
            rel="noopener noreferrer"
            className="wx-btn-primary"
          >
            <GitHubIcon size={16} /> View on GitHub
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="wx-hero">
        {/* Animated waveform bars */}
        <div className="wx-waveform" style={{ pointerEvents: "none" }}>
          {[...Array(28)].map((_, i) => (
            <div
              key={i}
              className="wx-bar"
              style={{
                height: `${20 + Math.sin((i + activeBar) * 0.7) * 40 + Math.sin((i + activeBar) * 1.3) * 20}px`,
                opacity: 0.15 + Math.abs(Math.sin((i + activeBar) * 0.5)) * 0.25,
                transition: "height 0.18s ease, opacity 0.18s ease"
              }}
            />
          ))}
        </div>

        <div className="wx-hero-content">
          <div className="wx-badge">
            <span className="wx-badge-dot" />
            IBM WATSONX · GENERATIVE AI · HEALTHCARE COMMUNICATION
          </div>

            <h1 className="wx-hero-title">
                Voice-to-Voice <span className="wx-accent-blue">AI</span><br />
                Translation<br />
                Assistant
            </h1>

          <p className="wx-hero-sub">
            An end-to-end speech pipeline powered by IBM Watsonx and Mistral-Medium — capturing voice, translating with LLM precision, and synthesizing natural speech output in real time.
          </p>

          <div className="wx-hero-cta">
            <a
              href="https://github.com/Nauman123-coder/Watsonx-Voice-Translation-Assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="wx-btn-primary large"
            >
              <GitHubIcon size={18} /> Explore Repository
            </a>
            <button
              className="wx-btn-ghost large"
              onClick={() => document.getElementById("wx-pipeline")?.scrollIntoView({ behavior: "smooth" })}
            >
              How It Works ↓
            </button>
          </div>
        </div>

        <div className="wx-scroll-hint">
          <div className="wx-scroll-line" />
          <span>SCROLL</span>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="wx-stats">
        {stats.map((s, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="wx-stat-item" style={{ borderLeft: i === 0 ? "none" : undefined }}>
              <div className="wx-stat-value">{s.value}</div>
              <div className="wx-stat-detail">{s.detail}</div>
              <div className="wx-stat-label">{s.label}</div>
            </div>
          </FadeIn>
        ))}
      </section>

      {/* ── OVERVIEW ── */}
      <section className="wx-section">
        <div className="wx-section-inner">
          <div className="wx-two-col">
            <FadeIn>
              <div>
                <div className="wx-section-label">OVERVIEW</div>
                <h2 className="wx-section-title">
                  Bridging Language Barriers<br />
                  <span className="wx-accent-blue">with Generative AI</span>
                </h2>
                <p className="wx-body-text">
                  This project demonstrates how Generative AI can bridge critical communication gaps. Built with Healthcare AI in mind, it provides a foundation for tools that enable doctors and patients to communicate seamlessly across language barriers — a problem that directly impacts medical outcomes.
                </p>
                <p className="wx-body-text">
                  Currently configured for English-to-Spanish translation, the architecture is language-agnostic and designed to scale. Any Watson-supported language pair can be substituted with minimal configuration changes.
                </p>
                <div className="wx-tag-row">
                  {["python", "flask", "text-to-speech", "language-translation", "speech-to-text", "ibm-watson", "generative-ai", "watsonx-ai"].map((tag, i) => (
                    <span key={i} className="wx-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="wx-use-case-card">
                <div className="wx-use-case-header">
                  <GlobeIcon size={20} />
                  <span>Healthcare Use Case</span>
                </div>
                <div className="wx-use-case-body">
                  {[
                    { title: "Doctor ↔ Patient", desc: "Real-time voice translation during consultations eliminates interpreter dependency." },
                    { title: "Emergency Rooms", desc: "Rapid multilingual triage communication where every second matters." },
                    { title: "Telehealth", desc: "Remote consultations across language barriers become seamless and accessible." },
                    { title: "Rural Access", desc: "Brings specialist-level care to underserved communities without language barriers." },
                  ].map((item, i) => (
                    <div key={i} className="wx-use-case-item">
                      <div className="wx-use-case-dot" />
                      <div>
                        <div className="wx-use-case-title">{item.title}</div>
                        <div className="wx-use-case-desc">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── PIPELINE ── */}
      <section id="wx-pipeline" className="wx-section alt">
        <div className="wx-section-inner">
          <FadeIn>
            <div className="wx-section-label center">VOICE PIPELINE</div>
            <h2 className="wx-section-title center">
              End-to-End <span className="wx-accent-amber">Signal Flow</span>
            </h2>
            <p className="wx-body-text center" style={{ maxWidth: 540, margin: "0 auto 56px" }}>
              Three tightly integrated Watson services form a continuous voice processing chain — from raw audio to synthesized speech output.
            </p>
          </FadeIn>

          <div className="wx-pipeline-grid">
            {pipeline.map((p, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="wx-pipeline-card" style={{ "--card-accent": p.color }}>
                  <div className="wx-pipeline-step">{p.step}</div>
                  <div className="wx-pipeline-icon" style={{ color: p.color, borderColor: `${p.color}30`, background: `${p.color}10` }}>
                    {p.icon}
                  </div>
                  <h3 className="wx-pipeline-title">{p.title}</h3>
                  <p className="wx-pipeline-desc">{p.desc}</p>
                  {i < pipeline.length - 1 && (
                    <div className="wx-pipeline-arrow">→</div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE ── */}
      <section className="wx-section">
        <div className="wx-section-inner">
          <FadeIn>
            <div className="wx-section-label">PROJECT STRUCTURE</div>
            <h2 className="wx-section-title">
              Code <span className="wx-accent-blue">Architecture</span>
            </h2>
          </FadeIn>

          <div className="wx-arch-list">
            {architecture.map((a, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="wx-arch-card">
                  <div className="wx-arch-icon" style={{ color: a.color, background: `${a.color}12`, borderColor: `${a.color}25` }}>
                    {a.icon}
                  </div>
                  <div className="wx-arch-body">
                    <div className="wx-arch-file">{a.file}</div>
                    <div className="wx-arch-role" style={{ color: a.color }}>{a.role}</div>
                    <div className="wx-arch-desc">{a.desc}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="wx-section alt">
        <div className="wx-section-inner">
          <FadeIn>
            <div className="wx-section-label center">TECHNOLOGIES</div>
            <h2 className="wx-section-title center">Tech Stack</h2>
          </FadeIn>
          <div className="wx-tech-grid">
            {techStack.map((t, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="wx-tech-card" style={{ "--t-color": t.color }}>
                  <div className="wx-tech-name" style={{ color: t.color }}>{t.name}</div>
                  <div className="wx-tech-cat">{t.cat}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SETUP ── */}
      <section className="wx-section">
        <div className="wx-section-inner">
          <FadeIn>
            <div className="wx-section-label">QUICK START</div>
            <h2 className="wx-section-title">
              Setup & <span className="wx-accent-amber">Installation</span>
            </h2>
          </FadeIn>
          <div className="wx-steps">
            {[
              { n: "1", title: "Clone the Repository", cmd: "git clone https://github.com/Nauman123-coder/Watsonx-Voice-Translation-Assistant.git" },
              { n: "2", title: "Install Dependencies", cmd: "pip install -r requirements.txt" },
              { n: "3", title: "Configure IBM Credentials", cmd: "# Add Watsonx API key, Watson STT & TTS credentials to .env" },
              { n: "4", title: "Run the Flask Server", cmd: "python server.py" },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="wx-step">
                  <div className="wx-step-num">{s.n}</div>
                  <div className="wx-step-body">
                    <div className="wx-step-title">{s.title}</div>
                    <div className="wx-step-cmd">{s.cmd}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="wx-cta">
        <FadeIn>
          <div className="wx-cta-inner">
            <div className="wx-section-label center">OPEN SOURCE</div>
            <h2 className="wx-cta-title">
              Explore the <span className="wx-accent-blue">Full Project</span>
            </h2>
            <p className="wx-body-text center" style={{ maxWidth: 480, margin: "0 auto 40px" }}>
              Full source code, setup instructions, and architecture documentation available on GitHub.
            </p>
            <div className="wx-cta-buttons">
              <a
                href="https://github.com/Nauman123-coder/Watsonx-Voice-Translation-Assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="wx-btn-primary large"
              >
                <GitHubIcon size={18} /> Open Repository
              </a>
              <button className="wx-btn-ghost large" onClick={() => navigate("/")}>
                ← Back to Portfolio
              </button>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── FOOTER ── */}
      <footer className="wx-footer">
        <span className="wx-footer-brand">WATSONX VOICE ASSISTANT · NAUMAN ALI SHAH</span>
        <span className="wx-footer-note">Built with IBM Watsonx.ai & Watson Speech Services</span>
      </footer>
    </div>
  );
}