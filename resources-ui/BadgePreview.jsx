import { Component, useEffect, useRef, useState } from "react";
import Lanyard from "./vendor/Lanyard.jsx";
import "./badge.css";

class BadgeBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.onError();
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

/** A single retained 3D scene with an accessible, useful static fallback. */
export default function BadgePreview({ resource, assetBase, firstSelectionRequested = false }) {
  const api = useRef(null);
  const entryConsumed = useRef(false);
  const [unavailable, setUnavailable] = useState(false);
  const [readyFor, setReadyFor] = useState("");
  const [failedFor, setFailedFor] = useState("");
  const [back, setBack] = useState(false);
  const [fallbackImageFailed, setFallbackImageFailed] = useState(false);
  const base = assetBase.replace(/\/$/, "");
  const face = `${base}/faces/${resource.id}`;
  const front = `${face}-front.svg`;
  const ready = !unavailable && readyFor === front;
  const imageError = failedFor === front;

  useEffect(() => {
    setBack(false);
    setFallbackImageFailed(false);
  }, [resource.id]);

  useEffect(() => {
    // Wait for the currently selected print, including rapid switches. Clicking
    // the already-selected card also requests the one-time entry animation.
    if (firstSelectionRequested && ready && !entryConsumed.current && api.current?.drop()) {
      entryConsumed.current = true;
    }
  }, [firstSelectionRequested, ready, front]);

  const onLoadState = (status, path) => {
    if (status === "unavailable") setUnavailable(true);
    if (status === "ready") {
      setReadyFor(path);
      setFailedFor("");
    }
    if (status === "error") setFailedFor(path);
  };

  const flip = () => {
    if (ready && api.current) api.current.flip();
    else setBack((value) => !value);
  };

  return (
    <div className="rp-badge-preview" data-resource={resource.id} data-ready={ready}>
      <div className="rp-badge-stage" role="group" aria-label={`${resource.name} resource pass`}>
        <div className="rp-badge-aura" aria-hidden="true" />
        {!unavailable && (
          <BadgeBoundary onError={() => setUnavailable(true)}>
            <Lanyard
              apiRef={api}
              onLoadState={onLoadState}
              onFaceChange={setBack}
              frontImage={front}
              backImage={`${face}-back.svg`}
              strapImage={`${face}-strap.svg`}
              strapColor="#8e44ad"
              cardColor="#faf8fc"
              crispFront
              finish="glossy"
              size={0.69}
              strapLength={0.32}
              strapWidth={0.7}
              damping={0.66}
              elasticity={0.3}
              breeze={0}
              intro={false}
              className={ready ? "rp-badge-model rp-badge-model--ready" : "rp-badge-model"}
            />
          </BadgeBoundary>
        )}
        {!ready && (
          <div className="rp-badge-static" data-fallback={unavailable || imageError}>
            <span className="rp-badge-static-strap" aria-hidden="true" />
            <span className="rp-badge-static-clip" aria-hidden="true" />
            {!fallbackImageFailed ? (
              <img
                src={`${face}-${back ? "back" : "front"}.svg`}
                alt={`${resource.name} pass, ${back ? "back" : "front"}`}
                onError={() => setFallbackImageFailed(true)}
              />
            ) : (
              <div className="rp-badge-text-fallback">
                <span>RESEARCH TOOLKIT</span>
                <strong>{resource.name}</strong>
                <p>{back ? resource.note : resource.description}</p>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="rp-badge-caption">
        <p className="rp-sr-only" aria-live="polite">
          {back ? `Back of ${resource.name} pass. ${resource.note}` : `Front of ${resource.name} pass. ${resource.description}`}
        </p>
        <p aria-live="polite" className="rp-badge-hint">
          {unavailable || imageError
            ? "Static preview · All links remain available"
            : ready
              ? "Drag to swing · Click to flip"
              : "Preparing your pass…"}
        </p>
        <button
          className="rp-flip-button"
          type="button"
          onClick={flip}
          aria-label={`Show ${back ? "front" : "back"} of ${resource.name} pass`}
          aria-pressed={back}
        >
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M15 6a6 6 0 1 0 1 7M15 2v4h-4" />
          </svg>
          {back ? "Front of pass" : "Flip pass"}
        </button>
      </div>
    </div>
  );
}
