const StatCard = ({ title, value, change, icon, color = "emerald" }) => {
  const colorClasses = {
    emerald: "bg-[#d0bdf4] text-[#8458B3]",
    teal: "bg-[#a0d2eb]/30 text-[#8458B3]",
    blue: "bg-[#a0d2eb]/30 text-[#8458B3]",
    orange: "bg-[#a28089]/20 text-[#a28089]",
    red: "bg-[#a28089]/20 text-[#a28089]",
    purple: "bg-[#8458B3] text-white",
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
                    ? "text-[#8458B3]"
                    : isNegative
                      ? "text-[#a28089]"
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
