/**
 * German-language content registry. Each entry publishes
 *   /de/leitfaden/<slug>/      (exam guide)
 *   /de/uebungsfragen/<slug>/  (free practice questions)
 * and is listed on the /de/ hub. Register new files below.
 */
import type { DeContent } from "@/config/types";
import { ab620De } from "./ab-620";
import { ai103De } from "./ai-103";
import { ai200De } from "./ai-200";
import { ai901De } from "./ai-901";
import { az104De } from "./az-104";
import { az900De } from "./az-900";
import { ccna200301De } from "./ccna-200-301";
import { comptiaSecurityPlusSy0701De } from "./comptia-security-plus-sy0-701";
import { comptiaAPlusCore1De } from "./comptia-a-plus-core-1-220-1201";
import { comptiaAPlusCore2De } from "./comptia-a-plus-core-2-220-1202";
import { comptiaNetworkPlusDe } from "./comptia-network-plus-n10-009";
import { iappAigpDe } from "./iapp-aigp";
import { ipmaLevelDDe } from "./ipma-level-d";
import { irebCpreDe } from "./ireb-cpre-foundation-level";
import { awsClfC02De } from "./aws-clf-c02";
import { isc2CcDe } from "./isc2-cc";
import { iso27001LeadImplementerDe } from "./iso-27001-lead-implementer";
import { istqbCtfl4De } from "./istqb-ctfl-4";
import { prince27FoundationDe } from "./prince2-7-foundation";
import { comptiaSecAiPlusDe } from "./comptia-secai-plus-cy0-001";
import { istqbCtAiDe } from "./istqb-ct-ai";
import { ab730De } from "./ab-730";
import { ab900De } from "./ab-900";
import { awsAifC01De } from "./aws-aif-c01";
import { sc100De } from "./sc-100";
import { sc200De } from "./sc-200";
import { sc300De } from "./sc-300";
import { sc500De } from "./sc-500";
import { sc900De } from "./sc-900";

export const deContents: DeContent[] = [
  ipmaLevelDDe,
  ab620De,
  ai103De,
  ai200De,
  ai901De,
  az104De,
  az900De,
  ccna200301De,
  comptiaSecurityPlusSy0701De,
  iappAigpDe,
  irebCpreDe,
  istqbCtfl4De,
  awsClfC02De,
  comptiaAPlusCore1De,
  comptiaAPlusCore2De,
  isc2CcDe,
  iso27001LeadImplementerDe,
  comptiaNetworkPlusDe,
  prince27FoundationDe,
  awsAifC01De,
  sc100De,
  ab900De,
  ab730De,
  comptiaSecAiPlusDe,
  istqbCtAiDe,
  sc200De,
  sc300De,
  sc500De,
  sc900De,
];
