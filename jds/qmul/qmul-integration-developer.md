---
company: Queen Mary University of London
role: Integration Developer
team: IT Services
location: Mile End Campus, London
level: Professional, Grade 6
poc: Christos Myrsakis, c.myrsakis@qmul.ac.uk
---

# Integration Developer

## About the Role

The Integration Developer joins Queen Mary University of London's IT Services team to build and maintain a new event-driven integration platform. The platform connects core university systems covering student records, finance, HR and payroll, research administration, library and curriculum, identity, CRM, and other operational services. It supports a large estate of data flows between these systems and their downstream applications.

The platform provides an observable and reliable event-driven backbone with clean separation between producers and consumers. It represents a move away from point-to-point integrations, with database migrations and change-data-capture pipelines among the first high-impact areas of delivery. It runs on Azure Kubernetes Service and uses Kafka-compatible event streaming through Redpanda, Redpanda Connect for source and sink connectors, Go and Python services, GitOps delivery, and OpenTelemetry observability.

This is a hands-on senior software-development role focused on event-driven integrations rather than platform engineering. The postholder will design event flows, connectors, transformations, and event-processing services; review integration patterns and pull requests; and improve how the team designs, builds, tests, releases, observes, and operates integration flows.

The Integration Developer will be one of the senior engineering voices in a small, high-impact team, working with the Head of Engineering and peer developers to shape a still-evolving platform and uphold engineering standards. The role reports to the Programme Director for AI Automation, Apps and Strategy.

## Responsibilities

### Integration and Event-Driven Development

- Design and build integrations between university systems, third-party SaaS products, and the integration platform.
- Model business events and design topic structures, schemas, and data contracts that remain reliable across multiple consumers.
- Develop event-driven Go and Python services that consume, process, and produce events reliably.
- Select and apply integration patterns such as request/reply, event-carried state transfer, event sourcing, and saga.
- Implement idempotency, retry, dead-letter, and replay handling so integration flows recover cleanly from failure.

### Connector and Pipeline Development

- Build and maintain source and sink connectors with Redpanda Connect.
- Implement change-data-capture pipelines from operational databases.
- Develop custom connectors and stream-processing components in Go or Python when existing connectors are unsuitable.
- Define producer-side schemas and field mappings for connectors.
- Work with source-system owners to keep schemas and mappings aligned with upstream changes.
- Troubleshoot connector failures and improve pipeline reliability and observability.

### Engineering Standards and Peer Review

- Act as a senior pull-request reviewer and hold the team to agreed standards for code quality, testing, and documentation.
- Help define, evolve, and uphold development practices covering branching, release management, testing, code style, and architectural patterns.
- Identify weaknesses in existing integration workflows and propose practical improvements.
- Apply secure-development practices that meet university data-protection and information-governance requirements.
- Coach and support developers through constructive feedback and help raise the team's overall capability.
- Contribute to technical decisions about tooling, libraries, and architecture and document decisions where appropriate.
- Contribute to the specification, versioning, and documentation of APIs and event contracts produced and consumed by integration services.

### Operational Reliability and Observability

- Ensure production integration flows have appropriate logging, metrics, and tracing.
- Define and monitor service-level objectives for integration flows used by downstream services.
- Investigate production incidents, identify root causes, and contribute durable fixes.
- Contribute to runbooks and on-call documentation for integration components.

### Collaboration and Delivery

- Work in an Agile delivery team and participate in sprint planning, stand-ups, retrospectives, and code reviews.
- Collaborate with product owners, application developers, data engineers, and source-system owners to shape and deliver integrations.
- Produce clear technical documentation for integrations, event contracts, and connectors.
- Share knowledge across the team and help colleagues develop their integration skills and tooling knowledge.
- Deliver work to tight deadlines while managing competing priorities.

## Minimum Qualifications

### Experience and Knowledge

