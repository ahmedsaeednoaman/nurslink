// تفاصيل وظيفة واحدة
import JobDetails from '@/components/jobs/JobDetails';
import ApplyButton from '@/components/jobs/ApplyButton';
import { getJobDetails } from '@/lib/api/jobs';

export default async function JobDetailsPage({ params }: { params: { jobId: string } }) {
  const job = await getJobDetails(params.jobId);

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-3xl mx-auto">
        <JobDetails job={job} />
        <div className="mt-8">
          <ApplyButton jobId={job.id} />
        </div>
      </div>
    </div>
  );
}
