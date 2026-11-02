# Contributing

> **UNDER VALIDATION — PARIS BSC LABORATORY**

This repository publishes English-language capability documentation. Application code, manifests, operational scripts, cluster access and raw evidence belong in the independent restricted engineering workflow.

## Scope and structure

The initial scope is only SAIF-AI-001, the NVIDIA RAG pilot adapted for RTX PRO 6000 Blackwell through Cisco Stack Automation. Do not add other catalog entries under the initial pilot's evidence. A future Hyperfabric entry requires a separate scope and its own validation records.

Keep executive and business content ahead of architecture and technical details. Maintain stable TC, DEMO, EVD and EXT identifiers. Each business use case must link to enabling technical capabilities, the actual demonstration/evidence status and primary external documentation. Label potential vertical applications separately from tested demonstrations.

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
