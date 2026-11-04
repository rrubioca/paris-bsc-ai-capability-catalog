# Validation states and evidence ledger

> **UNDER VALIDATION — PARIS BSC LABORATORY**
>
> RAG pilot status. **VSS: VALIDATED DEMONSTRATION**. Status and evidence are specific to each entry.

[Home](../README.md) · [Navigation guide](navigation.md) · [Demonstration overview](demo-overview.md)

Publication review date: **2 November 2026**. This is a documentation and source review date, not a laboratory test date. There are no published latency, throughput, accuracy, reliability, utilization, savings or return-on-investment measurements.

## Evidence vocabulary

| State | Meaning |
|---|---|
| SOURCE VERIFIED | The reviewed source contains the stated definition or implementation; runtime success is not implied |
| HISTORICALLY REPORTED | Earlier working context or source commentary describes a result; a complete primary evidence pack was not recovered |
| TEST DEFINITION PRESENT | Test code exists; no execution result is inferred |
| PENDING | The required verification is not available in the reviewed materials |

These states apply to specific claims, not blanket readiness. Engineering metadata containing a validation label is not treated as laboratory approval.

## Source and test status matrix

| ID | Check | State | Actual finding | Required next evidence |
|---|---|---|---|---|
| VAL-01 | Adapted blueprint provenance | SOURCE VERIFIED | Engineering revision v0.3.0 and commit inspected | Confirm exact deployed revision for each runtime result |
| VAL-02 | Blackwell configuration | SOURCE VERIFIED | GPU target, three NIM roles and LLM image override defined | Device inventory, compatible profiles/digests, runtime and driver versions |
| VAL-03 | PDF ingestion | HISTORICALLY REPORTED | Reported in earlier working context | Approved sample, procedure, success/failure observations and review |
| VAL-04 | Retrieval and generation | HISTORICALLY REPORTED | Reported in earlier working context | Questions, relevant source passages, returned answers and error review |
| VAL-05 | Proxy correction | SOURCE VERIFIED; HISTORICALLY REPORTED | Correction implemented; source describes temporary live patch as validated | Sanitized before/after result and automated replay on matching revision |
| VAL-06 | Namespace security onboarding | SOURCE VERIFIED | Manual authorized onboarding is a prerequisite | Reviewed service identity and permission scope; no privileges granted during publication |
| VAL-07 | Storage cleanup guard behavior | TEST DEFINITION PRESENT | Eleven isolated behavioral scenarios in test source using a simulated cluster client | Dated isolated test execution output and review; no pass count claimed |
| VAL-08 | Live cleanup and retention | PENDING | Engineering guide provides a sandbox procedure, not a completed run record | Separate disposable-environment tests, unrelated-data baseline and retained-data checks |
| VAL-09 | Backend reclamation and recovery | PENDING | Guide distinguishes claim deletion from backend reclamation and application-consistent recovery | Storage-owner verification and successful separate restore test |
| VAL-10 | Repeat deployment and lifecycle | PENDING | Source has dependency and termination hooks | Matching revision, repeated run records, failure behavior and manual-step disclosure |
| VAL-11 | Secure operation | PENDING | Authentication option and manual platform prerequisite are described | Transport, identity, authorization, secrets, logging and data-path assessment |
| VAL-12 | Vertical use cases and business value | PENDING | Commercial hypotheses documented | Customer-specific corpus, expert assessment and agreed benefit measurements |

The eleven isolated test definitions cover deletion, audit-only behavior, retained annotations, retained labels, foreign ownership, surviving scheduled-job references, surviving stateful-workload references, API failure, invalid data, changed resource identity and deletion conflict. They do not call a real cluster and do not establish live storage safety. They were **not executed as part of this publication**.

## Vertical assessment and business use case boundaries

