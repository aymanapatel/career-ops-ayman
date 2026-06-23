# Ayman Patel

London, UK | [ayman.patel97@gmail.com](mailto:ayman.patel97@gmail.com) | [+447900626876](tel:+447900626876) | [LinkedIn](https://linkedin.com/in/aymanapatel) | [GitHub](https://github.com/aymanapatel) | [Blog](https://aymanace2049.hashnode.dev) | [Portfolio](https://patelofthought.com/me)

## Professional Summary

Senior Full-Stack Engineer with 6+ years at Mastercard building production software across JVM backend services, React/TypeScript frontends, workflow automation, payment-related integrations, observability, CI/CD, and cross-country delivery. Strong match for greenfield 0-to-1 product engineering: owned ambiguous product requirements, turned them into technical specs and user stories, built Spring APIs, introduced Redis caching and resilience patterns across microservices, and helped shape frontend architecture for independently deployed product modules. Currently completing an MSc in Advanced Computer Science at Queen Mary University of London and recently completed the Nebius AI Engineering Fellowship, adding practical depth in cloud-native ML systems, agents, distributed training, and inference optimization.

## Education

- **MSc Advanced Computer Science**, Queen Mary University of London | September 2025 - September 2026
- **Bachelor of Computer Science**, Sardar Vallabhbhai Institute of Technology | July 2015 - May 2019  
  GPA: 7.9/10

## Work Experience

### Mastercard -- Senior Software Engineer
Vadodara, India | March 2024 - August 2025

- Owned delivery across backend, frontend, architecture, UX, and product requirements for cross-country teams, translating product manager goals into technical specifications, user stories, acceptance criteria, and implementation plans.
- Built production backend APIs with Spring, Spring Data JPA, Hibernate, API Gateway, and Event Sourcing patterns, supporting modular services that needed clear ownership boundaries and reliable integration behavior.
- Introduced Redis caching for frequently accessed Mastercard APIs and implemented Resilience4j circuit breaker and retry patterns across 5+ microservices, improving availability by 15%.
- Designed a Webpack Module Federation microfrontend platform that enabled independent deployment of 10+ product modules, reducing coupling between teams and supporting faster product iteration.
- Used PostgreSQL JSONB for flexible dynamic-form handling and built Mixpanel analytics dashboards that gave stakeholders clearer product KPIs and product-usage visibility.
- Owned production diagnosis with Splunk, Grafana, Dynatrace, and OpenTelemetry, reducing mean time to resolution from days to hours through better traces, dashboards, and incident analysis.
- Led accessibility initiatives as Accessibility Champion, improving WCAG compliance scores by 40% and coaching 10+ teams on practical implementation standards.

### Mastercard -- Software Engineer II
Vadodara, India | March 2022 - February 2024

- Built greenfield applications in React, Redux, JavaScript, and Spring, serving as a core maintainer for frontend performance, code quality, accessibility, and test standards.
- Wrote unit tests with Jest and React Testing Library and end-to-end tests with Playwright and Cypress, achieving 95% test coverage and reducing CI e2e runtime from 8 hours to 3 hours.
- Improved UI load performance by 30% by migrating static assets to Akamai CDN and tightening delivery paths for user-facing screens.
- Built Gradle pipelines to streamline dependency management and artifact generation for Java services and deployment workflows.
- Designed high-fidelity Figma prototypes in 2 days when no UX designer was available, aligning product managers and stakeholders around product direction before build.
- Steered RBAC and status-based access control across 5+ products under urgent delivery pressure within 2 weeks, coordinating full-stack changes across product boundaries.

### Mastercard -- Software Engineer I / Software Engineering Intern
Vadodara, India | January 2019 - February 2022

- Designed and implemented REST APIs to automate BPM workflows using Camunda, BPMN, DMN, and CMMN standards.
- Built CI/CD delivery for Angular.js applications using Grunt.js and Jenkins, supporting repeatable staging-to-production releases.
- Developed Hardware Security Module integration for mobile encryption using MDES tokenisation, supporting secure card-data transmission across payment flows.
- Implemented a backend image-serving service for MDES CardArt using ImageMagick compression, Spring WebFlux, Reactive Streams, and TDD practices.

### Nebius Academy -- AI Engineering Fellow
London, UK | March 2025 - May 2025

- Completed an intensive AI/ML engineering fellowship covering LLM architectures, AI agents, MLOps, distributed training, and GPU performance engineering on Nvidia H100 infrastructure.
- Built a transformer language model from scratch, implementing multi-head causal self-attention, feed-forward networks, autoregressive generation, KV caching, and causality checks.
- Implemented LoRA from scratch and injected it into GPT-2, shifting a 124M-parameter model with only ~811K trainable adapter parameters and producing a 3 MB adapter instead of a 500 MB checkpoint.
- Built a LangGraph ReAct research agent with dataflow integrity checks so every final output claim could be traced back to a tool call.
- Deployed DDP training on Kubernetes across 2x Nvidia H100 nodes with Docker, SkyPilot, torchrun, environment-driven YAML configuration, and reproducible container builds.
- Profiled GPU kernels with CUDA events and torch.profiler; optimized LLM inference 6.69x by replacing redundant full-sequence attention with KV caching.

## Projects

- **[Nebius Repository Summarizer](https://github.com/aymanapatel/nebius-project)**  
  Built a FastAPI and LLM service that summarizes GitHub repositories by extracting code skeletons with AST and Tree-sitter, prioritizing source files, and fitting context into a 7000-token budget.
- **Credit Card Fraud Analytics**  
  Built fraud detection on 590,540 IEEE-CIS transactions across 434 transaction and identity features; tuned Random Forest + SMOTE variants to 96.9% accuracy, 0.503 F1, and 0.879 ROC-AUC. [Report](https://github.com/aymanapatel/qmul-all-projects/blob/main/data-analytics/coursework1/credit-card-report.pdf) | [Notebook](https://github.com/aymanapatel/qmul-all-projects/blob/main/data-analytics/coursework1/credit-card-notebook.ipynb)
- **[LGTM Observability](https://aymanace2049.hashnode.dev/grafana-one-observability-tool-to-rule-them-all)**  
  Built end-to-end observability with Grafana, Loki, Tempo, Mimir, flamegraphs, and eBPF profiling.
- **[Java CLI using GraalVM](https://github.com/aymanapatel/java-cli)**  
  Built a Picocli Stack Overflow API client and compiled it to a GraalVM native binary for zero-JVM-startup execution.
- **[Go Microservices](https://github.com/aymanapatel/golang-microservices) / [Cloud Native Go](https://github.com/aymanapatel/cloud-native-go)**  
  Built cloud-native Go services with service discovery, distributed tracing, containerized deployment, CI/CD, and infrastructure-as-code.
- **[RL Accessibility](https://github.com/aymanapatel/rl-a11y)**  
  Applied reinforcement learning to identify and fix WCAG violations automatically.
- **[GitHub Recommendation System](https://drive.google.com/file/d/1iKV_xFES7ByKqhxLe3ffbDuWSnKmVFsI/view?usp=sharing)**  
  Built an undergraduate recommender-system project for GitHub users using collaborative filtering and PySpark over repository contribution data.

## Hackathons

- **Encode Hackathon, London -- 3rd place**  
  Built Phantom Fraud, an AI-powered Solana financial risk engine using Solana CLI, OpenRouter, and Helius APIs to detect wash-trading patterns.
- **AI Hackathon, Vadodara -- 3rd place**  
  Built a code-review assistant powered by fine-tuned Gemini Pro Vision with a PostgreSQL-backed developer UI.
- **AI Hackathon, Vadodara -- 2nd place**  
  Built RAG-based internal documentation search using LangChain and Chroma.
- **Technology Hackathon, Vadodara -- 2nd place**  
  Migrated a React app to Next.js, improving page performance.

## Writing

### Technical Blog

- **[Personal Blog](https://aymanace2049.hashnode.dev):** Published 40+ technical articles on system design, architecture, infrastructure, databases, observability, and AI/LLM systems.
- **Featured topics:** eBPF, microfrontends, change data capture, RAG with Postgres, LLM observability, OpenRouter, Grafana/LGTM observability, Redis, infrastructure as code, and Localstack.

### Internal Engineering Writing

- **Mastercard whitepapers:** Wrote company-wide whitepapers on Accessibility and Microfrontend architecture; earned CTO recognition, were adopted as internal frontend engineering references, and circulated to 200 engineers.

### Seminars

- **[Kafka Ecosystem](https://drive.google.com/file/d/1txqBQZaRxxT7wu5csBuIHUfi8DrRvUMU/view?usp=sharing):** Delivered a technical seminar on Kafka architecture, AMQP, Kafka Streams, and Kafka Connect.
- **Git and Version Control Systems:** Presented Git workflows and version-control practices to university students at Parul University.

## Core Skills

**Backend/JVM:** Java, Spring, Spring Data JPA, Hibernate, REST APIs, Microservices, API Gateway, Event Sourcing, Resilience4j  
**Cloud-Native:** Docker, Kubernetes, AWS, Terraform, Jenkins, Gradle, CI/CD, containerized services, distributed systems  
**Frontend/Product:** React, TypeScript, Redux Toolkit, RTK Query, Next.js, Webpack Module Federation, Figma, Accessibility  
**Data/Events:** PostgreSQL, PostgreSQL JSONB, Oracle, MongoDB, Redis, Kafka, RabbitMQ, Debezium, Change Data Capture  
**Quality/Operations:** JUnit, Mockito, Jest, React Testing Library, Cypress, Playwright, k6, Grafana, Splunk, Dynatrace, OpenTelemetry  
**AI/ML:** Python, Go, FastAPI, PyTorch, Transformers, LoRA, RAG, LangChain, Chroma, ReAct agents, MCP, Scikit-learn