- Professional software-development experience, including time as a senior developer working on integrations or data platforms.
- Strong experience designing and building event-driven systems with Kafka, Redpanda, or a similar event-streaming platform.
- Strong understanding of request/reply, event-carried state transfer, event sourcing, saga, and when to apply each integration pattern.
- Experience with test-driven or well-tested development covering unit, integration, and end-to-end tests.
- Experience working in Agile teams using Scrum, Kanban, or a similar approach.
- Experience delivering to tight deadlines and managing competing priorities.
- Experience with Prometheus, Grafana, OpenTelemetry, distributed tracing, or comparable observability tooling.

### Skills and Abilities

- Ability to design and implement reliable integrations between heterogeneous systems.
- Ability to review other developers' code constructively and provide clear feedback on quality, testing, and design.
- Familiarity with Git, CI/CD pipelines such as Azure DevOps, and Infrastructure as Code.
- Excellent written and verbal communication skills.
- Ability to document technical designs and decisions clearly.
- Ability to explain technical concepts to technical and non-technical audiences.
- Familiarity with API-design principles and versioning strategies.

### Other Essential Requirements

- Ability to work effectively in a collaborative, cross-functional team.
- Desire to remain current with modern integration patterns and event-driven technologies.
- Motivation to deliver practical outcomes that improve university operations.
- Ability to provide documentary evidence of the legal right to work in the UK before employment begins.

## Preferred Qualifications

### Qualifications and Certifications

- Bachelor's degree in Computer Science, Software Engineering, or a similar discipline, or equivalent professional experience.
- Postgraduate qualification in Computer Science, Software Engineering, or a related discipline.
- Professional cloud-platform certifications such as Azure Developer Associate or Certified Kubernetes Application Developer.

### Experience and Knowledge

- Strong experience developing clean, testable, production-quality services in Go.
- Experience developing services in Python.
- Demonstrable experience acting as a senior pull-request reviewer and holding a team to agreed development standards.
- Experience designing, building, and consuming RESTful APIs and webhooks.
- Experience with Kafka Connect, Redpanda Connect, or a similar connector framework.
- Experience implementing change-data-capture pipelines from operational databases.
- Experience designing and evolving event schemas and data contracts with Avro, JSON Schema, Protobuf, or similar formats.
- Experience with stream-processing frameworks such as Kafka Streams, Flink, or ksqlDB.
- Experience integrating enterprise systems, including SaaS products, directory services, and data platforms.
- Experience with cloud platforms, ideally Microsoft Azure.
- Experience building, containerising, and deploying services with Docker and Kubernetes.
- Experience with GitOps practices and tools such as Argo CD or Flux for continuous delivery.
- Experience delivering features in an established codebase, including code review, testing, and CI/CD workflows.
- Experience working in a regulated environment such as higher education, the public sector, the NHS, or financial services, with awareness of data-protection and information-governance requirements.

### Skills and Abilities

- Working knowledge of Docker and Kubernetes sufficient to build, deploy, and maintain services, or willingness to learn these technologies on the job.
- Understanding of security practices across integrations and event flows.

## Person Specification

### Qualifications

| Requirement | Essential | Desirable |
|---|:---:|:---:|
| REQ-D1 Bachelor's degree in Computer Science, Software Engineering, or a similar discipline, or equivalent professional experience |  | Yes |
| REQ-D2 Postgraduate qualification in Computer Science, Software Engineering, or a related discipline |  | Yes |
| REQ-D3 Professional cloud-platform certification, such as Azure Developer Associate or Certified Kubernetes Application Developer |  | Yes |

### Experience and Knowledge

