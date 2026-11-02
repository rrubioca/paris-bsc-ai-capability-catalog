# Demonstration and walkthrough records

> **UNDER VALIDATION — PARIS BSC LABORATORY**

**Verified runtime demonstrations supported by a reviewed public evidence pack: none at initial publication.** The source-derived workflow below can be explained as a documentation walkthrough. Historical functional reports are preserved as reports, not promoted into validated current results. No vertical-specific scenario is validated.

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
