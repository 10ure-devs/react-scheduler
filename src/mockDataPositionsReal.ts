import { SchedulerData } from "./types/global";

export const mockData: SchedulerData = [
  {
    id: "4fda2ea0-8338-4d11-87c2-14d1aea19e79",
    label: {
      title: "Seaward Endeavor",
      subtitle: "POLLUTION CONTROL VESSEL\r",
      parentId: null
    },
    data: []
  },
  {
    id: "4fda2ea0-8338-4d11-87c2-14d1aea19e79_91303f09-7846-4518-9b64-66ae40400749_2024-06-18T13:50:59.729Z",
    label: {
      title: "Captain",
      subtitle: "",
      parentId: "4fda2ea0-8338-4d11-87c2-14d1aea19e79"
    },
    data: [
      {
        id: "4fda2ea0-8338-4d11-87c2-14d1aea19e79_91303f09-7846-4518-9b64-66ae40400749_2024-06-18T13:50:59.729Z_e9d5358f-cce6-4bed-be79-1b7ec83a4398",
        startDate: new Date("2025-04-30T00:00:00.000Z"),
        endDate: new Date("2065-02-04T22:59:07.200Z"),
        occupancy: 0,
        title: "MISSING",
        bgColor: "#F56565",
        extraData: {
          positionRefId: "91303f09-7846-4518-9b64-66ae40400749",
          positionName: "Captain",
          missingCredentials: null,
          vesselRefId: "4fda2ea0-8338-4d11-87c2-14d1aea19e79",
          userRefId: null,
          crewOnTravelStart: null,
          crewOnTravelEnd: null,
          crewOffTravelStart: null,
          crewOffTravelEnd: null,
          serviceStartedAt: null,
          serviceEndedAt: null,
          shiftInHours: null,
          vesselName: "Seaward Endeavor"
        }
      },
      {
        id: "7a9f7bd0-791c-4ab2-8cc9-2d26121f6883",
        startDate: new Date("2025-03-28T00:00:00.000Z"),
        endDate: new Date("2025-04-30T00:00:00.000Z"),
        title: "David Martinez",
        description: "03/28/2025 - 04/30/2025",
        occupancy: 0,
        bgColor: "#F1C9FF",
        extraData: {
          scheduleItemRefId: "7a9f7bd0-791c-4ab2-8cc9-2d26121f6883",
          positionRefId: "91303f09-7846-4518-9b64-66ae40400749",
          positionName: "Captain",
          userRefId: "899c90ed-0d8a-4cb6-89f6-8f2860c15891",
          missingCredentials: true,
          vesselRefId: "4fda2ea0-8338-4d11-87c2-14d1aea19e79",
          vesselName: "Seaward Endeavor",
          crewOnTravelStart: "2025-03-26T00:00:00Z",
          crewOnTravelEnd: "2025-03-28T00:00:00Z",
          crewOffTravelStart: "2025-04-30T00:00:00Z",
          crewOffTravelEnd: "2025-04-30T00:00:00Z",
          serviceStartedAt: "2025-03-28T00:00:00.000Z",
          serviceEndedAt: "2025-04-30T00:00:00.000Z",
          shiftInHours: "8"
        }
      },
      {
        id: "871e79fb-62cb-40b0-bd87-6d213bf0898e",
        startDate: new Date("2025-02-02T00:00:00.000Z"),
        endDate: new Date("2025-03-28T00:00:00.000Z"),
        title: "Albert Johnson",
        description: "02/02/2025 - 03/28/2025",
        occupancy: 0,
        bgColor: "#AFD5FF",
        extraData: {
          scheduleItemRefId: "871e79fb-62cb-40b0-bd87-6d213bf0898e",
          positionRefId: "91303f09-7846-4518-9b64-66ae40400749",
          positionName: "Captain",
          userRefId: "3a80387e-0938-4716-b8bf-0c53dda8be40",
          missingCredentials: true,
          vesselRefId: "4fda2ea0-8338-4d11-87c2-14d1aea19e79",
          vesselName: "Seaward Endeavor",
          crewOnTravelStart: null,
          crewOnTravelEnd: null,
          crewOffTravelStart: null,
          crewOffTravelEnd: null,
          serviceStartedAt: "2025-02-02T00:00:00.000Z",
          serviceEndedAt: "2025-03-28T00:00:00.000Z",
          shiftInHours: "8"
        }
      }
    ]
  },
  {
    id: "4fda2ea0-8338-4d11-87c2-14d1aea19e79_9075a348-dc9a-42bd-b0fd-22d8374a6788_2024-10-09T19:31:59.699Z",
    label: {
      title: "Deckhand",
      subtitle: "",
      parentId: "4fda2ea0-8338-4d11-87c2-14d1aea19e79"
    },
    data: [
      {
        id: "4fda2ea0-8338-4d11-87c2-14d1aea19e79_9075a348-dc9a-42bd-b0fd-22d8374a6788_2024-10-09T19:31:59.699Z_a1279c26-4b9a-4730-abee-fda10951fcdd",
        startDate: new Date("2025-02-04T22:59:07.200Z"),
        endDate: new Date("2065-02-04T22:59:07.200Z"),
        occupancy: 0,
        title: "MISSING",
        bgColor: "#F56565",
        extraData: {
          positionRefId: "9075a348-dc9a-42bd-b0fd-22d8374a6788",
          positionName: "Deckhand",
          missingCredentials: null,
          vesselRefId: "4fda2ea0-8338-4d11-87c2-14d1aea19e79",
          userRefId: null,
          crewOnTravelStart: null,
          crewOnTravelEnd: null,
          crewOffTravelStart: null,
          crewOffTravelEnd: null,
          serviceStartedAt: null,
          serviceEndedAt: null,
          shiftInHours: null,
          vesselName: "Seaward Endeavor"
        }
      }
    ]
  },
  {
    id: "4fda2ea0-8338-4d11-87c2-14d1aea19e79_731b2935-38f0-4bf3-b44b-1151ec39cc45_2024-10-09T19:31:59.699Z",
    label: {
      title: "Chief Mate",
      subtitle: "",
      parentId: "4fda2ea0-8338-4d11-87c2-14d1aea19e79"
    },
    data: [
      {
        id: "4fda2ea0-8338-4d11-87c2-14d1aea19e79_731b2935-38f0-4bf3-b44b-1151ec39cc45_2024-10-09T19:31:59.699Z_90f5d35a-a1ea-48b6-be21-744243e4a9a8",
        startDate: new Date("2025-04-01T00:00:00.000Z"),
        endDate: new Date("2065-02-04T22:59:07.200Z"),
        occupancy: 0,
        title: "MISSING",
        bgColor: "#F56565",
        extraData: {
          positionRefId: "731b2935-38f0-4bf3-b44b-1151ec39cc45",
          positionName: "Chief Mate",
          missingCredentials: null,
          vesselRefId: "4fda2ea0-8338-4d11-87c2-14d1aea19e79",
          userRefId: null,
          crewOnTravelStart: null,
          crewOnTravelEnd: null,
          crewOffTravelStart: null,
          crewOffTravelEnd: null,
          serviceStartedAt: null,
          serviceEndedAt: null,
          shiftInHours: null,
          vesselName: "Seaward Endeavor"
        }
      },
      {
        id: "dddbd983-4497-4ae2-bc5c-610453d0dc9d",
        startDate: new Date("2025-01-31T00:00:00.000Z"),
        endDate: new Date("2025-04-01T00:00:00.000Z"),
        title: "Linda Rodriguez",
        description: "01/31/2025 - 04/01/2025",
        occupancy: 0,
        bgColor: "#AFD5FF",
        extraData: {
          scheduleItemRefId: "dddbd983-4497-4ae2-bc5c-610453d0dc9d",
          positionRefId: "731b2935-38f0-4bf3-b44b-1151ec39cc45",
          positionName: "Chief Mate",
          userRefId: "5c3f5378-de53-4cdc-b82e-79a15a49f24d",
          missingCredentials: true,
          vesselRefId: "4fda2ea0-8338-4d11-87c2-14d1aea19e79",
          vesselName: "Seaward Endeavor",
          crewOnTravelStart: null,
          crewOnTravelEnd: null,
          crewOffTravelStart: null,
          crewOffTravelEnd: null,
          serviceStartedAt: "2025-01-31T00:00:00.000Z",
          serviceEndedAt: "2025-04-01T00:00:00.000Z",
          shiftInHours: "8"
        }
      }
    ]
  },
  {
    id: "4fda2ea0-8338-4d11-87c2-14d1aea19e79_c0e76b9f-7311-488d-a84e-38a44226e40f_2024-10-09T19:31:59.699Z",
    label: {
      title: "Third Assistant Engineer",
      subtitle: "",
      parentId: "4fda2ea0-8338-4d11-87c2-14d1aea19e79"
    },
    data: [
      {
        id: "4fda2ea0-8338-4d11-87c2-14d1aea19e79_c0e76b9f-7311-488d-a84e-38a44226e40f_2024-10-09T19:31:59.699Z_fda19ee7-7619-4e40-baa7-d8b7c26fa132",
        startDate: new Date("2025-04-30T00:00:00.000Z"),
        endDate: new Date("2065-02-04T22:59:07.200Z"),
        occupancy: 0,
        title: "MISSING",
        bgColor: "#F56565",
        extraData: {
          positionRefId: "c0e76b9f-7311-488d-a84e-38a44226e40f",
          positionName: "Third Assistant Engineer",
          missingCredentials: null,
          vesselRefId: "4fda2ea0-8338-4d11-87c2-14d1aea19e79",
          userRefId: null,
          crewOnTravelStart: null,
          crewOnTravelEnd: null,
          crewOffTravelStart: null,
          crewOffTravelEnd: null,
          serviceStartedAt: null,
          serviceEndedAt: null,
          shiftInHours: null,
          vesselName: "Seaward Endeavor"
        }
      },
      {
        id: "808dbf9e-fded-4831-a5fb-f6a6439ea409",
        startDate: new Date("2025-03-28T00:00:00.000Z"),
        endDate: new Date("2025-04-30T00:00:00.000Z"),
        title: "Malcolm Monroestg",
        description: "03/28/2025 - 04/30/2025",
        occupancy: 0,
        bgColor: "#F1C9FF",
        extraData: {
          scheduleItemRefId: "808dbf9e-fded-4831-a5fb-f6a6439ea409",
          positionRefId: "c0e76b9f-7311-488d-a84e-38a44226e40f",
          positionName: "Third Assistant Engineer",
          userRefId: "28b497b8-e263-46c7-af5a-d285276f6290",
          missingCredentials: true,
          vesselRefId: "4fda2ea0-8338-4d11-87c2-14d1aea19e79",
          vesselName: "Seaward Endeavor",
          crewOnTravelStart: null,
          crewOnTravelEnd: null,
          crewOffTravelStart: null,
          crewOffTravelEnd: null,
          serviceStartedAt: "2025-03-28T00:00:00.000Z",
          serviceEndedAt: "2025-04-30T00:00:00.000Z",
          shiftInHours: "8"
        }
      },
      {
        id: "4fda2ea0-8338-4d11-87c2-14d1aea19e79_c0e76b9f-7311-488d-a84e-38a44226e40f_2024-10-09T19:31:59.699Z_d6a58efb-1de8-4fa4-afda-0dad962df624",
        startDate: new Date("2025-02-28T00:00:00.000Z"),
        endDate: new Date("2025-03-28T00:00:00.000Z"),
        occupancy: 0,
        title: "MISSING",
        bgColor: "#F56565",
        extraData: {
          positionRefId: "c0e76b9f-7311-488d-a84e-38a44226e40f",
          positionName: "Third Assistant Engineer",
          missingCredentials: null,
          vesselRefId: "4fda2ea0-8338-4d11-87c2-14d1aea19e79",
          userRefId: null,
          crewOnTravelStart: null,
          crewOnTravelEnd: null,
          crewOffTravelStart: null,
          crewOffTravelEnd: null,
          serviceStartedAt: null,
          serviceEndedAt: null,
          shiftInHours: null,
          vesselName: "Seaward Endeavor"
        }
      },
      {
        id: "d9458de0-daf3-41da-9340-6e2f2268fc50",
        startDate: new Date("2025-01-31T00:00:00.000Z"),
        endDate: new Date("2025-02-28T00:00:00.000Z"),
        title: "Malcolm Monroestg",
        description: "01/31/2025 - 02/28/2025",
        occupancy: 0,
        bgColor: "#AFD5FF",
        extraData: {
          scheduleItemRefId: "d9458de0-daf3-41da-9340-6e2f2268fc50",
          positionRefId: "c0e76b9f-7311-488d-a84e-38a44226e40f",
          positionName: "Third Assistant Engineer",
          userRefId: "28b497b8-e263-46c7-af5a-d285276f6290",
          missingCredentials: true,
          vesselRefId: "4fda2ea0-8338-4d11-87c2-14d1aea19e79",
          vesselName: "Seaward Endeavor",
          crewOnTravelStart: null,
          crewOnTravelEnd: null,
          crewOffTravelStart: null,
          crewOffTravelEnd: null,
          serviceStartedAt: "2025-01-31T00:00:00.000Z",
          serviceEndedAt: "2025-02-28T00:00:00.000Z",
          shiftInHours: "8"
        }
      }
    ]
  }
];
