import styled from "styled-components";
import { BrandColorPalette } from "@/designSystem";

export const RangeSelectorWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const RangeButton = styled.button<{ isActive: boolean }>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  background: ${({ isActive, theme }) =>
    isActive ? BrandColorPalette.BRANDING : theme.colors.grey400};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background: ${({ isActive }) => (isActive ? undefined : "rgba(60, 172, 235, 0.9)")};
  }
`;
