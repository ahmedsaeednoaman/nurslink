'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

// ✅ تحميل المكونات ديناميكياً مع مؤشر تحميل (Skeleton)
const ProductGrid = dynamic(() => import('@/components/store/ProductGrid'), {
  loading: () => <Skeleton className="h-64 w-full" />, ssr: false,
});

const CategorySidebar = dynamic(() => import('@/components/store/CategorySidebar'), {
  loading: () => <Skeleton className="h-screen w-full" />, ssr: false,
});

const CartSidebar = dynamic(() => import('@/components/cart/CartSidebar'), {
  loading: () => <Skeleton className="h-screen w-full" />, ssr: false,
});

export default function StorePage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const toggleCart = useCallback(() => setIsCartOpen(prev => !prev), []);
  const handleCategoryChange = useCallback((category: string | null) => {
    setSelectedCategory(category);
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* ✅ الشريط الجانبي للفئات (Category Sidebar) */}
        <aside className={`md:w-1/4 ${isCartOpen ? 'hidden md:block' : 'block'}`}>
          <CategorySidebar 
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
          />
        </aside>

        {/* ✅ القسم الرئيسي لعرض المنتجات */}
        <section className={`flex-1 ${isCartOpen ? 'hidden md:block' : 'block'}`}>
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-primary dark:text-primary-foreground">
              متجر NursLink
            </h1>
            <Button 
              onClick={toggleCart}
              variant="default"
              className="gap-2"
              aria-label="عرض سلة التسوق"
            >
              <Icons.cart className="h-4 w-4" />
              عرض السلة
            </Button>
          </header>

          {/* ✅ شبكة عرض المنتجات (Product Grid) */}
          <ProductGrid category={selectedCategory} />
        </section>

        {/* ✅ الشريط الجانبي للسلة (Cart Sidebar) */}
        <CartSidebar 
          isOpen={isCartOpen} 
          onClose={toggleCart} 
        />
      </div>
    </main>
  );
}
