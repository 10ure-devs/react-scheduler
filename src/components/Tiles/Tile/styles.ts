import styled from "styled-components";
import { leftColumnWidth, tileHeight } from "@/constants";
import { marginPaddingReset, theme, truncate } from "@/styles";
import { StyledTextProps } from "./types";

export const StyledTileWrapper = styled.button`
  ${marginPaddingReset}
  height: ${tileHeight}px;
  position: absolute;
  outline: none;
  border: none;
  border-radius: 4px;
  text-align: left;
  color: white;
  width: 100%;
  cursor: pointer;
`;

export const StyledInnerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StyledCrewCountWrapper = styled.div`
  position: absolute;
  bottom: 12px;
  right: 4px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
`;

export const StyledTextWrapper = styled.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`;

export const StyledText = styled.p<StyledTextProps>`
  ${marginPaddingReset}
  ${truncate}
  display: inline;
  ${({ underline }) =>
    underline &&
    `
    text-decoration: underline;
  `}
  font-weight: ${({ bold }) => (bold ? "600" : "400")};
  ${({ fontSize }) =>
    fontSize &&
    `
    font-size: ${fontSize};
  `}
`;

export const StyledDescription = styled.p`
  ${marginPaddingReset}
  ${truncate}
`;

export const StyledStickyWrapper = styled.div`
  position: sticky;
  left: ${leftColumnWidth + 16}px;
  overflow: hidden;
`;
