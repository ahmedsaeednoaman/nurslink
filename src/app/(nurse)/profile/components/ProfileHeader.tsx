import Link from 'next/link';

export default function ProfileHeader() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          NursLink
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link href="/dashboard" className="text-gray-600 hover:text-blue-600">
            ???? ??????
          </Link>
          <Link href="/profile" className="text-blue-600 font-medium">
            ????? ??????
          </Link>
        </div>
      </div>
    </header>
  );
}
