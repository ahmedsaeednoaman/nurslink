const nurses = [
  { id: 1, name: '???? ????', specialty: '????? ?????', rating: 4.8, status: '????' },
  { id: 2, name: '??? ???', specialty: '????? ???????', rating: 4.9, status: '?? ????' },
  { id: 3, name: '???? ????', specialty: '????? ?????', rating: 4.5, status: '????' },
];

export default function ActiveNurses() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <ul className="divide-y divide-gray-200">
        {nurses.map((nurse) => (
          <li key={nurse.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  {nurse.name.charAt(0)}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{nurse.name}</p>
                <p className="text-sm text-gray-500 truncate">{nurse.specialty}</p>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-1">?</span>
                <span className="text-sm text-gray-700">{nurse.rating}</span>
                <span className={ml-2 text-xs px-2 py-1 rounded-full }>
                  {nurse.status}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="bg-gray-50 px-4 py-3 text-right">
        <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
          ??? ???? ???????? ?
        </button>
      </div>
    </div>
  );
}
