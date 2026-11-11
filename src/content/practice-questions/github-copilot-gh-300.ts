import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free GH-300 sample questions. ORIGINAL questions written by CertRamp against
 * the skills measured in the Microsoft Learn GH-300 study guide (as of
 * 7 August 2026) and GitHub documentation, verified 11 November 2026. Not taken
 * from the paid practice tests, not recalled exam content, and not presented as
 * real exam questions.
 */
const CLI_ABOUT = {
  label: "GitHub Docs: About GitHub Copilot CLI",
  url: "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli",
};

const PROMPT_FLOW = {
  label: "Microsoft Learn: GitHub Copilot user prompt process flow",
  url: "https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/3-github-copilot-user-prompt-process-flow",
};

const PROMPT_ENGINEERING = {
  label: "GitHub Docs: Prompt engineering for GitHub Copilot Chat",
  url: "https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering",
};

const UNIT_TESTS = {
  label: "Microsoft Learn: Generate unit tests with the GitHub Copilot Chat view",
  url: "https://learn.microsoft.com/en-us/training/modules/develop-unit-tests-using-github-copilot-tools/3-generate-unit-tests-chat-view",
};

const CODE_REFERENCING = {
  label: "GitHub Docs: GitHub Copilot code referencing",
  url: "https://docs.github.com/en/copilot/concepts/completions/code-referencing",
};

