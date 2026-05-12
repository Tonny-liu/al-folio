---
layout: page
title: Artificial Intelligence
description: Research on AI methods applied to Earth system and physics problems
permalink: /projects/artificial-intelligence/
nav: false
---

<div class="research-page" markdown="1">

Artificial intelligence and machine learning provide powerful tools for analyzing high-dimensional, nonlinear systems that are central to both physics and Earth system science. My work explores how modern AI methods can enhance our understanding and prediction of complex dynamical systems.

## Key topics

<div class="resource-list">
  <div class="resource-item">
    <div class="resource-item-header">
      <h3>Generative models for physical systems</h3>
      <span class="resource-badge">Deep learning</span>
    </div>
    <p>Applying score-based generative models and other deep generative methods to learn the probability distributions of physical and climate systems, enabling sampling, denoising, and anomaly detection.</p>
  </div>

  <div class="resource-item">
    <div class="resource-item-header">
      <h3>Data-driven tipping point detection</h3>
      <span class="resource-badge">Early warning</span>
    </div>
    <p>Using machine learning techniques to detect and predict critical transitions in Earth system components from observational and reanalysis data.</p>
  </div>

  <div class="resource-item">
    <div class="resource-item-header">
      <h3>Physics-informed machine learning</h3>
      <span class="resource-badge">Hybrid models</span>
    </div>
    <p>Developing hybrid approaches that combine physical constraints and domain knowledge with neural networks to improve the interpretability and generalization of AI-based models for climate and physics.</p>
  </div>
</div>

---

## Related publications

<div class="publications">
  {% bibliography --query @*[key=qian2026generative] %}
  {% bibliography --query @*[key=qian2025decadal] %}
  {% bibliography --query @*[key=hu2023universality] %}
</div>

</div>

<style>
.research-page h2 {
  color: var(--global-theme-color);
  border-bottom: 2px solid var(--global-theme-color);
  padding-bottom: 0.5rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}
.resource-list { margin: 1.5rem 0; }
.resource-item {
  padding: 1.1rem 1.4rem;
  border-left: 3px solid var(--global-theme-color);
  margin-bottom: 1rem;
  background: var(--global-bg-color);
  border-radius: 0 8px 8px 0;
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.resource-item:hover {
  background-color: var(--global-code-bg-color, #f8f8f8);
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}
.resource-item-header {
  display: flex; align-items: center; gap: 0.8rem;
  margin-bottom: 0.4rem; flex-wrap: wrap;
}
.resource-item-header h3 { margin: 0; font-size: 1.1rem; }
.resource-badge {
  display: inline-block; padding: 0.15rem 0.55rem; font-size: 0.75rem;
  font-weight: 600; border-radius: 12px;
  background-color: var(--global-theme-color); color: #fff; white-space: nowrap;
}
.resource-item p {
  margin: 0.3rem 0 0; font-size: 0.92rem;
  color: var(--global-text-color-light, #666); line-height: 1.55;
}
/* Hide year heading and top border in embedded bibliography */
.research-page .publications h2.bibliography { display: none; }
.research-page .publications ol.bibliography { padding-left: 0; }
</style>