| Requirement | Essential | Desirable |
|---|:---:|:---:|
| REQ-E1 Professional software-development experience, including time as a senior developer on integration or data-platform work | Yes |  |
| REQ-E2 Strong experience designing and building event-driven systems with Kafka, Redpanda, or a similar event-streaming platform | Yes |  |
| REQ-D4 Strong experience developing services in Go |  | Yes |
| REQ-D5 Experience developing services in Python |  | Yes |
| REQ-E3 Strong understanding of request/reply, event-carried state transfer, event sourcing, saga, and when to apply these patterns | Yes |  |
| REQ-D6 Demonstrable experience acting as a senior pull-request reviewer and holding a team to agreed development standards |  | Yes |
| REQ-D7 Experience designing, building, and consuming RESTful APIs and webhooks |  | Yes |
| REQ-E4 Experience with test-driven or well-tested development covering unit, integration, and end-to-end tests | Yes |  |
| REQ-E5 Experience working in Agile teams using Scrum, Kanban, or a similar approach | Yes |  |
| REQ-E6 Experience delivering to tight deadlines and managing competing priorities | Yes |  |
| REQ-E7 Experience with Prometheus, Grafana, OpenTelemetry, distributed tracing, or comparable observability tooling | Yes |  |
| REQ-D8 Experience with Kafka Connect, Redpanda Connect, or a similar connector framework |  | Yes |
| REQ-D9 Experience implementing change-data-capture pipelines from operational databases |  | Yes |
| REQ-D10 Experience designing and evolving event schemas and data contracts with Avro, JSON Schema, Protobuf, or similar formats |  | Yes |
| REQ-D11 Experience with stream-processing frameworks such as Kafka Streams, Flink, or ksqlDB |  | Yes |
| REQ-D12 Experience integrating enterprise systems, including SaaS products, directory services, and data platforms |  | Yes |
| REQ-D13 Experience with cloud platforms, ideally Microsoft Azure |  | Yes |
| REQ-D14 Experience building, containerising, and deploying services with Docker and Kubernetes |  | Yes |
| REQ-D15 Experience with GitOps practices and tools such as Argo CD or Flux for continuous delivery |  | Yes |
| REQ-D16 Experience delivering features in an established codebase, including code review, testing, and CI/CD workflows |  | Yes |

### Skills and Abilities

| Requirement | Essential | Desirable |
|---|:---:|:---:|
| REQ-D17 Strong proficiency in Go, producing clean, testable, production-quality code |  | Yes |
| REQ-E8 Ability to design and implement reliable integrations between heterogeneous systems | Yes |  |
| REQ-E9 Ability to review other developers' code constructively and give clear feedback on quality, testing, and design | Yes |  |
| REQ-E10 Familiarity with Git, CI/CD pipelines such as Azure DevOps, and Infrastructure as Code | Yes |  |
| REQ-E11 Excellent written and verbal communication skills, including clear documentation of technical designs and decisions | Yes |  |
| REQ-E12 Ability to explain technical concepts to technical and non-technical audiences | Yes |  |
| REQ-E13 Familiarity with API-design principles and versioning strategies | Yes |  |
| REQ-D18 Working knowledge of Docker and Kubernetes sufficient to build, deploy, and maintain services, or willingness to learn on the job |  | Yes |
| REQ-D19 Understanding of security practices across integrations and event flows |  | Yes |

### Other

| Requirement | Essential | Desirable |
|---|:---:|:---:|
| REQ-E14 Ability to work effectively in a collaborative, cross-functional team | Yes |  |
| REQ-E15 Desire to remain current with modern integration patterns and event-driven technologies | Yes |  |
| REQ-E16 Motivation to deliver practical outcomes that improve university operations | Yes |  |
| REQ-D20 Experience in a regulated environment such as higher education, the public sector, the NHS, or financial services, with awareness of data-protection and information-governance requirements |  | Yes |
| REQ-E17 Ability to provide documentary evidence of the legal right to work in the UK before employment begins | Yes |  |

## Our Stack

- **Event streaming:** Redpanda, Kafka-compatible event streaming
- **Connectors:** Redpanda Connect, Kafka Connect or similar frameworks
- **Languages:** Go, Python
- **Integration patterns:** Request/reply, event-carried state transfer, event sourcing, saga
- **Reliability:** Idempotency, retries, dead-letter handling, replay, service-level objectives
- **Event contracts:** Topic structures, schemas, data contracts, Avro, JSON Schema, Protobuf
- **Stream processing:** Kafka Streams, Flink, ksqlDB or similar
- **Data movement:** Source and sink connectors, change-data capture, database migrations
- **APIs:** RESTful APIs, webhooks, API versioning
- **Cloud and runtime:** Microsoft Azure, Azure Kubernetes Service, Docker, Kubernetes
- **Delivery:** Git, GitOps, Argo CD, Flux, Azure DevOps, CI/CD, Infrastructure as Code
- **Observability:** OpenTelemetry, Prometheus, Grafana, logging, metrics, distributed tracing
- **Engineering practices:** Agile, pull-request review, TDD, unit tests, integration tests, end-to-end tests, branching, release management, runbooks, on-call documentation
- **Connected domains:** Student records, finance, HR and payroll, research administration, library and curriculum, identity, CRM, SaaS products, directory services, and data platforms

