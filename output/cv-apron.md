# Ayman Patel

**Location:** London, UK  
**Email:** ayman.patel97@gmail.com  
**Phone:** +447900626876  
**LinkedIn:** [linkedin.com/in/aymanapatel](https://linkedin.com/in/aymanapatel)  
**GitHub:** [github.com/aymanapatel](https://github.com/aymanapatel)  
**Portfolio:** [patelofthought.com/me](https://patelofthought.com/me)  
**Blog:** [aymanace2049.hashnode.dev](https://aymanace2049.hashnode.dev)

---

## Professional Summary

Senior Backend Engineer with 6+ years building high-throughput financial systems at Mastercard — from payment tokenization APIs to fraud-detection pipelines — plus recent deep work in AI/LLM engineering. Proven track record owning backend architecture (Spring, PostgreSQL, Redis, Kafka, Kubernetes, Terraform), reducing incident MTTR from days to hours, and improving system availability by 15%. London-based, completing an MSc in Advanced Computer Science at Queen Mary University of London.

---

## Skills

**Backend:** Java, Kotlin (intermediate), Spring Boot, Spring Data JPA, Hibernate, Python, Go, FastAPI, REST APIs, GraphQL, Microservices, Event Sourcing, CQRS, API Gateway, Camunda BPM  
**Data & Storage:** PostgreSQL (JSONB, partitioning), Redis, Oracle, MongoDB, Kafka, RabbitMQ, Debezium, Change Data Capture  
**AI/ML:** PyTorch, Transformers, LoRA, LangGraph, RAG, Vector DBs, Multi-Agent Systems, MCP, ReAct, Fine-tuning  
**Cloud & DevOps:** Kubernetes, Terraform, Docker, AWS (S3, Lambda, EC2), GCP (working knowledge), Jenkins, Gradle, GitHub Actions  
**Observability:** Grafana, Prometheus, Splunk, Dynatrace, OpenTelemetry, eBPF  
**Frontend:** React, TypeScript, Redux Toolkit, Next.js, Webpack Module Federation  
**Testing:** Jest, React Testing Library, Cypress, Playwright, JUnit, Mockito, Testcontainers, k6

---

## Experience

### Mastercard — Vadodara, India

**Senior Software Engineer** *(Mar 2024 – Aug 2025)*

**Backend & Platform:**
- Owned backend API development in **Spring Boot / JPA / Hibernate**; designed **API Gateway** and **Event Sourcing** patterns for payment-adjacent microservices.
- Introduced **Redis** as a caching layer for Mastercard APIs, cutting response times for frequently accessed data.
- Implemented **Resilience4j Circuit Breaker and Retry** patterns across 5+ microservices, reducing cascading failures and improving **system availability by 15%**.
- Owned **CI/CD pipelines in Jenkins** for staging-to-production artifact delivery.
- Leveraged **PostgreSQL JSONB** for flexible, schema-free dynamic form handling in production.
- Owned **load and performance testing with k6**, using InfluxDB as TSDB to track trends and regressions over time.
- Owned **production incident diagnosis** using Splunk, Grafana, and Dynatrace, reducing **mean time to resolution from days to hours**.

**AI/ML:**
- Supported integration of fraud-detection ML pipelines, building data-ingestion APIs and backend layers for risk-scoring models.

**Frontend & Cross-Functional:**
- Drove design of a **microfrontend platform using Webpack Module Federation**, enabling independent deployment of **10+ product modules**.
- Owned frontend observability using **Grafana and OpenTelemetry** to surface client-side performance insights.
- Led accessibility initiatives as **Accessibility Champion**, lifting **WCAG compliance scores by 40%** and coaching **10+ teams** on best practices.
- Led cross-country projects as the de facto frontend architect and UX designer, owning end-to-end delivery and stakeholder alignment.

---

**Software Engineer II** *(Mar 2022 – Feb 2024)*

**Backend & Quality:**
- Built greenfield backend services in **Spring**; served as core maintainer for performance, code quality, and accessibility standards.
- Built **Gradle pipelines**, streamlining dependency management and artifact generation across projects.
- Steered creation of **RBAC and SBAC (Status-Based Access Control)** across **5+ products** in **2 weeks** under urgency.

**Testing & Performance:**
- Wrote unit tests (Jest, React Testing Library) and end-to-end tests (Playwright, Cypress), achieving **95% test coverage**.
- Reduced **CI e2e suite runtime from 8 hours to 3 hours** through test splitting, parallel execution, selective retries, and environment-level caching.

**Frontend:**
- Improved **UI load performance by 30%** by migrating to an **Akamai CDN**.
- Designed high-fidelity **Figma prototypes** to align product managers and stakeholders, delivering UX in 2 days in the absence of a UX designer.

---

**Software Engineer I** *(Jul 2019 – Feb 2022)*

**Backend & APIs:**
- Designed and implemented **RESTful APIs** to automate BPM workflows using **Camunda**; modelled complex business logic with **BPMN, DMN, and CMMN** standards.
- Designed **CI/CD pipeline** to deploy Angular.js applications using Grunt.js and Jenkins.

**Security (Fintech):**
- Developed and maintained **Hardware Security Module (HSM) integration** for mobile encryption using **MDES tokenisation**, securing card data transmission across payment flows — critical financial infrastructure.

---

**Software Engineering Intern** *(Jan 2019 – Jun 2019)*

- Built a backend **image-serving service** for MDES CardArt, improving delivery efficiency for card images in APIs.
- Optimised image delivery with **ImageMagick compression**, reducing payload size and improving response times.
- Enabled **non-blocking image delivery** using **Spring WebFlux and Reactive Streams** for scalable, asynchronous request handling.
- Practiced **Test-Driven Development (TDD)** to improve code reliability, reduce regressions, and support safe refactorings.

---

### Nebius Academy — London, UK

**AI Engineering Fellow** *(Mar 2025 – May 2025)*  
*Intensive 4-module AI/ML engineering fellowship covering LLM architectures, AI agents, MLOps, and GPU performance engineering — completed 12+ hands-on assignments on Nvidia H100 infrastructure.*

**LLM Architectures:**
- Built a complete **transformer language model from scratch** with multi-head causal self-attention, position-wise feed-forward networks, and autoregressive generation with **KV caching**.
- Implemented **LoRA (Low-Rank Adaptation)** on GPT-2: froze **124M base parameters** and trained only **~811K adapter parameters (0.65%)**, shifting model behaviour from generic prose to pseudo-Elizabethan diction. Result: a **3 MB adapter** versus a **500 MB full checkpoint**.
- Built a **Mixture of Experts (MoE) transformer** with fine-grained experts and top-K routing, adding expert capacity limits and token dropping to maintain compute budgets.
- Implemented **Rotary Position Embeddings (RoPE)** from scratch and verified norm preservation (`‖q_rot‖ = ‖q‖` to within 1e-5).

**AI Agents & Systems:**
- Built a **LangGraph ReAct research agent** that plans its own tool-calling sequence, adding a **dataflow integrity check** that verifies every claim against the tool log to catch hallucinations automatically.
- Designed an **MCP (Model Context Protocol) shared tool layer** so multiple agent clients (LangGraph, Rasa, voice pipeline) discover and call tools dynamically without code duplication.
- Built a **bidirectional handoff bridge** between an exploratory agent (LangGraph) and a deterministic agent (Rasa) using **atomic file IPC**, preventing race conditions and enabling autonomous reject-and-re-research loops.
- Implemented a **voice pipeline (STT → Agent → TTS)** with graceful degradation: if the Speechmatics API fails, the system falls back to text mode rather than crashing.

**MLOps & Performance:**
- Deployed **distributed DDP training on Kubernetes** across **2× Nvidia H100 nodes** using SkyPilot, with infrastructure-as-code (Docker + Kubernetes job specs) for reproducible environments.
- Containerized training pipelines with Docker and environment-driven YAML configs; adjusting batch size, learning rate, or mixed precision (**bf16**) required only a YAML edit.
- Achieved **6.69× speedup in LLM inference** by implementing **KV caching** and preallocated sequence buffers, dropping generation time from **0.943s to 0.141s for 128 tokens**.
- Analysed kernel fusion with `torch.compile`: a fused loop reached **32 FLOP/Byte** versus **0.083 FLOP/Byte** unfused, demonstrating that compiler-level fusion can outperform algorithmic changes for repetitive operations.

---

## Education

- **MSc Advanced Computer Science**, Queen Mary University of London *(Sep 2025 – Sep 2026)*
- **BSc Computer Science**, Sardar Vallabhbhai Institute of Technology *(Jul 2015 – May 2019)* — GPA: 7.9/10

---

## Projects (Selected)

- **[Nebius Project](https://github.com/aymanapatel/nebius-project)** — Repository Summarizer using FastAPI and LLMs. Extracts code skeletons via AST and Tree-sitter to fit within token budgets, prioritises source files, and assembles context within a 7000-token limit. This project secured admission into the Nebius AI Engineering Fellowship.
- **[Credit Card Fraud Analytics](https://github.com/aymanapatel/qmul-all-projects/blob/main/data-analytics/coursework1/credit-card-report.pdf)** — Fraud-detection analysis on 590,540 transactions across 434 features. Tuned Random Forest with SMOTE; achieved 96.9% accuracy, 0.879 ROC-AUC. [Notebook](https://github.com/aymanapatel/qmul-all-projects/blob/main/data-analytics/coursework1/credit-card-notebook.ipynb)
- **[Go Microservices](https://github.com/aymanapatel/golang-microservices)** — End-to-end cloud-native microservice in Go with service discovery, distributed tracing, and containerized deployment.
- **[Cloud Native Go](https://github.com/aymanapatel/cloud-native-go)** — Go microservices deployed in cloud-native environments with CI/CD pipelines, observability, and infrastructure-as-code.
- **[Java CLI (GraalVM)](https://github.com/aymanapatel/java-cli)** — Java CLI tool using Picocli to query the Stack Overflow API, compiled to a native binary with GraalVM for zero-JVM-startup execution.
- **[LGTM Observability](https://aymanace2049.hashnode.dev/grafana-one-observability-tool-to-rule-them-all)** — End-to-end observability stack: tracing (Tempo), logs (Loki), metrics (Grafana), plus modern profiling with flamegraphs and eBPF.

---

## Writing & Recognition

- **40+ technical articles** on system design and architecture ([aymanace2049.hashnode.dev](https://aymanace2049.hashnode.dev)). Featured in the eBPF newsletter; key pieces include *eBPF — Unleash the Linux Kernel*, *Microfrontends — Decoupling Frontends*, and *Change Data Capture in Microservices*.
- **Company-wide whitepapers** on Accessibility and Microfrontend architecture; earned CTO recognition, adopted as internal reference material by **200+ engineers**.

