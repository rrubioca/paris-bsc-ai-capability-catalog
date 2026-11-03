# TD SYNNEX Paris BSC — AI Capability Catalog

> **UNDER VALIDATION — PARIS BSC LABORATORY**
>
> First publication: 2 November 2026. One pilot entry. No completed Paris BSC demonstration is certified by this publication.

**Navigation:** [Current pilot and evidence](#technical-architecture-and-validation) · [Roadmap — planned work](docs/roadmap.md) · [Business use cases](#business-use-cases-verticals-and-customer-value)

## Executive summary

This English-language catalog helps TD SYNNEX and partner sales teams connect customer needs to the technical work being evaluated at the Paris Business Solution Center (BSC). Technical readers can follow the same opportunities into architecture, compatibility, evidence and limitations.

**SAIF-AI-001 — NVIDIA RAG on Cisco Stack Automation, adapted for NVIDIA RTX PRO 6000 Blackwell** is the sole entry in this first publication. The pilot explores document-grounded question answering on enterprise AI infrastructure in the Cisco Secure AI Factory context. It uses the adapted engineering blueprint, rather than assuming that an unmodified upstream package is compatible with the laboratory GPU.

The engineering source contains the RAG deployment definition, Blackwell-related configuration changes, an access-proxy correction and storage lifecycle safeguards. Earlier working context reports PDF ingestion, retrieval and inference working in the laboratory. Those reports are **historical context, not a reviewed runtime evidence pack**. No live cluster test was performed for this catalog publication. Current revision repeatability, secure operation and lifecycle validation remain open.

**Partner value:** use one bounded pilot to discover whether an enterprise knowledge assistant merits a customer-specific proof of value, and to identify the infrastructure and operating requirements early. Business benefits below are hypotheses to evaluate; no financial, accuracy, performance or time-saving results are claimed.

This is a documentation catalog in the repository owner's account. It is not a vendor certification, an official product support matrix, a deployment service or evidence of institutional approval. Cisco Hyperfabric is a possible future scope; no Hyperfabric capability or demo entry is included here.

## Business use cases, verticals and customer value

Start with an approved document collection and a repeatable information-finding task. The common opportunity is to help staff navigate that collection, with a human checking the answer against the source. The pilot does not establish that a particular industry's data, language, permissions or controls work correctly.

Every row provides three explicit references: **technical capability → demonstration/evidence status → external documentation**. The demo links explain what has actually been verified and what is still missing; they do not imply a completed vertical demo.

| Customer opportunity | Potential value and buyer | Technical capability | Verified demo / evidence status | External documentation |
|---|---|---|---|---|
| Financial services: internal policy and product knowledge | Help operations and enablement staff find approved policy passages; operations or knowledge owner | [TC-01 / TC-02 / TC-03](docs/capabilities.md#tc-01--document-ingestion) | [DEMO-01: historical report; runtime evidence pending](docs/demonstrations.md#demo-01--document-grounded-question-answering) | [EXT-01: NVIDIA RAG](docs/references.md#ext-01--nvidia-rag-blueprint), [EXT-04: NIST AI RMF](docs/references.md#ext-04--nist-ai-risk-management-framework) |
| Manufacturing: maintenance and technical manuals | Help engineers locate applicable instructions; service or manufacturing engineering owner | [TC-01 / TC-02 / TC-03](docs/capabilities.md#tc-01--document-ingestion) | [DEMO-01: no manufacturing dataset validated](docs/demonstrations.md#demo-01--document-grounded-question-answering) | [EXT-01: NVIDIA RAG](docs/references.md#ext-01--nvidia-rag-blueprint), [EXT-03: Blackwell GPU](docs/references.md#ext-03--nvidia-rtx-pro-6000-blackwell-server-edition) |
| Healthcare: non-clinical administrative knowledge | Help administrative staff navigate approved operational documents; administration or IT owner | [TC-01 / TC-02 / TC-03](docs/capabilities.md#tc-01--document-ingestion) | [DEMO-01: no healthcare workflow validated](docs/demonstrations.md#demo-01--document-grounded-question-answering) | [EXT-01: NVIDIA RAG](docs/references.md#ext-01--nvidia-rag-blueprint), [EXT-04: NIST AI RMF](docs/references.md#ext-04--nist-ai-risk-management-framework) |
| Public sector: policy document navigation | Help staff locate relevant approved guidance; service delivery or digital transformation owner | [TC-01 / TC-02 / TC-03](docs/capabilities.md#tc-01--document-ingestion) | [DEMO-01: no public-sector workflow validated](docs/demonstrations.md#demo-01--document-grounded-question-answering) | [EXT-01: NVIDIA RAG](docs/references.md#ext-01--nvidia-rag-blueprint), [EXT-04: NIST AI RMF](docs/references.md#ext-04--nist-ai-risk-management-framework) |
| Retail and distribution: product and support knowledge | Help staff find current product information; support or sales enablement owner | [TC-01 / TC-02 / TC-03](docs/capabilities.md#tc-01--document-ingestion) | [DEMO-01: no retail dataset validated](docs/demonstrations.md#demo-01--document-grounded-question-answering) | [EXT-01: NVIDIA RAG](docs/references.md#ext-01--nvidia-rag-blueprint), [EXT-04: NIST AI RMF](docs/references.md#ext-04--nist-ai-risk-management-framework) |
| IT services: runbook knowledge and AI platform enablement | Help engineers find runbook context and assess application deployment steps; service delivery or platform owner | [TC-01–TC-04](docs/capabilities.md) | [DEMO-01](docs/demonstrations.md#demo-01--document-grounded-question-answering) and [DEMO-02: source workflow verified; execution pending](docs/demonstrations.md#demo-02--deployment-and-lifecycle-walkthrough) | [EXT-01: NVIDIA RAG](docs/references.md#ext-01--nvidia-rag-blueprint), [EXT-02: Stack Automation](docs/references.md#ext-02--cisco-stack-automation), [EXT-05: OpenShift](docs/references.md#ext-05--red-hat-openshift) |

Read the [business opportunity playbook](docs/business-use-cases.md) for each vertical's discovery questions, proof-of-value boundaries and evaluation criteria.

## Qualification and value conversation

Qualify the **information problem before sizing the platform**. Identify a business owner, a bounded task and an approved representative corpus. Establish who may see which documents, how freshness and withdrawal are managed, and who checks generated answers. If permissions vary per document, treat authorization integration as an additional unvalidated requirement.

Ask what a correct answer looks like, when the assistant should decline, and how users resolve conflicting or outdated documents. Agree a human-reviewed question set, representative languages and document formats, a manual-search baseline and customer-defined acceptance criteria before an evaluation. Do not turn proposed criteria into claimed results.

Platform qualification includes GPU and software compatibility, model entitlements, approved artifact acquisition, persistent storage, identity and transport protection, operations ownership and a recoverable data lifecycle. Local inference is an architectural intent; this publication does not establish air-gapped operation or that every dependency and data path stays on premises.

**Positioning:** RAG is an approach to bringing enterprise document context into answer generation, while Stack Automation describes the application deployment workflow. The commercial discussion can connect knowledge-access needs with platform readiness and service delivery. A customer-specific assessment must establish differentiation, total cost and measurable benefit; none is proven by a diagram or blueprint label.

## Demonstration scope and partner engagement

Use this catalog now for an architecture and discovery discussion. Any live laboratory session requires the laboratory team to confirm availability and approved scope through the partner's existing BSC contact channel; this repository provides no cluster access or booking endpoint.

Bring a non-sensitive corpus proposal, business sponsor, representative questions and success criteria. Before presenting a live result externally, require the matching revision, environment bill of materials, sanitized evidence and technical review described in the [validation ledger](docs/validation.md). A documentation walkthrough must be introduced as a walkthrough. No end-to-end demo, customer pilot or production deployment is promised by this publication.

## Roadmap

The [Roadmap](docs/roadmap.md) describes future work for Cisco, partners and TD SYNNEX, separately from catalog capabilities and verified evidence. **RM-001 — Agent Security Demonstration — OpenClaw / Cisco DefenseClaw / NVIDIA NemoClaw & OpenShell / Cisco AI Defense SaaS** is **PLANNED**. Its four phases cover the official Cisco lab, BSC platform evaluation, SaaS integration and a **private internal BSC Stack Automation blueprint**. No agent-security deployment, compatibility or blocking result is claimed. The private blueprint and operational code will not be published in this catalog.

## Technical architecture and validation

| Read next | Purpose |
|---|---|
| [Roadmap](docs/roadmap.md) | Planned projects, dependencies and acceptance gates; separate from verified capabilities |
| [Technical capabilities](docs/capabilities.md) | Stable TC references and evidence boundaries |
| [Logical architecture and topologies](docs/architecture.md) | Functional data flow, deployment flow and dependencies with opaque logical labels |
| [Compatibility and component matrix](docs/compatibility.md) | Configured versions versus verified runtime versions |
| [Demonstration records](docs/demonstrations.md) | DEMO-01 and DEMO-02, procedures and actual evidence status |
| [Validation and evidence ledger](docs/validation.md) | Source review findings, pending tests and promotion requirements |
| [Engineering provenance](docs/provenance.md) | Reviewed source revision, changes and unavailable evidence |
| [Limitations and operations](docs/limitations.md) | Security, storage, automation and revalidation boundaries |
| [External reference registry](docs/references.md) | Vendor documentation and independent risk-management background |

Engineering code and history remain in the independent restricted engineering repository. This catalog contains no deployable manifests, operational scripts, credentials, cluster identifiers, administrative paths or remote-access instructions. Functional relationships are published at an abstract level; the diagrams are not a physical network map.

See [CONTRIBUTING](CONTRIBUTING.md), [SECURITY](SECURITY.md) and the [initial publication review](docs/publication-review.md).
