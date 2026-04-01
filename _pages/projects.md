---
layout: page
title: projects
permalink: /projects/
description: A growing collection of my projects.
nav: true
nav_order: 3
display_categories: [Physics system, Earth system]
horizontal: false
---

<div id="pub-network-container" style="width: 100%; height: 900px; margin-bottom: 4rem; overflow: hidden; position: relative;">
  <div id="pub-tooltip" style="position: absolute; opacity: 0; background: var(--global-card-bg-color); border: 1px solid var(--global-divider-color); color: var(--global-text-color); padding: 8px; border-radius: 4px; pointer-events: none; font-size: 0.85rem; z-index: 10;"></div>
</div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
  window.graphDataUrl = "{{ '/assets/json/publications_graph.json' | relative_url }}";
</script>
<script src="{{ '/assets/js/draw_network.js' | relative_url }}"></script>


{% comment %}
<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
{% endcomment %}
