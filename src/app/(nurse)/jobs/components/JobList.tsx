import Link from 'next/link'

export default function JobList({ job }) {
  return (
    <div className='border p-4 rounded-lg shadow-sm hover:shadow'>
      <h2 className='text-lg font-bold mb-1'>{job.title}</h2>
      <p className='text-sm text-gray-600'>{job.location}</p>
      <p className='text-sm text-gray-500'>??????: {job.salary}</p>
      <p className='text-sm text-gray-400'>?????: {job.type}</p>
      <Link href={'/nurse/jobs/' + job.id} className='text-blue-600 text-sm mt-2 inline-block'>
        ??? ???????? ?
      </Link>
    </div>
  )
}
