import { FC } from "react";
import { useCalendar } from "@/context/CalendarProvider";
import { RangeSelectorWrapper, RangeButton } from "./styles";

interface RangeSelectorProps {
  value: "week" | "month";
  onChange: (value: "week" | "month") => void;
}

const RangeSelector: FC<RangeSelectorProps> = ({ value, onChange }) => {
  const { zoom: currentZoom, changeZoom } = useCalendar();

  const handleRangeChange = (value: "week" | "month") => {
    changeZoom(currentZoom === 0 ? 1 : 0);
  };

  const isMonthView = currentZoom === 0;

  return (
    <RangeSelectorWrapper>
      <RangeButton isActive={!isMonthView} onClick={() => handleRangeChange("week")}>
        Week View
      </RangeButton>
      <RangeButton isActive={isMonthView} onClick={() => handleRangeChange("month")}>
        Month View
      </RangeButton>
    </RangeSelectorWrapper>
  );
};

export default RangeSelector;
