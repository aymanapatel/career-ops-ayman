# CV -- Ayman Patel

**Location:** London, UK  
**Email:** ayman.patel97@gmail.com  
**Phone:** +447900626876  
**LinkedIn:** linkedin.com/in/aymanapatel  
**GitHub:** github.com/aymanapatel  
**Website:** aymanace2049.hashnode.dev  
**Portfolio:** patelofthought.com/me

## Professional Summary

Senior Full-Stack Engineer with 6+ years of production experience building systems at Mastercard, from fraud-detection ML pipelines to microfrontend platforms serving 10+ product modules. Recently spent three months at the Nebius AI Engineering Fellowship, where I built a transformer language model from scratch to understand why pre-norm trains more stably than post-norm, implemented LoRA on GPT-2 and observed a 124M-parameter model shift to Shakespearean prose using only 0.65% trainable adapters, and optimized LLM inference from 0.94s to 0.14s for 128 tokens by replacing redundant full-sequence attention with KV caching. I write about this work — 40+ articles on system design and architecture — because explaining technical decisions forces clarity. Be an avid blog writer covering concepts from all layers of the software stack. Currently completing an MSc in Computer Science at Queen Mary University of London.

## Work Experience

### Nebius Academy -- London, UK
**AI Engineering Fellow**  
March 2026 - May 2026

*Completed an intensive 4-module AI/ML engineering fellowship covering LLM architectures, AI agents, MLOps, and GPU performance engineering.*  
*Built 12+ hands-on systems on Nvidia H100 infrastructure, spanning transformers, agent workflows, distributed training, and inference optimization.*

**Module 1 — LLM Architectures:**
- Built a complete transformer language model from scratch to understand why pre-norm (LayerNorm before each sublayer) trains more stably than the original post-norm layout. This meant implementing multi-head causal self-attention, position-wise feed-forward networks, and autoregressive generation with KV caching — then verifying causality by perturbing the last input token and confirming earlier outputs did not change.
- Implemented LoRA (Low-Rank Adaptation) from scratch and injected it into GPT-2. The insight was that freezing 124M base parameters and training only ~811K (0.65%) adapter parameters is enough to shift model behaviour: the model went from generic modern prose to pseudo-Elizabethan diction ("thou", "thee", "lord"). The outcome was a 3 MB adapter file versus a 500 MB full model checkpoint, making fine-tuning feasible on limited GPU memory.
- Built a Mixture of Experts (MoE) transformer with fine-grained experts and top-K routing. The challenge was load imbalance: some experts receive far more tokens than others. I added expert capacity limits and token dropping, tracking a drop-rate metric. The outcome was a system that maintains the same compute budget as a dense model while allowing selective specialization per token.
- Implemented Rotary Position Embeddings (RoPE) from scratch. The insight was that rotation matrices preserve vector norms, so position information can be injected directly into Q and K without adding learned positional embedding parameters. I verified this with a unit test confirming `‖q_rot‖ = ‖q‖` to within 1e-5.
- Conducted hyperparameter grid searches across learning rate and batch size on SST-2 sentiment classification. The outcome was a clear trade-off: small batches (50) give noisy gradients that act as implicit regularization, while large batches (200) need higher learning rates or more epochs to converge. I also found that L1 regularization drives weights toward exact zero (sparsity), whereas L2 only shrinks them exponentially — a distinction that matters when you want to eliminate weak features entirely.

**Module 2 — AI Agents & Sovereign Systems:**
- Built a LangGraph ReAct research agent that plans its own tool-calling sequence. The insight was that autonomous agents hallucinate facts unless every claim is traceable back to a tool call. I added a dataflow integrity check that verifies every number in the final output (venue price, weather, headcount) against the tool log. The outcome was a system where fabricated outputs are caught automatically rather than passed to the user.
- Implemented a Rasa Pro CALM deterministic booking flow. The insight was that LLMs should handle language understanding while Python enforces hard business rules (deposit caps, party-size limits, time-based cutoffs). The outcome was an auditable, deterministic confirmation system where every decision is traceable — essential when "every word could cost money" in a commercial transaction.
- Designed an MCP (Model Context Protocol) shared tool layer. The insight was that multiple agent clients (LangGraph, Rasa, voice pipeline) should not duplicate tool logic. By registering tools once in an MCP server, all clients discover and call them dynamically. The outcome was that changing a venue's status from "available" to "full" updated all clients instantly without code changes.
- Built a bidirectional handoff bridge between an exploratory agent (LangGraph) and a deterministic agent (Rasa). The insight was that open-ended research and rigid confirmation need different architectures, but they must pass state reliably. I used atomic file IPC so only one handoff file exists at any time, preventing race conditions. The outcome was a loop that can reject and re-research (e.g., party size too large → find a new venue) without human intervention.
- Implemented a voice pipeline (STT → Agent → TTS). The practical insight was that production agents need graceful degradation: if the Speechmatics API key is missing, the system falls back to text mode with a visible warning rather than crashing. This mirrors real-world production where external services fail.

