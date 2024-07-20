import react, { CSSProperties } from "react";
import { BrandColorPalette } from "./designSystem";

export enum TextType {
  HEADING = "HEADING",
  HEADING_MEDIUM = "HEADING_MEDIUM",
  HEADING_MEDIUM_LIGHT = "HEADING_MEDIUM_LIGHT",
  HEADING_SMALL = "HEADING_SMALL",
  HEADING_SMALL_LIGHT = "HEADING_SMALL_LIGHT",
  LABEL_1 = "LABEL_1",
  LABEL_2 = "LABEL_2",
  LABEL_3 = "LABEL_3",
  TITLE_1 = "TITLE_1",
  TITLE_2 = "TITLE_2",
  TITLE_3 = "TITLE_3",
  TITLE_LARGE = "TITLE_LARGE",
  CHAT_MESSAGE = "CHAT_MESSAGE",
  PARAGRAPH = "PARAGRAPH",
  PARAGRAPH_SPAN = "PARAGRAPH_SPAN",
  ERROR_MESSAGE = "ERROR_MESSAGE",
  BUTTON_NAV_ACTIVE = "BUTTON_NAV_ACTIVE",
  NAV_INACTIVE = "NAV_INACTIVE",
  HYPERLINK = "HYPERLINK"
}

export type CustomStyles = { [key in TextType]: CSSProperties };

/**
 * Note: setting margin to 0 to get rid of default "h1", "h2", margin settings
 *       margin added manually instead
 */
export const DEFAULT_STYLE: CSSProperties = {
  margin: 0
};

export const FONT_FAMILY_HEADER: CSSProperties = {
  fontFamily: "Gilroy"
};

export const FONT_FAMILY_BODY: CSSProperties = {
  fontFamily: "SFProDisplay"
};

/*
  [TextType.HEADING]: {
    ...DEFAULT_STYLE,
    ...FONT_FAMILY_HEADER,
    fontWeight: 600,
    fontSize: "3vw", //"3rem",
    lineHeight: "3.5vw", //"3.5rem",
  },
  [TextType.HEADING_MEDIUM]: {
    ...DEFAULT_STYLE,
    ...FONT_FAMILY_HEADER,
    fontWeight: 900,
    fontSize: "2vw", //"2rem",
    lineHeight: "3vw", //"3rem",
  },
  [TextType.HEADING_MEDIUM_LIGHT]: {
    ...DEFAULT_STYLE,
    ...FONT_FAMILY_HEADER,
    fontWeight: 400,
    fontSize: "2vw", //"2rem",
    lineHeight: "4.5vw", //"4.5rem",
  },
  [TextType.HEADING_SMALL]: {
    ...DEFAULT_STYLE,
    ...FONT_FAMILY_HEADER,
    fontWeight: 600,
    fontSize: "1.5vw", //"1.5rem",
    lineHeight: "3vw", //"3rem",
  },
  [TextType.HEADING_SMALL_LIGHT]: {
    ...DEFAULT_STYLE,
    ...FONT_FAMILY_HEADER,
    fontWeight: 400,
    fontSize: "1.5vw", //"1.5rem",
    lineHeight: "3vw", //"3rem",
  },
/*
/**
 * Base CSS styling for each TextType
 */
