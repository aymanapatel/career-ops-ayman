# Supporting Statement

## Reasons for Applying

I am applying for the Integration Developer role because it closely matches the direction of my backend and platform work: building reliable services, connecting heterogeneous systems, using event-driven patterns to separate producers from consumers, and making production flows observable and supportable. Queen Mary's move from point-to-point integrations towards an event-driven backbone is particularly compelling. It is an opportunity to apply experience gained in large-scale financial systems to integrations that improve university operations across student records, finance, HR, research, identity, library, curriculum, and CRM services.

The role also appeals to me because the platform is still evolving. I enjoy working where engineers are expected not only to deliver code but also to shape architecture, review patterns, improve development standards, and leave systems easier for other people to operate. I have done this through backend architecture, code review, CI/CD ownership, reliability work, technical documentation, and coaching across multiple engineering teams. As a current MSc Advanced Computer Science student at Queen Mary, I also understand the practical importance of dependable university services and would value the opportunity to improve the institution's underlying technology.

## Qualifications and Professional Development

I hold a Bachelor of Computer Science and am completing an MSc in Advanced Computer Science at Queen Mary University of London. These qualifications are supported by more than six years of commercial software-development experience at Mastercard, progressing from intern to Senior Software Engineer. I have continued to develop my backend, cloud, distributed-systems, and integration knowledge through hands-on Go and Python projects, technical writing, and focused study of Kafka and event-driven architecture.

I do not hold the Azure or Kubernetes certifications listed as desirable. However, I have practical experience with AWS, Docker, Kubernetes, Terraform, Infrastructure as Code, Jenkins, and version-controlled deployment configuration. This gives me a strong foundation for learning Azure Kubernetes Service and the team's GitOps tooling.

## Senior Software Development and Integration Experience

At Mastercard, I worked on enterprise payment systems where reliability, security, traceability, and controlled delivery were central requirements. As a Senior Software Engineer, I owned backend and platform architecture spanning Spring APIs, Kafka, PostgreSQL, Redis, CI/CD, observability, release management, and production incident response. I designed and supported REST services with Spring, Spring Data JPA, and Hibernate and used API Gateway and event-sourcing patterns with Kafka to support asynchronous, auditable flows.

This work required integrating components with different data models, availability characteristics, and release schedules. I used PostgreSQL JSONB to support configurable data structures without repeated database migrations and introduced Redis caching to reduce duplicate backend requests. Earlier in my career, I built REST APIs and automated enterprise workflows with Camunda, modelling processes and decision rules through BPMN, DMN, and CMMN. I also maintained a Hardware Security Module integration for MDES tokenisation, protecting payment-card data as it crossed system boundaries.

My practical integration-pattern experience is strongest in REST request/response services, asynchronous Kafka processing, event sourcing, API Gateway, workflow orchestration, retries, circuit breakers, and reactive services. I understand why integration patterns must be selected according to consistency, coupling, failure recovery, and audit requirements rather than applied uniformly. Although I have not yet used Redpanda or implemented every pattern named in the specification in production, the underlying Kafka and distributed-systems experience is directly transferable.

## Event-Driven Systems and Data

I have designed event-driven services using Kafka within Mastercard's backend platform. The flows used asynchronous processing and event-sourcing patterns to create auditable system behaviour. I also implemented Resilience4j circuit-breaker and retry controls across more than five microservices. These controls reduced cascading failures during downstream outages and improved service availability by 15%. This experience is relevant to the role's focus on retry behaviour, reliable processing, failure recovery, and durable integration flows.

My database experience includes PostgreSQL, Oracle, MongoDB, and Redis across relational and non-relational use cases. I also have knowledge of Debezium and change-data-capture concepts. I understand the purpose of capturing source-system changes as ordered events and the importance of stable schemas, field mappings, idempotent consumers, and compatibility between producers and downstream applications. I would apply this foundation while developing deeper hands-on experience with Redpanda Connect and the University's operational-database pipelines.

