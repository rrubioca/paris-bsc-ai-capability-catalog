# Roadmap

> **PLANNED — FUTURE WORK, NOT A VALIDATED CAPABILITY**
>
> Last reviewed: **3 November 2026**. This page describes intended evaluation work. No agent-security runtime evidence, compatibility pass or successful enforcement result is claimed.
>
> The existing RAG pilot retains its separate status: **UNDER VALIDATION — PARIS BSC LABORATORY**.

[Catalog home](../README.md) · [Navigation guide](navigation.md) · [Current pilot evidence](validation.md) · [Publication boundary](../SECURITY.md)

## Purpose and status

This roadmap gives Cisco, partners and TD SYNNEX visibility into future Paris BSC work. It is a project proposal, not a delivery commitment, a supported product combination or a demonstration booking offer. External demonstrations and vendor documentation inform the proposal; they are not Paris BSC validation evidence. The existing NVIDIA RAG pilot, its evidence and its implementation are outside this project's change scope.

| Project | Status | Next gate |
|---|---|---|
| RM-001 — Agent Security Demonstration | **PLANNED** | Confirm access to the official Cisco lab, its prepared simulation assets and an isolated non-production evaluation environment |

**PLANNED** means scoped work awaiting execution. **IN PROGRESS** requires an actual execution start, a dated activity record and an accountable BSC technical owner recorded privately. Documentation preparation alone does not establish implementation progress. All four phases below are PLANNED as of this review; no deployment or test execution was performed for this roadmap update. A phase's acceptance gate is passed only with reviewed evidence; record unmet gates and dependencies explicitly rather than implying completion.

## RM-001 project

**Agent Security Demonstration — OpenClaw / Cisco DefenseClaw / NVIDIA NemoClaw & OpenShell / Cisco AI Defense SaaS**

