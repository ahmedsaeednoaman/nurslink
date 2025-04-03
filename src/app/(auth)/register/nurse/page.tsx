import NurseRegisterForm from './Form'

export default function NurseRegisterPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold text-center mb-6'>????? ????</h2>
        <NurseRegisterForm />
      </div>
    </div>
  )
}
