import { useCallback, useMemo, useState } from "react";
import dayjs from "dayjs";
import { ParsedDatesRange } from "./utils/getDatesRange";
import { ConfigFormValues, SchedulerItemClickData, SchedulerProjectData } from "./types/global";
import ConfigPanel from "./components/ConfigPanel";
import { StyledSchedulerFrame } from "./styles";
import { mockData } from "./mockData";
import { Scheduler } from ".";

function App() {
  const [collapsedParentIds, setCollapsedParentIds] = useState<string[]>([]);
  const [values, setValues] = useState<ConfigFormValues>({
    peopleCount: 15,
    projectsPerYear: 5,
    yearsCovered: 0,
    startDate: undefined,
    maxRecordsPerPage: 50,
    isFullscreen: true
  });

  const { peopleCount, projectsPerYear, yearsCovered, isFullscreen, maxRecordsPerPage } = values;

  // Use your custom mock data instead of generating new mock data
  const mocked = useMemo(() => mockData, []);

  const [range, setRange] = useState<ParsedDatesRange>({
    startDate: new Date(),
    endDate: new Date()
  });

  const handleRangeChange = useCallback((range: ParsedDatesRange) => {
    setRange(range);
  }, []);
  console.log("collapsedParentIds: ", collapsedParentIds);
  console.log("mocked: ", mocked);
  const parentFilteredData = useMemo(
    () =>
      mocked.filter((item) => {
        if (!item.label.parentId) return true;
        return !collapsedParentIds.includes(item.label.parentId);
      }),
    [mocked, collapsedParentIds]
  );

  const filteredData = useMemo(
    () =>
      parentFilteredData.map((item) => {
        return {
          ...item,
          data: item.data.filter((project) => {
            console.log("project: ", project);
            return (
              dayjs(project.startDate).isBetween(range.startDate, range.endDate) ||
              dayjs(project.endDate).isBetween(range.startDate, range.endDate) ||
              (dayjs(project.startDate).isBefore(range.startDate, "day") &&
                dayjs(project.endDate).isAfter(range.endDate, "day"))
            );
          })
        };
      }),
    [parentFilteredData, range.endDate, range.startDate, collapsedParentIds]
  );

  const handleFilterData = () => console.log(`Filters button was clicked.`);

  const handleClickDownload = () => console.log(`Download button was clicked.`);

  const handleClickAddEvent = () => console.log(`Add Event button was clicked.`);

  const handleTileClick = (data: SchedulerProjectData) =>
    console.log(
      `Item ${data.title} - ${data.subtitle} was clicked. \n==============\nStart date: ${data.startDate} \n==============\nEnd date: ${data.endDate}\n==============\nOccupancy: ${data.occupancy}`
    );

  const handleHeaderClick = (data: SchedulerItemClickData) => {
    console.log("Header clicked: ", data);
    if (collapsedParentIds.includes(data.id)) {
      setCollapsedParentIds(collapsedParentIds.filter((id) => id !== data.id));
    } else {
      setCollapsedParentIds([...collapsedParentIds, data.id]);
    }
  };

  const handleTextButtonClick = (data: SchedulerItemClickData) => {
    console.log("Text button clicked: ", data);
  };

  return (
    <>
      <ConfigPanel values={values} onSubmit={setValues} />
      {isFullscreen ? (
        <Scheduler
          startDate={values.startDate ? new Date(values.startDate).toISOString() : undefined}
          onRangeChange={handleRangeChange}
          data={filteredData}
          isLoading={false}
          onTileClick={handleTileClick}
          onFilterData={handleFilterData}
          config={{ zoom: 1, maxRecordsPerPage: maxRecordsPerPage }}
          onItemClick={handleHeaderClick}
          onTextButtonClick={handleTextButtonClick}
          handleClickDownload={handleClickDownload}
          handleClickAddEvent={handleClickAddEvent}
        />
      ) : (
        <StyledSchedulerFrame>
          <Scheduler
            startDate={values.startDate ? new Date(values.startDate).toISOString() : undefined}
            onRangeChange={handleRangeChange}
            isLoading={false}
            config={{ zoom: 1, maxRecordsPerPage: maxRecordsPerPage }}
            data={filteredData}
            onTileClick={handleTileClick}
            onTextButtonClick={handleTextButtonClick}
            onFilterData={handleFilterData}
            onItemClick={handleHeaderClick}
            handleClickDownload={handleClickDownload}
            handleClickAddEvent={handleClickAddEvent}
          />
        </StyledSchedulerFrame>
      )}
    </>
  );
}

export default App;
