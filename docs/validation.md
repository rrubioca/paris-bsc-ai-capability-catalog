# Validation states and evidence ledger

> **UNDER VALIDATION — PARIS BSC LABORATORY**

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
