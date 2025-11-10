import {
  Package,
  DollarSign,
  AlertTriangle,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  Plus,
} from "lucide-react";
import StatCard from "../../components/ui/StatCard";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

const DashboardHome = () => {
  const stats = [
    {
      title: "Today's Sales",
      value: "$342",
      change: "+15.3%",
      icon: <DollarSign className="w-6 h-6" />,
      color: "emerald",
    },
    {
      title: "Products in Stock",
      value: "156",
      change: "+8",
      icon: <Package className="w-6 h-6" />,
      color: "blue",
    },
    {
      title: "Low Stock Items",
      value: "8",
      change: "Needs attention",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "orange",
    },
    {
      title: "This Week",
      value: "$1,840",
      change: "+12.5%",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "teal",
    },
  ];

  const todaySales = [
    {
      id: "#1",
      product: "Rice - 5kg Bag",
      quantity: "3",
      time: "2 hours ago",
      amount: "$45",
    },
    {
      id: "#2",
      product: "Cooking Oil - 1L",
      quantity: "5",
      time: "3 hours ago",
      amount: "$75",
    },
    {
      id: "#3",
      product: "Sugar - 2kg",
      quantity: "2",
      time: "5 hours ago",
      amount: "$20",
    },
    {
      id: "#4",
      product: "Milk Powder - 400g",
      quantity: "4",
      time: "6 hours ago",
      amount: "$56",
    },
  ];

  const lowStockProducts = [
    { name: "Rice - 5kg Bag", stock: 3, reorder: 20, status: "Critical" },
    { name: "Cooking Oil - 1L", stock: 8, reorder: 15, status: "Low" },
    { name: "Laundry Soap", stock: 5, reorder: 12, status: "Critical" },
    { name: "Toothpaste", stock: 10, reorder: 20, status: "Low" },
  ];

  const quickActions = [
    { label: "Add Sale", icon: Plus, color: "emerald" },
    { label: "Add Product", icon: Package, color: "blue" },
    { label: "Check Stock", icon: AlertTriangle, color: "orange" },
    { label: "View Reports", icon: TrendingUp, color: "teal" },
  ];

  return (
    <div className="space-y-6">
      {/* Quick Actions Bar */}
      <Card>
        <div className="flex flex-wrap gap-3">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                className="flex items-center gap-2 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors flex-1 min-w-[150px]"
              >
                <div
                  className={`w-8 h-8 rounded-lg ${
                    action.color === "emerald"
                      ? "bg-emerald-100 text-emerald-600"
                      : action.color === "blue"
                        ? "bg-blue-100 text-blue-600"
                        : action.color === "orange"
                          ? "bg-orange-100 text-orange-600"
                          : "bg-teal-100 text-teal-600"
                  } flex items-center justify-center`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-medium text-gray-700">
                  {action.label}
                </span>
              </button>
            );
          })}
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Sales - Takes 2 columns */}
        <div className="lg:col-span-2">
          <Card
            title="Today's Sales"
            subtitle="Recent transactions"
            action={
              <Button variant="ghost" size="sm">
                View All
              </Button>
            }
          >
            <div className="space-y-3">
              {todaySales.map((sale) => (
                <div
                  key={sale.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <p className="font-medium text-gray-900">
                        {sale.product}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-sm text-gray-600">
                        Qty: {sale.quantity}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {sale.time}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-emerald-600">{sale.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Low Stock Alert - Takes 1 column */}
        <Card
          title="Stock Alert"
          subtitle="Items running low"
          action={
            <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">
              {lowStockProducts.length} items
            </span>
          }
        >
          <div className="space-y-3">
            {lowStockProducts.map((product, index) => (
              <div
                key={index}
                className="p-3 bg-red-50 border border-red-100 rounded-lg"
              >
                <div className="flex items-start justify-between mb-2">
                  <p className="font-medium text-gray-900 text-sm">
                    {product.name}
                  </p>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      product.status === "Critical"
                        ? "bg-red-200 text-red-800"
                        : "bg-orange-200 text-orange-800"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    Only {product.stock} left
                  </span>
                  <span className="text-gray-500">
                    Reorder: {product.reorder}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Business Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Quick Stats" subtitle="This week's overview">
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-gray-600">Total Sales</span>
              <span className="font-bold text-gray-900">$1,840</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-gray-600">Items Sold</span>
              <span className="font-bold text-gray-900">124</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-gray-600">Average Sale</span>
              <span className="font-bold text-gray-900">$14.84</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-gray-600">Best Selling</span>
              <span className="font-bold text-emerald-600">Rice - 5kg</span>
            </div>
          </div>
        </Card>

        <Card title="Tips for Your Business" subtitle="Helpful suggestions">
          <div className="space-y-3">
            <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-lg">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
                <div>
                  <p className="font-medium text-emerald-900 text-sm">
                    Restock Low Items
                  </p>
                  <p className="text-xs text-emerald-700 mt-1">
                    8 products need restocking soon
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
              <div className="flex items-start gap-2">
                <Package className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-900 text-sm">
                    Update Prices
                  </p>
                  <p className="text-xs text-blue-700 mt-1">
                    Check supplier prices for better margins
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3 bg-orange-50 border border-orange-100 rounded-lg">
              <div className="flex items-start gap-2">
                <TrendingUp className="w-5 h-5 text-orange-600 mt-0.5" />
                <div>
                  <p className="font-medium text-orange-900 text-sm">
                    Sales Growing!
                  </p>
                  <p className="text-xs text-orange-700 mt-1">
                    Your sales are up 15% from last week
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
