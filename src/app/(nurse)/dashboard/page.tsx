import { Metadata } from 'next';
import DashboardStats from './components/Stats';
import UpcomingJobs from './components/UpcomingJobs';
import RecentActivities from './components/RecentActivities';

export const metadata: Metadata = {
  title: '???? ?????? - NursLink',
  description: '???? ???? ?????? ?? ???? NursLink',
};

export default function NurseDashboard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-800">??????? ????!</h1>
          <p className="text-gray-600">??? ???? ???? ??? ????? ?????</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <DashboardStats />
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">??????? ???????</h2>
              <UpcomingJobs />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">??? ???????</h2>
 = @"
import { Metadata } from 'next';
import DashboardStats from './components/Stats';
import UpcomingJobs from './components/UpcomingJobs';
import RecentActivities from './components/RecentActivities';

export const metadata: Metadata = {
  title: '???? ?????? - NursLink',
  description: '???? ???? ?????? ?? ???? NursLink',
};

export default function NurseDashboard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-800">??????? ????!</h1>
          <p className="text-gray-600">??? ???? ???? ??? ????? ?????</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <DashboardStats />
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">??????? ???????</h2>
              <UpcomingJobs />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">??? ???????</h2>
            <RecentActivities />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">????? ????????</h2>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">???? ??? ??????? ???</p>
          </div>
        </div>
      </main>
    </div>
  );
}
