# Compatibility and component matrix

> **UNDER VALIDATION — PARIS BSC LABORATORY**
>
> RAG pilot status. **VSS: VALIDATED DEMONSTRATION**. Status and evidence are specific to each entry.

[Home](../README.md) · [Navigation guide](navigation.md) · [Demonstration overview](demo-overview.md)

This is a **pilot evidence matrix**, not a certified bill of materials or vendor support statement. Source snapshot: 2 November 2026, engineering commit `2052f67997ee795dd0293ed6b84e9a3f849a592d`. A configured version does not prove that a matching container or model ran successfully.

| Layer / component | Reviewed configuration or historical context | Verified scope | Missing verification / limitation |
|---|---|---|---|
| Adapted engineering blueprint | v0.3.0 | Revision string and lifecycle defaults inspected in source | Repeatable execution of this revision not evidenced |
| Cisco Stack Automation | Application blueprint with Helm and shell roles | Definition and dependencies inspected | Platform build and runner versions unavailable |
| Upstream catalog package | Source tag v2026.10.25.27 for chart-related references | Tag reference present in adapted blueprint | Package content and resolved dependency digests not independently inspected; this is not the NVIDIA RAG release number |
| GPU target | NVIDIA RTX PRO 6000 Blackwell Server Edition | Explicit target in source; [vendor GPU reference](references.md#ext-03--nvidia-rtx-pro-6000-blackwell-server-edition) | Actual device inventory and all-component model profile compatibility pending |
| Laboratory hardware context | Cisco UCS, four GPUs of 96 GB each | Reported in prior working context only | Hardware model, inventory and allocation not independently attested |
| Configured GPU demand | Three free GPUs on a selected worker; one per NIM role | Source description and preflight inputs inspected | GPU selection list is not guaranteed to filter sufficient free capacity; reservation is not a namespace lock |
| OpenShift | 4.21 reported in prior working context; source targets OpenShift/Kubernetes | Target types and manual security prerequisite present | Actual cluster release, patch level and runtime inventory unavailable |
| GPU driver, GPU operator, CUDA/runtime | No verified versions recovered | No runtime compatibility claim | Capture versions and image/profile compatibility in a future reviewed evidence pack |
| LLM | Meta Llama 3.1 8B Instruct; LLM NIM image override 2.1.4 | Model identifier and tag in source | Runtime model profile, precision, digest and successful inference evidence pending |
| Embedding NIM | Role present; model/version not explicitly established by reviewed file | Intended role and GPU allocation described | Resolved model, image digest and execution pending |
| Reranking NIM | Role present; model/version not explicitly established by reviewed file | Intended role and GPU allocation described | Resolved model, image digest and execution pending |
| Chain server and playground | Included in upstream chart reference | Role description and deployment reference inspected | Exact images, versions and runtime health unavailable |
| Milvus | CPU deployment described in source | Intended database role | Version, dependency layout and runtime health unavailable |
| MinIO object storage | Repository override pgsty/minio; tag RELEASE.2026-08-04T00-00-00Z; persistence request 20 GiB | Values in source | Third-party image provenance, support, digest and deployed behavior unverified; request is not measured usage or a sizing recommendation |
| Database metadata dependency | etcd mentioned by storage lifecycle documentation | Documented dependency | Version and deployed inventory unavailable |
| Persistent storage | NetApp Trident / backend discussed in engineering storage guide | Operational dependency and verification procedure documented | CSI version, backend configuration, capacity, reclaim behavior and restoration not attested |
| Presentation gateway | Optional; authentication enabled by default in reviewed input | Default and post-deployment correction present | Effective transport protection, session behavior and authorization not evidenced |
| Proxy correction | Correct forwarding of original request authority for client API calls | Code inspected; temporary live correction reported in source | Automatic replay, upgrade tolerance and current end-to-end result pending |
| Storage termination | Blueprint v0.3.0 defaults to deletion of eligible unused environment storage; helper also supports audit-only mode and retention guards | Implementation and isolated test definitions inspected | Live cleanup, retention, restoration and backend reclamation not proven |

## Scope of compatibility claims

The pilot contains a Blackwell adaptation; it does not establish that every GPU, NVIDIA NIM image, upstream chart release or OpenShift version works. The older generic sizing language retained in the engineering description is not used here as Blackwell sizing guidance. Current NVIDIA documentation may describe a newer architecture than this Milvus/MinIO-based pilot.

Changes to GPU, driver, runtime, model profile, NIM image, chart, platform, authentication path or storage lifecycle require revalidation of the affected tests and dependent demonstrations. See [validation](validation.md) and [limitations](limitations.md).


## VSS compatibility assessment

**SAIF-AI-002** is functionally validated on the existing BSC VSS configuration in prior laboratory work. This is a configuration-specific result, not a general vendor support matrix.

| Area | Assessment |
|---|---|
| Application and OpenShift | Existing VSS application and required workloads previously validated as healthy |
| GPU resource management | Controlled shutdown and GPU release validated in prior work |
| Detailed bill of materials | Exact VSS, model, inference, driver, platform and storage versions/profiles to be recorded and reviewed |
| Coexistence | Shared resources require scheduling VSS separately from the other agent demonstration in the recorded arrangement |
| Reproducibility | Further testing on the documented configuration |
| Stack Automation | Private blueprint planned; no automated VSS deployment result claimed |

Do not apply the RAG-specific model tags, GPU allocations or blueprint revision in the matrix above to VSS. See [EVD-VSS-001](validation.md#evd-vss-001--video-intelligence-demonstration-evidence) and [RM-002](roadmap.md#rm-002-project).
