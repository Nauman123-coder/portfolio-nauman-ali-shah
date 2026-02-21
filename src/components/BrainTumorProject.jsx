// src/components/BrainTumorProject.jsx
import React, { useEffect } from 'react';
import './BrainTumorProject.css';
import ArchitectureImage from '../assets/tech/u-net-architecture.png';
import BrainMriImage from '../assets/tech/mri_header_image.jpg'

const BrainTumorProject = () => {
  useEffect(() => {
    // Starfield background generation
    const starfield = document.getElementById('starfield-container');
    if (starfield) {
      starfield.innerHTML = ''; // Clear existing stars on re-render
      for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 2 + 0.5;
        star.style.position = 'absolute';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.background = 'rgba(255,255,255,' + (Math.random() * 0.7 + 0.3) + ')';
        star.style.borderRadius = '50%';
        star.style.pointerEvents = 'none';
        starfield.appendChild(star);
      }
    }

    // MathJax handling
    const loadMathJax = () => {
      if (!window.MathJax) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
        script.async = true;
        script.onload = () => {
          if (window.MathJax?.typesetPromise) {
            window.MathJax.typesetPromise();
          }
        };
        document.head.appendChild(script);
      } else if (window.MathJax?.typesetPromise) {
        setTimeout(() => window.MathJax.typesetPromise(), 300);
      }
    };

    loadMathJax();
  }, []);

  const diceLossFormula = `\\[ \\text{Dice Loss} = 1 - \\frac{1}{C} \\sum_{c=1}^{C} \\frac{2 \\sum p_{ic} \\cdot g_{ic} + \\epsilon}{\\sum p_{ic}^2 + \\sum g_{ic}^2 + \\epsilon} \\]`;
  const variableDesc = `Where \\(p_{ic}\\) is the predicted probability for class \\(c\\) at voxel \\(i\\), \\(g_{ic}\\) is the ground truth, and \\(\\epsilon\\) is a small smoothing constant.`;

  return (
    <div className="brain-project-wrapper">
      <div className="project-wrapper">
        <div id="starfield-container" />
        <div className="ambient-glow" />

        <div className="content-container">
          <nav>
            <a href="/" className="logo">
              NAUMAN <span>ALI SHAH</span>
            </a>
          </nav>

          <header className="hero">
            <span className="academic-tag">Applied Machine Learning in Radiology</span>
            <h1>
              <span>3D U-Net Tumor</span>
              <br />
              Segmentation.
            </h1>

            <div className="hero-img-container">
              <img
                src={BrainMriImage}
                alt="MRI Brain Tumor Segmentation Overview"
                className="hero-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/1100x600/1a1a2e/915eff?text=MRI+Header+Image';
                }}
              />
            </div>

            <a href="/" className="btn">
              ← Back to Portfolio
            </a>
          </header>

          <section id="overview">
            <div className="content-block">
              <h2 className="section-title">The Challenge</h2>
              <p>
                Brain tumor segmentation is a fundamental but grueling task in neuro-oncology. For radiologists, the manual delineation of tumor boundaries from Magnetic Resonance Imaging (MRI) is not only time-consuming—often requiring hours of focus for a single patient—but is also subject to significant inter-observer variability. As a researcher with a background in pre-medical sciences and computational AI, I developed this project to bridge the gap between clinical expertise and automated precision.
              </p>
              <p>
                The primary objective was to perform multi-class segmentation to identify three distinct regions of abnormality: the <strong>Edema</strong>, the <strong>Non-Enhancing Tumor</strong>, and the <strong>Enhancing Tumor</strong>. By automating this process, we can reduce the time required for segmentation to mere minutes, ensuring consistent results that are vital for radiation therapy planning and longitudinal monitoring of tumor growth.
              </p>

              <div className="info-grid">
                <div className="glass-card">
                  <h3>Multi-Modal Data</h3>
                  <p>We leverage the BraTS dataset, which provides four distinct MRI sequences (FLAIR, T1, T1-Gd, T2) to ensure the model sees both fluid and solid tissue abnormalities.</p>
                </div>
                <div className="glass-card">
                  <h3>3D Context</h3>
                  <p>Unlike standard 2D approaches, this model analyzes 3D volumetric patches, preserving the anatomical continuity between brain slices.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="content-block">
              <h2 className="section-title">The Role of AI in Brain Tumor Segmentation</h2>
              <p>
                Artificial Intelligence transforms brain tumor segmentation by learning patterns from thousands of labeled MRI examples, enabling it to detect and outline tumors with high consistency and speed. In practice, AI acts as a powerful assistant to radiologists, reducing segmentation time from hours to minutes.
              </p>
              <p>
                For patients, the benefits are significant: faster and more consistent tumor assessment leads to earlier treatment decisions and better radiation therapy targeting.
              </p>
            </div>
          </section>

          <section>
            <div className="arch-section">
              <div className="arch-image">
                <img
                  src={ArchitectureImage}
                  alt="U-Net Architecture"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/500x400/1a1a2e/915eff?text=U-Net+Architecture';
                  }}
                />
              </div>
              <div>
                <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Architecture</h2>
                <p>
                  I implemented a <strong>3D U-Net</strong> specifically designed for medical image analysis. It follows a symmetrical encoder-decoder structure. The encoder captures the "what" (features) while the decoder restores the "where" (spatial localization).
                </p>
                <p>
                  Skip connections are vital here; they pass high-resolution spatial information from the contracting path to the expanding path, ensuring that even the finest tumor edges are captured accurately.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="content-block">
              <h2 className="section-title">Optimization & Loss</h2>
              <p>
                Medical imaging data often suffers from a severe class imbalance problem. To solve this, I chose the <strong>Soft Dice Loss</strong> function. Unlike pixel-by-pixel losses, Soft Dice Loss focuses on measuring how well the predicted tumor regions overlap with the true regions.
              </p>

              <div className="math-wrapper">
                <div className="formula">{diceLossFormula}</div>
                <p className="formula-desc">{variableDesc}</p>
              </div>

              <p>
                The model achieved a <strong>Dice Coefficient of 0.5152</strong> on the validation set, showing strong performance on Edema and Non-Enhancing regions.
              </p>
            </div>
          </section>

          <section className="cta-section">
            <h2 className="section-title">Explore the Code</h2>
            <p>
              The complete implementation, including data preprocessing scripts and training logs, is available on GitHub.
            </p>
            <div className="button-group">
              <a
                href="https://github.com/Nauman123-coder/brain-tumor-segmentation-3d-unet"
                className="btn primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
              <a href="/" className="btn secondary">
                ← Back to Main Portfolio
              </a>
            </div>
          </section>

          <footer>
            <p>© 2026 Nauman Ali Shah. Developed with a passion for Healthcare & Artificial Intelligence.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default BrainTumorProject;