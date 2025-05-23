---
layout: page
permalink: /publications/
title: publications
# description: publications by categories in reversed chronological order. generated by jekyll-scholar.
nav: true
nav_order: 2
years: [2025, 2024, 2023, 2022, 2021, 2019]
---

<!-- _pages/publications.md -->

<div class="publications-years">
  <div class="years-container">
    {% for y in page.years %}
      <a href="#year-{{ y }}" class="year-link">{{ y }}</a>
    {% endfor %}
  </div>
</div>

<!-- Bibsearch Feature -->
{% include bib_search.liquid %}

<div class="publications">
  {% for y in page.years %}
    <div class="year-section" id="year-{{ y }}">
      <h2 class="year-header">{{ y }}</h2>
      {% bibliography --query @*[year={{ y }}] --group_by none %}
    </div>
  {% endfor %}
</div>

<style>
.publications-years {
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--global-divider-color);
  padding-bottom: 1rem;
}

.years-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.year-link {
  padding: 0.5rem 1rem;
  border: 1px solid var(--global-theme-color);
  border-radius: 4px;
  color: var(--global-theme-color);
  text-decoration: none;
  transition: all 0.3s ease;
}

.year-link:hover {
  background-color: var(--global-theme-color);
  color: var(--global-bg-color);
  text-decoration: none;
}

.year-section {
  margin-bottom: 2rem;
  scroll-margin-top: 70px;
}

.year-header {
  color: var(--global-theme-color);
  border-bottom: 1px solid var(--global-theme-color);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll to year sections
  document.querySelectorAll('.year-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
</script>
