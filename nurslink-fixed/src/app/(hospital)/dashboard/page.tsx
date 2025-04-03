import { Metadata } from 'next';
import HospitalStats from './components/Stats';
import ActiveNurses from './components/ActiveNurses';
import RecentBookings from './components/RecentBookings';

export const metadata: Metadata = {
  title: '???? ???????? - NursLink',
  description: '???? ???? ???????? ?? ???? NursLink',
};

export default function HospitalDashboard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">?????? ????? ???????</h1>
            <p className="text-gray-600">???? ?????? ????????</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              ??? ????? ?????
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <HospitalStats />
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">??? ????????</h2>
              <RecentBookings />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">???????? ???????</h2>
            <ActiveNurses />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">???? ?????????</h2>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">???? ??? ??????? ???</p>
          </div>
        </div>
      </main>
    </div>
  );
}