**Module 3 — MLOps & Distributed Training:**
- Deployed distributed data parallel (DDP) training on Kubernetes across 2× Nvidia H100 nodes. The insight was that infrastructure should be code: the entire pipeline — from Docker image to Kubernetes job spec — is version-controlled, so local debugging and cloud execution use identical environments. I used SkyPilot to abstract Kubernetes complexity, declaring resources (2 nodes, H100:1, 60GB+ RAM) and letting it handle pod scheduling and `torchrun` coordination. The outcome was reproducible training without "works on my machine" issues.
- Containerized training pipelines with Docker and pushed to Nebius Container Registry. The insight was that environment-driven configuration (all tunables in `train_job.yaml`, none hardcoded in Python) enables rapid experimentation without code changes. The outcome was that adjusting batch size, learning rate, or mixed precision (bf16) required only a YAML edit and a container rebuild.
- Monitored NCCL network initialization across nodes. The insight was that distributed training failures often hide in network setup, not model code. I tracked GPU Direct RDMA fallback (socket transport when InfiniBand is unavailable) and node IP reporting. The outcome was identifying that loss divergence on OPT-1.3B was caused by a learning rate too high for the dataset, not a hardware or networking bug.

**Module 4 — Performance Engineering & GPU Inference:**
- Profiled GPU kernels using CUDA events and `torch.profiler`. The insight was that before optimizing, you must know whether you are memory-bound or compute-bound. I plotted kernels on a roofline model and found that naive eager-mode element-wise loops sit at 0.083 FLOP/Byte (deeply memory-bound) because each Python loop iteration launches separate kernels and materializes intermediates in global memory. The outcome was a clear optimization target: reduce data movement, not add compute.
- Achieved 6.69× speedup in LLM inference. The insight was that the naive autoregressive loop passes the entire growing sequence every decode step, forcing redundant attention computation. I implemented KV caching so each decode step passes only the latest token while reusing cached keys and values from previous positions, plus preallocated sequence buffers to eliminate `torch.cat` reallocations. The outcome was dropping generation time from 0.943s to 0.141s for 128 tokens.
- Analyzed kernel fusion with `torch.compile`. The insight was that keeping loop intermediates in registers instead of global memory changes the arithmetic intensity entirely: a fused loop reached 32 FLOP/Byte (approaching compute-bound) versus 0.083 FLOP/Byte unfused. The outcome was understanding that compiler-level fusion can be more impactful than algorithmic changes for small, repetitive operations.
- Studied production inference engine design (vLLM-style). The insight was that inference engines are memory managers first: paged KV memory prevents fragmentation, prefix caching avoids redundant prefill computation for repeated prompts, and continuous batching keeps GPUs busy by dynamically mixing prefill and decode work. The outcome was a mental model for evaluating serving systems not just by model accuracy but by throughput, latency, and memory efficiency.

### Mastercard -- Vadodara, India
**Senior Software Engineer**  
March 2024 - August 2025

*Owned platform architecture across React/TypeScript frontends, Spring APIs, caching, observability, CI/CD, and production incident response.*  
*Translated PM requirements into technical specifications, user stories, and acceptance criteria while driving cross-country delivery across engineering teams.*

