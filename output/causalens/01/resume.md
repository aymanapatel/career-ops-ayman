# Ayman Patel -- Agentic AI / Full-Stack Engineer

**Location:** London, UK  
**Email:** ayman.patel97@gmail.com  
**Phone:** +447900626876  
**LinkedIn:** linkedin.com/in/aymanapatel  
**GitHub:** github.com/aymanapatel  
**Portfolio:** patelofthought.com/me

---

## Professional Summary

Senior Full-Stack Engineer with 6+ years building production systems at Mastercard and recent AI engineering work across LangGraph, MCP, RAG, deterministic agent flows, LLM inference optimization, MLOps, and distributed training. Built reliable agent workflows with tool-call traceability, auditable business-rule execution, shared tool layers, voice pipelines, and graceful degradation patterns. For causaLens, the strongest fit is reliable multi-agent workflow automation: agent orchestration, auditability, enterprise integration, observability, and full-stack delivery. Currently completing an MSc in Advanced Computer Science at Queen Mary University of London.

## AI Hackathons and Applied AI Builds

- **Deep Science to VC/Biotech Intelligence Platform -- Security Award by Aikido Security:** Built a platform that turns plain-English research intent such as "Ozempic in a pill" into publication search, paper analysis, commercial-viability scoring, CRM lead creation in Attio, R&D brief generation, and voice review. Used AI agents to search PubMed, OpenAlex, and other sources through Tavily, extract drug target/disease/mechanism signals, and turn corresponding authors into actionable VC or biotech leads. The project did not win the main track, but was awarded most secure codebase with zero issues by Aikido Security.
- **Encode Hackathon, London -- 3rd Place:** Built Phantom Fraud, an AI-powered financial risk engine for Solana blockchain using Solana CLI, OpenRouter, and Helius APIs to detect wash-trading patterns.
- **AI Hackathon, Vadodara -- 3rd Place:** Built a code-review assistant powered by fine-tuned Gemini Pro Vision with a PostgreSQL-backed developer UI.
- **AI Hackathon, Vadodara -- 2nd Place:** Developed a RAG-based internal documentation search system using LangChain and Chroma vector database.
- **[Nebius Repository Summarizer](https://github.com/aymanapatel/nebius-project):** Built a FastAPI and LLM service that extracts code skeletons with AST and Tree-sitter, prioritizes source files, and assembles repository context within a 7000-token limit.

---

## Work Experience

### Nebius Academy -- London, UK
**AI Engineering Fellow**  
March 2026 - May 2026

- Built a LangGraph ReAct research agent that plans tool calls, then verifies every generated number against the tool log before producing the final answer. The goal was simple: agent output should be traceable, not vibes-based.
- Designed an MCP shared tool layer so LangGraph, Rasa, and voice clients could discover and call the same tools dynamically. Changing one tool state propagated across clients without duplicate code.
- Built a bidirectional handoff bridge between an exploratory LangGraph agent and a deterministic Rasa agent. Used atomic file IPC to pass state safely, enabling reject-and-research loops without human intervention.
- Implemented a Rasa Pro CALM booking flow where the LLM handles language and Python enforces hard commercial rules such as deposit caps, party-size limits, and cutoff times.
- Built a voice pipeline across STT, agent reasoning, and TTS, including fallback-to-text behavior when external speech APIs were unavailable.
- Optimized LLM inference 6.69x by implementing KV caching and preallocated sequence buffers, reducing generation time from 0.943s to 0.141s for 128 tokens.
- Deployed distributed data parallel training on Kubernetes across 2x Nvidia H100 nodes with SkyPilot, Docker, and torchrun.

### Mastercard -- Vadodara, India
**Senior Software Engineer**  
March 2024 - August 2025

- Owned platform architecture across React, TypeScript, Spring APIs, caching, observability, CI/CD, and production incident response for enterprise payment systems.
- Developed backend APIs with Spring, Spring Data JPA, and Hibernate, applying API Gateway and Event Sourcing patterns with Kafka.
- Drove design of a microfrontend platform using Webpack Module Federation, enabling independent deployment of 10+ product modules.
- Implemented Resilience4j Circuit Breaker and Retry patterns across 5+ microservices, reducing cascading failures and improving system availability by 15%.
- Used PostgreSQL JSONB for flexible, schema-free dynamic form handling so product teams could change forms without repeated database migrations.
- Owned frontend observability with Grafana and OpenTelemetry, and diagnosed production incidents using Splunk, Grafana, and Dynatrace, reducing MTTR from days to hours.
- Introduced Redis as a cache layer for Mastercard APIs and used k6 with InfluxDB to track latency trends and catch regressions.
- Built product analytics dashboards in Mixpanel, giving stakeholders KPI visibility across user journeys and product modules.
- Contributed 5 feature additions and bug fixes to Mastercard's internal design system, improving reusable UI quality across teams.
- Translated PM requirements into technical specifications, user stories, acceptance criteria, and delivery plans for cross-country engineering teams.
- Led cross-country delivery as de facto frontend/backend architect, UX designer, and product manager when projects needed end-to-end ownership.
- Led accessibility initiatives as Accessibility Champion, lifting WCAG compliance scores by 40% and coaching 10+ teams on implementation practices.

**Software Engineer II**  
March 2022 - February 2024

- Built greenfield backend services in Spring and Oracle with Hibernate, and frontend services in React + TypeScript with Redux and RTK Query.
- Served as a core maintainer for frontend performance, code quality, accessibility standards, and release reliability across React/TypeScript projects.
- Built Gradle pipelines to streamline dependency management and artifact generation for Java services.
- Achieved 95% test coverage with Jest, React Testing Library, Playwright, and Cypress; reduced CI e2e suite runtime from 8 hours to 3 hours through splitting, parallel execution, selective retries, and caching.
- Improved UI load performance by 30% by migrating static assets to Akamai CDN.
- Designed high-fidelity Figma prototypes in 2 days when there was no UX designer, helping align PMs and stakeholders before implementation.

**Software Engineer I**  
July 2019 - February 2022

- Designed RESTful APIs to automate BPM workflows using Camunda, modelling business logic with BPMN, DMN, and CMMN standards.
- Designed CI/CD delivery for an Angular.js application using Grunt.js and Jenkins.
- Built and maintained Hardware Security Module integration for mobile encryption using MDES tokenisation, securing card data transmission across payment flows.

**Software Engineering Intern**  
January 2019 - June 2019

- Implemented a backend image-serving service for MDES CardArt, improving delivery efficiency for card images in MDES APIs.
- Optimized image delivery with ImageMagick compression and enabled non-blocking delivery using Spring WebFlux and Reactive Streams.
- Practiced Test-Driven Development to define expected behaviour upfront, reduce regressions, and support safer refactoring.

---

## Selected Projects

- **Credit Card Fraud Analytics ([Report](https://github.com/aymanapatel/qmul-all-projects/blob/main/data-analytics/coursework1/credit-card-report.pdf), [Notebook](https://github.com/aymanapatel/qmul-all-projects/blob/main/data-analytics/coursework1/credit-card-notebook.ipynb)):** Built fraud-detection analysis on the IEEE-CIS dataset, merging 590,540 transactions across 434 transaction and identity features. Tuned Random Forest models with SMOTE variants and threshold optimization; best model achieved 96.9% test accuracy and 0.879 ROC-AUC on a chronological test split.
- **[Java GraphQL Service](https://github.com/aymanapatel/java-graphql):** Built a production-oriented Spring Boot GraphQL service with query-depth DDOS protection, cursor pagination, DataLoader N+1 resolution, file uploads, execution tracing, and JUnit 5 integration tests.
- **[Go Microservices](https://github.com/aymanapatel/golang-microservices):** Built a progressive Go microservices project covering REST APIs, Gorilla Mux validation, Swagger/OpenAPI docs, Envoy service mesh/load balancing, Kubernetes/WASM filters, and gRPC.
- **[RL Accessibility](https://github.com/aymanapatel/rl-a11y):** Applied reinforcement learning to improve web accessibility by training agents to identify and fix WCAG violations automatically.

---

## Writing & Talks

- **[Personal Blog](https://aymanace2049.hashnode.dev):** Published 40+ technical articles on system design, architecture, infrastructure, AI, RAG, LLM observability, OpenRouter, eBPF, Redis, Grafana, microfrontends, and change data capture. Featured in the eBPF newsletter.
- **Internal whitepapers:** Produced company-wide whitepapers on Accessibility and Microfrontend architecture; earned CTO recognition, became internal frontend engineering reference material, and circulated to 200 engineers.
- **[Kafka Ecosystem Seminar](https://drive.google.com/file/d/1txqBQZaRxxT7wu5csBuIHUfi8DrRvUMU/view?usp=sharing):** Delivered a technical seminar covering Kafka Architecture, Kafka Streams, Kafka Connect, AMQP messaging patterns, and event-driven architecture.

---

## Education

- **MSc Advanced Computer Science**, Queen Mary University of London -- September 2025 - September 2026
- **Bachelor of Computer Science**, Sardar Vallabhbhai Institute of Technology -- July 2015 - May 2019, GPA: 7.9/10

## Technical Skills

- **AI/LLM:** LangGraph, ReAct, MCP, Rasa CALM, RAG, LangChain, Chroma, vector databases, OpenRouter, Tavily, Gemini, LoRA, KV cache, transformers, PyTorch
- **Frontend:** React, TypeScript, Redux Toolkit, RTK Query, Next.js, Vite, Webpack, Module Federation, Figma
- **Backend:** Python, FastAPI, Java, Spring, Spring Data JPA, Hibernate, Go, REST APIs, GraphQL, microservices
- **Data/Events:** PostgreSQL, Oracle, MongoDB, Redis, Kafka, RabbitMQ, Debezium, change data capture
- **Cloud/DevOps:** Docker, Kubernetes, SkyPilot, AWS, Terraform, Jenkins, Gradle, Ansible
- **Testing/Observability:** Playwright, Cypress, Jest, JUnit, Testcontainers, k6, Grafana, Prometheus, Splunk, Dynatrace, OpenTelemetry
