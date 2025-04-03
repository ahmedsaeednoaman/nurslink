"use client"

export function NurseDashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">لوحة تحكم الممرض</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">الوظائف المتاحة</h2>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">الحجوزات النشطة</h2>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">التقييم</h2>
          <p className="text-3xl font-bold mt-2">4.8/5</p>
        </div>
      </div>
    </div>
  )
}
