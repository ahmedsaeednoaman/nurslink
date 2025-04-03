const orderItems = [
  { id: 1, name: 'سماعة طبية', price: 120, quantity: 1 },
  { id: 2, name: 'قفازات طبية (100 قطعة)', price: 35, quantity: 2 },
];

const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
const shipping = 25;
const total = subtotal + shipping;

export default function OrderSummary() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
      ...
    </div>
  );
}