**Intended value:** establish a repeatable, bounded demonstration that helps partners discuss agent tool use, isolation, policy inspection and visibility with customers. The evaluation should make the division of responsibilities observable: OpenClaw runs the agent; DefenseClaw supplies agent security integrations; NemoClaw integrates agents with OpenShell sandboxes and managed inference; local NVIDIA NIM is the target inference service; Cisco AI Defense SaaS is the planned central inspection/policy integration. These are component roles documented by the vendors, not proof that the combined BSC design works. See the [verified external references](#external-references).

**Mandatory scope:** use only the official Cisco lab's prepared attacks, synthetic fixtures and simulation tools. **Do not develop custom attacks. Do not use production systems, real customer data or production integrations.** If a required scenario or asset is unavailable, record it as pending and seek the official lab material through the established Cisco relationship. Do not replace it with a newly developed attack. Test targets and tools must remain disposable and simulated throughout all phases.

**Target platform for Phase 2:** BSC OpenShift **4.21** with NVIDIA **Blackwell** GPU resources and local NIM. These are evaluation targets supplied for this proposal, not a newly inspected runtime inventory. Component releases, model and GPU profile will be selected and recorded during evaluation; none is approved by this page.

### Phase 1 — Reproduce the official Cisco OpenClaw Security Lab

**Status: PLANNED.** Start from the [Cisco DevNet lab and its published walkthrough](#cisco-lab-and-defenseclaw). Reproduce the prepared guardrails, tool inspection, install scanning and CodeGuard scenarios in an isolated, non-production environment. Use the supplied simulation assets and synthetic data, preserving scenario provenance. Do not copy attack payloads or runnable lab assets into this public catalog.

**Dependencies:** working access to the full lab, availability of its prepared fixtures, permitted component/model access, and a disposable evaluation environment. Check which exercises require external services, credentials or SaaS entitlements before starting; Phase 1 is not assumed to be entirely offline or independent of Phase 3. Mark unavailable exercises pending.

**Acceptance criteria:**

1. Record the lab revision, component versions, scenario list, fixture provenance and required services privately; verify all targets are synthetic and isolated.
2. Reproduce the lab's baseline and protected paths where supplied. Record expected versus observed outcomes for each of the four areas, including failures, gaps and manual steps. A policy verdict alone is not evidence that the attempted action was prevented.
3. Demonstrate reset and repeatability of the supplied scenarios, with reviewed results and no interaction with production assets.

**Deliverables:** private reproduction runbook and evidence matrix; public sanitized progress summary stating precisely which official scenarios were reproduced and which remain pending. This gate establishes a lab reproduction only, not OpenShift/NemoClaw compatibility.

### Phase 2 — Evaluate NemoClaw, OpenShell and local NIM on the BSC platform

**Status: PLANNED.** Use the Phase 1 scenario baseline to evaluate an integrated sandboxed agent with local inference on OpenShift 4.21 and Blackwell. Prerequisite research can begin earlier; integrated scenario validation depends on a reproducible Phase 1 baseline.

**Dependencies and compatibility gates:**

| Area | Required validation before acceptance |
|---|---|
| Versions and platform | Pin OpenClaw, DefenseClaw connector, NemoClaw, OpenShell and NIM/model revisions. Compare version-matched documentation with the actual OpenShift, node kernel and container runtime inventory. |
| Prerequisites and privileges | Check Agent Sandbox controller/CRDs, admission rules, service-account/RBAC scope, SCC/SELinux behavior, non-root identities, storage ownership, seccomp and Landlock runtime probes. Document installation privileges separately from agent runtime privileges. |
| Sandbox | Prove effective filesystem, process and network boundaries with the official lab fixtures. Verify CNI enforcement of ingress/egress NetworkPolicy; configuration presence alone is insufficient. |
| Local inference | Validate GPU operator/driver/runtime prerequisites, NIM entitlement, model license, memory/profile fit and agent API/tool-calling compatibility. Verify inference actually reaches local NIM and document any other external service/data flows privately. |
| Combined security path | Verify DefenseClaw interception still applies inside the selected sandbox integration; test policy precedence, audit correlation and recovery without broadening agent privileges. |
| Operations | Validate storage lifecycle, resource quotas, restart, cleanup/reset and coexistence with other lab work without altering the RAG pilot. |

NVIDIA's current [OpenShift guide](https://docs.nvidia.com/openshell/kubernetes/openshift) documents non-root operation without a privileged SCC or added Linux capabilities, subject to runtime probes and network-policy enforcement. This is vendor guidance, not an observed BSC result. Do not assume a privileged deployment is necessary or relax cluster controls merely to make the demo start. An unmet prerequisite means a documented compatibility gap and a go/no-go decision.

**Acceptance criteria:** complete the compatibility matrix with pass/fail/pending evidence for every area; run the official lab scenarios through the combined path with local NIM; verify containment and reset; record limitations and any approved prerequisite work. OpenShift version or GPU family alone cannot satisfy this gate. A supported OpenShell installation also does not establish support for the entire NemoClaw/DefenseClaw/NIM combination.

**Deliverables:** private bill of materials, compatibility report, sandbox/privilege review and integration evidence; public abstract compatibility and limitations summary after disclosure review.

### Phase 3 — Integrate Cisco AI Defense SaaS

**Status: PLANNED — awaiting tenant enablement.** Planning assumption as of **3 November 2026**: Cisco is expected to enable the tenant **next week, 9–15 November 2026**. This is the project owner's expectation, not a confirmed Cisco provisioning date or a delivery guarantee. Update the dependency when actual availability is confirmed.

**Dependencies:** Cisco tenant enablement, appropriate entitlements/roles, supported integration method, approved connectivity and data-handling scope. Confirm the actual tenant/API capabilities with Cisco. Validate the Phase 1 path first as applicable; the combined demonstration also depends on Phase 2 passing its compatibility gates. SaaS integration preparation may proceed in parallel without claiming a completed combined design.

**Acceptance criteria:**

1. Confirm the intended application/agent integration and policy scope privately; verify with harmless synthetic requests that the intended traffic is inspected.
2. Replay only the official lab's prepared scenarios and benign controls. Correlate configured policy, observed SaaS visibility, local connector decisions and actual tool/model outcomes. Separate alert-only, approval and enforcement behavior where supported by the chosen versions and tenant.
3. Test the documented unavailable-service/error behavior using the permitted lab procedure; record visibility gaps and whether actions proceed, fail or require intervention. Do not invent a fault-injection attack if the official materials lack a suitable procedure.
4. Review results, repeatability, false positives and uncovered paths. Claim a block only for a specific scenario and tested configuration where evidence shows the action was prevented. No general blocking, exfiltration prevention or complete protection promise is authorized by this plan.

**Deliverables:** private integration/policy record, correlated evidence and results review; public sanitized scenario/outcome summary with explicit gaps. SaaS inspection may involve external processing even with local NIM; local inference does not establish air-gapped operation or that all data stays on premises.

### Phase 4 — Create a private Cisco Stack Automation blueprint

**Status: PLANNED.** After the applicable Phase 1–3 gates pass, package the reviewed integration as a **PRIVATE Cisco Stack Automation blueprint for internal BSC use only**. This is a proposed BSC-authored deliverable; no existing official joint blueprint, vendor certification or support approval is asserted.

**Dependencies:** accepted bill of materials and outcomes, required Stack Automation entitlement/integration support, private engineering storage, internal access ownership and secure secret handling.

**Acceptance criteria:** deploy into a fresh isolated non-production evaluation environment; validate prerequisites before deployment; reproduce the accepted official lab scenarios and evidence; verify reset/cleanup, failure handling and a documented rerun from the pinned revision. Keep secrets outside source and capture manual steps and unresolved limitations. Require BSC technical review before internal use is treated as repeatable.

**Deliverables:** private blueprint, operational code/configuration, internal runbook and evidence pack. **Do not publish the blueprint or operational code in this public catalog.** Publish only an approved, sanitized description of purpose, status, tested scope and limitations. Do not link private operational locations or access instructions here.

## Dependencies, risks and decision points

The main sequence is **official lab baseline → platform integration → SaaS validation → private automation**. Research and tenant preparation may overlap, but no later gate inherits a pass from a document, upstream example or earlier component test.

| Risk or dependency | Decision / treatment |
|---|---|
| Official lab access or prepared assets unavailable | Keep affected scenarios pending; obtain official materials rather than authoring attacks. |
| Kernel, admission, sandbox or connector mismatch | Stop the affected integration; record the incompatible versions and review with the relevant vendor. No implicit privilege exception. |
| Blackwell/NIM model profile, entitlement or capacity gap | Select and validate an eligible profile within available resources before claiming local inference. |
| Tenant delay, missing feature or integration restriction | Keep Phase 3 pending; revise the plan against actual Cisco availability. |
| Verdict recorded but action still executes, or inspection can be bypassed | Record a failed or uncovered control; withhold prevention claims and investigate privately. |
| External processing, logging or artifact acquisition exposes data | Use synthetic content only; review data flows and retention privately before execution. |
| Version drift, cleanup failure or resource contention | Pin artifacts, revalidate affected gates and prove reset without impacting other pilots. |
| Public material mistaken for readiness or internal details disclosed | Keep roadmap labels separate; review summaries under the catalog security policy. |

## Evidence and publication rules

Keep raw evidence, exact environment identities, configuration, logs, credentials, operational paths and the blueprint in the private internal workflow. This page publishes no IP addresses, internal FQDNs, network access paths or exploitable topology. Public references below point to vendor/partner documentation, not BSC access.

For every future status change, record the date, executed scope, pinned revisions, expected/observed outcome, evidence location and technical review privately. Publish only an authorized sanitized summary. No runtime results exist in this roadmap update. Promotion into a capability or demonstration record requires separate reviewed evidence under the [catalog validation rules](validation.md); completing planning or reproducing another organization's demo is insufficient.

## External references

Links and supporting content checked on **3 November 2026**. These sources describe external components or demonstrations. Floating documentation can change; recheck version-matched material before implementation. They do not certify the target BSC combination or establish BSC results.

### Cisco lab and DefenseClaw

- [Cisco DevNet: OpenClaw agent security and hands-on lab](https://blogs.cisco.com/cisco-devnet/openclaw-ai-agent-security) describes the four security areas and the prepared demonstration paths. It links to the [official OpenClaw Security Lab](https://developer.cisco.com/learning/labs/OpenClawSecurity/). The lab landing page resolves, but requires JavaScript; the full exercise assets were not independently inspected for this documentation update. Their availability and revision are Phase 1 entry requirements.
- [Cisco DefenseClaw repository](https://github.com/cisco-ai-defense/defenseclaw) and [OpenClaw integration reference](https://cisco-ai-defense.github.io/defenseclaw/docs/connectors/openclaw-integration/) document the agent plugin, model/tool inspection and policy/audit flow. Check the connector's version compatibility before reproduction.
- [Cisco: securing enterprise agents with NVIDIA and Cisco AI Defense](https://blogs.cisco.com/ai/securing-enterprise-agents-with-nvidia-and-cisco-ai-defense) explains the proposed division between runtime isolation and AI security. Its illustrative scenario is not a Paris BSC test.
- [Cisco AI Defense](https://www.cisco.com/site/us/en/products/security/ai-defense/index.html) provides product context. Actual tenant capabilities, policies, coverage and enforcement remain Phase 3 validation items.

### NVIDIA platform and inference

- [NVIDIA NemoClaw documentation](https://docs.nvidia.com/nemoclaw/latest/) describes agent integration with OpenShell sandboxes and managed inference. It does not establish BSC deployment or joint compatibility.
- [NVIDIA OpenShell overview](https://docs.nvidia.com/openshell/about/overview), [support matrix](https://docs.nvidia.com/openshell/about/support-matrix) and [OpenShift guide](https://docs.nvidia.com/openshell/kubernetes/openshift) describe runtime boundaries, prerequisites and OpenShift considerations. Validate actual kernel/runtime probes, controller dependencies and effective network policies rather than inferring compatibility from version labels.
- [NVIDIA NIM for LLMs: supported models, documentation version 1.15.0](https://docs.nvidia.com/nim/large-language-models/1.15.0/supported-models.html) distinguishes models, GPU profiles and tool-calling features and lists RTX PRO 6000 Blackwell Server Edition. This version is a reviewed reference, not the selected BSC NIM release or an approval of every model on Blackwell.

### Partner precedent and automation context

- [ePlus AgenticOps](https://www.eplus.com/what-we-do/unleash-ais-full-potential/agentic-ops) describes its combination of Cisco Secure AI Factory, AI Defense, DefenseClaw, NVIDIA NemoClaw and OpenShell. Its [September 2026 demonstration account](https://www.eplus.com/what-we-believe/content-hub/blogs/2026/09/agenticops-the-new-way-to-run-it-and-security-operations) reports skill tampering, exfiltration and application remediation scenarios. These are ePlus's own claims, not independently reproduced BSC outcomes or an instruction to use production targets. Its operational scenarios and performance claims are not imported into BSC acceptance criteria.
- [Cisco Stack Automation data sheet](https://stackautomation.cisco.com/help/datasheet) describes custom blueprint composition. It does not certify this proposed private BSC blueprint.
