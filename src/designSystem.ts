export enum PrimaryColorPalette {
  MAIN_0 = "#000000",
  MAIN_1 = "#333333",
  MAIN_2 = "#666666",
  MAIN_3 = "#CCCCCC",
  MAIN_4 = "#E6E6E6",
  MAIN_5 = "#F2F2F2",
  MAIN_6 = "#FFFFFF"
}

export enum BrandColorPalette {
  ACTION = "#2C7EAB",
  ACCENT = "#7D50FF",
  BASIC_DECORATION_BLUE = "#EBF7FD",
  BRANDING = "#3CACEB",
  DECORATION = "#24D9FF",
  DECORATION_TWO = "#1820D9",
  DISABLED_GRAY = "#E1E1E3",
  SURFACE_BACKGROUND = "#EDF7FD",
  BASIC_DECORATION_PURPLE = "#7D50FF"
}

export enum TextAndShapesPalette {
  BRAND_BLACK = "#292A31",
  DECORATION = "#F2F2F2",
  INPUT_TEXT = "#2F2F2F",
  DISABLED = "#D9D9D9",
  INPUT = "#4D4D4D",
  INPUT_LABEL = "#5A5B6A",
  INPUT_FIELD = "#828282",
  PLACEHOLDER = "#B4B4BB"
}

export enum BackgroundColorPalette {
  OFF_WHITE_BACKGROUND = "#FAFAFA",
  BASIC_DECORATION_BLUE = "#EBF7FD",
  BASIC_DECORATION_GRAY = "#F2F2F2",
  SECONDARY_BACKGROUND_GRAY = "#F5F5F8"
}

export enum StatusColorPalette {
  DANGER_BACKGROUND = "#FFF8F8",
  DANGER_STATUS = "#F44336",
  DANGER_TEXT = "#EE6161",
  DANGER_FILL = "#FCF1F0",
  ERROR_TEXT = "#FF5050",
  SUCCESS_DECORATION = "#DCEDDD",
  SUCCESS_BACKGROUND = "#EFFFF7",
  SUCCESS_FILL = "#F0F9EB",
  SUCCESS_STATUS = "#43A047",
  SUCCESS_TEXT = "#389C6C",
  WARNING_BACKGROUND = "#FFF1D6",
  WARNING_FILL = "#FFFAF2",
  WARNING_DECORATION = "#FFB41F",
  WARNING_TEXT = "#D1941A",
  NONE = "#292A31"
}

/**
 * Combined type of all available colors
 */
export type ColorPalette =
  | PrimaryColorPalette
  | BackgroundColorPalette
  | BrandColorPalette
  | StatusColorPalette
  | TextAndShapesPalette;
