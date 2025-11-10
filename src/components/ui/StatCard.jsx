const StatCard = ({ title, value, change, icon, color = "emerald" }) => {
  const colorClasses = {
    emerald: "bg-emerald-100 text-emerald-600",
    teal: "bg-teal-100 text-teal-600",
    blue: "bg-blue-100 text-blue-600",
    orange: "bg-orange-100 text-orange-600",
    red: "bg-red-100 text-red-600",
    purple: "bg-purple-100 text-purple-600",
  };

  const isPositive = change && parseFloat(change) > 0;
  const isNegative = change && parseFloat(change) < 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">{value}</h3>
          {change && (
            <div className="flex items-center gap-1 text-sm">
              <span
                className={`font-medium ${
                  isPositive
                    ? "text-green-600"
                    : isNegative
                      ? "text-red-600"
                      : "text-gray-600"
                }`}
              >
                {isPositive && "↑"} {isNegative && "↓"} {change}
              </span>
              <span className="text-gray-500">vs last month</span>
            </div>
          )}
        </div>
        <div
          className={`w-12 h-12 rounded-lg ${colorClasses[color]} flex items-center justify-center flex-shrink-0`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
