import styled, { createGlobalStyle, type DefaultTheme } from "styled-components";
import {
  PrimaryColorPalette,
  BrandColorPalette,
  TextAndShapesPalette,
  BackgroundColorPalette,
  StatusColorPalette
} from "./designSystem"; // Adjust the import path as necessary

export const prefixId = "reactSchedulerOutsideWrapper";

export const GlobalStyle = createGlobalStyle`

  #${prefixId} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${prefixId} *,
 #${prefixId} *:before,
 #${prefixId} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`;

type ColorType =
  | "black"
  | "grey400"
  | "grey600"
  | "blue900"
  | "blue100"
  | "blue300"
  | "blue400"
  | "blue200"
  | "red400"
  | "white"
  | keyof typeof PrimaryColorPalette
  | keyof typeof BrandColorPalette
  | keyof typeof TextAndShapesPalette
  | keyof typeof BackgroundColorPalette
  | keyof typeof StatusColorPalette;

export type Theme = {
  colors: Record<ColorType, string>;
  navHeight: string;
};

export const theme: DefaultTheme = {
  navHeight: "44px",
  colors: {
    black: "#1C222F",
    grey400: "#D2D2D2",
    grey600: "#777777",
    blue900: "#3B3C5F",
    blue100: "#F8F8FD",
    blue300: "#C9E5FF",
    blue400: "#0A11EB",
    blue200: "#E6F3FF",
    red400: "#EF4444",
    white: "#FFFFFF",
    ...PrimaryColorPalette,
    ...BrandColorPalette,
    ...TextAndShapesPalette,
    ...BackgroundColorPalette,
    ...StatusColorPalette
  }
};

export const marginPaddingReset = `
margin: 0;
padding: 0;
`;

export const truncate = `
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;

export const StyledSchedulerFrame = styled.div`
  /* margin: 10rem 10rem; */
  position: relative;
  /* width: 40vw; */
  width: 70vw;
  height: 40vh;
`;
