'use client';

import { Button } from '@/components/ui/button';

interface CategorySidebarProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const categories = [
  'كل المنتجات',
  'أدوات التشخيص',
  'مستلزمات التمريض',
  'الأدوات الجراحية',
  'الوقاية الشخصية'
];

export default function CategorySidebar({
  selectedCategory,
  onSelectCategory
}: CategorySidebarProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-bold text-lg mb-4 text-primary">الفئات</h3>
      <div className="space-y-2">
        {categories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category || 
                     (category === 'كل المنتجات' && !selectedCategory) 
                     ? 'default' : 'ghost'}
            className="w-full justify-start"
            onClick={() => 
              onSelectCategory(category === 'كل المنتجات' ? null : category)
            }
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}
