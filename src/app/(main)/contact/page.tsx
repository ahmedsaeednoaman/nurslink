export default function ContactPage() {
  return (
    <div className='p-8 max-w-xl mx-auto'>
      <h1 className='text-2xl font-bold mb-6'>???? ???</h1>
      <form className='space-y-4'>
        <div>
          <label className='block mb-1'>?????</label>
          <input type='text' className='w-full p-2 border rounded' required />
        </div>
        <div>
          <label className='block mb-1'>?????? ??????????</label>
          <input type='email' className='w-full p-2 border rounded' required />
        </div>
        <div>
          <label className='block mb-1'>???????</label>
          <textarea rows='4' className='w-full p-2 border rounded' required></textarea>
        </div>
        <button className='bg-primary text-white px-4 py-2 rounded hover:bg-secondary'>?????</button>
      </form>
    </div>
  )
}
