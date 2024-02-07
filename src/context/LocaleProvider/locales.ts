import enDayjsTranslations from "dayjs/locale/en";
import plDayjsTranslations from "dayjs/locale/pl";
import deDayjsTranslations from "dayjs/locale/de";
import { en, pl, de } from "@/locales";
import { LocaleType } from "./types";

export const locales: LocaleType[] = [
  {
    id: "en",
    name: "ENGLISH",
    lang: en,
    translateCode: "en-GB",
    dayjsTranslations: enDayjsTranslations
  },
  {
    id: "pl",
    name: "POLISH",
    lang: pl,
    translateCode: "pl-PL",
    dayjsTranslations: plDayjsTranslations
  },
  {
    id: "de",
    name: "GERMAN",
    lang: de,
    translateCode: "de-DE",
    dayjsTranslations: deDayjsTranslations
  }
];
