import { useLanguage } from "@/context/LocaleProvider";
import EmptyTableComponent from "../EmptyTableComponent";
import Text, { TextType } from "../Text";
import { EmptyContentWrapper, StyledWrapper } from "./styles";

const EmptyBox = ({ emptyText, emptyTextTwo }: { emptyText?: string; emptyTextTwo?: string }) => {
  const { feelingEmptyOne, feelingEmptyTwo } = useLanguage();
  return (
    <StyledWrapper>
      <EmptyContentWrapper>
        <EmptyTableComponent />
        <Text type={TextType.TITLE_1}>{emptyText || feelingEmptyOne}</Text>
        <Text type={TextType.TITLE_2}>{emptyTextTwo || feelingEmptyTwo}</Text>
      </EmptyContentWrapper>
    </StyledWrapper>
  );
};

export default EmptyBox;
