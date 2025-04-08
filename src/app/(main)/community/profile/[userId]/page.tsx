export default function ProfilePage({ params }: { params: { userId: string } }) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">ملف المستخدم: {params.userId}</h1>
        {/* لاحقًا هنا تعرض بيانات البروفايل */}
      </div>
    );
  }
  