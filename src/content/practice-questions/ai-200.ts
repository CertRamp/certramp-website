import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free AI-200 sample questions — ORIGINAL questions written by CertRamp for the
 * skills measured as of 7 October 2026. Not taken from the paid practice exams,
 * not recalled exam content, and not presented as real exam questions.
 */
const GUIDE = {
  label: "Microsoft Learn — AI-200 study guide",
  url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-200",
};

export const ai200Questions: PracticeQuestionSet = {
  slug: "ai-200",
  intro:
    "15 original AI-200 practice questions across the four skill areas of the Microsoft study guide (skills measured as of 7 October 2026), weighted roughly like the real exam. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "AI-200 Practice Questions with Answers & Explanations (2026)",
    description:
      "15 free, original AI-200 practice questions on containers, Cosmos DB, PostgreSQL and Redis vector search, messaging, Functions, Key Vault and monitoring.",
  },
  questions: [
    /* ── Domain 1: Develop containerized solutions on Azure ───────────────── */
    {
      id: "ai200-d1-acr-base-image",
      domain: "d1",
      objective: "Build and run images by using Azure Container Registry Tasks",
      difficulty: "intermediate",
      question:
        "Your application images in Azure Container Registry are built on a shared Python base image. Whenever the base image is patched and pushed to the registry, every dependent application image must be rebuilt automatically. What should you configure?",
      options: [
        { id: "A", text: "A webhook on the registry that sends an email to the development team", rationale: "A notification still relies on someone rebuilding the images by hand." },
        { id: "B", text: "Geo-replication of the registry", rationale: "Geo-replication copies images to other regions; it does not rebuild anything." },
        { id: "C", text: "An Azure Container Registry task with a base image update trigger", rationale: "Correct. ACR Tasks can track the base image dependency of an application image and rebuild it automatically when an updated base image is pushed." },
        { id: "D", text: "A quick task run with az acr build", rationale: "A quick task builds an image once on demand. It does not react to base image updates." },
      ],
      answer: "C",
      explanation:
        "ACR Tasks support three automatic triggers: source code commits (or pull requests), base image updates and timers. Base image triggers are the standard way to keep application images patched without a separate pipeline.",
      reference: { label: "Microsoft Learn — Azure Container Registry tasks overview", url: "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview" },
    },
    {
      id: "ai200-d1-keda-service-bus",
      domain: "d1",
      objective: "Implement event-driven scaling by using Kubernetes Event‑driven Autoscaling (KEDA) in Container Apps",
      difficulty: "intermediate",
      question:
        "A worker in Azure Container Apps processes embedding jobs from an Azure Service Bus queue. It has no ingress. It should run no replicas when the queue is empty and add replicas as messages build up. What do you configure?",
      options: [
        { id: "A", text: "A custom scale rule of type azure-servicebus with minimum replicas set to 0", rationale: "Correct. Container Apps uses KEDA scalers for custom rules; a Service Bus rule scales on queue length, and a minimum of 0 lets the app scale to zero." },
        { id: "B", text: "An HTTP scale rule with minimum replicas set to 0", rationale: "HTTP rules scale on concurrent requests. The worker has no ingress, so it would never receive requests and would not start again." },
        { id: "C", text: "A fixed replica count of 10", rationale: "This keeps ten replicas running even when there is no work, which contradicts the requirement." },
        { id: "D", text: "Multiple revision mode with traffic splitting", rationale: "Revision mode controls how versions receive traffic, not how replicas scale on queue depth." },
      ],
      answer: "A",
      explanation:
        "Container Apps supports HTTP, TCP and custom (KEDA-based) scale rules. For queue workers without ingress, use an event-driven rule such as azure-servicebus; without a custom rule or a minimum of at least one replica, an app without ingress can scale to zero and never start again.",
      reference: { label: "Microsoft Learn — Set scaling rules in Azure Container Apps", url: "https://learn.microsoft.com/en-us/azure/container-apps/scale-app" },
    },
    {
      id: "ai200-d1-revisions",
      domain: "d1",
      objective: "Deploy applications to Azure Container Apps, including environment configuration and revision management",
      difficulty: "advanced",
      question:
        "You want to send 20% of production traffic to a new version of an API running in Azure Container Apps and keep 80% on the current version until you are confident. What must be true?",
      options: [
        { id: "A", text: "The app uses single revision mode, and the new image is deployed with a revision suffix", rationale: "Single revision mode moves all traffic to the new revision once it is ready; it does not keep two revisions active with a split." },
        { id: "B", text: "The new version is deployed by changing only a secret value", rationale: "Secret values are application-scope changes and do not create a new revision." },
        { id: "C", text: "Two separate container apps share the same ingress hostname", rationale: "Traffic splitting is configured between revisions of one container app, not between separate apps." },
        { id: "D", text: "The app uses multiple revision mode, with traffic split between the two active revisions", rationale: "Correct. Multiple revision mode keeps several revisions active and lets you assign a percentage of traffic to each." },
      ],
      answer: "D",
      explanation:
        "Changes to the template, such as the container image or scale rules, create a new revision. In multiple revision mode you then decide how traffic is divided, which supports canary and blue-green releases.",
      reference: { label: "Microsoft Learn — Revisions in Azure Container Apps", url: "https://learn.microsoft.com/en-us/azure/container-apps/revisions" },
    },

    /* ── Domain 2: Develop AI solutions by using Azure data management services ─ */
    {
      id: "ai200-d2-cosmos-vector",
      domain: "d2",
      objective: "Store and retrieve embeddings and execute vector similarity search for semantic retrieval",
      difficulty: "intermediate",
      question:
        "You store product descriptions and their embeddings in Azure Cosmos DB for NoSQL. You need to return the ten items most similar to a query embedding. What do you need?",
      options: [
        { id: "A", text: "A composite index on the embedding property and an ORDER BY on the item id", rationale: "Composite indexes speed up ordinary filters and sorts; they do not compute vector similarity." },
        { id: "B", text: "A container vector policy for the embedding path and a query using the VectorDistance system function", rationale: "Correct. The vector policy tells the engine where the vectors are, their data type, dimensions and distance function; VectorDistance computes similarity in the query." },
        { id: "C", text: "A change feed processor that compares each new embedding with the query", rationale: "The change feed reacts to inserts and updates; it is not a query mechanism for similarity search." },
        { id: "D", text: "Strong consistency on the account", rationale: "Consistency levels govern read guarantees, not similarity search." },
      ],
      answer: "B",
      explanation:
        "Vector search in Cosmos DB for NoSQL needs a vector policy on the container, ideally a vector index (flat, quantizedFlat or diskANN), and a query that orders by VectorDistance. Existing vector policy settings cannot be edited in place; you drop and re-add them.",
      reference: { label: "Microsoft Learn — Vector search in Azure Cosmos DB for NoSQL", url: "https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/vector-search" },
    },
    {
      id: "ai200-d2-cosmos-session",
      domain: "d2",
      objective: "Optimize query performance and Request Units (RUs) consumption by using indexing policies and consistency levels",
      difficulty: "intermediate",
      question:
        "A chat application stores each user's conversation history in Azure Cosmos DB. A user must always see the message they just wrote, but other users may see it a little later. You also want to keep the RU cost of reads low. Which consistency level fits best?",
      options: [
        { id: "A", text: "Strong", rationale: "Strong gives the requirement, but its reads use two replicas and cost about twice as many RUs as session reads." },
        { id: "B", text: "Bounded staleness", rationale: "Bounded staleness reads also use two replicas, so they cost more than session reads." },
        { id: "C", text: "Session", rationale: "Correct. Session consistency guarantees read-your-writes within a client session and uses single-replica reads." },
        { id: "D", text: "Eventual", rationale: "Eventual is cheap but does not guarantee that a user reads their own write." },
      ],
      answer: "C",
      explanation:
        "Session consistency gives read-your-writes and write-follows-reads within a session. Strong and bounded staleness reads use a minority quorum of two replicas, so for the same RUs their read throughput is half that of the weaker levels.",
      reference: { label: "Microsoft Learn — Consistency levels in Azure Cosmos DB", url: "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels" },
    },
    {
      id: "ai200-d2-change-feed-lease",
      domain: "d2",
      objective: "Implement a change feed processor to detect and handle new or updated items",
      difficulty: "foundation",
      question:
        "You use the change feed processor to generate embeddings whenever documents are inserted or updated in a Cosmos DB container. Several instances of the worker run in parallel. What coordinates which instance processes which part of the feed and stores progress?",
      options: [
        { id: "A", text: "The lease container", rationale: "Correct. The lease container stores state and coordinates processing across workers, with a lease per partition key range." },
        { id: "B", text: "The monitored container", rationale: "The monitored container is the source of the changes, not the store of processing state." },
        { id: "C", text: "The delegate", rationale: "The delegate is your code that handles each batch of changes; it does not coordinate workers." },
        { id: "D", text: "A Service Bus dead-letter queue", rationale: "Dead-letter queues hold failed messages in Service Bus; they play no part in the change feed processor." },
      ],
      answer: "A",
      explanation:
        "The change feed processor has four parts: the monitored container, the lease container, the compute instance and the delegate. Leases let instances share the work and resume from the last checkpoint after a restart.",
      reference: { label: "Microsoft Learn — Change feed processor in Azure Cosmos DB", url: "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-processor" },
    },
    {
      id: "ai200-d2-pgvector-hnsw",
      domain: "d2",
      objective: "Implement indexing strategies, including optimizing query latency and reducing pgvector compute overhead",
      difficulty: "advanced",
      question:
        "In Azure Database for PostgreSQL you create a new, still empty table for document embeddings. You want an approximate nearest neighbour index created now, with the best speed–recall trade-off for queries. Which pgvector index type fits?",
      options: [
        { id: "A", text: "No index, so that every query performs an exact search", rationale: "Without an index pgvector performs an exact search with perfect recall, but at the cost of query performance." },
        { id: "B", text: "IVFFlat", rationale: "IVFFlat builds faster and uses less memory, but it has a training step on existing data and a weaker speed–recall trade-off." },
        { id: "C", text: "A B-tree index on the embedding column", rationale: "B-tree indexes do not support vector similarity operators." },
        { id: "D", text: "HNSW", rationale: "Correct. HNSW has a better speed–recall trade-off and no training step, so it can be created on an empty table; it needs more build time and memory." },
      ],
      answer: "D",
      explanation:
        "pgvector offers exact search without an index and approximate search with IVFFlat or HNSW. IVFFlat partitions existing data with k-means, so it is best created after loading data; HNSW can be created up front.",
      reference: { label: "Microsoft Learn — Optimise performance when using pgvector", url: "https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-optimize-performance-pgvector" },
    },
    {
      id: "ai200-d2-redis-vector",
      domain: "d2",
      objective: "Implement vector indexing to enable similarity search",
      difficulty: "advanced",
      question:
        "You want to use an existing Azure Managed Redis instance as a semantic cache with vector similarity search. The instance was created without any modules. What do you need to do?",
      options: [
        { id: "A", text: "Load the RediSearch module into the running instance from the Azure portal", rationale: "Modules cannot be loaded manually into an existing Azure Managed Redis instance." },
        { id: "B", text: "Create a new instance with the RediSearch module enabled at creation time", rationale: "Correct. Modules must be added when the instance is created, and RediSearch provides the vector similarity queries." },
        { id: "C", text: "Set a longer expiration on all cached keys", rationale: "Expiration controls how long keys live; it does not add search or vector capabilities." },
        { id: "D", text: "Switch the instance to the OSS clustering policy", rationale: "RediSearch requires the Enterprise clustering policy, and changing the policy does not add a module." },
      ],
      answer: "B",
      explanation:
        "RediSearch adds secondary indexing and vector similarity search such as KNN to Azure Managed Redis. It must be chosen when the instance is created and requires the Enterprise clustering policy and the NoEviction eviction policy.",
      reference: { label: "Microsoft Learn — Use Redis modules with Azure Managed Redis", url: "https://learn.microsoft.com/en-us/azure/redis/redis-modules" },
    },

    /* ── Domain 3: Connect to and consume Azure services ──────────────────── */
    {
      id: "ai200-d3-dead-letter",
      domain: "d3",
      objective: "Queue and process back-end operations by using Azure Service Bus, including dead-letter queue handling, messages, topics, and subscriptions",
      difficulty: "intermediate",
      question:
        "Some messages in an Azure Service Bus queue fail repeatedly because of malformed payloads. After the default number of delivery attempts, they disappear from the queue. Where are they, and how do you process them?",
      options: [
        { id: "A", text: "They were deleted; increase the time-to-live to keep them", rationale: "They are not deleted. Messages that exceed the maximum delivery count are moved, not discarded." },
        { id: "B", text: "They were moved to Azure Event Grid; subscribe to the topic", rationale: "Service Bus does not forward failed messages to Event Grid." },
        { id: "C", text: "They were moved to the queue's dead-letter sub-queue; create a receiver for that sub-queue and complete each message after handling it", rationale: "Correct. After the maximum delivery count (default 10) is exceeded, the message moves to the dead-letter queue, where it stays until it is received and completed." },
        { id: "D", text: "They expire automatically from the dead-letter queue after 24 hours", rationale: "There is no automatic clean-up of the dead-letter queue, and time-to-live is not observed there." },
      ],
      answer: "C",
      explanation:
        "Every queue and subscription has its own dead-letter sub-queue. With the .NET SDK you set the receiver's SubQueue option to DeadLetter, inspect DeadLetterReason (for example MaxDeliveryCountExceeded) and complete the message to remove it.",
      reference: { label: "Microsoft Learn — Service Bus dead-letter queues", url: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues" },
    },
    {
      id: "ai200-d3-event-grid-filter",
      domain: "d3",
      objective: "Implement event-driven workflows by using Azure Event Grid, including filters, custom events, and retries",
      difficulty: "intermediate",
      question:
        "An Azure Function should run only when a new .pdf file is uploaded to a storage account, not for deletions and not for other file types. How do you configure the Event Grid subscription?",
      options: [
        { id: "A", text: "Filter on the BlobCreated event type and set a subject ends with filter of .pdf", rationale: "Correct. Event type filtering limits delivery to creation events, and the subject filter limits it to blobs whose names end in .pdf." },
        { id: "B", text: "Subscribe to all event types and discard unwanted events in the function code", rationale: "This works but triggers the function for every event, which the requirement avoids." },
        { id: "C", text: "Set the subscription's retry policy to zero attempts", rationale: "Retry settings control redelivery after failures, not which events are sent." },
        { id: "D", text: "Use a dead-letter location for unwanted events", rationale: "Dead-lettering stores events that could not be delivered; it is not a filter." },
      ],
      answer: "A",
      explanation:
        "Event Grid subscriptions can filter by event type, by subject (begins with or ends with) and with advanced filters on data fields. Filtering at the subscription saves executions and keeps handler code simple.",
      reference: { label: "Microsoft Learn — Event Grid event filtering", url: "https://learn.microsoft.com/en-us/azure/event-grid/event-filtering" },
    },
    {
      id: "ai200-d3-functions-bindings",
      domain: "d3",
      objective: "Build serverless APIs, including implementing triggers and bindings",
      difficulty: "foundation",
      question:
        "An Azure Function must run for every message in a storage queue and write a document to Azure Cosmos DB, without hard-coding connection logic for either service. Which design is correct?",
      options: [
        { id: "A", text: "Two triggers: a queue trigger and a Cosmos DB trigger", rationale: "A function must have exactly one trigger, and a Cosmos DB trigger reacts to changes rather than writing documents." },
        { id: "B", text: "An HTTP trigger that polls the queue and calls the Cosmos DB REST API", rationale: "Polling and manual API calls are exactly the hard-coded access that bindings avoid." },
        { id: "C", text: "A timer trigger with no bindings", rationale: "A timer runs on a schedule, not per message, and without bindings you still need your own connection code." },
        { id: "D", text: "A queue trigger with a Cosmos DB output binding", rationale: "Correct. The trigger starts the function for each message, and the output binding writes the document." },
      ],
      answer: "D",
      explanation:
        "Each function has exactly one trigger and any number of optional input and output bindings. Bindings pass data in through parameters and out through return values or output parameters, so you do not write service-specific plumbing.",
      reference: { label: "Microsoft Learn — Azure Functions triggers and bindings", url: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings" },
    },
    {
      id: "ai200-d3-service-bus-topics",
      domain: "d3",
      objective: "Queue and process back-end operations by using Azure Service Bus, including dead-letter queue handling, messages, topics, and subscriptions",
      difficulty: "intermediate",
      question:
        "When an order is placed, three independent back-end services (billing, shipping and an AI recommendation service) must each receive their own copy of the order message and process it at their own pace. What should you use?",
      options: [
        { id: "A", text: "A single Service Bus queue that all three services read from", rationale: "With a queue, each message is processed by one receiver only, so each service would see only some of the orders." },
        { id: "B", text: "A Service Bus topic with one subscription per service", rationale: "Correct. Each subscription receives its own copy of every message sent to the topic, and each service consumes its subscription independently." },
        { id: "C", text: "Three Azure Functions with HTTP triggers called in sequence", rationale: "Direct calls couple the services and lose the buffering that messaging provides." },
        { id: "D", text: "An Azure App Configuration feature flag", rationale: "Feature flags switch application behaviour; they do not deliver messages." },
      ],
      answer: "B",
      explanation:
        "Queues are for one-to-one, competing-consumer processing; topics and subscriptions are for publish–subscribe, where each subscriber gets its own copy. Each subscription also has its own dead-letter sub-queue.",
      reference: GUIDE,
    },

    /* ── Domain 4: Secure, monitor, and troubleshoot Azure solutions ──────── */
    {
      id: "ai200-d4-key-vault-reference",
      domain: "d4",
      objective: "Secure secrets by using Azure Key Vault, including rotation and retrieval",
      difficulty: "intermediate",
      question:
        "An App Service app reads a database password through a Key Vault reference in its app settings. The password is rotated every 90 days, and the app must pick up the new version without a code or settings change. How should the reference be written?",
      options: [
        { id: "A", text: "With the full secret URI including the current version identifier", rationale: "A versioned reference stays pinned to that version and does not follow rotation." },
        { id: "B", text: "As the plain-text password, updated by a script after each rotation", rationale: "This puts the secret in app settings and needs a settings change every time." },
        { id: "C", text: "As an Azure App Configuration key with a label for each version", rationale: "App Configuration is for non-secret settings and feature flags; secrets belong in Key Vault." },
        { id: "D", text: "With the secret URI but without a version, using the app's managed identity for access", rationale: "Correct. Without a version, the app uses the latest secret version and picks up a rotated value automatically, within 24 hours." },
      ],
      answer: "D",
      explanation:
        "Key Vault references use the app's managed identity, which needs read access to secrets. App Service caches referenced values and refetches them every 24 hours; any configuration change restarts the app and refetches them immediately.",
      reference: { label: "Microsoft Learn — Use Key Vault references in App Service", url: "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references" },
    },
    {
      id: "ai200-d4-app-configuration",
      domain: "d4",
      objective: "Store and retrieve app configuration information by using Azure App Configuration",
      difficulty: "foundation",
      question:
        "Several microservices need a central place for shared, non-secret settings such as model deployment names and timeouts, plus feature flags to switch on a new retrieval strategy gradually. Which service fits?",
      options: [
        { id: "A", text: "Azure Key Vault only", rationale: "Key Vault is designed for secrets, keys and certificates, and it has no feature flag management." },
        { id: "B", text: "Azure Monitor", rationale: "Azure Monitor collects telemetry; it does not serve application settings." },
        { id: "C", text: "Azure App Configuration", rationale: "Correct. App Configuration centrally manages application settings and feature flags, and complements Key Vault, which holds the secrets." },
        { id: "D", text: "Environment variables baked into each container image", rationale: "Baked-in values require a rebuild for each change and are not shared centrally." },
      ],
      answer: "C",
      explanation:
        "Use App Configuration for settings and feature flags, and Key Vault for secrets. Labels in App Configuration help you keep variants of the same key, for example per environment.",
      reference: { label: "Microsoft Learn — What is Azure App Configuration?", url: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/overview" },
    },
    {
      id: "ai200-d4-opentelemetry",
      domain: "d4",
      objective: "Trace distributed systems by using OpenTelemetry SDKs",
      difficulty: "intermediate",
      question:
        "You instrument a Python API and its background worker with the Microsoft OpenTelemetry distro to send traces to Application Insights. For production, which approach does Microsoft recommend for supplying the destination?",
      options: [
        { id: "A", text: "Hard-code the Application Insights instrumentation key in the source", rationale: "Keys in source code are hard to rotate and are not the recommended configuration." },
        { id: "B", text: "Set the APPLICATIONINSIGHTS_CONNECTION_STRING environment variable", rationale: "Correct. The distro reads the Application Insights connection string from this environment variable, which Microsoft recommends for production." },
        { id: "C", text: "Write traces to local log files and upload them weekly", rationale: "This loses near-real-time distributed tracing and is not how the exporter works." },
        { id: "D", text: "Store the connection string in a Service Bus message", rationale: "Service Bus carries application messages, not instrumentation configuration." },
      ],
      answer: "B",
      explanation:
        "The OpenTelemetry distro collects traces, metrics and logs and exports them to Azure Monitor. With both services instrumented, correlated traces let you follow one request across the API and the worker, and you can then analyse them with KQL.",
      reference: { label: "Microsoft Learn — Enable OpenTelemetry in Application Insights", url: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-enable" },
    },
  ],
};
