type Job = {
  id: string;
  title: string;
  location: string;
  salary: string;
};

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className='border p-4 rounded shadow hover:shadow-md'>
      <h3 className='text-xl font-semibold mb-2'>{job.title}</h3>
      <p className='text-gray-600'>??????: {job.location}</p>
      <p className='text-gray-600'>??????: {job.salary}</p>
      <a
        href={'/nurse/jobs/' + job.id}
        className='inline-block mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-secondary'
      >
        ??? ????????
      </a>
    </div>
  )
}
