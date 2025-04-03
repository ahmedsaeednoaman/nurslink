import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className='bg-blue-50 py-20'>
      <div className='container mx-auto px-4 flex flex-col md:flex-row items-center'>
        <div className='md:w-1/2 mb-10 md:mb-0'>
          <h1 className='text-4xl font-bold text-gray-800 mb-4'>
            ???? ??? ??????? ???????
          </h1>
          <p className='text-lg text-gray-600 mb-8'>
            ???? ?????? ??????? ???? ???????? ????????? ??????
          </p>
          <div className='flex gap-4'>
            <Link href='/auth/register/nurse' className='bg-primary text-white px-6 py-3 rounded-lg'>
              ????? ?????
            </Link>
            <Link href='/auth/register/hospital' className='border border-primary text-primary px-6 py-3 rounded-lg'>
              ????? ???????
            </Link>
          </div>
        </div>
        <div className='md:w-1/2'>
          <Image src='/assets/images/hero-bg.jpg' alt='NursLink Hero' width={600} height={400} className='rounded-lg shadow-lg' />
        </div>
      </div>
    </section>
  )
}
