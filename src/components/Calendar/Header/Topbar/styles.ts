import styled from "styled-components";
import { leftColumnWidth } from "@/constants";
import { TopbarProps } from "./types";

const resetBtnStyles = `
  background: none;
  outline: none;
  border: none;
  font-size: 100%;
  line-height: 1.15
  margin: 0
`;

export const Wrapper = styled.div<TopbarProps>`
  width: calc(${({ width }) => width}px - ${leftColumnWidth}px);
  position: sticky;
  top: 0;
  left: ${leftColumnWidth}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.navHeight};
  padding: 0.625rem 1rem;
  background-color: ${({ theme }) => theme.colors.BASIC_DECORATION_GRAY};
  z-index: 3;
`;

export const LeftSide = styled.div`
  /* display: flex; */
  gap: 1.875rem;
`;

export const RightSide = styled.div`
  display: flex;
  gap: 1.3rem;
`;

export const TodayButton = styled.button`
  width: 104px;
  height: 40px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.INPUT_FIELD};
  background-color: ${({ theme }) => theme.colors.MAIN_6};
  font-weight: 600;
  cursor: pointer;
  line-height: 1.5rem;
  cursor: pointer;
`;

export const DownloadButton = styled.button`
  width: 108px;
  height: 40px;
  border-radius: 6px;
  border: 2px solid ${({ theme }) => theme.colors.BRANDING};
  background-color: ${({ theme }) => theme.colors.MAIN_6};
  font-weight: 600;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.BRANDING};
  line-height: 1.5rem;
  cursor: pointer;
`;

export const AddEventButton = styled.button`
  width: 108px;
  height: 40px;
  border-radius: 6px;
  border: 2px solid ${({ theme }) => theme.colors.BRANDING};
  background-color: ${({ theme }) => theme.colors.BRANDING};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.MAIN_6};
  cursor: pointer;
  line-height: 1.5rem;
  cursor: pointer;
`;

export const Spacer = styled.div`
  height: 40px;
  width: 1px;
  border-right: 1px solid ${({ theme }) => theme.colors.INPUT_FIELD};
`;

export const RangeSelector = styled.select`
  width: 160px;
  height: 40px;
  border-radius: 6px;
  text-align: left;
  padding-left: 1rem;
  padding-right: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.INPUT_FIELD};
  font-weight: 600;
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
  /* appearance: none; -- hides arrow */
`;

export const RangeOption = styled.option`
  padding: 8px;
  background-color: white;
  cursor: pointer;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  gap: 1.875rem;
`;

export const NavBtn = styled.button`
  ${resetBtnStyles};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  :not(:disabled) {
    cursor: pointer;
  }
`;

export const Today = styled.button`
  ${resetBtnStyles};
  position: relative;
  font-weight: 600;
  cursor: pointer;
  line-height: 1.5rem;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 1.5rem;
    background-color: ${({ theme }) => theme.colors.blue900};
  }
  &::before {
    left: -1.125rem;
  }
  &::after {
    right: -1.125rem;
  }
`;

export const Zoom = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
`;

export const Filters = styled.div`
  display: flex;
`;
