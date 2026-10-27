/**
 * Content registry — exam guides and free practice-question sets.
 *
 * To add content for a certification:
 *   1. Make sure the certification has verified `exam` data in src/config/certifications.ts
 *      (a guide or question set is rejected at build time without it).
 *   2. Create src/content/guides/<slug>.ts and/or src/content/practice-questions/<slug>.ts.
 *   3. Register the export below.
 * Pages, sitemap entries, internal links and structured data follow automatically.
 */
import type { ExamGuide, PracticeQuestionSet } from "@/config/types";
import { ai200Guide } from "./guides/ai-200";
import { ai200Questions } from "./practice-questions/ai-200";
import { dp600Guide } from "./guides/dp-600";
import { dp600Questions } from "./practice-questions/dp-600";
import { ab620Guide } from "./guides/ab-620";
import { ab620Questions } from "./practice-questions/ab-620";
import { awsMlaC02Guide } from "./guides/aws-mla-c02";
import { awsMlaC02Questions } from "./practice-questions/aws-mla-c02";
import { cfeGuide } from "./guides/cfe";
import { cfeQuestions } from "./practice-questions/cfe";
import { giacGaipsGuide } from "./guides/giac-gaips";
import { giacGaipsQuestions } from "./practice-questions/giac-gaips";
import { ccna200301Guide } from "./guides/ccna-200-301";
import { ccna200301Questions } from "./practice-questions/ccna-200-301";
import { sc900Guide } from "./guides/sc-900";
import { sc900Questions } from "./practice-questions/sc-900";
import { sc500Guide } from "./guides/sc-500";
import { sc500Questions } from "./practice-questions/sc-500";
import { capmGuide } from "./guides/capm";
import { capmQuestions } from "./practice-questions/capm";
import { istqbCtalTaGuide } from "./guides/istqb-ctal-ta";
import { istqbCtalTaQuestions } from "./practice-questions/istqb-ctal-ta";
import { istqbCtGenaiGuide } from "./guides/istqb-ct-genai";
import { istqbCtGenaiQuestions } from "./practice-questions/istqb-ct-genai";
import { isacaAaismGuide } from "./guides/isaca-aaism";
import { isacaAaismQuestions } from "./practice-questions/isaca-aaism";
import { iappAigpGuide } from "./guides/iapp-aigp";
import { iappAigpQuestions } from "./practice-questions/iapp-aigp";
import { iappCipmGuide } from "./guides/iapp-cipm";
import { iappCipmQuestions } from "./practice-questions/iapp-cipm";
import { comptiaSecurityPlusSy0701Guide } from "./guides/comptia-security-plus-sy0-701";
import { comptiaSecurityPlusSy0701Questions } from "./practice-questions/comptia-security-plus-sy0-701";
import { az900Guide } from "./guides/az-900";
import { az900Questions } from "./practice-questions/az-900";
import { sc300Guide } from "./guides/sc-300";
import { sc300Questions } from "./practice-questions/sc-300";
import { ab100Guide } from "./guides/ab-100";
import { ab100Questions } from "./practice-questions/ab-100";
import { googleCloudAgenticArchitectGuide } from "./guides/google-cloud-agentic-architect";
import { googleCloudAgenticArchitectQuestions } from "./practice-questions/google-cloud-agentic-architect";
import { ai103Guide } from "./guides/ai-103";
import { irebCpreGuide } from "./guides/ireb-cpre-foundation-level";
import { ccspGuide } from "./guides/isc2-ccsp";
import { md102Guide } from "./guides/md-102";
import { pl900Guide } from "./guides/pl-900";
import { sc200Guide } from "./guides/sc-200";
import { ai103Questions } from "./practice-questions/ai-103";
import { irebCpreQuestions } from "./practice-questions/ireb-cpre-foundation-level";
import { ccspQuestions } from "./practice-questions/isc2-ccsp";
import { md102Questions } from "./practice-questions/md-102";
import { pl900Questions } from "./practice-questions/pl-900";
import { sc200Questions } from "./practice-questions/sc-200";
import { ipmaLevelDGuide } from "./guides/ipma-level-d";
import { ipmaLevelDQuestions } from "./practice-questions/ipma-level-d";
import { awsAibC01Guide } from "./guides/aws-aib-c01";
import { awsAibC01Questions } from "./practice-questions/aws-aib-c01";
import { ciaPart1Guide } from "./guides/cia-part-1";
import { ciaPart1Questions } from "./practice-questions/cia-part-1";
import { ciaPart2Guide } from "./guides/cia-part-2";
import { ciaPart2Questions } from "./practice-questions/cia-part-2";
import { ciaPart3Guide } from "./guides/cia-part-3";
import { ciaPart3Questions } from "./practice-questions/cia-part-3";
import { iappCippEGuide } from "./guides/iapp-cipp-e";
import { iappCippEQuestions } from "./practice-questions/iapp-cipp-e";
import { ai901Guide } from "./guides/ai-901";
import { ai901Questions } from "./practice-questions/ai-901";
import { az104Guide } from "./guides/az-104";
import { az104Questions } from "./practice-questions/az-104";
import { nvidiaNcaGenlGuide } from "./guides/nvidia-nca-genl";
import { nvidiaNcaGenlQuestions } from "./practice-questions/nvidia-nca-genl";

export const guides: ExamGuide[] = [
  ai200Guide,
  dp600Guide,
  ab620Guide,
  awsMlaC02Guide,
  cfeGuide,
  giacGaipsGuide,
  ccna200301Guide,
  sc900Guide,
  sc500Guide,
  capmGuide,
  istqbCtalTaGuide,
  istqbCtGenaiGuide,
  isacaAaismGuide,
  iappAigpGuide,
  iappCipmGuide,
  comptiaSecurityPlusSy0701Guide,
  az900Guide,
  sc300Guide,
  ab100Guide,
  googleCloudAgenticArchitectGuide,
  ccspGuide,
  sc200Guide,
  irebCpreGuide,
  pl900Guide,
  md102Guide,
  ai103Guide,
  ipmaLevelDGuide,
  awsAibC01Guide,
  ciaPart1Guide,
  ciaPart2Guide,
  ciaPart3Guide,
  iappCippEGuide,
  ai901Guide,
  az104Guide,
  nvidiaNcaGenlGuide,
];

export const questionSets: PracticeQuestionSet[] = [
  ai200Questions,
  dp600Questions,
  ab620Questions,
  awsMlaC02Questions,
  cfeQuestions,
  giacGaipsQuestions,
  ccna200301Questions,
  sc900Questions,
  sc500Questions,
  capmQuestions,
  istqbCtalTaQuestions,
  istqbCtGenaiQuestions,
  isacaAaismQuestions,
  iappAigpQuestions,
  iappCipmQuestions,
  comptiaSecurityPlusSy0701Questions,
  az900Questions,
  sc300Questions,
  ab100Questions,
  googleCloudAgenticArchitectQuestions,
  ccspQuestions,
  sc200Questions,
  irebCpreQuestions,
  pl900Questions,
  md102Questions,
  ai103Questions,
  ipmaLevelDQuestions,
  awsAibC01Questions,
  ciaPart1Questions,
  ciaPart2Questions,
  ciaPart3Questions,
  iappCippEQuestions,
  ai901Questions,
  az104Questions,
  nvidiaNcaGenlQuestions,
];
