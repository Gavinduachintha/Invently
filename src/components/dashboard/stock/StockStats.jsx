import {
  Package,
  AlertTriangle,
  XCircle,
  CheckCircle,
  DollarSign,
} from "lucide-react";

const StockStats = ({ stats, loading }) => {
  const statCards = [
    {
      title: "Total Products",
      value: stats.totalProducts,
      icon: Package,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      textColor: "text-blue-600",
    },
    {
      title: "In Stock",
      value: stats.inStock,
      icon: CheckCircle,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      textColor: "text-green-600",
    },
    {
      title: "Low Stock",
      value: stats.lowStock,
      icon: AlertTriangle,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      textColor: "text-yellow-600",
    },
    {
      title: "Out of Stock",
      value: stats.outOfStock,
      icon: XCircle,
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
      textColor: "text-red-600",
    },
    {
      title: "Total Inventory Value",
      value: `$${stats.totalValue.toFixed(2)}`,
      icon: DollarSign,
      bgColor: "bg-emerald-100",
      iconColor: "text-emerald-600",
      textColor: "text-emerald-600",
    },
    {
      title: "Low Stock Value",
      value: `$${stats.lowStockValue.toFixed(2)}`,
      icon: DollarSign,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      textColor: "text-orange-600",
    },
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white rounded-lg border border-gray-200 p-4 animate-pulse"
          >
            <div className="h-12 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {statCards.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                <p className={`text-2xl font-bold ${stat.textColor}`}>
                  {stat.value}
                </p>
              </div>
              <div
                className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}
              >
                <Icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StockStats;
