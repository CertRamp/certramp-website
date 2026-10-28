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
import { iappAigpDe } from "./iapp-aigp";
import { ipmaLevelDDe } from "./ipma-level-d";
import { irebCpreDe } from "./ireb-cpre-foundation-level";
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
  sc200De,
  sc300De,
  sc500De,
  sc900De,
];
