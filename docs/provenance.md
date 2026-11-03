# Engineering provenance and claim boundaries

> **UNDER VALIDATION — PARIS BSC LABORATORY**

[Home](../README.md) · [Navigation guide](navigation.md) · [Demonstration overview](demo-overview.md)

## Reviewed sources

| ID | Material reviewed | Scope and limitation |
|---|---|---|
| SRC-01 | Independent restricted engineering repository, main snapshot `2052f67997ee795dd0293ed6b84e9a3f849a592d` | Adapted blueprint v0.3.0; proxy correction; storage cleanup implementation; storage lifecycle guide; isolated cleanup test definitions; diagnostics and credential/storage helper sources. Source configuration is not deployed inventory. |
| SRC-02 | Earlier Secure AI Factory Demo working context | Reports Blackwell adaptation, Cisco UCS / OpenShift context, PDF ingestion, retrieval, inference and a proxy correction. A conversational report is not a primary runtime test record. |
| SRC-03 | Restricted engineering commit history | Confirms change sequence, not successful deployment or test execution. |
| EXT references | Public primary documentation listed in the [reference registry](references.md) | Background only; vendor documentation does not attest the Paris BSC implementation. |

Source review completed on 2 November 2026. No live laboratory connection, launch, termination or access change was performed. No engineering code or private Git history is copied into this catalog. Private source locations, operational identifiers and diagnostic contents remain undisclosed. The commit identifier above allows authorized maintainers to correlate the review privately without exposing an access path.

## Adaptation history confirmed in source

| Engineering milestone | What source history establishes | What it does not establish |
|---|---|---|
| Imported and renamed baseline | A dedicated RTX PRO 6000 Blackwell adaptation exists | Compatibility of the original unmodified upstream package |
| v0.1.3 | OpenShift, LLM NIM, object-store and proxy configuration changes introduced | That all changes were validated together at runtime |
| v0.1.4–v0.1.5 | Privileged namespace onboarding removed from application runner and documented as a prerequisite | Fully automated or least-privilege platform onboarding |
| v0.1.8 | Object-store persistence request changed to 20 GiB | Adequate capacity for any customer corpus |
| v0.1.9 | Credential structural preflight rejects a key identifier in place of a usable credential value | Remote registry authentication, valid entitlement or successful model download |
| v0.2.0 | Proxy correction integrated as a post-deployment step | Repeatable automated replay on the latest revision |
| v0.3.0 | Environment-scoped storage cleanup becomes the blueprint termination default, with retention safeguards and backup guidance | Successful live deletion, unrelated-data protection, capacity reclamation or recoverability |

The proxy source description says a temporary live configuration correction was validated. This catalog preserves that as a **reported observation**, since the dated supporting run artifacts and review were not recovered. Generic hardware sizing language retained in the source is not repeated as a validated Blackwell requirement.

## Evidence that was not available

No reviewed runtime bill of materials, driver inventory, model profile/digest list, sanitized functional transcript, full deployment execution record, lifecycle result, benchmark, signed technical review or laboratory demo authorization was recovered. The resolved upstream chart and helper package contents were not independently reviewed. Their source references are configuration facts only.

The source contains validation metadata. This is a source label, not an approval record. The public pilot status remains **UNDER VALIDATION — PARIS BSC LABORATORY**.
