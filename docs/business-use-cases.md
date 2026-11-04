# Business opportunity playbook

> **UNDER VALIDATION — PARIS BSC LABORATORY**
>
> RAG pilot status. **VSS: VALIDATED DEMONSTRATION**. Status and evidence are specific to each entry.

[Home](../README.md) · [Navigation guide](navigation.md) · [Demonstration overview](demo-overview.md)

The first six opportunities below are **potential applications** of SAIF-AI-001, the shared document-grounded Q&A pilot. [VSS video intelligence opportunities](#vss-video-intelligence-opportunities) follow under SAIF-AI-002. Use this playbook for customer discovery and positioning. The pilot is under laboratory validation; technical scope and detailed sector assessment are available in the linked demonstration and validation records.

Each case connects **business opportunity → enabling capability (TC) → demonstration record (DEMO) → external documentation (EXT)**. Keep these references when reusing a case in sales material. Potential benefits should be assessed against customer objectives and agreed measures.

## Financial services — internal policy and product knowledge

**Use case: UC-01**

**Problem and audience:** operations and enablement teams need to locate the current approved policy or product rule in a large document set. The potential value is less effort navigating documents and more consistent source checking. The economic buyer could be an operations leader, supported by knowledge management and IT.

**Discovery:** who owns the authoritative version? Which staff may see each policy? How are superseded documents removed? Is the expected answer a passage lookup or an interpretation that requires a specialist? Who approves the initial scope?

**Evaluation focus:** agree a policy-navigation task and representative questions with the policy owner. Compare the relevance and usefulness of returned information with the current lookup process. Position the opportunity around staff knowledge access and human-reviewed answers.

**Three references:** [TC-01 ingestion](capabilities.md#tc-01--document-ingestion), [TC-02 retrieval](capabilities.md#tc-02--retrieval-and-contextual-grounding), [TC-03 inference](capabilities.md#tc-03--blackwell-targeted-inference) → [DEMO-01 · Document Q&A](demonstrations.md#demo-01--document-grounded-question-answering) → [EXT-01 NVIDIA RAG](references.md#ext-01--nvidia-rag-blueprint), [EXT-04 NIST AI RMF](references.md#ext-04--nist-ai-risk-management-framework).

## Manufacturing — maintenance and technical documentation

**Use case: UC-02**

**Problem and audience:** service engineers search manuals, revisions and maintenance guidance for a specific product. Potential value is quicker identification of the applicable source, with engineers retaining responsibility for the procedure. A service engineering or after-sales leader is a plausible sponsor.

**Discovery:** how are model, serial range, document version and language represented? Do scanned pages, diagrams or tables carry essential instructions? What happens when manuals disagree? Are proprietary designs excluded from the initial corpus?

**Evaluation focus:** help engineers find the relevant manual and revision for a defined service task. Work with domain reviewers to assess source relevance, ease of navigation and usefulness in the existing maintenance workflow.

**Three references:** [TC-01](capabilities.md#tc-01--document-ingestion), [TC-02](capabilities.md#tc-02--retrieval-and-contextual-grounding), [TC-03](capabilities.md#tc-03--blackwell-targeted-inference) → [DEMO-01 · Document Q&A](demonstrations.md#demo-01--document-grounded-question-answering) → [EXT-01 NVIDIA RAG](references.md#ext-01--nvidia-rag-blueprint), [EXT-03 GPU platform](references.md#ext-03--nvidia-rtx-pro-6000-blackwell-server-edition).

## Healthcare — non-clinical administrative knowledge

**Use case: UC-03**

**Problem and audience:** administrative staff navigate approved operational procedures and staff guidance. Potential value is easier access to the relevant source. Administration and IT could sponsor a bounded knowledge-access evaluation.

**Discovery:** which administrative task should the evaluation address? Which procedure owner reviews answers? How are clinical questions referred to qualified staff? Who approves the content and evaluation scope?

**Evaluation focus:** select an administrative knowledge-access task with a procedure owner. Assess whether staff can locate useful guidance and identify when a question should be referred to the responsible team. Keep the positioning focused on non-clinical administrative knowledge.

**Three references:** [TC-01](capabilities.md#tc-01--document-ingestion), [TC-02](capabilities.md#tc-02--retrieval-and-contextual-grounding), [TC-03](capabilities.md#tc-03--blackwell-targeted-inference) → [DEMO-01 · Document Q&A](demonstrations.md#demo-01--document-grounded-question-answering) → [EXT-01 NVIDIA RAG](references.md#ext-01--nvidia-rag-blueprint), [EXT-04 NIST AI RMF](references.md#ext-04--nist-ai-risk-management-framework).

## Public sector — policy and guidance navigation

**Use case: UC-04**

**Problem and audience:** staff need to find applicable published guidance across document collections. Potential value is a clearer route to authoritative material; service delivery and digital transformation teams are potential sponsors.

**Discovery:** which source and publication date govern? Are accessible formats and multiple languages required? Which questions require a responsible official's decision? How will corrections and withdrawals reach the index?

**Evaluation focus:** select a guidance-navigation task and assess source relevance, currency and clarity with service experts. Position the assistant as support for staff finding authoritative information, with responsible officials retaining decision ownership.

**Three references:** [TC-01](capabilities.md#tc-01--document-ingestion), [TC-02](capabilities.md#tc-02--retrieval-and-contextual-grounding), [TC-03](capabilities.md#tc-03--blackwell-targeted-inference) → [DEMO-01 · Document Q&A](demonstrations.md#demo-01--document-grounded-question-answering) → [EXT-01 NVIDIA RAG](references.md#ext-01--nvidia-rag-blueprint), [EXT-04 NIST AI RMF](references.md#ext-04--nist-ai-risk-management-framework).

## Retail and distribution — product and support knowledge

**Use case: UC-05**

**Problem and audience:** sales and support teams search product specifications and support documents. Potential value is easier source lookup during an interaction. Support operations or sales enablement could own an evaluation.

**Discovery:** how frequently do specifications change? Are prices, stock and customer contracts outside the corpus? Which product attributes must never be inferred? Who approves answers before they are reused externally?

**Evaluation focus:** select a product-information task and compare source lookup with the current support process. Assess product disambiguation, information relevance and usefulness for sales or support staff.

**Three references:** [TC-01](capabilities.md#tc-01--document-ingestion), [TC-02](capabilities.md#tc-02--retrieval-and-contextual-grounding), [TC-03](capabilities.md#tc-03--blackwell-targeted-inference) → [DEMO-01 · Document Q&A](demonstrations.md#demo-01--document-grounded-question-answering) → [EXT-01 NVIDIA RAG](references.md#ext-01--nvidia-rag-blueprint), [EXT-04 NIST AI RMF](references.md#ext-04--nist-ai-risk-management-framework).

## IT services — runbooks and platform enablement

**Use case: UC-06**

**Problem and audience:** service engineers need to find approved troubleshooting guidance; platform teams also need to understand the dependencies of an AI application. Potential value is clearer knowledge navigation and a better-scoped deployment service. Service delivery and platform engineering are potential sponsors.

**Discovery:** which runbooks are most useful to service teams? Who owns the authoritative guidance? How should the knowledge assistant fit the current support process? Which platform and service-delivery owners should join the discussion?

**Evaluation focus:** explore runbook knowledge access and the application deployment workflow as two complementary conversations. Assess the usefulness of retrieved guidance with service engineers, then scope platform dependencies and delivery responsibilities with the technical team.

**Three references:** [TC-01–TC-04](capabilities.md) → [DEMO-01 · Document Q&A](demonstrations.md#demo-01--document-grounded-question-answering), [DEMO-02 · Deployment walkthrough](demonstrations.md#demo-02--deployment-and-lifecycle-walkthrough) → [EXT-01 NVIDIA RAG](references.md#ext-01--nvidia-rag-blueprint), [EXT-02 Stack Automation](references.md#ext-02--cisco-stack-automation), [EXT-05 OpenShift](references.md#ext-05--red-hat-openshift).

## VSS video intelligence opportunities

**SAIF-AI-002 — NVIDIA VSS** connects recorded video with search, summaries and questions about events. **Demonstration status: VALIDATED.** The opportunities below describe potential customer applications; customer value is assessed against the selected workflow and success criteria.

## Manufacturing video review

**Use case: UC-07**

**Problem and audience:** operations teams review industrial recordings to find relevant events. Potential value is less manual review effort and easier access to information for operational investigation.

**Discovery:** which event or process needs reviewing? Who interprets the recording and owns the resulting action?

**Evaluation focus:** select an operational video-review task and assess whether search, summaries and answers help the responsible team locate relevant information.

**Three references:** [TC-05 video intelligence](capabilities.md#tc-05--video-intelligence) → [DEMO-03 From Video to Insight](demonstrations.md#demo-03--from-video-to-insight) → [EXT-07 NVIDIA VSS](references.md#ext-07--nvidia-video-search-and-summarization).

## Retail incident review

**Use case: UC-08**

**Problem and audience:** retail operations teams need to locate relevant moments in recorded video. Potential value is a more focused incident-review conversation.

**Discovery:** what incident or operational question matters? Which team reviews the result and determines follow-up?

**Evaluation focus:** agree a bounded review scenario and assess the usefulness of video search, summaries and event questions.

**Three references:** [TC-05](capabilities.md#tc-05--video-intelligence) → [DEMO-03](demonstrations.md#demo-03--from-video-to-insight) → [EXT-07 NVIDIA VSS](references.md#ext-07--nvidia-video-search-and-summarization).

## Logistics and warehouse visibility

**Use case: UC-09**

**Problem and audience:** warehouse and distribution teams review recordings to understand operational events. Potential value is easier navigation to relevant information during process investigation.

**Discovery:** which operational event should the team find? How is video review used in the current investigation process?

**Evaluation focus:** use a defined warehouse or distribution review task to assess information relevance and the usefulness of generated summaries.

**Three references:** [TC-05](capabilities.md#tc-05--video-intelligence) → [DEMO-03](demonstrations.md#demo-03--from-video-to-insight) → [EXT-07 NVIDIA VSS](references.md#ext-07--nvidia-video-search-and-summarization).

## Facilities and smart buildings

**Use case: UC-10**

**Problem and audience:** facilities teams need a practical way to review recordings across their activities. Potential value is less effort finding relevant events and communicating what happened.

**Discovery:** which facility activity or event requires review? Who needs the summary and what information should it contain?

**Evaluation focus:** assess whether summaries and questions about a recording help staff navigate a selected facilities workflow.

**Three references:** [TC-05](capabilities.md#tc-05--video-intelligence) → [DEMO-03](demonstrations.md#demo-03--from-video-to-insight) → [EXT-07 NVIDIA VSS](references.md#ext-07--nvidia-video-search-and-summarization).

## Enterprise security investigations

**Use case: UC-11**

**Problem and audience:** security teams review footage to understand recorded events. Potential value is more focused information finding in support of human-led investigation.

**Discovery:** what should an investigator find in the recording? Who reviews generated information and retains responsibility for the investigation?

**Evaluation focus:** assess search, summaries and event questions in a bounded investigation scenario with human review of the source recording.

**Three references:** [TC-05](capabilities.md#tc-05--video-intelligence) → [DEMO-03](demonstrations.md#demo-03--from-video-to-insight) → [EXT-07 NVIDIA VSS](references.md#ext-07--nvidia-video-search-and-summarization).

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

Proposed measures include task completion, source relevance, unsupported-answer frequency, user-rated usefulness and functional accuracy against expected results. These are evaluation suggestions, **not Paris BSC measurements or promised improvements**. Agree the measurement protocol and acceptance thresholds with the customer; publish only reviewed results that can be safely disclosed.

## Continue the conversation

Return to the [demonstration overview](demo-overview.md) for the shared narrative. For presales qualification, use the [technical assessment by vertical](validation.md#vertical-assessment-and-business-use-case-boundaries) and [limitations](limitations.md).