My understanding of the Kafka ecosystem also includes formal study. I delivered a technical seminar and wrote an accompanying [Kafka ecosystem paper](https://drive.google.com/file/d/1txqBQZaRxxT7wu5csBuIHUfi8DrRvUMU/view?usp=sharing) covering Kafka architecture, Kafka Streams, Kafka Connect, AMQP, and event-driven system design. I continue to maintain this knowledge through practical backend work and technical writing.

## Testing, Review, and Engineering Standards

I have worked throughout my career in established codebases where changes required review, automated testing, CI validation, and controlled releases. As a core maintainer and later a senior engineer, I reviewed changes, helped define shared architecture and versioning boundaries, and coached more than ten engineering teams on maintainable implementation patterns and quality standards. I aim to make review feedback specific and actionable, covering behaviour, failure cases, test evidence, maintainability, and consistency with established design decisions.

My testing experience covers test-driven development, unit tests, integration tests, and end-to-end tests. I used Jest, React Testing Library, Playwright, and Cypress to maintain 95% automated test coverage. When the end-to-end CI suite became a delivery bottleneck, I helped reduce its runtime from eight hours to three through test splitting, parallel execution, selective retries, and environment caching. Earlier, I used TDD while building a non-blocking Spring WebFlux service so expected behaviour was explicit and refactoring remained safe.

I have applied object-oriented principles and patterns including Repository, Factory, Strategy, Observer, Template Method, and DTO across Java/Spring services. The aim was not to add abstraction for its own sake, but to keep domain logic testable, separate it from framework concerns, and make implementation choices consistent across services. This approach aligns with the role's requirement to uphold code quality, testing, documentation, and architectural standards.

## CI/CD, Cloud, and Service Operations

I owned Jenkins pipelines supporting staging-to-production delivery and release management at Mastercard and built Gradle pipelines for repeatable dependency management and artifact generation. My broader cloud and delivery experience includes AWS services, Docker, Kubernetes, Terraform, Git, Infrastructure as Code, and PCF. In a recent engineering project, I containerised Python workloads with Docker and deployed reproducible jobs across two Kubernetes nodes, keeping runtime configuration in version-controlled YAML.

My production responsibilities extended beyond deployment. I instrumented services with Grafana and OpenTelemetry and used Splunk and Dynatrace to investigate incidents and identify root causes. This reduced incident-resolution time from days to hours. I also ran load tests with k6 and stored time-series results in InfluxDB to identify latency regressions before release. These experiences map directly to the requirement for logging, metrics, tracing, incident investigation, and durable operational fixes.

I have not worked directly with Microsoft Azure, Azure DevOps, Argo CD, or Flux. However, the underlying practices are familiar: version-controlled configuration, automated build and release pipelines, containerised workloads, Infrastructure as Code, observability, and repeatable deployment. I would be able to transfer these practices to Azure Kubernetes Service and the team's GitOps workflow.

## Go, Python, APIs, and Backend Development

My strongest production language is Java, supported by practical work in Go and Python. I built a progressive Go microservices project covering standard-library HTTP services, Gorilla Mux, custom request validation, Swagger/OpenAPI documentation, gRPC, Envoy load balancing, Kubernetes, and WASM filters. This project gave me hands-on experience with Go service structure, API contracts, validation, and deployment boundaries. I would continue developing this capability within the team's established Go codebase and review standards.

In Python, I have built FastAPI services and integration-oriented tooling. One project introduced a shared MCP tool service so multiple clients could discover and use the same integrations without duplicating connector logic. I added deterministic business-rule enforcement, traceability checks, and graceful fallback behaviour when external services failed. This reinforced the same principles needed in integration services: explicit contracts, separation of concerns, observable failures, and predictable recovery.

Across Java, Go, and Python work, I have designed and consumed REST APIs and documented interfaces through technical specifications and OpenAPI. I understand the importance of stable API contracts, backward-compatible versioning, validation, and clear ownership between producing and consuming systems.

## Communication, Collaboration, and Delivery

I have worked with product managers, engineers, architects, and business stakeholders across countries. I translated requirements into technical specifications, user stories, acceptance criteria, estimates, and delivery plans, then coordinated implementation across teams with different release schedules. This required balancing immediate delivery with maintainability, operational risk, and dependencies on other systems.

This iterative way of working reflects the core practices of Agile delivery: breaking work into reviewable increments, refining requirements with stakeholders, using feedback to adjust implementation, and making progress visible across teams. I have managed competing priorities around feature delivery, production support, technical quality, and release readiness. For example, when an eight-hour end-to-end test suite threatened delivery times, I improved the pipeline without removing coverage or weakening release controls.

Technical communication is a particular strength. I have published more than 40 articles on system design, observability, distributed data infrastructure, Kafka, Redis, change data capture, and production engineering. I also produced internal architecture whitepapers that became engineering reference material and were circulated to 200 engineers. These experiences have developed my ability to explain decisions clearly to both technical and non-technical audiences and to create documentation that remains useful after delivery.

I value collaborative review and knowledge sharing. I have coached engineers across more than ten teams and contributed to shared technical standards rather than keeping expertise within one project. In this role, I would bring the same approach to pull-request review, documentation, runbooks, integration patterns, and the upskilling of colleagues.

## Security, Governance, and Practical Outcomes

My Mastercard experience was within regulated financial services and involved secure handling of payment data. The HSM and tokenisation integration required careful control of sensitive information across application boundaries. I also worked with auditable event flows, controlled release pipelines, and production monitoring. This background provides a relevant foundation for Queen Mary's data-protection and information-governance requirements, while recognising that higher education has its own policies and operating context that I would need to learn.

I understand that appointment is subject to providing documentary evidence of the legal right to work in the UK before employment begins and would follow Queen Mary's required process.

What I would bring to the Integration Developer role is a combination of senior production experience and hands-on curiosity. I have delivered and supported event-driven backend systems, improved reliability and observability, reviewed and tested changes, owned delivery pipelines, communicated architecture clearly, and helped other engineers raise their standards. I am motivated by the practical outcome of this programme: replacing fragile point-to-point flows with reliable, observable integrations that make university services easier to evolve and operate.
