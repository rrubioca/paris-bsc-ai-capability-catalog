# Technical capability registry — RAG and VSS

> **UNDER VALIDATION — PARIS BSC LABORATORY**
>
> RAG pilot status. **VSS: VALIDATED DEMONSTRATION**. Status and evidence are specific to each entry.

[Home](../README.md) · [Navigation guide](navigation.md) · [Demonstration overview](demo-overview.md)

TC-01–TC-04 describe SAIF-AI-001 (RAG); TC-05 describes SAIF-AI-002 (VSS). Status and evidence are specific to each entry. A source review verifies that a configuration or implementation exists; it does not prove successful execution. See the [evidence ledger](validation.md) for the scope of each finding.

## TC-01 — Document ingestion

**Purpose:** prepare document content for retrieval. Earlier working context reports PDF ingestion in the laboratory. The reviewed deployment definition describes document ingestion, but includes no sanitized input corpus, successful ingestion transcript or deployed parser inventory.

**Status:** historically reported functional; current runtime validation pending. Supported formats beyond the reported PDF example, scanned-PDF handling, OCR, tables, multilingual handling, maximum sizes and update/delete behavior are unverified.

**Links:** [DEMO-01](demonstrations.md#demo-01--document-grounded-question-answering), [EVD-RAG-001](validation.md#evd-rag-001--functional-rag-evidence), [EXT-01](references.md#ext-01--nvidia-rag-blueprint).

## TC-02 — Retrieval and contextual grounding

**Purpose:** use document-derived context when generating an answer. The engineering definition specifies a chain server and Milvus vector database; earlier context reports relevant retrieval and grounded answers. The exact runtime retrieval settings and answer-to-source behavior have not been evidenced for publication.

**Status:** design verified in source; functional results historically reported; current evidence pending. Citation UI behavior, retrieval accuracy, refusal quality and document-level authorization are not established.

**Links:** [DEMO-01](demonstrations.md#demo-01--document-grounded-question-answering), [EVD-RAG-001](validation.md#evd-rag-001--functional-rag-evidence), [EXT-01](references.md#ext-01--nvidia-rag-blueprint).

## TC-03 — Blackwell-targeted inference

**Purpose:** run the pilot's NVIDIA inference components on the RTX PRO 6000 Blackwell target. Source specifies an LLM NIM, embedding NIM and reranking NIM, allocating one GPU to each on a selected GPU worker. The configured LLM is Llama 3.1 8B Instruct and its NIM image override is 2.1.4. These are configuration facts, not a verified runtime inventory.

**Status:** Blackwell adaptation verified in source; inference historically reported; exact driver, CUDA/runtime, selected model profiles, image digests and all-component GPU compatibility remain unverified. Four GPUs reported in the earlier context do not imply four GPUs used by this three-GPU configuration.

**Links:** [DEMO-01](demonstrations.md#demo-01--document-grounded-question-answering), [compatibility matrix](compatibility.md), [EXT-03](references.md#ext-03--nvidia-rtx-pro-6000-blackwell-server-edition).

## TC-04 — Cisco Stack Automation application workflow

**Purpose:** express dependencies for GPU preflight, credential preparation, Helm application deployment, optional authenticated presentation and a post-deployment proxy correction. Source revision v0.3.0 also defines storage cleanup at termination.

**Status:** workflow definition verified in source. A temporary live proxy correction is recorded as validated in the source description; automated replay and repeatable complete deployment are not proven by that statement. Namespace security onboarding requires an authorized administrator and is not performed by the application runner. No complete infrastructure or lifecycle automation claim is made.

**Links:** [DEMO-02](demonstrations.md#demo-02--deployment-and-lifecycle-walkthrough), [EVD-SA-001](validation.md#evd-sa-001--deployment-and-lifecycle-evidence), [EXT-02](references.md#ext-02--cisco-stack-automation), [EXT-05](references.md#ext-05--red-hat-openshift).


## TC-05 — Video intelligence

**Catalog entry:** SAIF-AI-002 — NVIDIA Video Search and Summarization (VSS).

**Purpose:** search recorded video, generate summaries and answer questions about recorded events using the NVIDIA VSS application on the BSC AI platform.

**Status:** VALIDATED DEMONSTRATION — functional behavior and the existing OpenShift deployment confirmed in the catalog owner's prior laboratory and recorded-demonstration context. Further reproducibility and controlled functional-accuracy testing are planned. This update does not independently replay the recordings or inspect the live environment.

**Links:** [DEMO-03](demonstrations.md#demo-03--from-video-to-insight), [VSS functional view](architecture.md#vss-functional-view), [EVD-VSS-001](validation.md#evd-vss-001--video-intelligence-demonstration-evidence), [EXT-07](references.md#ext-07--nvidia-video-search-and-summarization).
