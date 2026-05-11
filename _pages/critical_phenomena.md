---
layout: page
title: critical phenomena
description: Research on critical phenomena and phase transitions in physics
permalink: /projects/critical-phenomena/
nav: false
---

<div class="research-page" markdown="1">

Critical phenomena describe the behavior of physical systems near continuous phase transitions, where correlation lengths diverge and the system exhibits scale-invariant properties. My research investigates these phenomena across different physical systems, with a focus on universality and renormalization group theory.

Understanding critical phenomena not only deepens our knowledge of fundamental physics but also provides powerful theoretical tools applicable to Earth system science and other fields.

## Key topics

<div class="resource-list">
  <div class="resource-item">
    <div class="resource-item-header">
      <h3>Universality classes</h3>
      <span class="resource-badge">Statistical physics</span>
    </div>
    <p>Studying the universal scaling behaviors that emerge near phase transitions, independent of microscopic details, and classifying systems by their critical exponents and symmetries.</p>
  </div>

  <div class="resource-item">
    <div class="resource-item-header">
      <h3>Phase transitions in physical systems</h3>
      <span class="resource-badge">Condensed matter</span>
    </div>
    <p>Investigating continuous and discontinuous phase transitions in magnetic systems, lattice models, and other physical systems using analytical and computational methods.</p>
  </div>

  <div class="resource-item">
    <div class="resource-item-header">
      <h3>Finite-size scaling</h3>
      <span class="resource-badge">Numerical methods</span>
    </div>
    <p>Applying finite-size scaling analyses to extract critical exponents and identify phase transition points from numerical simulations of finite systems.</p>
  </div>
</div>

---

## Related publications

*To be updated with specific publications.*

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
</style>
