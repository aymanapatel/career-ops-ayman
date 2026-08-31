# Ayman Patel

**Senior Backend & Integration Engineer** | London, United Kingdom

[ayman.patel97@gmail.com](mailto:ayman.patel97@gmail.com) · [linkedin.com/in/aymanapatel](https://linkedin.com/in/aymanapatel) · [github.com/aymanapatel](https://github.com/aymanapatel) · [patelofthought.com/me](https://patelofthought.com/me)

## Professional Summary

Senior software engineer with 6+ years designing and delivering event-driven integrations at Mastercard. Built asynchronous Kafka pipelines using event-sourcing patterns with clean separation between producers and consumers, and applied request/reply and event-carried state transfer to decouple services across heterogeneous systems. Owned CI/CD, reliability (idempotency, retry, dead-letter-style recovery), observability, and incident response for regulated enterprise integrations. Strong in Go, Python, Java/Spring, REST APIs, Docker/Kubernetes, test-driven development, and senior pull-request review. Currently completing an MSc in Advanced Computer Science at Queen Mary University of London. *(REQ-E1, REQ-E2, REQ-E3, REQ-E4, REQ-E7, REQ-E8)*

## Core Competencies

Event-Driven Integration · Kafka & Event Streaming · Event Sourcing · Request/Reply & Event-Carried State Transfer · Stream Processing · REST APIs & Webhooks · Go & Python Services · Reliable Delivery (Idempotency & Retry) · Observability & Distributed Tracing · TDD & Senior Code Review · Docker & Kubernetes · CI/CD

## Work Experience

### Mastercard — Senior Software Engineer
*Vadodara, India | March 2024 -- August 2025*

- Owned backend and integration architecture across **Spring APIs, Kafka, PostgreSQL, Redis, CI/CD, observability, and production incident response** for regulated enterprise payment systems. *(REQ-E8, REQ-D20)*
- Designed and supported REST APIs with Spring, Spring Data JPA, and Hibernate, applying API Gateway and **event-sourcing patterns with Kafka** to model business events and keep producers and consumers decoupled. *(REQ-E2, REQ-D7, REQ-E13)*
- Applied reliability patterns — **retry and circuit-breaking with Resilience4j** across 5+ microservices — reducing cascading failures and improving service availability by **15%**. *(REQ-E3)*
- Applied integration — **request/reply, event-carried state transfer** across microservices
- Designed change-data-capture and event-streaming integration approaches drawing on **Debezium, Kafka Connect, transaction-log replication (WAL/redo), and the transactional outbox and saga patterns**, captured in an in-depth technical paper on capturing data in motion for microservices [aymanace2049.hashnode.dev](https://aymanace2049.hashnode.dev/change-data-capture-capture-data-in-motion-in-your-microservices). *(REQ-E2, REQ-E3, REQ-D8, REQ-D9)*
- Instrumented production integrations with **Grafana and OpenTelemetry, distributed tracing, Splunk and Dynatrace**, moving incident resolution from days to hours and informing service-level observability. *(REQ-E7)*
- Ran load and performance tests with k6, stored time-series in InfluxDB, and detected latency regressions before release. *(REQ-E7)*
- Owned **Git-based Jenkins CI/CD** as an automated delivery gate: pipelines built on controlled branching and tagged releases, running unit, integration, and end-to-end tests before promotion, then releasing via staged staging-to-production stages with manual approval and rollback—maintaining reliable, repeatable delivery and release management across established codebases. *(REQ-D16, REQ-E10)*
- Applied a **GitOps-style, YAML configuration based approach for depoyment.** Used Cloud foundary based manifest file configration for defining server resources, versions and other configurations for repeaable deployment. *(REQ-D15, REQ-E10)*
- Deployed and operated services on cloud platforms including **AWS (S3, SQS, SNS, EC2)** and **Cloud Foundry** — working with **buildpacks** for containerisation-free, platform-managed app deployment and object storage on S3. *(REQ-D13)*
- Designed and enforced a **blue-green deployment strategy**, standardising zero-downtime release and automatic rollback across **10+ products** by defining the pattern, tooling, and review gates that the broader engineering org adopted as the default delivery path. *(REQ-D16)*
- Applied OOP and Repository, Factory, Strategy, Observer, Template Method, and DTO patterns to keep Java/Spring domain logic testable and decoupled from frameworks. *(REQ-E4, REQ-E8)*
- Delivered a complete end-to-end product in **2 months** with a newly formed team working in a new country — and **no Product Manager, UX designer, or lead engineer on the ground**. Stepped in to own the product scope and acceptance criteria, made UX and design trade-offs, and set the technical direction; coordinated the cross-country team around estimates, priorities, and a tight delivery timeline to ship a production-ready product within the window. *(REQ-E6, REQ-E14)*
- Worked in an Agile Scrum delivery team, participating in sprint planning, daily stand-ups, retrospectives, and backlog refinement, and **led these ceremonies when the Product Owner or Scrum Master was unavailable** — keeping sprint goal and delivery momentum on track. *(REQ-E5, REQ-E14)*
- Translated product requirements into technical specifications, user stories, acceptance criteria, estimates, and delivery plans while coordinating cross-country engineering teams. *(REQ-E11, REQ-E12, REQ-E14)*
- Reviewed pull requests, defined shared architecture and versioning boundaries, and coached 10+ engineering teams on quality standards and maintainable implementation patterns. *(REQ-D6, REQ-E9)*

### Mastercard — Software Engineer II
*Vadodara, India | March 2022 -- February 2024*

- Built and maintained greenfield backend services with **Java, Spring, Oracle, and Hibernate**, taking features from implementation through testing and release. *(REQ-E4)*
- Served as a core maintainer for code quality, peer review, release reliability, application performance, and production support. *(REQ-D16, REQ-E9)*
- Defined **unit, integration, and end-to-end tests** with TDD, Jest, React Testing Library, Playwright, and Cypress, achieving **95% automated test coverage**. *(REQ-E4)*
- Reduced a CI end-to-end suite from 8 hours to 3 via test splitting, parallel execution, selective retries, and environment caching. *(REQ-E4, REQ-D16)*
- Built Gradle pipelines for dependency management and repeatable artifact generation across Java services. *(REQ-D16, REQ-E10)*
- Used **Docker multi-stage builds** to compile, test, and package release artifacts into minimal runtime images, keeping delivery self-contained and reproducible across environments. *(REQ-D14)*

### Mastercard — Software Engineer I
*Vadodara, India | July 2019 -- February 2022*

- Designed REST APIs and automated enterprise workflows with Camunda, modelling business processes and decision rules through BPMN, DMN, and CMMN. *(REQ-D7, REQ-D11)*
- Built Jenkins CI/CD for an Angular.js application and supported controlled delivery into the Mastercard platform. *(REQ-D16, REQ-E10)*
- Developed and maintained a Hardware Security Module integration for MDES tokenisation, securing payment-card data across system boundaries. *(REQ-D19)*

### Mastercard — Software Engineering Intern
*Vadodara, India | January 2019 -- June 2019*

- Built a non-blocking, high-throughput image-serving API with Spring WebFlux and Reactive Streams, using ImageMagick compression to reduce payload sizes. *(REQ-D7)*
- Used test-driven development to define service behaviour, reduce regressions, and support safe refactoring. *(REQ-E4)*

## Personal Projects

### [Go Microservices](https://github.com/aymanapatel/golang-microservices)
*Go, REST, gRPC, Kubernetes*

- Built progressive Go services using standard-library HTTP, Gorilla Mux, custom request validation, **Swagger/OpenAPI documentation**, and gRPC — clean, testable, production-quality Go. *(REQ-D4, REQ-D10, REQ-D17)*
- Added Envoy-based service mesh and load balancing with Kubernetes and WASM filters, focusing on service boundaries, deployable infrastructure, and containerised delivery. *(REQ-D14, REQ-D18)*

### Nebius Engineering Systems
*Python, Docker, Kubernetes*

- Built a shared MCP tool service so multiple clients could **discover and call common integrations dynamically** instead of duplicating connector logic — a connector/discovery pattern with clear producer-consumer separation. *(REQ-D5, REQ-D12, REQ-E8)*
- Containerised Python workloads with Docker and deployed reproducible jobs across two Kubernetes nodes, keeping runtime configuration in version-controlled YAML. *(REQ-D5, REQ-D14, REQ-D18)*
- Added traceability checks, deterministic business-rule enforcement, and graceful fallback behaviour (retry and graceful degradation) for external-service failures. *(REQ-D5, REQ-E8)*

## Technical Seminar

### [Kafka Ecosystem -- Seminar Paper](https://drive.google.com/file/d/1txqBQZaRxxT7wu5csBuIHUfi8DrRvUMU/view?usp=sharing)
*October 2018*

- Presented Kafka architecture, **Kafka Streams, Kafka Connect**, AMQP messaging, and event-driven system design, supported by a written technical paper — a foundation in event-streaming and stream-processing frameworks. *(REQ-E2, REQ-D8, REQ-D11)*

## Education

### Queen Mary University of London — MSc Advanced Computer Science
*London, United Kingdom | September 2025 -- September 2026* *(REQ-D2)*

### Sardar Vallabhbhai Institute of Technology — Bachelor of Computer Science; GPA: 7.9/10
*Vadodara, India | July 2015 -- May 2019* *(REQ-D1)*

## Technical Skills

- **Event Streaming & Integration:** Kafka, Kafka Streams, Kafka Connect, event sourcing, CQRS, request/reply, event-carried state transfer, stream processing, RabbitMQ, AMQP, Camunda *(REQ-E2, REQ-E3, REQ-D8, REQ-D11)*
- **Languages & Frameworks:** Go, Python, Java, Spring, Spring Data JPA, Hibernate, FastAPI, REST APIs, webhooks, microservices, API Gateway *(REQ-D4, REQ-D5, REQ-D7, REQ-D17)*
- **Data & Contracts:** PostgreSQL, Oracle, MongoDB, Redis, JSONB, schema evolution, Swagger/OpenAPI, API versioning *(REQ-D10, REQ-E13)*
- **Cloud & Delivery:** AWS (S3, SQS, SNS, Lambda, EC2), Cloud Foundry, buildpacks, Docker, Kubernetes, Terraform, Infrastructure as Code, Jenkins, Gradle, Git, CI/CD *(REQ-D13, REQ-D14, REQ-E10, REQ-D18)*
- **Reliability & Observability:** Retry and timeout controls, circuit-breaking, safe failure and recovery behaviour, Grafana, Prometheus, OpenTelemetry, distributed tracing, Splunk, Dynatrace, k6, InfluxDB *(REQ-E7, REQ-E8)*
- **Testing & Engineering:** TDD, JUnit, Mockito, Testcontainers, unit/integration/end-to-end tests, Playwright, Cypress, Jest, senior pull-request review, technical specifications, release management, runbook and incident investigation *(REQ-E4, REQ-D16, REQ-E9, REQ-E11)*

## Technical Writing

Published 40+ technical articles covering system design, observability, distributed data infrastructure, **Kafka, Redis, and event-driven architectures**, and production engineering at [patelofthought.com/blog](https://patelofthought.com/blog). Produced internal architecture whitepapers adopted as engineering reference material and circulated to 200 engineers. *(REQ-E11, REQ-E12)*
