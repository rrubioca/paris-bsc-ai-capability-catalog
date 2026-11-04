# Paris BSC portal — phase 1

This directory contains presentation tooling for the public catalog in the parent directory. It does not contain a second documentation catalog. GitHub Actions builds and publishes the current review website; the hosted marketing editor is not yet enabled.

Review URL: <https://rrubioca.github.io/paris-bsc-ai-capability-catalog/>.

The workflow `.github/workflows/catalog-pages.yml` tests and builds pull requests without deploying them. A successful push to `main` publishes the verified `site/dist` artifact through GitHub Pages. No personal token or laboratory credential is stored in the workflow. GitHub runs the build and hosts the site independently of the local development machine.

## Run locally

Use Node.js 22.23.4 or newer (Node 24.22.1 was used for verification) and pnpm 11.25.0. From this directory:

```sh
pnpm install --frozen-lockfile
pnpm validate
pnpm test
pnpm build
pnpm preview
```

Open the printed local URL with `/paris-bsc-ai-capability-catalog/` appended. `pnpm dev` watches the original public Markdown. Astro telemetry is disabled for these commands. Build output, dependency caches and inspection reports are ignored by Git.

The local build checks its own links after generation. In restricted Windows environments, Pagefind may need permission to run its native indexing process; a generated HTML tree without a successful search index is not a passing build.

## Single source of truth

The repository's existing root Markdown, `docs/*.md` and the two logical SVGs are the editorial source. `src/lib/manifest.mjs` is an explicit publication/routing allowlist; it contains no authored solution descriptions or states. A new file is not published merely because it is committed.

The adapter parses original Markdown syntax trees. It injects Starlight titles and edit links in memory, translates relative links to Pages URLs and derives the `catalog` collection. It does not copy Markdown into `src/content/docs/` and does not create a manually editable JSON catalog. `.reports/catalog.json`, `.astro/` and `dist/` are disposable derived outputs.

Existing headings, IDs and GitHub source links remain stable. Source `README.md` becomes `/catalog/`; other published Markdown becomes the corresponding extensionless route. The root route redirects to `/catalog/`. The repository prefix is configured centrally; tests also exercise a root-domain base of `''`.

## Canonical data contract

| Record | Authoritative source | Extracted fields |
| --- | --- | --- |
| SAIF-AI | Each overview table whose first column includes `Catalog entry` in `docs/demo-overview.md` | Identity, full title, business question, experience, audience, potential value and `Current status` |
| UC | A level-two section with `Use case: UC-NN` in `docs/business-use-cases.md` | Problem/audience, discovery, evaluation focus, explicit TC/DEMO/EXT links |
| TC | `TC-NN` heading in `docs/capabilities.md` | Purpose and its own `Status` paragraph |
| DEMO | `DEMO-NN` heading and field table in `docs/demonstrations.md` | Table values; runtime/live execution status |
| VAL | Source/test status matrix in `docs/validation.md` | Check, exact state, actual finding and next evidence |
| EVD | `EVD-TOPIC-NNN` heading in `docs/validation.md` | Exact `Record status` text |
| EXT | `EXT-NN` heading in `docs/references.md` | Title and explicit reference links |
| RM | Purpose/status table and matching project section in `docs/roadmap.md` | Project title, exact project progress and next gate |
| Phase | Level-three `Phase 1–4` heading inside each RM project | Scoped ID such as `RM-002-P1`, title and exact phase progress |

Each derived record includes `source.path`, `source.anchor`, `source.line`, its portal `href` and explicit record relationships. Phases are nested project records, not new catalog capabilities. The Zod schema rejects unknown object properties. Domains remain separate: solution status, technical claim, demo execution, validation state, evidence status and roadmap progress. No Boolean readiness or runtime approval is inferred.

Add `Catalog entry: SAIF-AI-NNN` next to each UC, TC, DEMO, VAL or EVD record, using the existing overview anchor. The adapter reads this field or the equivalent table row; a phase may inherit only its containing project's explicit scope. It never inherits scope from a previous sibling record, and refuses a UC, TC, DEMO, VAL or EVD with no scope. A general link to an entire registry is navigation; a label such as `TC-01–TC-04` creates only those four relationships. The adapter rejects unknown or mismatched record references.

Legacy source pages retain their existing human-readable summaries. The portal reads the authoritative fields above, never treats a repeated executive summary as a second record and detects drift in the shared RAG banner. Future status-authoring controls must edit the canonical record and regenerate any repeated summaries in the same reviewed change; adding independently editable status fields is prohibited. This phase does not rewrite historical publication reviews or invent missing evidence.

## Marketing editing contract

`src/lib/editorial.mjs` defines and tests the boundary for the future editor:

- Overview tables: business question, experience, audience and potential value.
- Overview narrative: RAG/VSS demonstration stories and preparation for a BSC discussion.
- Business records: problem/audience, discovery and evaluation focus.
- IDs, headings/anchors, solution membership, status, technical records and reference destinations remain protected.

`assertMarketingEdit()` verifies a proposed source change against this structural boundary. It does not judge whether a commercial statement is supported: all edits still need editorial review, and new capability claims need technical review.

This contract is not authentication or GitHub access control. No administrative editor, account, OAuth integration or permission enforcement is active. A later phase will connect forms to these exact sources through a reviewed pull-request flow. Brand/logo uploads require an explicit asset entry, image validation and the same publication review; no vendor or institutional logo is invented or enabled by this phase. The neutral favicon is presentation tooling, not an approved brand asset.

## Publication boundary and remaining phases

Only allowlisted documents and diagrams are loaded. Links to unlisted/private files, unsafe URL protocols, broken anchors, unreviewed raw HTML and active/external SVG content fail validation. Filesystem symlinks are rejected. Markdown rendering is not a route to the private engineering environment. These checks supplement the repository's human disclosure review; they do not prove that every possible secret is absent.

The content model and static build are checked locally and by GitHub Actions. The current Pages publication is a review version. The next phase is the commercial design, cards, filters and the authenticated editorial interface. Branch protections and any custom domain/DNS remain separate administration work.

The frontend/tooling exception in `CONTRIBUTING.md` is limited to this public presentation code. Laboratory application code, blueprints, scripts, operational configuration and raw evidence remain outside this repository.
