'use client';

import { useRouter } from 'next/navigation';

export default function JobFilters() {
  const router = useRouter();

  const handleFilterChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      if (value) params.append(key, value.toString());
    });
    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <form onSubmit={handleFilterChange} className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block mb-2">نوع الوظيفة</label>
          <select name="type" className="w-full p-2 border rounded">
            <option value="">الكل</option>
            <option value="FULL_TIME">دوام كامل</option>
            <option value="PART_TIME">دوام جزئي</option>
            <option value="CONTRACT">عقد مؤقت</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">التخصص</label>
          <input
            type="text"
            name="specialty"
            placeholder="مثلاً: جراحة"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">الموقع</label>
          <input
            type="text"
            name="location"
            placeholder="مثلاً: القاهرة"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            تصفية
          </button>
        </div>
      </div>
    </form>
  );
}