- Owned translation of product manager requirements into detailed technical specifications, user stories, and acceptance criteria for cross-functional engineering teams
- Owned the frontend in React and TypeScript, using Redux Toolkit and RTK Query for scalable state and data-fetching layers
- Developed backend APIs with Spring, Spring Data JPA, and Hibernate, applying API Gateway and Event Sourcing patterns using Kafka
- Owned introduction of Redis as a cache layer for Mastercard APIs to optimize response times for frequently accessed data
- Owned implementation of Resilience4j Circuit Breaker and Retry patterns across 5+ microservices, reducing cascading failures and improving system availability by 15%
- Drove design of a microfrontend platform using Webpack Module Federation, enabling independent deployment of 10+ product modules
- Leveraged PostgreSQL JSONB to own flexible, schema-free dynamic form handling
- Owned product analytics dashboards in Mixpanel, providing stakeholders with KPIs
- Contributed 5 feature additions and bug fixes to Mastercard's internal design system
- Led accessibility initiatives as Accessibility Champion, lifting WCAG compliance scores by 40% and coaching 10+ teams on best practices
- Owned frontend observability using Grafana and OpenTelemetry to surface client-side performance and traceability insights
- Owned load and performance testing with k6, using InfluxDB as the TSDB to track trends and regressions over time
- Owned CI/CD pipelines in Jenkins for staging-to-production delivery of artifacts
- Owned production incident diagnosis using Splunk, Grafana, and Dynatrace, reducing mean time to resolution from days to hours.
- Led cross-country projects as the de facto frontend/backend architect, UX designer, and product manager, driving alignment across teams and owning end-to-end delivery

### Mastercard -- Vadodara, India
**Software Engineer II**  
March 2022 - February 2024

*Built greenfield backend and frontend services, then hardened them through testing, performance work, and accessibility standards.*  
*Served as a core maintainer for code quality, release reliability, and user-facing performance across React/TypeScript and Spring applications.*

- Built greenfield backend services in **Spring** and **Oracle** with **Hibernate** as the ORM layer
- Built greenfield frontend services in **React + TypeScript** with state management using **Redux** and **RTK Query**
- Built greenfield applications in React, Redux, JavaScript (ES6+), and Spring; served as core maintainer for performance, code quality, and accessibility standards across frontend projects
- Built pipelines using Gradle, streamlining dependency management and artifact generation
- Wrote unit tests using Jest and React Testing Library, and end-to-end tests using Playwright and Cypress, achieving 95% test coverage and e2e sanity while preventing regressions at scale; reduced CI e2e suite runtime from 8 hours to 3 hours through test splitting, parallel execution, selective retries, and environment-level caching
- Improved UI load performance by 30% by migrating to a Akamai CDN
- Designed high-fidelity Figma prototypes to align product managers and stakeholders, creating UX in 2 days in the absence of a UX designer and showing strong ownership

### Mastercard -- Vadodara, India
**Software Engineer I**  
July 2019 - February 2022

*Built enterprise workflow automation and security-integrated services for payment systems.*  
*Worked across API design, BPMN/DMN/CMMN modelling, Jenkins delivery, and MDES tokenisation flows.*

- Designed and implemented RESTful APIs to automate BPM workflows using Camunda
- Modelled complex business logic using BPMN, DMN, and CMMN standards
- Designed CI/CD pipeline to deploy Angular.js application using Grunt.js and Jenkins
- Developed and maintained Hardware Security Module (HSM) integration for mobile encryption using MDES tokenisation, securing card data transmission across payment flows

### Mastercard -- Vadodara, India
**Software Engineering Intern**  
January 2019 - June 2019

*Built a backend image-serving service for MDES CardArt with a focus on payload efficiency and asynchronous delivery.*  
*Practiced TDD to define service behaviour, reduce regressions, and support safe refactoring.*

- Implemented a backend image-serving service for MDES's CardArt project, improving delivery efficiency for serving card images in MDES APIs
- Optimized image delivery with ImageMagick compression before serving, reducing payload size and improving response times
- Enabled non-blocking image delivery using Spring WebFlux and Reactive Streams to support scalable, asynchronous request handling
- Practiced Test-Driven Development (TDD) to defprojectine expected behavior upfront, improve code reliability, reduce regressions, and support safe refactorings

## Education

- **MSc Advanced Computer Science**, Queen Mary University of London (September 2025 - September 2026)
- **Bachelor of Computer Science**, Sardar Vallabhbhai Institute of Technology (July 2015 - May 2019) -- GPA: 7.9/10

