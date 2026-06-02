# Bath / Tapestry KTP Application Q&A

## 1. Please outline your qualifications and demonstrate your specialist knowledge of this research area, with emphasis on how this will contribute to the success of the KTP project.

I am a Senior Full-Stack Engineer with 6+ years of production engineering experience across Java/Spring, React/TypeScript, cloud-native microservices, data-driven dashboards, observability, and AI/ML systems. I am currently completing an MSc in Advanced Computer Science at Queen Mary University of London, and I have recently completed the Nebius AI Engineering Fellowship, where I built AI agents, RAG workflows, and production-ready LLM inference deployments using Docker, Kubernetes, vLLM, and Nvidia H100 infrastructure.

My specialist knowledge is strongest at the intersection of applied machine learning, production software engineering, and stakeholder-facing product delivery. This is directly relevant to the KTP project because Tapestry needs more than a model prototype: it needs an AI-powered retail insight platform that can unify multi-source customer data, produce reliable strategic recommendations, and be embedded into a scalable commercial platform.

I can contribute by combining research-led model development with practical engineering discipline: validating models, designing decision systems, building usable data products, translating technical outputs into commercial insight, and documenting knowledge so it becomes embedded in the business.

## 2. Please provide evidence of your understanding and experience of machine learning.

My machine learning experience spans academic work, applied projects, and production-oriented AI engineering. During my undergraduate degree, I built a GitHub recommendation system using collaborative filtering techniques and PySpark, matching users' contribution patterns with repositories they were likely to find relevant. This gave me early practical experience with recommender systems, similarity-based modelling, large-scale data processing, and turning behavioural data into useful recommendations.

In my MSc work, I built a credit card fraud analytics project on the IEEE-CIS dataset, merging 590,540 transactions across 434 transaction and identity features. I investigated severe class imbalance, reduced the feature space to stronger predictors, and tuned Random Forest models with SMOTE variants and threshold optimisation. The best model achieved 96.9% test accuracy, 0.503 F1, 0.541 precision, 0.470 recall, and 0.879 ROC-AUC on a strict chronological test split.

I also completed the Nebius AI Engineering Fellowship, where I studied transformer architectures, attention mechanisms, inference optimisation, KV-cache, MoE, RoPE, and LoRA fine-tuning. I built AI agents using LLM APIs, MCPs, reasoning pipelines, RAG, and test-time compute scaling.

Beyond coursework, I have built practical AI systems including a repository summariser using FastAPI, AST parsing, Tree-sitter, and LLMs; RAG-based internal documentation search using LangChain and Chroma; and a code-review assistant powered by Gemini Pro Vision with a PostgreSQL-backed developer UI.

## 3. Please describe your experience of writing reports, giving presentations, interacting with customers or other third parties communicating complex technical information to stakeholders at all levels.

I have extensive experience communicating complex technical information to both technical and non-technical stakeholders. At Mastercard, I owned the translation of product manager requirements into technical specifications, user stories, and acceptance criteria for cross-functional engineering teams. I also led cross-country projects as a de facto frontend architect, UX designer, and product manager, aligning engineering, product, and business stakeholders around delivery decisions.

I have written 40+ technical articles on system design, backend architecture, frontend architecture, eBPF, microfrontends, change data capture, Redis, RAG, and LLM observability. Internally, I produced company-wide frontend engineering whitepapers on Accessibility and Microfrontend architecture. These earned CTO recognition, became internal reference material, and were circulated to 200 engineers.

I also have presentation experience. I delivered a technical seminar on the Kafka ecosystem, covering Kafka architecture, Kafka Streams, Kafka Connect, and AMQP messaging patterns. This mix of writing, presenting, and stakeholder translation is directly relevant to a KTP Associate role, where success depends on transferring knowledge into the business through documentation, training, and clear communication.

## 4. Please provide an example of your problem-solving skills where you have been able to find practical solutions to arising problems.

A strong example is my work reducing Mastercard's end-to-end CI test suite runtime. The existing suite took around 8 hours, which slowed release feedback and made it harder for teams to detect regressions quickly. Rather than treating this as only a tooling issue, I investigated the full execution path: test grouping, environment setup, retry behaviour, caching, and parallel execution.

I introduced test splitting, parallel execution, selective retries, and environment-level caching. This reduced the runtime from 8 hours to 3 hours while maintaining regression protection and improving developer confidence in the pipeline.

The practical value was that teams received faster feedback without removing important test coverage. This is the kind of problem-solving I would bring to the KTP: investigate the real bottleneck, avoid over-engineering, validate the solution with measurable outcomes, and make the improvement sustainable for the wider team.

## 5. Please outline your experience of high-level investigation, analysis and research skills.

My strongest evidence of investigation and analysis includes both recommender systems and fraud analytics work. During my undergraduate degree, I built a GitHub recommendation system using collaborative filtering and PySpark, analysing user contribution patterns to recommend repositories. This required research into recommendation methods, data preparation, similarity modelling, and scalable processing.

In my MSc work, I analysed a large, imbalanced fraud dataset of 590,540 transactions and 434 features, investigated identity and transaction patterns, selected meaningful predictors, and evaluated models using appropriate metrics beyond accuracy, including F1, precision, recall, and ROC-AUC. I also used a strict chronological test split to make the evaluation more realistic.

I have also applied research skills in AI engineering. During the Nebius AI Engineering Fellowship, I studied transformer architecture, inference optimisation, fine-tuning, RAG, and agent workflows, then applied that knowledge in practical systems. My repository summariser project required investigation into AST parsing, Tree-sitter, token budgeting, file prioritisation, and prompt/context assembly.

In production roles, I have investigated incidents using Splunk, Grafana, Dynatrace, and OpenTelemetry, reducing mean time to resolution from days to hours. That combination of academic analysis, applied experimentation, and production diagnosis is well suited to a KTP project that must move from research into a commercially useful AI platform.

## 6. Demonstrate your awareness of the principles of KTP and a willingness to embrace them.

I understand a KTP as a three-way collaboration between a business, an academic partner, and a KTP Associate, focused on transferring academic knowledge into a business to solve a strategically important problem. In this role, that means working between Tapestry and the University of Bath to turn advanced AI/ML research into a practical retail insight platform that improves Tapestry's commercial capability.

I am very willing to embrace that model. The appeal of this role is that it combines research, product delivery, stakeholder engagement, and knowledge transfer. I would expect to lead the day-to-day project delivery, work closely with academic experts, collaborate with Tapestry's analytics, technology, and strategy teams, and ensure the business can sustain the capability after the project.

My background fits this well because I have repeatedly worked at the boundary between technical implementation and stakeholder adoption: writing documentation, producing internal reference material, presenting technical topics, and turning ambiguous requirements into delivered systems.

## 7. You may use this section if you wish to provide any additional information in support of your application.

I am particularly interested in this role because it is not a narrow data science position. The project needs someone who can understand machine learning, build production-quality systems, communicate insight clearly, and work with commercial stakeholders. That combination matches my background.

I bring production engineering experience from Mastercard, applied AI experience from the Nebius AI Engineering Fellowship, MSc-level computer science study, and a strong habit of communicating technical work through articles, reports, whitepapers, and presentations.

I also have relevant public work available through my portfolio and technical blog:

- Portfolio: https://patelofthought.com/me
- Blog: https://aymanace2049.hashnode.dev
