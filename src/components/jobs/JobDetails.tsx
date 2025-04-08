export default function JobDetails({ job }: { job: any }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">{job.title}</h1>
      <p className="text-gray-600 mb-2">{job.location}</p>
      <p className="text-green-600 font-medium mb-4">{job.salary}</p>
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">وصف الوظيفة</h2>
        <p>{job.description}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">نوع الوظيفة</h2>
        <p>
          {job.type === 'FULL_TIME' ? 'دوام كامل' : 
           job.type === 'PART_TIME' ? 'دوام جزئي' : 'عقد مؤقت'}
        </p>
      </div>
    </div>
  );
}
