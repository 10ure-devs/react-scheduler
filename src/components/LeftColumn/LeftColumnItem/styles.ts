import styled from "styled-components";
import { theme } from "@/styles";
import { boxHeight } from "@/constants";
import { StyledLeftColumnItemWrapperProps, StyledTextProps } from "./types";

export const StyledWrapper = styled.div<StyledLeftColumnItemWrapperProps>`
  display: flex;
  align-items: ${({ rows }) => (rows > 1 ? "start" : "center")};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${boxHeight}px;
  height: calc(${boxHeight}px * ${({ rows }) => rows});
  border-top: 1px solid ${({ theme }) => theme.colors.grey400};
  transition: 0.5s ease;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "auto")};
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue200};
  }
  background-color: ${({ hasAParent }) => (hasAParent ? theme.colors.blue200 : "transparent")};
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImageWrapper = styled.div`
  margin-right: 0.5rem;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;
export const StyledImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  flex: 1 0 0;
`;
export const StyledText = styled.p<StyledTextProps>`
  margin: 0;
  padding: 0;
  font-size: ${({ isMain }) => (isMain ? 0.75 + "rem" : 0.625 + "rem")};
  letter-spacing: ${({ isMain }) => (isMain ? 1 + "px" : 0.5 + "px")};
  line-height: ${({ isMain }) => (isMain ? 1.125 + "rem" : 0.75 + "rem")};
  color: ${({ isMain }) => (isMain ? theme.colors.black : theme.colors.BRAND_BLACK)};
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 144px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`;

export const StyledTextTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 0.75rem;
  letter-spacing: 1px;
  line-height: 1.125rem;
  color: ${theme.colors.black};
`;

// Center Vertically, left align
export const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

// defaults to red, blue on hover
export const StyledTextButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  margin: 0;
  padding: 0;
  padding-top: 0.1rem;
  font-size: 0.6rem;
  text-decoration: underline;
  color: ${theme.colors.ERROR_TEXT};
  &:hover {
    font-weight: bold;
  }
`;
