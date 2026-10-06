import { highlightSearchTerm } from "./highlight-search-term.js";

const publicationFilterClasses = ["bibsearch-filtered", "label-filtered", "coauthor-filtered"];

const refreshPublicationFilterVisibility = () => {
  document.querySelectorAll(".bibliography > li").forEach((item) => {
    const hidden = publicationFilterClasses.some((className) => item.classList.contains(className));
    item.classList.toggle("unloaded", hidden);
  });

  document.querySelectorAll(".year-section").forEach((section) => {
    const allItems = section.querySelectorAll("ol.bibliography > li");
    const hiddenItems = section.querySelectorAll("ol.bibliography > li.unloaded");
    section.classList.toggle("unloaded", allItems.length > 0 && allItems.length === hiddenItems.length);

    const year = section.id.replace("year-", "");
    const yearLink = document.querySelector(`.year-link[data-year="${year}"]`);
    if (yearLink) {
      yearLink.setAttribute("data-count", allItems.length - hiddenItems.length);
    }
  });

  document.querySelectorAll("h2.bibliography").forEach((element) => {
    let iterator = element.nextElementSibling;
    let hideFirstGroupingElement = true;

    while (iterator && iterator.tagName !== "H2") {
      if (iterator.tagName === "OL") {
        const unloadedSiblings = iterator.querySelectorAll(":scope > li.unloaded");
        const totalSiblings = iterator.querySelectorAll(":scope > li");
        const hideGroup = unloadedSiblings.length === totalSiblings.length;
        iterator.classList.toggle("unloaded", hideGroup);
        if (iterator.previousElementSibling) {
          iterator.previousElementSibling.classList.toggle("unloaded", hideGroup);
        }
        if (!hideGroup) hideFirstGroupingElement = false;
      }
      iterator = iterator.nextElementSibling;
    }

    element.classList.toggle("unloaded", hideFirstGroupingElement);
  });
};

window.refreshPublicationFilters = refreshPublicationFilterVisibility;

