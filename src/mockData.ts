import { SchedulerData } from "./types/global";

export const mockData: SchedulerData = [
  {
    id: "e7a146d1-e84e-4bcd-85a0-906af976eb2f",
    label: {
      icon: "https://storage.googleapis.com/10ure-dev-public/organizations/65bc7cac-b66e-4b07-845a-0032d825badf/profile-pics/65bc7cac-b66e-4b07-845a-0032d825badf.jpeg?Expires=1721739309&GoogleAccessId=firebase-adminsdk-ut8sm%40ure-54049.iam.gserviceaccount.com&Signature=DddKH7wppxqRxJDrNyMcnwGW7kLTU23Nys0yVCU6EtvkpZMo50CMsUiKrcgC3i4sVNBt5%2F1JJ9LNCFAcGiTCFWoXI1bXfefTcLOhcR41CvQduHIKzBqAEzpzwSGl8N04TMU%2B64iGZE%2BgwCaoSgCRH73jHY4FPf16qHMSbRLKwJwfufpGw0S%2FNXHwYSbd6PbfIHHDHdh2uy3JOBIKA%2FkVSnm1A87PpUL7MV3B9WvH8nV2p03if1Kzm47tC%2B%2FEx7WgQFTiqeGmgy8O1bpWhxVYf50JO8KRV8omfmnPukuKsY%2FrCrgCR4fLCoEvGC4CdI%2Fi8fcDeEiLEBzGEqiGruTZQQ%3D%3D",
      title: "Seaward Explorer",
      subtitle: "POLLUTION CONTROL VESSEL\r",
      parentId: null
      // id: "e7a146d1-e84e-4bcd-85a0-906af976eb2f"
    },
    data: [
      {
        id: "73868ea5-305b-4bb8-91dc-4464090a3a84",
        startDate: new Date("2024-10-09T00:04:00.000Z"),
        endDate: new Date("2024-11-13T12:03:00.000Z"),
        title: "Seaward Explorer",
        occupancy: 267.01666666666665,
        subtitle: "POLLUTION CONTROL VESSEL\r",
        description: "Testing Out Modal",
        bgColor: "#3CACEB"
      },
      {
        id: "d32e67f1-d28b-44f0-9d73-e2c8bf9f4704",
        startDate: new Date("2024-07-11T05:38:00.000Z"),
        endDate: new Date("2024-07-22T08:39:00.000Z"),
        occupancy: 267.01666666666665,
        title: "Seaward Explorer",
        subtitle: "POLLUTION CONTROL VESSEL\r",
        description: "",
        bgColor: "#3CACEB"
      }
    ]
  },
  {
    id: "28b497b8-e263-46c7-af5a-d285276f6290",
    label: {
      icon: "https://storage.googleapis.com/10ure-dev-public/users/28b497b8-e263-46c7-af5a-d285276f6290/profile-pics/28b497b8-e263-46c7-af5a-d285276f6290.jpeg?Expires=1721739475&GoogleAccessId=firebase-adminsdk-ut8sm%40ure-54049.iam.gserviceaccount.com&Signature=nhARZX48v1K5OZbQidavyTUd39ppfAlVHBrHgdzyR4Q2QBnU97cF%2ByUOppyrRqu1teIozU0XN%2BYqYdivGZ3izxN9cCoWmAkopTZwW5nd9qY6SQon2O6hzYHxdLR1Mg%2FnNzkw3TJMY13cHKqcEkZjl7L2QbtWAz4cPVx3p6iE9gHyOrD1xJIfkMSkvThW8CwdC8a7cQAeYkjdBxy3%2BU8phvbOP1vXq%2Bzzgkoyjo12l%2Bh%2BBpwynQhfe5dYIwS3WN8w5gQuBbGKrFjlTGgg9q6HAR%2BO1v739ATVn%2FZp93Q883FMitFBADhQKg1Z0%2Bnw3KQDFxJuHJxH4AxKa1ZJkUEH7g%3D%3D",
      title: "Malcolm Monroe",
      subtitle: "Deckhand",
      parentId: "e7a146d1-e84e-4bcd-85a0-906af976eb2f"
    },
    data: [
      {
        id: "0f3347b3-f522-4147-ade4-40dcf86866b5",
        startDate: new Date("2024-07-11T05:38:00.000Z"),
        endDate: new Date("2024-07-22T08:39:00.000Z"),
        occupancy: 267.01666666666665,
        title: "Deckhand",
        description: "Scheduled by: Malcolm Monroe",
        bgColor: "rgb(144,238,144)"
      }
    ]
  },
  {
    id: "d8f0d0d5-ae3a-49fb-b6c7-2f11d4dde9d2",
    label: {
      icon: "",
      title: "Patricia Miller",
      subtitle: "Line Handler",
      parentId: "e7a146d1-e84e-4bcd-85a0-906af976eb2f"
    },
    data: [
      {
        id: "c149a9d0-8c75-4b61-b0a0-1b4a7f19a1bb",
        startDate: new Date("2024-07-11T05:38:00.000Z"),
        endDate: new Date("2024-07-22T08:39:00.000Z"),
        occupancy: 267.01666666666665,
        title: "Line Handler",
        description: "Scheduled by: Malcolm Monroe",
        bgColor: "rgb(144,238,144)"
      }
    ]
  },
  {
    id: "5c3f5378-de53-4cdc-b82e-79a15a49f24d",
    label: {
      icon: "https://picsum.photos/24",
      title: "Crew Member",
      subtitle: "",
      parentId: "e7a146d1-e84e-4bcd-85a0-906af976eb2f"
    },
    data: [
      {
        id: "006e8499-75df-4cd8-863a-b8aba29f3c79",
        startDate: new Date("2024-07-11T05:38:00.000Z"),
        endDate: new Date("2024-07-22T08:39:00.000Z"),
        occupancy: 267.01666666666665,
        title: "Deckhand",
        description: "Scheduled by: Malcolm Monroe",
        bgColor: "rgb(144,238,144)"
      }
    ]
  }
];
