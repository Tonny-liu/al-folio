import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import BadgePreview from "./BadgePreview";
import "./resources.css";

const CATEGORIES = ["All", "Research", "Data", "Tools"];

function Arrow({ external = true }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {external ? (
        <>
          <path d="M14 4h6v6M20 4l-9 9" />
          <path d="M10 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5" />
        </>
      ) : (
        <path d="m8 5 7 7-7 7" />
      )}
    </svg>
  );
}

function App({ resources, assetBase }) {
  const [selectedId, setSelectedId] = useState(resources[0].id);
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [firstSelectionRequested, setFirstSelectionRequested] = useState(false);
  const selected = resources.find((item) => item.id === selectedId) || resources[0];
  const filtered = useMemo(() => {
    const words = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    return resources.filter(
      (item) =>
        (category === "All" || item.category === category) &&
        words.every((word) => `${item.name} ${item.description} ${item.category} ${item.note} ${item.url}`.toLocaleLowerCase().includes(word))
    );
  }, [resources, category, query]);
  const showEverything = expanded || category !== "All" || query.trim().length > 0;
  const visible = showEverything ? filtered : filtered.slice(0, 6);
  const hiddenCount = filtered.length - visible.length;

  useEffect(() => {
    try {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      if (resources.some((item) => item.id === hash)) setSelectedId(hash);
    } catch {
      /* An invalid fragment should never disable the directory. */
    }
  }, [resources]);

  function selectResource(item) {
    setFirstSelectionRequested(true);
    setSelectedId(item.id);
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${item.id}`);
  }

  return (
    <div className="rp-app">
      <div className="rp-workspace">
        <section className="rp-preview" aria-label="Selected website pass">
          <BadgePreview resource={selected} assetBase={assetBase} firstSelectionRequested={firstSelectionRequested} />
          <div className="rp-visit-wrap">
            <a
              className="rp-visit"
              href={selected.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${selected.name} (opens in a new tab)`}
            >
              Visit website <Arrow />
            </a>
          </div>
          <p className="rp-sr-only" role="status" aria-live="polite">
            Selected website: {selected.name}. {selected.description}
          </p>
        </section>

        <section className="rp-directory" aria-labelledby="rp-directory-title">
          <div className="rp-directory-heading">
            <h2 id="rp-directory-title">My bookmarks</h2>
            <span className="rp-count" aria-live="polite">
              {filtered.length} {filtered.length === 1 ? "website" : "websites"}
            </span>
          </div>
          <div className="rp-search">
            <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="m15.5 15.5 5 5" />
            </svg>
            <label className="rp-sr-only" htmlFor="rp-search-input">
              Find a website
            </label>
            <input
              id="rp-search-input"
              type="search"
              placeholder="Find a website…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              autoComplete="off"
              spellCheck="false"
            />
          </div>
          <div className="rp-categories" role="group" aria-label="Filter websites by category">
            {CATEGORIES.map((item) => (
              <button
                key={item}
                type="button"
                className={`rp-category${category === item ? " is-active" : ""}`}
                aria-pressed={category === item}
                onClick={() => {
                  setCategory(item);
                  setExpanded(false);
                }}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="rp-grid">
            {visible.map((item) => (
              <article key={item.id} className={`rp-bookmark${selected.id === item.id ? " is-selected" : ""}`}>
                <button
                  type="button"
                  className="rp-select"
                  aria-pressed={selected.id === item.id}
                  onClick={() => selectResource(item)}
                  aria-label={`Preview ${item.name} pass`}
                >
                  <img className="rp-icon" src={`${assetBase}/icons/${item.id}.svg`} alt="" width="38" height="38" loading="lazy" />
                  <span className="rp-bookmark-text">
                    <span className="rp-name">{item.name}</span>
                    <span className="rp-description">{item.description}</span>
                    <span className="rp-tag">{item.category}</span>
                  </span>
                </button>
                <a
                  className="rp-external"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${item.name} in a new tab`}
                  title={`Open ${item.name}`}
                >
                  <Arrow />
                </a>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="rp-empty" role="status">
              <p>No websites found.</p>
              <span>Try another name or category.</span>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setCategory("All");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
          {hiddenCount > 0 && (
            <button type="button" className="rp-show-all" onClick={() => setExpanded(true)}>
              Explore all {resources.length} websites <Arrow external={false} />
            </button>
          )}
          {expanded && category === "All" && !query && (
            <button type="button" className="rp-show-all" onClick={() => setExpanded(false)}>
              Show featured websites
            </button>
          )}
          <p className="rp-directory-hint">
            Select a website to explore its pass. <span>Use ↗ to open it directly.</span>
          </p>
        </section>
      </div>
    </div>
  );
}

const mount = document.getElementById("resources-app");
const data = document.getElementById("resources-data");
if (mount && data) {
  try {
    const resources = JSON.parse(data.textContent);
    if (resources.length) createRoot(mount).render(<App resources={resources} assetBase={mount.dataset.assets} />);
  } catch (error) {
    console.error("The interactive resource directory could not be loaded.", error);
    // The server-rendered links remain available if data or the bundle fails.
  }
}
