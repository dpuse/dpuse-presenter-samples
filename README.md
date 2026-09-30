# Data Positioning Samples Presenter

[![npm version](https://img.shields.io/npm/v/@dpuse/dpuse-presenter-samples)](https://www.npmjs.com/package/@dpuse/dpuse-presenter-samples)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=dpuse_dpuse_dpuse-presenter-samples&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=data-positioning_dpuse-presenter-samples)

A library that implements the samples presenter in accordance with the Data Positioning presenter interface. It showcases the chart renderers exposed by `@dpuse/dpuse-tool-d3-visualiser` (Sankey diagram, and bar charts via Billboard.js, Observable Plot, native D3 and TanStack Charts).

<!-- OPENING_START -->

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![DPUse version](https://img.shields.io/github/v/release/dpuse/dpuse-presenter-samples?color=f6821f&label=DPUse)](https://github.com/dpuse/dpuse-presenter-samples/releases/latest)
[![CI](https://github.com/dpuse/dpuse-presenter-samples/actions/workflows/ci.yml/badge.svg)](https://github.com/dpuse/dpuse-presenter-samples/actions/workflows/ci.yml)

[DPUse](https://www.dpuse.app) · [Report a Vulnerability](https://github.com/dpuse/dpuse-presenter-samples/security/advisories/new) · [Open an Issue](https://github.com/dpuse/dpuse-presenter-samples/issues)

A library that implements the samples presenter in accordance with the Data Positioning presenter interface.

## About DPUse

DPUse (Data Positioning & Use) is an in-browser application that positions your data for use through three core activities: sourcing, contextualising, and publishing.

**Sourcing** uses a library of [Connectors](https://www.dpuse.app/connectors) to establish [Connections](https://www.dpuse.app) to applications, databases, file stores, and curated datasets; these connections are subsequently used to configure structured [Data Views](https://www.dpuse.app) from the underlying sources.

**Contextualising** extracts chronological events from those [Data Views](https://www.dpuse.app) and maps them into comprehensive [Context Models](https://www.dpuse.app). This gives the DPUse Engine the structural framework needed to generate deterministic transactions, facts, or observations.

**Publishing** uses a library of [Presenters](https://www.dpuse.app) to render standard [Presentations](https://www.dpuse.app) immediately using the contextualised data; additionally, [Cookbooks](https://www.dpuse.app) of [Recipes](https://www.dpuse.app) let you build Data Apps using your preferred tools.

In addition, DPUse provides [Tools](https://www.dpuse.app) used by the application, and you can use them to construct connectors and presenters.

## Introduction

A presenter that showcases chart-rendering samples from the Data Positioning D3 visualiser tool (Sankey diagram, and bar charts via Billboard.js, Observable Plot, native D3 and TanStack Charts).

<!-- OPENING_END -->

<!-- USAGE_START -->

## Usage

This presenter is automatically uploaded to the DPUse Engine cloud once released and becomes instantly available to all new browser app instances, with existing instances notified of the update.

You may view or clone this repository for your own purposes, such as building a new, similar presenter, though there is currently no process to accept third-party presenters into DPUse at this stage.

```bash
git clone https://github.com/dpuse/dpuse-presenter-samples.git
cd dpuse-presenter-samples
npm install
```

_Requires [Node.js](https://nodejs.org/) 24 or later, [npm](https://www.npmjs.com/) 12 or later, and [TypeScript](https://www.typescriptlang.org/) 6.0.3 or later._

This repository is managed using the common set of actions provided by [@dpuse/dpuse-development](https://github.com/dpuse/dpuse-development). See the `scripts` block in [package.json](https://github.com/dpuse/dpuse-presenter-samples/blob/main/package.json) for details.

<!-- USAGE_END -->

## OLD Installation

There's no need to install this presenter manually. Once released, it is uploaded to the Data Positioning Cloud and instantly available in all newly launched browser app instances. Running instances are notified of the update.

<!-- DEPENDENCY_LICENSES_START -->

## Dependency Licenses

License data is updated each time `npm run document` is run, using [license-checker](https://github.com/RSeidelsohn/license-checker-rseidelsohn). The following table lists all production dependencies. These dependencies (including transitive ones) have been checked and confirmed to use https://d3js.org/LICENSE, Apache-2.0, BSD-2-Clause, BSD-3-Clause, CC0-1.0, EPL-2.0, ISC, MIT, Unlicense, or 0BSD — all permissive, commercially-friendly licenses. Users of the uploaded library are covered by these checks; developers cloning this repository should independently verify development dependencies.

| Dependency                                                                                                   |  Version  | License(s)              | Document                                                                                          |
| :----------------------------------------------------------------------------------------------------------- | :-------: | :---------------------- | :------------------------------------------------------------------------------------------------ |
| [@babel/code-frame](https://github.com/babel/babel)                                                          |  7.29.7   | MIT                     | [LICENSE](licenses/downloads/@babel/code-frame@7.29.7-LICENSE.txt)                                |
| [@babel/generator](https://github.com/babel/babel)                                                           |  7.29.8   | MIT                     | [LICENSE](licenses/downloads/@babel/generator@7.29.8-LICENSE.txt)                                 |
| [@babel/helper-globals](https://github.com/babel/babel)                                                      |  7.29.7   | MIT                     | [LICENSE](licenses/downloads/@babel/helper-globals@7.29.7-LICENSE.txt)                            |
| [@babel/helper-module-imports](https://github.com/babel/babel)                                               |  7.29.7   | MIT                     | [LICENSE](licenses/downloads/@babel/helper-module-imports@7.29.7-LICENSE.txt)                     |
| [@babel/helper-string-parser](https://github.com/babel/babel)                                                |  7.29.7   | MIT                     | [LICENSE](licenses/downloads/@babel/helper-string-parser@7.29.7-LICENSE.txt)                      |
| [@babel/helper-validator-identifier](https://github.com/babel/babel)                                         |  7.29.7   | MIT                     | [LICENSE](licenses/downloads/@babel/helper-validator-identifier@7.29.7-LICENSE.txt)               |
| [@babel/parser](https://github.com/babel/babel)                                                              |  7.29.9   | MIT                     | [LICENSE](licenses/downloads/@babel/parser@7.29.9-LICENSE.txt)                                    |
| [@babel/runtime](https://github.com/babel/babel)                                                             |  7.29.7   | MIT                     | [LICENSE](licenses/downloads/@babel/runtime@7.29.7-LICENSE.txt)                                   |
| [@babel/template](https://github.com/babel/babel)                                                            |  7.29.7   | MIT                     | [LICENSE](licenses/downloads/@babel/template@7.29.7-LICENSE.txt)                                  |
| [@babel/traverse](https://github.com/babel/babel)                                                            |  7.29.8   | MIT                     | [LICENSE](licenses/downloads/@babel/traverse@7.29.8-LICENSE.txt)                                  |
| [@babel/types](https://github.com/babel/babel)                                                               |  7.29.8   | MIT                     | [LICENSE](licenses/downloads/@babel/types@7.29.8-LICENSE.txt)                                     |
| [@borewit/text-codec](https://github.com/Borewit/text-codec)                                                 |   0.2.2   | MIT                     | [LICENSE](licenses/downloads/@borewit/text-codec@0.2.2-LICENSE.txt)                               |
| [@dagrejs/dagre](https://github.com/dagrejs/dagre)                                                           |   3.1.1   | MIT                     | [LICENSE](licenses/downloads/@dagrejs/dagre@3.1.1-LICENSE.txt)                                    |
| [@dagrejs/graphlib](https://github.com/dagrejs/graphlib)                                                     |   4.0.5   | MIT                     | [LICENSE](licenses/downloads/@dagrejs/graphlib@4.0.5-LICENSE.txt)                                 |
| [@dpuse/dpuse-shared](https://github.com/dpuse/dpuse-shared)                                                 |  0.3.865  | MIT                     | [LICENSE](licenses/downloads/@dpuse/dpuse-shared@0.3.865-LICENSE.txt)                             |
| [@dpuse/dpuse-tool-d3-visualiser](https://github.com/dpuse/dpuse-tool-d3-visualiser)                         |  0.0.52   | MIT                     | [LICENSE](licenses/downloads/@dpuse/dpuse-tool-d3-visualiser@0.0.52-LICENSE.txt)                  |
| [@dpuse/dpuse-tool-micromark-markdown-parser](https://github.com/dpuse/dpuse-tool-micromark-markdown-parser) | 0.1.1043  | MIT                     | [LICENSE](licenses/downloads/@dpuse/dpuse-tool-micromark-markdown-parser@0.1.1043-LICENSE.txt)    |
| [@emotion/babel-plugin](https://github.com/emotion-js/emotion.git#main)                                      |  11.13.5  | MIT                     | [LICENSE](licenses/downloads/@emotion/babel-plugin@11.13.5-LICENSE.txt)                           |
| [@emotion/cache](https://github.com/emotion-js/emotion.git#main)                                             |  11.14.0  | MIT                     | [LICENSE](licenses/downloads/@emotion/cache@11.14.0-LICENSE.txt)                                  |
| [@emotion/css](https://github.com/emotion-js/emotion.git#main)                                               |  11.13.5  | MIT                     | [LICENSE](licenses/downloads/@emotion/css@11.13.5-LICENSE.txt)                                    |
| [@emotion/hash](https://github.com/emotion-js/emotion.git#main)                                              |   0.9.2   | MIT                     | [LICENSE](licenses/downloads/@emotion/hash@0.9.2-LICENSE.txt)                                     |
| [@emotion/memoize](https://github.com/emotion-js/emotion.git#main)                                           |   0.9.0   | MIT                     | [LICENSE](licenses/downloads/@emotion/memoize@0.9.0-LICENSE.txt)                                  |
| [@emotion/serialize](https://github.com/emotion-js/emotion.git#main)                                         |   1.3.3   | MIT                     | [LICENSE](licenses/downloads/@emotion/serialize@1.3.3-LICENSE.txt)                                |
| [@emotion/sheet](https://github.com/emotion-js/emotion.git#main)                                             |   1.4.0   | MIT                     | [LICENSE](licenses/downloads/@emotion/sheet@1.4.0-LICENSE.txt)                                    |
| [@emotion/unitless](https://github.com/emotion-js/emotion.git#main)                                          |  0.10.0   | MIT                     | [LICENSE](licenses/downloads/@emotion/unitless@0.10.0-LICENSE.txt)                                |
| [@emotion/utils](https://github.com/emotion-js/emotion.git#main)                                             |   1.4.2   | MIT                     | [LICENSE](licenses/downloads/@emotion/utils@1.4.2-LICENSE.txt)                                    |
| [@emotion/weak-memoize](https://github.com/emotion-js/emotion.git#main)                                      |   0.4.0   | MIT                     | [LICENSE](licenses/downloads/@emotion/weak-memoize@0.4.0-LICENSE.txt)                             |
| [@jridgewell/gen-mapping](https://github.com/jridgewell/sourcemaps)                                          |  0.3.13   | MIT                     | [LICENSE](licenses/downloads/@jridgewell/gen-mapping@0.3.13-LICENSE.txt)                          |
| [@jridgewell/resolve-uri](https://github.com/jridgewell/resolve-uri)                                         |   3.1.2   | MIT                     | [LICENSE](licenses/downloads/@jridgewell/resolve-uri@3.1.2-LICENSE.txt)                           |
| [@jridgewell/sourcemap-codec](https://github.com/jridgewell/sourcemaps)                                      |   1.6.0   | MIT                     | [LICENSE](licenses/downloads/@jridgewell/sourcemap-codec@1.6.0-LICENSE.txt)                       |
| [@jridgewell/trace-mapping](https://github.com/jridgewell/sourcemaps)                                        |  0.3.31   | MIT                     | [LICENSE](licenses/downloads/@jridgewell/trace-mapping@0.3.31-LICENSE.txt)                        |
| [@juggle/resize-observer](https://github.com/juggle/resize-observer)                                         |   3.4.0   | Apache-2.0              | [LICENSE](licenses/downloads/@juggle/resize-observer@3.4.0-LICENSE.txt)                           |
| [@mapbox/jsonlint-lines-primitives](https://github.com/mapbox/jsonlint)                                      |   2.0.3   | MIT                     | [LICENSE](licenses/downloads/@mapbox/jsonlint-lines-primitives@2.0.3-LICENSE.txt)                 |
| [@mapbox/point-geometry](https://github.com/mapbox/point-geometry)                                           |   1.1.0   | ISC                     | [LICENSE](licenses/downloads/@mapbox/point-geometry@1.1.0-LICENSE.txt)                            |
| [@mapbox/tiny-sdf](https://github.com/mapbox/tiny-sdf)                                                       |   2.2.0   | BSD-2-Clause            | [LICENSE](licenses/downloads/@mapbox/tiny-sdf@2.2.0-LICENSE.txt)                                  |
| [@mapbox/unitbezier](https://github.com/mapbox/unitbezier)                                                   |   1.0.0   | BSD-2-Clause            | [LICENSE](licenses/downloads/@mapbox/unitbezier@1.0.0-LICENSE.txt)                                |
| [@mapbox/vector-tile](https://github.com/mapbox/vector-tile-js)                                              |   3.0.0   | BSD-3-Clause            | [LICENSE](licenses/downloads/@mapbox/vector-tile@3.0.0-LICENSE.txt)                               |
| [@maplibre/geojson-vt](https://github.com/maplibre/geojson-vt)                                               |   6.1.1   | ISC                     | [LICENSE](licenses/downloads/@maplibre/geojson-vt@6.1.1-LICENSE.txt)                              |
| [@maplibre/maplibre-gl-style-spec](https://github.com/maplibre/maplibre-style-spec)                          |  26.4.1   | ISC                     | [LICENSE](licenses/downloads/@maplibre/maplibre-gl-style-spec@26.4.1-LICENSE.txt)                 |
| [@maplibre/maplibre-gl-style-spec](https://github.com/maplibre/maplibre-style-spec)                          |  26.4.4   | ISC                     | [LICENSE](licenses/downloads/@maplibre/maplibre-gl-style-spec@26.4.4-LICENSE.txt)                 |
| [@maplibre/mlt](https://github.com/maplibre/maplibre-tile-spec)                                              |   1.3.0   | (MIT OR Apache-2.0)     | [LICENSE](licenses/downloads/@maplibre/mlt@1.3.0-LICENSE.txt)                                     |
| [@maplibre/vt-pbf](https://github.com/maplibre/vt-pbf)                                                       |   4.3.2   | MIT                     | [LICENSE](licenses/downloads/@maplibre/vt-pbf@4.3.2-LICENSE.txt)                                  |
| [@observablehq/plot](https://github.com/observablehq/plot)                                                   |  0.6.17   | ISC                     | [LICENSE](licenses/downloads/@observablehq/plot@0.6.17-LICENSE.txt)                               |
| [@speed-highlight/core](https://github.com/speed-highlight/core)                                             |   2.1.0   | CC0-1.0                 | [LICENSE](licenses/downloads/@speed-highlight/core@2.1.0-LICENSE.txt)                             |
| [@tanstack/charts](https://github.com/TanStack/charts)                                                       |  0.18.0   | MIT                     | [LICENSE](licenses/downloads/@tanstack/charts@0.18.0-LICENSE.txt)                                 |
| [@tokenizer/inflate](https://github.com/Borewit/tokenizer-inflate)                                           |   0.4.1   | MIT                     | [LICENSE](licenses/downloads/@tokenizer/inflate@0.4.1-LICENSE.txt)                                |
| [@tokenizer/token](https://github.com/Borewit/tokenizer-token)                                               |   0.3.0   | MIT                     | [LICENSE](licenses/downloads/@tokenizer/token@0.3.0-LICENSE.txt)                                  |
| [@types/d3-array](https://github.com/DefinitelyTyped/DefinitelyTyped)                                        |   3.2.2   | MIT                     | [LICENSE](licenses/downloads/@types/d3-array@3.2.2-LICENSE.txt)                                   |
| [@types/d3-axis](https://github.com/DefinitelyTyped/DefinitelyTyped)                                         |   3.0.6   | MIT                     | [LICENSE](licenses/downloads/@types/d3-axis@3.0.6-LICENSE.txt)                                    |
| [@types/d3-brush](https://github.com/DefinitelyTyped/DefinitelyTyped)                                        |   3.0.6   | MIT                     | [LICENSE](licenses/downloads/@types/d3-brush@3.0.6-LICENSE.txt)                                   |
| [@types/d3-chord](https://github.com/DefinitelyTyped/DefinitelyTyped)                                        |   3.0.6   | MIT                     | [LICENSE](licenses/downloads/@types/d3-chord@3.0.6-LICENSE.txt)                                   |
| [@types/d3-collection](https://github.com/DefinitelyTyped/DefinitelyTyped)                                   |  1.0.13   | MIT                     | [LICENSE](licenses/downloads/@types/d3-collection@1.0.13-LICENSE.txt)                             |
| [@types/d3-color](https://github.com/DefinitelyTyped/DefinitelyTyped)                                        |   3.1.3   | MIT                     | [LICENSE](licenses/downloads/@types/d3-color@3.1.3-LICENSE.txt)                                   |
| [@types/d3-contour](https://github.com/DefinitelyTyped/DefinitelyTyped)                                      |   3.0.6   | MIT                     | [LICENSE](licenses/downloads/@types/d3-contour@3.0.6-LICENSE.txt)                                 |
| [@types/d3-delaunay](https://github.com/DefinitelyTyped/DefinitelyTyped)                                     |   6.0.4   | MIT                     | [LICENSE](licenses/downloads/@types/d3-delaunay@6.0.4-LICENSE.txt)                                |
| [@types/d3-dispatch](https://github.com/DefinitelyTyped/DefinitelyTyped)                                     |   3.0.7   | MIT                     | [LICENSE](licenses/downloads/@types/d3-dispatch@3.0.7-LICENSE.txt)                                |
| [@types/d3-drag](https://github.com/DefinitelyTyped/DefinitelyTyped)                                         |   3.0.7   | MIT                     | [LICENSE](licenses/downloads/@types/d3-drag@3.0.7-LICENSE.txt)                                    |
| [@types/d3-dsv](https://github.com/DefinitelyTyped/DefinitelyTyped)                                          |   3.0.7   | MIT                     | [LICENSE](licenses/downloads/@types/d3-dsv@3.0.7-LICENSE.txt)                                     |
| [@types/d3-ease](https://github.com/DefinitelyTyped/DefinitelyTyped)                                         |   3.0.2   | MIT                     | [LICENSE](licenses/downloads/@types/d3-ease@3.0.2-LICENSE.txt)                                    |
| [@types/d3-fetch](https://github.com/DefinitelyTyped/DefinitelyTyped)                                        |   3.0.7   | MIT                     | [LICENSE](licenses/downloads/@types/d3-fetch@3.0.7-LICENSE.txt)                                   |
| [@types/d3-force](https://github.com/DefinitelyTyped/DefinitelyTyped)                                        |  3.0.10   | MIT                     | [LICENSE](licenses/downloads/@types/d3-force@3.0.10-LICENSE.txt)                                  |
| [@types/d3-format](https://github.com/DefinitelyTyped/DefinitelyTyped)                                       |   3.0.4   | MIT                     | [LICENSE](licenses/downloads/@types/d3-format@3.0.4-LICENSE.txt)                                  |
| [@types/d3-geo](https://github.com/DefinitelyTyped/DefinitelyTyped)                                          |   3.1.1   | MIT                     | [LICENSE](licenses/downloads/@types/d3-geo@3.1.1-LICENSE.txt)                                     |
| [@types/d3-hierarchy](https://github.com/DefinitelyTyped/DefinitelyTyped)                                    |   3.1.7   | MIT                     | [LICENSE](licenses/downloads/@types/d3-hierarchy@3.1.7-LICENSE.txt)                               |
| [@types/d3-interpolate](https://github.com/DefinitelyTyped/DefinitelyTyped)                                  |   3.0.4   | MIT                     | [LICENSE](licenses/downloads/@types/d3-interpolate@3.0.4-LICENSE.txt)                             |
| [@types/d3-path](https://github.com/DefinitelyTyped/DefinitelyTyped)                                         |  1.0.11   | MIT                     | [LICENSE](licenses/downloads/@types/d3-path@1.0.11-LICENSE.txt)                                   |
| [@types/d3-path](https://github.com/DefinitelyTyped/DefinitelyTyped)                                         |   3.1.1   | MIT                     | [LICENSE](licenses/downloads/@types/d3-path@3.1.1-LICENSE.txt)                                    |
| [@types/d3-polygon](https://github.com/DefinitelyTyped/DefinitelyTyped)                                      |   3.0.2   | MIT                     | [LICENSE](licenses/downloads/@types/d3-polygon@3.0.2-LICENSE.txt)                                 |
| [@types/d3-quadtree](https://github.com/DefinitelyTyped/DefinitelyTyped)                                     |   3.0.6   | MIT                     | [LICENSE](licenses/downloads/@types/d3-quadtree@3.0.6-LICENSE.txt)                                |
| [@types/d3-random](https://github.com/DefinitelyTyped/DefinitelyTyped)                                       |   3.0.4   | MIT                     | [LICENSE](licenses/downloads/@types/d3-random@3.0.4-LICENSE.txt)                                  |
| [@types/d3-sankey](https://github.com/DefinitelyTyped/DefinitelyTyped)                                       |  0.12.5   | MIT                     | [LICENSE](licenses/downloads/@types/d3-sankey@0.12.5-LICENSE.txt)                                 |
| [@types/d3-scale-chromatic](https://github.com/DefinitelyTyped/DefinitelyTyped)                              |   3.1.0   | MIT                     | [LICENSE](licenses/downloads/@types/d3-scale-chromatic@3.1.0-LICENSE.txt)                         |
| [@types/d3-scale](https://github.com/DefinitelyTyped/DefinitelyTyped)                                        |   4.0.9   | MIT                     | [LICENSE](licenses/downloads/@types/d3-scale@4.0.9-LICENSE.txt)                                   |
| [@types/d3-selection](https://github.com/DefinitelyTyped/DefinitelyTyped)                                    |  3.0.12   | MIT                     | [LICENSE](licenses/downloads/@types/d3-selection@3.0.12-LICENSE.txt)                              |
| [@types/d3-shape](https://github.com/DefinitelyTyped/DefinitelyTyped)                                        |  1.3.12   | MIT                     | [LICENSE](licenses/downloads/@types/d3-shape@1.3.12-LICENSE.txt)                                  |
| [@types/d3-shape](https://github.com/DefinitelyTyped/DefinitelyTyped)                                        |   3.1.8   | MIT                     | [LICENSE](licenses/downloads/@types/d3-shape@3.1.8-LICENSE.txt)                                   |
| [@types/d3-time-format](https://github.com/DefinitelyTyped/DefinitelyTyped)                                  |   4.0.3   | MIT                     | [LICENSE](licenses/downloads/@types/d3-time-format@4.0.3-LICENSE.txt)                             |
| [@types/d3-time](https://github.com/DefinitelyTyped/DefinitelyTyped)                                         |   3.0.4   | MIT                     | [LICENSE](licenses/downloads/@types/d3-time@3.0.4-LICENSE.txt)                                    |
| [@types/d3-timer](https://github.com/DefinitelyTyped/DefinitelyTyped)                                        |   3.0.2   | MIT                     | [LICENSE](licenses/downloads/@types/d3-timer@3.0.2-LICENSE.txt)                                   |
| [@types/d3-transition](https://github.com/DefinitelyTyped/DefinitelyTyped)                                   |   3.0.9   | MIT                     | [LICENSE](licenses/downloads/@types/d3-transition@3.0.9-LICENSE.txt)                              |
| [@types/d3-zoom](https://github.com/DefinitelyTyped/DefinitelyTyped)                                         |   3.0.9   | MIT                     | [LICENSE](licenses/downloads/@types/d3-zoom@3.0.9-LICENSE.txt)                                    |
| [@types/d3](https://github.com/DefinitelyTyped/DefinitelyTyped)                                              |   7.4.3   | MIT                     | [LICENSE](licenses/downloads/@types/d3@7.4.3-LICENSE.txt)                                         |
| [@types/dagre](https://github.com/DefinitelyTyped/DefinitelyTyped)                                           |  0.7.54   | MIT                     | [LICENSE](licenses/downloads/@types/dagre@0.7.54-LICENSE.txt)                                     |
| [@types/debug](https://github.com/DefinitelyTyped/DefinitelyTyped)                                           |  4.1.13   | MIT                     | [LICENSE](licenses/downloads/@types/debug@4.1.13-LICENSE.txt)                                     |
| [@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)                                         | 7946.0.16 | MIT                     | [LICENSE](licenses/downloads/@types/geojson@7946.0.16-LICENSE.txt)                                |
| [@types/leaflet](https://github.com/DefinitelyTyped/DefinitelyTyped)                                         |   1.7.6   | MIT                     | [LICENSE](licenses/downloads/@types/leaflet@1.7.6-LICENSE.txt)                                    |
| [@types/ms](https://github.com/DefinitelyTyped/DefinitelyTyped)                                              |   2.1.0   | MIT                     | [LICENSE](licenses/downloads/@types/ms@2.1.0-LICENSE.txt)                                         |
| [@types/parse-json](https://github.com/DefinitelyTyped/DefinitelyTyped)                                      |   4.0.2   | MIT                     | [LICENSE](licenses/downloads/@types/parse-json@4.0.2-LICENSE.txt)                                 |
| [@types/supercluster](https://github.com/DefinitelyTyped/DefinitelyTyped)                                    |   5.0.3   | MIT                     | [LICENSE](licenses/downloads/@types/supercluster@5.0.3-LICENSE.txt)                               |
| [@types/three](https://github.com/DefinitelyTyped/DefinitelyTyped)                                           |  0.135.0  | MIT                     | [LICENSE](licenses/downloads/@types/three@0.135.0-LICENSE.txt)                                    |
| [@types/throttle-debounce](https://github.com/DefinitelyTyped/DefinitelyTyped)                               |   5.0.2   | MIT                     | [LICENSE](licenses/downloads/@types/throttle-debounce@5.0.2-LICENSE.txt)                          |
| [@types/topojson-client](https://github.com/DefinitelyTyped/DefinitelyTyped)                                 |   3.1.5   | MIT                     | [LICENSE](licenses/downloads/@types/topojson-client@3.1.5-LICENSE.txt)                            |
| [@types/topojson-server](https://github.com/DefinitelyTyped/DefinitelyTyped)                                 |   3.0.4   | MIT                     | [LICENSE](licenses/downloads/@types/topojson-server@3.0.4-LICENSE.txt)                            |
| [@types/topojson-simplify](https://github.com/DefinitelyTyped/DefinitelyTyped)                               |   3.0.3   | MIT                     | [LICENSE](licenses/downloads/@types/topojson-simplify@3.0.3-LICENSE.txt)                          |
| [@types/topojson-specification](https://github.com/DefinitelyTyped/DefinitelyTyped)                          |   1.0.5   | MIT                     | [LICENSE](licenses/downloads/@types/topojson-specification@1.0.5-LICENSE.txt)                     |
| [@types/topojson](https://github.com/DefinitelyTyped/DefinitelyTyped)                                        |   3.2.6   | MIT                     | [LICENSE](licenses/downloads/@types/topojson@3.2.6-LICENSE.txt)                                   |
| [@types/trusted-types](https://github.com/DefinitelyTyped/DefinitelyTyped)                                   |   2.0.7   | MIT                     | [LICENSE](licenses/downloads/@types/trusted-types@2.0.7-LICENSE.txt)                              |
| [@types/unist](https://github.com/DefinitelyTyped/DefinitelyTyped)                                           |  2.0.11   | MIT                     | [LICENSE](licenses/downloads/@types/unist@2.0.11-LICENSE.txt)                                     |
| [@unovis/dagre-layout](https://github.com/unovis/dagre-layout)                                               |  0.8.8-3  | MIT                     | [LICENSE](licenses/downloads/@unovis/dagre-layout@0.8.8-3-LICENSE.txt)                            |
| [@unovis/graphlibrary](https://github.com/unovis/graphlibrary)                                               |  2.2.0-3  | MIT                     | [LICENSE](licenses/downloads/@unovis/graphlibrary@2.2.0-3-LICENSE.txt)                            |
| [@unovis/ts](https://github.com/f5/unovis)                                                                   |   1.7.1   | Apache-2.0              | [LICENSE](licenses/downloads/@unovis/ts@1.7.1-LICENSE.txt)                                        |
| [babel-plugin-macros](https://github.com/kentcdodds/babel-plugin-macros)                                     |   3.1.0   | MIT                     | [LICENSE](licenses/downloads/babel-plugin-macros@3.1.0-LICENSE.txt)                               |
| [bidi-js](https://github.com/lojjic/bidi-js)                                                                 |   1.1.0   | MIT                     | [LICENSE](licenses/downloads/bidi-js@1.1.0-LICENSE.txt)                                           |
| [billboard.js](https://github.com/naver/billboard.js)                                                        |   4.1.1   | MIT                     | [LICENSE](licenses/downloads/billboard.js@4.1.1-LICENSE.txt)                                      |
| [binary-search-bounds](https://github.com/mikolalysenko/binary-search-bounds)                                |   2.0.5   | MIT                     | [LICENSE](licenses/downloads/binary-search-bounds@2.0.5-LICENSE.txt)                              |
| [callsites](https://github.com/sindresorhus/callsites)                                                       |   3.1.0   | MIT                     | [LICENSE](licenses/downloads/callsites@3.1.0-LICENSE.txt)                                         |
| [character-entities-legacy](https://github.com/wooorm/character-entities-legacy)                             |   3.0.0   | MIT                     | [LICENSE](licenses/downloads/character-entities-legacy@3.0.0-LICENSE.txt)                         |
| [character-entities](https://github.com/wooorm/character-entities)                                           |   2.0.2   | MIT                     | [LICENSE](licenses/downloads/character-entities@2.0.2-LICENSE.txt)                                |
| [character-reference-invalid](https://github.com/wooorm/character-reference-invalid)                         |   2.0.1   | MIT                     | [LICENSE](licenses/downloads/character-reference-invalid@2.0.1-LICENSE.txt)                       |
| [commander](https://github.com/tj/commander.js)                                                              |  2.20.3   | MIT                     | [LICENSE](licenses/downloads/commander@2.20.3-LICENSE.txt)                                        |
| [commander](https://github.com/tj/commander.js)                                                              |   7.2.0   | MIT                     | [LICENSE](licenses/downloads/commander@7.2.0-LICENSE.txt)                                         |
| [convert-source-map](https://github.com/thlorenz/convert-source-map)                                         |   1.9.0   | MIT                     | [LICENSE](licenses/downloads/convert-source-map@1.9.0-LICENSE.txt)                                |
| [cosmiconfig](https://github.com/davidtheclark/cosmiconfig)                                                  |   7.1.0   | MIT                     | [LICENSE](licenses/downloads/cosmiconfig@7.1.0-LICENSE.txt)                                       |
| [csstype](https://github.com/frenic/csstype)                                                                 |   3.2.3   | MIT                     | [LICENSE](licenses/downloads/csstype@3.2.3-LICENSE.txt)                                           |
| [d3-array](https://github.com/d3/d3-array)                                                                   |  2.12.1   | BSD-3-Clause            | [LICENSE](licenses/downloads/d3-array@2.12.1-LICENSE.txt)                                         |
| [d3-array](https://github.com/d3/d3-array)                                                                   |   3.2.4   | ISC                     | [LICENSE](licenses/downloads/d3-array@3.2.4-LICENSE.txt)                                          |
| [d3-axis](https://github.com/d3/d3-axis)                                                                     |   3.0.0   | ISC                     | [LICENSE](licenses/downloads/d3-axis@3.0.0-LICENSE.txt)                                           |
| [d3-brush](https://github.com/d3/d3-brush)                                                                   |   3.0.0   | ISC                     | [LICENSE](licenses/downloads/d3-brush@3.0.0-LICENSE.txt)                                          |
| [d3-chord](https://github.com/d3/d3-chord)                                                                   |   3.0.1   | ISC                     | [LICENSE](licenses/downloads/d3-chord@3.0.1-LICENSE.txt)                                          |
| [d3-collection](https://github.com/d3/d3-collection)                                                         |   1.0.7   | BSD-3-Clause            | [LICENSE](licenses/downloads/d3-collection@1.0.7-LICENSE.txt)                                     |
| [d3-color](https://github.com/d3/d3-color)                                                                   |   3.1.0   | ISC                     | [LICENSE](licenses/downloads/d3-color@3.1.0-LICENSE.txt)                                          |
| [d3-contour](https://github.com/d3/d3-contour)                                                               |   4.0.2   | ISC                     | [LICENSE](licenses/downloads/d3-contour@4.0.2-LICENSE.txt)                                        |
| [d3-delaunay](https://github.com/d3/d3-delaunay)                                                             |   6.0.4   | ISC                     | [LICENSE](licenses/downloads/d3-delaunay@6.0.4-LICENSE.txt)                                       |
| [d3-dispatch](https://github.com/d3/d3-dispatch)                                                             |   3.0.1   | ISC                     | [LICENSE](licenses/downloads/d3-dispatch@3.0.1-LICENSE.txt)                                       |
| [d3-drag](https://github.com/d3/d3-drag)                                                                     |   3.0.0   | ISC                     | [LICENSE](licenses/downloads/d3-drag@3.0.0-LICENSE.txt)                                           |
| [d3-dsv](https://github.com/d3/d3-dsv)                                                                       |   3.0.1   | ISC                     | [LICENSE](licenses/downloads/d3-dsv@3.0.1-LICENSE.txt)                                            |
| [d3-ease](https://github.com/d3/d3-ease)                                                                     |   3.0.1   | BSD-3-Clause            | [LICENSE](licenses/downloads/d3-ease@3.0.1-LICENSE.txt)                                           |
| [d3-fetch](https://github.com/d3/d3-fetch)                                                                   |   3.0.1   | ISC                     | [LICENSE](licenses/downloads/d3-fetch@3.0.1-LICENSE.txt)                                          |
| [d3-force](https://github.com/d3/d3-force)                                                                   |   3.0.0   | ISC                     | [LICENSE](licenses/downloads/d3-force@3.0.0-LICENSE.txt)                                          |
| [d3-format](https://github.com/d3/d3-format)                                                                 |   3.1.2   | ISC                     | [LICENSE](licenses/downloads/d3-format@3.1.2-LICENSE.txt)                                         |
| [d3-geo-projection](https://github.com/d3/d3-geo-projection)                                                 |   4.0.0   | ISC                     | [LICENSE](licenses/downloads/d3-geo-projection@4.0.0-LICENSE.txt)                                 |
| [d3-geo](https://github.com/d3/d3-geo)                                                                       |   3.1.1   | ISC                     | [LICENSE](licenses/downloads/d3-geo@3.1.1-LICENSE.txt)                                            |
| [d3-hexbin](https://github.com/d3/d3-hexbin)                                                                 |   0.2.2   | BSD-3-Clause            | [LICENSE](licenses/downloads/d3-hexbin@0.2.2-LICENSE.txt)                                         |
| [d3-hierarchy](https://github.com/d3/d3-hierarchy)                                                           |   3.1.2   | ISC                     | [LICENSE](licenses/downloads/d3-hierarchy@3.1.2-LICENSE.txt)                                      |
| [d3-interpolate-path](https://github.com/pbeshai/d3-interpolate-path)                                        |   2.3.0   | BSD-3-Clause            | [LICENSE](licenses/downloads/d3-interpolate-path@2.3.0-LICENSE.txt)                               |
| [d3-interpolate](https://github.com/d3/d3-interpolate)                                                       |   3.0.1   | ISC                     | [LICENSE](licenses/downloads/d3-interpolate@3.0.1-LICENSE.txt)                                    |
| [d3-path](https://github.com/d3/d3-path)                                                                     |   1.0.9   | BSD-3-Clause            | [LICENSE](licenses/downloads/d3-path@1.0.9-LICENSE.txt)                                           |
| [d3-path](https://github.com/d3/d3-path)                                                                     |   3.1.0   | ISC                     | [LICENSE](licenses/downloads/d3-path@3.1.0-LICENSE.txt)                                           |
| [d3-polygon](https://github.com/d3/d3-polygon)                                                               |   3.0.1   | ISC                     | [LICENSE](licenses/downloads/d3-polygon@3.0.1-LICENSE.txt)                                        |
| [d3-quadtree](https://github.com/d3/d3-quadtree)                                                             |   3.0.1   | ISC                     | [LICENSE](licenses/downloads/d3-quadtree@3.0.1-LICENSE.txt)                                       |
| [d3-random](https://github.com/d3/d3-random)                                                                 |   3.0.1   | ISC                     | [LICENSE](licenses/downloads/d3-random@3.0.1-LICENSE.txt)                                         |
| [d3-sankey](https://github.com/d3/d3-sankey)                                                                 |  0.12.3   | BSD-3-Clause            | [LICENSE](licenses/downloads/d3-sankey@0.12.3-LICENSE.txt)                                        |
| [d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic)                                               |   3.1.0   | ISC                     | [LICENSE](licenses/downloads/d3-scale-chromatic@3.1.0-LICENSE.txt)                                |
| [d3-scale](https://github.com/d3/d3-scale)                                                                   |   4.0.2   | ISC                     | [LICENSE](licenses/downloads/d3-scale@4.0.2-LICENSE.txt)                                          |
| [d3-selection](https://github.com/d3/d3-selection)                                                           |   3.0.0   | ISC                     | [LICENSE](licenses/downloads/d3-selection@3.0.0-LICENSE.txt)                                      |
| [d3-shape](https://github.com/d3/d3-shape)                                                                   |   1.3.7   | BSD-3-Clause            | [LICENSE](licenses/downloads/d3-shape@1.3.7-LICENSE.txt)                                          |
| [d3-shape](https://github.com/d3/d3-shape)                                                                   |   3.2.0   | ISC                     | [LICENSE](licenses/downloads/d3-shape@3.2.0-LICENSE.txt)                                          |
| [d3-time-format](https://github.com/d3/d3-time-format)                                                       |   4.1.0   | ISC                     | [LICENSE](licenses/downloads/d3-time-format@4.1.0-LICENSE.txt)                                    |
| [d3-time](https://github.com/d3/d3-time)                                                                     |   3.1.0   | ISC                     | [LICENSE](licenses/downloads/d3-time@3.1.0-LICENSE.txt)                                           |
| [d3-timer](https://github.com/d3/d3-timer)                                                                   |   3.0.1   | ISC                     | [LICENSE](licenses/downloads/d3-timer@3.0.1-LICENSE.txt)                                          |
| [d3-transition](https://github.com/d3/d3-transition)                                                         |   3.0.1   | ISC                     | [LICENSE](licenses/downloads/d3-transition@3.0.1-LICENSE.txt)                                     |
| [d3-zoom](https://github.com/d3/d3-zoom)                                                                     |   3.0.0   | ISC                     | [LICENSE](licenses/downloads/d3-zoom@3.0.0-LICENSE.txt)                                           |
| [d3](https://github.com/d3/d3)                                                                               |   7.9.0   | ISC                     | [LICENSE](licenses/downloads/d3@7.9.0-LICENSE.txt)                                                |
| [debug](https://github.com/debug-js/debug)                                                                   |   4.4.3   | MIT                     | [LICENSE](licenses/downloads/debug@4.4.3-LICENSE.txt)                                             |
| [decode-named-character-reference](https://github.com/wooorm/decode-named-character-reference)               |   1.3.0   | MIT                     | [LICENSE](licenses/downloads/decode-named-character-reference@1.3.0-LICENSE.txt)                  |
| [delaunator](https://github.com/mapbox/delaunator)                                                           |   5.1.0   | ISC                     | [LICENSE](licenses/downloads/delaunator@5.1.0-LICENSE.txt)                                        |
| [dequal](https://github.com/lukeed/dequal)                                                                   |   2.0.3   | MIT                     | [LICENSE](licenses/downloads/dequal@2.0.3-LICENSE.txt)                                            |
| [devlop](https://github.com/wooorm/devlop)                                                                   |   1.1.0   | MIT                     | [LICENSE](licenses/downloads/devlop@1.1.0-LICENSE.txt)                                            |
| [dompurify](https://github.com/cure53/DOMPurify)                                                             |  3.4.16   | (MPL-2.0 OR Apache-2.0) | [LICENSE](licenses/downloads/dompurify@3.4.16-LICENSE.txt)                                        |
| [earcut](https://github.com/mapbox/earcut)                                                                   |   3.2.4   | ISC                     | [LICENSE](licenses/downloads/earcut@3.2.4-LICENSE.txt)                                            |
| [elkjs](https://github.com/kieler/elkjs)                                                                     |  0.10.2   | EPL-2.0                 | [LICENSE](licenses/downloads/elkjs@0.10.2-LICENSE.txt)                                            |
| [error-ex](https://github.com/qix-/node-error-ex)                                                            |   1.3.4   | MIT                     | [LICENSE](licenses/downloads/error-ex@1.3.4-LICENSE.txt)                                          |
| [es-errors](https://github.com/ljharb/es-errors)                                                             |   1.3.0   | MIT                     | [LICENSE](licenses/downloads/es-errors@1.3.0-LICENSE.txt)                                         |
| [escape-string-regexp](https://github.com/sindresorhus/escape-string-regexp)                                 |   4.0.0   | MIT                     | [LICENSE](licenses/downloads/escape-string-regexp@4.0.0-LICENSE.txt)                              |
| [file-type](https://github.com/sindresorhus/file-type)                                                       |  22.1.1   | MIT                     | [LICENSE](licenses/downloads/file-type@22.1.1-LICENSE.txt)                                        |
| [find-root](https://github.com/js-n/find-root)                                                               |   1.1.0   | MIT                     | [LICENSE](licenses/downloads/find-root@1.1.0-LICENSE.txt)                                         |
| [function-bind](https://github.com/Raynos/function-bind)                                                     |   1.1.2   | MIT                     | [LICENSE](licenses/downloads/function-bind@1.1.2-LICENSE.txt)                                     |
| [geojson](https://github.com/caseycesari/geojson.js)                                                         |   0.5.0   | MIT                     | [LICENSE](licenses/downloads/geojson@0.5.0-LICENSE.txt)                                           |
| [gl-matrix](https://github.com/toji/gl-matrix)                                                               |   3.4.4   | MIT                     | [LICENSE](licenses/downloads/gl-matrix@3.4.4-LICENSE.txt)                                         |
| [hasown](https://github.com/inspect-js/hasOwn)                                                               |   2.0.4   | MIT                     | [LICENSE](licenses/downloads/hasown@2.0.4-LICENSE.txt)                                            |
| [iconv-lite](https://github.com/ashtuchkin/iconv-lite)                                                       |   0.6.3   | MIT                     | [LICENSE](licenses/downloads/iconv-lite@0.6.3-LICENSE.txt)                                        |
| [ieee754](https://github.com/feross/ieee754)                                                                 |   1.2.1   | BSD-3-Clause            | [LICENSE](licenses/downloads/ieee754@1.2.1-LICENSE.txt)                                           |
| [import-fresh](https://github.com/sindresorhus/import-fresh)                                                 |   3.3.1   | MIT                     | [LICENSE](licenses/downloads/import-fresh@3.3.1-LICENSE.txt)                                      |
| [internmap](https://github.com/mbostock/internmap)                                                           |   1.0.1   | ISC                     | [LICENSE](licenses/downloads/internmap@1.0.1-LICENSE.txt)                                         |
| [internmap](https://github.com/mbostock/internmap)                                                           |   2.0.3   | ISC                     | [LICENSE](licenses/downloads/internmap@2.0.3-LICENSE.txt)                                         |
| [interval-tree-1d](https://github.com/mikolalysenko/interval-tree-1d)                                        |   1.0.4   | MIT                     | [LICENSE](licenses/downloads/interval-tree-1d@1.0.4-LICENSE.txt)                                  |
| [is-alphabetical](https://github.com/wooorm/is-alphabetical)                                                 |   2.0.1   | MIT                     | [LICENSE](licenses/downloads/is-alphabetical@2.0.1-LICENSE.txt)                                   |
| [is-alphanumerical](https://github.com/wooorm/is-alphanumerical)                                             |   2.0.1   | MIT                     | [LICENSE](licenses/downloads/is-alphanumerical@2.0.1-LICENSE.txt)                                 |
| [is-arrayish](https://github.com/qix-/node-is-arrayish)                                                      |   0.2.1   | MIT                     | [LICENSE](licenses/downloads/is-arrayish@0.2.1-LICENSE.txt)                                       |
| [is-core-module](https://github.com/inspect-js/is-core-module)                                               |  2.17.0   | MIT                     | [LICENSE](licenses/downloads/is-core-module@2.17.0-LICENSE.txt)                                   |
| [is-decimal](https://github.com/wooorm/is-decimal)                                                           |   2.0.1   | MIT                     | [LICENSE](licenses/downloads/is-decimal@2.0.1-LICENSE.txt)                                        |
| [is-hexadecimal](https://github.com/wooorm/is-hexadecimal)                                                   |   2.0.1   | MIT                     | [LICENSE](licenses/downloads/is-hexadecimal@2.0.1-LICENSE.txt)                                    |
| [isoformat](https://github.com/mbostock/isoformat)                                                           |   0.2.1   | ISC                     | [LICENSE](licenses/downloads/isoformat@0.2.1-LICENSE.txt)                                         |
| [js-tokens](https://github.com/lydell/js-tokens)                                                             |   4.0.0   | MIT                     | [LICENSE](licenses/downloads/js-tokens@4.0.0-LICENSE.txt)                                         |
| [jsesc](https://github.com/mathiasbynens/jsesc)                                                              |   3.1.0   | MIT                     | [LICENSE](licenses/downloads/jsesc@3.1.0-LICENSE.txt)                                             |
| [json-parse-even-better-errors](https://github.com/npm/json-parse-even-better-errors)                        |   2.3.1   | MIT                     | [LICENSE](licenses/downloads/json-parse-even-better-errors@2.3.1-LICENSE.txt)                     |
| [json-stringify-pretty-compact](https://github.com/lydell/json-stringify-pretty-compact)                     |   4.0.0   | MIT                     | [LICENSE](licenses/downloads/json-stringify-pretty-compact@4.0.0-LICENSE.txt)                     |
| [kdbush](https://github.com/mourner/kdbush)                                                                  |   3.0.0   | ISC                     | [LICENSE](licenses/downloads/kdbush@3.0.0-LICENSE.txt)                                            |
| [kdbush](https://github.com/mourner/kdbush)                                                                  |   4.1.0   | ISC                     | [LICENSE](licenses/downloads/kdbush@4.1.0-LICENSE.txt)                                            |
| [leaflet](https://github.com/Leaflet/Leaflet)                                                                |   1.7.1   | BSD-2-Clause            | [LICENSE](licenses/downloads/leaflet@1.7.1-LICENSE.txt)                                           |
| [lines-and-columns](https://github.com/eventualbuddha/lines-and-columns)                                     |   1.2.4   | MIT                     | [LICENSE](licenses/downloads/lines-and-columns@1.2.4-LICENSE.txt)                                 |
| [lodash-es](https://github.com/lodash/lodash)                                                                |  4.18.1   | MIT                     | [LICENSE](licenses/downloads/lodash-es@4.18.1-LICENSE.txt)                                        |
| [maplibre-gl](https://github.com/maplibre/maplibre-gl-js)                                                    |  6.11.2   | BSD-3-Clause            | [LICENSE](licenses/downloads/maplibre-gl@6.11.2-LICENSE.txt)                                      |
| [micromark-core-commonmark](https://github.com/micromark/micromark.git#main)                                 |   2.0.3   | MIT                     | [LICENSE](licenses/downloads/micromark-core-commonmark@2.0.3-LICENSE.txt)                         |
| [micromark-extension-directive](https://github.com/micromark/micromark-extension-directive)                  |   4.0.0   | MIT                     | [LICENSE](licenses/downloads/micromark-extension-directive@4.0.0-LICENSE.txt)                     |
| [micromark-extension-gfm-table](https://github.com/micromark/micromark-extension-gfm-table)                  |   2.1.2   | MIT                     | [LICENSE](licenses/downloads/micromark-extension-gfm-table@2.1.2-LICENSE.txt)                     |
| [micromark-factory-destination](https://github.com/micromark/micromark.git#main)                             |   2.0.1   | MIT                     | [LICENSE](licenses/downloads/micromark-factory-destination@2.0.1-LICENSE.txt)                     |
| [micromark-factory-label](https://github.com/micromark/micromark.git#main)                                   |   2.0.1   | MIT                     | [LICENSE](licenses/downloads/micromark-factory-label@2.0.1-LICENSE.txt)                           |
| [micromark-factory-space](https://github.com/micromark/micromark.git#main)                                   |   2.0.1   | MIT                     | [LICENSE](licenses/downloads/micromark-factory-space@2.0.1-LICENSE.txt)                           |
| [micromark-factory-title](https://github.com/micromark/micromark.git#main)                                   |   2.0.1   | MIT                     | [LICENSE](licenses/downloads/micromark-factory-title@2.0.1-LICENSE.txt)                           |
| [micromark-factory-whitespace](https://github.com/micromark/micromark.git#main)                              |   2.0.1   | MIT                     | [LICENSE](licenses/downloads/micromark-factory-whitespace@2.0.1-LICENSE.txt)                      |
| [micromark-util-character](https://github.com/micromark/micromark.git#main)                                  |   2.1.1   | MIT                     | [LICENSE](licenses/downloads/micromark-util-character@2.1.1-LICENSE.txt)                          |
| [micromark-util-chunked](https://github.com/micromark/micromark.git#main)                                    |   2.0.1   | MIT                     | [LICENSE](licenses/downloads/micromark-util-chunked@2.0.1-LICENSE.txt)                            |
| [micromark-util-classify-character](https://github.com/micromark/micromark.git#main)                         |   2.0.1   | MIT                     | [LICENSE](licenses/downloads/micromark-util-classify-character@2.0.1-LICENSE.txt)                 |
| [micromark-util-combine-extensions](https://github.com/micromark/micromark.git#main)                         |   2.0.1   | MIT                     | [LICENSE](licenses/downloads/micromark-util-combine-extensions@2.0.1-LICENSE.txt)                 |
| [micromark-util-decode-numeric-character-reference](https://github.com/micromark/micromark.git#main)         |   2.0.2   | MIT                     | [LICENSE](licenses/downloads/micromark-util-decode-numeric-character-reference@2.0.2-LICENSE.txt) |
| [micromark-util-encode](https://github.com/micromark/micromark.git#main)                                     |   2.0.1   | MIT                     | [LICENSE](licenses/downloads/micromark-util-encode@2.0.1-LICENSE.txt)                             |
| [micromark-util-html-tag-name](https://github.com/micromark/micromark.git#main)                              |   2.0.1   | MIT                     | [LICENSE](licenses/downloads/micromark-util-html-tag-name@2.0.1-LICENSE.txt)                      |
| [micromark-util-normalize-identifier](https://github.com/micromark/micromark.git#main)                       |   2.0.1   | MIT                     | [LICENSE](licenses/downloads/micromark-util-normalize-identifier@2.0.1-LICENSE.txt)               |
| [micromark-util-resolve-all](https://github.com/micromark/micromark.git#main)                                |   2.0.1   | MIT                     | [LICENSE](licenses/downloads/micromark-util-resolve-all@2.0.1-LICENSE.txt)                        |
| [micromark-util-sanitize-uri](https://github.com/micromark/micromark.git#main)                               |   2.0.1   | MIT                     | [LICENSE](licenses/downloads/micromark-util-sanitize-uri@2.0.1-LICENSE.txt)                       |
| [micromark-util-subtokenize](https://github.com/micromark/micromark.git#main)                                |   2.1.0   | MIT                     | [LICENSE](licenses/downloads/micromark-util-subtokenize@2.1.0-LICENSE.txt)                        |
| [micromark-util-symbol](https://github.com/micromark/micromark.git#main)                                     |   2.0.1   | MIT                     | [LICENSE](licenses/downloads/micromark-util-symbol@2.0.1-LICENSE.txt)                             |
| [micromark-util-types](https://github.com/micromark/micromark.git#main)                                      |   2.0.2   | MIT                     | [LICENSE](licenses/downloads/micromark-util-types@2.0.2-LICENSE.txt)                              |
| [micromark](https://github.com/micromark/micromark.git#main)                                                 |   4.0.2   | MIT                     | [LICENSE](licenses/downloads/micromark@4.0.2-LICENSE.txt)                                         |
| [minimist](https://github.com/minimistjs/minimist)                                                           |   1.2.8   | MIT                     | [LICENSE](licenses/downloads/minimist@1.2.8-LICENSE.txt)                                          |
| [ms](https://github.com/vercel/ms)                                                                           |   2.1.3   | MIT                     | [LICENSE](licenses/downloads/ms@2.1.3-LICENSE.txt)                                                |
| [murmurhash-js](https://github.com/mikolalysenko/murmurhash-js)                                              |   1.0.0   | MIT                     | [LICENSE](licenses/downloads/murmurhash-js@1.0.0-LICENSE.txt)                                     |
| [parent-module](https://github.com/sindresorhus/parent-module)                                               |   1.0.1   | MIT                     | [LICENSE](licenses/downloads/parent-module@1.0.1-LICENSE.txt)                                     |
| [parse-entities](https://github.com/wooorm/parse-entities)                                                   |   4.0.2   | MIT                     | [LICENSE](licenses/downloads/parse-entities@4.0.2-LICENSE.txt)                                    |
| [parse-json](https://github.com/sindresorhus/parse-json)                                                     |   5.2.0   | MIT                     | [LICENSE](licenses/downloads/parse-json@5.2.0-LICENSE.txt)                                        |
| [path-parse](https://github.com/jbgutierrez/path-parse)                                                      |   1.0.7   | MIT                     | [LICENSE](licenses/downloads/path-parse@1.0.7-LICENSE.txt)                                        |
| [path-type](https://github.com/sindresorhus/path-type)                                                       |   4.0.0   | MIT                     | [LICENSE](licenses/downloads/path-type@4.0.0-LICENSE.txt)                                         |
| [pbf](https://github.com/mapbox/pbf)                                                                         |   5.1.2   | BSD-3-Clause            | [LICENSE](licenses/downloads/pbf@5.1.2-LICENSE.txt)                                               |
| [picocolors](https://github.com/alexeyraspopov/picocolors)                                                   |   1.1.1   | ISC                     | [LICENSE](licenses/downloads/picocolors@1.1.1-LICENSE.txt)                                        |
| [potpack](https://github.com/mapbox/potpack)                                                                 |   2.1.0   | ISC                     | [LICENSE](licenses/downloads/potpack@2.1.0-LICENSE.txt)                                           |
| [protocol-buffers-schema](https://github.com/mafintosh/protocol-buffers-schema)                              |   3.6.1   | MIT                     | [LICENSE](licenses/downloads/protocol-buffers-schema@3.6.1-LICENSE.txt)                           |
| [quickselect](https://github.com/mourner/quickselect)                                                        |   3.0.0   | ISC                     | [LICENSE](licenses/downloads/quickselect@3.0.0-LICENSE.txt)                                       |
| [require-from-string](https://github.com/floatdrop/require-from-string)                                      |   2.0.2   | MIT                     | [LICENSE](licenses/downloads/require-from-string@2.0.2-LICENSE.txt)                               |
| [resolve-from](https://github.com/sindresorhus/resolve-from)                                                 |   4.0.0   | MIT                     | [LICENSE](licenses/downloads/resolve-from@4.0.0-LICENSE.txt)                                      |
| [resolve-protobuf-schema](https://github.com/mafintosh/resolve-protobuf-schema)                              |   2.1.0   | MIT                     | [LICENSE](licenses/downloads/resolve-protobuf-schema@2.1.0-LICENSE.txt)                           |
| [resolve](https://github.com/browserify/resolve)                                                             |  1.22.12  | MIT                     | [LICENSE](licenses/downloads/resolve@1.22.12-LICENSE.txt)                                         |
| [robust-predicates](https://github.com/mourner/robust-predicates)                                            |   3.0.3   | Unlicense               | [LICENSE](licenses/downloads/robust-predicates@3.0.3-LICENSE.txt)                                 |
| [rw](https://github.com/mbostock/rw)                                                                         |   1.3.3   | BSD-3-Clause            | [LICENSE](licenses/downloads/rw@1.3.3-LICENSE.txt)                                                |
| [safer-buffer](https://github.com/ChALkeR/safer-buffer)                                                      |   2.1.2   | MIT                     | [LICENSE](licenses/downloads/safer-buffer@2.1.2-LICENSE.txt)                                      |
| [source-map](https://github.com/mozilla/source-map)                                                          |   0.5.7   | BSD-3-Clause            | [LICENSE](licenses/downloads/source-map@0.5.7-LICENSE.txt)                                        |
| [striptags](https://github.com/ericnorris/striptags)                                                         |   3.2.0   | MIT                     | [LICENSE](licenses/downloads/striptags@3.2.0-LICENSE.txt)                                         |
| [strtok3](https://github.com/Borewit/strtok3)                                                                |  10.3.5   | MIT                     | [LICENSE](licenses/downloads/strtok3@10.3.5-LICENSE.txt)                                          |
| [stylis](https://github.com/thysultan/stylis.js)                                                             |   4.2.0   | MIT                     | [LICENSE](licenses/downloads/stylis@4.2.0-LICENSE.txt)                                            |
| [supercluster](https://github.com/mapbox/supercluster)                                                       |   7.1.5   | ISC                     | [LICENSE](licenses/downloads/supercluster@7.1.5-LICENSE.txt)                                      |
| [supports-preserve-symlinks-flag](https://github.com/inspect-js/node-supports-preserve-symlinks-flag)        |   1.0.0   | MIT                     | [LICENSE](licenses/downloads/supports-preserve-symlinks-flag@1.0.0-LICENSE.txt)                   |
| [three](https://github.com/mrdoob/three.js)                                                                  |  0.135.0  | MIT                     | [LICENSE](licenses/downloads/three@0.135.0-LICENSE.txt)                                           |
| [throttle-debounce](https://github.com/niksy/throttle-debounce)                                              |   5.0.2   | MIT                     | [LICENSE](licenses/downloads/throttle-debounce@5.0.2-LICENSE.txt)                                 |
| [tinyqueue](https://github.com/mourner/tinyqueue)                                                            |   3.0.0   | ISC                     | [LICENSE](licenses/downloads/tinyqueue@3.0.0-LICENSE.txt)                                         |
| [token-types](https://github.com/Borewit/token-types)                                                        |   6.1.2   | MIT                     | [LICENSE](licenses/downloads/token-types@6.1.2-LICENSE.txt)                                       |
| [topojson-client](https://github.com/topojson/topojson-client)                                               |   3.1.0   | ISC                     | [LICENSE](licenses/downloads/topojson-client@3.1.0-LICENSE.txt)                                   |
| [tslib](https://github.com/Microsoft/tslib)                                                                  |   2.8.1   | 0BSD                    | [LICENSE](licenses/downloads/tslib@2.8.1-LICENSE.txt)                                             |
| [uint8array-extras](https://github.com/sindresorhus/uint8array-extras)                                       |   1.6.0   | MIT                     | [LICENSE](licenses/downloads/uint8array-extras@1.6.0-LICENSE.txt)                                 |
| [valibot](https://github.com/open-circle/valibot)                                                            |   1.5.0   | MIT                     | [LICENSE](licenses/downloads/valibot@1.5.0-LICENSE.txt)                                           |
| [yaml](https://github.com/eemeli/yaml)                                                                       |  1.10.3   | ISC                     | [LICENSE](licenses/downloads/yaml@1.10.3-LICENSE.txt)                                             |

### Dependency Tree

The dependency tree below lists every package in this project — direct and transitive — along with its installed version, release date, and update status. Packages flagged ❗ have a newer version available; ⚠️ indicates a package that hasn't been updated in the last 6 months or longer. Neither flag necessarily indicates a problem: we let new releases stabilise before upgrading, and some packages are mature and stable (have limited or no dependencies), so they require no active development.

- **[@dpuse/dpuse-shared](https://github.com/dpuse/dpuse-shared)** 0.3.865 — this month: 2026-09-29
    - **[file-type](https://github.com/sindresorhus/file-type)** 22.1.1 — this month: 2026-09-17
        - **[@tokenizer/inflate](https://github.com/Borewit/tokenizer-inflate)** 0.4.1 — **10 months** ago: 2025-11-18 ⚠️
            - **[debug](https://github.com/debug-js/debug)** 4.4.3 — **12 months** ago: 2025-09-13 ⚠️
            - **[token-types](https://github.com/Borewit/token-types)** 6.1.2 — **8 months** ago: 2026-01-01 ⚠️
        - **[strtok3](https://github.com/Borewit/strtok3)** 10.3.5 — **6 months** ago: 2026-03-21
            - **[@tokenizer/token](https://github.com/Borewit/tokenizer-token)** 0.3.0 — **62 months** ago: 2021-07-12 ⚠️
        - **[token-types](https://github.com/Borewit/token-types)** 6.1.2 — **8 months** ago: 2026-01-01 ⚠️
            - **[@borewit/text-codec](https://github.com/Borewit/text-codec)** 0.2.2 — **6 months** ago: 2026-03-11
            - **[@tokenizer/token](https://github.com/Borewit/tokenizer-token)** 0.3.0 — **62 months** ago: 2021-07-12 ⚠️
            - **[ieee754](https://github.com/feross/ieee754)** 1.2.1 — **71 months** ago: 2020-10-27 ⚠️
        - **[uint8array-extras](https://github.com/sindresorhus/uint8array-extras)** 1.6.0 — this month: 2026-09-26
    - **[valibot](https://github.com/open-circle/valibot)** 1.5.0 — this month: 2026-09-09
- **[@dpuse/dpuse-tool-d3-visualiser](https://github.com/dpuse/dpuse-tool-d3-visualiser)** 0.0.52 — this month: 2026-09-22
    - **[@dagrejs/dagre](https://github.com/dagrejs/dagre)** 3.1.1 — **1 month** ago: 2026-08-08
        - **[@dagrejs/graphlib](https://github.com/dagrejs/graphlib)** 4.0.5 — **1 month** ago: 2026-08-03
    - **[@dpuse/dpuse-shared](https://github.com/dpuse/dpuse-shared)** 0.3.865 — this month: 2026-09-29
    - **[@observablehq/plot](https://github.com/observablehq/plot)** 0.6.17 — **19 months** ago: 2025-02-14 ⚠️
        - **[d3](https://github.com/d3/d3)** 7.9.0 — **30 months** ago: 2024-03-12 ⚠️
            - **[d3-array](https://github.com/d3/d3-array)** 3.2.4 — **40 months** ago: 2023-05-30 ⚠️
            - **[d3-axis](https://github.com/d3/d3-axis)** 3.0.0 — **63 months** ago: 2021-06-09 ⚠️
            - **[d3-brush](https://github.com/d3/d3-brush)** 3.0.0 — **63 months** ago: 2021-06-10 ⚠️
            - **[d3-chord](https://github.com/d3/d3-chord)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
            - **[d3-color](https://github.com/d3/d3-color)** 3.1.0 — **54 months** ago: 2022-03-28 ⚠️
            - **[d3-contour](https://github.com/d3/d3-contour)** 4.0.2 — **44 months** ago: 2023-01-11 ⚠️
            - **[d3-delaunay](https://github.com/d3/d3-delaunay)** 6.0.4 — **41 months** ago: 2023-04-01 ⚠️
            - **[d3-dispatch](https://github.com/d3/d3-dispatch)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
            - **[d3-drag](https://github.com/d3/d3-drag)** 3.0.0 — **63 months** ago: 2021-06-09 ⚠️
            - **[d3-dsv](https://github.com/d3/d3-dsv)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
                - **[commander](https://github.com/tj/commander.js)** 7.2.0 — **66 months** ago: 2021-03-21 ⚠️ → **latest**: 15.0.0 — **4 months** ago: 2026-05-29 ❗
                - **[iconv-lite](https://github.com/ashtuchkin/iconv-lite)** 0.6.3 — **64 months** ago: 2021-05-24 ⚠️ → **latest**: 0.7.3 — **2 months** ago: 2026-07-03 ❗
                    - **[safer-buffer](https://github.com/ChALkeR/safer-buffer)** 2.1.2 — **101 months** ago: 2018-04-08 ⚠️
                - **[rw](https://github.com/mbostock/rw)** 1.3.3 — **116 months** ago: 2017-01-20 ⚠️
            - **[d3-ease](https://github.com/d3/d3-ease)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
            - **[d3-fetch](https://github.com/d3/d3-fetch)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
                - **[d3-dsv](https://github.com/d3/d3-dsv)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
            - **[d3-force](https://github.com/d3/d3-force)** 3.0.0 — **63 months** ago: 2021-06-05 ⚠️
            - **[d3-format](https://github.com/d3/d3-format)** 3.1.2 — **8 months** ago: 2026-01-14 ⚠️
            - **[d3-geo](https://github.com/d3/d3-geo)** 3.1.1 — **30 months** ago: 2024-03-12 ⚠️
            - **[d3-hierarchy](https://github.com/d3/d3-hierarchy)** 3.1.2 — **53 months** ago: 2022-04-02 ⚠️
            - **[d3-interpolate](https://github.com/d3/d3-interpolate)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
            - **[d3-path](https://github.com/d3/d3-path)** 3.1.0 — **45 months** ago: 2022-12-19 ⚠️
            - **[d3-polygon](https://github.com/d3/d3-polygon)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
            - **[d3-quadtree](https://github.com/d3/d3-quadtree)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
            - **[d3-random](https://github.com/d3/d3-random)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
            - **[d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic)** 3.1.0 — **30 months** ago: 2024-03-12 ⚠️
                - **[d3-color](https://github.com/d3/d3-color)** 3.1.0 — **54 months** ago: 2022-03-28 ⚠️
                - **[d3-interpolate](https://github.com/d3/d3-interpolate)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
            - **[d3-scale](https://github.com/d3/d3-scale)** 4.0.2 — **60 months** ago: 2021-09-24 ⚠️
            - **[d3-selection](https://github.com/d3/d3-selection)** 3.0.0 — **63 months** ago: 2021-06-07 ⚠️
            - **[d3-shape](https://github.com/d3/d3-shape)** 3.2.0 — **45 months** ago: 2022-12-20 ⚠️
            - **[d3-time-format](https://github.com/d3/d3-time-format)** 4.1.0 — **57 months** ago: 2021-12-04 ⚠️
            - **[d3-time](https://github.com/d3/d3-time)** 3.1.0 — **45 months** ago: 2022-12-02 ⚠️
            - **[d3-timer](https://github.com/d3/d3-timer)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
            - **[d3-transition](https://github.com/d3/d3-transition)** 3.0.1 — **63 months** ago: 2021-06-09 ⚠️
            - **[d3-zoom](https://github.com/d3/d3-zoom)** 3.0.0 — **63 months** ago: 2021-06-10 ⚠️
        - **[interval-tree-1d](https://github.com/mikolalysenko/interval-tree-1d)** 1.0.4 — **63 months** ago: 2021-06-03 ⚠️
            - **[binary-search-bounds](https://github.com/mikolalysenko/binary-search-bounds)** 2.0.5 — **68 months** ago: 2021-01-25 ⚠️
        - **[isoformat](https://github.com/mbostock/isoformat)** 0.2.1 — **60 months** ago: 2021-09-24 ⚠️
    - **[@tanstack/charts](https://github.com/TanStack/charts)** 0.18.0 — this month: 2026-09-10
        - **@angular/core**
        - **@angular/platform-browser**
        - **[@types/d3-force](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.10 — **27 months** ago: 2024-06-17 ⚠️
        - **[@types/d3-geo](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.1 — **1 month** ago: 2026-07-31
            - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **20 months** ago: 2025-01-23 ⚠️
        - **[@types/d3-hierarchy](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.7 — **30 months** ago: 2024-03-18 ⚠️
        - **[@types/d3-sankey](https://github.com/DefinitelyTyped/DefinitelyTyped)** 0.12.5 — **10 months** ago: 2025-11-16 ⚠️
            - **[@types/d3-shape](https://github.com/DefinitelyTyped/DefinitelyTyped)** 1.3.12 — **34 months** ago: 2023-11-21 ⚠️ → **latest**: 3.2.0 — **1 month** ago: 2026-08-21 ❗
                - **[@types/d3-path](https://github.com/DefinitelyTyped/DefinitelyTyped)** 1.0.11 — **34 months** ago: 2023-11-07 ⚠️ → **latest**: 3.1.1 — **19 months** ago: 2025-02-04 ⚠️ ❗
        - **[@types/d3-shape](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.8 — **8 months** ago: 2026-01-12 ⚠️ → **latest**: 3.2.0 — **1 month** ago: 2026-08-21 ❗
            - **[@types/d3-path](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.1 — **19 months** ago: 2025-02-04 ⚠️
        - **alpinejs**
        - **[d3-array](https://github.com/d3/d3-array)** 3.2.4 — **40 months** ago: 2023-05-30 ⚠️
            - **[internmap](https://github.com/mbostock/internmap)** 2.0.3 — **60 months** ago: 2021-09-20 ⚠️
        - **[d3-brush](https://github.com/d3/d3-brush)** 3.0.0 — **63 months** ago: 2021-06-10 ⚠️
            - **[d3-dispatch](https://github.com/d3/d3-dispatch)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
            - **[d3-drag](https://github.com/d3/d3-drag)** 3.0.0 — **63 months** ago: 2021-06-09 ⚠️
            - **[d3-interpolate](https://github.com/d3/d3-interpolate)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
            - **[d3-selection](https://github.com/d3/d3-selection)** 3.0.0 — **63 months** ago: 2021-06-07 ⚠️
            - **[d3-transition](https://github.com/d3/d3-transition)** 3.0.1 — **63 months** ago: 2021-06-09 ⚠️
        - **[d3-contour](https://github.com/d3/d3-contour)** 4.0.2 — **44 months** ago: 2023-01-11 ⚠️
            - **[d3-array](https://github.com/d3/d3-array)** 3.2.4 — **40 months** ago: 2023-05-30 ⚠️
        - **[d3-delaunay](https://github.com/d3/d3-delaunay)** 6.0.4 — **41 months** ago: 2023-04-01 ⚠️
            - **[delaunator](https://github.com/mapbox/delaunator)** 5.1.0 — **6 months** ago: 2026-03-23
                - **[robust-predicates](https://github.com/mourner/robust-predicates)** 3.0.3 — **6 months** ago: 2026-03-22
        - **[d3-force](https://github.com/d3/d3-force)** 3.0.0 — **63 months** ago: 2021-06-05 ⚠️
        - **[d3-geo](https://github.com/d3/d3-geo)** 3.1.1 — **30 months** ago: 2024-03-12 ⚠️
            - **[d3-array](https://github.com/d3/d3-array)** 3.2.4 — **40 months** ago: 2023-05-30 ⚠️
        - **[d3-hexbin](https://github.com/d3/d3-hexbin)** 0.2.2 — **114 months** ago: 2017-03-28 ⚠️
        - **[d3-hierarchy](https://github.com/d3/d3-hierarchy)** 3.1.2 — **53 months** ago: 2022-04-02 ⚠️
        - **[d3-sankey](https://github.com/d3/d3-sankey)** 0.12.3 — **84 months** ago: 2019-09-02 ⚠️
        - **[d3-scale](https://github.com/d3/d3-scale)** 4.0.2 — **60 months** ago: 2021-09-24 ⚠️
        - **[d3-selection](https://github.com/d3/d3-selection)** 3.0.0 — **63 months** ago: 2021-06-07 ⚠️
        - **[d3-shape](https://github.com/d3/d3-shape)** 3.2.0 — **45 months** ago: 2022-12-20 ⚠️
        - **[d3-zoom](https://github.com/d3/d3-zoom)** 3.0.0 — **63 months** ago: 2021-06-10 ⚠️
        - **lit**
        - **octane**
        - **preact**
        - **react-dom**
        - **react-native-svg**
        - **react-native**
        - **react**
        - **solid-js**
        - **svelte**
        - **[tslib](https://github.com/Microsoft/tslib)** 2.8.1 — **22 months** ago: 2024-10-31 ⚠️
        - **vue**
    - **[@unovis/ts](https://github.com/f5/unovis)** 1.7.1 — this month: 2026-09-29
        - **[@emotion/css](https://github.com/emotion-js/emotion.git#main)** 11.13.5 — **22 months** ago: 2024-11-20 ⚠️
            - **[@emotion/babel-plugin](https://github.com/emotion-js/emotion.git#main)** 11.13.5 — **22 months** ago: 2024-11-20 ⚠️
                - **[@babel/helper-module-imports](https://github.com/babel/babel)** 7.29.7 — **4 months** ago: 2026-05-25 → **latest**: 8.0.0 — **3 months** ago: 2026-06-16 ❗
                    - **[@babel/traverse](https://github.com/babel/babel)** 7.29.8 — **1 month** ago: 2026-07-31 → **latest**: 8.0.6 — this month: 2026-09-18 ❗
                        - **[@babel/code-frame](https://github.com/babel/babel)** 7.29.7 — **4 months** ago: 2026-05-25 → **latest**: 8.0.6 — this month: 2026-09-18 ❗
                            - **[@babel/helper-validator-identifier](https://github.com/babel/babel)** 7.29.7 — **4 months** ago: 2026-05-25 → **latest**: 8.0.6 — this month: 2026-09-18 ❗
                            - **[js-tokens](https://github.com/lydell/js-tokens)** 4.0.0 — **104 months** ago: 2018-01-28 ⚠️ → **latest**: 10.0.0 — **9 months** ago: 2025-12-08 ⚠️ ❗
                            - **[picocolors](https://github.com/alexeyraspopov/picocolors)** 1.1.1 — **23 months** ago: 2024-10-16 ⚠️
                        - **[@babel/generator](https://github.com/babel/babel)** 7.29.8 — **1 month** ago: 2026-07-31 → **latest**: 8.0.6 — this month: 2026-09-18 ❗
                            - **[@babel/parser](https://github.com/babel/babel)** 7.29.9 — this month: 2026-09-18
                            - **[@babel/types](https://github.com/babel/babel)** 7.29.8 — **1 month** ago: 2026-07-31 → **latest**: 8.0.6 — this month: 2026-09-18 ❗
                            - **[@jridgewell/gen-mapping](https://github.com/jridgewell/sourcemaps)** 0.3.13 — **13 months** ago: 2025-08-12 ⚠️
                                - **[@jridgewell/sourcemap-codec](https://github.com/jridgewell/sourcemaps)** 1.6.0 — **1 month** ago: 2026-08-28
                                - **[@jridgewell/trace-mapping](https://github.com/jridgewell/sourcemaps)** 0.3.31 — **12 months** ago: 2025-09-10 ⚠️
                            - **[@jridgewell/trace-mapping](https://github.com/jridgewell/sourcemaps)** 0.3.31 — **12 months** ago: 2025-09-10 ⚠️
                                - **[@jridgewell/resolve-uri](https://github.com/jridgewell/resolve-uri)** 3.1.2 — **31 months** ago: 2024-02-14 ⚠️
                                - **[@jridgewell/sourcemap-codec](https://github.com/jridgewell/sourcemaps)** 1.6.0 — **1 month** ago: 2026-08-28
                            - **[jsesc](https://github.com/mathiasbynens/jsesc)** 3.1.0 — **21 months** ago: 2024-12-11 ⚠️
                        - **[@babel/helper-globals](https://github.com/babel/babel)** 7.29.7 — **4 months** ago: 2026-05-25 → **latest**: 8.0.6 — this month: 2026-09-18 ❗
                        - **[@babel/parser](https://github.com/babel/babel)** 7.29.9 — this month: 2026-09-18
                            - **[@babel/types](https://github.com/babel/babel)** 7.29.8 — **1 month** ago: 2026-07-31 → **latest**: 8.0.6 — this month: 2026-09-18 ❗
                        - **[@babel/template](https://github.com/babel/babel)** 7.29.7 — **4 months** ago: 2026-05-25 → **latest**: 8.0.0 — **3 months** ago: 2026-06-16 ❗
                            - **[@babel/code-frame](https://github.com/babel/babel)** 7.29.7 — **4 months** ago: 2026-05-25 → **latest**: 8.0.6 — this month: 2026-09-18 ❗
                            - **[@babel/parser](https://github.com/babel/babel)** 7.29.9 — this month: 2026-09-18
                            - **[@babel/types](https://github.com/babel/babel)** 7.29.8 — **1 month** ago: 2026-07-31 → **latest**: 8.0.6 — this month: 2026-09-18 ❗
                        - **[@babel/types](https://github.com/babel/babel)** 7.29.8 — **1 month** ago: 2026-07-31 → **latest**: 8.0.6 — this month: 2026-09-18 ❗
                        - **[debug](https://github.com/debug-js/debug)** 4.4.3 — **12 months** ago: 2025-09-13 ⚠️
                    - **[@babel/types](https://github.com/babel/babel)** 7.29.8 — **1 month** ago: 2026-07-31 → **latest**: 8.0.6 — this month: 2026-09-18 ❗
                        - **[@babel/helper-string-parser](https://github.com/babel/babel)** 7.29.7 — **4 months** ago: 2026-05-25 → **latest**: 8.0.6 — this month: 2026-09-18 ❗
                        - **[@babel/helper-validator-identifier](https://github.com/babel/babel)** 7.29.7 — **4 months** ago: 2026-05-25 → **latest**: 8.0.6 — this month: 2026-09-18 ❗
                - **[@babel/runtime](https://github.com/babel/babel)** 7.29.7 — **4 months** ago: 2026-05-25 → **latest**: 8.0.5 — this month: 2026-09-10 ❗
                - **[@emotion/hash](https://github.com/emotion-js/emotion.git#main)** 0.9.2 — **26 months** ago: 2024-07-19 ⚠️
                - **[@emotion/memoize](https://github.com/emotion-js/emotion.git#main)** 0.9.0 — **26 months** ago: 2024-07-19 ⚠️
                - **[@emotion/serialize](https://github.com/emotion-js/emotion.git#main)** 1.3.3 — **22 months** ago: 2024-11-20 ⚠️
                - **[babel-plugin-macros](https://github.com/kentcdodds/babel-plugin-macros)** 3.1.0 — **64 months** ago: 2021-05-05 ⚠️
                    - **[@babel/runtime](https://github.com/babel/babel)** 7.29.7 — **4 months** ago: 2026-05-25 → **latest**: 8.0.5 — this month: 2026-09-10 ❗
                    - **[cosmiconfig](https://github.com/davidtheclark/cosmiconfig)** 7.1.0 — **46 months** ago: 2022-11-12 ⚠️ → **latest**: 10.0.1 — **1 month** ago: 2026-08-30 ❗
                        - **[@types/parse-json](https://github.com/DefinitelyTyped/DefinitelyTyped)** 4.0.2 — **34 months** ago: 2023-11-07 ⚠️ → **latest**: 7.0.0 — **19 months** ago: 2025-02-21 ⚠️ ❗
                        - **[import-fresh](https://github.com/sindresorhus/import-fresh)** 3.3.1 — **19 months** ago: 2025-02-02 ⚠️ → **latest**: 4.0.1 — this month: 2026-09-25 ❗
                            - **[parent-module](https://github.com/sindresorhus/parent-module)** 1.0.1 — **90 months** ago: 2019-03-28 ⚠️ → **latest**: 3.2.0 — **12 months** ago: 2025-09-15 ⚠️ ❗
                                - **[callsites](https://github.com/sindresorhus/callsites)** 3.1.0 — **89 months** ago: 2019-04-06 ⚠️ → **latest**: 4.2.0 — **27 months** ago: 2024-06-29 ⚠️ ❗
                            - **[resolve-from](https://github.com/sindresorhus/resolve-from)** 4.0.0 — **108 months** ago: 2017-09-23 ⚠️ → **latest**: 5.0.0 — **89 months** ago: 2019-04-15 ⚠️ ❗
                        - **[parse-json](https://github.com/sindresorhus/parse-json)** 5.2.0 — **68 months** ago: 2021-01-18 ⚠️ → **latest**: 8.3.0 — **17 months** ago: 2025-04-09 ⚠️ ❗
                            - **[@babel/code-frame](https://github.com/babel/babel)** 7.29.7 — **4 months** ago: 2026-05-25 → **latest**: 8.0.6 — this month: 2026-09-18 ❗
                            - **[error-ex](https://github.com/qix-/node-error-ex)** 1.3.4 — **12 months** ago: 2025-09-15 ⚠️
                                - **[is-arrayish](https://github.com/qix-/node-is-arrayish)** 0.2.1 — **132 months** ago: 2015-08-31 ⚠️ → **latest**: 0.3.4 — **12 months** ago: 2025-09-13 ⚠️ ❗
                            - **[json-parse-even-better-errors](https://github.com/npm/json-parse-even-better-errors)** 2.3.1 — **72 months** ago: 2020-09-02 ⚠️ → **latest**: 6.0.0 — **4 months** ago: 2026-05-08 ❗
                            - **[lines-and-columns](https://github.com/eventualbuddha/lines-and-columns)** 1.2.4 — **58 months** ago: 2021-11-21 ⚠️ → **latest**: 2.0.4 — **34 months** ago: 2023-11-07 ⚠️ ❗
                        - **[path-type](https://github.com/sindresorhus/path-type)** 4.0.0 — **90 months** ago: 2019-03-12 ⚠️ → **latest**: 6.0.0 — **26 months** ago: 2024-07-26 ⚠️ ❗
                        - **[yaml](https://github.com/eemeli/yaml)** 1.10.3 — **6 months** ago: 2026-03-21 → **latest**: 2.9.1 — this month: 2026-09-11 ❗
                    - **[resolve](https://github.com/browserify/resolve)** 1.22.12 — **5 months** ago: 2026-04-11
                        - **[es-errors](https://github.com/ljharb/es-errors)** 1.3.0 — **31 months** ago: 2024-02-05 ⚠️
                        - **[is-core-module](https://github.com/inspect-js/is-core-module)** 2.17.0 — this month: 2026-09-17
                            - **[hasown](https://github.com/inspect-js/hasOwn)** 2.0.4 — **4 months** ago: 2026-05-28
                                - **[function-bind](https://github.com/Raynos/function-bind)** 1.1.2 — **35 months** ago: 2023-10-12 ⚠️
                        - **[path-parse](https://github.com/jbgutierrez/path-parse)** 1.0.7 — **64 months** ago: 2021-05-25 ⚠️
                        - **[supports-preserve-symlinks-flag](https://github.com/inspect-js/node-supports-preserve-symlinks-flag)** 1.0.0 — **56 months** ago: 2022-01-03 ⚠️
                - **[convert-source-map](https://github.com/thlorenz/convert-source-map)** 1.9.0 — **47 months** ago: 2022-10-10 ⚠️ → **latest**: 2.0.0 — **47 months** ago: 2022-10-17 ⚠️ ❗
                - **[escape-string-regexp](https://github.com/sindresorhus/escape-string-regexp)** 4.0.0 — **77 months** ago: 2020-04-23 ⚠️ → **latest**: 5.0.0 — **65 months** ago: 2021-04-17 ⚠️ ❗
                - **[find-root](https://github.com/js-n/find-root)** 1.1.0 — **111 months** ago: 2017-06-29 ⚠️
                - **[source-map](https://github.com/mozilla/source-map)** 0.5.7 — **109 months** ago: 2017-08-21 ⚠️ → **latest**: 0.8.0 — **2 months** ago: 2026-07-20 ❗
                - **[stylis](https://github.com/thysultan/stylis.js)** 4.2.0 — **40 months** ago: 2023-05-05 ⚠️ → **latest**: 4.4.0 — **5 months** ago: 2026-04-19 ❗
            - **[@emotion/cache](https://github.com/emotion-js/emotion.git#main)** 11.14.0 — **21 months** ago: 2024-12-09 ⚠️
                - **[@emotion/memoize](https://github.com/emotion-js/emotion.git#main)** 0.9.0 — **26 months** ago: 2024-07-19 ⚠️
                - **[@emotion/sheet](https://github.com/emotion-js/emotion.git#main)** 1.4.0 — **26 months** ago: 2024-07-20 ⚠️
                - **[@emotion/utils](https://github.com/emotion-js/emotion.git#main)** 1.4.2 — **22 months** ago: 2024-11-20 ⚠️
                - **[@emotion/weak-memoize](https://github.com/emotion-js/emotion.git#main)** 0.4.0 — **26 months** ago: 2024-07-19 ⚠️
                - **[stylis](https://github.com/thysultan/stylis.js)** 4.2.0 — **40 months** ago: 2023-05-05 ⚠️ → **latest**: 4.4.0 — **5 months** ago: 2026-04-19 ❗
            - **[@emotion/serialize](https://github.com/emotion-js/emotion.git#main)** 1.3.3 — **22 months** ago: 2024-11-20 ⚠️
                - **[@emotion/hash](https://github.com/emotion-js/emotion.git#main)** 0.9.2 — **26 months** ago: 2024-07-19 ⚠️
                - **[@emotion/memoize](https://github.com/emotion-js/emotion.git#main)** 0.9.0 — **26 months** ago: 2024-07-19 ⚠️
                - **[@emotion/unitless](https://github.com/emotion-js/emotion.git#main)** 0.10.0 — **25 months** ago: 2024-08-21 ⚠️
                - **[@emotion/utils](https://github.com/emotion-js/emotion.git#main)** 1.4.2 — **22 months** ago: 2024-11-20 ⚠️
                - **[csstype](https://github.com/frenic/csstype)** 3.2.3 — **10 months** ago: 2025-11-17 ⚠️
            - **[@emotion/sheet](https://github.com/emotion-js/emotion.git#main)** 1.4.0 — **26 months** ago: 2024-07-20 ⚠️
            - **[@emotion/utils](https://github.com/emotion-js/emotion.git#main)** 1.4.2 — **22 months** ago: 2024-11-20 ⚠️
        - **[@juggle/resize-observer](https://github.com/juggle/resize-observer)** 3.4.0 — **49 months** ago: 2022-08-18 ⚠️
        - **[@maplibre/maplibre-gl-style-spec](https://github.com/maplibre/maplibre-style-spec)** 26.4.1 — **1 month** ago: 2026-08-25 → **latest**: 26.4.4 — this month: 2026-09-15 ❗
            - **[@mapbox/jsonlint-lines-primitives](https://github.com/mapbox/jsonlint)** 2.0.3 — **3 months** ago: 2026-06-25
            - **[@mapbox/unitbezier](https://github.com/mapbox/unitbezier)** 1.0.0 — **4 months** ago: 2026-05-26
            - **[json-stringify-pretty-compact](https://github.com/lydell/json-stringify-pretty-compact)** 4.0.0 — **52 months** ago: 2022-05-14 ⚠️
            - **[minimist](https://github.com/minimistjs/minimist)** 1.2.8 — **43 months** ago: 2023-02-09 ⚠️
            - **[quickselect](https://github.com/mourner/quickselect)** 3.0.0 — **26 months** ago: 2024-07-03 ⚠️
            - **[tinyqueue](https://github.com/mourner/tinyqueue)** 3.0.0 — **26 months** ago: 2024-07-06 ⚠️
        - **[@types/d3-array](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.2.2 — **12 months** ago: 2025-09-12 ⚠️
        - **[@types/d3-axis](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.6 — **34 months** ago: 2023-11-07 ⚠️
            - **[@types/d3-selection](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.12 — this month: 2026-09-14
        - **[@types/d3-brush](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.6 — **34 months** ago: 2023-11-07 ⚠️
            - **[@types/d3-selection](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.12 — this month: 2026-09-14
        - **[@types/d3-chord](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.6 — **34 months** ago: 2023-11-07 ⚠️
        - **[@types/d3-collection](https://github.com/DefinitelyTyped/DefinitelyTyped)** 1.0.13 — **34 months** ago: 2023-11-07 ⚠️
        - **[@types/d3-color](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.3 — **34 months** ago: 2023-11-07 ⚠️
        - **[@types/d3-drag](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.7 — **34 months** ago: 2023-11-07 ⚠️
            - **[@types/d3-selection](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.12 — this month: 2026-09-14
        - **[@types/d3-ease](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.2 — **34 months** ago: 2023-11-07 ⚠️
        - **[@types/d3-force](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.10 — **27 months** ago: 2024-06-17 ⚠️
        - **[@types/d3-geo](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.1 — **1 month** ago: 2026-07-31
        - **[@types/d3-hierarchy](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.7 — **30 months** ago: 2024-03-18 ⚠️
        - **[@types/d3-interpolate](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.4 — **34 months** ago: 2023-11-07 ⚠️
            - **[@types/d3-color](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.3 — **34 months** ago: 2023-11-07 ⚠️
        - **[@types/d3-path](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.1 — **19 months** ago: 2025-02-04 ⚠️
        - **[@types/d3-sankey](https://github.com/DefinitelyTyped/DefinitelyTyped)** 0.12.5 — **10 months** ago: 2025-11-16 ⚠️
        - **[@types/d3-scale](https://github.com/DefinitelyTyped/DefinitelyTyped)** 4.0.9 — **19 months** ago: 2025-02-05 ⚠️
            - **[@types/d3-time](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.4 — **22 months** ago: 2024-11-25 ⚠️
        - **[@types/d3-selection](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.12 — this month: 2026-09-14
        - **[@types/d3-shape](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.8 — **8 months** ago: 2026-01-12 ⚠️ → **latest**: 3.2.0 — **1 month** ago: 2026-08-21 ❗
        - **[@types/d3-timer](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.2 — **34 months** ago: 2023-11-07 ⚠️
        - **[@types/d3-transition](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.9 — **23 months** ago: 2024-10-07 ⚠️
            - **[@types/d3-selection](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.12 — this month: 2026-09-14
        - **[@types/d3-zoom](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.9 — this month: 2026-09-29
            - **[@types/d3-interpolate](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.4 — **34 months** ago: 2023-11-07 ⚠️
            - **[@types/d3-selection](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.12 — this month: 2026-09-14
        - **[@types/d3](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7.4.3 — **34 months** ago: 2023-11-07 ⚠️
            - **[@types/d3-array](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.2.2 — **12 months** ago: 2025-09-12 ⚠️
            - **[@types/d3-axis](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.6 — **34 months** ago: 2023-11-07 ⚠️
            - **[@types/d3-brush](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.6 — **34 months** ago: 2023-11-07 ⚠️
            - **[@types/d3-chord](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.6 — **34 months** ago: 2023-11-07 ⚠️
            - **[@types/d3-color](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.3 — **34 months** ago: 2023-11-07 ⚠️
            - **[@types/d3-contour](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.6 — **34 months** ago: 2023-11-07 ⚠️
                - **[@types/d3-array](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.2.2 — **12 months** ago: 2025-09-12 ⚠️
                - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **20 months** ago: 2025-01-23 ⚠️
            - **[@types/d3-delaunay](https://github.com/DefinitelyTyped/DefinitelyTyped)** 6.0.4 — **34 months** ago: 2023-11-07 ⚠️
            - **[@types/d3-dispatch](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.7 — **14 months** ago: 2025-07-30 ⚠️
            - **[@types/d3-drag](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.7 — **34 months** ago: 2023-11-07 ⚠️
            - **[@types/d3-dsv](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.7 — **34 months** ago: 2023-11-07 ⚠️
            - **[@types/d3-ease](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.2 — **34 months** ago: 2023-11-07 ⚠️
            - **[@types/d3-fetch](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.7 — **34 months** ago: 2023-11-07 ⚠️
                - **[@types/d3-dsv](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.7 — **34 months** ago: 2023-11-07 ⚠️
            - **[@types/d3-force](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.10 — **27 months** ago: 2024-06-17 ⚠️
            - **[@types/d3-format](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.4 — **34 months** ago: 2023-11-07 ⚠️
            - **[@types/d3-geo](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.1 — **1 month** ago: 2026-07-31
            - **[@types/d3-hierarchy](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.7 — **30 months** ago: 2024-03-18 ⚠️
            - **[@types/d3-interpolate](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.4 — **34 months** ago: 2023-11-07 ⚠️
            - **[@types/d3-path](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.1 — **19 months** ago: 2025-02-04 ⚠️
            - **[@types/d3-polygon](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.2 — **34 months** ago: 2023-11-07 ⚠️
            - **[@types/d3-quadtree](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.6 — **34 months** ago: 2023-11-22 ⚠️
            - **[@types/d3-random](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.4 — **2 months** ago: 2026-07-02
            - **[@types/d3-scale-chromatic](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.0 — **22 months** ago: 2024-11-27 ⚠️
            - **[@types/d3-scale](https://github.com/DefinitelyTyped/DefinitelyTyped)** 4.0.9 — **19 months** ago: 2025-02-05 ⚠️
            - **[@types/d3-selection](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.12 — this month: 2026-09-14
            - **[@types/d3-shape](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.8 — **8 months** ago: 2026-01-12 ⚠️ → **latest**: 3.2.0 — **1 month** ago: 2026-08-21 ❗
            - **[@types/d3-time-format](https://github.com/DefinitelyTyped/DefinitelyTyped)** 4.0.3 — **34 months** ago: 2023-11-07 ⚠️
            - **[@types/d3-time](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.4 — **22 months** ago: 2024-11-25 ⚠️
            - **[@types/d3-timer](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.2 — **34 months** ago: 2023-11-07 ⚠️
            - **[@types/d3-transition](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.9 — **23 months** ago: 2024-10-07 ⚠️
            - **[@types/d3-zoom](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.9 — this month: 2026-09-29
        - **[@types/dagre](https://github.com/DefinitelyTyped/DefinitelyTyped)** 0.7.54 — **7 months** ago: 2026-02-26 ⚠️
        - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **20 months** ago: 2025-01-23 ⚠️
        - **[@types/leaflet](https://github.com/DefinitelyTyped/DefinitelyTyped)** 1.7.6 — **58 months** ago: 2021-11-15 ⚠️ → **latest**: 1.9.22 — **1 month** ago: 2026-08-01 ❗
            - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **20 months** ago: 2025-01-23 ⚠️
        - **[@types/supercluster](https://github.com/DefinitelyTyped/DefinitelyTyped)** 5.0.3 — **62 months** ago: 2021-07-02 ⚠️ → **latest**: 7.1.3 — **34 months** ago: 2023-11-07 ⚠️ ❗
            - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **20 months** ago: 2025-01-23 ⚠️
        - **[@types/three](https://github.com/DefinitelyTyped/DefinitelyTyped)** 0.135.0 — **57 months** ago: 2021-12-06 ⚠️ → **latest**: 0.186.0 — this month: 2026-09-11 ❗
        - **[@types/throttle-debounce](https://github.com/DefinitelyTyped/DefinitelyTyped)** 5.0.2 — **34 months** ago: 2023-11-07 ⚠️
        - **[@types/topojson-client](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.5 — **24 months** ago: 2024-09-16 ⚠️
            - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **20 months** ago: 2025-01-23 ⚠️
            - **[@types/topojson-specification](https://github.com/DefinitelyTyped/DefinitelyTyped)** 1.0.5 — **34 months** ago: 2023-11-07 ⚠️
        - **[@types/topojson-specification](https://github.com/DefinitelyTyped/DefinitelyTyped)** 1.0.5 — **34 months** ago: 2023-11-07 ⚠️
            - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **20 months** ago: 2025-01-23 ⚠️
        - **[@types/topojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.2.6 — **34 months** ago: 2023-11-07 ⚠️
            - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **20 months** ago: 2025-01-23 ⚠️
            - **[@types/topojson-client](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.5 — **24 months** ago: 2024-09-16 ⚠️
            - **[@types/topojson-server](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.4 — **34 months** ago: 2023-11-07 ⚠️
                - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **20 months** ago: 2025-01-23 ⚠️
                - **[@types/topojson-specification](https://github.com/DefinitelyTyped/DefinitelyTyped)** 1.0.5 — **34 months** ago: 2023-11-07 ⚠️
            - **[@types/topojson-simplify](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.3 — **34 months** ago: 2023-11-07 ⚠️
                - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **20 months** ago: 2025-01-23 ⚠️
                - **[@types/topojson-specification](https://github.com/DefinitelyTyped/DefinitelyTyped)** 1.0.5 — **34 months** ago: 2023-11-07 ⚠️
            - **[@types/topojson-specification](https://github.com/DefinitelyTyped/DefinitelyTyped)** 1.0.5 — **34 months** ago: 2023-11-07 ⚠️
        - **[@unovis/dagre-layout](https://github.com/unovis/dagre-layout)** 0.8.8-3 — **2 months** ago: 2026-07-28
            - **[@unovis/graphlibrary](https://github.com/unovis/graphlibrary)** 2.2.0-3 — **2 months** ago: 2026-07-28
            - **[lodash-es](https://github.com/lodash/lodash)** 4.18.1 — **5 months** ago: 2026-04-01
        - **[@unovis/graphlibrary](https://github.com/unovis/graphlibrary)** 2.2.0-3 — **2 months** ago: 2026-07-28
            - **[lodash-es](https://github.com/lodash/lodash)** 4.18.1 — **5 months** ago: 2026-04-01
        - **[csstype](https://github.com/frenic/csstype)** 3.2.3 — **10 months** ago: 2025-11-17 ⚠️
        - **[d3-array](https://github.com/d3/d3-array)** 3.2.4 — **40 months** ago: 2023-05-30 ⚠️
        - **[d3-axis](https://github.com/d3/d3-axis)** 3.0.0 — **63 months** ago: 2021-06-09 ⚠️
        - **[d3-brush](https://github.com/d3/d3-brush)** 3.0.0 — **63 months** ago: 2021-06-10 ⚠️
        - **[d3-chord](https://github.com/d3/d3-chord)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
            - **[d3-path](https://github.com/d3/d3-path)** 3.1.0 — **45 months** ago: 2022-12-19 ⚠️
        - **[d3-collection](https://github.com/d3/d3-collection)** 1.0.7 — **97 months** ago: 2018-08-24 ⚠️
        - **[d3-color](https://github.com/d3/d3-color)** 3.1.0 — **54 months** ago: 2022-03-28 ⚠️
        - **[d3-drag](https://github.com/d3/d3-drag)** 3.0.0 — **63 months** ago: 2021-06-09 ⚠️
        - **[d3-ease](https://github.com/d3/d3-ease)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
        - **[d3-force](https://github.com/d3/d3-force)** 3.0.0 — **63 months** ago: 2021-06-05 ⚠️
        - **[d3-geo-projection](https://github.com/d3/d3-geo-projection)** 4.0.0 — **63 months** ago: 2021-06-11 ⚠️
            - **[commander](https://github.com/tj/commander.js)** 7.2.0 — **66 months** ago: 2021-03-21 ⚠️ → **latest**: 15.0.0 — **4 months** ago: 2026-05-29 ❗
            - **[d3-array](https://github.com/d3/d3-array)** 3.2.4 — **40 months** ago: 2023-05-30 ⚠️
            - **[d3-geo](https://github.com/d3/d3-geo)** 3.1.1 — **30 months** ago: 2024-03-12 ⚠️
        - **[d3-geo](https://github.com/d3/d3-geo)** 3.1.1 — **30 months** ago: 2024-03-12 ⚠️
        - **[d3-hierarchy](https://github.com/d3/d3-hierarchy)** 3.1.2 — **53 months** ago: 2022-04-02 ⚠️
        - **[d3-interpolate-path](https://github.com/pbeshai/d3-interpolate-path)** 2.3.0 — **48 months** ago: 2022-08-31 ⚠️
        - **[d3-interpolate](https://github.com/d3/d3-interpolate)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
            - **[d3-color](https://github.com/d3/d3-color)** 3.1.0 — **54 months** ago: 2022-03-28 ⚠️
        - **[d3-path](https://github.com/d3/d3-path)** 3.1.0 — **45 months** ago: 2022-12-19 ⚠️
        - **[d3-sankey](https://github.com/d3/d3-sankey)** 0.12.3 — **84 months** ago: 2019-09-02 ⚠️
        - **[d3-scale](https://github.com/d3/d3-scale)** 4.0.2 — **60 months** ago: 2021-09-24 ⚠️
        - **[d3-selection](https://github.com/d3/d3-selection)** 3.0.0 — **63 months** ago: 2021-06-07 ⚠️
        - **[d3-shape](https://github.com/d3/d3-shape)** 3.2.0 — **45 months** ago: 2022-12-20 ⚠️
        - **[d3-timer](https://github.com/d3/d3-timer)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
        - **[d3-transition](https://github.com/d3/d3-transition)** 3.0.1 — **63 months** ago: 2021-06-09 ⚠️
            - **[d3-color](https://github.com/d3/d3-color)** 3.1.0 — **54 months** ago: 2022-03-28 ⚠️
            - **[d3-dispatch](https://github.com/d3/d3-dispatch)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
            - **[d3-ease](https://github.com/d3/d3-ease)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
            - **[d3-interpolate](https://github.com/d3/d3-interpolate)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
            - **[d3-selection](https://github.com/d3/d3-selection)** 3.0.0 — **63 months** ago: 2021-06-07 ⚠️
            - **[d3-timer](https://github.com/d3/d3-timer)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
        - **[d3-zoom](https://github.com/d3/d3-zoom)** 3.0.0 — **63 months** ago: 2021-06-10 ⚠️
        - **[d3](https://github.com/d3/d3)** 7.9.0 — **30 months** ago: 2024-03-12 ⚠️
        - **[elkjs](https://github.com/kieler/elkjs)** 0.10.2 — **14 months** ago: 2025-07-22 ⚠️ → **latest**: 0.12.0 — **2 months** ago: 2026-07-17 ❗
        - **[geojson](https://github.com/caseycesari/geojson.js)** 0.5.0 — **109 months** ago: 2017-08-06 ⚠️
        - **[leaflet](https://github.com/Leaflet/Leaflet)** 1.7.1 — **72 months** ago: 2020-09-03 ⚠️ → **latest**: 1.9.4 — **40 months** ago: 2023-05-18 ⚠️ ❗
        - **[maplibre-gl](https://github.com/maplibre/maplibre-gl-js)** 6.11.2 — this month: 2026-09-24
            - **[@mapbox/point-geometry](https://github.com/mapbox/point-geometry)** 1.1.0 — **26 months** ago: 2024-07-16 ⚠️
            - **[@mapbox/tiny-sdf](https://github.com/mapbox/tiny-sdf)** 2.2.0 — **4 months** ago: 2026-05-05
            - **[@mapbox/unitbezier](https://github.com/mapbox/unitbezier)** 1.0.0 — **4 months** ago: 2026-05-26
            - **[@mapbox/vector-tile](https://github.com/mapbox/vector-tile-js)** 3.0.0 — **4 months** ago: 2026-05-27
                - **[@mapbox/point-geometry](https://github.com/mapbox/point-geometry)** 1.1.0 — **26 months** ago: 2024-07-16 ⚠️
                - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **20 months** ago: 2025-01-23 ⚠️
                - **[pbf](https://github.com/mapbox/pbf)** 5.1.2 — **2 months** ago: 2026-07-09
            - **[@maplibre/geojson-vt](https://github.com/maplibre/geojson-vt)** 6.1.1 — **3 months** ago: 2026-06-29
                - **[kdbush](https://github.com/mourner/kdbush)** 4.1.0 — **4 months** ago: 2026-05-19
            - **[@maplibre/maplibre-gl-style-spec](https://github.com/maplibre/maplibre-style-spec)** 26.4.4 — this month: 2026-09-15
                - **[@mapbox/jsonlint-lines-primitives](https://github.com/mapbox/jsonlint)** 2.0.3 — **3 months** ago: 2026-06-25
                - **[@mapbox/unitbezier](https://github.com/mapbox/unitbezier)** 1.0.0 — **4 months** ago: 2026-05-26
                - **[json-stringify-pretty-compact](https://github.com/lydell/json-stringify-pretty-compact)** 4.0.0 — **52 months** ago: 2022-05-14 ⚠️
                - **[minimist](https://github.com/minimistjs/minimist)** 1.2.8 — **43 months** ago: 2023-02-09 ⚠️
                - **[quickselect](https://github.com/mourner/quickselect)** 3.0.0 — **26 months** ago: 2024-07-03 ⚠️
                - **[tinyqueue](https://github.com/mourner/tinyqueue)** 3.0.0 — **26 months** ago: 2024-07-06 ⚠️
            - **[@maplibre/mlt](https://github.com/maplibre/maplibre-tile-spec)** 1.3.0 — this month: 2026-09-12
                - **[@mapbox/point-geometry](https://github.com/mapbox/point-geometry)** 1.1.0 — **26 months** ago: 2024-07-16 ⚠️
            - **[@maplibre/vt-pbf](https://github.com/maplibre/vt-pbf)** 4.3.2 — **3 months** ago: 2026-06-04
                - **[@mapbox/point-geometry](https://github.com/mapbox/point-geometry)** 1.1.0 — **26 months** ago: 2024-07-16 ⚠️
                - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **20 months** ago: 2025-01-23 ⚠️
                - **[pbf](https://github.com/mapbox/pbf)** 5.1.2 — **2 months** ago: 2026-07-09
            - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **20 months** ago: 2025-01-23 ⚠️
            - **[bidi-js](https://github.com/lojjic/bidi-js)** 1.1.0 — this month: 2026-09-06
                - **[require-from-string](https://github.com/floatdrop/require-from-string)** 2.0.2 — **101 months** ago: 2018-04-09 ⚠️
            - **[earcut](https://github.com/mapbox/earcut)** 3.2.4 — this month: 2026-09-28
            - **[gl-matrix](https://github.com/toji/gl-matrix)** 3.4.4 — **13 months** ago: 2025-08-08 ⚠️
            - **[kdbush](https://github.com/mourner/kdbush)** 4.1.0 — **4 months** ago: 2026-05-19
            - **[murmurhash-js](https://github.com/mikolalysenko/murmurhash-js)** 1.0.0 — **149 months** ago: 2014-04-29 ⚠️
            - **[pbf](https://github.com/mapbox/pbf)** 5.1.2 — **2 months** ago: 2026-07-09
                - **[resolve-protobuf-schema](https://github.com/mafintosh/resolve-protobuf-schema)** 2.1.0 — **98 months** ago: 2018-07-20 ⚠️
                    - **[protocol-buffers-schema](https://github.com/mafintosh/protocol-buffers-schema)** 3.6.1 — **5 months** ago: 2026-04-06
            - **[potpack](https://github.com/mapbox/potpack)** 2.1.0 — **14 months** ago: 2025-07-14 ⚠️
            - **[quickselect](https://github.com/mourner/quickselect)** 3.0.0 — **26 months** ago: 2024-07-03 ⚠️
            - **[tinyqueue](https://github.com/mourner/tinyqueue)** 3.0.0 — **26 months** ago: 2024-07-06 ⚠️
        - **[striptags](https://github.com/ericnorris/striptags)** 3.2.0 — **63 months** ago: 2021-06-18 ⚠️
        - **[supercluster](https://github.com/mapbox/supercluster)** 7.1.5 — **53 months** ago: 2022-04-05 ⚠️ → **latest**: 9.1.0 — this month: 2026-09-03 ❗
            - **[kdbush](https://github.com/mourner/kdbush)** 3.0.0 — **96 months** ago: 2018-09-07 ⚠️ → **latest**: 4.1.0 — **4 months** ago: 2026-05-19 ❗
        - **[three](https://github.com/mrdoob/three.js)** 0.135.0 — **58 months** ago: 2021-11-26 ⚠️ → **latest**: 0.186.1 — this month: 2026-09-24 ❗
        - **[throttle-debounce](https://github.com/niksy/throttle-debounce)** 5.0.2 — **27 months** ago: 2024-06-24 ⚠️
        - **[topojson-client](https://github.com/topojson/topojson-client)** 3.1.0 — **82 months** ago: 2019-11-06 ⚠️
            - **[commander](https://github.com/tj/commander.js)** 2.20.3 — **83 months** ago: 2019-10-11 ⚠️ → **latest**: 15.0.0 — **4 months** ago: 2026-05-29 ❗
        - **[tslib](https://github.com/Microsoft/tslib)** 2.8.1 — **22 months** ago: 2024-10-31 ⚠️
    - **[billboard.js](https://github.com/naver/billboard.js)** 4.1.1 — this month: 2026-09-30
        - **[@types/d3-selection](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.12 — this month: 2026-09-14
        - **[@types/d3-transition](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.9 — **23 months** ago: 2024-10-07 ⚠️
        - **[d3-axis](https://github.com/d3/d3-axis)** 3.0.0 — **63 months** ago: 2021-06-09 ⚠️
        - **[d3-brush](https://github.com/d3/d3-brush)** 3.0.0 — **63 months** ago: 2021-06-10 ⚠️
        - **[d3-drag](https://github.com/d3/d3-drag)** 3.0.0 — **63 months** ago: 2021-06-09 ⚠️
        - **[d3-hierarchy](https://github.com/d3/d3-hierarchy)** 3.1.2 — **53 months** ago: 2022-04-02 ⚠️
        - **[d3-interpolate](https://github.com/d3/d3-interpolate)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
        - **[d3-scale](https://github.com/d3/d3-scale)** 4.0.2 — **60 months** ago: 2021-09-24 ⚠️
        - **[d3-selection](https://github.com/d3/d3-selection)** 3.0.0 — **63 months** ago: 2021-06-07 ⚠️
        - **[d3-shape](https://github.com/d3/d3-shape)** 3.2.0 — **45 months** ago: 2022-12-20 ⚠️
        - **[d3-time-format](https://github.com/d3/d3-time-format)** 4.1.0 — **57 months** ago: 2021-12-04 ⚠️
            - **[d3-time](https://github.com/d3/d3-time)** 3.1.0 — **45 months** ago: 2022-12-02 ⚠️
        - **[d3-transition](https://github.com/d3/d3-transition)** 3.0.1 — **63 months** ago: 2021-06-09 ⚠️
        - **[d3-zoom](https://github.com/d3/d3-zoom)** 3.0.0 — **63 months** ago: 2021-06-10 ⚠️
        - **react**
    - **[d3-axis](https://github.com/d3/d3-axis)** 3.0.0 — **63 months** ago: 2021-06-09 ⚠️
    - **[d3-drag](https://github.com/d3/d3-drag)** 3.0.0 — **63 months** ago: 2021-06-09 ⚠️
        - **[d3-dispatch](https://github.com/d3/d3-dispatch)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
        - **[d3-selection](https://github.com/d3/d3-selection)** 3.0.0 — **63 months** ago: 2021-06-07 ⚠️
    - **[d3-force](https://github.com/d3/d3-force)** 3.0.0 — **63 months** ago: 2021-06-05 ⚠️
        - **[d3-dispatch](https://github.com/d3/d3-dispatch)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
        - **[d3-quadtree](https://github.com/d3/d3-quadtree)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
        - **[d3-timer](https://github.com/d3/d3-timer)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
    - **[d3-hierarchy](https://github.com/d3/d3-hierarchy)** 3.1.2 — **53 months** ago: 2022-04-02 ⚠️
    - **[d3-sankey](https://github.com/d3/d3-sankey)** 0.12.3 — **84 months** ago: 2019-09-02 ⚠️
        - **[d3-array](https://github.com/d3/d3-array)** 2.12.1 — **66 months** ago: 2021-03-24 ⚠️ → **latest**: 3.2.4 — **40 months** ago: 2023-05-30 ⚠️ ❗
            - **[internmap](https://github.com/mbostock/internmap)** 1.0.1 — **66 months** ago: 2021-03-10 ⚠️ → **latest**: 2.0.3 — **60 months** ago: 2021-09-20 ⚠️ ❗
        - **[d3-shape](https://github.com/d3/d3-shape)** 1.3.7 — **82 months** ago: 2019-11-16 ⚠️ → **latest**: 3.2.0 — **45 months** ago: 2022-12-20 ⚠️ ❗
            - **[d3-path](https://github.com/d3/d3-path)** 1.0.9 — **82 months** ago: 2019-11-16 ⚠️ → **latest**: 3.1.0 — **45 months** ago: 2022-12-19 ⚠️ ❗
    - **[d3-scale](https://github.com/d3/d3-scale)** 4.0.2 — **60 months** ago: 2021-09-24 ⚠️
        - **[d3-array](https://github.com/d3/d3-array)** 3.2.4 — **40 months** ago: 2023-05-30 ⚠️
        - **[d3-format](https://github.com/d3/d3-format)** 3.1.2 — **8 months** ago: 2026-01-14 ⚠️
        - **[d3-interpolate](https://github.com/d3/d3-interpolate)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
        - **[d3-time-format](https://github.com/d3/d3-time-format)** 4.1.0 — **57 months** ago: 2021-12-04 ⚠️
        - **[d3-time](https://github.com/d3/d3-time)** 3.1.0 — **45 months** ago: 2022-12-02 ⚠️
            - **[d3-array](https://github.com/d3/d3-array)** 3.2.4 — **40 months** ago: 2023-05-30 ⚠️
    - **[d3-selection](https://github.com/d3/d3-selection)** 3.0.0 — **63 months** ago: 2021-06-07 ⚠️
    - **[d3-shape](https://github.com/d3/d3-shape)** 3.2.0 — **45 months** ago: 2022-12-20 ⚠️
        - **[d3-path](https://github.com/d3/d3-path)** 3.1.0 — **45 months** ago: 2022-12-19 ⚠️
    - **[d3-zoom](https://github.com/d3/d3-zoom)** 3.0.0 — **63 months** ago: 2021-06-10 ⚠️
        - **[d3-dispatch](https://github.com/d3/d3-dispatch)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
        - **[d3-drag](https://github.com/d3/d3-drag)** 3.0.0 — **63 months** ago: 2021-06-09 ⚠️
        - **[d3-interpolate](https://github.com/d3/d3-interpolate)** 3.0.1 — **63 months** ago: 2021-06-05 ⚠️
        - **[d3-selection](https://github.com/d3/d3-selection)** 3.0.0 — **63 months** ago: 2021-06-07 ⚠️
        - **[d3-transition](https://github.com/d3/d3-transition)** 3.0.1 — **63 months** ago: 2021-06-09 ⚠️
- **[@dpuse/dpuse-tool-micromark-markdown-parser](https://github.com/dpuse/dpuse-tool-micromark-markdown-parser)** 0.1.1043 — this month: 2026-09-22
    - **[@speed-highlight/core](https://github.com/speed-highlight/core)** 2.1.0 — **1 month** ago: 2026-08-25
    - **[micromark-extension-directive](https://github.com/micromark/micromark-extension-directive)** 4.0.0 — **19 months** ago: 2025-02-27 ⚠️
        - **[devlop](https://github.com/wooorm/devlop)** 1.1.0 — **39 months** ago: 2023-06-29 ⚠️
            - **[dequal](https://github.com/lukeed/dequal)** 2.0.3 — **50 months** ago: 2022-07-11 ⚠️
        - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️ → **latest**: 2.1.0 — this month: 2026-09-26 ❗
            - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
        - **[micromark-factory-whitespace](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️ → **latest**: 2.1.0 — this month: 2026-09-26 ❗
            - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
        - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
        - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
        - **[parse-entities](https://github.com/wooorm/parse-entities)** 4.0.2 — **21 months** ago: 2024-12-13 ⚠️
            - **[@types/unist](https://github.com/DefinitelyTyped/DefinitelyTyped)** 2.0.11 — **25 months** ago: 2024-08-15 ⚠️ → **latest**: 3.0.3 — **25 months** ago: 2024-08-15 ⚠️ ❗
            - **[character-entities-legacy](https://github.com/wooorm/character-entities-legacy)** 3.0.0 — **59 months** ago: 2021-10-29 ⚠️
            - **[character-reference-invalid](https://github.com/wooorm/character-reference-invalid)** 2.0.1 — **59 months** ago: 2021-10-27 ⚠️
            - **[decode-named-character-reference](https://github.com/wooorm/decode-named-character-reference)** 1.3.0 — **8 months** ago: 2026-01-19 ⚠️
            - **[is-alphanumerical](https://github.com/wooorm/is-alphanumerical)** 2.0.1 — **58 months** ago: 2021-11-04 ⚠️
                - **[is-alphabetical](https://github.com/wooorm/is-alphabetical)** 2.0.1 — **58 months** ago: 2021-11-04 ⚠️
                - **[is-decimal](https://github.com/wooorm/is-decimal)** 2.0.1 — **58 months** ago: 2021-11-04 ⚠️
            - **[is-decimal](https://github.com/wooorm/is-decimal)** 2.0.1 — **58 months** ago: 2021-11-04 ⚠️
            - **[is-hexadecimal](https://github.com/wooorm/is-hexadecimal)** 2.0.1 — **58 months** ago: 2021-11-04 ⚠️
    - **[micromark-extension-gfm-table](https://github.com/micromark/micromark-extension-gfm-table)** 2.1.2 — this month: 2026-09-11
        - **[devlop](https://github.com/wooorm/devlop)** 1.1.0 — **39 months** ago: 2023-06-29 ⚠️
        - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️ → **latest**: 2.1.0 — this month: 2026-09-26 ❗
        - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
    - **[micromark](https://github.com/micromark/micromark.git#main)** 4.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 4.0.3 — this month: 2026-09-26 ❗
        - **[@types/debug](https://github.com/DefinitelyTyped/DefinitelyTyped)** 4.1.13 — **6 months** ago: 2026-03-19
            - **[@types/ms](https://github.com/DefinitelyTyped/DefinitelyTyped)** 2.1.0 — **20 months** ago: 2025-01-16 ⚠️
        - **[debug](https://github.com/debug-js/debug)** 4.4.3 — **12 months** ago: 2025-09-13 ⚠️
            - **[ms](https://github.com/vercel/ms)** 2.1.3 — **69 months** ago: 2020-12-08 ⚠️
        - **[decode-named-character-reference](https://github.com/wooorm/decode-named-character-reference)** 1.3.0 — **8 months** ago: 2026-01-19 ⚠️
            - **[character-entities](https://github.com/wooorm/character-entities)** 2.0.2 — **51 months** ago: 2022-06-22 ⚠️
        - **[devlop](https://github.com/wooorm/devlop)** 1.1.0 — **39 months** ago: 2023-06-29 ⚠️
        - **[micromark-core-commonmark](https://github.com/micromark/micromark.git#main)** 2.0.3 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.4 — this month: 2026-09-26 ❗
            - **[decode-named-character-reference](https://github.com/wooorm/decode-named-character-reference)** 1.3.0 — **8 months** ago: 2026-01-19 ⚠️
            - **[devlop](https://github.com/wooorm/devlop)** 1.1.0 — **39 months** ago: 2023-06-29 ⚠️
            - **[micromark-factory-destination](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
                - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
                - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
                - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
            - **[micromark-factory-label](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
                - **[devlop](https://github.com/wooorm/devlop)** 1.1.0 — **39 months** ago: 2023-06-29 ⚠️
                - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
                - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
                - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
            - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️ → **latest**: 2.1.0 — this month: 2026-09-26 ❗
            - **[micromark-factory-title](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
                - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️ → **latest**: 2.1.0 — this month: 2026-09-26 ❗
                - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
                - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
                - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
            - **[micromark-factory-whitespace](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-chunked](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-classify-character](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
                - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
                - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
                - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
            - **[micromark-util-html-tag-name](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-normalize-identifier](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-resolve-all](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-subtokenize](https://github.com/micromark/micromark.git#main)** 2.1.0 — **19 months** ago: 2025-02-27 ⚠️
            - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
        - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️ → **latest**: 2.1.0 — this month: 2026-09-26 ❗
        - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-chunked](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-combine-extensions](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-chunked](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
        - **[micromark-util-decode-numeric-character-reference](https://github.com/micromark/micromark.git#main)** 2.0.2 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-encode](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-normalize-identifier](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-resolve-all](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
        - **[micromark-util-sanitize-uri](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-encode](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-subtokenize](https://github.com/micromark/micromark.git#main)** 2.1.0 — **19 months** ago: 2025-02-27 ⚠️
            - **[devlop](https://github.com/wooorm/devlop)** 1.1.0 — **39 months** ago: 2023-06-29 ⚠️
            - **[micromark-util-chunked](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
            - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
        - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — **22 months** ago: 2024-11-12 ⚠️
        - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — **19 months** ago: 2025-02-27 ⚠️ → **latest**: 2.0.3 — this month: 2026-09-26 ❗
- **[dompurify](https://github.com/cure53/DOMPurify)** 3.4.16 — this month: 2026-09-23
    - **[@types/trusted-types](https://github.com/DefinitelyTyped/DefinitelyTyped)** 2.0.7 — **34 months** ago: 2023-11-21 ⚠️

<!-- DEPENDENCY_LICENSES_END -->

 <!-- BUNDLE_START -->

## Bundle Analysis

This report is updated with each release, from the bundle the release builds, using [Sonda](https://sonda.dev/), which analyses final source maps to reveal the actual effects of tree-shaking and minification rather than relying on pre-build estimates.

_Note: Sonda's Vite reports currently exclude CSS files, since Vite does not generate source maps for CSS._

| Chunk/Module/File                                               | Composition                  |
| :-------------------------------------------------------------- | :--------------------------- |
| dist/dpuse-presenter-samples.es.js                              | 42.2 kB · gzip 13.8 kB       |
| &nbsp;&nbsp;&nbsp;&nbsp;dompurify → dist/purify.es.mjs          | `██████████████░░░░░░` 72.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)     | `████░░░░░░░░░░░░░░░░` 19.7% |
| &nbsp;&nbsp;&nbsp;&nbsp;src                                     | `██░░░░░░░░░░░░░░░░░░` 7.9%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.ts        | `█░░░░░░░░░░░░░░░░░░░` 5.6%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d3SampleData.ts | `░░░░░░░░░░░░░░░░░░░░` 2.3%  |

(bundler output, whitespace & JSON) = bytes Sonda can't trace to a source file: whitespace (indentation and line breaks), code the bundler generates (region comments, the combined import/export lines, its small runtime helper and wrappers), and imported JSON such as `config.json`, which the bundler doesn't map. The JSON and the generated code are real bytes that ship; the whitespace mostly disappears once compressed.

<!-- BUNDLE_END -->

<!-- QUALITY_SECURITY_START -->

## Quality & Security

This section is updated each time `npm run document` is run. Settings come from the repository's workflow files and GitHub. Test coverage and the Fallow score are measured at the same time.

### Testing

| Check                | Status | What it does                                                                                                                                                                                     |
| :------------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unit tests           | ✅ On  | [Vitest](https://vitest.dev) runs the unit tests. Part of the [CI workflow](https://github.com/dpuse/dpuse-presenter-samples/actions/workflows/ci.yml) on every push and pull request to `main`. |
| Property-based tests | ❌ Off | [fast-check](https://fast-check.dev) runs many random inputs per test to find edge cases, alongside the unit tests.                                                                              |

### Code Quality

| Check         | Status | What it does                                                                                                                                                                                                                                                                                                   |
| :------------ | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Code analysis | ✅ On  | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=dpuse_dpuse-presenter-samples&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=dpuse_dpuse-presenter-samples) [SonarCloud](https://sonarcloud.io) checks every push for bugs, code smells and vulnerabilities. |
| Linting       | ✅ On  | [ESLint](https://eslint.org) checks the code for errors and style problems. Part of the [CI workflow](https://github.com/dpuse/dpuse-presenter-samples/actions/workflows/ci.yml) on every push and pull request to `main`.                                                                                     |

### Security Analysis

| Check           | Status | What it does                                                                                                                                                                                                                                                                                                                                                                             |
| :-------------- | :----- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Push protection | ✅ On  | [GitHub push protection](https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations) blocks pushes that contain credentials.                                                                                                                                                                                                            |
| Static analysis | ✅ On  | [![CodeQL](https://github.com/dpuse/dpuse-presenter-samples/actions/workflows/codeql.yml/badge.svg)](https://github.com/dpuse/dpuse-presenter-samples/security/code-scanning) [CodeQL](https://codeql.github.com) scans GitHub Actions and JavaScript/TypeScript for security vulnerabilities, using the extended security queries, on every push and pull request to `main` and weekly. |
| Secret scanning | ✅ On  | [GitHub secret scanning](https://docs.github.com/en/code-security/secret-scanning) detects credentials, such as API keys and tokens, committed to the repository.                                                                                                                                                                                                                        |

### Dependencies

| Check               | Status | What it does                                                                                                                                                                                                                                                                                                                   |
| :------------------ | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Vulnerability audit | ✅ On  | [npm audit](https://docs.npmjs.com/cli/commands/npm-audit) fails when a shipped dependency has any known vulnerability, or a development dependency has a high or critical one. Part of the [CI workflow](https://github.com/dpuse/dpuse-presenter-samples/actions/workflows/ci.yml) on every push and pull request to `main`. |
| Supply chain risk   | ✅ On  | [Socket](https://socket.dev) flags malicious packages, typosquatting and suspicious behaviour that may not yet have a CVE.                                                                                                                                                                                                     |
| Security alerts     | ✅ On  | [Dependabot](https://docs.github.com/en/code-security/dependabot) alerts when a dependency has a known vulnerability, using the GitHub Advisory Database.                                                                                                                                                                      |
| Security updates    | ❌ Off | [Dependabot](https://docs.github.com/en/code-security/dependabot) opens pull requests that update vulnerable dependencies. These are handled manually.                                                                                                                                                                         |
| Version updates     | ❌ Off | [Dependabot](https://docs.github.com/en/code-security/dependabot) opens pull requests for new dependency versions. These are handled manually.                                                                                                                                                                                 |

### OpenSSF 🚧

[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/dpuse/dpuse-presenter-samples/badge)](https://scorecard.dev/viewer/?uri=github.com/dpuse/dpuse-presenter-samples)

This project is working towards the [OpenSSF Best Practices](https://www.bestpractices.dev) Passing badge, a self-certification covering security policy, vulnerability reporting, build processes, code quality, and more. Currently the [OpenSSF Scorecard](https://scorecard.dev) provides an independent automated assessment of the project's security practices and is an ongoing area of improvement.

### Reporting Vulnerabilities

Please do not open public GitHub issues for security vulnerabilities. Use [GitHub private vulnerability reporting](https://github.com/dpuse/dpuse-presenter-samples/security/advisories/new) instead. See [SECURITY.md](./SECURITY.md) for the full disclosure policy, contact details, and expected response times.

<!-- QUALITY_SECURITY_END -->

<!-- CONTRIBUTING_LICENSE_START -->

## Contributing

This repository is maintained solely by its owner and does not, at present, accept external contributions into the canonical repo. Its source is published openly under the MIT License — every DPUse project is fully open source except DPUse Engine, which remains closed and proprietary.

For security vulnerabilities, see [Reporting Vulnerabilities](#reporting-vulnerabilities). For bugs, inconsistencies, or other feedback, [open a GitHub issue](https://github.com/dpuse/dpuse-presenter-samples/issues) — feedback is read, but responses and fixes are at the maintainer's discretion.

## License

This project is licensed under the MIT License, permitting free use, modification, and distribution.

[MIT](./LICENSE) © 2026 Jonathan Terrell

<!-- CONTRIBUTING_LICENSE_END -->
