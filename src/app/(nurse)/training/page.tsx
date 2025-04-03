import Link from 'next/link'

export default function TrainingPage() {
  const courses = [
    { id: 'basic-care', title: '??????? ???????', duration: '3 ??????' },
    { id: 'icu-protocols', title: '?????????? ??????? ???????', duration: '4 ??????' },
  ]

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold mb-6'>??????? ?????????</h1>
      <div className='grid md:grid-cols-2 gap-6'>
        {courses.map((course) => (
          <Link key={course.id} href={\/nurse/training/\\} className='block p-6 bg-white border rounded-lg shadow hover:shadow-md'>
            <h2 className='text-xl font-semibold'>{course.title}</h2>
            <p className='text-gray-600'>?????: {course.duration}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
