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

## Key topics

<div class="resource-list">
  <div class="resource-item">
    <div class="resource-item-header">
      <h3>Early-warning signals</h3>
      <span class="resource-badge">Detection</span>
    </div>
    <p>Developing and applying statistical methods to detect early-warning signals of approaching tipping points in observational and model data, including critical slowing down, increased autocorrelation, and flickering.</p>
  </div>

  <div class="resource-item">
    <div class="resource-item-header">
      <h3>Earth system teleconnections</h3>
      <span class="resource-badge">Interaction</span>
    </div>
    <p>Investigating how tipping elements in the Earth system are coupled through teleconnections, and how cascading transitions may propagate across the climate system.</p>
  </div>

  <!-- <div class="resource-item">
    <div class="resource-item-header">
      <h3>AMOC stability</h3>
      <span class="resource-badge">Ocean circulation</span>
    </div>
    <p>Studying the stability of the Atlantic Meridional Overturning Circulation (AMOC) under anthropogenic forcing and its potential for abrupt collapse.</p>
  </div> -->
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
/* Hide year heading and top border in embedded bibliography */
.research-page .publications h2.bibliography { display: none; }
.research-page .publications ol.bibliography { padding-left: 0; }
</style>
