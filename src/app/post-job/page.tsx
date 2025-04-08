// نشر وظيفة جديدة
import PostJobForm from '@/components/jobs/PostJobForm';

export default function PostJobPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">نشر وظيفة جديدة</h1>
        <PostJobForm />
      </div>
    </div>
  );
}
