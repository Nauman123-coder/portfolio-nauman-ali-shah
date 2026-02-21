

import { useState, useEffect, useRef } from "react";
import "./DrProject.css";

const useInView = (threshold = 0.15) => {
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
      transform: inView ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`
    }}>{children}</div>
  );
};

const EyeIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const BrainIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.07-4.6A3 3 0 0 1 4 11a3 3 0 0 1 1.5-2.6 2.5 2.5 0 0 1 4-3.4z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.07-4.6A3 3 0 0 0 20 11a3 3 0 0 0-1.5-2.6 2.5 2.5 0 0 0-4-3.4z"/>
  </svg>
);

const ChartIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);

const ShieldIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const ZapIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const GitHubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const stats = [
  { value: "AUC", detail: "0.75–0.85", label: "Model Performance" },
  { value: "~80%", detail: "Accuracy", label: "Classification" },
  { value: "4", detail: "Biometrics", label: "Input Features" },
  { value: "Real-time", detail: "Groq API", label: "AI Reports" },
];

const techStack = [
  { name: "Logistic Regression", cat: "ML Model", color: "#00d4a8" },
  { name: "Scikit-learn", cat: "Training", color: "#00d4a8" },
  { name: "Streamlit", cat: "Deployment", color: "#ff6b6b" },
  { name: "Groq LLM", cat: "AI Agent", color: "#c77dff" },
  { name: "LangChain", cat: "Agent Framework", color: "#c77dff" },
  { name: "Python", cat: "Backend", color: "#ffd166" },
  { name: "Pickle", cat: "Model Persistence", color: "#ffd166" },
  { name: "Pandas / NumPy", cat: "Data", color: "#00d4a8" },
];

const pipeline = [
  { step: "01", title: "Patient Input", desc: "Age, Systolic BP, Diastolic BP, Cholesterol entered via Streamlit UI", icon: "👤" },
  { step: "02", title: "Preprocessing", desc: "Log transformation to reduce skew, then Z-score standardization using training statistics", icon: "⚙️" },
  { step: "03", title: "Feature Engineering", desc: "Interaction terms computed (e.g. Age × Cholesterol) to capture non-linear relationships", icon: "🔗" },
  { step: "04", title: "ML Prediction", desc: "Logistic Regression outputs risk probability + binary classification", icon: "🧠" },
  { step: "05", title: "Groq AI Agent", desc: "Specialized LLM agent generates streaming clinical report with next-step recommendations", icon: "🤖" },
  { step: "06", title: "Clinical Report", desc: "Contextualized, easy-to-read risk report delivered in real time to the clinician", icon: "📋" },
];

const aiRoles = [
  {
    icon: <BrainIcon size={28} />,
    title: "Risk Stratification Before Screening",
    body: "AI analyzes routine biometrics — age, blood pressure, cholesterol — to flag high-risk diabetic patients before any specialized ophthalmologic exam. This allows clinicians to prioritize scarce retinal imaging resources toward patients who need it most urgently."
  },
  {
    icon: <EyeIcon size={28} />,
    title: "Automated Retinal Image Analysis",
    body: "Deep learning models (CNNs) trained on fundus photographs can detect microaneurysms, hemorrhages, hard exudates, and neovascularization — early hallmarks of DR — often with accuracy matching or exceeding trained ophthalmologists, enabling population-scale screening."
  },
  {
    icon: <ZapIcon size={28} />,
    title: "Real-Time Clinical Decision Support",
    body: "LLM-powered agents like the Groq-backed agent in this project translate raw probability scores into actionable clinical language. Instead of a bare number, clinicians receive a structured report: risk context, contributing factors, and recommended next steps — in under a second."
  },
  {
    icon: <ShieldIcon size={28} />,
    title: "Reducing Preventable Blindness",
    body: "DR is responsible for a significant proportion of new adult-onset blindness globally, yet it is almost entirely preventable with timely intervention. AI-powered tools expand access to screening in low-resource settings where ophthalmologists are scarce, closing a critical care gap."
  },
  {
    icon: <ChartIcon size={28} />,
    title: "Interpretability & Clinician Trust",
    body: "Unlike black-box deep learning, this project deliberately uses Logistic Regression with explicit interaction terms. Each coefficient maps directly to a clinical variable, allowing physicians to understand why a patient was flagged — building trust and enabling collaborative AI-human decision-making."
  },
];

export default function DRProjectPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveStep(s => (s + 1) % pipeline.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#050a0e",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#e8f4f0",
      overflowX: "hidden",
    }}>

      {/* ── FIXED TOP NAVBAR with Back Button ── */}
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: "20px 5%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(5,10,14,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}>
        <span className="mono" style={{ color: "#00d4a8", fontSize: 13, letterSpacing: "0.15em" }}>
          DR-ML-ASSIST
        </span>

        <div style={{ display: "flex", gap: 16 }}>
          <a 
            href="/" 
            className="btn-outline"
            style={{ padding: "10px 24px", fontSize: 13 }}
          >
            ← Back to Portfolio
          </a>
          <a 
            href="https://github.com/Nauman123-coder/DR-Risk-Predictor" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ padding: "10px 24px", fontSize: 13 }}
          >
            <GitHubIcon size={16} /> View on GitHub
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center",
        position: "relative", 
        padding: "0 5%", 
        overflow: "hidden",
        paddingTop: "100px" // space for fixed nav
      }}>
        {/* Animated background */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(0,212,168,0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(199,125,255,0.05) 0%, transparent 60%)",
          transform: `translateY(${scrollY * 0.3}px)`,
        }} />

        {/* Floating eye rings */}
        {[...Array(3)].map((_, i) => (
          <div key={i} style={{
            position: "absolute", right: `${8 + i * 6}%`, top: `${20 + i * 8}%`,
            width: `${180 + i * 80}px`, height: `${180 + i * 80}px`,
            borderRadius: "50%", border: `1px solid rgba(0,212,168,${0.12 - i * 0.03})`,
            animation: `spin ${20 + i * 10}s linear infinite`,
          }} />
        ))}

        <div style={{ maxWidth: 900, position: "relative", zIndex: 1, textAlign: "center", margin: "0 auto" }}>
          <div style={{ marginBottom: 20 }}>
            <span className="tag" style={{ background: "rgba(0,212,168,0.1)", color: "#00d4a8", border: "1px solid rgba(0,212,168,0.3)" }}>
              CLINICAL AI · COMPUTER VISION · HEALTH INFORMATICS
            </span>
          </div>

          <h1 className="hero-title" style={{ fontSize: "clamp(42px, 7vw, 88px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 28, letterSpacing: "-0.02em" }}>
            AI-Powered <span style={{ color: "#00d4a8" }}>Diabetic</span><br />
            Retinopathy<br />
            <span style={{ fontWeight: 700, color: "rgba(232,244,240,0.6)" }}>Risk Analyzer</span>
          </h1>

          <p className="sans" style={{ fontSize: 18, color: "rgba(232,244,240,0.65)", maxWidth: 560, lineHeight: 1.7, marginBottom: 44, margin: "0 auto 44px" }}>
            A full-stack Clinical Decision Support System combining interpretable Machine Learning with real-time Groq-powered AI agents — turning four biometric inputs into a comprehensive retinopathy risk report.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://github.com/Nauman123-coder/DR-Risk-Predictor" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <GitHubIcon size={18} /> Explore Repository
            </a>
            <button className="btn-outline" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
              How It Works ↓
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 36, left: "5%", display: "flex", alignItems: "center", gap: 10, opacity: 0.4 }}>
          <div style={{ width: 1, height: 40, background: "linear-gradient(180deg, #00d4a8, transparent)" }} />
          <span className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", color: "#00d4a8" }}>SCROLL</span>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: "80px 5%", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 2, maxWidth: 1100, margin: "0 auto" }}>
          {stats.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ padding: "40px 32px", borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.06)" }}>
                <div className="hero-title" style={{ fontSize: 42, fontWeight: 900, color: "#00d4a8", lineHeight: 1 }}>{s.value}</div>
                <div className="mono" style={{ fontSize: 12, color: "rgba(232,244,240,0.4)", marginTop: 4 }}>{s.detail}</div>
                <div className="sans" style={{ fontSize: 13, color: "rgba(232,244,240,0.6)", marginTop: 8 }}>{s.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── ABOUT PROJECT ── */}
      <section style={{ padding: "120px 5%", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <FadeIn>
            <div>
              <div className="divider" style={{ marginBottom: 24 }} />
              <h2 className="hero-title" style={{ fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 24 }}>
                Why This<br /><span style={{ color: "#00d4a8" }}>Project Matters</span>
              </h2>
              <p className="sans" style={{ color: "rgba(232,244,240,0.65)", lineHeight: 1.8, fontSize: 16, marginBottom: 20 }}>
                Diabetic Retinopathy is the leading cause of preventable blindness among working-age adults globally. Despite being almost entirely preventable with timely treatment, millions go undetected each year — simply because access to specialist retinal screening is limited.
              </p>
              <p className="sans" style={{ color: "rgba(232,244,240,0.65)", lineHeight: 1.8, fontSize: 16 }}>
                This project demonstrates how a combination of classical interpretable ML and modern generative AI can bridge that gap — delivering meaningful risk assessment from routine clinical measurements that any general practitioner already collects.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { num: "463M", label: "people live with diabetes worldwide" },
                { num: "35%", label: "of diabetics have some degree of DR" },
                { num: "80%", label: "of DR-related blindness is preventable" },
                { num: "50%", label: "of cases go undetected until late stages" },
              ].map((f, i) => (
                <div key={i} className="card-hover" style={{
                  background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 8, padding: "28px 24px"
                }}>
                  <div className="hero-title" style={{ fontSize: 34, fontWeight: 900, color: "#00d4a8" }}>{f.num}</div>
                  <div className="sans" style={{ fontSize: 13, color: "rgba(232,244,240,0.55)", lineHeight: 1.5, marginTop: 8 }}>{f.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PIPELINE ── */}
      <section id="how-it-works" style={{ padding: "120px 5%", background: "rgba(0,212,168,0.02)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: 72, textAlign: "center" }}>
              <div className="divider" style={{ margin: "0 auto 24px" }} />
              <h2 className="hero-title" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700 }}>
                System <span style={{ color: "#00d4a8" }}>Architecture</span>
              </h2>
              <p className="sans" style={{ color: "rgba(232,244,240,0.5)", marginTop: 16, fontSize: 15 }}>End-to-end pipeline from raw input to clinical report</p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {pipeline.map((p, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className={`card-hover ${activeStep === i ? 'step-active' : ''}`} style={{
                  border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8,
                  padding: "32px 28px", cursor: "default",
                  transition: "all 0.4s ease",
                  background: activeStep === i ? undefined : "rgba(255,255,255,0.01)"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                    <span style={{ fontSize: 32 }}>{p.icon}</span>
                    <span className="mono" style={{ fontSize: 11, color: "rgba(0,212,168,0.5)", letterSpacing: "0.1em" }}>{p.step}</span>
                  </div>
                  <h3 className="hero-title" style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{p.title}</h3>
                  <p className="sans" style={{ fontSize: 14, color: "rgba(232,244,240,0.55)", lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI ROLE IN DR ── */}
      <section style={{ padding: "120px 5%", maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: 72 }}>
            <div className="divider" style={{ marginBottom: 24 }} />
            <h2 className="hero-title" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.15 }}>
              The Role of <span style={{ color: "#c77dff" }}>Artificial Intelligence</span><br />
              in Diabetic Retinopathy
            </h2>
            <p className="sans" style={{ color: "rgba(232,244,240,0.55)", maxWidth: 640, lineHeight: 1.8, marginTop: 20, fontSize: 16 }}>
              From screening millions to explaining a single patient's risk — AI is reshaping every layer of retinopathy care.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {aiRoles.map((role, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="card-hover" style={{
                display: "grid", gridTemplateColumns: "64px 1fr",
                gap: 32, padding: "40px 36px",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 4,
                background: "rgba(255,255,255,0.015)",
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 8,
                  background: "rgba(199,125,255,0.1)",
                  border: "1px solid rgba(199,125,255,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#c77dff", flexShrink: 0
                }}>
                  {role.icon}
                </div>
                <div>
                  <h3 className="hero-title" style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>{role.title}</h3>
                  <p className="sans" style={{ fontSize: 15, color: "rgba(232,244,240,0.6)", lineHeight: 1.8 }}>{role.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section style={{ padding: "100px 5%", background: "rgba(255,255,255,0.01)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: 60, textAlign: "center" }}>
              <div className="divider" style={{ margin: "0 auto 24px" }} />
              <h2 className="hero-title" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700 }}>Technology Stack</h2>
            </div>
          </FadeIn>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {techStack.map((t, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="card-hover" style={{
                  border: `1px solid ${t.color}30`,
                  borderRadius: 6, padding: "18px 24px",
                  background: `${t.color}08`,
                  textAlign: "center", minWidth: 140
                }}>
                  <div className="sans" style={{ fontSize: 15, fontWeight: 700, color: t.color }}>{t.name}</div>
                  <div className="mono" style={{ fontSize: 11, color: "rgba(232,244,240,0.35)", marginTop: 4 }}>{t.cat}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODEL DETAILS ── */}
      <section style={{ padding: "120px 5%", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <FadeIn>
            <div>
              <div className="divider" style={{ marginBottom: 24 }} />
              <h2 className="hero-title" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, marginBottom: 24 }}>
                Model <span style={{ color: "#00d4a8" }}>Design</span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { label: "Algorithm", value: "Logistic Regression with explicit interaction terms" },
                  { label: "Preprocessing", value: "Log transform → Z-score standardization using training set μ and σ" },
                  { label: "Feature Engineering", value: "6 pairwise interaction features from 4 base biometrics (C(4,2))" },
                  { label: "Interpretability", value: "Signed coefficients → direct clinical attribution of risk drivers" },
                  { label: "Persistence", value: "Model + training statistics saved as a unified .pkl package" },
                ].map((item, i) => (
                  <div key={i} style={{ borderLeft: "2px solid rgba(0,212,168,0.3)", paddingLeft: 20 }}>
                    <div className="mono" style={{ fontSize: 12, color: "#00d4a8", letterSpacing: "0.1em", marginBottom: 4 }}>{item.label.toUpperCase()}</div>
                    <div className="sans" style={{ fontSize: 15, color: "rgba(232,244,240,0.7)", lineHeight: 1.6 }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <div className="divider" style={{ marginBottom: 24 }} />
              <h2 className="hero-title" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, marginBottom: 24 }}>
                AI Agent <span style={{ color: "#c77dff" }}>Design</span>
              </h2>
              <div style={{ background: "rgba(199,125,255,0.04)", border: "1px solid rgba(199,125,255,0.15)", borderRadius: 8, padding: "32px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {[
                    { label: "LLM Provider", value: "Groq — sub-second inference latency" },
                    { label: "Framework", value: "LangChain / LangGraph agent orchestration" },
                    { label: "Output Mode", value: "Streaming tokens for real-time report rendering" },
                    { label: "Context", value: "Patient biometrics + ML prediction + model metadata" },
                    { label: "Output", value: "Structured clinical report: risk factors, severity, next steps" },
                    { label: "Security", value: "API key loaded from .env — never hardcoded" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: 16, paddingBottom: 16, borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                      <span className="mono" style={{ fontSize: 12, color: "#c77dff", flexShrink: 0 }}>{item.label}</span>
                      <span className="sans" style={{ fontSize: 14, color: "rgba(232,244,240,0.6)", textAlign: "right" }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: "100px 5%", textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,212,168,0.06) 0%, transparent 70%)"
      }}>
        <FadeIn>
          <div className="divider" style={{ margin: "0 auto 32px" }} />
          <h2 className="hero-title" style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 900, marginBottom: 20 }}>
            Explore the <span style={{ color: "#00d4a8" }}>Full Project</span>
          </h2>
          <p className="sans" style={{ color: "rgba(232,244,240,0.5)", fontSize: 17, maxWidth: 500, margin: "0 auto 44px", lineHeight: 1.7 }}>
            Browse the training notebook, agent logic, and Streamlit app on GitHub.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://github.com/Nauman123-coder/DR-Risk-Predictor" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <GitHubIcon size={18} /> Open Repository
            </a>
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "32px 5%", borderTop: "1px solid rgba(255,255,255,0.04)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <span className="mono" style={{ fontSize: 12, color: "rgba(232,244,240,0.25)", letterSpacing: "0.1em" }}>DR-ML-ASSIST · NAUMAN123-CODER</span>
        <span className="sans" style={{ fontSize: 12, color: "rgba(232,244,240,0.2)" }}>For educational purposes only — not a substitute for clinical diagnosis</span>
      </footer>
    </div>
  );
}