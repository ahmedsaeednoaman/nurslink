"use client"

export function HospitalJobs() {
  const [jobs, setJobs] = useState([
    {
      id: "1",
      title: "ممرض/ممرضة للعناية المركزة",
      description: "مطلوب ممرض/ممرضة بخبرة لا تقل عن 3 سنوات",
      location: "القاهرة",
      date: "2023-10-15",
      duration: "8 ساعات",
      salary: "500 جنيه",
      applicants: 5,
    },
  ])

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">الوظائف المنشورة</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          نشر وظيفة جديدة
        </button>
      </div>
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="mt-2">{job.description}</p>
            <div className="grid grid-cols-2 mt-2">
              <div>
                <p className="text-gray-600">المكان:</p>
                <p>{job.location}</p>
              </div>
              <div>
                <p className="text-gray-600">التاريخ:</p>
                <p>{job.date}</p>
              </div>
              <div>
                <p className="text-gray-600">المتقدمون:</p>
                <p>{job.applicants}</p>
              </div>
              <div>
                <p className="text-gray-600">الراتب:</p>
                <p>{job.salary}</p>
              </div>
            </div>
            <div className="flex space-x-2 mt-4">
              <button className="bg-green-600 text-white px-4 py-2 rounded">
                عرض المتقدمين
              </button>
              <button className="bg-yellow-600 text-white px-4 py-2 rounded">
                تعديل
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded">
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
