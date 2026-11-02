# Business opportunity playbook

> **UNDER VALIDATION — PARIS BSC LABORATORY**

All six opportunities below are **potential applications** of SAIF-AI-001. None has a Paris BSC vertical-specific demonstration or measured business outcome in the reviewed evidence. TC records describe the enabling mechanism, DEMO records disclose the verified scope, and EXT records provide background. This three-reference chain must remain attached when reusing a case in sales material.

## Financial services — internal policy and product knowledge

**Problem and audience:** operations and enablement teams need to locate the current approved policy or product rule in a large document set. The potential value is less effort navigating documents and more consistent source checking. The economic buyer could be an operations leader, supported by knowledge management and IT.

**Discovery:** who owns the authoritative version? Which staff may see each policy? How are superseded documents removed? Is the expected answer a passage lookup or an interpretation that requires a specialist? Is customer or transaction data unnecessary for the trial?

**Bounded evaluation:** use synthetic or public policy examples and a fixed set of staff questions. Have policy owners review relevance, unsupported answers, missing information and ambiguity against manual lookup. No financial advice, automated eligibility decision, regulatory interpretation or compliance approval is demonstrated. Access entitlements, auditability and jurisdiction-specific obligations need separate assessment.

**Three references:** [TC-01 ingestion](capabilities.md#tc-01--document-ingestion), [TC-02 retrieval](capabilities.md#tc-02--retrieval-and-contextual-grounding), [TC-03 inference](capabilities.md#tc-03--blackwell-targeted-inference) → [DEMO-01 / EVD-RAG-001: historical report; evidence pending](demonstrations.md#demo-01--document-grounded-question-answering) → [EXT-01 NVIDIA RAG](references.md#ext-01--nvidia-rag-blueprint), [EXT-04 NIST AI RMF](references.md#ext-04--nist-ai-risk-management-framework).

## Manufacturing — maintenance and technical documentation

**Problem and audience:** service engineers search manuals, revisions and maintenance guidance for a specific product. Potential value is quicker identification of the applicable source, with engineers retaining responsibility for the procedure. A service engineering or after-sales leader is a plausible sponsor.

**Discovery:** how are model, serial range, document version and language represented? Do scanned pages, diagrams or tables carry essential instructions? What happens when manuals disagree? Are proprietary designs excluded from the initial corpus?

**Bounded evaluation:** use approved sample manuals and questions that require distinguishing revisions and refusing unsupported instructions. Assess retrieval relevance and wrong-version answers with domain reviewers. OCR, diagram understanding, multilingual accuracy, predictive maintenance and machine control are not validated. The assistant must not be positioned as a safety control or autonomous maintenance authority.

**Three references:** [TC-01](capabilities.md#tc-01--document-ingestion), [TC-02](capabilities.md#tc-02--retrieval-and-contextual-grounding), [TC-03](capabilities.md#tc-03--blackwell-targeted-inference) → [DEMO-01: generic workflow only; no sector evidence](demonstrations.md#demo-01--document-grounded-question-answering) → [EXT-01 NVIDIA RAG](references.md#ext-01--nvidia-rag-blueprint), [EXT-03 GPU platform](references.md#ext-03--nvidia-rtx-pro-6000-blackwell-server-edition).

## Healthcare — non-clinical administrative knowledge

**Problem and audience:** administrative staff navigate approved operational procedures and staff guidance. Potential value is easier access to the relevant source. Administration and IT could sponsor a bounded knowledge-access evaluation.

**Discovery:** can the task be evaluated without patient, employee or other personal data? Which procedure owner reviews answers? Can clinical questions be excluded and routed to qualified staff? What approval is needed before using any internal content?

**Bounded evaluation:** use non-sensitive administrative examples and test both supported lookups and out-of-scope questions. Record relevance and inappropriate clinical responses for review. Diagnosis, treatment, patient triage, patient-data processing, clinical accuracy and healthcare compliance are outside this pilot's demonstrated scope.

**Three references:** [TC-01](capabilities.md#tc-01--document-ingestion), [TC-02](capabilities.md#tc-02--retrieval-and-contextual-grounding), [TC-03](capabilities.md#tc-03--blackwell-targeted-inference) → [DEMO-01: no healthcare validation](demonstrations.md#demo-01--document-grounded-question-answering) → [EXT-01 NVIDIA RAG](references.md#ext-01--nvidia-rag-blueprint), [EXT-04 NIST AI RMF](references.md#ext-04--nist-ai-risk-management-framework).

## Public sector — policy and guidance navigation

**Problem and audience:** staff need to find applicable published guidance across document collections. Potential value is a clearer route to authoritative material; service delivery and digital transformation teams are potential sponsors.

**Discovery:** which source and publication date govern? Are accessible formats and multiple languages required? Which questions require a responsible official's decision? How will corrections and withdrawals reach the index?

**Bounded evaluation:** use public documents and test source relevance, outdated guidance and unanswered questions with service experts. Citizen eligibility decisions, legal advice, accessibility conformance and regulatory compliance are not validated. Human review remains necessary for decisions affecting people.

**Three references:** [TC-01](capabilities.md#tc-01--document-ingestion), [TC-02](capabilities.md#tc-02--retrieval-and-contextual-grounding), [TC-03](capabilities.md#tc-03--blackwell-targeted-inference) → [DEMO-01: no public-sector validation](demonstrations.md#demo-01--document-grounded-question-answering) → [EXT-01 NVIDIA RAG](references.md#ext-01--nvidia-rag-blueprint), [EXT-04 NIST AI RMF](references.md#ext-04--nist-ai-risk-management-framework).

## Retail and distribution — product and support knowledge

**Problem and audience:** sales and support teams search product specifications and support documents. Potential value is easier source lookup during an interaction. Support operations or sales enablement could own an evaluation.

**Discovery:** how frequently do specifications change? Are prices, stock and customer contracts outside the corpus? Which product attributes must never be inferred? Who approves answers before they are reused externally?

**Bounded evaluation:** use an approved static sample catalog and test product disambiguation, missing attributes and superseded specifications. Compare against manual source lookup. Live inventory, prices, order execution, CRM integration, suitability recommendations and revenue impact are not validated.

**Three references:** [TC-01](capabilities.md#tc-01--document-ingestion), [TC-02](capabilities.md#tc-02--retrieval-and-contextual-grounding), [TC-03](capabilities.md#tc-03--blackwell-targeted-inference) → [DEMO-01: no retail validation](demonstrations.md#demo-01--document-grounded-question-answering) → [EXT-01 NVIDIA RAG](references.md#ext-01--nvidia-rag-blueprint), [EXT-04 NIST AI RMF](references.md#ext-04--nist-ai-risk-management-framework).

## IT services — runbooks and platform enablement

**Problem and audience:** service engineers need to find approved troubleshooting guidance; platform teams also need to understand the dependencies of an AI application. Potential value is clearer knowledge navigation and a better-scoped deployment service. Service delivery and platform engineering are potential sponsors.

**Discovery:** can runbooks be sanitized before ingestion? Do they contain credentials, customer names or administrative access details? What steps still require an authorized platform operator? Who owns upgrades, storage retention and restoration?

**Bounded evaluation:** use synthetic runbooks, test retrieval and human review, then review the deployment dependency sequence separately. Source-defined automation does not establish repeatable execution. Autonomous remediation, full infrastructure provisioning, monitoring integrations, automatic recovery and a complete zero-touch lifecycle are not demonstrated.

**Three references:** [TC-01–TC-04](capabilities.md) → [DEMO-01: runtime evidence pending](demonstrations.md#demo-01--document-grounded-question-answering), [DEMO-02: source walkthrough verified; lifecycle execution pending](demonstrations.md#demo-02--deployment-and-lifecycle-walkthrough) → [EXT-01 NVIDIA RAG](references.md#ext-01--nvidia-rag-blueprint), [EXT-02 Stack Automation](references.md#ext-02--cisco-stack-automation), [EXT-05 OpenShift](references.md#ext-05--red-hat-openshift).

## Shared qualification and proof-of-value plan

| Qualification area | Information to agree before a customer evaluation | Value question |
|---|---|---|
| Sponsor and task | Named business owner, users, bounded workflow and current source-finding process | Which recurring information task warrants investment? |
| Corpus | Rights to use content, sensitivity, formats, languages, versions and update owner | Is the knowledge sufficiently authoritative and maintainable? |
| Answer assessment | Expert-reviewed questions, expected sources, refusal cases and error severity | What improvement would users consider useful? |
| Access and governance | Identity, document permissions, logs, retention and review responsibilities | Can the intended audience use it appropriately? |
| Platform | GPU/model fit, entitlements, approved dependencies, storage and operations owner | Can the application be supported within the customer's constraints? |
| Baseline and economics | Manual-search baseline, proposed measurement method and customer-defined thresholds | Would observed benefit justify implementation and operating cost? |
| Decision | Explicit go, revise or stop criteria and accountable decision maker | What evidence is needed to proceed beyond the trial? |

Proposed measures include task completion, source relevance, unsupported-answer frequency, user-rated usefulness and observed response time under a defined load. These are evaluation suggestions, **not Paris BSC measurements or promised improvements**. Agree the measurement protocol and acceptance thresholds with the customer; publish only reviewed results that can be safely disclosed.
