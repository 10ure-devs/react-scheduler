import { SchedulerData } from "./types/global";

export const mockData: SchedulerData = [
  {
    id: "e7a146d1-e84e-4bcd-85a0-906af976eb2f",
    label: {
      icon: "https://storage.googleapis.com/10ure-dev-public/organizations/65bc7cac-b66e-4b07-845a-0032d825badf/profile-pics/65bc7cac-b66e-4b07-845a-0032d825badf.jpeg?Expires=1723831639&GoogleAccessId=firebase-adminsdk-ut8sm%40ure-54049.iam.gserviceaccount.com&Signature=iLu%2FXBrpZDKwYGQcEF4gnbVpRAJKs5TX%2FGljg03kUddfAsqfV4VJ0bnH9BcSaN7LG49QYsf8ECagL5rVjCFQ3%2BDUTRL%2FEmlcC3%2F7d6XVUS6%2FCUZYBPIVoT5uLm4iJv60Pa7arFPAL8sHyP2wnFO7Pn9vnoL%2FevcRnyDKz1Mq38LM43uJ8j2LR7ZmRL6zYhHGggHI5t97Askn5stUs97%2F%2BK%2F15yVMi2EasMXbxNixSMTFY%2FX%2Ba59wLeLJ28sWYOoPeFE863xvA0EsS83T76fMOLpmDE5Tf5UCgLn6ruIZg%2FR177ycgaeAnE7YpBe34l9DXdH2M2XHf0guFE9PI%2BhNqA%3D%3D",
      title: "Seaward Explorer",
      subtitle: "POLLUTION CONTROL VESSEL\r",
      id: "e7a146d1-e84e-4bcd-85a0-906af976eb2f",
      parentId: null
    },
    data: [
      {
        id: "b7025d2c-28a1-4ad9-824d-16412f71414d",
        occupancy: 0,
        startDate: new Date("2024-08-21T13:06:00.000Z"),
        endDate: new Date("2024-08-28T13:06:00.000Z"),
        title: "Seaward Explorer",
        subtitle: "POLLUTION CONTROL VESSEL\r",
        description: "Test Work",
        bgColor: "#3CACEB",
        cost: "$0.00"
      },
      {
        id: "4c52f04c-4f23-4fc3-8bfc-29088370709d",
        occupancy: 0,
        startDate: new Date("2024-08-09T12:00:00.000Z"),
        endDate: new Date("2024-08-17T13:00:00.000Z"),
        title: "Seaward Explorer",
        subtitle: "POLLUTION CONTROL VESSEL\r",
        description: "This Is A Test",
        bgColor: "#3CACEB",
        cost: "$0.00"
      },
      {
        id: "0ad62fc7-1bac-4236-8813-464c757501a6",
        occupancy: 0,
        startDate: new Date("2024-07-15T19:56:00.000Z"),
        endDate: new Date("2024-07-23T09:56:00.000Z"),
        title: "Seaward Explorer",
        subtitle: "POLLUTION CONTROL VESSEL\r",
        description: "Testing",
        bgColor: "#3CACEB",
        cost: "$0.00"
      }
    ]
  },
  {
    id: "28b497b8-e263-46c7-af5a-d285276f6290",
    label: {
      icon: "https://storage.googleapis.com/10ure-dev-public/users/28b497b8-e263-46c7-af5a-d285276f6290/profile-pics/28b497b8-e263-46c7-af5a-d285276f6290.jpeg?Expires=1723831957&GoogleAccessId=firebase-adminsdk-ut8sm%40ure-54049.iam.gserviceaccount.com&Signature=OcgKsAbE5nigjExhUVGnKuNXDrSJx9CYVVoMLdf1FPbBUNWuRCiJRY7RHaod%2BzTi0%2FzrMUuvwvO5eHUlyR2Q%2BVyhL9vkpqZY1cBV3r4F45XoL9LhNTnggtN%2BwlU9bD9PMFP3%2B0iJRePVGAkjcMigVmdw2LDuaRuzZ%2FXr52ZazzApHalFUEW9cYu5c875kD31fvzikf0Kd6L6WG45J8tEJ4Nu0ydJtbKtt0LXxBKulnUnzmCv6ChwmiNoRFlaKzYOZkS%2BUPu1BoYLLqH6yRRsjKe8kIjBhrgikZ1j38TwnV1CyMJZBHnrXi2kF9iZuEFRNf1Diwm%2BgzmWex1fvsAs3A%3D%3D",
      title: "Malcolm Monroe",
      subtitle: "Captain",
      parentId: "e7a146d1-e84e-4bcd-85a0-906af976eb2f"
    },
    data: [
      {
        id: "55ae3334-5f9a-4cd0-ae96-9b8a099a64ea",
        startDate: new Date("2024-08-09T12:00:00.000Z"),
        endDate: new Date("2024-08-17T13:00:00.000Z"),
        occupancy: 193,
        title: "Captain",
        description: "Scheduled by: Malcolm Monroe",
        bgColor: "#3D9136"
      },
      {
        id: "cfc49a32-5a88-4394-9c08-219fe2531625",
        startDate: new Date("2024-07-15T19:56:00.000Z"),
        endDate: new Date("2024-07-23T09:56:00.000Z"),
        occupancy: 182,
        title: "Captain",
        description: "Scheduled by: Malcolm Monroe",
        bgColor: "#CCCCCC"
      }
    ]
  },
  {
    id: "5c3f5378-de53-4cdc-b82e-79a15a49f24d",
    label: {
      icon: "",
      title: "Linda Rodriguez",
      subtitle: null,
      parentId: "e7a146d1-e84e-4bcd-85a0-906af976eb2f"
    },
    data: [
      {
        id: "d66ad52c-866e-4d18-98e2-011dc78b3c36",
        startDate: new Date("2024-07-15T19:56:00.000Z"),
        endDate: new Date("2024-07-23T09:56:00.000Z"),
        occupancy: 182,
        title: "Line Handler",
        description: "Scheduled by: Malcolm Monroe",
        bgColor: "#CCCCCC"
      }
    ]
  },
  {
    id: "d8f0d0d5-ae3a-49fb-b6c7-2f11d4dde9d2",
    label: {
      icon: "",
      title: "Patricia Miller",
      subtitle: null,
      parentId: "e7a146d1-e84e-4bcd-85a0-906af976eb2f"
    },
    data: [
      {
        id: "c2c6c559-8227-4c9a-9fb6-42408a7bb478",
        startDate: new Date("2024-07-15T19:56:00.000Z"),
        endDate: new Date("2024-07-23T09:56:00.000Z"),
        occupancy: 182,
        title: "Line Handler",
        description: "Scheduled by: Malcolm Monroe",
        bgColor: "#CCCCCC"
      }
    ]
  },
  {
    id: "899c90ed-0d8a-4cb6-89f6-8f2860c15891",
    label: {
      icon: "",
      title: "David Martinez",
      subtitle: null,
      parentId: "e7a146d1-e84e-4bcd-85a0-906af976eb2f"
    },
    data: [
      {
        id: "d4e4381f-464f-42bd-8d3d-38cee91b7710",
        startDate: new Date("2024-07-15T19:56:00.000Z"),
        endDate: new Date("2024-07-23T09:56:00.000Z"),
        occupancy: 182,
        title: "Line Handler",
        description: "Scheduled by: Malcolm Monroe",
        bgColor: "#CCCCCC"
      }
    ]
  },
  {
    id: "4fda2ea0-8338-4d11-87c2-14d1aea19e79",
    label: {
      icon: "https://storage.googleapis.com/10ure-dev-public/organizations/65bc7cac-b66e-4b07-845a-0032d825badf/profile-pics/65bc7cac-b66e-4b07-845a-0032d825badf.jpeg?Expires=1723831639&GoogleAccessId=firebase-adminsdk-ut8sm%40ure-54049.iam.gserviceaccount.com&Signature=iLu%2FXBrpZDKwYGQcEF4gnbVpRAJKs5TX%2FGljg03kUddfAsqfV4VJ0bnH9BcSaN7LG49QYsf8ECagL5rVjCFQ3%2BDUTRL%2FEmlcC3%2F7d6XVUS6%2FCUZYBPIVoT5uLm4iJv60Pa7arFPAL8sHyP2wnFO7Pn9vnoL%2FevcRnyDKz1Mq38LM43uJ8j2LR7ZmRL6zYhHGggHI5t97Askn5stUs97%2F%2BK%2F15yVMi2EasMXbxNixSMTFY%2FX%2Ba59wLeLJ28sWYOoPeFE863xvA0EsS83T76fMOLpmDE5Tf5UCgLn6ruIZg%2FR177ycgaeAnE7YpBe34l9DXdH2M2XHf0guFE9PI%2BhNqA%3D%3D",
      title: "Seaward Endeavor",
      subtitle: "POLLUTION CONTROL VESSEL\r",
      id: "4fda2ea0-8338-4d11-87c2-14d1aea19e79",
      parentId: null
    },
    data: [
      {
        id: "aeef15cd-38d5-49ba-9fe8-76bf2cbc67a1",
        occupancy: 0,
        startDate: new Date("2024-08-11T13:00:00.000Z"),
        endDate: new Date("2024-08-18T13:00:00.000Z"),
        title: "Seaward Endeavor",
        subtitle: "POLLUTION CONTROL VESSEL\r",
        description: "This Is A Test To Add New Vessel Event",
        bgColor: "#3CACEB",
        cost: "$12.00"
      }
    ]
  },
  {
    id: "16f15523-f2bc-4b2d-a3fa-49dc53298e35",
    label: {
      icon: "",
      title: "James Garcia",
      subtitle: null,
      parentId: "4fda2ea0-8338-4d11-87c2-14d1aea19e79"
    },
    data: [
      {
        id: "77f3e6ae-84e1-46cc-853b-52c9bc30a1f4",
        startDate: new Date("2024-08-11T13:00:00.000Z"),
        endDate: new Date("2024-08-18T13:00:00.000Z"),
        occupancy: 168,
        title: "Deckhand",
        description: "Scheduled by: Malcolm Monroe",
        bgColor: "#3D9136"
      }
    ]
  }
];
