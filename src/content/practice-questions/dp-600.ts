import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free DP-600 sample questions — ORIGINAL questions written by CertRamp for the
 * skills measured as of 19 October 2026. Not taken from the paid practice exams,
 * not recalled exam content, and not presented as real exam questions.
 */
const GUIDE = {
  label: "Microsoft Learn — DP-600 study guide",
  url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-600",
};

export const dp600Questions: PracticeQuestionSet = {
  slug: "dp-600",
  intro:
    "15 original DP-600 practice questions across the three skill areas of the Microsoft study guide (skills measured as of 19 October 2026), weighted roughly like the real exam. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "DP-600 Practice Questions with Answers & Explanations (2026)",
    description:
      "15 free, original DP-600 practice questions on Microsoft Fabric security, deployment pipelines, lakehouses, warehouses, SQL, KQL, DAX and Direct Lake.",
  },
  questions: [
    /* ── Domain 1: Maintain a data analytics solution ─────────────────────── */
    {
      id: "dp600-d1-endorse-certify",
      domain: "d1",
      objective: "Endorse items",
      difficulty: "foundation",
      question:
        "Your organisation wants report authors to recognise one sales semantic model as the official, reviewed source. A Fabric administrator has enabled certification and named a group of reviewers. What should the model owner do?",
      options: [
        { id: "A", text: "Request certification so that one of the designated reviewers can certify the model", rationale: "Correct. Anyone can request certification, but only users specified by a Fabric administrator can certify an item." },
        { id: "B", text: "Promote the model and treat that as certification", rationale: "Any user with write permission can promote an item. Promotion signals that it is useful, but it is not the reviewed, authoritative badge." },
        { id: "C", text: "Apply a Highly Confidential sensitivity label", rationale: "Sensitivity labels classify and protect data; they do not mark an item as the official source." },
        { id: "D", text: "Move the model to a workspace named Certified", rationale: "Workspace names have no effect on endorsement." },
      ],
      answer: "A",
      explanation:
        "Fabric offers three endorsement badges: promoted, certified and master data. Promotion is self-service for anyone with write permission; certification and master data are restricted to users the Fabric administrator designates.",
      reference: { label: "Microsoft Learn — Endorsement overview", url: "https://learn.microsoft.com/en-us/fabric/governance/endorsement-overview" },
    },
    {
      id: "dp600-d1-workspace-role",
      domain: "d1",
      objective: "Implement workspace-level access controls",
      difficulty: "foundation",
      question:
        "A data engineer must create and edit notebooks, pipelines and warehouses in a Fabric workspace but must not be able to add other people to the workspace. Which workspace role should you assign?",
      options: [
        { id: "A", text: "Admin", rationale: "Admins can manage all workspace settings and access, which is more than required." },
        { id: "B", text: "Member", rationale: "Members can add members or others with lower permissions, which the requirement rules out." },
        { id: "C", text: "Contributor", rationale: "Correct. Contributors can create, edit and delete content but cannot add members to the workspace." },
        { id: "D", text: "Viewer", rationale: "Viewers can read content but cannot create or modify items." },
      ],
      answer: "C",
      explanation:
        "Least privilege drives most workspace-role questions. Contributor is the usual role for builders; Member adds the right to share and add people; Viewer is read-only.",
      reference: { label: "Microsoft Learn — Roles in workspaces in Microsoft Fabric", url: "https://learn.microsoft.com/en-us/fabric/fundamentals/roles-workspaces" },
    },
    {
      id: "dp600-d1-deployment-rule",
      domain: "d1",
      objective: "Create and configure deployment pipelines",
      difficulty: "intermediate",
      question:
        "You use a Fabric deployment pipeline with development, test and production stages. After every deployment, the semantic model in production must point to the production database rather than the test database. What should you configure?",
      options: [
        { id: "A", text: "A default lakehouse rule in the test stage", rationale: "Default lakehouse rules apply only to notebooks, and the rule must be set on the target stage." },
        { id: "B", text: "A data source rule (or parameter rule) on the semantic model in the production stage", rationale: "Correct. Deployment rules are defined on the item in the target stage, and deployed content then inherits the rule's value." },
        { id: "C", text: "A sensitivity label on the production workspace", rationale: "Labels protect data; they do not change connections during deployment." },
        { id: "D", text: "Manual editing of the connection after each deployment", rationale: "This works but is error-prone; deployment rules exist to automate exactly this." },
      ],
      answer: "B",
      explanation:
        "Deployment rules let one item carry stage-specific settings. Semantic models support data source and parameter rules; notebooks support default lakehouse rules.",
      reference: { label: "Microsoft Learn — Create deployment rules", url: "https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/create-rules" },
    },
    {
      id: "dp600-d1-pbids",
      domain: "d1",
      objective: "Create and update reusable assets, including Power BI template (.pbit) files, Power BI data source (.pbids) files, and shared semantic models",
      difficulty: "intermediate",
      question:
        "You want report authors to start new reports already connected to the right SQL endpoint, without sending them a model or any credentials. Authors will then choose tables themselves. Which file should you distribute?",
      options: [
        { id: "A", text: "A .pbix file containing the full model", rationale: "A .pbix contains a model and data, which is more than the requirement asks for." },
        { id: "B", text: "A .pbit template with all tables preselected", rationale: "A template carries a model definition and report layout; the requirement is only a preconfigured connection." },
        { id: "C", text: "A .pbip project folder", rationale: "Power BI projects are for source control of report and model definitions, not for handing out a connection." },
        { id: "D", text: "A .pbids file", rationale: "Correct. A .pbids file defines a single data source; Power BI Desktop asks for credentials and opens the Navigator so authors can pick tables." },
      ],
      answer: "D",
      explanation:
        "PBIDS files are small JSON files that describe one data source. They contain no authentication, table or schema information, which makes them a safe way to standardise how authors connect.",
      reference: { label: "Microsoft Learn — Data sources in Power BI Desktop (PBIDS files)", url: "https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-data-sources" },
    },

    /* ── Domain 2: Prepare data ───────────────────────────────────────────── */
    {
      id: "dp600-d2-warehouse-vs-lakehouse",
      domain: "d2",
      objective: "Choose between different data stores",
      difficulty: "foundation",
      question:
        "Your team consists of SQL developers. They must load several related tables with T-SQL inside a single transaction, so that either all tables update or none do. Which Fabric item should store the data?",
      options: [
        { id: "A", text: "Lakehouse", rationale: "Lakehouses are written mainly with Spark; their SQL analytics endpoint is read-only for T-SQL." },
        { id: "B", text: "Warehouse", rationale: "Correct. The warehouse offers full T-SQL DML and DDL with multi-table transaction support." },
        { id: "C", text: "Eventhouse", rationale: "Eventhouses are optimised for real-time and time-series data queried with KQL, not T-SQL transactions." },
        { id: "D", text: "Power BI semantic model", rationale: "Semantic models serve analysis and reports; they are not a transactional data store." },
      ],
      answer: "B",
      explanation:
        "Microsoft's decision guide is simple: Spark skills or unstructured data point to a lakehouse; T-SQL skills and multi-table transactions point to a warehouse.",
      reference: { label: "Microsoft Learn — Choose between warehouse and lakehouse", url: "https://learn.microsoft.com/en-us/fabric/fundamentals/decision-guide-lakehouse-warehouse" },
    },
    {
      id: "dp600-d2-sql-endpoint-readonly",
      domain: "d2",
      objective: "Ingest or access data as needed",
      difficulty: "intermediate",
      question:
        "An analyst connects to a lakehouse's SQL analytics endpoint and runs an INSERT statement to add correction rows to a Delta table. The statement fails. What is the reason?",
      options: [
        { id: "A", text: "The SQL analytics endpoint is read-only; data in a lakehouse is written with Spark, pipelines or dataflows, or referenced through shortcuts", rationale: "Correct. The endpoint supports queries and limited DDL such as views and functions, but no DML." },
        { id: "B", text: "The analyst needs the Viewer role to write data", rationale: "Viewer is the most restrictive workspace role; it never grants write access." },
        { id: "C", text: "INSERT works only when the table is not partitioned", rationale: "Partitioning is not the cause; the endpoint does not allow DML at all." },
        { id: "D", text: "The Delta table must first be converted to Parquet", rationale: "Delta tables already store data in Parquet files; conversion is not the issue." },
      ],
      answer: "A",
      explanation:
        "Every lakehouse has a system-generated, read-only SQL analytics endpoint for T-SQL querying. If SQL developers need to write with T-SQL, use a warehouse, or write to the lakehouse with Spark or a pipeline.",
      reference: { label: "Microsoft Learn — Choose between warehouse and lakehouse", url: "https://learn.microsoft.com/en-us/fabric/fundamentals/decision-guide-lakehouse-warehouse" },
    },
    {
      id: "dp600-d2-onelake-eventhouse",
      domain: "d2",
      objective: "Implement OneLake integration for Eventhouse and semantic models",
      difficulty: "intermediate",
      question:
        "Telemetry lands in a KQL database in an eventhouse. Data engineers want to read the same data from a lakehouse and a Direct Lake semantic model without building a copy pipeline. What should you do?",
      options: [
        { id: "A", text: "Export the KQL tables to CSV every hour", rationale: "This builds exactly the copy process the requirement wants to avoid." },
        { id: "B", text: "Create a mirrored database for the eventhouse", rationale: "Mirroring brings external databases into Fabric; it is not how eventhouse data is exposed to other Fabric engines." },
        { id: "C", text: "Turn on OneLake availability for the KQL database and create a shortcut from the lakehouse", rationale: "Correct. OneLake availability creates a logical copy in Delta Lake format that other Fabric engines, including Direct Lake, can query." },
        { id: "D", text: "Change the KQL database to a warehouse", rationale: "An eventhouse cannot simply be converted into a warehouse." },
      ],
      answer: "C",
      explanation:
        "OneLake availability can be enabled per database or per table. The data then appears in OneLake as Delta tables that lakehouses, warehouses, notebooks and Power BI Direct Lake can use.",
      reference: { label: "Microsoft Learn — Eventhouse OneLake availability", url: "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-house-onelake-availability" },
    },
    {
      id: "dp600-d2-denormalise",
      domain: "d2",
      objective: "Implement a star schema for a lakehouse or warehouse",
      difficulty: "intermediate",
      question:
        "In a warehouse, product data arrives in three normalised tables: Product, Subcategory and Category. You are building a star schema for reporting. What is the usual design?",
      options: [
        { id: "A", text: "Keep the three tables and relate Category directly to the fact table", rationale: "Category has no key in the fact table at product grain; this would not work and keeps a snowflake." },
        { id: "B", text: "Merge the fact table into the Product table", rationale: "Facts and dimensions serve different purposes; merging them destroys the star schema." },
        { id: "C", text: "Create a separate fact table for each category", rationale: "Splitting facts by category complicates queries and is not a star schema pattern." },
        { id: "D", text: "Denormalise the three tables into one Product dimension with subcategory and category columns", rationale: "Correct. A star schema keeps one table per dimension, so the hierarchy becomes columns of the Product dimension." },
      ],
      answer: "D",
      explanation:
        "Star schemas use one fact table surrounded by denormalised dimension tables. Flattening snowflaked hierarchies simplifies relationships and helps both SQL queries and semantic models.",
      reference: GUIDE,
    },
    {
      id: "dp600-d2-kql-bin",
      domain: "d2",
      objective: "Select, filter, and aggregate data by using KQL",
      difficulty: "intermediate",
      question:
        "In a KQL queryset you need the number of error events per hour over the last day from a table named DeviceTelemetry. Which query is correct?",
      options: [
        { id: "A", text: "DeviceTelemetry | summarize count() | where Level == \"Error\"", rationale: "After summarize without by, the Level column no longer exists, so the filter fails, and there is no hourly grouping." },
        { id: "B", text: "DeviceTelemetry | where Timestamp > ago(1d) and Level == \"Error\" | summarize Errors = count() by bin(Timestamp, 1h)", rationale: "Correct. Filter first, then aggregate into one-hour buckets with bin()." },
        { id: "C", text: "SELECT COUNT(*) FROM DeviceTelemetry GROUP BY HOUR", rationale: "This is not KQL, and GROUP BY HOUR is not valid syntax." },
        { id: "D", text: "DeviceTelemetry | take 24 | where Level == \"Error\"", rationale: "take returns arbitrary rows; it does not count per hour." },
      ],
      answer: "B",
      explanation:
        "The typical KQL pattern is where → summarize … by bin(). The outline expects you to select, filter and aggregate with the visual query editor, SQL, KQL and DAX.",
      reference: GUIDE,
    },
    {
      id: "dp600-d2-duplicates",
      domain: "d2",
      objective: "Identify and resolve duplicate data, missing data, or null values",
      difficulty: "foundation",
      question:
        "Before loading a customer table into a warehouse, you want to list every CustomerID that appears more than once in the staging table. Which T-SQL query does this?",
      options: [
        { id: "A", text: "SELECT CustomerID, COUNT(*) AS Cnt FROM stg.Customer GROUP BY CustomerID HAVING COUNT(*) > 1", rationale: "Correct. GROUP BY counts rows per CustomerID, and HAVING filters on the aggregated count." },
        { id: "B", text: "SELECT DISTINCT CustomerID FROM stg.Customer", rationale: "DISTINCT removes duplicates from the result; it does not show which IDs were duplicated." },
        { id: "C", text: "SELECT CustomerID FROM stg.Customer WHERE COUNT(*) > 1", rationale: "Aggregate functions cannot be used in a WHERE clause." },
        { id: "D", text: "SELECT TOP 1 CustomerID FROM stg.Customer", rationale: "This returns a single row and says nothing about duplicates." },
      ],
      answer: "A",
      explanation:
        "WHERE filters rows before grouping; HAVING filters groups after aggregation. Finding duplicates is a classic case for GROUP BY with HAVING COUNT(*) > 1.",
      reference: GUIDE,
    },
    {
      id: "dp600-d2-dax-query",
      domain: "d2",
      objective: "Select, filter, and aggregate data by using DAX",
      difficulty: "advanced",
      question:
        "In DAX query view you want a table of total sales per product category for the year 2026 only. Which query returns this?",
      options: [
        { id: "A", text: "Total Sales 2026 = CALCULATE([Total Sales], 'Date'[Year] = 2026)", rationale: "This is a measure definition, not a query; it does not return a table by category." },
        { id: "B", text: "EVALUATE 'Product'[Category]", rationale: "A DAX query needs a table expression, and this returns no sales values or year filter." },
        { id: "C", text: "EVALUATE SUMMARIZECOLUMNS('Product'[Category], TREATAS({2026}, 'Date'[Year]), \"Sales\", [Total Sales])", rationale: "Correct. SUMMARIZECOLUMNS groups by category, applies the year filter and adds the measure as a column." },
        { id: "D", text: "SELECT Category, SUM(Sales) FROM Product WHERE Year = 2026", rationale: "This is SQL, not DAX." },
      ],
      answer: "C",
      explanation:
        "DAX queries start with EVALUATE and return a table. SUMMARIZECOLUMNS with grouping columns, filter tables and named expressions is the standard way to aggregate in a DAX query.",
      reference: GUIDE,
    },

    /* ── Domain 3: Implement and manage semantic models ───────────────────── */
    {
      id: "dp600-d3-direct-lake-views",
      domain: "d3",
      objective: "Choose between Direct Lake on OneLake and Direct Lake on SQL analytics endpoint",
      difficulty: "advanced",
      question:
        "A Direct Lake semantic model must include a table that is based on a non-materialised SQL view in a warehouse. Which statement is correct?",
      options: [
        { id: "A", text: "Direct Lake on OneLake reads the view directly from OneLake without fallback", rationale: "Direct Lake on OneLake does not support tables based on non-materialised SQL views." },
        { id: "B", text: "Views are always loaded in Import mode automatically in both variants", rationale: "Neither variant silently switches the table to Import mode." },
        { id: "C", text: "Both variants require you to convert the view into a calculated table in DAX", rationale: "This is not required; the documented options are fallback, a materialised view or a different storage mode." },
        { id: "D", text: "With Direct Lake on SQL analytics endpoint, queries on that table fall back to DirectQuery, unless fallback is disabled, in which case they fail", rationale: "Correct. Direct Lake on SQL falls back to DirectQuery for SQL views, controlled by the Direct Lake behaviour property." },
      ],
      answer: "D",
      explanation:
        "Direct Lake on SQL analytics endpoints can fall back to DirectQuery, for example for SQL views or SQL-based granular access control. Direct Lake on OneLake has no DirectQuery fallback; use a lakehouse materialised view or another storage mode instead.",
      reference: { label: "Microsoft Learn — Direct Lake overview", url: "https://learn.microsoft.com/en-us/fabric/fundamentals/direct-lake-overview" },
    },
    {
      id: "dp600-d3-incremental-refresh",
      domain: "d3",
      objective: "Implement incremental refresh for semantic models",
      difficulty: "intermediate",
      question:
        "You configure incremental refresh on an Import-mode sales table from a SQL source. Which setup does Power BI require?",
      options: [
        { id: "A", text: "Date/time parameters named RangeStart and RangeEnd that filter the date column, with the filter folding back to the source", rationale: "Correct. These reserved, case-sensitive parameters define the partitions, and folding ensures only the needed rows are retrieved." },
        { id: "B", text: "Text parameters named StartDate and EndDate", rationale: "The names are reserved as RangeStart and RangeEnd, and they must be of the date/time type." },
        { id: "C", text: "A calculated column that flags rows from the last 30 days", rationale: "Calculated columns are evaluated after loading; they cannot limit what is retrieved from the source." },
        { id: "D", text: "A DirectQuery table with a relative date slicer", rationale: "A slicer filters visuals, not refresh partitions." },
      ],
      answer: "A",
      explanation:
        "Incremental refresh filters by RangeStart and RangeEnd in Power Query. If the filter does not fold, Power BI may have to retrieve all rows, which makes refreshes slow or exhausts resources.",
      reference: { label: "Microsoft Learn — Incremental refresh overview", url: "https://learn.microsoft.com/en-us/power-bi/connect-data/incremental-refresh-overview" },
    },
    {
      id: "dp600-d3-calculation-groups",
      domain: "d3",
      objective: "Implement calculation groups, dynamic format strings, and field parameters",
      difficulty: "intermediate",
      question:
        "A model has 25 base measures. Business users want YTD, prior year and year-over-year % versions of each, and the model is becoming unmanageable. What should you implement?",
      options: [
        { id: "A", text: "75 additional explicit measures", rationale: "This is the redundancy the requirement wants to avoid." },
        { id: "B", text: "Field parameters listing the 25 measures", rationale: "Field parameters let users switch which measure or column a visual shows; they do not apply time calculations." },
        { id: "C", text: "A calculation group with YTD, PY and YoY% calculation items that use SELECTEDMEASURE()", rationale: "Correct. Calculation items apply one DAX pattern to whichever measure is in context, which removes redundant measures." },
        { id: "D", text: "A many-to-many relationship to the date table", rationale: "Relationship cardinality does not create time-intelligence variants of measures." },
      ],
      answer: "C",
      explanation:
        "SELECTEDMEASURE() is a placeholder for the measure in a calculation item expression. Calculation groups can significantly reduce the number of measures, and dynamic format strings help when items such as YoY% need a different format.",
      reference: { label: "Microsoft Learn — Calculation groups", url: "https://learn.microsoft.com/en-us/power-bi/transform-model/calculation-groups" },
    },
    {
      id: "dp600-d3-large-format",
      domain: "d3",
      objective: "Identify use cases for and configure large semantic model storage format",
      difficulty: "advanced",
      question:
        "Your team manages a modest-sized semantic model on a Fabric capacity and deploys changes to it through the XMLA endpoint with external tools. Why might you still enable the large semantic model storage format?",
      options: [
        { id: "A", text: "It is required for any model with row-level security", rationale: "Row-level security does not depend on the storage format." },
        { id: "B", text: "Microsoft recommends it for XMLA-based write operations because it can improve their performance", rationale: "Correct. Besides allowing models to grow beyond the default size limit, the large format can improve XMLA write performance." },
        { id: "C", text: "It converts the model to Direct Lake automatically", rationale: "The storage format setting does not change the storage mode of tables." },
        { id: "D", text: "It removes the need for refreshes", rationale: "Import models still need refreshes regardless of the storage format." },
      ],
      answer: "B",
      explanation:
        "The large semantic model storage format lifts the default size limit up to the capacity size and is recommended when you use XMLA-based tools for write operations. It also brings on-demand loading of evicted models.",
      reference: { label: "Microsoft Learn — Large semantic models in Power BI Premium and Fabric", url: "https://learn.microsoft.com/en-us/power-bi/enterprise/service-premium-large-models" },
    },
  ],
};
