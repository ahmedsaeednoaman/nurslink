import JobCard from '@/components/jobs/JobCard';
import JobFilters from '@/components/jobs/JobFilters';

async function getJobs(filters?: any) {
  const queryString = new URLSearchParams(filters).toString();
  const res = await fetch(`/api/jobs?${queryString}`);
  if (!res.ok) throw new Error('فشل في جلب الوظائف');
  return res.json();
}

export default async function JobsPage({ searchParams }: { searchParams: any }) {
  const jobs = await getJobs(searchParams);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">الوظائف المتاحة</h1>
      <JobFilters />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job: any) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      {jobs.length === 0 && (
        <p className="text-center py-8">لا توجد وظائف متاحة حالياً</p>
      )}
    </div>
  );
}