export const TextStyles: CustomStyles = {
  [TextType.HEADING]: {
    ...DEFAULT_STYLE,
    ...FONT_FAMILY_HEADER,
    fontSize: "3rem", // 48px
    fontWeight: 600,
    lineHeight: "3.5rem"
  },
  [TextType.HEADING_MEDIUM]: {
    ...DEFAULT_STYLE,
    ...FONT_FAMILY_HEADER,
    fontSize: "2rem", // 32px
    fontWeight: 600,
    lineHeight: "3rem"
  },
  [TextType.HEADING_MEDIUM_LIGHT]: {
    ...DEFAULT_STYLE,
    ...FONT_FAMILY_HEADER,
    fontSize: "2rem",
    fontWeight: 400,
    lineHeight: "4.5rem"
  },
  [TextType.HEADING_SMALL]: {
    ...DEFAULT_STYLE,
    ...FONT_FAMILY_HEADER,
    fontSize: "1.5rem", // 24px
    fontWeight: 600,
    lineHeight: "3rem"
  },
  [TextType.HEADING_SMALL_LIGHT]: {
    ...DEFAULT_STYLE,
    ...FONT_FAMILY_HEADER,
    fontSize: "1.5rem",
    fontWeight: 400,
    lineHeight: "3rem"
  },

  /**
   * NOTE: Paragraph
   */
  [TextType.TITLE_1]: {
    ...DEFAULT_STYLE,
    ...FONT_FAMILY_BODY,
    fontSize: "1.125rem", // 18px
    fontWeight: 700,
    letterSpacing: ".75px",
    lineHeight: "1.5rem"
  },
  [TextType.TITLE_2]: {
    ...DEFAULT_STYLE,
    ...FONT_FAMILY_BODY,
    fontSize: "1rem",
    fontWeight: 700,
    letterSpacing: ".75px",
    lineHeight: "0.5rem"
  },
  [TextType.TITLE_3]: {
    ...DEFAULT_STYLE,
    ...FONT_FAMILY_BODY,
    fontSize: "14px",
    fontWeight: 700,
    letterSpacing: ".75px",
    lineHeight: "0.5rem"
  },
  [TextType.TITLE_LARGE]: {
    ...DEFAULT_STYLE,
    ...FONT_FAMILY_HEADER,
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: "22px"
  },
  [TextType.CHAT_MESSAGE]: {
    ...DEFAULT_STYLE,
    ...FONT_FAMILY_BODY,
    fontSize: "1.125rem",
    fontWeight: 400,
    letterSpacing: ".75px",
    lineHeight: "1.5rem"
  },
  [TextType.PARAGRAPH]: {
    ...DEFAULT_STYLE,
    ...FONT_FAMILY_BODY,
    fontSize: "1rem",
    fontWeight: 400,
    letterSpacing: ".75px",
    lineHeight: "1.5rem"
  },
  [TextType.PARAGRAPH_SPAN]: {
    ...DEFAULT_STYLE,
    ...FONT_FAMILY_BODY,
    fontSize: "1rem", // 16px
    fontWeight: 400,
    letterSpacing: ".75px",
    lineHeight: "1.5rem"
  },
  [TextType.ERROR_MESSAGE]: {
    ...DEFAULT_STYLE,
    ...FONT_FAMILY_BODY,
    fontSize: "1.10rem", //12px
    fontWeight: 400,
    letterSpacing: "0.75px",
    lineHeight: "1.25rem"
  },
  [TextType.BUTTON_NAV_ACTIVE]: {
    ...DEFAULT_STYLE,
    ...FONT_FAMILY_BODY,
    fontSize: "1rem",
    fontWeight: 700,
    letterSpacing: "0.75px",
    lineHeight: "1rem"
  },
  [TextType.NAV_INACTIVE]: {
    ...DEFAULT_STYLE,
    ...FONT_FAMILY_BODY,
    fontSize: "1rem",
    fontWeight: 400,
    letterSpacing: "0.75px",
    lineHeight: "1rem"
  },
  /**
   * Labels
   */
  [TextType.LABEL_1]: {
    ...DEFAULT_STYLE,
    ...FONT_FAMILY_BODY,
    fontSize: "1.25rem",
    fontWeight: 600,
    letterSpacing: "2%",
    lineHeight: "1.5rem",
    textTransform: "uppercase"
  },
  [TextType.LABEL_2]: {
    ...DEFAULT_STYLE,
    ...FONT_FAMILY_BODY,
    fontSize: "1rem",
    fontVariant: "all-small-caps",
    fontWeight: 500,
    letterSpacing: "2%",
    lineHeight: "1.1875rem",
    textTransform: "uppercase"
  },
  [TextType.LABEL_3]: {
    ...DEFAULT_STYLE,
    ...FONT_FAMILY_BODY,
    fontSize: "0.875rem",
    fontWeight: 300,
    letterSpacing: "2%",
    lineHeight: "1.05rem",
    textTransform: "uppercase"
  },
  [TextType.HYPERLINK]: {
    ...DEFAULT_STYLE,
    ...FONT_FAMILY_BODY,
    color: BrandColorPalette.BRANDING,
    fontSize: "1rem",
    fontWeight: 400,
    letterSpacing: ".75px",
    lineHeight: "1.5rem",
    textDecoration: "underline"
  }
};