This technical assessment retains the detailed coverage and scope behind the commercial opportunities. It adds no new test result. All six use cases are potential applications of the shared pilot; there is no reviewed vertical-specific runtime evidence or measured sector outcome in the publication materials. They remain within [VAL-12](#source-and-test-status-matrix). Dataset descriptions below are proposed evaluation inputs, not data already tested.

| Business reference | Proposed evaluation and outstanding checks | Technical boundaries |
|---|---|---|
| [UC-01 · Financial services](business-use-cases.md#financial-services--internal-policy-and-product-knowledge) | Synthetic/public policy examples; expert-reviewed questions, source relevance, unsupported answers, ambiguity and manual-lookup comparison; access entitlements, auditability and jurisdiction-specific assessment | No validated financial advice, automated eligibility decision, regulatory interpretation or compliance approval |
| [UC-02 · Manufacturing](business-use-cases.md#manufacturing--maintenance-and-technical-documentation) | Approved sample manuals; revision discrimination, wrong-version answers and unsupported instructions; OCR, diagrams, tables and multilingual assessment | Predictive maintenance and machine control unvalidated; the assistant is not a safety control or autonomous maintenance authority |
| [UC-03 · Healthcare](business-use-cases.md#healthcare--non-clinical-administrative-knowledge) | Non-sensitive administrative examples; supported lookups, out-of-scope/clinical questions and human referral | Diagnosis, treatment, triage, patient-data processing, clinical accuracy and healthcare compliance outside the demonstrated scope |
| [UC-04 · Public sector](business-use-cases.md#public-sector--policy-and-guidance-navigation) | Public documents; source relevance, outdated guidance, unanswered questions and expert review | Citizen eligibility decisions, legal advice, accessibility conformance and regulatory compliance unvalidated; responsible officials retain decision ownership |
| [UC-05 · Retail and distribution](business-use-cases.md#retail-and-distribution--product-and-support-knowledge) | Approved static sample catalog; product disambiguation, missing attributes, superseded specifications and manual-lookup comparison | Live inventory, prices, order execution, CRM integration, suitability recommendations and revenue impact unvalidated |
| [UC-06 · IT services](business-use-cases.md#it-services--runbooks-and-platform-enablement) | Synthetic/sanitized runbooks; retrieval and human review; deployment dependencies and repeatable lifecycle execution assessed separately | Autonomous remediation, full infrastructure provisioning, monitoring integration, automatic recovery and complete zero-touch lifecycle unvalidated |

Historical reports of PDF ingestion, retrieval and inference remain historical reports, not a reviewed runtime evidence pack. The engineering source contains Blackwell-related configuration, a proxy correction and storage lifecycle safeguards; no live cluster test was performed for the catalog publication. Current-revision repeatability, secure operation and lifecycle validation remain open, as detailed in the matrix above and EVD records below.

Technical qualification must assess identity/document authorization, transport, model entitlement, software/profile compatibility, approved artifact acquisition, storage and recovery ownership. Local inference does not establish air-gapped operation or that every dependency and data path remains on premises. External live demonstrations require the matching revision, reviewed evidence and applicable laboratory approval described below.

## EVD-RAG-001 — Functional RAG evidence

**Record status: evidence pending.** The record ID is a stable reference, not an existing attachment or successful result. Historical reports of ingestion, retrieval and inference cannot establish current-revision compatibility, accuracy or repeatability. No screenshots, transcripts, test corpus or technical sign-off were recovered for publication.

To complete this record, attach a sanitized corpus description, expected questions, observed ingestion and answer results, exact configuration identifiers, run date, errors and technical review. Exclude all private operational identifiers and document content without disclosure permission.

## EVD-SA-001 — Deployment and lifecycle evidence

**Record status: source review available; runtime evidence pending.** The reviewed definition establishes intended sequencing and configuration. It does not establish a successful deployment of v0.3.0 or repeated automated application of the proxy correction.

To complete this record, document executed stages and outcomes, remaining manual steps, exact deployed configuration, repeat-deployment outcome, failure behavior and a sanitized technical review. Keep operational records in the restricted engineering evidence store; publish only approved summaries.

## EVD-PVC-001 — Storage lifecycle evidence

**Record status: implementation and test definitions reviewed; execution evidence pending.** Storage deletion is the v0.3.0 blueprint default for eligible unused environment storage. Retention and audit-only logic exist, but live behavior, application-consistent backup/restore and backend reclamation are not established by the reviewed source.

Future verification must distinguish helper logic tests, actual cluster object disappearance, backend state and recovered application data. These are separate assertions requiring separate observations.

## Required evidence before changing demonstration status

For the exact scope being approved, require the deployed blueprint revision, resolved component versions and digests, hardware/software inventory, approved dataset and procedure, observed positive and negative results, sanitized supporting artifacts, test date, named responsible technical reviewer and recorded review decision. Confirm repeatability, operational dependencies and known limitations. A technical review and any required laboratory demonstration authorization must be recorded; neither is invented here.

Update TC, DEMO, compatibility, limitations and business references together. A change in one component does not automatically revalidate all previous outcomes. External vendor documentation and a code label cannot replace Paris BSC evidence.


## EVD-VSS-001 — Video intelligence demonstration evidence

**Record status: owner-confirmed validated demonstration; public evidence links awaiting approved publication assets.** This is the evidence record for **SAIF-AI-002 / DEMO-03**, separate from the RAG records above. Recorded functional demonstrations and prior OpenShift workload validation were confirmed by the catalog owner in the approved working context. No live environment test or independent video replay was performed for this documentation update on **4 November 2026**.

| Validation area | Assessment and boundary |
|---|---|
| Video search, summarization and Q&A | **VALIDATED** in the recorded BSC demonstration confirmed by the catalog owner |
| Demonstration recordings | **AVAILABLE** in the existing private demonstration material; no public URL approved or attached here |
| Existing OpenShift deployment health | **VALIDATED** in prior laboratory work; this entry does not report a fresh health probe |
| Controlled shutdown and GPU release | **VALIDATED** in prior laboratory work |
| Start/stop procedures | **DOCUMENTED AND EXERCISED** in the prior laboratory context |
| Component compatibility | **FUNCTIONALLY VALIDATED** on that configuration; exact version/profile matrix still to be captured |
| Demonstration reproducibility | **FURTHER TESTING** |
| Functional accuracy and expected behavior | **PLANNED** using vendor examples or controlled synthetic content |
| Automated Stack Automation deployment | **PLANNED** as a private blueprint under [RM-002](roadmap.md#rm-002-project) |
| Performance benchmarking | **OUT OF SCOPE** |

Retain recordings, raw workload observations, environment identities and operational procedures privately. When approved evidence can be published, add sanitized recording/results links here with the actual run date, configuration, scenario and technical review. The source for this update is the owner's confirmed demonstration and laboratory context; this page does not claim that the underlying artifacts were independently re-reviewed in this chat.

The VSS business opportunities UC-07–UC-11 are potential sector applications of the shared demonstration, not separately validated industry deployments or measured benefits. The recorded video-review narrative does not establish real-time monitoring, production integrations or autonomous safety/security decisions.

## BSC functional validation policy

Validation focuses on functionality, compatibility, expected behavior, functional accuracy and reproducibility. Use official vendor examples or controlled synthetic content suited to the actual architecture. **Performance, throughput, capacity and production-scale load benchmarking are outside the BSC validation program.** Record the tested configuration and scenario, expected/observed results, errors, limitations and review. This policy applies to both RAG and VSS and to future entries.
