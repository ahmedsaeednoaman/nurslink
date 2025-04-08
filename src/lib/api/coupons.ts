// src/lib/api/coupons.ts

export async function validateCoupon(code: string) {
    try {
      const res = await fetch(`/api/coupons/validate?code=${encodeURIComponent(code)}`);
      
      if (!res.ok) {
        throw new Error('فشل في التحقق من الكوبون');
      }
  
      const data = await res.json();
  
      return {
        valid: data.valid, // true أو false
        discountAmount: data.discountAmount || 0, // قيمة الخصم
      };
    } catch (error) {
      console.error('خطأ أثناء التحقق من الكوبون:', error);
      throw error;
    }
  }
  