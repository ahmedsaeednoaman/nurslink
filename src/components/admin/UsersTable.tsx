"use client"

import { User } from "@/types/user"

interface UsersTableProps {
  users: User[]
}

export function UsersTable({ users }: UsersTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">الاسم</th>
            <th className="px-4 py-2 border">البريد الإلكتروني</th>
            <th className="px-4 py-2 border">الدور</th>
            <th className="px-4 py-2 border">الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-2 border">{user.id}</td>
              <td className="px-4 py-2 border">{user.name}</td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">{user.role}</td>
              <td className="px-4 py-2 border">
                <button className="text-blue-600 hover:text-blue-800 mr-2">
                  تعديل
                </button>
                <button className="text-red-600 hover:text-red-800">
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
