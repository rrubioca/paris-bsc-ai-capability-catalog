# TD SYNNEX Paris BSC — AI Capability Catalog

> **UNDER VALIDATION — PARIS BSC LABORATORY**
>
> NVIDIA RAG pilot on Cisco Stack Automation, adapted for RTX PRO 6000 Blackwell. First published 2 November 2026.

## Start here

| Your goal | Start with | Continue to |
|---|---|---|
| **Sales / business:** understand the opportunity and position it with customers | [Demonstration overview](docs/demo-overview.md) | [Use cases and qualification](docs/business-use-cases.md) |
| **Technical / presales:** understand the design and prepare a technical discussion | [Architecture and diagrams](docs/architecture.md) | [Demo procedures](docs/demonstrations.md), [compatibility](docs/compatibility.md) and [validation](docs/validation.md) |
| **Cisco / partners / TD SYNNEX:** see future work | [Roadmap](docs/roadmap.md) | Project phases, dependencies and acceptance gates |

**New to this repository?** Read the [navigation guide](docs/navigation.md) for role-based reading paths, the document map, identifier conventions and tips for finding a specific demo or check.

## Executive summary

This English-language catalog connects customer opportunities with the AI application work being evaluated at the TD SYNNEX Paris Business Solution Center (BSC). It gives commercial readers a clear value story and technical readers a route to design, compatibility and evidence.

**SAIF-AI-001 — NVIDIA RAG on Cisco Stack Automation, adapted for NVIDIA RTX PRO 6000 Blackwell** explores enterprise document-grounded question answering in the Cisco Secure AI Factory context. The demonstration story follows a document collection from ingestion to retrieval and answer generation, alongside the application deployment workflow in Stack Automation.

**Partner value:** help customers assess enterprise knowledge access, identify a suitable proof of value and connect application needs with AI infrastructure and operating requirements. Benefits are potential value to assess against customer objectives; the catalog does not claim measured business results.

**Current status:** the pilot is under laboratory validation. See the [demonstration overview](docs/demo-overview.md) for scope and the [technical validation ledger](docs/validation.md) for detailed findings and next checks.

## Business use cases, verticals and customer value

The common opportunity is to help teams find relevant information in an approved document collection and review generated answers against authoritative sources. The following are **potential applications of the shared RAG workflow**; select a customer-specific proof of value through discovery.

Each opportunity links to its enabling capability, demonstration record and external documentation. Detailed test scope and sector assessment sit in the technical records linked from the demo.

