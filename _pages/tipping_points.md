---
layout: page
title: Tipping Points
description: Research on climate tipping points and abrupt shifts in the Earth system
permalink: /projects/tipping-points/
nav: false
---

<div class="research-page" markdown="1">

Climate tipping points are thresholds at which small changes in external conditions can trigger large, often irreversible shifts in the state of the Earth system. Understanding these critical transitions is essential for anticipating and potentially preventing catastrophic changes in the climate.

My work focuses on identifying early-warning signals and understanding the mechanisms that drive the Earth system toward — or away from — tipping points. This includes studying teleconnections between distant components of the Earth system, such as the links between Amazon deforestation, Tibetan snow cover, and Antarctic ice loss.

</div>

## Research objects

<div class="research-grid">
  <div class="research-card">
    <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
      <div style="flex: 2; min-width: 250px;">
        <div class="card-badge-wrapper">
          <span class="resource-badge">Biosphere</span>
        </div>
        <h3>Amazon Rainforest</h3>
        <p>Analyzing the risk of dieback and state transitions in the Amazon basin due to the combined effects of deforestation, climate change, and moisture recycling feedback loops.</p>
      </div>
      <div style="flex: 1; min-width: 150px; text-align: center;">
        {% include figure.liquid path="assets/img/topical/amazon.png" class="img-fluid rounded" width="auto" max-height="120px" zoomable=true avoid_scaling=true %}
      </div>
    </div>
  </div>

  <div class="research-card">
    <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
      <div style="flex: 2; min-width: 250px;">
        <div class="card-badge-wrapper">
          <span class="resource-badge">Cryosphere</span>
        </div>
        <h3>Tibetan Plateau</h3>
        <p>Investigating snow cover dynamics and permafrost degradation on the "Third Pole," exploring how regional changes propagate through teleconnections to impact the global climate system.</p>
      </div>
      <div style="flex: 1; min-width: 150px; text-align: center;">
        {% include figure.liquid path="assets/img/topical/tibet.png" class="img-fluid rounded" width="auto" max-height="120px" zoomable=true avoid_scaling=true %}
      </div>
    </div>
  </div>

  <div class="research-card">
    <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
      <div style="flex: 2; min-width: 250px;">
        <div class="card-badge-wrapper">
          <span class="resource-badge">Ice Sheets</span>
        </div>
        <h3>Antarctic Ice Sheet</h3>
        <p>Assessing the stability of the West Antarctic Ice Sheet and the potential for irreversible mass loss, focusing on the interactions between ocean warming and ice shelf melting.</p>
      </div>
      <div style="flex: 1; min-width: 150px; text-align: center;">
        {% include figure.liquid path="assets/img/topical/antarctica.png" class="img-fluid rounded" width="auto" max-height="120px" zoomable=true avoid_scaling=true %}
      </div>
    </div>
  </div>
</div>

---

## Related publications

<div class="publications">
  {% bibliography --query @*[key=Wang2026Planetary] %}
  {% bibliography --query @*[key=liu2026SA] %}
  {% bibliography --query @*[key=boers2025destabilization] %}
  {% bibliography --query @*[key=liu2023teleconnections] %}
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