## Projects

- **[Nebius Project](https://github.com/aymanapatel/nebius-project)** -- Built a Repository Summarizer service using FastAPI and LLMs that generates human-readable summaries of GitHub repositories. Extracts code skeletons via AST and Tree-sitter to fit within token budgets, intelligently prioritizes source files, and assembles context within a 7000-token limit. This project secured admission into the Nebius AI Engineering Fellowship
- **Credit Card Fraud Analytics ([Report](https://github.com/aymanapatel/qmul-all-projects/blob/main/data-analytics/coursework1/credit-card-report.pdf), [Notebook](https://github.com/aymanapatel/qmul-all-projects/blob/main/data-analytics/coursework1/credit-card-notebook.ipynb))** -- Built a fraud-detection analysis on the IEEE-CIS credit card dataset, merging 590,540 transactions across 434 transaction and identity features, identifying severe class imbalance at a 3.5% fraud rate, and reducing the feature space to the strongest predictors such as card, product, amount, identity, and temporal signals. Tuned Random Forest models with SMOTE variants and threshold optimization; the best model achieved 96.9% test accuracy, 0.503 F1, 0.541 precision, 0.470 recall, and 0.879 ROC-AUC on a strict chronological test split.
- **[Java CLI using GraalVM](https://github.com/aymanapatel/java-cli)** -- Built a Java CLI tool using the Picocli framework to query the Stack Overflow API, then compiled it to a native binary with GraalVM for zero-JVM-startup execution
- **[Go Microservices](https://github.com/aymanapatel/golang-microservices)** -- Built a progressive Go microservices project spanning standard-library REST APIs, Gorilla Mux with custom request validation, Swagger/OpenAPI documentation, Envoy-based service mesh/load balancing with K8s/WASM filters, and gRPC
- **[RL Accessibility](https://github.com/aymanapatel/rl-a11y)** -- Applied reinforcement learning to improve web accessibility by training agents to identify and fix WCAG violations automatically
- **[Java GraphQL](https://github.com/aymanapatel/java-graphql)** -- Developed a production-oriented Spring Boot GraphQL service demonstrating advanced patterns including query-depth DDOS protection, cursor-based pagination, file upload mutations, DataLoader N+1 resolution, and execution tracing with full JUnit 5 integration tests

- **[TfL Road Flow Tracker](https://github.com/aymanapatel/qmul-group-project)** -- Built a Haskell application that monitors, analyzes, and visualizes road status data from Transport for London (TfL). Leverages the TfL Unified API to build a historical SQLite database of traffic disruptions, featuring an interactive CLI with fuzzy search, geospatial queries using the Haversine formula, and a recommendation engine that identifies optimal routes based on real-time severity data. Includes trend analytics to identify worst days and hours for traffic reliability.
- **[Social Network Simulation](https://github.com/aymanapatel/qmul-socialnetwork-project)** -- Built a concurrent social network simulation in Haskell demonstrating threading, STM (Software Transactional Memory), and message passing. Simulates 10 concurrent user threads exchanging 100 messages, with an extension feature implementing spam detection and filtering based on message frequency patterns.
- **{Tech: Europe} Hackathon | London, UK — Most Secure Build Award (€1,000 cash)** -- Built a platform bridging deep science and venture capital/biotech by turning raw academic papers into investor-ready intelligence. The pipeline lets users search in plain English (e.g., "Ozempic in a pill"), expands queries into scientific keywords via an AI research agent, searches PubMed, OpenAlex and other publications using Tavily, and returns an instant scorecard with drug target, disease, mechanism and Commercial Viability score. The corresponding author is saved as a lead in Attio CRM, and one click generates an R&D brief; a voice agent enables hands-free review. Recognized by Aikido Security for the most secure codebase with zero issues detected, despite last-minute demo crunch in an npm ecosystem. Partners: Attio, Tavily, Google DeepMind
- **Encode Hackathon | London, UK (3rd place)** -- Built Phantom Fraud, an AI-powered financial risk engine for Solana blockchain using Solana CLI, OpenRouter, and Helius APIs to detect wash-trading patterns
- **AI Hackathon | Vadodara, India, March 2025 (3rd place)** -- Built a code-review assistant powered by fine-tuned Gemini Pro Vision with PostgreSQL-backed developer UI
- **AI Hackathon | Vadodara, India, September 2024 (2nd place)** -- Developed RAG-based internal documentation search using Langchain and Chroma vector database
- **Technology Hackathon | Vadodara, India (2nd place)** -- Migrated React app to Next.js, improving page performance

## Writing

- **Personal Blog** -- 40+ published technical articles on system design and architecture (Link: aymanace2049.hashnode.dev)
  - Authored 40+ technical articles featured in the eBPF newsletter; key pieces include eBPF - Unleash the Linux kernel, Microfrontends - Decoupling Frontends, and Change Data Capture in Microservices
  - Wrote AI/LLM-focused articles: End to End RAG with Postgres, Observability in LLMs, and OpenRouter - One Proxy to Rule them All
  - Covered infrastructure and data topics: Grafana - One Observability Tool to Rule them All, Redis is not just a Cache, Infrastructure as Code - A History Primer, and Localstack: Running AWS Locally
- **Frontend engineering whitepapers** -- Produced company-wide whitepapers on Accessibility and Microfrontend architecture; earned CTO recognition, were adopted as internal frontend engineering reference material, and were circulated to 200 engineers
- **Undergraduate project - Recommendation System for Github [Project Link](https://drive.google.com/file/d/1iKV_xFES7ByKqhxLe3ffbDuWSnKmVFsI/view?usp=sharing)}** -- Build a recommender systems for GitHub users. Use techniques like
collaborative filtering techniques. Used PySpark on Github repos to match
user’s contributions with the repositories they should be recommended. 
- **Undergraduate seminar -  Kafka [Report Link](https://drive.google.com/file/d/1txqBQZaRxxT7wu5csBuIHUfi8DrRvUMU/view?usp=sharing)}** -- Delivered college seminar on Event Driven Architecture using Apache Kafka which
included topics such as Kafka Architecture, AMQP, Kafka Streams and Kafka
Connect


## Talks / Seminars

- **Seminar: Kafka Ecosystem** (October 2018) -- Delivered a technical seminar covering Kafka Architecture, Kafka Streams, Kafka Connect, and AMQP messaging patterns
- **Seminar: Git and Version Control Systems** -- Presented an introductory talk on Git workflows and VCS best practices for undergraduate students at Parul University

## Skills

- **Frontend:** React, TypeScript, Redux Toolkit, RTK Query, Next.js, Vite, Webpack, Module Federation, Figma
- **Backend:** Spring, Spring Data JPA, Hibernate, Java, Python, Go, FastAPI, Django, Quarkus, REST APIs, Microservices, Event Sourcing, CQRS
- **Databases & Events:** PostgreSQL, Oracle, MongoDB, Redis, Kafka, RabbitMQ, Debezium, Change Data Capture
- **Cloud & DevOps:** AWS (S3, Lambda, EC2), Docker, Kubernetes, Terraform, Localstack, Ansible, PCF, Jenkins, Gradle
- **Testing:** JUnit, Mockito, Jest, React Testing Library, Cypress, Playwright, Testcontainers
- **Observability:** Grafana, Prometheus, Splunk, Dynatrace, OpenTelemetry, eBPF
- **Machine Learning:** PyTorch, Scikit-learn, Transformers, LoRA, Mixture of Experts (MoE), RoPE, KV Cache, Attention Mechanisms, Fine-tuning, Random Forest, SMOTE
- **AI/LLM Engineering:** LLM APIs, Langchain, Chroma, RAG, Vector Databases, Multi-Agent Systems, ReAct Pattern, MCP (Model Context Protocol)
- **MLOps & Distributed Training:** DDP, torchrun, NCCL, Kubernetes (Nebius MK8S), SkyPilot, Docker, Container Registry, bf16 Mixed Precision
- **GPU Performance:** CUDA Profiling, Roofline Model, Kernel Fusion, torch.compile, Memory-Bound vs Compute-Bound Optimization, H100 Inference Optimization
- **Big Data:** Pandas, Polar, DuckDB, Parquet
- **Other:** Camunda, BPMN, DMN, CMMN, Mixpanel, CDN
