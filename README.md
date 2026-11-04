# DPUse Samples Presenter

[![npm version](https://img.shields.io/npm/v/@dpuse/dpuse-presenter-samples)](https://www.npmjs.com/package/@dpuse/dpuse-presenter-samples)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=dpuse_dpuse_dpuse-presenter-samples&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=data-positioning_dpuse-presenter-samples)

A library that implements the samples presenter in accordance with the Data Positioning presenter interface. It showcases the chart renderers exposed by `@dpuse/dpuse-tool-d3-visualiser` (Sankey diagram, and bar chart via TanStack Charts).

<!-- OPENING_START -->

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![DPUse version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.dpuse.app%2Fconfigs%2Fdpuse-presenter-samples&query=%24.data.version&prefix=v&label=DPUse&color=blue)](https://github.com/dpuse/dpuse-presenter-samples/releases/latest)
[![CI](https://github.com/dpuse/dpuse-presenter-samples/actions/workflows/ci.yml/badge.svg)](https://github.com/dpuse/dpuse-presenter-samples/actions/workflows/ci.yml)

A library that implements the samples presenter in accordance with the Data Positioning presenter interface.

[Report a Vulnerability](https://github.com/dpuse/dpuse-presenter-samples/security/advisories/new) · [Open an Issue](https://github.com/dpuse/dpuse-presenter-samples/issues)

## About DPUse

[DPUse](https://www.dpuse.app) (Data Positioning & Use) is an in-browser application that positions your data for use through three core activities: sourcing, contextualising, and publishing.

**Sourcing** uses a library of [Connectors](https://www.dpuse.app/connectors) to establish [Connections](https://www.dpuse.app) to applications, databases, file stores, and curated datasets; these connections are subsequently used to configure structured [Data Views](https://www.dpuse.app) from the underlying sources.

**Contextualising** extracts chronological events from those [Data Views](https://www.dpuse.app) and maps them into comprehensive [Context Models](https://www.dpuse.app). This gives the DPUse Engine the structural framework needed to generate deterministic transactions, facts, or observations.

**Publishing** uses a library of [Presenters](https://www.dpuse.app) to render standard [Presentations](https://www.dpuse.app) immediately using the contextualised data; additionally, [Cookbooks](https://www.dpuse.app) of [Recipes](https://www.dpuse.app) let you build Data Apps using your preferred tools.

In addition, DPUse provides [Tools](https://www.dpuse.app) used by the application, and you can use them to construct connectors and presenters.

## Introduction

A presenter that showcases chart-rendering samples from the Data Positioning D3 visualiser tool (Sankey diagram, and bar chart via TanStack Charts) and phoria2 visualiser tool (3D network topology).

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

There's no need to install this presenter manually. Once released, it is uploaded to the Data Positioning Cloud and instantly available in all newly launched browser app instances. Running instances are notified of the update.

<!-- DEPENDENCY_LICENSES_START -->

## Dependency Licenses

License data is updated each time `npm run document` is run, using [license-checker](https://github.com/RSeidelsohn/license-checker-rseidelsohn). The following table lists every package whose code, styles or assets are included in this project's build, as recorded by the build itself. Modules loaded at run time are not included; each documents its own. These dependencies have been checked and confirmed to use Apache-2.0, BSD-2-Clause, CC0-1.0, ISC, or MIT, all of which allow commercial use. All are used unmodified, so any licence conditions that apply only to modified versions are not triggered. Developers cloning this repository should independently verify development dependencies.

| Dependency                                                                                    | Version | License(s)   | Document                                                                             |
| :-------------------------------------------------------------------------------------------- | :-----: | :----------- | :----------------------------------------------------------------------------------- |
| [@babel/helper-string-parser](https://github.com/babel/babel)                                 | 7.29.13 | MIT          | [LICENSE](licenses/downloads/@babel/helper-string-parser@7.29.13-LICENSE.txt)        |
| [@babel/parser](https://github.com/babel/babel)                                               | 7.29.13 | MIT          | [LICENSE](licenses/downloads/@babel/parser@7.29.13-LICENSE.txt)                      |
| [@babel/types](https://github.com/babel/babel)                                                | 7.29.11 | MIT          | [LICENSE](licenses/downloads/@babel/types@7.29.11-LICENSE.txt)                       |
| [@dpuse/dpuse-development](https://github.com/dpuse/dpuse-development)                        | 1.0.145 | MIT          | [LICENSE](licenses/downloads/@dpuse/dpuse-development@1.0.145-LICENSE.txt)           |
| [@dpuse/dpuse-shared](https://github.com/dpuse/dpuse-shared)                                  | 1.0.183 | MIT          | [LICENSE](licenses/downloads/@dpuse/dpuse-shared@1.0.183-LICENSE.txt)                |
| [@npmcli/promise-spawn](https://github.com/npm/promise-spawn)                                 |  9.0.2  | ISC          | [LICENSE](licenses/downloads/@npmcli/promise-spawn@9.0.2-LICENSE.txt)                |
| [@oxc-project/types](https://github.com/oxc-project/oxc)                                      | 0.156.0 | MIT          | [LICENSE](licenses/downloads/@oxc-project/types@0.156.0-LICENSE.txt)                 |
| [@rolldown/binding-darwin-arm64](https://github.com/rolldown/rolldown)                        | 1.2.16  | MIT          | [LICENSE](licenses/downloads/@rolldown/binding-darwin-arm64@1.2.16-LICENSE.txt)      |
| [@rollup/pluginutils](https://github.com/rollup/plugins)                                      |  5.5.1  | MIT          | [LICENSE](licenses/downloads/@rollup/pluginutils@5.5.1-LICENSE.txt)                  |
| [@sigstore/protobuf-specs](https://github.com/sigstore/protobuf-specs)                        |  0.5.2  | Apache-2.0   | [LICENSE](licenses/downloads/@sigstore/protobuf-specs@0.5.2-LICENSE.txt)             |
| [@types/estree](https://github.com/DefinitelyTyped/DefinitelyTyped)                           | 1.0.10  | MIT          | [LICENSE](licenses/downloads/@types/estree@1.0.10-LICENSE.txt)                       |
| [@types/whatwg-mimetype](https://github.com/DefinitelyTyped/DefinitelyTyped)                  |  3.0.2  | MIT          | [LICENSE](licenses/downloads/@types/whatwg-mimetype@3.0.2-LICENSE.txt)               |
| [@types/ws](https://github.com/DefinitelyTyped/DefinitelyTyped)                               | 8.18.2  | MIT          | [LICENSE](licenses/downloads/@types/ws@8.18.2-LICENSE.txt)                           |
| [@unrs/resolver-binding-darwin-arm64](https://github.com/unrs/unrs-resolver)                  | 1.13.0  | MIT          | [LICENSE](licenses/downloads/@unrs/resolver-binding-darwin-arm64@1.13.0-LICENSE.txt) |
| [@volar/language-core](https://github.com/volarjs/volar.js)                                   | 2.4.30  | MIT          | [LICENSE](licenses/downloads/@volar/language-core@2.4.30-LICENSE.txt)                |
| [@volar/language-service](https://github.com/volarjs/volar.js)                                | 2.4.30  | MIT          | [LICENSE](licenses/downloads/@volar/language-service@2.4.30-LICENSE.txt)             |
| [@volar/source-map](https://github.com/volarjs/volar.js)                                      | 2.4.30  | MIT          | [LICENSE](licenses/downloads/@volar/source-map@2.4.30-LICENSE.txt)                   |
| [@volar/typescript](https://github.com/volarjs/volar.js)                                      | 2.4.30  | MIT          | [LICENSE](licenses/downloads/@volar/typescript@2.4.30-LICENSE.txt)                   |
| [acorn](https://github.com/acornjs/acorn)                                                     | 8.19.0  | MIT          | [LICENSE](licenses/downloads/acorn@8.19.0-LICENSE.txt)                               |
| [bin-links](https://github.com/npm/bin-links)                                                 |  6.0.3  | ISC          | [LICENSE](licenses/downloads/bin-links@6.0.3-LICENSE.txt)                            |
| [buffer-image-size](https://github.com/evidentpoint/buffer-image-size)                        |  0.6.4  | MIT          | [LICENSE](licenses/downloads/buffer-image-size@0.6.4-LICENSE.txt)                    |
| [confbox](https://github.com/unjs/confbox)                                                    |  0.3.2  | MIT          | [LICENSE](licenses/downloads/confbox@0.3.2-LICENSE.txt)                              |
| [content-type](https://github.com/jshttp/content-type)                                        |  2.1.0  | MIT          | [LICENSE](licenses/downloads/content-type@2.1.0-LICENSE.txt)                         |
| [entities](https://github.com/fb55/entities)                                                  |  7.0.1  | BSD-2-Clause | [LICENSE](licenses/downloads/entities@7.0.1-LICENSE.txt)                             |
| [entities](https://github.com/fb55/entities)                                                  |  9.0.0  | BSD-2-Clause | [LICENSE](licenses/downloads/entities@9.0.0-LICENSE.txt)                             |
| [exsolve](https://github.com/unjs/exsolve)                                                    |  1.2.0  | MIT          | [LICENSE](licenses/downloads/exsolve@1.2.0-LICENSE.txt)                              |
| [get-tsconfig](https://github.com/privatenumber/get-tsconfig)                                 | 4.14.3  | MIT          | [LICENSE](licenses/downloads/get-tsconfig@4.14.3-LICENSE.txt)                        |
| [happy-dom](https://github.com/capricorn86/happy-dom)                                         | 21.0.4  | MIT          | [LICENSE](licenses/downloads/happy-dom@21.0.4-LICENSE.txt)                           |
| [ignore](https://github.com/kaelzhang/node-ignore)                                            | 7.0.14  | MIT          | [LICENSE](licenses/downloads/ignore@7.0.14-LICENSE.txt)                              |
| [napi-postinstall](https://github.com/un-ts/napi-postinstall)                                 |  0.3.8  | MIT          | [LICENSE](licenses/downloads/napi-postinstall@0.3.8-LICENSE.txt)                     |
| [negotiator](https://github.com/jshttp/negotiator)                                            |  1.1.0  | MIT          | [LICENSE](licenses/downloads/negotiator@1.1.0-LICENSE.txt)                           |
| [p-map](https://github.com/sindresorhus/p-map)                                                |  7.1.1  | MIT          | [LICENSE](licenses/downloads/p-map@7.1.1-LICENSE.txt)                                |
| [parse5](https://github.com/inikulin/parse5)                                                  |  8.1.0  | MIT          | [LICENSE](licenses/downloads/parse5@8.1.0-LICENSE.txt)                               |
| [phoria2](https://github.com/kevinroast/phoria2)                                              |  1.3.0  | MIT          | [LICENSE](licenses/downloads/phoria2@1.3.0-LICENSE.txt)                              |
| [pkg-types](https://github.com/unjs/pkg-types)                                                |  2.4.0  | MIT          | [LICENSE](licenses/downloads/pkg-types@2.4.0-LICENSE.txt)                            |
| [postcss](https://github.com/postcss/postcss)                                                 | 8.5.32  | MIT          | [LICENSE](licenses/downloads/postcss@8.5.32-LICENSE.txt)                             |
| [postcss-selector-parser](https://github.com/postcss/postcss-selector-parser)                 |  7.1.7  | MIT          | [LICENSE](licenses/downloads/postcss-selector-parser@7.1.7-LICENSE.txt)              |
| [rolldown](https://github.com/rolldown/rolldown)                                              | 1.2.16  | MIT          | [LICENSE](licenses/downloads/rolldown@1.2.16-LICENSE.txt)                            |
| [semver](https://github.com/npm/node-semver)                                                  |  7.8.6  | ISC          | [LICENSE](licenses/downloads/semver@7.8.6-LICENSE.txt)                               |
| [socks](https://github.com/JoshGlazebrook/socks)                                              | 2.8.10  | MIT          | [LICENSE](licenses/downloads/socks@2.8.10-LICENSE.txt)                               |
| [spdx-license-ids](https://github.com/jslicense/spdx-license-ids)                             | 3.0.24  | CC0-1.0      | [LICENSE](licenses/downloads/spdx-license-ids@3.0.24-LICENSE.txt)                    |
| [unrs-resolver](https://github.com/unrs/unrs-resolver)                                        | 1.13.0  | MIT          | [LICENSE](licenses/downloads/unrs-resolver@1.13.0-LICENSE.txt)                       |
| [valibot](https://github.com/open-circle/valibot)                                             |  1.5.0  | MIT          | [LICENSE](licenses/downloads/valibot@1.5.0-LICENSE.txt)                              |
| [vscode-jsonrpc](https://github.com/Microsoft/vscode-languageserver-node)                     | 10.0.0  | MIT          | [LICENSE](licenses/downloads/vscode-jsonrpc@10.0.0-LICENSE.txt)                      |
| [vscode-languageserver-protocol](https://github.com/Microsoft/vscode-languageserver-node)     | 3.18.5  | MIT          | [LICENSE](licenses/downloads/vscode-languageserver-protocol@3.18.5-LICENSE.txt)      |
| [vscode-languageserver-textdocument](https://github.com/Microsoft/vscode-languageserver-node) | 1.0.16  | MIT          | [LICENSE](licenses/downloads/vscode-languageserver-textdocument@1.0.16-LICENSE.txt)  |
| [vscode-languageserver-types](https://github.com/Microsoft/vscode-languageserver-node)        | 3.18.5  | MIT          | [LICENSE](licenses/downloads/vscode-languageserver-types@3.18.5-LICENSE.txt)         |
| [whatwg-mimetype](https://github.com/jsdom/whatwg-mimetype)                                   |  3.0.0  | MIT          | [LICENSE](licenses/downloads/whatwg-mimetype@3.0.0-LICENSE.txt)                      |
| [ws](https://github.com/websockets/ws)                                                        | 8.22.1  | MIT          | [LICENSE](licenses/downloads/ws@8.22.1-LICENSE.txt)                                  |

### Dependency Tree

The dependency tree below shows how each package in the table above is reached — direct and transitive — along with its installed version, release date, and update status. A package that does not ship itself, such as one whose parts are bundled separately, is left out and what ships beneath it is shown in its place. Packages flagged ❗ have a newer version available; ⚠️ indicates a package that hasn't been updated in the last 6 months or longer. Neither flag necessarily indicates a problem: we let new releases stabilise before upgrading, and some packages are mature and stable (have limited or no dependencies), so they require no active development.

- **[@dpuse/dpuse-shared](https://github.com/dpuse/dpuse-shared)** 1.0.183 — this month: 2026-11-04
    - **[valibot](https://github.com/open-circle/valibot)** 1.5.0 — 1 mth ago: 2026-09-09

<!-- DEPENDENCY_LICENSES_END -->

 <!-- BUNDLE_START -->

## Bundle Analysis

This report is updated with each release, from the bundle the release builds, using [Sonda](https://sonda.dev/), which analyses final source maps to reveal the actual effects of tree-shaking and minification rather than relying on pre-build estimates.

_Note: Sonda's Vite reports currently exclude CSS files, since Vite does not generate source maps for CSS._

| Chunk/Module/File                                                      | Composition                                                                                   |
| :--------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| **dist/dpuse-presenter-samples.es.js**                                 | 19.6&nbsp;kB&nbsp;·&nbsp;gzip&nbsp;6.1&nbsp;kB&nbsp;·&nbsp;100.0%&nbsp;of&nbsp;the&nbsp;build |
| &nbsp;&nbsp;&nbsp;&nbsp;@dpuse/dpuse-shared → dist/dpuse-shared.es.js  | `█████████░░░░░░░░░░░`&nbsp;45.3%&nbsp;·&nbsp;8.9&nbsp;kB                                     |
| &nbsp;&nbsp;&nbsp;&nbsp;src → phoria2SampleData.ts + 2 more            | `████░░░░░░░░░░░░░░░░`&nbsp;20.1%&nbsp;·&nbsp;3.9&nbsp;kB                                     |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ phoria2SampleData.ts | `▒▒░░░░░░░░░░░░░░░░░░`&nbsp;8.0%&nbsp;·&nbsp;1.6&nbsp;kB                                      |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ index.ts             | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;7.1%&nbsp;·&nbsp;1.4&nbsp;kB                                      |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ d3SampleData.ts      | `▒░░░░░░░░░░░░░░░░░░░`&nbsp;5.0%&nbsp;·&nbsp;1004&nbsp;B                                      |
| &nbsp;&nbsp;&nbsp;&nbsp;(bundler output, whitespace & JSON)            | `███████░░░░░░░░░░░░░`&nbsp;34.7%&nbsp;·&nbsp;6.8&nbsp;kB                                     |

Bars show each row's share of its output file. ↳ rows are part of the row above.

- n more = the row also holds n more files from the same package or folder, each no larger than the one named. A package can appear under several output files, each holding different files, never the same file twice.

(bundler output, whitespace & JSON) = bytes Sonda can't trace to a source file: whitespace (indentation and line breaks), code the bundler generates (region comments, the combined import/export lines, its small runtime helper and wrappers), and imported JSON such as `config.json`, which the bundler doesn't map. The JSON and the generated code are real bytes that ship; the whitespace mostly disappears once compressed.

<!-- BUNDLE_END -->

<!-- QUALITY_SECURITY_START -->

## Quality & Security

This section is updated each time `npm run document` is run. Settings come from the repository's workflow files and GitHub. Test coverage and the Fallow score are measured at the same time.

### Testing

| Check                | Status | What it does                                                                                                                                                                                                                                                                                                      |
| :------------------- | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unit tests           | ✅ On  | [Vitest](https://vitest.dev) runs the unit tests. Part of the [CI workflow](https://github.com/dpuse/dpuse-presenter-samples/actions/workflows/ci.yml) on every push and pull request to `main`.                                                                                                                  |
| Property-based tests | ❌ Off | [fast-check](https://fast-check.dev) runs many random inputs per test to find edge cases, alongside the unit tests.                                                                                                                                                                                               |
| Test coverage        | ✅ On  | ![Coverage](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fdpuse%2Fdpuse-presenter-samples%2Fmain%2Fcode-health-reports%2Fvitest%2Fbadge.json) [Vitest's V8 coverage](https://vitest.dev/guide/coverage) measures the share of source lines the unit tests run. The target is 80%. |

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
