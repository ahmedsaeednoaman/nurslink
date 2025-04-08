'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ApplyForm({ jobId }: { jobId: string }) {
  const [cv, setCv] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: رفع ملف السيرة الذاتية إلى التخزين الخارجي
      const cvUrl = 'https://dummy-cv-url.com'; // استبدل هذا بالرفع الفعلي

      const res = await fetch('/api/jobs/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jobId,
          cvUrl,
          coverLetter
        })
      });

      if (res.ok) {
        router.push('/jobs?applied=true');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-2">السيرة الذاتية (PDF فقط)</label>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setCv(e.target.files?.[0] || null)}
          required
        />
      </div>

      <div>
        <label className="block mb-2">رسالة التغطية (اختياري)</label>
        <textarea
          className="w-full p-2 border rounded"
          rows={5}
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !cv}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
      >
        {isSubmitting ? 'جاري التقديم...' : 'تقديم الطلب'
        }
      </button>
    </form>
  );
}
