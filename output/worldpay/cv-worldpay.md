# CV -- Ayman Patel

**Location:** London, UK  
**Email:** ayman.patel97@gmail.com  
**Phone:** +447900626876  
**LinkedIn:** linkedin.com/in/aymanapatel  
**GitHub:** github.com/aymanapatel  
**Website:** aymanace2049.hashnode.dev  
**Portfolio:** patelofthought.com/me

## Professional Summary

Senior Software Engineer with 6+ years of production experience at Mastercard building Java/Spring, Oracle, REST API, React/TypeScript, CI/CD, testing, and observability systems for payment-domain platforms. Strong background in secure, high-availability distributed applications, production support, incident diagnosis, performance testing, and cross-functional delivery across product, QA, release, and engineering teams. Experienced with Spring, Hibernate, Oracle, PostgreSQL, Kafka, Redis, Jenkins, Gradle, Linux-based delivery practices, JUnit, Playwright, Cypress, Splunk, Grafana, Dynatrace, and OpenTelemetry. Currently completing an MSc in Advanced Computer Science at Queen Mary University of London, with recent AI engineering work across LLM systems, MLOps, Kubernetes, Docker, and GPU performance.

## Work Experience

### Mastercard -- Vadodara, India
**Senior Software Engineer**  
March 2024 - August 2025

*Owned platform architecture across Spring APIs, React/TypeScript frontends, caching, observability, CI/CD, and production incident response.*  
*Translated product requirements into technical specifications, user stories, and acceptance criteria while driving cross-country delivery across engineering teams.*

- Developed backend APIs with Spring, Spring Data JPA, and Hibernate, applying API Gateway and Event Sourcing patterns using Kafka
- Owned translation of product manager requirements into detailed technical specifications, user stories, and acceptance criteria for cross-functional engineering teams
- Owned implementation of Resilience4j Circuit Breaker and Retry patterns across 5+ microservices, reducing cascading failures and improving system availability by 15%
- Owned introduction of Redis as a cache layer for Mastercard APIs to optimize response times for frequently accessed data
- Owned production incident diagnosis using Splunk, Grafana, and Dynatrace, reducing mean time to resolution from days to hours
- Owned load and performance testing with k6, using InfluxDB as the TSDB to track trends and regressions over time
- Owned CI/CD pipelines in Jenkins for staging-to-production delivery of artifacts
- Leveraged PostgreSQL JSONB to own flexible, schema-free dynamic form handling
- Owned the frontend in React and TypeScript, using Redux Toolkit and RTK Query for scalable state and data-fetching layers
- Drove design of a microfrontend platform using Webpack Module Federation, enabling independent deployment of 10+ product modules
- Led accessibility initiatives as Accessibility Champion, lifting WCAG compliance scores by 40% and coaching 10+ teams on best practices
- Led cross-country projects as the de facto frontend/backend architect, UX designer, and product manager, driving alignment across teams and owning end-to-end delivery

### Mastercard -- Vadodara, India
**Software Engineer II**  
March 2022 - February 2024

*Built greenfield backend and frontend services, then hardened them through testing, performance work, and accessibility standards.*  
*Served as a core maintainer for code quality, release reliability, and user-facing performance across React/TypeScript and Spring applications.*

- Built greenfield backend services in Spring and Oracle with Hibernate as the ORM layer
- Built greenfield frontend services in React + TypeScript with state management using Redux and RTK Query
- Built pipelines using Gradle, streamlining dependency management and artifact generation
- Wrote unit tests using Jest and React Testing Library, and end-to-end tests using Playwright and Cypress, achieving 95% test coverage and e2e sanity while preventing regressions at scale
- Reduced CI e2e suite runtime from 8 hours to 3 hours through test splitting, parallel execution, selective retries, and environment-level caching
- Improved UI load performance by 30% by migrating to an Akamai CDN
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
- Practiced Test-Driven Development (TDD) to define expected behavior upfront, improve code reliability, reduce regressions, and support safe refactorings

### Nebius Academy -- London, UK
**AI Engineering Fellow**  
March 2026 - May 2026

*Completed an intensive 4-module AI/ML engineering fellowship covering LLM architectures, AI agents, MLOps, and GPU performance engineering.*  
*Built 12+ hands-on systems on Nvidia H100 infrastructure, spanning transformers, agent workflows, distributed training, and inference optimization.*

- Deployed distributed data parallel training on Kubernetes across 2× Nvidia H100 nodes using Docker, SkyPilot, `torchrun`, and version-controlled job specifications
- Containerized training pipelines with Docker and pushed to Nebius Container Registry, using environment-driven YAML configuration for batch size, learning rate, and mixed precision
- Built a LangGraph ReAct research agent with dataflow integrity checks to verify every factual claim against tool-call outputs
- Designed an MCP shared tool layer so multiple agent clients could dynamically discover and call common tools without duplicated integration logic
- Achieved 6.69× speedup in LLM inference by implementing KV caching and preallocated sequence buffers, reducing generation time from 0.943s to 0.141s for 128 tokens

