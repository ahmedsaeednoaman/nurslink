const bookings = [
  { id: 1, nurse: '???? ????', date: '15 ???? 2023', shift: '????? (8 ? - 4 ?)', department: '???????', status: '????' },
  { id: 2, nurse: '??? ???', date: '16 ???? 2023', shift: '???? (8 ? - 8 ?)', department: '??????? ???????', status: '??? ????????' },
];

export default function RecentBookings() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">??????</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">???????</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">????????</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">?????</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">??????</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.nurse}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.shift}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.department}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={px-2 py-1 text-xs rounded-full }>
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-gray-50 px-4 py-3 text-right">
        <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
          ??? ???? ???????? ?
        </button>
      </div>
    </div>
  );
}
