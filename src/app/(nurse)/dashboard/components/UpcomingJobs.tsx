import Link from 'next/link';

const jobs = [
  {
    id: 1,
    title: '????? ????? - ????? ???',
    date: '15 ???? 2023',
    time: '10:00 ? - 2:00 ?',
    location: '???????? ???',
    status: '????',
  },
  {
    id: 2,
    title: '???? ?? ?????',
    date: '17 ???? 2023',
    time: '9:00 ? - 5:00 ?',
    location: '??????? ???',
    status: '??? ????????',
  },
];

export default function UpcomingJobs() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <ul className="divide-y divide-gray-200">
        {jobs.map((job) => (
          <li key={job.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{job.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{job.date} • {job.time}</p>
                <p className="text-sm text-gray-500">{job.location}</p>
              </div>
              <div className="flex items-center">
                <span className={\px-2 py-1 text-xs rounded-full \\}>
                  {job.status}
                </span>
                <Link href={\/jobs/\\} className="mr-2 text-blue-600 hover:text-blue-800 text-sm font-medium">
                  ????????
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="bg-gray-50 px-4 py-3 text-right">
        <Link href="/jobs" className="text-sm font-medium text-blue-600 hover:text-blue-800">
          ??? ???? ??????? ?
        </Link>
      </div>
    </div>
  );
}
