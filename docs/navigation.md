# Navigation guide

> **UNDER VALIDATION — PARIS BSC LABORATORY**
>
> RAG pilot status. **VSS: VALIDATED DEMONSTRATION**. Status and evidence are specific to each entry.

[Home](../README.md) · [Demonstration overview](demo-overview.md) · [Business use cases](business-use-cases.md) · [Architecture and diagrams](architecture.md) · [Roadmap](roadmap.md)

## Commercial and business path

1. **Understand the story:** read the [executive summary](../README.md#executive-summary), then [choose RAG or VSS in the demonstration overview](demo-overview.md#choose-a-demonstration) for the purpose, experience and conversation scope.
2. **Match an opportunity:** use the [business playbook](business-use-cases.md) to choose a vertical, sponsor and information task. Each opportunity links to the relevant technical capability, demonstration record and external reference.
3. **Prepare engagement:** agree the objective and success criteria, then confirm the BSC session scope. Bring technical presales into the [technical path](#technical-and-presales-path) for platform and evidence questions.

The common pilot status stays visible in commercial pages. Detailed dataset coverage, test gaps and per-vertical technical findings are in the validation records, so the business narrative can concentrate on use, positioning and potential value.

## Technical and presales path

1. **Understand the design:** start with [architecture](architecture.md). The [application diagram](architecture.md#application-and-data-flow) explains the RAG flow; the [automation diagram](architecture.md#automation-and-control-dependencies) explains deployment and lifecycle dependencies.
2. **Inspect the intended demonstration:** open [DEMO-01](demonstrations.md#demo-01--document-grounded-question-answering) for document Q&A or [DEMO-02](demonstrations.md#demo-02--deployment-and-lifecycle-walkthrough) for the RAG deployment walkthrough; use [DEMO-03](demonstrations.md#demo-03--from-video-to-insight) for VSS video intelligence. Follow their capability and evidence links.
3. **Assess platform fit:** review [compatibility](compatibility.md), [capabilities](capabilities.md), [provenance](provenance.md) and [limitations](limitations.md).
4. **Check what is established:** read the [validation matrix](validation.md#source-and-test-status-matrix), [vertical assessment](validation.md#vertical-assessment-and-business-use-case-boundaries) and relevant EVD record. Proposed procedures and check IDs are not executed tests or pass results.

## Find a document by question

| Question | Where to go |
|---|---|
| What is this repository and why does it matter? | [README executive summary](../README.md#executive-summary) |
| What is the demonstration about? | [Demonstration overview](demo-overview.md) |
| What business task could it address? | [Use cases and qualification](business-use-cases.md) |
| Where is the technical demonstration description? | [DEMO records and procedures](demonstrations.md) |
| Where are the architecture and diagrams? | [Functional architecture](architecture.md); static previews in [application SVG](assets/rag-data-flow.svg) and [automation SVG](assets/rag-automation-flow.svg) |
| What does each component enable? | [TC capability registry](capabilities.md) |
| Which versions and combinations need checking? | [Compatibility matrix](compatibility.md) |
| Which checks and evidence support a claim? | [VAL matrix and EVD records](validation.md) |
| What was reviewed in engineering? | [Provenance](provenance.md) |
| What are the operational and functional boundaries? | [Limitations](limitations.md) |
| Where are vendor documentation links? | [EXT reference registry](references.md) |
| What work is planned next? | [RM roadmap](roadmap.md) |
| How do I contribute or raise a security concern? | [CONTRIBUTING](../CONTRIBUTING.md) and [SECURITY](../SECURITY.md) |
| What was checked for the initial publication? | [Initial publication review](publication-review.md); a historical record, not a current test result |

## Repository structure

The root README is the entry point. Documents live directly under docs so readers can move between business and technical material without learning a deep folder hierarchy. The assets subfolder holds the static logical diagrams; editable Mermaid versions sit beside each diagram in the architecture document. Engineering code, operational configuration, access instructions and raw evidence belong in the restricted engineering workflow.

| Layer | Documents | Purpose |
|---|---|---|
| Entry and orientation | README, navigation, demo-overview | Choose a reading path and understand the demonstration |
| Business | business-use-cases | Value hypotheses, audience, discovery and qualification |
| Technical design | architecture, capabilities, compatibility | Explain component roles, dependencies and platform fit |
| Technical assessment | demonstrations, validation, limitations, provenance | Record procedures, checks, evidence and boundaries |
| Supporting references | references, publication-review | External sources and historical publication review |
| Future work | roadmap | Planned work with its own status and acceptance gates |
| Governance | CONTRIBUTING, SECURITY | Editorial, evidence and disclosure rules |

Document labels in this table correspond to Markdown filenames. Existing paths and heading anchors are kept stable when navigation is improved.

## Identifier and naming conventions

Identifiers are stable cross-references. Their number identifies a record; it does **not** express maturity, priority, an execution count or a pass result.

| Prefix and format | Object and scope | Current records | Where it lives |
|---|---|---|---|
| SAIF-AI-NNN | Catalog solution/pilot; three-digit sequence | SAIF-AI-001–SAIF-AI-002 | [README](../README.md#executive-summary) and [overview](demo-overview.md) |
| UC-NN | Business opportunity; two-digit sequence across the catalog | UC-01–UC-11 | [Business playbook](business-use-cases.md) |
| TC-NN | Technical capability; two-digit sequence across the catalog | TC-01–TC-05 | [Capability registry](capabilities.md) |
| DEMO-NN | Demonstration or walkthrough record; two-digit sequence across the catalog | DEMO-01–DEMO-03 | [Demonstration records](demonstrations.md) |
| VAL-NN | Validation check/assessment; two-digit sequence across the catalog | VAL-01–VAL-12 | [Validation matrix](validation.md#source-and-test-status-matrix) |
| EVD-TOPIC-NNN | Evidence record grouped by topic; three-digit sequence within each topic | EVD-RAG-001, EVD-SA-001, EVD-PVC-001, EVD-VSS-001 | [Evidence ledger](validation.md) |
| EXT-NN | External documentation reference; two-digit sequence across the catalog | EXT-01–EXT-07 | [Reference registry](references.md) |
| RM-NNN | Roadmap project; three-digit sequence across the catalog | RM-001–RM-002 | [Roadmap](roadmap.md) |

**Evidence topics:** RAG means document-grounded question answering; SA means Stack Automation deployment/lifecycle; PVC means persistent-volume-claim storage lifecycle; VSS means video search and summarization. These group labels do not imply a successful run or an attached public artifact. Roadmap references currently live alongside their project; they are not assigned EXT IDs unless added to the common registry.

Earlier planning names DEMO-VSS-001 and ROADMAP-VSS-SA-001 map to the single canonical records DEMO-03 and RM-002 respectively. Preserve these aliases for continuity.

**Sequence rules:** allocate the next unused number in the relevant scope when adding a real record. Keep the existing zero padding; extend digit width only when the sequence exceeds it. Never renumber or reuse an ID, including when a record is retired. Explicitly link a new record to its solution/pilot. Use the same ID when revising the same object; record evidence dates and revisions separately.

**Files and headings:** use descriptive lower-case Markdown filenames with hyphens, as in business-use-cases.md. Keep stable headings for linked records; point directly to their section anchor. Root governance filenames retain their existing uppercase convention. Static diagrams use descriptive lower-case SVG filenames and sit in assets.

**Checks versus runs:** VAL is an assessment/check reference, DEMO is a scenario/walkthrough, and EVD is an evidence record. None is an individual test execution ID. Record actual execution date, scope, configuration, outcome and technical review through the private evidence workflow, and publish only an approved sanitized summary. The source's eleven storage-helper test definitions are implementation tests, not eleven publicly passed VAL records.

## Reading status and evidence

The RAG pilot is **UNDER VALIDATION — PARIS BSC LABORATORY**. VSS is a **VALIDATED DEMONSTRATION**, with its owner-confirmed evidence and remaining checks recorded separately under EVD-VSS-001. Shared pages identify which entry each status applies to. Commercial pages show concise status and scope. The [technical ledger](validation.md#evidence-vocabulary) distinguishes SOURCE VERIFIED, HISTORICALLY REPORTED, TEST DEFINITION PRESENT and PENDING. These apply to individual claims and cannot be read as overall readiness.

Roadmap **PLANNED** and **IN PROGRESS** describe work progress, separately from validation. A business opportunity does not become a validated sector demonstration by receiving a UC ID, and an EVD identifier does not establish that evidence is complete.

## Editorial model for future updates

Lead executive and business pages with purpose, audience, positioning and potential value. Keep a visible shared pilot status and brief scope statement, with neutral links to DEMO records. Put detailed test procedures, dataset coverage, missing evidence and per-vertical limitations in technical assessment pages. Keep material use boundaries clear, including the non-clinical scope of the healthcare opportunity.

Preserve the capability → demonstration → external-documentation chain and make it easy to reach the relevant evidence from the demo. Do not replace a pending result with a success claim or remove a material constraint to simplify copy. Update status only when the existing technical evidence requirements are met. This model applies to new entries and subsequent revisions; see [CONTRIBUTING](../CONTRIBUTING.md).
