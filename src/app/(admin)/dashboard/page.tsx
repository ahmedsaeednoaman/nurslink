import { getReports } from "@/lib/api/reports";
import { ReportCard } from "@/components/admin/ReportCard";

export default async function AdminDashboard() {
  const reports = await getReports();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">لوحة تحكم المشرفين</h1>

      <div className="mt-6 space-y-4">
        {reports.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </div>
    </div>
  );
}
