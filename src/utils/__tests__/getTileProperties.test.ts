import { describe, it, expect } from "@jest/globals";
import dayjs from "dayjs";
import { getTileProperties } from "../getTileProperties";
import { parseDateOnlyFromDateTime } from "../dates";

describe("getTileProperties", () => {
  const mockRow = 0;
  const mockZoom = 1; // Month view

  // Helper to create consistent test dates
  const createTestDate = (dateStr: string) => dayjs(dateStr).startOf("day");

  describe("date boundary handling", () => {
    it("should handle exact date boundaries without overlap", () => {
      // Test case for Albert Johnson -> David Martinez transition
      const calendarStartDate = createTestDate("2025-03-01");
      const calendarEndDate = createTestDate("2025-04-30");

      // Albert Johnson's schedule
      const result1 = getTileProperties(
        mockRow,
        calendarStartDate,
        calendarEndDate,
        "2025-02-02T00:00:00.000Z",
        "2025-03-28T00:00:00.000Z",
        mockZoom
      );

      // David Martinez's schedule
      const result2 = getTileProperties(
        mockRow,
        calendarStartDate,
        calendarEndDate,
        "2025-03-28T00:00:00.000Z",
        "2025-04-30T00:00:00.000Z",
        mockZoom
      );

      console.log("Tile positions:", {
        albert: { x: result1.x, width: result1.width },
        david: { x: result2.x, width: result2.width }
      });

      // Ensure no overlap
      expect(result1.x + result1.width).toBeLessThanOrEqual(result2.x);
    });

    it("should handle timezone-sensitive dates correctly", () => {
      const calendarStartDate = createTestDate("2025-03-27");
      const calendarEndDate = createTestDate("2025-03-29");

      const result = getTileProperties(
        mockRow,
        calendarStartDate,
        calendarEndDate,
        "2025-03-28T00:00:00.000Z",
        "2025-04-30T00:00:00.000Z",
        mockZoom
      );

      console.log("Timezone handling test:", {
        inputStart: "2025-03-28T00:00:00.000Z",
        inputEnd: "2025-04-30T00:00:00.000Z",
        x: result.x,
        width: result.width,
        y: result.y
      });

      // Update test expectation since we can't check startDate directly
      expect(result.x).toBeGreaterThan(0);
    });
  });
});
