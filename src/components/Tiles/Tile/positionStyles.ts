import styled from "styled-components";
import { StyledTileWrapper as BaseTileWrapper } from "../Tile/styles";

export const StyledTileWrapper = styled(BaseTileWrapper)`
  position: absolute;
  border-radius: 8px;
  padding: 4px 8px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.95);
    z-index: 1000 !important;
  }
`;

export const StyledInnerWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledTextWrapper = styled.div<{ isMissing?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ isMissing }) => (isMissing ? "center" : "flex-start")};
  height: 100%;
  margin-top: ${({ isMissing }) => (isMissing ? "0" : "4px")};
  gap: 2px;
`;

export const StyledText = styled.span<{ bold?: boolean }>`
  font-size: 12px;
  font-weight: ${({ bold }) => (bold ? "600" : "400")};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledTravelText = styled(StyledText)`
  font-style: italic;
  font-size: 11px;
`;

export const StyledMissingCredentialsDot = styled.div`
  width: 8px;
  height: 8px;
  min-width: 8px;
  min-height: 8px;
  border-radius: 50%;
  background-color: #f56565;
  margin-left: 4px;
  display: inline-block;
`;

export const StyledNoteWrapper = styled.div`
  position: absolute;
  bottom: 4px;
  right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
