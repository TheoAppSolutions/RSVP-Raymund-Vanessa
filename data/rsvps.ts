export type Rsvp = {
  id: string;
  name: string;
  message: string | null;
  attending: boolean;
  created_at: string;
};

// The dashboard's record source. Update this file to change the archived responses.
export const rsvps: readonly Rsvp[] = [
  { id: "01ebde83-8ed4-4788-8be7-19ed8985ff3b", name: "Ma.Eva M.Apdo", message: null, attending: true, created_at: "2026-11-05T22:51:55.499026Z" },
  { id: "04c46315-fafb-4b38-8b14-7198f8093b2b", name: "Arlene Restor", message: "Congratulations and best wishes 👏👏👏", attending: true, created_at: "2026-11-05T12:28:51.513797Z" },
  { id: "06d6959d-bf5d-42fa-80c7-6b59c014d1cf", name: "PEDRO JOHN V. JATULAN", message: null, attending: true, created_at: "2026-10-21T22:23:49.857212Z" },
  { id: "11300d44-5d80-40ee-b459-407559953cd8", name: "Jeniel Villanueva", message: null, attending: true, created_at: "2026-10-30T10:55:00.538808Z" },
  { id: "185eb2e1-f005-47c5-8fc0-cac66afced80", name: "Arjay Dacunes", message: null, attending: true, created_at: "2026-10-26T14:20:39.15503Z" },
  { id: "1d496eb5-d6f6-4e4b-8eef-48d973942f50", name: "Mr. & Mrs. Cruz and Children", message: null, attending: true, created_at: "2026-10-21T14:39:27.967947Z" },
  { id: "26f4c445-2d87-4865-9806-d2fcd736388a", name: "Ma. Angelie Anino", message: "Let God be the center of your marriage ♥️", attending: true, created_at: "2026-11-17T04:15:01.448973Z" },
  { id: "33f0f422-88a6-41a2-b2d5-2b1ccda0adca", name: "Monicar M.Chong", message: "Congratulations and Best Wishes!", attending: true, created_at: "2026-10-21T11:46:15.855735Z" },
  { id: "4938af38-452a-4f08-832d-946304adb30b", name: "JOHN KIMBERLY C. SABALLA", message: null, attending: true, created_at: "2026-11-16T06:41:32.890112Z" },
  { id: "4a21a27d-6da0-4bdb-8325-53abd0869956", name: "Margaret Kimberly D. Cabote - Jatulan", message: "Congratulations and best wishes! ❤", attending: true, created_at: "2026-10-21T21:25:28.473863Z" },
  { id: "4f7cb6ae-7d4b-4416-b743-c4c9b7fa5206", name: "Maria Margarita J.Cai", message: null, attending: true, created_at: "2026-10-21T11:56:55.177491Z" },
  { id: "6398bf7e-605c-4060-a37c-92129fea29af", name: "SOFIA LILAGAN", message: null, attending: true, created_at: "2026-10-21T11:06:57.716894Z" },
  { id: "66552fb5-e743-4a9f-9482-23d54454a67d", name: "Miggy Salvedia", message: null, attending: true, created_at: "2026-10-21T12:32:12.48297Z" },
  { id: "6c59074a-269a-4465-bddb-4ded5f314bcb", name: "Kelly Mae Romero", message: null, attending: true, created_at: "2026-11-23T11:14:30.293989Z" },
  { id: "7c6f2995-fb17-4d4d-a700-88b8bf97539b", name: "Jaypee Rodriguez - Sofia Lilagan - Elmeda Marie Torres", message: null, attending: true, created_at: "2026-10-21T11:44:45.424396Z" },
  { id: "7f88dcaa-7283-45a5-a879-e21fffd8f957", name: "Emmanuel O. Chong", message: null, attending: true, created_at: "2026-10-21T11:55:49.355973Z" },
  { id: "8787ff01-4124-4f67-af7a-23bf5796f53b", name: "Donnavell Dacunes", message: null, attending: true, created_at: "2026-10-28T06:57:18.892363Z" },
  { id: "8aa78dd3-4b17-4462-b5a6-1972607dd124", name: "Elizabeth Ecal De Luna", message: "Congratulations and best wishes", attending: true, created_at: "2026-10-26T12:44:47.401795Z" },
  { id: "8c8d28d7-fda5-48b6-9cd9-17e21e50607d", name: "Roselyn Lacaba", message: null, attending: true, created_at: "2026-11-18T22:48:43.448153Z" },
  { id: "8e969f8f-b7b6-4576-87e6-555ce220a993", name: "Harlene Castañares", message: null, attending: true, created_at: "2026-11-16T06:29:44.002226Z" },
  { id: "9473d3b9-3b67-40a2-b833-96062fb44f43", name: "Mary Jane O. Gregori", message: "Congrats, vanessa! 👏💗", attending: true, created_at: "2026-10-21T12:09:52.122438Z" },
  { id: "98d0cd6c-5903-4ddd-889f-6f4ae2cfec11", name: "Greg& Rolene Galos", message: null, attending: true, created_at: "2026-11-08T13:29:10.169109Z" },
  { id: "9a644e30-f32f-407d-a268-d456e227698e", name: "Merlyn Macabus", message: null, attending: true, created_at: "2026-10-26T09:09:25.315447Z" },
  { id: "9b59b2e3-f749-4e5e-ad36-f5b894edcaf3", name: "SHEINA O. GREGORI", message: "Congratulations 🎉 Both of u proved that first love really can last forever. Wishing you a lifetime filled with joy, peace, and endless adventures together ☺️✨", attending: true, created_at: "2026-10-21T12:06:34.822969Z" },
  { id: "abc58a01-aabb-4579-ae25-9628dc629878", name: "Imelda Caparida", message: null, attending: true, created_at: "2026-10-30T10:49:53.023677Z" },
  { id: "c81354f6-8656-414a-887e-3785651785e8", name: "Mary Ann Montajes", message: null, attending: true, created_at: "2026-10-22T23:22:11.713993Z" },
  { id: "c97e698d-e180-44c4-be27-648ff895dab9", name: "Mike & Lily Dumas", message: null, attending: true, created_at: "2026-11-14T09:25:19.072087Z" },
  { id: "cc3b7195-375e-4548-b329-e902f9ca477d", name: "Francie Lyn M. Apdo", message: null, attending: true, created_at: "2026-11-06T10:15:33.482336Z" },
  { id: "ccbb51ba-0299-461b-b6f6-918b139b6b90", name: "Carmy Caparida", message: null, attending: true, created_at: "2026-10-30T10:54:56.762993Z" },
  { id: "d7022496-b5d3-409f-891f-f8edf959f230", name: "NIDA LILAGAN", message: null, attending: true, created_at: "2026-10-21T11:43:40.908003Z" },
  { id: "dd76c027-032c-465f-af9e-0644ab88d3a6", name: "Randy Horca", message: "Wishing you both a lifetime of love, happiness, and understanding. May you always find happiness and a lifetime choosing one another. Congratulations on this beautiful new chapter of your life! 🤍", attending: true, created_at: "2026-10-21T13:51:10.783685Z" },
  { id: "eaf9cdd1-ac4d-4106-84a3-dd23508764c5", name: "Angielyn Quirequire", message: null, attending: true, created_at: "2026-10-26T09:28:13.840592Z" },
  { id: "f680ff94-303c-470a-9ebd-9767328e51c4", name: "Amy Labrador", message: "Wishing you endless love and happiness. That grows stronger every day !!", attending: true, created_at: "2026-10-26T09:13:11.286527Z" },
  { id: "f8fc5d4c-c98d-401a-9fc1-11389d99101e", name: "Jayrald Dizon", message: null, attending: true, created_at: "2026-10-30T12:43:19.369233Z" },
];
