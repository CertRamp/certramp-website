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
 * 13 Nov 2026 (afternoon): forms and lists duplicated for every other certification
 * except CCAT and the retired SAP-C02 ("Exam change alert <exam>" /
 * "Exam Change Alerts <exam> (Double Opt-in)").
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
    "ab-100":
      "https://11007e05.sibforms.com/serve/MUIFAClUq8sF8lGoUhhQP1SDPP8sYxgBr88hvhIeum401X3Himq0DVoRwMauIbbpA0qEF6hAiSbjtYABY42uZmiWMvaWzWj2bGsIifBNF920RI2YGcIMcJe_iw8hiMFSr17QtFsJHXXGGWVZ5-pClPJy04LdQvY1mV0TqopsH-ZuudJmsV3bTQZZLPKH8tEnRd-zqU7bnPvSMewI2w==",
    "ab-400":
      "https://11007e05.sibforms.com/serve/MUIFAMydMoq3jCpQs7XEAK0Nm2yYamAhSlJhK1wfEDltqJ7sNEC9tFfR-Qf1yqWdqEwR1MFocJoZ6t5DXakJVH6xWIx_WV7DEWmwBh8a5Ed-xNqRP7k2jGW2eC_NUWXIPsdfxFe1HHtPZPIs25ozO5vXz6kDUA-I0RsDMcTkPvGlmn7B7Mg-iNYbK2XCGlb98cmjfEU7KS33vS4MEw==",
    "ab-620":
      "https://11007e05.sibforms.com/serve/MUIFALNMl_JbxcvkDn6869_gFHtqogcIJKkQybTCMOxsQp-GQho3ujpXRoVvoVA1SnZgdnyZGnEgfxbT5aA0h38AiWAVX4xMinuEXODcWnVSQASthK1rJYElZ60Gu4MTLoX3CbOftnkehz5FpIGI3A_GSFf3b4yWmVvAYE5MCW6XUyI2LRfdtXqD72IchVueG0dQbMQsOAmsanlhwg==",
    "ab-650":
      "https://11007e05.sibforms.com/serve/MUIFALjNgnzOpOyVV-p9qTGeyh4zQEInmk9oiGR9yC0he7wVRD648MN4_oTxgUUIM5if7eJzcdRts2owABHsQVCRjrMysKfyaE03KQGoTtxwEJGl2lSlzjfmGI6Q7pj9HECAicRiD_Tsd_gwicRFC205ncxsd-f-2ujvGNn1tIUXyyKgsqkTJ9LifzuWXL0xp7VoqZp-4Z58KAD-fA==",
    "ab-730":
      "https://11007e05.sibforms.com/serve/MUIFADOUaV-Qfj8Qf2t_Lyp_tvUa2Lxz-sgxrjjEOOzvZ3r3RGHQcGq-WjpulnpsDIFNeL-mKq-t36chqyFbTzodRxWmbXrFJM7zALGDnMHn7fWPkS7jH2GJvOZAY-0MezdRdP5lFwBaXVWx66m1WWZ2nC7uVhn-5Loe7LzJKqExZmVPuxwb72oqJUWfYT8M_yjQOYNnqI4ydSUFFA==",
    "ab-731":
      "https://11007e05.sibforms.com/serve/MUIFAJmx5y2lo4y64BIusx-xeHtLMjk4bZTC3WRw5tpQRwsiRAYulWDbFg9irA50W-sD_fb58ZIamGtDs8i82ph0353sOkYP8UG535Lr0klGLdj9rhx0MJDKVlLtjjJVDwTWR71wYMAdoViv23UoDBoN3J8IsTKeauO49r_HHoxkenOcQ4mOM_SWywyEu3H6Ae2fTaCQ442T-awrdw==",
    "ab-900":
      "https://11007e05.sibforms.com/serve/MUIFAG1RIqbnHSaUXv7GyHZ3bFrVQ_vUEOS_PZa9KtcW8b3-4EzMFn_mFjttpCUgfYFwfEgcxoMbT5uHpYst3D-xcT-e-i048BOpG5bsCQ5NeErTgEUvlFT8JAQt55bMOWDmefWoKKAAqXJv-e3Mwk_9WCmjn7F17vd2l7QTlcYE6ztLZQErF1MssCB7toEmiJkA42G5yq1sSZxQ4g==",
    "agile-project-management-foundation-v2":
      "https://11007e05.sibforms.com/serve/MUIFAB__qryXAJRYaxLNnAsDwOhR3V2gZTX-6-vwA4FCu1LQo2uOUJszCVCT8n7ZIiw8D-gNIRV8IE8mb01kzpQvHFD_1GBD1D0aSJq7OQ6wlQvZa90ZJ8DQRZ0OJut_U0BVgeEKsJE8vHtmVhwdbgWIbJplXik-nt6Gw1_5SvnhI_w35d8BvTouP1eZejz-okjXEDiG6haVnm7h9g==",
    "ai-103":
      "https://11007e05.sibforms.com/serve/MUIFAHcscUT1WwuWOSiLE9KiSWvdxhyJ5St1Nzywa5Wzv8_FFuPnvHrPDXE9SXZz1iCEliDSUOBTKZuCQR07WW9byQ-r9P48z7RpmJZcrrvEEtYG2Dpt0HSCml5LcB08ATVXPaZEVrdQpEqFxxYS9JmF8Gm9N3vDYEFYI3JoN6x32Q_WhfovjFFsUC6z5croggv5HMuVL9wWCsYMIQ==",
    "ai-200":
      "https://11007e05.sibforms.com/serve/MUIFAJ-_i63GFvwBoa45hjLqQYcCUqItFzMLIhZSEzorpY3_Ls6VY6iSuaYwM9EMLVEPZ-aig9PG4CsQb76IuOsIGK5xvq8700kYkShDfCuv7pW7J4BdcuvGvcGVkoqicXEyGobGbBbOXatSI6MQfDVWZ7JNdsQ5iSzK9mU0994iQr6FAR5KmO-CUdD_RdsHk2gBCr3f6N7h7Jd0gA==",
    "ai-300":
      "https://11007e05.sibforms.com/serve/MUIFAE8zoIv4jeM4YLkXZn-O1Kg4PFLzMTF4VhK2EBnMFkAHbPPKKC3owkYU4EUn8Qa6YIgUf3bNSTqjLfg12fOdur64nZDw4ub4XjRa3DmBZkvPEkWA51qVwuu2uDG5xDHtLHz4bdFkMkv2aBtqKnSNVsl2o_UE9D1FGN6lXkRBY3wthrAs1UZBVzxuJYVFHrMzQ3UtsZg-TBbfDg==",
    "ai-901":
      "https://11007e05.sibforms.com/serve/MUIFAAOu6VyIYfoeDupAY9JuqudegTQEIfgzVh5kES7RGpLIfLMAJXoFo3bgBQBOHTDSLRJ30j8YwmERpbEWvbCB4GKD9l_D94NlPzAMnnt8d2J344Og5Tqm9XcGpU_xzlSXp7mkdxv_kbWa2Yx5CINt_GIYipLSy9kSvpLZ0or6s9tsyuSagTNMEVNXxhse6ixRDdO5z1SBrTQH7w==",
    "ai-governance-v5":
      "https://11007e05.sibforms.com/serve/MUIFAL6SikKEOT3qHkOAKpVjXthTM4lBC3AWIvOL_zVdjCborWTBkBu43eJXio_cNnhbi-RrYR4aeZuc0y2nf1Bel2KncHae-ZzrB9SNo3sKgwoG6EM0x3k_TKnQ_-XCPM41oOSHeUjS8jCadU64Zz_BPC4efoUYzZvDgGvOmdXyko9D24LDPfou8C5ZKGgh63LIDvb75gxL9RMSvA==",
    "aws-aib-c01":
      "https://11007e05.sibforms.com/serve/MUIFALFFS-3Ci63u_8hJQmTIicFjpNNvJr8F7R16CyPNMdNuKIfqhH62FIqIxs0QCtem1welbOmoxUZ0NwGOnJxHRieJpHpJA7pJOUurxT5Q3k-nIjn_WBA5UshaY_zCd9R9B3HR6YkIY99s-6uLe9gPeh6-19qOAUNPArGx9t0OQIptvesz0isZ18St_9hskSbonB4zDF8h_A1R9g==",
    "aws-aif-c01":
      "https://11007e05.sibforms.com/serve/MUIFAJS6vNeZKp1XBbFWEel2dyeWT_zhaN7IB2gNWeTrDSA_ksjYY0EodXnq7bos0WQpLXSfgPml1AsEbzqe-20n19MJcyxu0nLpCwJi4bzqhg2-l0mXllX_JDcnyDjXzDIAoR9_o_nnLczkVjs3xVazUVbS7p79wUqI-2jadNydRyFkKTcSdDDTAIiIH_YbcF8UzP4-OSNsKTFaDg==",
    "aws-aip-c01":
      "https://11007e05.sibforms.com/serve/MUIFALBZLfMGqGh2b0qvVy11U74sxW5Ly1ZiETRAc3NHIh_pKZEIdErVBps2tpDG-SVojopJnj2fS5cVWgFOarHFAPzlpTeVMGfsrJmwX_jcbD4JxRiQXL5MVbpXbq3cPWGIrzBW6xe3Ju7Ld2kMW9CGvkA1wXgd-kdYPBLBz7IdQTT-GT-Bizz6fSSUpE40pSAMAbNaFfox8Kq1Yg==",
    "aws-ans-c01":
      "https://11007e05.sibforms.com/serve/MUIFALfliZvhSj6QVIQ8E9qmEaB4IP0bZqygCBRytWtR3V5Ao3YCgtQ54WJf0KxW50Hc0mgXaOiDZ0xqatb4Ex3JU6ZLh9QnC7hT-PpyjV67S9E7Xj29NG-rFNs66Z3QWrzliKTovQh4AvrhnsxCyBeA5aEy6HWrm9dveFHmEFI3MD3yNvhQSbP-ppUdE-TXf_HhPqO4O8PgLrwsXQ==",
    "aws-clf-c02":
      "https://11007e05.sibforms.com/serve/MUIFAGGZ0Jik98zFBNIPzFX5c76qdfBwqSGPTpp_zq0HTGC3IitQnVHEzBTS8iWqgNLCY9yeCH4WpSQu8eoV6SH-f2B5ar64rUnYbIQET1jo-2x62Ycqy7SrdimeEwSk7gw4dPKWl1Aciv2b7XENHs3_9vJDnRzfx6lEnCySB4PfY_15I9iXOEFcCv6YQDiQVukQEw4xCdFaQ-t-Cw==",
    "aws-dea-c01":
      "https://11007e05.sibforms.com/serve/MUIFAPn2x1AsmS8fd13b0x8QeG8XhCXMo4SNJLG3UGpJ74fcvMBayLt5tsL1xkTULKpzUv75E0D8OydYqtnCmHYta9YjjwsV4WH1o4EZV3DCqZIucDSwIU_T9rO9mjG9frrBt3YowZKNLnrXh3y_2d3FqYK_j57A00OSWYxpMAjW-8jQbZ2yshS1p5E9grGowy6Oss4KKIhOp2pfDQ==",
    "aws-dop-c02":
      "https://11007e05.sibforms.com/serve/MUIFAMceOpqqjc2Qa0-kui0uluAFsQFNSVZjxey0vH9eeBjSiGY2WzpC6hEO2FcjZOOxvgU9trjKf_k9xfHplgYUDuSon-6AyoCMiI6zS8r0tsNztGMXBtffpRxjZlsFQkBUusR2ext7LLuZUt347eWiYT6VNesvvL7GekPTAs2eGLm9-lqP3YQlpzEElWQeeN0_EbHstHBZwLH7kQ==",
    "aws-dva-c03":
      "https://11007e05.sibforms.com/serve/MUIFAL5B6BPOLQLr9RI1fhesUD6Gb7yXcgTxDkH6TdGplJAXNslGMhOy8zUQKKIaR7h54Yir9OZJvYwBuTZMocKmy83iX3-JvL-rzgRMp4WQIA4WuDIKaKdtwyCQOlaexZfrU0j0CK_3KHNQJUcugweStc56pe1Rq1QGPKyTGJFM6pT8Cho0UfdGzdX2aprIrfEjDB3mruV1ZVJaRA==",
    "aws-mla-c02":
      "https://11007e05.sibforms.com/serve/MUIFAI-Fz3Ix1E0O0EKH7w0pkkV1ObYObCYiV9oQdVtzAqbDfZjZq7r66TdwO16hu7Tg0MPRIOpz5XZ6Gnsp5LWVE3PM4A3y2nE1Mv2X5HBOfafEn_oD8piCeE-Yxit4ZAim19XmO88v11_MgKm3ExI19nY_CjePp1XmNramGL2I7ndTZ04vp6GVKaTp6KWmVK0IGD7dG2yGgcy9eA==",
    "aws-saa-c03":
      "https://11007e05.sibforms.com/serve/MUIFAOGEh9FSDktDg2Bov9NkzzXnHdSvuYFQjCpd6Rit30p-vYcSJ11eBDh3gUYH9uSCH6fheQ_OzmEKDAO0i-YoAJSbZTCC8nhRl1q8TaVkAuvbI3UtXMlkndBZ2OiAImM6zkZ9C_Q1PO3Ag_iUg2Y20pCn8o9PspSssVRw-pT9MJFTixHtrnrE7S4pawdNghU7C2k7Md3FNF-y1g==",
    "aws-sap-c03":
      "https://11007e05.sibforms.com/serve/MUIFADxIF3YEsz9wnO7Vw2BHvsbgwufG1XAx6mMs7YthxJ6_0V2f-CZsLsvhJR6a0w4OSXUWR3eEtBZ7X1lZPy-7AdRrvQyGHjPIqsoIJMAMeNnlvOC6cRIgBe2rrOYTpuY5pDqHQOU00mxa7oj9kfP2VnBvogXF1o4-QlSC_Zu36iCgQS9pMle8Gm8-cRTxccQwbh6nyuI25tfkkQ==",
    "aws-scs-c03":
      "https://11007e05.sibforms.com/serve/MUIFAL0gvie6oe8Sg1WyDsRupd82Z3DLRWkTSw0QD_rD5V4w-sRXh3sXUTeeszMCY1LNOyXt1nj_rz6A7tfLEm-z8jlmq_NFG9YPwh6qQa0ONBwU2ZQIK73MhGVRH43cm9XH2gsVGNdm7PjIYouVvDCkd7IOtInYKPVkJN01ad8ye81cGSRJ_p_oZKsHh5eCG3RXixtj9ZkySY3h-Q==",
    "aws-soa-c03":
      "https://11007e05.sibforms.com/serve/MUIFAKfkCqLiT6dsRqsSlr9EdGAv020ynSvvtml16xustQVGN7yaT_lUzdkziBGHfNnA2BZC8gJEl6JoASmim8EV-Hn92H-BMtjQSf3MTIaUArdY94vV9t8y0o8E9JXFD-ATjhBhD-CnKk1AoHveoaZg9Ni7u0TrdfQXKajXZlw4XDv0CzepNL7b_IEYnjX6BjY9-yb5Ry0HJQmcfA==",
    "az-104":
      "https://11007e05.sibforms.com/serve/MUIFAADL2v_pE4r0OwwKiFlY807JGBVuhsH0nDDeG5ekp1aznJBUl2YZ3hpm4BI56CZVw48atCo-R0Wla9ZALdFIu2vNVKvI1kA7pXn_k6BvYOt81UKBTh8tndj5U_qv-jUgxZ5mGKVOsOyTHd5izWXQ6r799fNo-Eyz-pcaBjdq1kPJGK_uE7d_51ls3nWjm2PZHlkvXML3OGddSQ==",
    "az-140":
      "https://11007e05.sibforms.com/serve/MUIFAMkNn9lXadLMXhebS-m9LvbSVbSYt40h_PQ7Kzb9F065nNgrYPozLk9H7H16Htnr-3rm6zjdjQoWhZNdyNy8HCy10G3L24hRrhRAKfCmfh5e7PPprR7idiRv2dAsU9Jzbfn7-F__e_fGDvbf0_9l8pr1PiSLKpR0Xk0wjialA44HHoNPvgRXco2h0mYkMEVyaKmgUnZXfxA1ew==",
    "az-305":
      "https://11007e05.sibforms.com/serve/MUIFALYk0htrf4IO7HYqeDMMmLwtlXLhWHJq9YVAHd-TlMbFsD518MIKDkXgZOPzzZ38racL0VDYm7q_csY5gghYYEnGQE3s1AbAFmDt4i-DbsY7zrl8_aw75TKnR9W0LRSWHR37fufeDANxpO5LKIkRWL0mFBQT7UkKMliqB8iGDKfu09rE2QBs8M4CXo59eCoFJyfG65ojSOjaew==",
    "az-700":
      "https://11007e05.sibforms.com/serve/MUIFAMUOvgUgPvvFOKQRQs00lfH9MYGWb4kAQrDh3L956j1ncnjU-n9mnR-q7X2NTPwdYEvW4kiYZk83ieKmvGIWpG-WP1pVQrvWWEv1KabgAtblMBaJfU4_H3_eGofbYTuTPtqhbs_RtPOacVDB5pOLGmpmnnCadQIbhuO_hPGe96w5aefTgASsyF7NPULlZlXeId--9n338th96w==",
    "az-802":
      "https://11007e05.sibforms.com/serve/MUIFAIMuhQw8Hi5qKxft1ukN3pZPMqMtA7WTDEJC0GWelMKiisfE87uvrsGRw5plBvEJ-Ps8Qtjz7lljZkhXOMHkShPkAWKxLaBOF4Q265FY4s9t8AvgsO42PZ73sv1YptaSA_tuhYoMaTvpF9mcqyZ8N1H_yGl2pCpUfaLrApLP4PngoVIXKn465r46wb6scOt8Bdu7uLrkVsIMRg==",
    "az-900":
      "https://11007e05.sibforms.com/serve/MUIFAEeJcY-7MkSSk8bcmRnteJgTwdn5oNseQhMph53wLf0w7TToLXVjs0KL3Ba1vMfwM19PkpJbrFvRnH535v12KO5TlfZUMZyXnd-Czj3YF-pae8VyBoFUB58X9lYtnfs2crfoeZ3l9yMZcbrlU6CbHAvowCdQmRhjLHIVgrMZA_JqBNIxpbpOu6G1Gnsvt-_ebpJaZD3AtS51EQ==",
    "capm":
      "https://11007e05.sibforms.com/serve/MUIFACv2Ky2O8picUOd3ZBW6tpSwhiKnErsJje_CMVGrDjJLuucyZ1UfwUb1MuALLcpgh55NXsUXRCV6g8I3W1LfVXBoG_9wA0Nvi11SiVBfX8pmCwyhDw6P8WAD7A5nGvj5nQ7Z8KFrw1WGn3rRuBkH_bhff_5MWDmWg3QOdBhFkm4pab87_QPj07WUBFgXlwAgOsHP_hhjVqqz_g==",
    "ccna-200-301":
      "https://11007e05.sibforms.com/serve/MUIFAC5DiTbgX59uHcdSkvJbdSIxMs53Xna13r96GYMx8SiiMUROqw5s85g_d6jsVG5MJBAxBOcr_lVlxWLqiZsSVx9kThgt7nMiD1bHEaqJVOA7OvMLlaGHHzRXq7uaJ_a76gjC7-_R0CmYReOLU4vyy_c0elC1drQwqwNEqNEYzwWcOO0tFMQRszVcOZBb6qy-rpo-aK2_VX5mcg==",
    "cfe":
      "https://11007e05.sibforms.com/serve/MUIFAENTE4DTlu3n-HYGXhpcSCD9bRwRPBNbOD-uguneuRcIIM_hmhRvQaRM4grPRrvTTBD8hx_JeZ8UAt0S-nWx8xWVeOkZDtBT-tp2-xOtDiRMue0pfsIepDcDc8pwFG1H73Yyvtm4TwrmYKirpIJU4TxZrpjmuEEMtXmWhJimxWP3ZMoDdaRmBmhlUst5kww8LyWm2NnohGICZA==",
    "cia-part-1":
      "https://11007e05.sibforms.com/serve/MUIFAIyTNPgDa2_5eKbyLzCYl2cIF6Ejr_hPk7DnvmpWwvs7dCj-DxXCEmGAwnW4-fq0glMwniwUMAHaGtSUjaQq4Th-VkucRXkJmYxxRnJhd43901ppjwtsQwj90wulTWckzm_G-YZyoYGUTWFz7VWcZGTSSU6QUtqPgWPULxZ3KEjkuzMEIfQTx-wYLIsfkSYpodOmJtGO1jyJWA==",
    "cia-part-2":
      "https://11007e05.sibforms.com/serve/MUIFAMFNnc53Novbvtt_uO1UOLGRdBfOOUYs18BJB2dcva9--Tq7WDxCREr8WX4zAMIeGIbWhbcE2NwC_yINVVFqrXqnaMIyCGYJ4Vh_YDcqX2DgqG7YwGZSpxKiGCa5-FJFTdYn7TVLCG-zyYL490XhLwhy3kt0HuixCPQS9nXRpMWEeJSqqikQN3BczDGrAqg_lNSOal22L9OBBw==",
    "cia-part-3":
      "https://11007e05.sibforms.com/serve/MUIFAM61DIHEJLKZ9MdDc157V4pZuiXQAGIrhdJdw5hXDC0jpVLt0r6wAHLkrNTPfrYkJNWLcVKg4BwT1Lwei2Rpw168kSTI6vBYpLiJyiQ9oVrVDVnFI9cRyn6YfUz7OyVRuSfvhXwjxsZoR9G6ur-RR8i_lUQtZ65Ic7YTSPqpb3VwX-j1wZJQ-fIU7N3mr5AKbfXx8IVM9Umjrw==",
    "cisa":
      "https://11007e05.sibforms.com/serve/MUIFAI17Mq1ekh3x1Y_zMmXyEAdVC_TahcecrUCdLB7uQ0id2ZRf5jArWYcxMoeW4EFNwPOYzYTK6ShkEHTbKPM_TCUIjUpipc2evileVZos_SAb1zk6T1n6JAEWTj4Oe2LhknXRAXWOLoWrJNi6uCTbQomr0X0LJB528crtKBee8Sjrb1cVNX-nPbPkvnyengjM0er_Fa2DccyHSw==",
    "cism":
      "https://11007e05.sibforms.com/serve/MUIFAHjx5z35xmN_dFEOP-DP1MqgRzDp7aouMlAT74iFz_Gopre9sX8Gwk1AOQ3zRfpNgI2glf-OHLv9zkiTxS48FO6UkIbBCm34eR4IzuzmIJ9RIbE1gws-rxo0O0lU4QcwaFsJFXRjK-Bw5FjnE7jfYk8wmbFikIqNceyQgQhhYwnxQsD4jfuanbx8abXXX4cjykgQaaBD_9tBzw==",
    "cka":
      "https://11007e05.sibforms.com/serve/MUIFADGCxV47bgqUEEBtIGaPFu9gCXVoryC7mvNXf1LSEL4CKGt7hDSwSvJHYzG_LnDakjelVOcmM8vMV1JOrpDPTZBX_6m8yJn9LVtfn41la4HCP6WsKMtjcK-oRjbV2v17gqojeT0qdo7wzZBtoyyPoWZrE1mCEvjZl_1XiTspHSM0K5_OMZkK5b54h8VlTy-W8kDo-9SoyRUhcA==",
    "ckad":
      "https://11007e05.sibforms.com/serve/MUIFAHqS_marwvfpCm5TSZOOFWVMCBYxd2HRZnvFzbPkVYXpxrie5Id4SaPEv2M4hkshug9t38-kpK8VWRd8JF1i6mIud95FpSCxPnVLMZKdSBNn3akAsU0HyB2maWqH2zgnN3qSkvyRKhfONSO2K9396V0ByzhPTy5SZ9G68_IYy7lX1DqKAvzf-E95z5V-pHZZLMS8ira9mRqDgA==",
    "cks":
      "https://11007e05.sibforms.com/serve/MUIFANDBQROXmZ65JdTZYivCKcqtKPDXBJOlNLiASzgKCFpTa_lXKWFINNVsOZ06r9_hp8etWz9l6q9A_1JD_xON05U9tol7dvWZ2ywP7odAEn3yk9ryOp73hPxQ5L21nwtpbcLRAYkCD2EM1_hnVV4v3tUQVHpifdr04iX7N6aajy2PECW-wG7CAvFuxNXZXQhKH0OS4QU423_syA==",
    "claude-certified-architect-ccar-f":
      "https://11007e05.sibforms.com/serve/MUIFAAzRXVrr4Lmq2jzbi8_nRGQEv1-WUEWwzH6ZucHwRsof9u3oMd_KLaly4hfIVZNZWextEii3btM4a5cHJvJBGWg1Ix8Z1EM-NXq9ZQePnc77tg7OM3WrRaHvUzIpcHDtuMObWo139CejAJhKmbmh5zIox4gXVmtwma3HzwjTsFzTJQR3CTjEgCQJmGQOuihzUhKvCQLZIpGZpA==",
    "claude-certified-associate-ccao-f":
      "https://11007e05.sibforms.com/serve/MUIFAP5jpvKEYdh5UwpaIBROxQC5jIuktSvTpp_yqdSC3WLWvzcKsFr4cLu9CLwdzXmK6CEdDPoZX6A_CY6-MSYAnNl6iHBFf-OVGNqHt5GZKgPSvkp26T7EUvfnaI7fXbNrYFdM5F0emJRykv-n_zd9RlCJRexSy3Gq42Dl37MG7bxCT2WUILvxcnPpK59WLIkFhHD534obHrrukQ==",
    "claude-certified-developer-ccdv-f":
      "https://11007e05.sibforms.com/serve/MUIFAG7SaBqyviVNYzE-gx6MeYpMw2gvZDVqvcNtfbQL5HTeb9_7Uo2WWu0mJ0s_MJbbUxPHP3NwX92Fx_s6eprfRp-AeGLtnDqpEir_ciD9ZBdWL9rfxNOcEOR8-vPWksFP-6v_YTNv8XgVO-PVrZ69JG6l0mOXHpfha08nwPM6tSXNxVK10m7k_GxIU6U0iDNIYvoOr1271LtEQg==",
    "cobit-2019-foundation":
      "https://11007e05.sibforms.com/serve/MUIFAJCi08tU3IVvs7Kz4dlbcvNxtXApaWqTkkfWRpnuyZ2bVFbjnHCXBHy7m4oGdf1-DiCOX1kE8bJMSFEWwCQrTXWWjuPPY_xy2bhInG6k9hWh6Yc5bhKs5bO34MsAnMWWlAbK-zJ--UpfODiwujb5EVN-DwUsI-lkXGw_ROCogcQG7HZvT4JhfcWX7yQpH50eCYtZPMgb1xsV5g==",
    "comptia-a-plus-core-1-220-1201":
      "https://11007e05.sibforms.com/serve/MUIFAMvVZNdKidfA7_zZN0BHXKCJGy_utCJS2UZ0329ZAzqaCMP9IAFZ1-lpYVVQCJyK9N03uMB5C3oIVmrz8PjP6x0EvCMtin9Wis5M3n5If4AS20yeWLEpmGcyJXs2isHXLg_j_Oqqf-SBkSOjSXyJ3oTVjwbhAoNP1_7wX-QfitH3D9YjV8U2cWUhG1XZCvs1ilPh_HxZjD4EdA==",
    "comptia-a-plus-core-2-220-1202":
      "https://11007e05.sibforms.com/serve/MUIFAAE5-wHvdfcmZvClZ_B6Pv9Na2PW-xz5qQaQvwE2y2sA3RAMakM39wP-Ant3lKMu-dYYzKe85YiskeDI24QMoujoUmcq2Ak42DbfCrk-2PdFGlWJaUugumYJhJBqMrgrAjg5_wcd4wuKSN90ufbk99XLYveQ5gS_ztugCyalTuKBqjL9zo2htj5eezf9d1qKeleCAli8cXgRzg==",
    "comptia-cloud-plus-cv0-004":
      "https://11007e05.sibforms.com/serve/MUIFAKx5f4cczXD8PpCSw8gp_Y6WWXzXTEumnuTtB7gNDbD7p34--TT41eX8ImE_d0Ul2-CjdOhk15FpzwaBMzy_9ajIEbww2fHCn4V1yYMaM11gJulxjxV-AvE89MDPOUX1qBksILwddxRAbSZ2WG9fqRwX-WVYPgjufNZXcN762zrx7sG4UM80ZZDtevR8ZMPyqzlxVDL64p4Mfw==",
    "comptia-network-plus-n10-009":
      "https://11007e05.sibforms.com/serve/MUIFAFbh20-M2igoXbOcrx-HFt08tYcV54uRS5jaRMU0mTXGFLI46ojl8RIE6CoMYRoRSpeOAXT3Wn_Flhfpq657hZb3j0DT-54Nk8vzRVAIMgSb7nMZQkZEKUXkphV_tCk9KONhWjC97tiWRePnZNLKBmUOmS4l1a3X3kNRiFDI8xjlc_6bnGC57SclEBx81Hkg8-f89sqh6nme9Q==",
    "comptia-secai-plus-cy0-001":
      "https://11007e05.sibforms.com/serve/MUIFAPZZeM5UyVVKQJa6tlm6VOpqTrt01tQgYMN2HHt1KT1MZqckUjDOZWB2DEaksmDqD1ys7OePYyolmKwAwKhJnLs1_Mrtpn1H_GFI5PafwQilD1VMSsgnuM06Zr3kfrhRzTpoRQY13qKXAFoCUrqOLQ2ujaHWViQZ6i6DBlAEeoOqukEiouFHVL69ffKi1f3TS612r-ayMpJcUw==",
    "comptia-security-plus-sy0-701":
      "https://11007e05.sibforms.com/serve/MUIFAEn1XdYhltFfweCJgMQOCPwVfRa0sX0dCwSA-8SFE-SyGgjjXATzEeuM1QeRGTIYUx0iU3yzHo93ARbKYQoyifN4xSjL5z54NdQ4jl2QXg9ZZN8v-Mir7RUrMe3CZDSAF9_mxS_d4b9KMrWVpGGfgapk5_fIlZdVCcd4Yn5n2A8ey69ysm4Txl-YgqRO5sIG7MOiCXnxXWCPag==",
    "comptia-security-plus-sy0-801":
      "https://11007e05.sibforms.com/serve/MUIFACWwKQcgLCBMKw87Tsyw0yT2iQE_lySYtNS2ReI_VKb6wGyym1UHleREQdWh2BSUfcXlNQrerOKDKGNN-dvSTWmSh-4sNSGUwFtj3YJWPuYd0sYV8euYrqTihz7171wv6wFCl5nzQHAnbyMre0CPo44vGvGw51UmafXeYWSMOZV5wT1Hve1tWzAb18qNvMUbc__T5R248PPoow==",
    "crisc":
      "https://11007e05.sibforms.com/serve/MUIFAMi4Zb3txSyRxi9okTh1BLdcAHx1JjQ7MG8aBKvU4SHX2oPVKis72xsTNlYm8MFdQ_MaXFJWlM1C_bhS_H5ZYlVIvw_cZYnTLHuCxXDiJQXvpfe8N00Qy6p1z3SGMvl-U5WNmE-NCyn433Hw6JeckaQoUK8Z73sbvzhp2yWK5k7vM3mdQ-v_WPUaG0qkgqfI5Miz6pVvEV2pWg==",
    "databricks-data-engineer-professional":
      "https://11007e05.sibforms.com/serve/MUIFADslt_sge7qdCMVg8eDRXClgjaddh7vxxWNK8334dslndlRxqIM1G3JQvuyAqYdkLgWT-T9i0DcRQWVb168qywJ9EAdLSEQxvrrrTcD1jDjZQg8tQiA0LQcFpiABe0lf2S0_K55i_Pev5gAgni1-Et1yTo0qWvxr6lBfn2J7EBF_YwmYtf52x7c0wEvKWbTB97RSNM4xYPA5fA==",
    "databricks-generative-ai-engineer-associate":
      "https://11007e05.sibforms.com/serve/MUIFABEczTN2iO9cgg7_MXpyu3llDHLAxNg_gUtJjHfG_qQClZXrxNfKkbT4ckwpqGEtto1Cq0mC65piOzCk2AWylsHME7Ltb4HBmMrpwnQ1qfgwWtA7EriiB4XE4iquQTfPD43ultuwxlflnx9zWr-5PDipnPjgeMz4BfO3ef_YSIZWMeyPJU3qArrjasYMTwHRJpWPa6v31RQ20g==",
    "dp-600":
      "https://11007e05.sibforms.com/serve/MUIFAKd5DqbQ-L08_32Hkkn1x-MMK72tIW2Kxdz35CRwsmkfNDkRkVQTZ1xVt7vZkU2OQPWlCwH_vAa9eGgLp391TmNH-ehtRS_BKvcZmCU_Ikytet7en9koNGiDJ60H9Q1fM0-r2YCV321I33ke1zkqh5AkqlhUy4VV_SMytPD27R54QGb8f8JWp9ZnwTy4ldeGOn8GiwHYgwYR9w==",
    "dp-750":
      "https://11007e05.sibforms.com/serve/MUIFAPIQ29INRKYOt8GLZNHCx_R8FECsFm1-xaF4_bocpQtpYmak3pJ8pGDD5RVvn9yNys0x65NL1Eo3YVc4AvRErY2IUF2XhYpAp9JwdwRIWWAr5KSszoRLNe-wLVDRYDQDdxak0rBhfJcsvMFgBz7T4dQ8mByYR7aTbZIK17LBB7GBw7t5IpH2RYHBw82ufXEZozsSJHUfS8qB1A==",
    "dp-800":
      "https://11007e05.sibforms.com/serve/MUIFACOpof6uByyQH8_z5Ks-Qb5lUwxVVkBFFxU4dl_jL1txy6qjmRHHx6a1P_aQ0jLdf0pWmZrO8B3_jRbfQdg8DjaOAYG7U6f0LBYKqTASmfBZgK_aHRNGi7ccf1_8f4YIPowsxJ02rs89NMDZvlmjJEds72zJMSGQWAm6fKU9ax7BeRJzTSOPLguAaCBWV3uMr5NgGQu1SM5VHQ==",
    "giac-gaips":
      "https://11007e05.sibforms.com/serve/MUIFAMMDfKKDKen0iVCm0tIixlwYRwIcPctR5nXYTYVp84KKIxKDk76J0CRvlpDnfRYKlCmdMjA8BrIFkbHh4rgSYNWfD8j-FcvOHiwjbeI548F-GZBxHR_V-CgTNpQIPywQSgmRUpq7CCYSjQzo9k6a-a9xRMOCK2AI_aYKUo-vfqzBS-QcIc7ie8zChRNVeu4ZKEm6VyUCiyxIKw==",
    "github-copilot-gh-300":
      "https://11007e05.sibforms.com/serve/MUIFAKHAbKr4m5KaSgfOIsQSqZs652aDAxnKf0qDoQsegPFFK-fB8-K1lAD3kdlIGlKc7uwYBtHtrG3RrfpfAdQAVALNAg8C65MMvJDgGLsaMwGEZvq1e0Khbaar12AO29wfdMygPUNyVrBcxKJ5czQZRCQBcpqm9LWH00d6tRkwgKAyC1EQSJvH0lHfGAVhFCa2UAyExpZkXy6h7Q==",
    "google-cloud-agentic-architect":
      "https://11007e05.sibforms.com/serve/MUIFACL5OOeNxL6IlLFvOtGufspSOspoR5F6TOa2sAG750xqunFxSQFM7M70qY-w1ECNNjl4AGdkmArQs0vgp-349Cvks1_FSErLUru4Prw5pNWbmoUVpim5wVjapXJ_QbKvJPyinJbLDH1-AEki51He5_vGGJvAfXfMQ_vQJb05OAJu7LfN0y-BI0_itzDHe9hz5ueS7tBSDEKNYw==",
    "google-cloud-professional-cloud-architect":
      "https://11007e05.sibforms.com/serve/MUIFAKf8TfVLh5uLrlYzz1k7AZUr56DziOaK-wsPKkULoerEmqyeTQZrPAhk1KEe_5EwKA9HKgM7QXDrhqQNxhLUFZB6lFh5UIKIZMNHMM2YmHpcU8Z7GEAcYrMmutPJ6DP-_SBEEU_FseQi7kwTIB_a0trcP2hGAdRGnNXZOP2z1YdXbUrJcDH_MMuJRkrsxz6l48KKyZpxjC02Vg==",
    "google-cloud-professional-cloud-security-engineer":
      "https://11007e05.sibforms.com/serve/MUIFAJj18v_H-mxzXVbu0G6EfYXjQwYSfsRf3LKB7eDBIRW7fcx_bMD79deeiulpr83e4xf03zkDyf8KwoIwrkvjlhTXLuxIQX38EygoPSupj5tfF8eluVNDjJ8m9SSNbLrIEyhTV0N20osurvHj1wJUcf1dCdMocXZQFmrfTjXhruSGbwbs_ZH_I0fkjIc7t_84VveNw1HS2H6RxA==",
    "iapp-aigp":
      "https://11007e05.sibforms.com/serve/MUIFALvyrSXcWwL5kHVEIg7QQ8Jox88Ni0tA3GT0HCO4eoB0qC-ztva4xqyk6IjcITAlT7hXBo-ZdCybbt3AQ02RYgK-A7y4ANxD5E7NQ0uBgHYZDlkS3k4WbuYkaVAp3EFggdAanIHIcrbeXa69s7jDSWNfVVT-SZe9Prw84jvCoOIaPBKLTKdC7vpchHvlsWA0VUBB2cDuQjV1yA==",
    "iapp-cipm":
      "https://11007e05.sibforms.com/serve/MUIFAPUVz4pbOQgrOyF3Llcb3aw6K-eEAdWKHRpfk-yyKkLeV7VKhaV8kNdq-yrkjOGsIkZrVrObbVnkvuJnCcAzidYQ-wbkIH8d5LfYJgR4_bNkPKb-vB-vmBaleRrsftzEUxWJN98qjQjXKM6eNJuuoyzgfLJ5iRNsDI4n1tyVKltG7WuwcdjvMmt0PwX0xOObbjNN815zDxabxQ==",
    "iapp-cipp-e":
      "https://11007e05.sibforms.com/serve/MUIFAPMZEuLV3kRczHurOFCXhFxhH0t4x-w35wbeW45vgDjocmfBShbUwXJVhUoBqeFqs6aBahXLxJ7VgW4ozke3g4IzG9Zb43FwRR42wcWP9TReV4DKWaVuw9BOHmTH4N0I8Qb_vvxSvtf4da6UnfOvQ6ylLA1J2bWrZxmzbdaub_VlPlE9qP4nEnAbpz2QFFPZ15dfnGypZs-8Lg==",
    "ipma-level-d":
      "https://11007e05.sibforms.com/serve/MUIFAAojTvliziLjd5ecT4ObHR0nJT8ESPGaOMfm8UkwVN9Dwi6oMqKBYl1B-e3DPZjKyXXEA1IKwlgeeZKY1p8KHWwDm8Db10OZJb2Ir2kU4hCYvVhZfkG4sa0SZyMVkKUgZV0Gb2qynau55VxTR-rvvaodWzeqyfLCOGfd7YYzRT8cojnRVVv81kxGvvU6X1CIrj0sfXBNDbJzIg==",
    "ireb-cpre-foundation-level":
      "https://11007e05.sibforms.com/serve/MUIFAASSTPEg1cjCo6p4YoYfz9s0Zbw5V3qudsKT0Ad98WeiY6OoQFlq5Ssws8OXh8KGc45IWi5dVnkEDt4IFDhzHDcXibIb2ydG4d8fWFyqFo0yUHkScf0dl7rwaSt8qtaVKy-h9ZcvF1tDND_HCWsuspEtqltA9VHNQzPKb9cfVEU8v-Re7TUycN0ifLP8I9V2Pm6KyvqKXMCjTQ==",
    "isaca-aair":
      "https://11007e05.sibforms.com/serve/MUIFAC_9WTxsVdUx-BDf_D3r_0VxYYgQwHH5mumXNL7UlKdXRP71FTI69S-n1ZIl84MJ-QEOiZ1ujpml2VS4ZC4yIknLfrsXqIpnLd357pH1p5u55sP7wgB5X06ysJBhArGJEuZbMbD3qWfcDfh7tgisq7wW5oDDOl7ovxxUMEvqhiERBFhRBuU0Q3twGP0hw6_UgDJyd4r5wUXzkg==",
    "isaca-aaism":
      "https://11007e05.sibforms.com/serve/MUIFAMTrQ1o2kvX1skLZmoR89BTtI1hDaAxXvXExuCRZ9pgNqi70vsp2y5ZuA5RaXhyVcNM31Hh02BdlY3niaKi20aVkWwgReGY85bD7uJwRCDvcmla1-DIaoT3CV9LpY35b0qYQZmK_XDuDOhnqBWmvxM5CK7jfsKw6_iPXh4o8Bccuy21K1SQfLwPIcejgAoO6_p2gNcqS7GB1Ow==",
    "isc2-cc":
      "https://11007e05.sibforms.com/serve/MUIFAA0ic4fuxtiWzDxcpu1h5-HTi5H4OPAwmn-W6Rb3o9LogKODA1AiUP0ryeHW_G0Ieqa-RfVNCl038Ad5sqiz86hCExi6lNGpZ9tM1V3gwjNb6kOWFA1PfHdGRP8JD4o1077vM0q6hCQL-0twZmf6reAMtHCevMTR2xn8bzH0-IggTAW1Qg7j5wNrJkXJM2mfcW1wB-LDkL7Xng==",
    "isc2-ccsp":
      "https://11007e05.sibforms.com/serve/MUIFAJ5TNJcswglwW_o5mLp14wF_6AEEd_Bd5nJUmvnUyVLFlXqdjbfP-P-dNMElLt2UCXZKtkFmE5K5L1gPwj8JX9cLn0cuQJPaG1o7jvG4IXEUFiA1j_oAiShu0EhlaYJMfBx9AYJGIwIP5lxEIrnmyJqqaFZKXq-jm8yHLyeh8I6QwX2nwNGP9NoD-CpNdn0FHbItO35tvQtGkQ==",
    "isc2-cissp":
      "https://11007e05.sibforms.com/serve/MUIFAOH29dAsTFUy21cAcTr0xbueoAvrI5f-IxUm47O2Hk2YD4MHhVWbUxxciu-uBXhr52cWg0c2aubmCSdMfwwqyWz-NRdEk9OLIySHODFN0b-5pq5d9Q-hdn8i1xaDEK4PywS9nKBKuQp_YKqBUNGu4mpFQC6jtP-EO4deH94WkRzWb26AgILF7KDfm_hc3XKzD700Cgih7yO9-w==",
    "iso-27001-lead-implementer":
      "https://11007e05.sibforms.com/serve/MUIFAOOvvpJKCmHk70Xa9fdPgB5WFSgdsoEpwxyPa0xRmi-YuUcPTaXkVv3w6gjmsU2gqUnbTKylc2oAUgs8OSj112uu-xW1lcHX5Xt7dGRTeTibj5i8POZkHaKuiS_K7zR5Gnst3Obg9lxdHI6-hhRTDuymcfjnjl1V8DLJxWfb3FqpTC-qvC7umi9zcDR7PWlNxrx5ESogLiMbQg==",
    "iso-iec-42001-foundation":
      "https://11007e05.sibforms.com/serve/MUIFAFE1bk-P8TA7Rwy0nPRz6xWOE1AhZKW12mHES7MFg7t5_lPspChhupJvfVfWPYuYU0o7AJM00POMgpw22DrYILfO0aqm1IFhX5X1bYFH79f7S8N0UdeR5HierzoZkOEi5B3dBqE3kNJAuCXKiRZp9wHQUIIkaBfaa51YjCEu1i1c_upkV_F_JouNot5sTa_W_vWWZNh767O0PA==",
    "istqb-ct-ai":
      "https://11007e05.sibforms.com/serve/MUIFAOCZGqNjMCsIoHF3oJrCgjpW-KOYKW85wTOX4kg3VQBr-D56F25tVaa209bKBFwv2uI3keeTkZVFvI2Dl8dUel4KcEqLh6x4ICeSHTnUz0R878clND8Zs95Ql5NbeorFr1PLT2fCyd5IF-z7wZRV-PsBeHeNUyHqD0hTFm_6JKFZDIbyhE9eKKiM35Nipqv212lpdMTVZ0xacg==",
    "istqb-ct-genai":
      "https://11007e05.sibforms.com/serve/MUIFAJIXiNbXWCeEfjGc7CqQaz-Bpseo2iZDDdmhaHyS0j5U0SZ5T3dWcUNVSKDkZZCx1-5aptFISiL9XvI-CHMh3c4jI000bGhAm5mQ7wa5EsUai9XiFcdHTGPRXcthQi1mYYttQX1H0poHYJuD-ziI9uDp-1Hoj4SFWNrUL-Y2GJojNruVIM0jevH1bFaKtvlbd9piWOpnXjrPuQ==",
    "istqb-ctal-ta":
      "https://11007e05.sibforms.com/serve/MUIFACjbLhMR0ZMFpdKnIVBIAKbWNr2OhQSRfgGKA6lPevHkEMSfnG3PK3tjAn3JNXqKIZLQGbECcjbp-wKTZ2I4Vqj0RaxcD__O_klmPFPM5e-RJSmwxUGt9-F7pE4rYNDAXDw4JGzIF2N1I0jSVT7bpoJDsXRwBrI6-p6Tpjma92voBjra8qcH-l0g1u3APHJNqPzsATqfnTed7Q==",
    "istqb-ctal-tm":
      "https://11007e05.sibforms.com/serve/MUIFACm1skYiIAz0cjE97Arn8gNDbdq06qaUJY7F3uY1bZ-kLp5q-Z8Mjm8IJtplAn04HFPnno9yIE197koxddAwlt4Qb6oeHZNp49sbJH3esNyvnCdPkOHovFaC_vNZHltkxqpMcPQpLVfwmI3_kpOMpap8zuXyE1N6T4DnK9MCI8v-qWGXMNYlw_dW2WHC_t_6l6dSFg-ojsic1w==",
    "istqb-ctfl-4":
      "https://11007e05.sibforms.com/serve/MUIFAA7SB8rUCXBBHSCxAOQgLt058U0BRYnsfa-EWYzpdE79rxQLco4uEpTGpUuplSYxcmRGHIc8LqJq8ChmxrqCrb86wJgVdouK_HieEjHS4hs3sGyjUszJRjZQrap-JPWym25INZQS67_MOQOabgj6aOvwDVmlOZTdBa_0BYG1BlPev3VXtPf5cVPvtZ-D2-y2RfonotRZkO9kTQ==",
    "itsm-foundation-bridge-v5":
      "https://11007e05.sibforms.com/serve/MUIFAIUvaGDY4yhJioPON4mWxnOwppwvF9Y-vI0NTYSFPtHXioRYiC6ivjlyu2DKJOwrPurDrQfjbkuuZwZ_ME_yunVqPDWYeSqnOhnaTl1Ya8X7SO0zKn6Uf8xtDUGP-5dePpI-bpXIM0vQurti1GHuH8n5Qe8_tDLdbZRl5acfhFQssM9kMZr2szx9i1oQyO-UHc1Bl1bFKlWHfA==",
    "itsm-foundation-v4":
      "https://11007e05.sibforms.com/serve/MUIFABFNIc_zGDIbyz3nJ-KSAeoj-bwd_Q0sztg1m50T25rqxmurxK066BWsUYq_UCmwmkdq-MDELRdzv43ztX880K8HRa1sgf-wmkGptJ0llKff-qdLf-tcwX-kCbojineWh2t_D45S0T7Wx6v8hJX9sliK-kqW3ta29pEBnZOtTTcKfQbLFf9EHAAwkJkxdbi7Puniyh25se_9Eg==",
    "itsm-foundation-v5":
      "https://11007e05.sibforms.com/serve/MUIFAAZR9j_1GukCio1OXLfTONWYK_SricW6cetgRkitBa6pyI-WS_HcWXZBSG3RBW_ZMFX3qjGR5kBTJdIY4R3LfkOyjIj1dAli1NZlg_fSzzJR8UdejytQH9TjKzAp57aUaO0uoW4XLSLGJU_km-D9OrxYDEKtJfWBToIIUrRdfmyYSOejEJBbQd0vNXKa7NLQ_d45oGMcJ6e7Xw==",
    "md-102":
      "https://11007e05.sibforms.com/serve/MUIFAGqooO80tt8U_JUYnKkWd6zLfzDe1lNOaGL5WNVvQhrlppwBu7uCjGuARgPsF5EiPUwSz5GurWTN1JTyhXQ5ZJ9TkKpJER6H501HtFUW7rWR73hMRPAI31sbjbaxr8bDXa_8rDifFGf3-R1BVO6DOwajZQhLNkcC7gADy27LUtunl85u8C5hWKJlxfzBocutjAgJD-pb5_LJeQ==",
    "mo-200":
      "https://11007e05.sibforms.com/serve/MUIFAJT1bWLrp0apcpknXH4bPSutB-9WdBCGv1ou8R_UCWg4ZNTl2tmrUeoyuSloGBdZa5egcBFJE4Fv4sdgsU6pEYw5UNXawT4K1CUmoPhrt5hKlKjepW_5RSrI7Ux3bHevAxMnUGfrSrwrmidXFUBpmJWof0CwbmvAr_JNsOzrIuZgFK8ZFXfjNlZJH8etEep7u68awkUpo91RbQ==",
    "mo-210":
      "https://11007e05.sibforms.com/serve/MUIFABKDNGrgoyVUCkNpKbgpHzQtn2Dn5PWxtXMuRmbM-AahUcVFLWzs3Rqdb-PIfkvoWOCqDJtoqnsWLSsfLMgp6KGQl3ZlPN7QbJwn3NjQrLMS2MwfP8NLWLypl6OGrvEnVPw-INmP0oAIlLuyHKJwbRRFelDOJMO_mN4KAP-ej164LtfB0vvGO0GhxvIwimYR0gAcdqOlofET1A==",
    "mongodb-associate-dba":
      "https://11007e05.sibforms.com/serve/MUIFALNZe8LrYmNVCl3M79BZiMFOO7dZKxCXKXqFQdHt6x1vmLYLyi9AvIvdWt-QgQZVdmqWNIFW1ZH_nBfDFxGBVHl-DDy6bCEtiQxWE5wHV9ot_DzfJQI1w_Y96Y42OMDPYG5FUHax2bXdpHT8PTE2CkyPuf697LH_hzDe5SWyiVRqDDtCgSkO-Z3yVEg94k7CqtFrTMc4CRjmhQ==",
    "nppe":
      "https://11007e05.sibforms.com/serve/MUIFAGVKnR3qAJQZm56ugTPZAnVYMclSUYE0eD81YbKqPYtEpP5Onj_JiXLKEtCYm-yX_V-Z1JA8x5fBBqzqPjxw5qUgRmCRO1erqWVPNhZzxdrisul7MF5YG6t0ah_mVyeI5K7KmFSVEI-GxrPfALy_MRIEpnXoL3Uc4pF0R6eJMP9eLFuwyRTCN_JCrOCklA3VMUAmMWVIetX9Qw==",
    "nvidia-nca-genl":
      "https://11007e05.sibforms.com/serve/MUIFADTp0m6DcJ2t3UJk1Lt4vjXH1SIyAN77R7azPPgIqODTNufcZxNS036CoCc-rPOr70dN4zi2C_ti1Jk0glu7tZi1xmnyf4kfMYvhv6U6C5Imt8pWHJK9vjERMxVG0rF-sqnb2Te_3nsxLz0BOciG9DL75Q2pvGkvrVCliqZMfcMzuRpY7xSSVQ0HeBq-5EnGuijgAbq-T_GueA==",
    "palo-alto-netsec-analyst":
      "https://11007e05.sibforms.com/serve/MUIFALp0ZPhkEZcRdqRhke0181jIstdl5vezT9-ioRRGU0i-Sr8mi1toTI95iXNINvEs87ny08d_2YcBuqJfKQmxKexW7hqa0Tb5ekze5zVh1WpWEHQdqY-oUDKK67g3xKHkYqenHjs8jE0uiyfSYgl1hJogsUroZ5FkTX7lGWlNqoevBz4pwTla8icrUfU6EV4hL0CN-vfdugrLXQ==",
    "palo-alto-netsec-pro":
      "https://11007e05.sibforms.com/serve/MUIFADGd3_aG3hdYPt6NvB3Q5Oi8KTG7aAbOQQqYQSONItGFRpJJg6vKsS7q-ZFAl_k33EdBxsZwM2WEovSdeBhIwBAaz0uf88F2NrKtWZsd24a3Csy7bMxAJVTi-cbxm1_JMjd2nelPCDk7KKozH9cz9KHLUqRKczjMYfOMw8SHeyHVkHaRnGwHIP8ge6xt_dbIQexdvRvx43wBbA==",
    "palo-alto-ngfw-engineer":
      "https://11007e05.sibforms.com/serve/MUIFAKKMZd7oyugIZoekHBCc4Jnl3NODKcqf_KQjzzu-O4v_fwJyubpl2kHO4u9IieWA-00NdLAu3v4OWUcni3PE_23kytPos1eIU3CDY5pYIL1pSsqhwvoFKSIHLpyUgv2ZW5PTn9BfUSkYfGlSu1p7qMuyI9U8eulF-rMM9yAmaQUaZU_NTIM70HGtYXL-rx1EHx__AqIkCBSlSA==",
    "pl-900":
      "https://11007e05.sibforms.com/serve/MUIFAM9ZmcphJHoxv-WrrHUA8F7YhEUirhbipTjFRiifJIXwmFpH5Lfk-MjX9OABbmUKhU3rbDP91W6VabOgxQI9ZYlCU4UTvxZeCJ3XOjlsEwTjFlVajQVxHPxrRZPl2-EK5AngPwL_gGuo8TgZN07FtoqOX0gpxFOr97Wqn-JCqmcZuhgsCmruIXp2tcr6hY0Mi6sjU4lffr6kkg==",
    "pmi-acp":
      "https://11007e05.sibforms.com/serve/MUIFAGs_1o65wiSAkjIRvhfz8zchDJXc29LDou9uhr6T5UiWjXt0xo-x4DRw2phJ4C1avinuwijxQ4c4GygHuCfMSIP89CJRBkOTetPJzLod_jdx7tD7Ey8uw_guh6Xgw_TGeYSheXTF4Kn9kyeVYxHDp5HtAXTLg_TGFInG4s6HF_gLQM3WjRcEb_j4MvfXZSxCm0FivM23REbDqA==",
    "pmi-rmp":
      "https://11007e05.sibforms.com/serve/MUIFAHG_ygkeHuznJF3nRuArBKl8Ah9d0cqNvnLPncfeaiQIKUR1Bjw7hhxzJwcDxANvpVOoAFLI2OgajvJ_Tv877iUL5t6Nh9qQQAHZichBtAYWp8s7IAcUhMVQohGE-wT6FO-ieI1R1HYYiT0x6P18TwGoFJIqxHFO766b5upeGNxhgjzzTEw7w-X02x_rltTXCll9gm2XIWT5rg==",
    "pmp":
      "https://11007e05.sibforms.com/serve/MUIFAMsbVrorpiST5BDq3Ct_k-9QIm0P7wB29jPThrXWQfpzknCnTDrp0_dkcBs-atQTE-IrzlxKw2-bINoFHNuVEnmJWN_ai6JvO61AO4dwjuhrJIIlFBtn-vDTfX_PLNlH5-AYGslps4v0mp4tcLOKf7jChCmftFlKOToFhTdEH_vrxOVzenSLhawf2o7lqy5LbSsgD6hzsQkmXA==",
    "project-management-foundation-7th-edition":
      "https://11007e05.sibforms.com/serve/MUIFAL3jow-HyXRLTJWfO-Cvz_VC-ervn3tjJABXRDxeEz6a7AHiq9c20NuUwdyR6n7zE3Td3crcU-2YyARTHWLjJz05Zhlhs5I1VJwDP6nATKbFJwHP_o6nuTlwaS4-hivI9XS0soC_Xrp2H7lIvukT-WQ3-FfQIiLaUieRM6dxudCFpduku9gtwht4UyrspAl7WoF19uMqW82how==",
    "project-management-practitioner-7th-edition":
      "https://11007e05.sibforms.com/serve/MUIFAM5fG9rnkFoAdQ_vRCML-Om-PTyFN47a-7FHLCn8Poe82HQIGiw2c6pyDghfxpUvf4JiFnWxh13iZl5m6b_-t5uiz-A3vAWQ6C1FDoddBBKu46UGhbpnm3KEuxjzNmIuXhVkGR30yNHnjujlXYGjgXkyU8KRpdy4DQwGaz81axrtzlBp8lfpP6HCdLjKwqLqG6OedfWrrD9t2w==",
    "salesforce-ai-201":
      "https://11007e05.sibforms.com/serve/MUIFAP1zP5IVsBdHSLStT88ccq2zqzY10CuiQAAjiNl91R8u5ds5OnFYRcqsRS4WfnWRkn9-tAH3zah9DR3pGpIWwlqxFFlPegV9WhEr_SKc60dPPvCYNm7CiHhP6isGGc19CFD0cbM1cnpGj_dKyiJl51NfB5kUUvFjLpH23iW3W70yoIQ1bNufd21eo4gknue2yvFdqG_qeaPVhw==",
    "salesforce-plat-arch-202":
      "https://11007e05.sibforms.com/serve/MUIFAOqUqwjx54yApVyyQ6Qospt-jyCmCJmYMvsSdZfVy34B3FdfcsDH4TjFg5vzCCBGQp4-cUaOM5ThoIefAi7awgkbbbM5qlMCXBvI5hfUf9PUtZ9sN23JXehkZFX0IdHnGWimDXUJjMN58NxZXsFLhoDzHEMpWEpaZMTa6oOwQZJwf8cZ6GQIl3Llt-kb1RmM9n0FHugjOGEWWw==",
    "sc-100":
      "https://11007e05.sibforms.com/serve/MUIFAK6qUvU6S438O9gprVhi0OVQhjyQ1ZkV9_c_M0OW619cljyO7Ho60QFeECMfRY9mQFFGxegD55ss0MYjDmS1NS5wPn_b1crxUpLudjXgtMKAXmS-sniN-OnbcXCNjewaZWYgERTsJGNUU5giszNnhBEQrq9i24gMWe0-S6_Rd6mpfH3V4-_xcIfOd7FO3aecV1asJkR29B85vA==",
    "sc-200":
      "https://11007e05.sibforms.com/serve/MUIFAOgq9mzDeZ3CrTv34DGUaBgMrcPvnv0sm9nOT4NJxRIt5tsH-KkECkQSV5e9J6D5KWHCSi2ce7Go9RTs6UCEdnXALpH3_wlxaUSXAGBYrxFaeh4yW7HIu_tDAmSNr3Q9yZmpiUA_Boj_Xtblm1Ong2BT6G_7QyHQJBK7iwc84XSAYPJbWbxp_wuVDPQ8m0pq0xK_DC5zF8sqvA==",
    "sc-300":
      "https://11007e05.sibforms.com/serve/MUIFAHj_Tn2AITpU-HFtOC07-JnW1R2Uw8c19xlLBAZqquEi6XTVZkdcHzBMWKxZZk9TuxzhIsjGYweggEDFHXXMsiDK-mJqkbxntEXw-TX5t84MFbPQxSo5OE20B_cOiFucHLxL6JaCW-nmfL9hoaSPozDUAhy8lAgXeGFcAGXtk4MJDONhRPYrj5f-Z5U_IBqJ4-YaqSBk1gXZ4Q==",
    "sc-401":
      "https://11007e05.sibforms.com/serve/MUIFAMF_2_TJNQeKs5Mn4jGkgXegBRPyA3OsOcmjuqf-2mlL4ht5BVv6dZvyFMyfPg-Z3LPJdpnpOW7RQE3MZbTs5GqiBo3GiWX04xIt_VmhAHgrxNS0fU2i0-_QhA-cpkXmAphJrsy_KisaoEnfnRxQVXrZ5jJm3h-gkj9AdFMuLUsM2b_hD_gCrg11LZQvB8RPdp6fsdMYHsue5A==",
    "sc-500":
      "https://11007e05.sibforms.com/serve/MUIFALg9qRvicdMJQ_avaMI07_vQFVBiL4xUPsxo2Si8mdwU8JrCq17zv3yyMdaVrtgBKbOlcPiabC7oCXL6Eb6ojuU9Tes99wjpz9RiJDa7qWy7lpGCLbnA1nAvsmShRnMvk6Z4VaU1fhhAzfCL6VE1o-FOGMruz09MTz8Ur5r2zbn_zfes_NCztbcfuRAdLCDW38udgelxgvzTfQ==",
    "sc-900":
      "https://11007e05.sibforms.com/serve/MUIFAFu9GY_fpOxOQroEG3re12yQ7R-IV4bkofABqElLh_deyTZqj27kj664lUb-58TA7vkn_BOxYwSunMX2HrQfyTR4FvGhoX3olDbndzEOn-qU5Ii5KhZUkx_-k73r6bKaDFbd3baTZIbN1-WQTnE5adbixFCYnIpyzeGeLUD1vZDOr4_Ekye6lrlIp3vqxVb0VDBDH32-9sbttg==",
    "servicenow-csa":
      "https://11007e05.sibforms.com/serve/MUIFAGpZqX4vSvcT7g7kA2pgCuZoZCgWXCRR1S0h2Hd2kL1fJ6hpkf3RFZ7j9lhctPsXVztvRve28SIACWGWYVw_R78DrENQwcKwLHXFGa0eLHn0ewZA90B_c6qShNp-0nbyOmJhXjSnrlvPX2IjLjV6IBvBucxJIkHPYKWbEHnMlFR19X3LU5FfQotP6vS3nKgkeJz7G3AIdMCn3w==",
    "terraform-associate-004":
      "https://11007e05.sibforms.com/serve/MUIFALekdS3QOeONFD-p1kcmpsxlCPg6m6q0gbeyeJqjcQcwFlTJRQcTIR8cdeI8XVpHZt4F_jJ2ctUCCj9sByTfRBDucCuYiJMGFU8McwpVTvfsa7qmiABAGIW5nFQoBo8ugMANKn-2TWRbirK7Rtp0bLd6H8UJC5DdyNozn6CDvF91X6RsrDNpxH9WbkyS-5DORYYwScfHeAhCGg==",
    "terraform-professional-002":
      "https://11007e05.sibforms.com/serve/MUIFALYqMe0s9Z4vYSoJfFYZyOWPeSfesbJTrQ22HTqCkN9_G91fXIDJcJXHyZhNC0GGrhaIrCFX50RIbRR1XMsYcEk_LhpWJmXjOO6svvZ-j5nAwFLT_QDLUWQYm9HF0FdHgyXLEZi8Juxe534CYRKQ5mi0IqmizGivO8U2iyDHbUA2N0KIiH2lVsReuBH7xnsNOE-1X4-wp9DTrQ==",
    "togaf-10-foundation-ogea-101":
      "https://11007e05.sibforms.com/serve/MUIFANYdID4CFxauf8xZWIHZH4MPxyXIb1EprE6DaeFSUa3ZoNU9jP4wsH1pDKthrO8DThmVdw23uaEdeeYbfGR1AYSbrhGnJXIGLkTsEhLP1ojpIdgLsBbRbo2QyafdUBRLghyJPpa-ojQi2O0zAjXyNiC25xok5QYlk6I4Xt-UHcfh-qosRE3JdHZBxM9O_0PmsoHU1FnSBupbsQ==",
  },
};

/** Form URL for a certification when alerts are live, else null. */
export function alertFormFor(slug: string): string | null {
  if (!alertsConfig.provider || !alertsConfig.live) return null;
  const url = alertsConfig.forms[slug];
  return url && /^https:\/\//.test(url) ? url : null;
}
