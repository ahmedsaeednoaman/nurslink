import { User } from "@/types/user"

export async function getUsers(): Promise<User[]> {
  // في الواقع، هنا سيتم جلب البيانات من API أو قاعدة البيانات
  return [
    {
      id: "1",
      name: "أحمد محمد",
      email: "ahmed@example.com",
      role: "admin",
    },
    {
      id: "2",
      name: "مريم علي",
      email: "mariam@example.com",
      role: "nurse",
    },
    {
      id: "3",
      name: "مستشفى المدينة",
      email: "hospital@example.com",
      role: "hospital",
    },
  ]
}
