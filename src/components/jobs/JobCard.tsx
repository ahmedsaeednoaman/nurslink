// بطاقة عرض وظيفة واحدة
import Link from 'next/link';

// تعريف نوع الوظيفة
interface Job {
  id: string;
  title: string;
  location: string;
  salary: number;
  type: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT';
}

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <h3 className="font-bold text-lg">{job.title}</h3>
      <p className="text-gray-600 mb-2">{job.location}</p>
      <p className="text-green-600 font-medium mb-3">
        {job.salary ? `${job.salary.toLocaleString()} جنيه` : 'لم يتم التحديد'}
      </p>

      <div className="flex justify-between items-center">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
          {job.type === 'FULL_TIME'
            ? 'دوام كامل'
            : job.type === 'PART_TIME'
            ? 'دوام جزئي'
            : 'عقد مؤقت'}
        </span>

        <Link 
          href={`/jobs/${job.id}`}
          className="text-blue-600 hover:underline"
        >
          التفاصيل
        </Link>
      </div>
    </div>
  );
}
