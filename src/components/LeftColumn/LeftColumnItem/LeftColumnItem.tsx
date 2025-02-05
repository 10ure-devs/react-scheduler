import { FC } from "react";
import { Icon } from "@/components";
import {
  StyledImage,
  StyledImageWrapper,
  StyledInnerWrapper,
  StyledText,
  StyledTextTitle,
  StyledHeaderWrapper,
  StyledTextWrapper,
  StyledWrapper,
  StyledTextButton
} from "./styles";
import { LeftColumnItemProps } from "./types";

const LeftColumnItem: FC<LeftColumnItemProps> = ({
  id,
  item,
  rows,
  onItemClick,
  onTextButtonClick,
  hasAParent,
  textButtonLabel
}) => {
  const handleTextButtonClick = () => {
    onTextButtonClick && onTextButtonClick?.({ id, label: item });
  };
  const formattedTitle = item.subtitle ? `${item.title} | ${item.subtitle}` : item.title;
  return (
    <StyledWrapper
      title={formattedTitle}
      clickable={typeof onItemClick === "function"}
      rows={rows}
      onClick={() => onItemClick?.({ id, label: item })}
      hasAParent={hasAParent}>
      <StyledInnerWrapper>
        {item.icon && (
          <StyledImageWrapper showBorder={true}>
            <StyledImage src={item.icon} alt="Icon" />
          </StyledImageWrapper>
        )}
        {!hasAParent && (
          <StyledHeaderWrapper>
            <StyledTextTitle>{item.title}</StyledTextTitle>
          </StyledHeaderWrapper>
        )}
        {hasAParent && (
          <StyledTextWrapper>
            <StyledTextTitle>{item.title}</StyledTextTitle>
            <StyledText>{item.subtitle}</StyledText>
            {onTextButtonClick && (
              <StyledTextButton onClick={handleTextButtonClick}>
                {textButtonLabel ?? "Remove"}
              </StyledTextButton>
            )}
          </StyledTextWrapper>
        )}
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export default LeftColumnItem;