| Customer opportunity | Potential value and buyer | Technical capability | Demonstration reference | External documentation |
|---|---|---|---|---|
| UC-01 · Financial services: policy and product knowledge | Help operations and enablement staff find approved policy passages; operations or knowledge owner | [TC-01–TC-03](docs/capabilities.md) | [DEMO-01 · Document Q&A](docs/demonstrations.md#demo-01--document-grounded-question-answering) | [EXT-01 · NVIDIA RAG](docs/references.md#ext-01--nvidia-rag-blueprint), [EXT-04 · NIST AI RMF](docs/references.md#ext-04--nist-ai-risk-management-framework) |
| UC-02 · Manufacturing: maintenance and technical manuals | Help engineers locate applicable instructions; service or manufacturing engineering owner | [TC-01–TC-03](docs/capabilities.md) | [DEMO-01 · Document Q&A](docs/demonstrations.md#demo-01--document-grounded-question-answering) | [EXT-01 · NVIDIA RAG](docs/references.md#ext-01--nvidia-rag-blueprint), [EXT-03 · Blackwell GPU](docs/references.md#ext-03--nvidia-rtx-pro-6000-blackwell-server-edition) |
| UC-03 · Healthcare: administrative knowledge | Help administrative staff navigate operational documents; administration or IT owner | [TC-01–TC-03](docs/capabilities.md) | [DEMO-01 · Document Q&A](docs/demonstrations.md#demo-01--document-grounded-question-answering) | [EXT-01 · NVIDIA RAG](docs/references.md#ext-01--nvidia-rag-blueprint), [EXT-04 · NIST AI RMF](docs/references.md#ext-04--nist-ai-risk-management-framework) |
| UC-04 · Public sector: policy document navigation | Help staff locate authoritative guidance; service delivery or digital transformation owner | [TC-01–TC-03](docs/capabilities.md) | [DEMO-01 · Document Q&A](docs/demonstrations.md#demo-01--document-grounded-question-answering) | [EXT-01 · NVIDIA RAG](docs/references.md#ext-01--nvidia-rag-blueprint), [EXT-04 · NIST AI RMF](docs/references.md#ext-04--nist-ai-risk-management-framework) |
| UC-05 · Retail and distribution: product and support knowledge | Help staff find product information; support or sales enablement owner | [TC-01–TC-03](docs/capabilities.md) | [DEMO-01 · Document Q&A](docs/demonstrations.md#demo-01--document-grounded-question-answering) | [EXT-01 · NVIDIA RAG](docs/references.md#ext-01--nvidia-rag-blueprint), [EXT-04 · NIST AI RMF](docs/references.md#ext-04--nist-ai-risk-management-framework) |
| UC-06 · IT services: runbooks and AI platform enablement | Help engineers find runbook context and scope application deployment; service delivery or platform owner | [TC-01–TC-04](docs/capabilities.md) | [DEMO-01 · Document Q&A](docs/demonstrations.md#demo-01--document-grounded-question-answering), [DEMO-02 · Deployment walkthrough](docs/demonstrations.md#demo-02--deployment-and-lifecycle-walkthrough) | [EXT-01 · NVIDIA RAG](docs/references.md#ext-01--nvidia-rag-blueprint), [EXT-02 · Stack Automation](docs/references.md#ext-02--cisco-stack-automation), [EXT-05 · OpenShift](docs/references.md#ext-05--red-hat-openshift) |

## Qualification and value conversation

Start with a business owner, a recurring information task and an authoritative document collection. Agree who uses the answers, who reviews them and what a useful improvement would look like. Assess the opportunity against a manual-search baseline and customer-defined success criteria.

The [business opportunity playbook](docs/business-use-cases.md) provides discovery questions, evaluation focus and value measures for each vertical. Use the [technical reading path](docs/navigation.md#technical-and-presales-path) to assess platform fit and operational requirements with the delivery team.

## Demonstration scope and partner engagement

Use the [demonstration overview](docs/demo-overview.md) to introduce the document Q&A experience and the Stack Automation deployment walkthrough. Confirm the format, availability and approved scope of a BSC session through the partner's existing BSC contact channel.

Bring the customer objective, business sponsor, representative questions and agreed success criteria. The technical team can use the linked demo records and validation ledger to prepare the session and confirm its scope.

## Roadmap

[RM-001 — Agent Security Demonstration](docs/roadmap.md) is **PLANNED**: OpenClaw / Cisco DefenseClaw / NVIDIA NemoClaw & OpenShell / Cisco AI Defense SaaS. The four phases cover the official Cisco lab, BSC platform evaluation, SaaS integration and a **private internal BSC Stack Automation blueprint**. Roadmap work is separate from current pilot capabilities; the private blueprint and operational code stay outside this public catalog.

## Technical architecture and validation

| Find it quickly | Document |
|---|---|
| Role-based reading paths, document structure and ID conventions | [Navigation guide](docs/navigation.md) |
| Demonstration purpose, experience and discussion scope | [Demonstration overview](docs/demo-overview.md) |
| Technical design and application/data-flow diagram | [Application architecture](docs/architecture.md#application-and-data-flow) |
| Stack Automation and lifecycle diagram | [Automation architecture](docs/architecture.md#automation-and-control-dependencies) |
| Enabling functions | [Technical capabilities · TC](docs/capabilities.md) |
| Technical demo descriptions and procedures | [Demonstration records · DEMO](docs/demonstrations.md) |
| Component versions and platform fit | [Compatibility matrix](docs/compatibility.md) |
| Checks, results, sector-specific assessment and evidence | [Validation ledger · VAL / EVD](docs/validation.md) |
| Engineering source review and operating boundaries | [Provenance](docs/provenance.md) and [limitations](docs/limitations.md) |
| Vendor documentation | [External references · EXT](docs/references.md) |
| Future projects | [Roadmap · RM](docs/roadmap.md) |

This is a documentation catalog in the repository owner's account, not vendor certification or an official support matrix. Engineering code, operational configuration and private evidence remain in the restricted engineering workflow. Cisco Hyperfabric is a possible future scope.

See [CONTRIBUTING](CONTRIBUTING.md), [SECURITY](SECURITY.md) and the [initial publication review](docs/publication-review.md).