## Education

- **MSc Advanced Computer Science**, Queen Mary University of London (September 2025 - September 2026)
- **Bachelor of Computer Science**, Sardar Vallabhbhai Institute of Technology (July 2015 - May 2019) -- GPA: 7.9/10

## Selected Projects

- **Credit Card Fraud Analytics ([Report](https://github.com/aymanapatel/qmul-all-projects/blob/main/data-analytics/coursework1/credit-card-report.pdf), [Notebook](https://github.com/aymanapatel/qmul-all-projects/blob/main/data-analytics/coursework1/credit-card-notebook.ipynb))** -- Built a fraud-detection analysis on the IEEE-CIS credit card dataset, merging 590,540 transactions across 434 transaction and identity features, identifying severe class imbalance at a 3.5% fraud rate, and reducing the feature space to the strongest predictors such as card, product, amount, identity, and temporal signals. Tuned Random Forest models with SMOTE variants and threshold optimization; the best model achieved 96.9% test accuracy, 0.503 F1, 0.541 precision, 0.470 recall, and 0.879 ROC-AUC on a strict chronological test split.
- **[Java CLI using GraalVM](https://github.com/aymanapatel/java-cli)** -- Built a Java CLI tool using the Picocli framework to query the Stack Overflow API, then compiled it to a native binary with GraalVM for zero-JVM-startup execution
- **[Java GraphQL](https://github.com/aymanapatel/java-graphql)** -- Developed a production-oriented Spring Boot GraphQL service demonstrating advanced patterns including query-depth DDOS protection, cursor-based pagination, file upload mutations, DataLoader N+1 resolution, and execution tracing with full JUnit 5 integration tests
- **[Go Microservices](https://github.com/aymanapatel/golang-microservices)** -- Built a progressive Go microservices project spanning standard-library REST APIs, Gorilla Mux with custom request validation, Swagger/OpenAPI documentation, Envoy-based service mesh/load balancing with K8s/WASM filters, and gRPC
- **{Tech: Europe} Hackathon | London, UK — Most Secure Build Award (€1,000 cash)** -- Built a platform bridging deep science and venture capital/biotech by turning raw academic papers into investor-ready intelligence. Recognized by Aikido Security for the most secure codebase with zero issues detected, despite last-minute demo crunch in an npm ecosystem.
- **Encode Hackathon | London, UK (3rd place)** -- Built Phantom Fraud, an AI-powered financial risk engine for Solana blockchain using Solana CLI, OpenRouter, and Helius APIs to detect wash-trading patterns

## Writing

- **Personal Blog** -- 40+ published technical articles on system design and architecture, including pieces on eBPF, microfrontends, change data capture, Redis, Grafana, infrastructure as code, RAG with Postgres, and LLM observability
- **Frontend engineering whitepapers** -- Produced company-wide whitepapers on Accessibility and Microfrontend architecture; earned CTO recognition, were adopted as internal frontend engineering reference material, and were circulated to 200 engineers
- **Seminar: Kafka Ecosystem** -- Delivered a technical seminar covering Kafka Architecture, Kafka Streams, Kafka Connect, and AMQP messaging patterns

## Skills

- **Primary backend:** Java, Spring, Spring Boot, Spring Data JPA, Hibernate, REST APIs, Microservices, Event Sourcing, CQRS, Resilience4j, WebFlux
- **Databases:** Oracle, SQL, PostgreSQL, PostgreSQL JSONB, MongoDB, Redis
- **Payments & security:** Mastercard payment systems, MDES tokenisation, Hardware Security Module (HSM) integration, secure card-data transmission, fraud analytics
- **Frontend:** React, TypeScript, Redux Toolkit, RTK Query, JavaScript (ES6+), HTML, CSS, Angular.js, Next.js, Webpack, Module Federation, Figma
- **Build, release & operations:** Jenkins, Gradle, Git, GitHub, Docker, Kubernetes, Linux environments, CI/CD, production incident response, release support
- **Testing:** JUnit, Mockito, Jest, React Testing Library, Cypress, Playwright, Testcontainers, TDD, e2e testing
- **Observability & performance:** Grafana, Prometheus, Splunk, Dynatrace, OpenTelemetry, k6, InfluxDB, CDN performance optimization
- **Messaging & workflow:** Kafka, RabbitMQ, Debezium, Change Data Capture, Camunda, BPMN, DMN, CMMN
- **AI/ML:** Python, PyTorch, Scikit-learn, Transformers, LoRA, RAG, Langchain, Chroma, Vector Databases, Multi-Agent Systems, MCP
- **Cloud & DevOps:** AWS (S3, Lambda, EC2), Terraform, Localstack, Ansible, PCF, YAML-based configuration