## What We Value

- Reliable and observable integrations that improve university operations.
- Clean separation between event producers and consumers.
- High engineering standards across code quality, testing, documentation, release management, and architecture.
- Senior engineers who review code constructively, coach colleagues, and raise team capability.
- Practical improvements to existing workflows and the evolving integration platform.
- Secure development that respects data protection and information governance.
- Clear technical communication with both technical and non-technical audiences.
- Collaborative and cross-functional delivery.
- Continuous learning in modern integration patterns and event-driven technologies.
- Queen Mary's core values: inclusive, proud, ambitious, collegial, and ethical.
- Queen Mary's Strategy 2030 vision to open the doors of opportunity and become the most inclusive university of its kind.
- Commitment to public good through education, research, new knowledge, and local, national, and international engagement.

## Miscellaneous (Additional Details)

### Job Details

- **Source:** `jds/qmul/QMUL_JD_Integration_Developer.pdf`
- **Department:** IT Services
- **Reports to:** Programme Director for AI Automation, Apps and Strategy
- **Grade:** Professional, Grade 6
- **Salary:** £54,617 to £60,901 per year
- **Hours:** Full-time
- **Appointment period:** Fixed-term for 12 months
- **Location:** Mile End Campus
- **Work activity type:** Technical / Development
- **Platform-engineering role:** No; the postholder owns service containerisation and deployment with support from the wider team.
- **Application deadline:** Not specified in the job pack.
- **Job-posting URL:** Not specified in the job pack.

### Contact and Department

- **Informal enquiries:** Christos Myrsakis
- **Email:** c.myrsakis@qmul.ac.uk
- **IT Services:** https://www.qmul.ac.uk/its/

### University Context

- Queen Mary's founding institutions were created to provide opportunity for less privileged and under-represented people.
- The University aims to improve lives locally, nationally, and internationally through education and research.
- Queen Mary seeks to provide an inclusive and nurturing environment in which staff and students from all backgrounds can develop and reach their potential.
- Professor Colin Bailey is the President and Principal named in the job pack.



### Equality, Diversity, and Inclusion

- Queen Mary holds a Silver Institutional Athena SWAN award for advancing gender equality.
- The University supports EDI initiatives and development programmes including Springboard, Aurora, and B-MEntor.
- Queen Mary champions inclusion across protected characteristics and under-represented and marginalised groups under the Equality Act 2010.
- Staff can access `Introducing Inclusion` training.
- EDI is embedded in University governance and working practices.
- EDI enquiries can be directed to hr-equality@qmul.ac.uk.
- Flexible-working applications are considered subject to business needs.

### Visa and Right to Work

- Queen Mary is a UKVI-licensed sponsor and can issue a Certificate of Sponsorship to successful candidates offered eligible skilled roles.
- A Certificate of Sponsorship can support an application for a Skilled Worker visa.
- The Global Talent visa is an alternative route applied for directly by candidates who are leaders or potential leaders in academia or research, arts and culture, or digital technology.
- Candidates must provide documentary evidence of their legal right to work in the UK before beginning employment.
- Academics and researchers undertaking PhD-level or higher research in an ATAS-listed subject may need an Academic Technology Approval Scheme certificate before applying for a visa.
- ATAS exemptions may apply to nationals of the EEA, Australia, Canada, Japan, New Zealand, Singapore, South Korea, Switzerland, and the USA, and to Global Talent visa applicants.

### Salary Progression

- Appointments are usually made at the beginning of the advertised salary range.
- The Queen Mary salary structure includes automatic progression within published grades, subject to service, funding, and performance.
- Performance-related annual pay-review schemes are also in place.
