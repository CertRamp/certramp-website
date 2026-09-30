/**
 * The CertRamp methodology — "Six Tests That Grow With You".
 * Used on the home page, How It Works page and every certification page.
 */
export interface MethodologyStep {
  number: number;
  name: string;
  goal: string;
  description: string;
  /** Relative difficulty 1–6, drives the ramp visual. */
  level: number;
}

export const methodology: MethodologyStep[] = [
  {
    number: 1,
    name: "Diagnostic",
    goal: "Find Your Starting Point",
    description:
      "An honest baseline across the syllabus. See which areas you already know and which need work before you invest study time.",
    level: 1,
  },
  {
    number: 2,
    name: "Foundation",
    goal: "Build the Foundation",
    description:
      "Core concepts and terminology, tested directly. Close the basic gaps so harder questions have something to build on.",
    level: 2,
  },
  {
    number: 3,
    name: "Development",
    goal: "Strengthen Your Knowledge",
    description:
      "Applied, scenario-based questions that move from recalling facts to using them in context.",
    level: 3,
  },
  {
    number: 4,
    name: "Exam Level",
    goal: "Reach Real Exam Level",
    description:
      "Questions written to match the style and difficulty of the real exam. The clearest signal of whether you are ready.",
    level: 4,
  },
  {
    number: 5,
    name: "Advanced",
    goal: "Challenge Your Weak Areas",
    description:
      "Harder questions on nuanced, easily confused topics. Expose what is still fragile while there is time to fix it.",
    level: 5,
  },
  {
    number: 6,
    name: "CertRamp Challenge",
    goal: "Go Beyond the Exam",
    description:
      "Deliberately harder than the real exam. If you are comfortable here, exam day should feel manageable.",
    level: 6,
  },
];

/** The core loop, used as a compact brand statement. */
export const coreLoop = ["Practice", "Measure", "Improve", "Repeat"] as const;
