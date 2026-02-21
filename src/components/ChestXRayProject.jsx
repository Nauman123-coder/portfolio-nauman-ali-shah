// src/components/ChestXRayProject.jsx
import React, { useEffect } from 'react';
import './ChestXRayProject.css';

import ChestXRayImage from '../assets/tech/chest-xray.png'

const ChestXRayProject = () => {
  useEffect(() => {
    // Starfield background generation for consistent portfolio aesthetic
    const starfield = document.getElementById('starfield-container');
    if (starfield) {
      starfield.innerHTML = '';
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

    // MathJax handling for medical/mathematical formulas
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

  const weightedLossFormula = `\\[ L_{W}(y, \\hat{y}) = -\\sum_{i=1}^{14} [w_{pos,i} \\cdot y_i \\log(\\hat{y}_i) + w_{neg,i} \\cdot (1-y_i) \\log(1-\\hat{y}_i)] \\]`;
  const weightLogic = `\\[ w_{pos} = \\text{freq}_{neg}, \\quad w_{neg} = \\text{freq}_{pos} \\]`;

  return (
    <div className="chest-xray-page">
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
            <span className="academic-tag">Computer-Aided Diagnosis (CAD)</span>
            <h1 className="hero-title">
              Chest X-Ray Medical Diagnosis System
            </h1>

            <div className="hero-img-container">
              <img
                src={ChestXRayImage}
                alt="Chest X-Ray Diagnostic Overview"
                className="hero-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/1100x600/1a1a2e/915eff?text=Chest+X-Ray+Diagnosis';
                }}
              />
            </div>

            {/* Centered button right below the image */}
            <div className="hero-button-wrapper">
              <a href="/" className="btn secondary">
                ← Back to Portfolio
              </a>
            </div>
          </header>

          <section id="overview">
            <div className="content-block">
              <h2 className="section-title">Overview</h2>
              <p>
                This project implements a state-of-the-art deep learning model for automated chest X-ray diagnosis using convolutional neural networks. The system can simultaneously detect <strong>14 different pathological conditions</strong> from frontal-view chest X-ray images, providing binary classification predictions for conditions ranging from Pneumonia to Cardiomegaly.
              </p>
              
              <div className="info-grid">
                <div className="glass-card">
                  <h3>108k+ Images</h3>
                  <p>Leveraging the NIH ChestX-ray8 dataset, one of the largest publicly available repositories of clinical X-ray data.</p>
                </div>
                <div className="glass-card">
                  <h3>Multi-Label</h3>
                  <p>A single pass through the network classifies 14 distinct pathologies, enabling comprehensive diagnostic screening.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="content-block">
              <h2 className="section-title">Clinical Significance</h2>
              <p>
                Chest X-rays are one of the most common diagnostic imaging procedures worldwide, yet interpretation requires significant expertise. With a background in pre-medical sciences, I recognize that this AI-powered system addresses critical challenges:
              </p>
              <ul className="clinical-list">
                <li><strong>Radiologist Shortage:</strong> Mitigates delays in regions with limited specialist access.</li>
                <li><strong>Time Efficiency:</strong> Prioritizes urgent cases like Pneumothorax for immediate review.</li>
                <li><strong>Consistency:</strong> Reduces inter-observer variability across different healthcare facilities.</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="content-block">
              <h2 className="section-title">Model Architecture</h2>
              <p>
                The model utilizes <strong>DenseNet121</strong> as its core feature extractor. DenseNets are particularly effective for medical imaging because their dense connections allow for feature reuse and better gradient flow, even with smaller datasets.
              </p>
              <p>
                We utilized <strong>Transfer Learning</strong> with ImageNet pre-trained weights, fine-tuning the final layers to detect subtle radiological features in grayscale X-ray patterns.
              </p>
            </div>

            <div className="arch-section">
              <div className="arch-image">
                <div className="densenet-badge">DenseNet121</div>
                <div className="arch-visual-mock">
                  <div className="layer-block">Input: 320x320x3</div>
                  <div className="connector"></div>
                  <div className="layer-block accent">Dense Connections</div>
                  <div className="connector"></div>
                  <div className="layer-block">Global Avg Pooling</div>
                  <div className="connector"></div>
                  <div className="layer-block accent">14-way Sigmoid</div>
                </div>
              </div>
              <div>
                <p>
                  Transfer learning from ImageNet weights was used to initialize the model. The final classification layers were fine-tuned while gradually unfreezing earlier layers to adapt to chest X-ray domain features.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="content-block">
              <h2 className="section-title">Handling Class Imbalance</h2>
              <p>
                Medical data is inherently imbalanced (e.g., Hernia cases are rare compared to Infiltrations). To ensure the model doesn't ignore rare conditions, I implemented a <strong>Weighted Binary Cross-Entropy Loss</strong>.
              </p>

              <div className="math-wrapper">
                <div className="formula">{weightedLossFormula}</div>
                <div className="formula">{weightLogic}</div>
                <p className="formula-desc">Weights are inversely proportional to class frequency, ensuring rare pathologies contribute equally to training.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="content-block">
              <h2 className="section-title">Interpretability: GradCAM</h2>
              <p>
                In clinical AI, <em>why</em> a model makes a prediction is as important as the prediction itself. I integrated <strong>GradCAM (Gradient-weighted Class Activation Mapping)</strong> to provide visual heatmaps of the model's focus.
              </p>
              <div className="gradcam-box">
                <p>Heatmaps overlaying the original X-ray allow radiologists to verify that the AI is focusing on the correct anatomical regions (e.g., the lung bases for Effusion or the cardiac silhouette for Cardiomegaly).</p>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <h2 className="section-title">Explore Research & Code</h2>
            <p>
              The full implementation, including class imbalance handling and GradCAM visualization scripts, is available on GitHub.
            </p>
            <div className="button-group">
              <a
                href="https://github.com/Nauman123-coder/Chest-X-Ray-Medical-Diagnosis"
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
            <p>© 2026 Nauman Ali Shah. Bridging the gap between Medicine & Artificial Intelligence.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ChestXRayProject;