document.addEventListener("DOMContentLoaded", function () {
  let activeLabel = "";

  const labelsForItem = (item) => {
    const row = item.querySelector("[data-publication-labels]");
    if (!row) return [];

    return row.dataset.publicationLabels
      .split(";")
      .map((label) => label.trim())
      .filter(Boolean);
  };

  const applyLabelFilter = () => {
    document.querySelectorAll(".bibliography > li").forEach((item) => {
      const matches = !activeLabel || labelsForItem(item).some((label) => label.toLowerCase() === activeLabel);
      item.classList.toggle("label-filtered", !matches);
    });
    refreshPublicationFilterVisibility();
  };

  const initializeLabelFilter = () => {
    const filter = document.getElementById("publication-label-filter");
    const options = document.getElementById("publication-label-options");
    if (!filter || !options) return;

    const labels = new Map();
    let labelOrder = 0;
    document.querySelectorAll(".bibliography > li").forEach((item) => {
      labelsForItem(item).forEach((label) => {
        const key = label.toLowerCase();
        if (labels.has(key)) {
          labels.get(key).count += 1;
        } else {
          labels.set(key, { label, count: 1, order: labelOrder });
          labelOrder += 1;
        }
      });
    });

    if (labels.size === 0) return;

    // Tint each label by frequency: rarest -> lightest, most frequent -> darkest
    const counts = Array.from(labels.values(), (entry) => entry.count);
    const minCount = Math.min(...counts);
    const maxCount = Math.max(...counts);
    const minTint = 20;
    const maxTint = 100;
    const tintForCount = (count) => {
      const ratio = maxCount === minCount ? 1 : (count - minCount) / (maxCount - minCount);
      return Math.round(minTint + ratio * (maxTint - minTint));
    };

    const colorbar = filter.querySelector(".publication-label-colorbar");
    const captions = document.getElementById("publication-label-captions");
    const connector = filter.querySelector(".publication-label-connector path");
    const countLabel = filter.querySelector(".publication-label-count");
    const segments = new Map();
    let hoveredLabel = "";
    let focusedLabel = "";

    // Group caption boxes into wrapped rows, top to bottom
    const captionRows = () => {
      const rows = [];
      Array.from(captions.children).forEach((element) => {
        const rect = element.getBoundingClientRect();
        const row = rows.find((r) => Math.abs(r.top - rect.top) < 2);
        if (row) {
          row.items.push({ element, rect });
          row.bottom = Math.max(row.bottom, rect.bottom);
        } else {
          rows.push({ top: rect.top, bottom: rect.bottom, items: [{ element, rect }] });
        }
      });
      return rows;
    };

    // Horizontal spans in a row with no text: left margin, gaps between names, space after the last name
    const freeSpans = (row, left, right) => {
      const spans = [];
      let start = left - 8;
      row.items.forEach(({ rect }) => {
        spans.push([start, rect.left]);
        start = rect.right;
      });
      spans.push([start, right]);
      return spans;
    };

    const intersectSpans = (a, b) =>
      a.flatMap(([a1, a2]) => b.map(([b1, b2]) => [Math.max(a1, b1), Math.min(a2, b2)])).filter(([lo, hi]) => hi - lo >= 2);

    // Pick the vertical channel that keeps the path shortest, preferring one close to the target
    const pickChannel = (spans, fromX, toX) => {
      let best = null;
      let bestScore = Infinity;
      spans.forEach(([lo, hi]) => {
        const pad = Math.min(6, (hi - lo) / 2);
        const x = Math.min(Math.max(toX, lo + pad), hi - pad);
        const score = Math.abs(fromX - x) + Math.abs(x - toX) * 1.01;
        if (score < bestScore) {
          best = x;
          bestScore = score;
        }
      });
      return best;
    };

    // Draw an orthogonal line from the segment to its caption that only runs through empty space,
    // and show the publication count above the segment
    const showDetails = (segment, caption, count) => {
      const origin = colorbar.getBoundingClientRect();
      const area = captions.getBoundingClientRect();
      const from = segment.getBoundingClientRect();
      const to = caption.getBoundingClientRect();
      const rows = captionRows();
      const targetRow = rows.findIndex((row) => row.items.some((item) => item.element === caption));
      const x1 = from.left + from.width / 2;
      const x2 = to.left + to.width / 2;
      const ox = origin.left;
      const oy = origin.top;

      let d = `M ${x1 - ox} ${from.bottom - oy} V ${(from.bottom + area.top) / 2 - oy}`;
      if (targetRow > 0) {
        // Find a vertical gap shared by every row above the target, then run along the gap above its row
        let spans = freeSpans(rows[0], area.left, area.right);
        for (let i = 1; i < targetRow; i += 1) {
          spans = intersectSpans(spans, freeSpans(rows[i], area.left, area.right));
        }
        const channelX = pickChannel(spans, x1, x2);
        const rowGapY = (rows[targetRow - 1].bottom + rows[targetRow].top) / 2;
        d += ` H ${channelX - ox} V ${rowGapY - oy}`;
      }
      d += ` H ${x2 - ox} V ${to.top - oy - 2}`;
      connector.setAttribute("d", d);

      countLabel.textContent = count;
      countLabel.style.left = `${x1 - ox}px`;
      countLabel.hidden = false;
    };

    // Highlight the hovered/focused label, falling back to the selected one
    const refreshHighlight = () => {
      const shown = hoveredLabel || focusedLabel || activeLabel;
      segments.forEach(({ segment, caption, count }, key) => {
        const isShown = key === shown;
        segment.classList.toggle("is-highlighted", isShown);
        caption.classList.toggle("is-highlighted", isShown);
        if (isShown) showDetails(segment, caption, count);
      });
      if (!shown) {
        connector.removeAttribute("d");
        countLabel.hidden = true;
      }
    };

    const toggleLabel = (value) => {
      activeLabel = activeLabel === value ? "" : value;
      segments.forEach(({ segment }, key) => {
        const isActive = key === activeLabel;
        segment.classList.toggle("active", isActive);
        segment.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
      applyLabelFilter();
      refreshHighlight();
    };

    // Each label is one fixed-width colorbar segment, with its name listed in grey below the bar
    const addLabel = (text, value, count) => {
      const segment = document.createElement("button");
      segment.type = "button";
      segment.className = "publication-label-filter-btn";
      segment.style.setProperty("--label-tint", `${tintForCount(count)}%`);
      segment.setAttribute("aria-label", `${text} (${count})`);
      segment.dataset.label = value;
      segment.setAttribute("aria-pressed", "false");
      segment.addEventListener("click", () => toggleLabel(value));
      segment.addEventListener("focus", () => {
        focusedLabel = segment.matches(":focus-visible") ? value : "";
        refreshHighlight();
      });
      segment.addEventListener("blur", () => {
        focusedLabel = "";
        refreshHighlight();
      });

      const caption = document.createElement("span");
      caption.className = "publication-label-caption";
      caption.textContent = text;
      caption.addEventListener("click", () => toggleLabel(value));

      [segment, caption].forEach((element) => {
        element.addEventListener("mouseenter", () => {
          hoveredLabel = value;
          refreshHighlight();
        });
        element.addEventListener("mouseleave", () => {
          hoveredLabel = "";
          refreshHighlight();
        });
      });

      segments.set(value, { segment, caption, count });
      options.appendChild(segment);
      captions.appendChild(caption);
    };

    // Colorbar runs from least to most frequent, left to right
    Array.from(labels.entries())
      .sort(([, a], [, b]) => a.count - b.count || a.order - b.order)
      .forEach(([key, entry]) => addLabel(entry.label, key, entry.count));
    filter.hidden = false;

    // Captions may rewrap on resize, so redraw the connector
    window.addEventListener("resize", refreshHighlight);
  };

  // actual bibsearch logic
  const filterItems = (searchTerm) => {
    document.querySelectorAll(".bibliography > li").forEach((element) => element.classList.remove("bibsearch-filtered"));

    // highlight-search-term
    if (CSS.highlights) {
      const nonMatchingElements = highlightSearchTerm({ search: searchTerm, selector: ".bibliography > li" });
      if (nonMatchingElements != null) {
        nonMatchingElements.forEach((element) => {
          element.classList.add("bibsearch-filtered");
        });
      }
    } else {
      // Mark non-matching items when the browser does not support CSS highlights.
      document.querySelectorAll(".bibliography > li").forEach((element) => {
        const text = element.innerText.toLowerCase();
        if (text.indexOf(searchTerm) == -1) {
          element.classList.add("bibsearch-filtered");
        }
      });
    }

    refreshPublicationFilterVisibility();
  };

  const updateInputField = () => {
    const hashValue = decodeURIComponent(window.location.hash.substring(1)); // Remove the '#' character
    document.getElementById("bibsearch").value = hashValue;
    updateClearButton(hashValue);
    filterItems(hashValue);
  };

  // Show/hide clear button based on input content
  const clearBtn = document.getElementById("bibsearch-clear");
  const updateClearButton = (value) => {
    if (clearBtn) {
      clearBtn.classList.toggle("visible", value.length > 0);
    }
  };

  // Clear button click: reset input and filter
  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      const input = document.getElementById("bibsearch");
      input.value = "";
      updateClearButton("");
      filterItems("");
      input.focus();
    });
  }

  // Sensitive search. Only start searching if there's been no input for 300 ms
  let timeoutId;
  document.getElementById("bibsearch").addEventListener("input", function () {
    clearTimeout(timeoutId); // Clear the previous timeout
    const searchTerm = this.value.toLowerCase();
    updateClearButton(this.value);
    timeoutId = setTimeout(() => filterItems(searchTerm), 300);
  });

  window.addEventListener("hashchange", updateInputField); // Update the filter when the hash changes

  initializeLabelFilter();
  updateInputField(); // Update filter when page loads
});
