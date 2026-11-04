# Contributing

> **UNDER VALIDATION — PARIS BSC LABORATORY**
>
> RAG pilot status. **VSS: VALIDATED DEMONSTRATION**. Status and evidence are specific to each entry.

This repository publishes English-language capability documentation. Application code, manifests, operational scripts, cluster access and raw evidence belong in the independent restricted engineering workflow.

## Scope and structure

The catalog includes SAIF-AI-001, the NVIDIA RAG pilot adapted for RTX PRO 6000 Blackwell through Cisco Stack Automation, and SAIF-AI-002, the validated NVIDIA VSS demonstration. Track each entry's status and evidence separately; do not add other catalog entries under either entry's evidence. A future Hyperfabric entry requires a separate scope and its own validation records.

Keep executive and business content ahead of architecture and technical details. Maintain stable TC, DEMO, EVD and EXT identifiers. Each business use case must link to enabling technical capabilities, the actual demonstration/evidence status and primary external documentation. Label potential vertical applications separately from tested demonstrations.

## Reader experience and editorial model

Follow the [navigation guide](docs/navigation.md) for the document map and identifier conventions. Executive and business pages lead with purpose, audience, positioning and potential value. Show the relevant entry status and concise scope; shared pages distinguish RAG from VSS. Use neutral DEMO link labels in commercial tables. Keep detailed test procedures, dataset coverage, missing evidence and vertical-specific technical boundaries in the technical assessment pages, with direct links through the demo records. Do not present unverified outcomes as successful or hide material use constraints.

Use stable SAIF-AI, UC, TC, DEMO, VAL, EVD, EXT and RM identifiers in their documented sequence scopes. IDs identify records rather than execution results or maturity. Preserve existing paths and anchors; add navigation to new documents and link each record to its parent solution. Keep the capability → demonstration → external-documentation chain attached to each business opportunity.

## Claims and evidence

Distinguish source configuration, historical reports, test definitions and observed runtime results. Never invent versions, test dates, reviewers, approvals or metrics. A metadata label is not an approval. A public vendor demo is not Paris BSC evidence. A newer source revision does not inherit a previous runtime result automatically.

Changes to validation status must include the evidence requirements in the [validation ledger](docs/validation.md). Update affected commercial claims, capability records, demo records, component matrix and limitations together. Record actual failures and manual steps. Keep the status banner until evidence and applicable laboratory review support a change.

## Publication review

1. Confirm authorization to disclose each fact and artifact. Use primary sources and exact reviewed revisions.
2. Rewrite operational material as an abstract functional description. Publish no actual addresses, hostnames, internal domains, credentials, secrets, configuration exports, remote-access details, administrative paths or exploitable network topology.
3. Check screenshots, diagrams, document content, logs, filenames, metadata and Git history for sensitive material. Do not upload raw evidence for later redaction.
4. Check internal links and reference anchors; verify external links and that the cited source actually supports the claim.
5. Review both the rendered presentation and the plain source. Record review date, scope and limitations; obtain the applicable technical evidence review before claiming a tested outcome.

For non-sensitive documentation improvements, open an issue or pull request describing the claim and proposed wording. Report security matters privately as described in [SECURITY](SECURITY.md). This repository does not accept deployment requests or issue-based access requests to the private laboratory.


## Functional validation scope

Use official vendor examples or controlled synthetic content for functionality, compatibility, expected behavior, accuracy and reproducibility. Performance, throughput, capacity and production-scale load benchmarking are outside the BSC validation program. Retain validated demonstration status separately from future automation progress.
