import styled from "styled-components";
import { TextAndShapesPalette } from "@/designSystem";
import { StyledOutsideWrapperProps } from "./types";

export const StyledOutsideWrapper = styled.div<StyledOutsideWrapperProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll }) => (showScroll ? "scroll" : "hidden")};
  background-color: white;
  border: 1px solid ${TextAndShapesPalette.PLACEHOLDER};
  border-radius: 8px;
  min-height: ${({ minHeight }) => minHeight || "500px"};
`;
export const StyledInnerWrapper = styled.div`
  position: relative;
`;
