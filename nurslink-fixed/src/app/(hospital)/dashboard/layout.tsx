import HospitalSidebar from './components/Sidebar';

export default function HospitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <HospitalSidebar />
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}
