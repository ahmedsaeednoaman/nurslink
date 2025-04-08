'use client';

export default function PaymentOptions() {
  return (
    <div className="space-y-4 mt-6">
      <h3 className="font-bold">طريقة الدفع</h3>
      
      <div className="space-y-2">
        <label className="flex items-center gap-2">
          <input type="radio" name="payment" value="cod" defaultChecked />
          الدفع عند الاستلام
        </label>
        
        <label className="flex items-center gap-2">
          <input type="radio" name="payment" value="card" disabled />
          الدفع الإلكتروني (قريباً)
        </label>
      </div>
    </div>
  );
}
