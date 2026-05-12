---
layout: page
title: Complex Systems
description: Research on universal behaviors and dynamics in complex systems
permalink: /projects/complex-systems/
nav: false
---

<div class="research-page" markdown="1">

Complex systems are composed of many interacting components whose collective behavior cannot be easily predicted from the properties of individual parts. My research focuses on uncovering universal behaviors in complex systems and predicting how these systems respond to changing control parameters.

This includes studying phase transitions, self-organization, and emergent phenomena across different domains — from physical systems to the Earth's climate and ecological networks.

## Key topics
<div class="resource-list">
  <div class="resource-item">
    <div class="resource-item-header">
      <h3>Resilience and early warning signals</h3>
    </div>
    <p>Developing and refining statistical indicators, such as critical slowing down (CSD), to anticipate abrupt state transitions. A key focus is systematically addressing empirical data challenges, such as missing values and outliers, to improve the reliability of resilience assessments.</p>
  </div>

  <div class="resource-item">
    <div class="resource-item-header">
      <h3>Complexity metrics and entropy frameworks</h3>
    </div>
    <p>Utilizing novel approaches, including Eigen Microstates Theory (EMT) and entropy-based frameworks, to quantify system disorder, detect phase transitions, and disentangle the overlapping effects of anthropogenic and climate-induced drivers in multivariate systems.</p>
  </div>

  <div class="resource-item">
    <div class="resource-item-header">
      <h3>Self-organized criticality and scaling</h3>
    </div>
    <p>Applying statistical physics to identify universal signatures of self-organized criticality (SOC), power-law distributions, and finite-size scaling in macroscopic phenomena, explaining how emergent, self-regulating systems operate near critical states.</p>
  </div>
</div>

## Research objects

<div class="research-grid">
  <div class="research-card">
    <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
      <div style="flex: 2; min-width: 250px;">
        <div class="card-badge-wrapper">
          <span class="resource-badge">Ecology</span>
        </div>
        <h3>Ecological resilience</h3>
        <p>Assessing the stability and transition risks of forest ecosystems and vegetation networks under climate change. This includes quantifying ecosystem productivity resilience and identifying abrupt state transitions driven by warming and water availability.</p>
      </div>
      <div style="flex: 1; min-width: 150px; text-align: center;">
  {% include figure.liquid path="assets/img/topical/resilience.png" class="img-fluid rounded" width="auto" max-height="120px" zoomable=true avoid_scaling=true %}
</div>
    </div>
  </div>

  <div class="research-card">
    <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
      <div style="flex: 2; min-width: 250px;">
        <div class="card-badge-wrapper">
          <span class="resource-badge">Earth system science</span>
        </div>
        <h3>Hydrological and climate systems</h3>
        <p>Investigating the spatiotemporal organization and destabilization of critical water resources, such as the thermodynamic amplification of atmospheric rivers and the warming-driven entropy rise in the Asian Water Tower.</p>
      </div>
      <div style="flex: 1; min-width: 150px; text-align: center;">
  {% include figure.liquid path="assets/img/topical/hydrology.png" class="img-fluid rounded" width="auto" max-height="120px" zoomable=true avoid_scaling=true %}
</div>
    </div>
  </div>
  
  <div class="research-card">
    <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
      <div style="flex: 2; min-width: 250px;">
        <div class="card-badge-wrapper">
          <span class="resource-badge">Marine science</span>
        </div>
        <h3>Coastal marine systems</h3>
        <p>Uncovering systemic state transitions and identifying dominant drivers in complex coastal environments, such as the Bohai Sea, to evaluate environmental policies and the dynamic interactions between human activities and natural variability.</p>
      </div>
      <div style="flex: 1; min-width: 150px; text-align: center;">
  {% include figure.liquid path="assets/img/topical/marine.png" class="img-fluid rounded" width="auto" max-height="120px" zoomable=true avoid_scaling=true %}
</div>
    </div>
  </div>

  <div class="research-card">
    <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
      <div style="flex: 2; min-width: 250px;">
        <div class="card-badge-wrapper">
          <span class="resource-badge">Biophysics</span>
        </div>
        <h3>Subcellular biological dynamics</h3>
        <p>Tracking the real-time three-dimensional localization, interaction, and confinement of molecules and motor proteins (e.g., myosin, SNAREs) to understand the nanoscale motion and complex organization within living systems.</p>
      </div>
      <div style="flex: 1; min-width: 150px; text-align: center;">
  {% include figure.liquid path="assets/img/topical/biophysics.png" class="img-fluid rounded" width="auto" max-height="120px" zoomable=true avoid_scaling=true %}
</div>
    </div>
  </div>
</div>

---

## Related publications

<div class="publications">
  {% bibliography --query @*[key=liu2026SA] %}
  {% bibliography --query @*[key=wang2026prl] %}
  {% bibliography --query @*[key=huang2026holistic] %}
  {% bibliography --query @*[key=xie2026warming] %}
  {% bibliography --query @*[key=LYU2025114388] %}
  {% bibliography --query @*[key=xie2025ecosystem] %}
  {% bibliography --query @*[key=chen2021simultaneous] %}
  {% bibliography --query @*[key=qin2020simultaneous] %}
  {% bibliography --query @*[key=qin2020increased] %}
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

/* Research Grid Styling */
.research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}
.research-card {
  padding: 1.5rem;
  border: 1px solid var(--global-divider-color, #e0e0e0);
  border-radius: 12px;
  background: var(--global-bg-color);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;
}
.research-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  border-color: var(--global-theme-color);
}
.card-badge-wrapper {
  margin-bottom: 0.8rem;
}
.research-card h3 {
  margin: 0 0 0.6rem 0;
  font-size: 1.15rem;
  color: var(--global-theme-color);
}
.research-card p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--global-text-color-light, #666);
  line-height: 1.5;
}

/* Hide year heading and top border in embedded bibliography */
.research-page .publications h2.bibliography { display: none; }
.research-page .publications ol.bibliography { padding-left: 0; }
</style>
