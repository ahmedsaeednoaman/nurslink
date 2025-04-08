import Image from 'next/image';

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="aspect-square relative">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold">{product.name}</h3>
        <p className="text-primary mt-2">{product.price} ج.م</p>
      </div>
    </div>
  );
}
