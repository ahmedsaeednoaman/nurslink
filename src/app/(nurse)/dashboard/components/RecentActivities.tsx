const activities = [
  {
    id: 1,
    type: '?????',
    description: '???? ??? ????? 5 ???? ?? ????',
    date: '??? ??????',
    icon: '?',
  },
  {
    id: 2,
    type: '???',
    description: '?? ????? ??? ???? ?????? ??????',
    date: '??? ???',
    icon: '??',
  },
  {
    id: 3,
    type: '???',
    description: '?? ?????? ???? ????? 350 ??????',
    date: '??? 3 ????',
    icon: '??',
  },
];

export default function RecentActivities() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <ul className="divide-y divide-gray-200">
        {activities.map((activity) => (
          <li key={activity.id} className="p-4">
            <div className="flex items-start">
              <span className="text-xl mr-3">{activity.icon}</span>
              <div>
                <p className="text-sm font-medium text-gray-900">{activity.type}</p>
                <p className="text-sm text-gray-600">{activity.description}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.date}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="bg-gray-50 px-4 py-3 text-right">
        <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
          ??? ????? ?????? ?
        </button>
      </div>
    </div>
  );
}
