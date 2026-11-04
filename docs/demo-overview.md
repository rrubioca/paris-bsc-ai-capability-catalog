# Demonstration overview — RAG and video intelligence

> **UNDER VALIDATION — PARIS BSC LABORATORY**
>
> RAG pilot status. **VSS: VALIDATED DEMONSTRATION**. Status is tracked separately for each catalog entry.

[Home](../README.md) · [Navigation guide](navigation.md) · [Business use cases](business-use-cases.md) · [Architecture and diagrams](architecture.md)

## Choose a demonstration

| Demonstration | Business conversation | Status | Explore |
|---|---|---|---|
| **SAIF-AI-001 — NVIDIA RAG** | Find knowledge in enterprise documents and discuss AI application deployment | **UNDER VALIDATION** | [RAG overview](#at-a-glance), [DEMO-01 / DEMO-02](demonstrations.md) |
| **SAIF-AI-002 — NVIDIA Video Search and Summarization (VSS)** | Turn recorded video into searchable information, summaries and answers | **VALIDATED DEMONSTRATION** | [VSS overview](#vss-at-a-glance), [DEMO-03 — From Video to Insight](demonstrations.md#demo-03--from-video-to-insight) |

Choose the document or video conversation to match the customer's information problem. Live session availability and scope are confirmed with the BSC team. See the separate [Roadmap](roadmap.md) for future automation and agent-security work.

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

## VSS at a glance

| Topic | Overview |
|---|---|
| Catalog entry | **SAIF-AI-002 — NVIDIA Video Search and Summarization (VSS)** |
| Demonstration | **DEMO-03 — From Video to Insight** |
| Business question | How can teams find relevant events and information in recorded video? |
| Experience | Search video content, obtain summaries and ask questions about recorded events |
| Audience | Operations, facilities, security and partner teams exploring video intelligence |
| Potential value | Reduce manual review effort and help teams locate information for operational investigation |
| Current status | **VALIDATED DEMONSTRATION**; recorded functional demonstration and existing OpenShift deployment validated in prior laboratory work |
| Next development | Reproducibility testing and a private Cisco Stack Automation blueprint |

## The VSS demonstration story

1. **Start with a video-review task.** Agree which events or information the audience wants to find.
2. **Explore the recording.** Follow the video intelligence workflow using the recorded BSC demonstration.
3. **Search and summarize.** Show how video content becomes easier to navigate through search and summaries.
4. **Ask about events.** Discuss the answers in the context of the original recording.
5. **Connect value and platform.** Relate the experience to operations workflows and the enterprise AI infrastructure supporting it.

Potential applications include manufacturing operations, retail incidents, logistics, facilities and enterprise security. See the [VSS business opportunities](business-use-cases.md#vss-video-intelligence-opportunities) for positioning and qualification.

## VSS technical view and next steps

The demonstrated application runs on Cisco GPU-enabled infrastructure with Red Hat OpenShift and NVIDIA video intelligence software. Its [technical demonstration record](demonstrations.md#demo-03--from-video-to-insight), [functional architecture](architecture.md#vss-functional-view), [compatibility assessment](compatibility.md#vss-compatibility-assessment) and [validation record](validation.md#evd-vss-001--video-intelligence-demonstration-evidence) describe the tested scope and evidence. VSS validation is separate from the RAG pilot.

The [private VSS Stack Automation initiative](roadmap.md#rm-002-project) will focus on deployment, lifecycle management and repeatability. Its blueprint and operational code will remain private.

## Prepare a BSC discussion

Bring the business objective, intended users, document ownership, representative questions and success criteria. Confirm session availability and scope through the existing BSC contact channel. Keep operational configuration and access details in the private workflow.

For future work, use the [Roadmap](roadmap.md): agent security and the private VSS automation initiative have their own project status.
