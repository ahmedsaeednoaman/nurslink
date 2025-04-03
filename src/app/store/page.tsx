import { Metadata } from 'next';
import ProductGrid from './components/ProductGrid';
import StoreHeader from './components/StoreHeader';
import ShoppingCartSidebar from './components/ShoppingCartSidebar';

export const metadata: Metadata = {
  title: '???? ?????????? - NursLink',
  description: '???? ?????????? ?????? ??????????',
};

export default function StorePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <StoreHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-800">?????????? ??????</h1>
              <div className="relative w-64">
                <input type="text" placeholder="???? ?? ????..." className="w-full pr-10 pl-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                <span className="absolute right-3 top-2.5 text-gray-400">??</span>
              </div>
            </div>
            <ProductGrid />
          </div>
          <ShoppingCartSidebar />
        </div>
      </div>
    </div>
  );
}
