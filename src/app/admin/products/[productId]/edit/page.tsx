'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import { categories } from '@/lib/constants';

// سكيم الفاليديشن
const productFormSchema = z.object({
  name: z.string().min(2, 'يجب أن يحتوي الاسم على الأقل على حرفين'),
  description: z.string().min(10, 'الوصف يجب أن يحتوي على الأقل على 10 أحرف'),
  price: z.number().min(0, 'السعر يجب أن يكون رقم موجب'),
  category: z.string().min(1, 'يجب اختيار فئة'),
  stock: z.number().min(0, 'المخزون يجب أن يكون رقم موجب'),
  images: z.array(z.string().url()).optional(),
});

export default function EditProductPage({ params }: { params: { productId: string } }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const form = useForm<z.infer<typeof productFormSchema>>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      category: '',
      stock: 0,
      images: [],
    },
  });

  // جلب بيانات المنتج الحالي
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${params.productId}`);
        if (!res.ok) throw new Error('فشل في تحميل المنتج');

        const data = await res.json();
        form.reset({
          name: data.name,
          description: data.description,
          price: data.price,
          category: data.category,
          stock: data.stock,
          images: data.images || [],
        });
      } catch (error) {
        toast({
          title: 'خطأ',
          description: error instanceof Error ? error.message : 'حدث خطأ غير متوقع',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [params.productId, form]);

  async function onSubmit(values: z.infer<typeof productFormSchema>) {
    try {
      const response = await fetch(`/api/products/${params.productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('فشل في تحديث المنتج');
      }

      toast({
        title: 'تم التحديث بنجاح',
        description: 'تم تحديث بيانات المنتج',
      });

      router.push('/admin/products');
    } catch (error) {
      toast({
        title: 'حدث خطأ',
        description: error instanceof Error ? error.message : 'حدث خطأ غير متوقع',
        variant: 'destructive',
      });
    }
  }

  if (isLoading) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p>جارٍ تحميل بيانات المنتج...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">تعديل المنتج</h1>
        <Button variant="outline" onClick={() => router.back()}>
          رجوع
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>اسم المنتج</FormLabel>
                  <FormControl>
                    <Input placeholder="أدخل اسم المنتج" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الفئة</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">اختر فئة</option>
                      {categories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>السعر (ج.م)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="أدخل السعر"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الكمية المتاحة</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="أدخل الكمية"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="md:col-span-2">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الوصف</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="أدخل وصف المنتج"
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push('/admin/products')}
            >
              إلغاء
            </Button>
            <Button type="submit">
              تحديث المنتج
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
