import { Metadata } from 'next';
import ProfileHeader from './components/ProfileHeader';
import ProfileTabs from './components/ProfileTabs';
import ProfileInfo from './components/ProfileInfo';
import Certifications from './components/Certifications';
import Availability from './components/Availability';

export const metadata: Metadata = {
  title: '????? ?????? - NursLink',
  description: '??? ?????? ?????? ?? ???? NursLink',
};

export default function NurseProfile() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ProfileHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-4">
              <div className="p-6 text-center">
                <div className="mx-auto h-32 w-32 rounded-full bg-gray-200 overflow-hidden mb-4">
                  <img 
                    src="/profile-avatar.jpg" 
                    alt="???? ??????"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold text-gray-800">???? ????</h2>
                <p className="text-gray-600">???? ?????</p>
                <div className="mt-3 flex justify-center">
                  <span className="text-yellow-400">?????</span>
                  <span className="text-gray-500 text-sm mr-1">(4.3)</span>
                </div>
              </div>
              <div className="border-t p-4">
                <ul className="space-y-2">
                  <li><button className="w-full text-right px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium">????????? ????????</button></li>
                  <li><button className="w-full text-right px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100">???????? ????????</button></li>
                  <li><button className="w-full text-right px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100">????? ?????</button></li>
                  <li><button className="w-full text-right px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100">?????????</button></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <ProfileTabs />
            <div className="mt-6 space-y-6">
              <ProfileInfo />
              <Certifications />
              <Availability />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
