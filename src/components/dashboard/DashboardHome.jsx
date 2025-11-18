import { Package, AlertTriangle, TrendingUp, CheckCircle } from "lucide-react";
import Card from "../../components/ui/Card";
import TotalStockValueCard from "./stock/TotalStockValueCard";
const DashboardHome = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-br from-[#8458B3] to-[#6B46C1] rounded-xl shadow-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome to Invently</h1>
        <p className="text-white/80">
          Your inventory management dashboard. Track products, monitor stock
          levels, and manage your business efficiently.
        </p>
      </div>

      {/* Tips for Your Business */}
      <Card title="Getting Started" subtitle="Quick tips to help you begin">
        <div className="space-y-3">
          <div className="p-3 bg-[#d0bdf4]/30 border border-[#d0bdf4] rounded-lg">
            <div className="flex items-start gap-2">
              <Package className="w-5 h-5 text-[#8458B3] mt-0.5" />
              <div>
                <p className="font-medium text-[#8458B3] text-sm">
                  Add Your Products
                </p>
                <p className="text-xs text-gray-700 mt-1">
                  Start by adding your first products to the inventory
                </p>
              </div>
            </div>
          </div>
          <div className="p-3 bg-[#a0d2eb]/20 border border-[#a0d2eb]/50 rounded-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-[#8458B3] mt-0.5" />
              <div>
                <p className="font-medium text-[#8458B3] text-sm">
                  Monitor Stock Levels
                </p>
                <p className="text-xs text-gray-700 mt-1">
                  Keep track of your inventory and get alerts for low stock
                  items
                </p>
              </div>
            </div>
          </div>
          <div className="p-3 bg-[#e5eaf5] border border-[#d0bdf4]/50 rounded-lg">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-[#8458B3] mt-0.5" />
              <div>
                <p className="font-medium text-[#8458B3] text-sm">
                  Manage Suppliers
                </p>
                <p className="text-xs text-gray-700 mt-1">
                  Add and organize your suppliers for better inventory
                  management
                </p>
              </div>
            </div>
          </div>
          <div className="p-3 bg-[#d0bdf4]/20 border border-[#8458B3]/30 rounded-lg">
            <div className="flex items-start gap-2">
              <TrendingUp className="w-5 h-5 text-[#8458B3] mt-0.5" />
              <div>
                <p className="font-medium text-[#8458B3] text-sm">
                  Track Your Business Growth
                </p>
                <p className="text-xs text-gray-700 mt-1">
                  Use the stock check view to see your total inventory value and
                  trends
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <TotalStockValueCard totalValue={125} totalProducts={10} loading={false} />
    </div>
  );
};

export default DashboardHome;
