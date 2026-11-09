# Lanyard component

Adapted from the React Bits Lanyard component vendored by
[AI Crew Pass](https://github.com/fanhuayishiy/ai-crew-pass), commit
`a988ebdac0db42d6cc8805f36c70b2aecf48baca`.

Upstream: [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits/blob/main/src/content/Components/Lanyard/Lanyard.jsx).

Copyright (c) 2026 David Haz. The component is distributed under the retained
MIT + Commons Clause license in `LICENSE.md`. AI Crew Pass project contributions
are MIT, copyright (c) 2026 Hanging Pass contributors and fanhuayishiy / 风花AI实验室.

Local adaptations for the Resources page:

- Namespaced CSS classes to avoid changing the existing al-folio site.
- Added `apiRef.flip()` so a keyboard-accessible button invokes the same flip
  operation as a pointer, without synthetic input events.
- Added `apiRef.drop()` to request the original raised release after the first
  bookmark selection and current image load. An active grab finishes first;
  reduced-motion preferences keep the pass stationary.
- Added front-load and face-change callbacks, and WebGL context-loss fallback.
- Reset the printed face when selecting another resource while retaining the
  renderer and scene; pending reverse loads are token-checked.

The Three.js geometry, lighting, rope solver, and pointer interaction are retained.
Website icons come from their official sources; the card layout is local artwork.
No AI Crew Pass character illustrations are included here.
