# Demonstration and walkthrough records

> **UNDER VALIDATION — PARIS BSC LABORATORY**
>
> RAG pilot status. **VSS: VALIDATED DEMONSTRATION**. Status and evidence are specific to each entry.

[Home](../README.md) · [Navigation guide](navigation.md) · [Demonstration overview](demo-overview.md)

**RAG evidence at initial publication:** no runtime demonstration supported by a reviewed public evidence pack. The source-derived workflow below can be explained as a documentation walkthrough. Historical functional reports are preserved as reports, not promoted into validated current results. No RAG vertical-specific scenario is validated. The separately validated VSS demonstration is recorded under [DEMO-03](#demo-03--from-video-to-insight). See the [technical vertical assessment](validation.md#vertical-assessment-and-business-use-case-boundaries) for the scope behind the commercial use cases.

## DEMO-01 — Document-grounded question answering

| Field | Record |
|---|---|
| Business purpose | Evaluate answering questions against an approved document collection |
| Technical references | [TC-01](capabilities.md#tc-01--document-ingestion), [TC-02](capabilities.md#tc-02--retrieval-and-contextual-grounding), [TC-03](capabilities.md#tc-03--blackwell-targeted-inference) |
| Actually verified for this publication | Source defines the application components and configuration; earlier context reports PDF ingestion, retrieval and inference |
| Runtime demonstration status | Not independently verified for the reviewed source revision |
| Evidence | [EVD-RAG-001](validation.md#evd-rag-001--functional-rag-evidence): runtime artifacts pending |
| Reviewed run date / technical sign-off | Not available / not recorded |
| External background | [EXT-01 NVIDIA RAG](references.md#ext-01--nvidia-rag-blueprint), [EXT-03 Blackwell GPU](references.md#ext-03--nvidia-rtx-pro-6000-blackwell-server-edition) |

### Procedure to validate before an external live demonstration

1. Record the actual deployed revision, images, model profiles and hardware/software inventory privately; prepare a sanitized public summary.
2. Use an approved non-sensitive PDF sample with known content and a documented question set. Record source version and expected answer locations.
3. Record ingestion completion and failures. Submit representative questions and retain the returned content needed to assess retrieval and generation.
4. Have a reviewer compare answers with the approved sources. Test missing information, conflicting or outdated sources and out-of-scope questions; record errors as well as successful responses.
5. Verify any source-attribution feature before showing it. If retrieved context is not visible in the interface, use an approved sanitized evidence method; do not claim a citation feature from the architecture alone.
6. Record observations, limitations, run date and review outcome. Test again on the current revision before representing the result as current.

This is a proposed validation procedure, not a record of steps executed. Performance, accuracy, document permissions, regulated-data suitability and customer benefit remain outside any proven result here.

## DEMO-02 — Deployment and lifecycle walkthrough

| Field | Record |
|---|---|
| Business purpose | Explain how the adapted application deployment is represented in Cisco Stack Automation and identify remaining operational work |
| Technical reference | [TC-04](capabilities.md#tc-04--cisco-stack-automation-application-workflow) |
| Actually verified for this publication | Source dependency order, configuration overrides, manual onboarding prerequisite, proxy correction implementation and storage cleanup safeguards |
| What can be shown from this publication | Sanitized logical topology, compatibility matrix and source-review findings as a documentation walkthrough |
| Live execution status | Complete deployment, repeatable redeployment and destruction/recovery not independently verified |
| Evidence | [EVD-SA-001](validation.md#evd-sa-001--deployment-and-lifecycle-evidence), [EVD-PVC-001](validation.md#evd-pvc-001--storage-lifecycle-evidence) |
| Reviewed run date / technical sign-off | No laboratory execution date or sign-off recovered |
| External background | [EXT-02 Stack Automation](references.md#ext-02--cisco-stack-automation), [EXT-05 OpenShift](references.md#ext-05--red-hat-openshift) |

### Walkthrough and future execution scope

Explain manual platform onboarding, GPU capacity qualification, private credential preparation, application deployment, optional presentation authentication and the proxy correction. Show the source-derived diagrams and explain which dependencies remain unresolved in the runtime inventory.

For future execution evidence, record a fresh deployment and functional smoke test, then a separate repeat deployment. Storage destruction tests must use authorized disposable data and a recovery plan. Validate audit-only behavior, retention, environment scoping, failure stops and storage/backend outcomes separately. A successfully completed orchestrator task alone is insufficient to prove correct answers, secure operation, restored data or reclaimed backend capacity.

This publication does not execute deployment or termination, provide access instructions or claim a zero-touch lifecycle. Laboratory validation and any demonstration approval are separate from the act of publishing this documentation.


## DEMO-03 — From Video to Insight

| Field | Record |
|---|---|
| Catalog entry | SAIF-AI-002 — NVIDIA Video Search and Summarization (VSS) |
| Business purpose | Make recorded video easier to search, summarize and discuss through questions about events |
| Technical reference | [TC-05](capabilities.md#tc-05--video-intelligence) |
| Demonstration status | **VALIDATED DEMONSTRATION** — recorded functional demonstration confirmed by the catalog owner |
| OpenShift deployment | **VALIDATED** in prior laboratory work on the existing configuration |
| Live execution status | Previously validated; confirm session availability under the shared GPU scheduling arrangement |
| Reproducibility | **FURTHER TESTING** |
| Evidence | [EVD-VSS-001](validation.md#evd-vss-001--video-intelligence-demonstration-evidence) |
| Automation | Existing start/stop procedures documented and exercised in prior work; [private Stack Automation blueprint planned](roadmap.md#rm-002-project) |
| External background | [EXT-07 NVIDIA VSS](references.md#ext-07--nvidia-video-search-and-summarization), [EXT-05 OpenShift](references.md#ext-05--red-hat-openshift) |

### Technical scope and evidence provenance

The catalog owner's approved VSS description in the prior working context confirms video search, summaries and questions about recorded events, supported by application and infrastructure demonstration recordings. Existing OpenShift workloads and controlled shutdown/GPU release were also validated in that prior laboratory context. This catalog update records that owner-confirmed validation; it does not claim a new live test or independent replay of the video artifacts on 4 November 2026. Approved public recording links have not yet been supplied.

The demonstrated configuration uses Cisco GPU-enabled infrastructure, Red Hat OpenShift, NVIDIA VSS and supporting inference/retrieval services. Component versions and model profiles require a separate recorded compatibility inventory. No new VSS release, real-time analytics feature, alerting function or production integration is inferred from current upstream documentation.

### Session preparation and further testing

Confirm the approved recording or live session scope, software configuration and available resources with the laboratory team. The recorded operating arrangement schedules VSS and another agent demonstration separately on shared resources. Do not infer simultaneous operation. Keep environment details and lifecycle procedures private.

Further tests should reproduce video search, summarization and Q&A using official vendor examples or controlled synthetic content compatible with the current architecture. Record expected answers/events, observed results, errors, reset/restart and reviewer decisions. Do not run performance, throughput, capacity or production-scale load benchmarks. Detailed acceptance for future automation belongs to [RM-002](roadmap.md#rm-002-project).

**Identifier continuity:** DEMO-03 is the catalog's sequential demonstration ID; the earlier planning alias was DEMO-VSS-001. Both refer to this single record.
