'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import { categories } from '@/lib/constants';
import type { Product } from '@/types/product';

const productFormSchema = z.object({
  name: z.string().min(2, { message: 'الاسم يجب أن يحتوي على الأقل على حرفين' }),
  description: z.string().min(10, { message: 'الوصف يجب أن يحتوي على الأقل على 10 أحرف' }),
  price: z.coerce.number({
    required_error: 'السعر مطلوب',
    invalid_type_error: 'يجب إدخال رقم صحيح'
  }).min(0, { message: 'السعر لا يمكن أن يكون أقل من صفر' }),
  category: z.string().min(1, { message: 'يجب اختيار فئة من القائمة' }),
  stock: z.coerce.number({
    required_error: 'الكمية مطلوبة',
    invalid_type_error: 'يجب إدخال رقم صحيح'
  }).min(0, { message: 'الكمية لا يمكن أن تكون سالبة' }),
  images: z.array(z.string().url({ message: 'رابط الصورة غير صحيح' })).optional(),
});

type ProductFormValues = z.infer<typeof productFormSchema>;

interface EditProductPageProps {
  params: {
    productId: string;
  };
}

export default function EditProductPage({ params }: EditProductPageProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      category: '',
      stock: 0,
      images: [],
    },
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${params.productId}`);
        if (!res.ok) throw new Error('فشل في تحميل بيانات المنتج');

        const data: Product = await res.json();
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
        router.push('/admin/products');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [params.productId, form, router]);

  const onSubmit: SubmitHandler<ProductFormValues> = async (values) => {
    try {
      const response = await fetch(`/api/products/${params.productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'فشل في تحديث المنتج');
      }

      toast({
        title: 'تم التحديث بنجاح ✅',
        description: 'تم تحديث بيانات المنتج بنجاح',
      });

      router.refresh();
      router.push('/admin/products');
    } catch (error) {
      toast({
        title: 'خطأ في التحديث ❌',
        description: error instanceof Error ? error.message : 'حدث خطأ غير متوقع',
        variant: 'destructive',
      });
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-4 text-center animate-pulse">
        <p className="text-gray-600">جارٍ تحميل بيانات المنتج...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-primary">تعديل المنتج</h1>
        <Button 
          variant="outline" 
          onClick={() => router.back()}
          aria-label="العودة للخلف"
        >
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
                    <Input 
                      placeholder="أدخل اسم المنتج" 
                      {...field}
                      aria-label="اسم المنتج"
                    />
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
                      aria-label="قائمة اختيار الفئة"
                    >
                      <option value="" disabled>اختر فئة</option>
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
                      min="0"
                      {...field}
                      aria-label="السعر"
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
                      min="0"
                      {...field}
                      aria-label="الكمية المتاحة"
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
                        placeholder="أدخل وصف المنتج..."
                        rows={5}
                        {...field}
                        aria-label="الوصف"
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
              aria-label="رجوع"
            >
              إلغاء
            </Button>
            <Button 
              type="submit" 
              disabled={!form.formState.isDirty}
              aria-label="تحديث المنتج"
            >
              {form.formState.isSubmitting ? 'جاري الحفظ...' : 'تحديث المنتج'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
