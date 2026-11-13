/**
 * Exam change alerts ("Notify me about changes to this exam").
 *
 * Requirements (owner decision, 13 Nov 2026): explicit consent, double opt-in,
 * purpose named, unsubscribe link in every email, provider with a data
 * processing agreement and EU hosting. Provider: Brevo (free plan; the DPA is
 * part of Brevo's General Conditions of Use).
 *
 * One Brevo form + list per certification, so the consent names exactly one exam.
 * Brevo account set-up (13 Nov 2026): list #3 "Exam Change Alerts (Double Opt-in)"
 * for NCA-AIIO, form "Exam change alert EN" with double opt-in, bilingual DOI email
 * and bilingual form messages.
 *
 * 13 Nov 2026 (afternoon): forms and lists duplicated for 12 more certifications
 * ("Exam change alert <exam>" / "Exam Change Alerts <exam> (Double Opt-in)").
 *
 * Live since 13 Nov 2026: sender hello@certramplearning.com, domain authenticated in Brevo
 * (DKIM via IONOS Domain Connect), privacy policy sections added.
 */
export const alertsConfig: {
  provider: null | "brevo";
  live: boolean;
  /** Brevo form POST URL per certification slug. */
  forms: Record<string, string>;
} = {
  provider: "brevo",
  live: true,
  forms: {
    "nvidia-nca-aiio":
      "https://11007e05.sibforms.com/serve/MUIFAIq8yEEC59ks-ZDMBm3OE3GtOVp466kT-m0pTDqkU783iC9HXEdqkrMWZVHLbve6nyghrAh7KXWU_534mcR38tlSBjnlq5tNo6Owm8lejc7OW4Ktx5efFkB8x-su3aYbFV1JrfM3OYRQVsUmCIYRxK4KcmkXdWoLy6vebRjX-3sZIanbmV9D5Op1-Mz1VP_L167iV2gBw9tbtw==",
    "sc-200":
      "https://11007e05.sibforms.com/serve/MUIFAOgq9mzDeZ3CrTv34DGUaBgMrcPvnv0sm9nOT4NJxRIt5tsH-KkECkQSV5e9J6D5KWHCSi2ce7Go9RTs6UCEdnXALpH3_wlxaUSXAGBYrxFaeh4yW7HIu_tDAmSNr3Q9yZmpiUA_Boj_Xtblm1Ong2BT6G_7QyHQJBK7iwc84XSAYPJbWbxp_wuVDPQ8m0pq0xK_DC5zF8sqvA==",
    "md-102":
      "https://11007e05.sibforms.com/serve/MUIFAGqooO80tt8U_JUYnKkWd6zLfzDe1lNOaGL5WNVvQhrlppwBu7uCjGuARgPsF5EiPUwSz5GurWTN1JTyhXQ5ZJ9TkKpJER6H501HtFUW7rWR73hMRPAI31sbjbaxr8bDXa_8rDifFGf3-R1BVO6DOwajZQhLNkcC7gADy27LUtunl85u8C5hWKJlxfzBocutjAgJD-pb5_LJeQ==",
    "istqb-ct-genai":
      "https://11007e05.sibforms.com/serve/MUIFAJIXiNbXWCeEfjGc7CqQaz-Bpseo2iZDDdmhaHyS0j5U0SZ5T3dWcUNVSKDkZZCx1-5aptFISiL9XvI-CHMh3c4jI000bGhAm5mQ7wa5EsUai9XiFcdHTGPRXcthQi1mYYttQX1H0poHYJuD-ziI9uDp-1Hoj4SFWNrUL-Y2GJojNruVIM0jevH1bFaKtvlbd9piWOpnXjrPuQ==",
    "cobit-2019-foundation":
      "https://11007e05.sibforms.com/serve/MUIFAJCi08tU3IVvs7Kz4dlbcvNxtXApaWqTkkfWRpnuyZ2bVFbjnHCXBHy7m4oGdf1-DiCOX1kE8bJMSFEWwCQrTXWWjuPPY_xy2bhInG6k9hWh6Yc5bhKs5bO34MsAnMWWlAbK-zJ--UpfODiwujb5EVN-DwUsI-lkXGw_ROCogcQG7HZvT4JhfcWX7yQpH50eCYtZPMgb1xsV5g==",
    "comptia-cloud-plus-cv0-004":
      "https://11007e05.sibforms.com/serve/MUIFAKx5f4cczXD8PpCSw8gp_Y6WWXzXTEumnuTtB7gNDbD7p34--TT41eX8ImE_d0Ul2-CjdOhk15FpzwaBMzy_9ajIEbww2fHCn4V1yYMaM11gJulxjxV-AvE89MDPOUX1qBksILwddxRAbSZ2WG9fqRwX-WVYPgjufNZXcN762zrx7sG4UM80ZZDtevR8ZMPyqzlxVDL64p4Mfw==",
    "comptia-security-plus-sy0-701":
      "https://11007e05.sibforms.com/serve/MUIFAEn1XdYhltFfweCJgMQOCPwVfRa0sX0dCwSA-8SFE-SyGgjjXATzEeuM1QeRGTIYUx0iU3yzHo93ARbKYQoyifN4xSjL5z54NdQ4jl2QXg9ZZN8v-Mir7RUrMe3CZDSAF9_mxS_d4b9KMrWVpGGfgapk5_fIlZdVCcd4Yn5n2A8ey69ysm4Txl-YgqRO5sIG7MOiCXnxXWCPag==",
    "comptia-security-plus-sy0-801":
      "https://11007e05.sibforms.com/serve/MUIFACWwKQcgLCBMKw87Tsyw0yT2iQE_lySYtNS2ReI_VKb6wGyym1UHleREQdWh2BSUfcXlNQrerOKDKGNN-dvSTWmSh-4sNSGUwFtj3YJWPuYd0sYV8euYrqTihz7171wv6wFCl5nzQHAnbyMre0CPo44vGvGw51UmafXeYWSMOZV5wT1Hve1tWzAb18qNvMUbc__T5R248PPoow==",
    "ireb-cpre-foundation-level":
      "https://11007e05.sibforms.com/serve/MUIFAASSTPEg1cjCo6p4YoYfz9s0Zbw5V3qudsKT0Ad98WeiY6OoQFlq5Ssws8OXh8KGc45IWi5dVnkEDt4IFDhzHDcXibIb2ydG4d8fWFyqFo0yUHkScf0dl7rwaSt8qtaVKy-h9ZcvF1tDND_HCWsuspEtqltA9VHNQzPKb9cfVEU8v-Re7TUycN0ifLP8I9V2Pm6KyvqKXMCjTQ==",
    "aws-aib-c01":
      "https://11007e05.sibforms.com/serve/MUIFALFFS-3Ci63u_8hJQmTIicFjpNNvJr8F7R16CyPNMdNuKIfqhH62FIqIxs0QCtem1welbOmoxUZ0NwGOnJxHRieJpHpJA7pJOUurxT5Q3k-nIjn_WBA5UshaY_zCd9R9B3HR6YkIY99s-6uLe9gPeh6-19qOAUNPArGx9t0OQIptvesz0isZ18St_9hskSbonB4zDF8h_A1R9g==",
    "ab-400":
      "https://11007e05.sibforms.com/serve/MUIFAMydMoq3jCpQs7XEAK0Nm2yYamAhSlJhK1wfEDltqJ7sNEC9tFfR-Qf1yqWdqEwR1MFocJoZ6t5DXakJVH6xWIx_WV7DEWmwBh8a5Ed-xNqRP7k2jGW2eC_NUWXIPsdfxFe1HHtPZPIs25ozO5vXz6kDUA-I0RsDMcTkPvGlmn7B7Mg-iNYbK2XCGlb98cmjfEU7KS33vS4MEw==",
    "github-copilot-gh-300":
      "https://11007e05.sibforms.com/serve/MUIFAKHAbKr4m5KaSgfOIsQSqZs652aDAxnKf0qDoQsegPFFK-fB8-K1lAD3kdlIGlKc7uwYBtHtrG3RrfpfAdQAVALNAg8C65MMvJDgGLsaMwGEZvq1e0Khbaar12AO29wfdMygPUNyVrBcxKJ5czQZRCQBcpqm9LWH00d6tRkwgKAyC1EQSJvH0lHfGAVhFCa2UAyExpZkXy6h7Q==",
    "pmp":
      "https://11007e05.sibforms.com/serve/MUIFAMsbVrorpiST5BDq3Ct_k-9QIm0P7wB29jPThrXWQfpzknCnTDrp0_dkcBs-atQTE-IrzlxKw2-bINoFHNuVEnmJWN_ai6JvO61AO4dwjuhrJIIlFBtn-vDTfX_PLNlH5-AYGslps4v0mp4tcLOKf7jChCmftFlKOToFhTdEH_vrxOVzenSLhawf2o7lqy5LbSsgD6hzsQkmXA==",
  },
};

/** Form URL for a certification when alerts are live, else null. */
export function alertFormFor(slug: string): string | null {
  if (!alertsConfig.provider || !alertsConfig.live) return null;
  const url = alertsConfig.forms[slug];
  return url && /^https:\/\//.test(url) ? url : null;
}
