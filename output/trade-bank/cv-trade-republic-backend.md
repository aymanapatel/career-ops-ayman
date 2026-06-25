# Ayman Patel — Backend Software Engineer

**Location:** London, UK  
**Email:** ayman.patel97@gmail.com  
**Phone:** +447900626876  
**LinkedIn:** linkedin.com/in/aymanapatel  
**GitHub:** github.com/aymanapatel

---

## Professional Summary

Backend engineer with 6+ years of production experience in the JVM ecosystem, building scalable, high-availability services in the financial sector. At Mastercard, I designed microservices handling payment flows, tokenization, and fraud detection; built a microfrontend platform enabling independent deployment of 10+ product modules; and introduced platform-wide RBAC/SBAC and resilience patterns across 5+ products. I care about reliability, observable systems, and continuous delivery — and I back that with 95% test coverage, circuit-breaker-protected services, and CI/CD pipelines that deploy to production with confidence. Currently completing an MSc in Advanced Computer Science at Queen Mary University of London.

---

## Technical Skills

- **Languages & Frameworks:** Java, Kotlin, Spring Boot, Spring Data JPA, Hibernate, jOOQ, REST APIs, GraphQL
- **Architecture:** Microservices, Event Sourcing, CQRS, API Gateway, Service-Oriented Architecture, Domain-Driven Design
- **Cloud & DevOps:** AWS (S3, Lambda, EC2), Docker, Kubernetes, Jenkins, GitHub Actions, Terraform, Gradle, Ansible
- **Data & Messaging:** PostgreSQL, Oracle, MongoDB, Redis, Kafka, RabbitMQ, Debezium, Change Data Capture
- **Reliability & Performance:** Resilience4j (Circuit Breaker, Retry, Rate Limiter), Redis caching, k6 load testing, Grafana, OpenTelemetry, Splunk, Dynatrace
- **Testing:** JUnit, Mockito, Testcontainers, Jest, Playwright, Cypress — 95% coverage on critical paths
- **Other:** Camunda BPMN, Python, Go, FastAPI

---

## Work Experience

### Mastercard — Vadodara, India / London, UK
**Senior Software Engineer**  
March 2024 – August 2025

- **Backend & APIs:** Developed and maintained scalable backend APIs with **Spring Boot**, **Spring Data JPA**, and **Hibernate**; applied **API Gateway** and **Event Sourcing** patterns using **Kafka** to handle high-throughput payment and fraud-detection workflows.
- **Platform Engineering:** Drove design of a **microfrontend platform** using **Webpack Module Federation**, enabling independent deployment of **10+ product modules** and reducing cross-team release coordination overhead.
- **Foundation Services:** Owned introduction of **RBAC and SBAC** (Status-Based Access Control) across the entire program (**5+ products**), delivering it under urgency within 2 weeks. This became the canonical authorization layer for all services.
- **Caching & Performance:** Introduced **Redis** as a caching layer for frequently accessed data, cutting API response times significantly. Owned load and performance testing with **k6** and **InfluxDB** to track latency trends and catch regressions before production.
- **Resilience:** Implemented **Resilience4j Circuit Breaker and Retry** patterns across **5+ microservices**, reducing cascading failures and improving system availability by **15%**.
- **Observability:** Owned production incident diagnosis using **Splunk, Grafana, and Dynatrace**, reducing mean time to resolution from days to hours. Instrumented services with **OpenTelemetry** for distributed tracing.
- **Data Flexibility:** Leveraged **PostgreSQL JSONB** for schema-free dynamic form handling, allowing product teams to iterate on forms without database migrations.
- **CI/CD:** Owned Jenkins pipelines for staging-to-production artifact delivery, practicing iterative development and continuous delivery.

**Software Engineer II**  
March 2022 – February 2024

- Built **greenfield backend services** in **Spring** and **Oracle** with **Hibernate** as the ORM layer, serving as core maintainer for performance and code quality.
- Built pipelines using **Gradle**, streamlining dependency management and artifact generation.
- Achieved **95% test coverage** with **JUnit** and **Mockito**, and reduced CI e2e suite runtime from **8 hours to 3 hours** through test splitting, parallel execution, selective retries, and environment-level caching.
- Improved UI load performance by **30%** by migrating static assets to an **Akamai CDN**.

**Software Engineer I**  
July 2019 – February 2022

- Designed and implemented **RESTful APIs** to automate BPM workflows using **Camunda**; modelled complex business logic with **BPMN, DMN, and CMMN** standards.
- Developed and maintained **Hardware Security Module (HSM)** integration for mobile encryption using **MDES tokenisation**, securing card data transmission across payment flows.
- Designed CI/CD pipeline to deploy applications using **Jenkins**.

**Software Engineering Intern**  
January 2019 – June 2019

- Implemented a backend image-serving service for MDES's CardArt project, optimizing delivery with **ImageMagick** compression and **Spring WebFlux** reactive streams for non-blocking, scalable request handling.
- Practiced **Test-Driven Development (TDD)** to define expected behavior upfront and support safe refactorings.

---

## Selected Projects

- **[Java GraphQL](https://github.com/aymanapatel/java-graphql)** — Production-oriented Spring Boot GraphQL service with query-depth DDOS protection, cursor-based pagination, DataLoader N+1 resolution, file upload mutations, and full JUnit 5 integration tests.
- **[Go Microservices](https://github.com/aymanapatel/golang-microservices)** — Progressive Go microservices project spanning standard-library REST APIs, Gorilla Mux with custom validation, Swagger/OpenAPI docs, Envoy-based service mesh/load balancing with K8s/WASM filters, and gRPC.
- **[Java CLI using GraalVM](https://github.com/aymanapatel/java-cli)** — Java CLI tool using Picocli to query the Stack Overflow API, compiled to a native binary with GraalVM for zero-JVM-startup execution.

---

## Education

- **MSc Advanced Computer Science**, Queen Mary University of London — September 2025 – September 2026
- **Bachelor of Computer Science**, Sardar Vallabhbhai Institute of Technology — July 2015 – May 2019 (GPA: 7.9/10)

---

## Writing & Community

- **Personal Blog:** 40+ published technical articles on system design, architecture, and infrastructure (aymanace2049.hashnode.dev)
- **Whitepapers:** Authored company-wide whitepapers on Microfrontend Architecture and Accessibility, adopted as internal engineering reference material and circulated to **200+ engineers**; earned CTO recognition.
