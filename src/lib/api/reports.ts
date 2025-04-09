export const getReports = async () => {
  const res = await fetch("/api/reports"); // تستدعي API حقيقي
  if (!res.ok) {
    throw new Error("فشل في جلب التقارير");
  }
  const data = await res.json();
  return data;
};
