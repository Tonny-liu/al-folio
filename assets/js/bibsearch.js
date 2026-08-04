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

    const addButton = (text, value) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "publication-label-filter-btn";
      button.textContent = text;
      button.dataset.label = value;
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", () => {
        activeLabel = activeLabel === value ? "" : value;
        options.querySelectorAll(".publication-label-filter-btn").forEach((option) => {
          const isActive = option.dataset.label === activeLabel;
          option.classList.toggle("active", isActive);
          option.setAttribute("aria-pressed", isActive ? "true" : "false");
        });
        applyLabelFilter();
      });
      options.appendChild(button);
    };

    Array.from(labels.entries())
      .sort(([, a], [, b]) => b.count - a.count || a.order - b.order)
      .forEach(([key, entry]) => addButton(entry.label, key));
    filter.hidden = false;
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
