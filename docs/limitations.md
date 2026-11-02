# Known limitations, operational requirements and revalidation

> **UNDER VALIDATION — PARIS BSC LABORATORY**

## Functional and business limits

PDF ingestion, retrieval and inference are historically reported. Current-revision results, answer correctness, refusal behavior, source-attribution presentation and reproducibility lack a reviewed runtime evidence pack. No accuracy, performance, availability, scaling, concurrency, financial benefit or sector-specific outcome is established. OCR, multimodal processing, multilingual quality, content updates/deletion and additional formats require explicit tests.

The pilot does not establish document-level access control, compliance, clinical suitability, automated decision making, safe autonomous actions or integration with customer business systems. Human review and authoritative source ownership are necessary qualification topics. RAG does not guarantee a correct or current answer.

## Security and access

The reviewed engineering configuration includes an optional presentation authentication gateway and enables it by default. This does not prove enterprise identity integration, per-document authorization, encrypted transport, adequate session handling or secure logs. The source's presentation behavior requires a separate transport-security assessment before use with sensitive material. Authentication and confidentiality are distinct requirements.

The application requires platform security onboarding by an authorized administrator. The source explicitly describes a temporary broad workload security allowance and an intention to narrow service-account scope. This is a known hardening gap; source inspection is not a security approval. No privileged onboarding instructions or bindings are published here.

Credential structural checks exist but do not authenticate against NVIDIA services or establish software entitlement. Resolve valid licensing, artifact integrity, model permissions and approved dependency acquisition separately. No tokens, credentials or access outputs belong in this repository.

## Automation and component supply chain

Manual platform preparation remains a prerequisite. The proxy correction is coupled to an expected upstream configuration shape and intentionally stops if that shape changes. A code-defined corrective step is not proof of repeated successful deployment.

The blueprint's GPU selection view may not establish sufficient free GPU capacity; the source defines a preflight check. Resource reservation is not a lock against concurrent namespace activity. Rendered chart contents, transitive dependencies and image/model digests must be recorded for the actual run. The object-store image override is not represented as NVIDIA, Cisco or Red Hat support certification.

## Data lifecycle and storage

The v0.3.0 blueprint defaults to deleting eligible unused environment storage at termination. This can permanently remove ingested data. The source includes an audit-only option, retention safeguards, ownership/reference checks and failure stops, but those mechanisms do not replace a tested recovery process. This catalog is descriptive and provides no destructive commands.

The engineering guide requires independent application-consistent backup and restoration verification. Coordinated database, metadata and object-store data must be recoverable together; copying a single live volume is not evidence of application recovery. Code rollback does not recover deleted data. A completed storage helper does not prove physical backend capacity reclamation.

Concurrent workload creation, unknown custom controllers, finalizers and backend failures can affect cleanup safety or completion. Prevent conflicting operations during approved disposable tests and have storage owners verify outcomes. Live cleanup, retention, unrelated-storage protection, restoration and backend reclamation all remain pending.

## Operations and revalidation

Assign owners for the corpus, model/software lifecycle, platform, security, storage/recovery and demonstration review before a customer evaluation. Define failure escalation and data retention privately. Local-model configuration does not establish disconnected operation, a complete data-residency boundary, monitoring coverage or production support.

Revalidate affected capabilities after changes to hardware, GPU driver/runtime, model/profile, image, chart, platform, storage or presentation behavior. Record the exact configuration for each result; do not silently carry an earlier success onto v0.3.0 or a later revision. Keep raw operational evidence restricted and publish only sanitized summaries.
