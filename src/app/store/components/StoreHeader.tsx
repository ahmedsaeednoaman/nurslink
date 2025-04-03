import Link from 'next/link';

export default function StoreHeader() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">NursLink</Link>
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600">????????</Link>
            <Link href="/store" className="text-blue-600 font-medium">??????</Link>
            <Link href="/cart" className="relative">
              <span className="text-2xl">??</span>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
