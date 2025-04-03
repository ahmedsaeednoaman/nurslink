"use client"

export function NurseJobs() {
  const jobs = [
    {
      id: "1",
      title: "ممرض/ممرضة للعناية المركزة",
      hospital: "مستشفى المدينة",
      location: "القاهرة",
      date: "2023-10-15",
      duration: "8 ساعات",
      salary: "500 جنيه",
    },
    {
      id: "2",
      title: "ممرض/ممرضة لرعاية المسنين",
      hospital: "دار الرعاية",
      location: "الجيزة",
      date: "2023-10-16",
      duration: "12 ساعة",
      salary: "700 جنيه",
    },
  ]

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">الوظائف المتاحة</h1>
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <div className="grid grid-cols-2 mt-2">
              <div>
                <p className="text-gray-600">المستشفى:</p>
                <p>{job.hospital}</p>
              </div>
              <div>
                <p className="text-gray-600">المكان:</p>
                <p>{job.location}</p>
              </div>
              <div>
                <p className="text-gray-600">التاريخ:</p>
                <p>{job.date}</p>
              </div>
              <div>
                <p className="text-gray-600">الراتب:</p>
                <p>{job.salary}</p>
              </div>
            </div>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              التقدم للوظيفة
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
