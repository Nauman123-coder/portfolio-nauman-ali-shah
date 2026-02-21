// src/components/SkinCancerProject.jsx
import React from 'react';
import { Activity, Shield, Microchip, Search, Globe, ChevronRight, CheckCircle } from 'lucide-react';

import './SkinCancerProject.css';

// Import the new image (place skin-cancer.png in src/assets/tech/)
import SkinCancerImage from '../assets/tech/skin-cancer.jpg';

const SkinCancerProject = () => {
  return (
    <div className="skin-cancer-page">
      {/* Navigation - logo on the left/start, no links */}
        <nav className="nav-bar">
            <div className="logo">
                Nauman Ali Shah <span className="highlight">| AI in Medicine</span>
            </div>
        {/* No nav-links div anymore */}
        </nav>

      {/* Hero - title now centered */}
      <header className="hero">
        <div className="hero-accent-line" />
        <h1 className="hero-title">
          Skin Cancer <br />
          <span className="hero-gradient">Detection</span>
        </h1>
        <p className="hero-subtitle">
          <Activity className="pulse-icon" /> Early Detection Saves Lives
        </p>

        {/* Back to Portfolio button - placed here as requested */}
        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="btn secondary inline-flex items-center gap-2 px-6 py-3"
          >
            ← Back to Portfolio
          </a>
        </div>
      </header>

      {/* Project Overview - replaced code card with image */}
      <section className="section overview">
        <div className="content-grid">
          <div className="overview-text">
            <h2 className="section-title">Project Overview</h2>
            <p className="overview-description">
              This system leverages <strong>EfficientNet-B0</strong> and the <strong>HAM10000</strong> dataset to classify 
              dermatoscopic images into 7 distinct skin lesion types. Beyond simple classification, it integrates 
              <strong> Grad-CAM visualization</strong>, providing explainable AI that shows clinicians exactly 
              which pixels influenced the diagnosis.
            </p>
            <ul className="feature-list">
              <li className="feature-item">
                <CheckCircle size={18} className="check-icon" /> Jupyter Notebook for Inference & Lab Testing
              </li>
              <li className="feature-item">
                <CheckCircle size={18} className="check-icon" /> Real-time Gradio Web Demo
              </li>
              <li className="feature-item">
                <CheckCircle size={18} className="check-icon" /> Production-ready Inference Pipeline
              </li>
            </ul>
          </div>

          <div className="image-card">
            <img 
              src={SkinCancerImage} 
              alt="Skin Cancer Detection Visualization" 
              className="w-full h-auto rounded-xl shadow-2xl object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/600x400/1a1a2e/915eff?text=Skin+Cancer+Detection';
              }}
            />
          </div>
        </div>
      </section>

      {/* Impact / Stats */}
      <section className="section stats">
        <h2 className="section-title center">The Impact of AI in Dermatology</h2>
        <div className="stats-grid">
          <StatCard 
            icon={<Shield className="stat-icon purple" />}
            title="99% Survival Rate"
            desc="When detected early, the 5-year survival rate is near perfect. AI bridges the diagnostic gap."
          />
          <StatCard 
            icon={<Globe className="stat-icon indigo" />}
            title="Global Accessibility"
            desc="Brings specialist-level visual assessment to underserved regions without dermatologists."
          />
          <StatCard 
            icon={<Search className="stat-icon purple" />}
            title="Rapid Screening"
            desc="Acts as a high-speed second opinion tool, reducing biopsy delays and clinician burnout."
          />
        </div>
      </section>

      {/* New: Additional paragraphs about AI in dermatology */}
      <section className="section ai-insights bg-white/5 border-y border-white/10 py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">AI Revolutionizing Dermatology</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Artificial Intelligence is transforming dermatology by enabling faster and more consistent early detection of skin cancer — the key factor in improving survival rates. For melanoma, the deadliest form, early-stage diagnosis boosts 5-year survival to over 95–99%, while late detection drops it significantly. AI tools analyze dermoscopic images with high accuracy (often 90–99% in recent studies), frequently matching or exceeding non-specialist clinicians and supporting overburdened dermatologists.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Beyond accuracy, AI enhances accessibility — especially in underserved or rural areas with limited specialist access. Smartphone-based or handheld AI devices allow primary care providers and even patients to perform preliminary screenings, reducing unnecessary biopsies (which cause anxiety and scarring) and prioritizing high-risk cases for expert review. Explainable AI methods like Grad-CAM provide visual heatmaps, building clinician trust by showing exactly which image regions influenced the prediction.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Recent advancements (2025–2026) include multimodal models combining images with patient metadata (age, skin type, risk factors), achieving sensitivities up to 99.5%+ and better performance across diverse skin tones. While challenges remain — such as training data bias toward lighter skin types and the need for real-world clinical validation — AI is proving to be a powerful assistant, not a replacement, for dermatologists, ultimately saving lives through earlier intervention and more equitable care.
          </p>
        </div>
      </section>

      {/* Tables */}
      <section className="section tables dark">
        <div className="content-container">
          <div className="tables-grid">
            <div>
              <h3 className="table-title">
                <Microchip className="table-icon" /> Dataset: HAM10000
              </h3>
              <div className="table-wrapper">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow label="Total Images" value="10,015" />
                    <TableRow label="Classes" value="7 (Mel, NV, BCC, etc.)" />
                    <TableRow label="Resolution" value="Variable (mostly 600×450)" />
                    <TableRow label="Source" value="ISIC Archive (Kaggle)" />
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="table-title">
                <Activity className="table-icon indigo" /> Clinician Benefits
              </h3>
              <div className="table-wrapper">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Benefit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow label="Grad-CAM" value="Interpretability & Trust" />
                    <TableRow label="7-Class Output" value="Risk Stratification" />
                    <TableRow label="Gradio Web" value="Zero-install accessibility" />
                    <TableRow label="PyTorch Flow" value="High performance & Lightweight" />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA - updated link */}
      <footer className="footer">
        <p className="footer-text">Interested in the technical implementation?</p>
        <a 
          href="https://github.com/Nauman123-coder/skin-cancer-detection"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button inline-flex items-center gap-2"
        >
          View Repository <ChevronRight size={20} />
        </a>
      </footer>
    </div>
  );
};

// Helper Components remain the same
const StatCard = ({ icon, title, desc }) => (
  <div className="stat-card">
    <div className="stat-icon-wrapper">{icon}</div>
    <h3 className="stat-title">{title}</h3>
    <p className="stat-desc">{desc}</p>
  </div>
);

const TableRow = ({ label, value }) => (
  <tr>
    <td className="table-label">{label}</td>
    <td className="table-value">{value}</td>
  </tr>
);

export default SkinCancerProject;