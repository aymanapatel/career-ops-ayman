# Story Bank — Master STAR+R Stories

This file accumulates your best interview stories over time. Each evaluation (Block F) adds new stories here. Instead of memorizing 100 answers, maintain 5-10 deep stories that you can bend to answer almost any behavioral question.

## How it works

1. Every time `/career-ops oferta` generates Block F (Interview Plan), new STAR+R stories get appended here
2. Before your next interview, review this file — your stories are already organized by theme
3. The "Big Three" questions can be answered with stories from this bank:
   - "Tell me about yourself" → combine 2-3 stories into a narrative
   - "Tell me about your most impactful project" → pick your highest-impact story
   - "Tell me about a conflict you resolved" → find a story with a Reflection

## Stories

<!-- Stories will be added here as you evaluate offers -->
<!-- Format:
### [Theme] Story Title
**Source:** Report #NNN — Company — Role
**S (Situation):** ...
**T (Task):** ...
**A (Action):** ...
**R (Result):** ...
**Reflection:** What I learned / what I'd do differently
**Best for questions about:** [list of question types this story answers]
-->

### Reliability: Containing cascading failures
**Source:** Report #002 — Funding Circle — Senior Engineer (Servicing)
**S (Situation):** Downstream failures threatened related Mastercard services.
**T (Task):** Improve reliability while keeping failures visible and diagnosable.
**A (Action):** Added Resilience4j circuit breakers and retries across 5+ microservices and connected service behaviour to production observability.
**R (Result):** Improved overall system availability by 15%.
**Reflection:** Reliable systems need explicit failure boundaries, measured fallbacks, and signals operators can trust.
**Best for questions about:** reliability, distributed systems, technical risk, incident prevention

### Operability: Reducing incident resolution time
**Source:** Report #002 — Funding Circle — Senior Engineer (Servicing)
**S (Situation):** Production incidents could take days to diagnose.
**T (Task):** Make failures traceable across services and delivery layers.
**A (Action):** Used Splunk, Grafana, Dynatrace, and OpenTelemetry to correlate logs, metrics, and traces during incident response.
**R (Result):** Reduced mean time to resolution from days to hours.
**Reflection:** Observability is an architectural capability, not a dashboard added after delivery.
**Best for questions about:** production ownership, debugging, operability, customer impact

### Architecture: Enabling independent delivery
**Source:** Report #002 — Funding Circle — Senior Engineer (Servicing)
**S (Situation):** A monolithic application forced product teams to coordinate releases.
**T (Task):** Give teams autonomy without breaking the integrated product.
**A (Action):** Defined Module Federation boundaries, shared dependency rules, runtime discovery, and versioning contracts.
**R (Result):** Enabled 10+ teams to deploy independently and cut coordination from days to hours.
**Reflection:** Good platform contracts balance team autonomy with clear integration guarantees.
**Best for questions about:** architecture, ambiguity, technical direction, cross-team influence

### Engineering Effectiveness: Shortening the CI feedback loop
**Source:** Report #002 — Funding Circle — Senior Engineer (Servicing)
**S (Situation):** The end-to-end test suite took eight hours, slowing safe delivery.
**T (Task):** Reduce feedback time without weakening coverage.
**A (Action):** Introduced test splitting, parallel execution, selective retries, and environment-level caching.
**R (Result):** Cut suite runtime from 8 hours to 3 while maintaining 95% test coverage.
**Reflection:** Maintainability includes both test confidence and the speed at which engineers receive feedback.
**Best for questions about:** automated testing, maintainability, developer experience, continuous improvement

### AI Reliability: Making agent outputs auditable
**Source:** Report #002 — Funding Circle — Senior Engineer (Servicing)
**S (Situation):** An autonomous research agent could produce numeric claims unsupported by its tools.
**T (Task):** Prevent fabricated facts from reaching users.
**A (Action):** Added a dataflow integrity check against tool logs and created a shared MCP tool layer for consistent behaviour across clients.
**R (Result):** Unsupported outputs were detected automatically before delivery.
**Reflection:** AI-powered business tools need deterministic controls at every high-risk boundary.
**Best for questions about:** AI tooling, intelligent automation, risk controls, system design
