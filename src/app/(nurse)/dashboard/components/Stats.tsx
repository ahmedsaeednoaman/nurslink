export default function DashboardStats() {
  const stats = [
    { name: '?????? ???????', value: '24', change: '+12%', trend: 'up' },
    { name: '???????', value: '4.8', change: '+0.2', trend: 'up' },
    { name: '???????', value: '86', change: '-3%', trend: 'down' },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-medium mb-4 text-gray-800">???????? ?????</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm font-medium text-gray-600">{stat.name}</p>
            <div className="mt-2 flex items-baseline">
              <p className="text-2xl font-semibold text-blue-600">{stat.value}</p>
              <span className={\ml-2 text-sm font-medium \\}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
