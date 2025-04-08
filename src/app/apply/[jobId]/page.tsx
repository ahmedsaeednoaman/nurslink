
// فورم التقديم على وظيفة
import ApplyForm from '@/components/jobs/ApplyForm';

export default function ApplyPage({ params }: { params: { jobId: string } }) {
  return (
    <div className="container mx-auto p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">التقديم على الوظيفة</h1>
        <ApplyForm jobId={params.jobId} />
      </div>
    </div>
  );
}