export const githubCopilotGh300Questions: PracticeQuestionSet = {
  slug: "github-copilot-gh-300",
  intro:
    "15 original GH-300 practice questions spread across the six skill areas in the Microsoft Learn study guide (skills measured as of 7 August 2026), roughly by weight: three on responsible use, four on Copilot features, and two each on data and architecture, prompt engineering, developer productivity, and privacy and safeguards. Each one comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-11-11",
  updated: "2026-11-11",
  seo: {
    title: "GH-300 GitHub Copilot Practice Questions with Answers (2026)",
    description:
      "15 free, original GH-300 practice questions on responsible AI, Copilot CLI, agent and plan modes, code review, prompting, testing and content exclusions, each explained.",
  },
  questions: [
    /* ── d1: Use GitHub Copilot responsibly (15 to 20%) ──────────────────────── */
    {
      id: "gh300-d1-accountability-principle",
      domain: "d1",
      objective: "Understand responsible AI principles",
      difficulty: "foundation",
      question:
        "A team lead reminds developers that the team, not the tool, answers for any Copilot-generated code that ships, and that they must keep monitoring how it behaves in production. Which of Microsoft and GitHub's six responsible AI principles does this reflect most directly?",
      options: [
        { id: "A", text: "Inclusiveness", rationale: "Inclusiveness is about AI systems empowering and engaging everyone, not about who answers for outcomes." },
        { id: "B", text: "Fairness", rationale: "Fairness is about treating all people fairly, for example by avoiding biased outcomes." },
        { id: "C", text: "Accountability", rationale: "Correct. The accountability principle says people should be accountable for AI systems and that those who build and deploy them must monitor performance and mitigate risks." },
        { id: "D", text: "Transparency", rationale: "Transparency is about AI systems being understandable, for example through logging and auditability. It supports accountability but is not the principle described." },
      ],
      answer: "C",
      explanation:
        "The six principles are fairness, reliability and safety, privacy and security, inclusiveness, transparency and accountability. Accountability keeps humans responsible for what an AI-assisted system does, which for Copilot means owning the code you accept.",
      reference: { label: "Microsoft Learn: Microsoft and GitHub's six principles of responsible AI", url: "https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/3-six-principles-of-responsible-ai" },
    },
    {
      id: "gh300-d1-validate-output",
      domain: "d1",
      objective: "Validate and operate AI tools",
      difficulty: "foundation",
      question:
        "Copilot suggests a database helper that compiles cleanly and looks correct. What does GitHub's responsible use guidance expect the developer to do before relying on it?",
      options: [
        { id: "A", text: "Carefully review and test the code, with extra attention to security-sensitive parts such as query construction", rationale: "Correct. GitHub warns that suggestions can look valid without doing what you intended and can introduce weaknesses such as SQL injection, so users must review and test them." },
        { id: "B", text: "Accept it, because suggestions are filtered for vulnerabilities before they are shown", rationale: "Copilot's filters reduce some risks but do not guarantee secure or correct code; GitHub says users assume the risks of generated code." },
        { id: "C", text: "Regenerate the suggestion until two versions are identical", rationale: "Consistency between generations is not evidence of correctness." },
        { id: "D", text: "Ask Copilot Chat whether the code is correct and accept it if the answer is yes", rationale: "Asking the same AI to confirm its own output does not replace human review and testing." },
      ],
      answer: "A",
      explanation:
        "Generated code is a starting point, not a final answer. Review it against your design, follow secure coding practices and run tests, because a suggestion can be syntactically valid but semantically wrong.",
      reference: { label: "GitHub Docs: Responsible use of GitHub Copilot inline suggestions", url: "https://docs.github.com/en/copilot/responsible-use/copilot-code-completion" },
    },
    {
      id: "gh300-d1-cli-auto-approval",
      domain: "d1",
      objective: "Validate and operate AI tools",
      difficulty: "advanced",
      question:
        "A developer wants to run Copilot CLI without approval prompts but is worried about destructive commands. Which approach is the most responsible?",
      options: [
        { id: "A", text: "Launch it from the home directory with --allow-all-tools so it can reach every project", rationale: "GitHub advises against launching Copilot CLI from your home directory, and allowing all tools there maximises the potential damage." },
        { id: "B", text: "Use --allow-all-tools together with --allow-tool 'shell(rm)' to make the rule explicit", rationale: "This explicitly allows rm rather than blocking it, which is the opposite of what is wanted." },
        { id: "C", text: "Rely on trusted directories alone, since GitHub guarantees files outside them are protected", rationale: "GitHub states that it does not guarantee that all files outside trusted directories will be protected." },
        { id: "D", text: "Start it in the project directory and combine --allow-all-tools with --deny-tool 'shell(rm)'", rationale: "Correct. --deny-tool takes precedence over --allow-tool and --allow-all-tools, so the combination allows routine work while blocking the risky command, scoped to the project." },
      ],
      answer: "D",
      explanation:
        "With automatic approval, Copilot CLI can run any shell command you can run, which raises the risk of data loss. Limiting the working directory and denying specific dangerous tools keeps the convenience while reducing that risk.",
      reference: CLI_ABOUT,
    },

    /* ── d2: Use GitHub Copilot features (25 to 30%) ─────────────────────────── */
    {
      id: "gh300-d2-cli-install",
      domain: "d2",
      objective: "Use GitHub Copilot CLI",
      difficulty: "intermediate",
      question:
        "A developer whose Copilot seat comes from her organization installs Copilot CLI with npm install -g @github/copilot on Node.js 22, but cannot use it. Her seat is active. What is the most likely cause?",
      options: [
        { id: "A", text: "Copilot CLI requires a Copilot Enterprise plan", rationale: "Copilot CLI is included with all Copilot plans." },
        { id: "B", text: "The Copilot CLI policy is disabled in her organization's settings", rationale: "Correct. When Copilot comes through an organization, the Copilot CLI policy must be enabled; if an owner or enterprise admin disables it, the CLI cannot be used even with an active seat." },
        { id: "C", text: "npm installs require Node.js 24 or later", rationale: "The documented npm requirement is Node.js 22 or later, which she meets." },
        { id: "D", text: "Copilot CLI only installs through Homebrew", rationale: "npm, WinGet, Homebrew, an install script and direct download are all documented install methods." },
      ],
      answer: "B",
      explanation:
        "Installing the CLI is only half the picture: organization and enterprise policies decide whether members may use it. On first launch the user signs in with the /login slash command, or authenticates with a fine-grained token that has the Copilot Requests permission.",
      reference: { label: "GitHub Docs: Installing GitHub Copilot CLI", url: "https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli" },
    },
    {
      id: "gh300-d2-ide-plan-mode",
      domain: "d2",
      objective: "Use GitHub Copilot in the IDE",
      difficulty: "intermediate",
      question:
        "In VS Code, a developer wants Copilot to research a refactoring with read-only tools and produce an implementation plan she can approve before any file changes. Which option in the chat agents dropdown fits?",
      options: [
        { id: "A", text: "Ask", rationale: "Ask answers questions and makes no code changes, but it is not designed to research the task and draft an approvable implementation plan." },
        { id: "B", text: "Agent", rationale: "Agent decides which files to change, proposes edits and terminal commands and iterates until the task is done, which goes beyond planning first." },
        { id: "C", text: "Plan", rationale: "Correct. Plan researches the task with read-only tools and drafts an implementation plan, making no code changes until the plan is approved." },
        { id: "D", text: "A subagent started with the runSubagent tool", rationale: "Subagents run delegated tasks in an isolated context window from Agent mode; they are not the review-before-change workflow." },
      ],
      answer: "C",
      explanation:
        "Copilot Chat in the IDE offers Ask for questions, Plan for read-only research and planning, and Agent for autonomous multi-file changes. After approving a plan you can start implementation or open the plan as a Markdown file.",
      reference: { label: "GitHub Docs: Asking GitHub Copilot questions in your IDE", url: "https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide" },
    },
    {
      id: "gh300-d2-code-review-approval",
      domain: "d2",
      objective: "Use GitHub Copilot features and capabilities",
      difficulty: "advanced",
      question:
        "A repository's branch rules require one approving review. A developer requests a review from Copilot on a pull request, with Copilot approvals left at their default setting. What happens?",
      options: [
        { id: "A", text: "Copilot leaves a Comment review, which does not count toward the required approval", rationale: "Correct. By default Copilot submits a Comment review, so it does not satisfy required approvals; Copilot approvals are off by default and must be enabled separately." },
        { id: "B", text: "Copilot approves the pull request if it finds no issues, satisfying the rule", rationale: "Copilot can only submit approving reviews once approvals have been enabled at the enterprise, organization or repository level." },
        { id: "C", text: "Copilot's review blocks merging until a human resolves every comment", rationale: "Copilot's default review is comment-only; resolving its comments is not a merge requirement by default." },
        { id: "D", text: "Copilot automatically re-reviews after every new push", rationale: "Copilot only reviews new pushes when automatic review with Review new pushes is configured in a ruleset." },
      ],
      answer: "A",
      explanation:
        "Copilot code review adds feedback but, by default, leaves required approvals to humans. Its behaviour can be guided with .github/copilot-instructions.md, path-specific instruction files and AGENTS.md, which it reads from the pull request's head branch.",
      reference: { label: "GitHub Docs: Using GitHub Copilot code review", url: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review" },
    },
    {
      id: "gh300-d2-rest-api-seats",
      domain: "d2",
      objective: "Manage organization-wide settings and policies",
      difficulty: "advanced",
      question:
        "An organization owner calls DELETE /orgs/{org}/copilot/billing/selected_users to remove a user's Copilot seat. When does the user lose access?",
      options: [
        { id: "A", text: "Immediately, as soon as the API returns success", rationale: "Removal does not end access immediately; the seat is set to pending cancellation." },
        { id: "B", text: "After 30 days, regardless of the billing cycle", rationale: "The timing follows the billing cycle, not a fixed 30-day window." },
        { id: "C", text: "At the end of the current billing cycle, unless the user still has a seat through a team", rationale: "Correct. The seat is marked pending cancellation and access ends at the end of the billing cycle; a user who also gets a seat through another team keeps access." },
        { id: "D", text: "Never, because seats can only be removed in the web interface", rationale: "The REST API provides endpoints to add and remove seats for users and teams." },
      ],
      answer: "C",
      explanation:
        "Seat objects carry a pending_cancellation_date so admins can see which seats are ending. If a user's seat was assigned through a team, removing the user directly fails with a 422 error and the team assignment must be changed instead.",
      reference: { label: "GitHub Docs: REST API endpoints for Copilot user management", url: "https://docs.github.com/en/rest/copilot/copilot-user-management" },
    },

    /* ── d3: Understand GitHub Copilot data and architecture (10 to 15%) ─────── */
    {
      id: "gh300-d3-proxy-filter",
      domain: "d3",
      objective: "Describe data handling and flow",
      difficulty: "intermediate",
      question:
        "In the Copilot prompt flow described on Microsoft Learn, what is the role of the proxy server in GitHub's Azure tenant before the prompt reaches the model?",
      options: [
        { id: "A", text: "It stores the prompt permanently so suggestions can be audited later", rationale: "The proxy's described role is filtering traffic, not long-term storage." },
        { id: "B", text: "It filters traffic, blocking attempts to hack the prompt or make the system reveal how suggestions are generated", rationale: "Correct. The proxy filters traffic and blocks prompt manipulation attempts before the prompt is passed on." },
        { id: "C", text: "It compiles the code around the cursor to check for syntax errors", rationale: "Context gathering collects surrounding code, but the proxy does not compile it." },
        { id: "D", text: "It chooses which open editor tabs to include as context", rationale: "Context such as adjacent open tabs is gathered in the first step, together with secure transmission, before the proxy is involved." },
      ],
      answer: "B",
      explanation:
        "The inbound flow is secure transmission and context gathering, proxy filtering, toxicity filtering and then model generation. On the way back, post-processing checks the response again and truncates or discards anything that fails.",
      reference: PROMPT_FLOW,
    },
    {
      id: "gh300-d3-code-referencing-limits",
      domain: "d3",
      objective: "Understand lifecycle and limitations",
      difficulty: "advanced",
      question:
        "A developer assumes that if Copilot shows no code reference for an accepted suggestion, the code cannot match any existing code anywhere. Why is that assumption wrong?",
      options: [
        { id: "A", text: "Code referencing only runs in Copilot Chat, never for inline suggestions", rationale: "Code referencing covers IDE inline suggestions as well as chat responses on GitHub and agent session logs." },
        { id: "B", text: "Code referencing checks only suggestions that were rejected", rationale: "It is accepted, unchanged suggestions that are checked, not rejected ones." },
        { id: "C", text: "References are shown only to enterprise owners", rationale: "References are shown to the user who receives the matching suggestion, where the policy allows it." },
        { id: "D", text: "The public-code index excludes private repositories and code hosted outside GitHub.com, and is refreshed only periodically", rationale: "Correct. The index used for matching does not include private repositories or code outside GitHub.com, so no reference does not prove the code is unique." },
      ],
      answer: "D",
      explanation:
        "Code referencing compares a suggestion and about 150 characters of surrounding code with an index of public GitHub code. It is a useful signal for licensing review, but it has a limited scope like any detection mechanism.",
      reference: CODE_REFERENCING,
    },

    /* ── d4: Apply prompt engineering and context crafting (10 to 15%) ───────── */
    {
      id: "gh300-d4-context-open-tabs",
      domain: "d4",
      objective: "Craft effective prompts",
      difficulty: "foundation",
      question:
        "Inline suggestions in a service file keep using the wrong data model. The correct model is defined in another file that is not open, while several unrelated files are open. What should the developer try first?",
      options: [
        { id: "A", text: "Open the file with the correct model and close the unrelated files", rationale: "Correct. Copilot gathers context such as adjacent open tabs, and GitHub's prompt engineering guidance is to open relevant files and close irrelevant ones." },
        { id: "B", text: "Rename the service file so Copilot treats it as a new file", rationale: "The file name is part of the context, but renaming does not supply the missing model definition." },
        { id: "C", text: "Turn off inline suggestions and use only Copilot CLI", rationale: "Switching tools does not fix the missing context." },
        { id: "D", text: "Add more unrelated files so Copilot has a larger context", rationale: "Irrelevant context dilutes the useful signal rather than helping." },
      ],
      answer: "A",
      explanation:
        "Copilot builds its prompt from the code around the cursor, the file name and type, and information from open tabs. Steering that context is one of the easiest ways to improve suggestions.",
      reference: PROMPT_ENGINEERING,
    },
    {
      id: "gh300-d4-few-shot",
      domain: "d4",
      objective: "Craft effective prompts",
      difficulty: "intermediate",
      question:
        "A developer asks Copilot Chat to convert log lines into a JSON structure, but the field names come out differently each time. Which prompt change applies few-shot prompting?",
      options: [
        { id: "A", text: "Repeat the same request in a new thread until the output matches", rationale: "Starting fresh helps when history is irrelevant, but repeating the same prompt gives Copilot no new information." },
        { id: "B", text: "Shorten the request to a single sentence so it is less ambiguous", rationale: "Shorter is not the same as clearer, and it still provides no examples." },
        { id: "C", text: "Include two or three sample log lines with the exact JSON output expected for each", rationale: "Correct. Few-shot prompting gives the model examples of inputs and outputs; GitHub's guidance recommends providing example input, output and implementations." },
        { id: "D", text: "Ask Copilot to be more careful", rationale: "A vague instruction adds no concrete guidance about the expected format." },
      ],
      answer: "C",
      explanation:
        "A zero-shot prompt describes the task with no examples; a few-shot prompt adds worked examples. Examples are one of the most reliable ways to pin down a precise output format.",
      reference: PROMPT_ENGINEERING,
    },

    /* ── d5: Improve developer productivity with GitHub Copilot (10 to 15%) ──── */
    {
      id: "gh300-d5-edge-case-tests",
      domain: "d5",
      objective: "Support testing and security",
      difficulty: "intermediate",
      question:
        "A developer wants Copilot Chat in VS Code to write unit tests for a CalculateDiscount method, cover negative and zero values, and fix obvious failures before handing back. Which approach best fits the Microsoft Learn guidance?",
      options: [
        { id: "A", text: "Use Ask mode and paste the generated tests into the project by hand without running them", rationale: "Ask mode does not edit files or run tests, and skipping the test run leaves failures undetected." },
        { id: "B", text: "Use Agent mode with a prompt naming the method, the edge cases and asking it to run the tests after writing them", rationale: "Correct. The module recommends naming the target and cases, and notes that asking the agent to run the tests lets it catch and fix obvious failures." },
        { id: "C", text: "Type /setupTests and accept whatever it produces", rationale: "/setupTests helps configure a test framework in a project; it does not target specific edge cases for a method." },
        { id: "D", text: "Rely on ghost text alone, since generated tests always cover every scenario", rationale: "Learn warns that generated test cases might not cover every scenario, so they still need review." },
      ],
      answer: "B",
      explanation:
        "Specific prompts that name the framework, the target and the conditions produce more useful tests. Even then, review the diff, run the tests and check coverage yourself before keeping them.",
      reference: UNIT_TESTS,
    },
    {
      id: "gh300-d5-test-conventions-instructions",
      domain: "d5",
      objective: "Enhance productivity and code quality",
      difficulty: "advanced",
      question:
        "A team wants every developer's Copilot to follow the same test conventions (framework, naming, Arrange-Act-Assert) whenever it works on test files, without repeating them in each prompt. What should they do?",
      options: [
        { id: "A", text: "Ask each developer to paste the conventions into their first chat message every day", rationale: "This works for one conversation but is repetitive and inconsistent across the team." },
        { id: "B", text: "Add the conventions to a content exclusion rule", rationale: "Content exclusions stop Copilot from using files as context; they do not provide instructions." },
        { id: "C", text: "Put the conventions in each developer's local editor settings", rationale: "Local settings are not shared through source control, so the team would drift apart." },
        { id: "D", text: "Create a *.instructions.md file with applyTo: tests/** and commit it to the repository", rationale: "Correct. Learn recommends storing test preferences in an instructions file scoped to test files with applyTo and committing it so the whole team shares it." },
      ],
      answer: "D",
      explanation:
        "Custom instructions turn team conventions into persistent context. Repository-wide guidance goes in .github/copilot-instructions.md, while path-specific files under .github/instructions use applyTo globs to target parts of the codebase.",
      reference: UNIT_TESTS,
    },

    /* ── d6: Configure privacy, content exclusions, and safeguards (10 to 15%) ─ */
    {
      id: "gh300-d6-exclusion-delay",
      domain: "d6",
      objective: "Apply safeguards and troubleshoot",
      difficulty: "intermediate",
      question:
        "An organization owner adds a content exclusion for \"**/.env\". A developer with VS Code already open still gets suggestions that seem to use values from a .env file. What is the best next step?",
      options: [
        { id: "A", text: "Run Developer: Reload Window in VS Code, because exclusion changes can take up to 30 minutes to reach IDEs that have already loaded settings", rationale: "Correct. GitHub notes the delay of up to 30 minutes and says reloading the VS Code window applies the change sooner." },
        { id: "B", text: "Ask the developer to upgrade to Copilot Pro so that exclusions apply", rationale: "Content exclusion is a Copilot Business and Enterprise feature configured by the organization; the developer's own plan is not the issue." },
        { id: "C", text: "Move the rule to the repository level, because organization rules do not apply to .env files", rationale: "Organization-level rules can target .env files with a pattern like \"**/.env\", including files outside Git repositories." },
        { id: "D", text: "Delete the .env file, because exclusions never work in VS Code", rationale: "VS Code is a supported IDE for content exclusion; deleting files is unnecessary." },
      ],
      answer: "A",
      explanation:
        "Content exclusion stops excluded files from being used for inline suggestions and chat context. Remember it is not a replacement for operating system permissions or other access controls, and agents may not detect indirect file access.",
      reference: { label: "GitHub Docs: Excluding content from GitHub Copilot", url: "https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot" },
    },
    {
      id: "gh300-d6-public-code-filter",
      domain: "d6",
      objective: "Manage privacy settings and exclusions",
      difficulty: "foundation",
      question:
        "A legal team wants to minimise the chance that developers accept suggestions that closely match public code on GitHub. Which safeguard addresses this directly?",
      options: [
        { id: "A", text: "Configure content exclusion for the repository's source folders", rationale: "Content exclusion controls what Copilot may read as context; it does not filter suggestions that match public code." },
        { id: "B", text: "Enable audit log streaming to a SIEM", rationale: "Audit logs record plan, policy and seat events; they do not filter suggestions." },
        { id: "C", text: "Set the suggestions matching public code policy to block matches", rationale: "Correct. Depending on policy, suggestions that match public code are either blocked or shown with information about the matching code and its licence." },
        { id: "D", text: "Turn on Copilot code review for all pull requests", rationale: "Code review comments on changes; it is not a filter for public code matches in suggestions." },
      ],
      answer: "C",
      explanation:
        "Copilot compares suggestions and about 150 characters of surrounding code with an index of public GitHub code. Admins can block matching suggestions, or allow them and use code referencing to see the source repositories and licences.",
      reference: CODE_REFERENCING,
    },
  ],
};
