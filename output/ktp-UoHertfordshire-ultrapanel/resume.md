# Ayman Patel

London, UK | ayman.patel97@gmail.com | +447900626876 | linkedin.com/in/aymanapatel | patelofthought.com/me | github.com/aymanapatel

## Professional Summary

Software developer and applied AI engineer with 6+ years of production experience building full-stack systems at Mastercard, plus recent AI engineering work across LLM architectures, AI agents, MLOps, distributed training, and inference optimisation. Strong fit for Ultrapanel's KTP project through hands-on experience in software development, data collection and analysis, API integration, project delivery, and technical dissemination. Currently completing an MSc in Advanced Computer Science at Queen Mary University of London, with a track record of turning ambiguous requirements into reliable systems, documentation, presentations, and stakeholder-facing outputs.

## Core Competencies

- Software development and full-stack delivery
- Applied AI and machine learning systems
- Data collection, analysis, and model evaluation
- Data engineering and API integration
- Project planning and technical ownership
- Technical writing, reports, and presentations
- CI/CD, testing, observability, and reliability
- Stakeholder collaboration across technical and business teams

## Work Experience

### Nebius Academy - AI Engineering Fellow
London, UK | March 2025 - May 2025

- Completed an intensive AI engineering fellowship covering LLM architectures, AI agents, MLOps, distributed training, and GPU performance engineering on Nvidia H100 infrastructure.
- Built a complete transformer language model from scratch, implementing multi-head causal self-attention, feed-forward networks, autoregressive generation, and KV caching while validating causality with targeted tests.
- Built a LangGraph ReAct research agent and added a dataflow integrity check so final outputs could be traced back to tool calls, reducing the risk of unsupported AI-generated claims.
- Deployed distributed data parallel training on Kubernetes across 2 Nvidia H100 nodes using Docker, SkyPilot, and torchrun, keeping configuration version-controlled and reproducible.
- Optimised LLM inference from 0.943s to 0.141s for 128 tokens by implementing KV caching and preallocated sequence buffers.

### Mastercard - Senior Software Engineer
Vadodara, India | March 2024 - August 2025

- Owned translation of product manager requirements into technical specifications, user stories, and acceptance criteria for cross-functional engineering teams.
- Developed backend APIs with Spring, Spring Data JPA, and Hibernate, applying API Gateway and Event Sourcing patterns across production systems.
- Owned React and TypeScript frontend delivery using Redux Toolkit and RTK Query for scalable state management and API data-fetching layers.
- Introduced Redis as a cache layer for frequently accessed Mastercard API data and implemented Resilience4j circuit breaker and retry patterns across 5+ microservices, improving availability by 15%.
- Used PostgreSQL JSONB for flexible, schema-free dynamic form handling and built Mixpanel analytics dashboards to surface product KPIs for stakeholders.
- Owned production diagnosis with Splunk, Grafana, Dynatrace, and OpenTelemetry, reducing mean time to resolution from days to hours.
- Led cross-country delivery as de facto frontend architect, UX designer, and product manager, aligning teams around architecture, delivery trade-offs, and stakeholder outcomes.

### Mastercard - Software Engineer II
Vadodara, India | March 2022 - February 2024

- Built greenfield applications in React, Redux, JavaScript, and Spring, serving as core maintainer for performance, code quality, accessibility, and test standards.
- Wrote unit tests with Jest and React Testing Library and end-to-end tests with Playwright and Cypress, achieving 95% test coverage and reducing CI e2e runtime from 8 hours to 3 hours.
- Improved UI load performance by 30% by migrating static assets to an Akamai CDN.
- Designed high-fidelity Figma prototypes to align product managers and stakeholders, creating UX direction in 2 days where no dedicated UX designer was available.
- Steered RBAC and status-based access control across 5+ products under urgent delivery pressure within 2 weeks.

### Mastercard - Software Engineer I / Intern
Vadodara, India | January 2019 - February 2022

- Designed and implemented RESTful APIs to automate BPM workflows using Camunda, BPMN, DMN, and CMMN.
- Built CI/CD pipelines with Grunt.js and Jenkins and maintained Angular.js application delivery.
- Developed Hardware Security Module integration for mobile encryption using MDES tokenisation, supporting secure card data flows.
- Implemented a backend image-serving service using Spring WebFlux and Reactive Streams, improving scalable asynchronous image delivery.

## Selected Projects

### Credit Card Fraud Analytics
Built a fraud-detection analysis on the IEEE-CIS dataset, merging 590,540 transactions across 434 transaction and identity features. Investigated class imbalance, reduced the feature space to stronger predictors, and tuned Random Forest models with SMOTE variants and threshold optimisation. Best model achieved 96.9% test accuracy, 0.503 F1, 0.541 precision, 0.470 recall, and 0.879 ROC-AUC on a strict chronological test split.

### Repository Summariser
Built a FastAPI and LLM-based service that generates human-readable summaries of GitHub repositories. Extracted code skeletons using AST parsing and Tree-sitter, prioritised source files, and assembled context within a 7000-token limit. This project secured admission into the Nebius AI Engineering Fellowship.

### Go Microservices
Built an end-to-end cloud-native microservice in Go, implementing service discovery, distributed tracing, containerized deployment, observability, and CI/CD practices.

### RL Accessibility
Applied reinforcement learning to improve web accessibility by training agents to identify and fix WCAG violations automatically.

## Education

- MSc Advanced Computer Science, Queen Mary University of London | September 2025 - September 2026
- Bachelor of Computer Science, Sardar Vallabhbhai Institute of Technology | July 2015 - May 2019 | GPA: 7.9/10

## Writing and Presentations

- Published 40+ technical articles on system design, architecture, infrastructure, databases, observability, and AI.
- Produced Mastercard whitepapers on Accessibility and Microfrontend architecture, recognised by the CTO, adopted as internal reference material, and circulated to 200 engineers.
- Delivered seminars and technical presentations on Kafka, Git, frontend architecture, accessibility, and engineering practices.

## Skills

- Languages and Frameworks: Java, Python, Go, TypeScript, JavaScript, React, Spring, FastAPI, Django, Quarkus
- AI and ML: PyTorch, Scikit-learn, Transformers, LoRA, Mixture of Experts, RoPE, KV Cache, Random Forest, SMOTE, LangChain, RAG, AI agents, MCP
- Data and APIs: REST APIs, PostgreSQL, PostgreSQL JSONB, Redis, MongoDB, Kafka, RabbitMQ, Debezium, Change Data Capture, Pandas, DuckDB, Parquet
- Cloud and DevOps: Docker, Kubernetes, Terraform, AWS, Jenkins, Gradle, SkyPilot, Container Registry
- Quality and Observability: Jest, React Testing Library, Cypress, Playwright, JUnit, Mockito, Grafana, Prometheus, Splunk, Dynatrace, OpenTelemetry, k6
