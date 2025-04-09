import JobCard from '@/components/jobs/JobCard';
import JobFilters from '@/components/jobs/JobFilters';

// تعريف النوع لبيانات الوظيفة
interface Job {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  salary?: number;
  // زود أي خصائص موجودة عندك في الداتا
}

// نوع فلترة الوظائف
interface JobFiltersType {
  category?: string;
  location?: string;
  search?: string;
}

async function getJobs(filters?: JobFiltersType) {
  const queryString = filters ? new URLSearchParams(filters as Record<string, string>).toString() : '';
  const res = await fetch(`/api/jobs?${queryString}`);
  if (!res.ok) throw new Error('فشل في جلب الوظائف');
  return res.json() as Promise<Job[]>;
}

export default async function JobsPage({ searchParams }: { searchParams: JobFiltersType }) {
  const jobs = await getJobs(searchParams);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">الوظائف المتاحة</h1>
      <JobFilters />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      {jobs.length === 0 && (
        <p className="text-center py-8">لا توجد وظائف متاحة حالياً</p>
      )}
    </div>
  );
}
