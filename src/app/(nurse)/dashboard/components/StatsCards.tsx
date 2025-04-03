export default function StatsCards() {
  const stats = [
    { title: "??????? ???????", value: "24", change: "+12%" },
    { title: "????????? ???????", value: "15", change: "+5%" },
    { title: "????????? ???????", value: "3", change: "-2%" },
    { title: "??????? ?????", value: "4.8", change: "+0.3" }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500">{stat.title}</h3>
          <p className="text-2xl font-bold mt-2">{stat.value}</p>
          <p className={stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
            {stat.change}
          </p>
        </div>
      ))}
    </div>
  )
}
