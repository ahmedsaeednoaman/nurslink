import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: '????????', href: '/hospital/dashboard', icon: '??' },
  { name: '????? ????????', href: '/hospital/nurses', icon: '?????' },
  { name: '????????', href: '/hospital/bookings', icon: '??' },
  { name: '???????', href: '/hospital/jobs', icon: '??' },
  { name: '????????', href: '/hospital/reports', icon: '??' },
  { name: '?????????', href: '/hospital/settings', icon: '??' },
];

export default function HospitalSidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="flex items-center justify-center h-16 px-4 bg-blue-600">
          <span className="text-white font-bold text-xl">NursLink</span>
        </div>
        <div className="flex flex-col flex-grow px-4 py-4 overflow-y-auto">
          <div className="mb-6">
            <div className="flex items-center p-3 bg-blue-50 rounded-lg">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                ?
              </div>
              <div className="mr-3">
                <p className="text-sm font-medium text-gray-900">?????? ?????</p>
                <p className="text-xs text-gray-500">???? ?????</p>
              </div>
            </div>
          </div>
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={lex items-center px-4 py-3 text-sm font-medium rounded-lg }
              >
                <span className="ml-3 text-lg">{item.icon}</span>
                <span className="mr-2">{item.name}</span>
              </Link>
            ))}
          </nav>
          <div className="mt-auto pb-4">
            <button className="flex items-center px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg w-full">
              <span className="ml-3 text-lg">??</span>
              <span className="mr-2">????? ??????</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
