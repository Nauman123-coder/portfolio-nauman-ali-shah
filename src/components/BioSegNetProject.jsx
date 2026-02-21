// src/components/BioSegNetProject.jsx
import React, { useEffect } from 'react';
import { 
  Brain, 
  GitBranch, 
  Microscope, 
  ArrowLeft, 
  CheckCircle, 
  Github, 
  Layers, 
  Dna,
  Zap,
  Globe
} from 'lucide-react';

import './BioSegNetProject.css';

// Asset imports (Vite will handle them)
import neuronSeg1 from '../assets/tech/neuron-seg1.png';
import neuronSeg2 from '../assets/tech/neuron-seg2.jpeg';

const BioSegNetProject = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="biosegnet-page">
      {/* Background Decorative Elements */}
      <div className="background-glows">
        <div className="glow-circle top-left" />
        <div className="glow-circle bottom-right" />
        <div className="starfield-overlay" />
      </div>

      {/* Header / Navbar */}
      <header className="header">
        <div className="logo-container">
          <div className="logo-icon">
            <Dna size={18} />
          </div>
          <span className="logo-text">
            Nauman Ali Shah <span className="highlight">| AI in Medicine</span>
          </span>
        </div>
      </header>

      <main className="main-content">
        {/* Hero */}
        <section className="hero">
          <a href="/" className="back-link">
            <ArrowLeft size={18} />
            <span>Back to Portfolio</span>
          </a>

          <h1 className="hero-title">
            <span className="gradient-text">BioSegNet</span>
            <br />
            <span className="subtitle">Neuron Segmentation</span>
          </h1>

          <div className="hero-subtitle">
            <Microscope size={24} />
            <span>Precise Neuron Segmentation in Electron Microscopy</span>
          </div>

          <div className="hero-image-container">
            {/* <img
              src={neuronSeg1}
              alt="BioSegNet Neuron Segmentation Overview"
              className="hero-image"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/1200x600/1e1b4b/a855f7?text=BioSegNet+Model+Architecture";
              }}
            /> */}
          </div>
        </section>

        {/* Project Overview */}
        <section className="overview-section">
          <div className="overview-grid">
            <div className="overview-text">
              <h2 className="section-title">
                <span className="title-line" />
                <span>Project Overview</span>
              </h2>

              <div className="overview-description">
                <p>
                  <strong>BioSegNet</strong> is a deep learning solution engineered for high-precision, 
                  pixel-level segmentation of neural structures within electron microscopy (EM) data. 
                  Built on the <strong>U-Net architecture</strong>, the model automates the arduous task 
                  of distinguishing individual neurons from background tissue.
                </p>
                <p>
                  By leveraging <strong>PyTorch</strong>, this implementation addresses the critical 
                  bottleneck in connectomics: the conversion of raw grayscale volumes into structured 
                  binary masks. The goal is to facilitate massive-scale reconstruction of 
                  brain wiring diagrams with minimal manual intervention.
                </p>
              </div>

              <ul className="feature-list">
                {[
                  "Pixel-wise semantic segmentation",
                  "Advanced U-Net implementation in PyTorch",
                  "High performance on low-annotation datasets",
                  "Optimized Binary Cross-Entropy (BCE) & Dice Loss",
                  "Automated EM image preprocessing pipeline"
                ].map((feature, i) => (
                  <li key={i} className="feature-item">
                    <CheckCircle size={18} className="check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overview-image-container">
              <div className="image-glow" />
              <img
                src={neuronSeg2}
                alt="Neuron Segmentation Result Example"
                className="overview-image"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/600x400/1e1b4b/a855f7?text=Segmentation+Results";
                }}
              />
              {/* <div className="image-caption">
                Example: Original EM Slice vs. BioSegNet Predicted Mask
              </div> */}
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="architecture-section">
          <div className="architecture-content">
            <h2 className="section-title center">The Architecture: Why U-Net?</h2>
            <p className="architecture-lead">
              Standard CNNs excel at classification but struggle with spatial localization. 
              BioSegNet uses <strong>U-Net</strong> to combine context and precise localization.
            </p>

            <div className="architecture-grid">
              <div className="arch-card">
                <Layers size={32} className="arch-icon" />
                <h3>Contracting Path</h3>
                <p>Encoder extracts hierarchical features through convolutions and pooling.</p>
              </div>
              <div className="arch-card">
                <GitBranch size={32} className="arch-icon" />
                <h3>Skip Connections</h3>
                <p>Preserve fine spatial details from encoder to decoder.</p>
              </div>
              <div className="arch-card">
                <Zap size={32} className="arch-icon" />
                <h3>Expanding Path</h3>
                <p>Upsampling reconstructs resolution → binary neuron mask.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dataset */}
        <section className="dataset-section">
          <div className="dataset-grid">
            <div className="dataset-text">
              <h2 className="section-title">
                <Globe size={28} className="section-icon" />
                <span>Benchmark Dataset</span>
              </h2>
              <p className="dataset-description">
                Trained on the ISBI 2012 Challenge dataset (Arganda-Carreras et al., 2015) — 
                electron microscopy of Drosophila larva ventral nerve cord with complex neural structures.
              </p>
              <div className="citation-box">
                "Crowdsourcing the creation of image segmentation algorithms for connectomics"  
                — Frontiers in Neuroanatomy (2015)
              </div>
            </div>

            <div className="dataset-visuals">
              <div className="visual-placeholder raw">RAW EM DATA</div>
              <div className="visual-placeholder mask">GROUND TRUTH MASK</div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="impact-section">
          <h2 className="section-title center">
            <Brain size={32} className="section-icon" />
            <span>The Future of Connectomics</span>
          </h2>

          <div className="impact-text">
            <p>
              Neuron segmentation powers connectomics — mapping every synapse in the brain. 
              By 2025–2026, projects like MICrONS and full Drosophila connectomes show the path 
              toward mammalian-scale reconstructions.
            </p>
            <p>
              Manual annotation of even 1 mm³ of brain tissue would take centuries. Automated 
              tools like BioSegNet drastically accelerate this, enabling breakthroughs in synaptic 
              plasticity, memory, and diseases like Alzheimer’s.
            </p>
            <p>
              Future directions include foundation models for bio-imaging and topology-aware losses 
              to ensure continuous neural structures — bringing us closer to a complete brain digital twin.
            </p>
          </div>
        </section>

        {/* CTA */}
        <footer className="footer">
          <h3 className="footer-title">Explore the Source Code</h3>
          <p className="footer-subtitle">
            Full implementation, training scripts, and model weights available on GitHub.
          </p>
          <a
            href="https://github.com/Nauman123-coder/BioSeg-UNet"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            <Github size={22} />
            <span>View on GitHub</span>
            <ArrowLeft size={18} className="rotate-180" />
          </a>
        </footer>
      </main>
    </div>
  );
};

export default BioSegNetProject;