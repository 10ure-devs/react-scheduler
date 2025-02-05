// ignore file
// mockDataPositions.ts
import { SchedulerData } from "./types/global";

// Add color palette enum
export enum SchedulerColorPalette {
  SCHEDULER_VESSEL_GRAY = "#5A5555",
  SCHEDULER_VESSEL_BLUE = "#007AFF",
  SCHEDULER_CREW_BLUE = "#AFD5FF",
  SCHEDULER_CREW_GRAY = "#E1E1E1",
  SCHEDULER_VESSEL_PURPLE = "#C035F1",
  SCHEDULER_CREW_PURPLE = "#F1C9FF",
  SCHEDULER_MISSING = "#F56565"
}

// For convenience in quickly adding 60-day ranges:
function addDays(base: string, plus: number) {
  // base is "YYYY-MM-DD"
  const d = new Date(base);
  d.setDate(d.getDate() + plus);
  return d;
}

// Helper function to determine color based on dates and staff requirements
function getScheduleColor(startDate: Date, endDate: Date, hasMetStaffReq = false) {
  const now = new Date();

  if (endDate < now) {
    return SchedulerColorPalette.SCHEDULER_VESSEL_GRAY; // past
  }

  if (startDate < now || hasMetStaffReq) {
    return SchedulerColorPalette.SCHEDULER_VESSEL_BLUE; // current
  }

  return SchedulerColorPalette.SCHEDULER_VESSEL_PURPLE; // future OR !hasMetStaffReq
}

export const mockData: SchedulerData = [
  // Top-level vessel row
  {
    id: "vessel-1",
    label: {
      title: "Explorer",
      subtitle: "A large Research Vessel",
      parentId: null
    },
    data: [
      // Show big missing block for part of year
      {
        id: "expl-missing-1",
        startDate: new Date("2025-09-01"),
        endDate: new Date("2025-12-31"),
        occupancy: 0,
        title: "MISSING",
        subtitle: "Positions",
        description: "No positions assigned yet",
        bgColor: getScheduleColor(new Date("2025-09-01"), new Date("2025-12-31"))
      }
    ]
  },
  // Captain
  {
    id: "vessel-1-pos-captain",
    label: {
      title: "Captain",
      subtitle: "Required: GMDSS, MMC, ECDIS",
      parentId: "vessel-1"
    },
    data: [
      {
        // 60-day "Service" rotation #1
        id: "captain-service-1",
        startDate: new Date("2025-01-02"),
        endDate: addDays("2025-01-02", 60), // = ~Mar 3
        occupancy: 0,
        title: "Jonathan Doe",
        description: `Service: ${addDays("2025-01-02", 60)}`,
        bgColor: getScheduleColor(new Date("2025-01-02"), addDays("2025-01-02", 60), true)
      },
      {
        // 3-day "Travel"
        id: "captain-travel-1",
        startDate: addDays("2025-01-02", 60),
        endDate: addDays("2025-01-02", 63),
        occupancy: 0,
        title: "Travel",
        description: "Jonathan traveling home",
        bgColor: SchedulerColorPalette.SCHEDULER_VESSEL_PURPLE
      },
      {
        // Next 60-day "Service" rotation
        id: "captain-service-2",
        startDate: addDays("2025-01-02", 63),
        endDate: addDays("2025-01-02", 123), // ~May 5
        occupancy: 0,
        title: "Service",
        description: "Assigned: Michael Pollich",
        bgColor: getScheduleColor(addDays("2025-01-02", 63), addDays("2025-01-02", 123), true)
      },
      {
        id: "captain-missing-late",
        startDate: addDays("2025-01-02", 123),
        endDate: addDays("2025-01-02", 183), // ~July
        occupancy: 0,
        title: "MISSING",
        description: "No one scheduled for Captain role",
        bgColor: SchedulerColorPalette.SCHEDULER_MISSING
      }
    ]
  },
  // Chief Mate
  {
    id: "vessel-1-pos-chiefmate",
    label: {
      title: "Chief Mate",
      subtitle: "Required: MMC, RADAR, CPR",
      parentId: "vessel-1"
    },
    data: [
      {
        id: "chmate-service-1",
        startDate: new Date("2025-01-15"),
        endDate: addDays("2025-01-15", 60), // ~Mar 16
        occupancy: 0,
        title: "Service",
        description: "Colin Barnard assigned",
        bgColor: getScheduleColor(new Date("2025-01-15"), addDays("2025-01-15", 60), true)
      },
      {
        id: "chmate-missing-2",
        startDate: addDays("2025-01-15", 60),
        endDate: addDays("2025-01-15", 120), // ~May 16
        occupancy: 0,
        title: "MISSING",
        description: "Mate needed here",
        bgColor: getScheduleColor(addDays("2025-01-15", 60), addDays("2025-01-15", 120))
      }
    ]
  },
  // 2nd Mate
  {
    id: "vessel-1-pos-secondmate",
    label: {
      title: "2nd Mate",
      subtitle: "Required: MMC, RADAR, STCW",
      parentId: "vessel-1"
    },
    data: [
      {
        id: "2ndmate-service-1",
        startDate: new Date("2025-02-01"),
        endDate: addDays("2025-02-01", 60),
        occupancy: 0,
        title: "Service",
        description: "Joe Fay assigned",
        bgColor: getScheduleColor(new Date("2025-02-01"), addDays("2025-02-01", 60), true)
      }
    ]
  },

  // Another Vessel
  {
    id: "vessel-2",
    label: {
      title: "Endeavor",
      subtitle: "Ice-class supply vessel",
      parentId: null
    },
    data: [
      {
        id: "endv-missing",
        startDate: new Date("2025-06-01"),
        endDate: new Date("2025-09-01"),
        occupancy: 0,
        title: "MISSING",
        description: "Short on staff",
        bgColor: SchedulerColorPalette.SCHEDULER_MISSING
      }
    ]
  },
  // Positions for Endeavor...
  {
    id: "vessel-2-captain",
    label: {
      title: "Captain",
      subtitle: "Req: MMC, DP, ECDIS",
      parentId: "vessel-2"
    },
    data: [
      {
        id: "endv-capt-svc1",
        startDate: new Date("2025-01-01"),
        endDate: addDays("2025-01-01", 60),
        occupancy: 0,
        title: "Service",
        description: "Assigned: Ted Botsford",
        bgColor: getScheduleColor(new Date("2025-01-01"), addDays("2025-01-01", 60), true)
      }
    ]
  }
];
