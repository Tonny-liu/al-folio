---
layout: resources
permalink: /resources/
title: resources
description: A few useful places on the web — for research, writing, and everyday work.
nav: true
nav_order: 6
---

<div id="resources-app" data-assets="{{ '/assets/resources' | relative_url }}">
  <div class="rp-static-links">
    {% for resource in site.data.resources %}
    <a class="rp-static-link" href="{{ resource.url | escape }}" target="_blank" rel="noopener noreferrer"><strong>{{ resource.name | escape }} ↗</strong><span>{{ resource.description | escape }}</span></a>
    {% endfor %}
  </div>
</div>
<script type="application/json" id="resources-data">{{ site.data.resources | jsonify }}</script>
<script type="module" src="{{ '/assets/resources/resources.js' | relative_url }}"></script>
<details class="rp-credits">
  <summary>About this page</summary>
  <p>Interactive passes use Three.js and the React Bits Lanyard component, adapted from <a href="https://github.com/fanhuayishiy/ai-crew-pass" target="_blank" rel="noopener noreferrer">AI Crew Pass</a>. Website names and trademarks belong to their respective owners; website icons are sourced from their official sites. <a href="{{ '/assets/resources/LANYARD-LICENSE.txt' | relative_url }}">Component license</a> · <a href="{{ '/assets/resources/THIRD-PARTY-LICENSES.txt' | relative_url }}">Library licenses</a> · <a href="{{ '/assets/resources/LANYARD-SOURCE.txt' | relative_url }}">Source and modifications</a>.</p>
</details>
