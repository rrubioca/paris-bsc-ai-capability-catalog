# Demonstration overview — Enterprise document Q&A

> **UNDER VALIDATION — PARIS BSC LABORATORY**

[Home](../README.md) · [Navigation guide](navigation.md) · [Business use cases](business-use-cases.md) · [Architecture and diagrams](architecture.md)

## At a glance

| Topic | Overview |
|---|---|
| Catalog entry | **SAIF-AI-001 — NVIDIA RAG on Cisco Stack Automation, adapted for NVIDIA RTX PRO 6000 Blackwell** |
| Business question | How can staff find relevant knowledge across an enterprise document collection? |
| Experience | Follow documents through preparation, retrieval and answer generation; discuss the application deployment workflow alongside it |
| Audience | Business sponsors, sales and partner teams, technical presales and AI platform teams |
| Potential value | Easier knowledge navigation, more focused source review and a clearer scope for a customer proof of value |
| Current status | Under laboratory validation; session format and scope are confirmed with the BSC team |

## The demonstration story

1. **Start with the information problem.** Choose a recurring task and identify the authoritative document collection and its owner.
2. **Prepare the knowledge.** Explain how ingestion and embeddings make document content available for retrieval.
3. **Ask a question.** Follow retrieval, reranking and contextual generation to show how document context informs an answer.
4. **Review the response.** Discuss relevance and usefulness with the business owner, using the original sources as the reference.
5. **Connect application and platform.** Walk through how Cisco Stack Automation expresses the application deployment dependencies on the Blackwell-targeted platform.

This is the narrative for the pilot and its technical walkthrough. It does not change the validation status or promise a particular live session. The BSC team confirms the format and tested scope before a demonstration.

## Choose the discussion

| Discussion | Focus | Technical record |
|---|---|---|
| **Document Q&A** | Knowledge access and the ingestion-to-answer journey | [DEMO-01 — Document-grounded question answering](demonstrations.md#demo-01--document-grounded-question-answering) |
| **Deployment walkthrough** | AI application dependencies, Stack Automation and operating responsibilities | [DEMO-02 — Deployment and lifecycle walkthrough](demonstrations.md#demo-02--deployment-and-lifecycle-walkthrough) |

For customer positioning, continue to the [six business use cases and qualification playbook](business-use-cases.md). Potential applications share the same underlying pilot; select the proof-of-value scope with the customer.

## Technical view and diagrams

The source-derived design combines a web playground and RAG chain with NVIDIA NIM roles for language generation, embeddings and reranking, plus vector retrieval and persistent storage on the target OpenShift platform. Cisco Stack Automation defines application deployment and lifecycle dependencies. The technical records distinguish the design from observed runtime results.

- [Application and data-flow diagram](architecture.md#application-and-data-flow): document preparation, retrieval, reranking and generation.
- [Automation and lifecycle diagram](architecture.md#automation-and-control-dependencies): orchestration, platform preparation and storage dependencies.
- [Technical capabilities](capabilities.md) and [compatibility matrix](compatibility.md): function and platform details.
- [Demo procedures](demonstrations.md), [validation ledger](validation.md) and [limitations](limitations.md): technical findings, checks and evidence.

## Prepare a BSC discussion

Bring the business objective, intended users, document ownership, representative questions and success criteria. Confirm session availability and scope through the existing BSC contact channel. Keep operational configuration and access details in the private workflow.

For future agent-security work, see the separate [Roadmap](roadmap.md). It is not part of the current RAG pilot.
