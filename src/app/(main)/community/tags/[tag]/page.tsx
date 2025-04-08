export default function TagPage({ params }: { params: { tag: string } }) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">المنشورات تحت الوسم: {params.tag}</h1>
        {/* لاحقًا هنجيب هنا بوستات حسب التاج */}
      </div>
    );
  }
  