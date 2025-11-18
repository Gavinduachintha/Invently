import { Package, AlertTriangle, TrendingUp, CheckCircle } from "lucide-react";
import Card from "../../components/ui/Card";
import TotalStockValueCard from "./stock/TotalStockValueCard";
import TotalStockAmount from "./stock/TotalStockAmount";
import LowStockAlertCard from "./stock/LowStockAlertCard";
import OutOfStockCard from "./stock/OutOfStockCard";
import DeadStockCard from "./stock/DeadStockCard";

const DashboardHome = () => {
  // Dummy handlers for card clicks
  const handleLowStockClick = () => {
    console.log("Navigate to low stock items");
    // TODO: Navigate to filtered stock view
  };

  const handleOutOfStockClick = () => {
    console.log("Navigate to out of stock items");
    // TODO: Navigate to filtered stock view
  };

  const handleDeadStockClick = () => {
    console.log("Navigate to dead/slow-moving stock");
    // TODO: Navigate to filtered stock view
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TotalStockValueCard
          totalValue={125000}
          totalProducts={45}
          loading={false}
        />
        <TotalStockAmount
          totalQuantity={2450}
          totalProducts={45}
          loading={false}
        />
      </div>

      {/* Stock Alerts Section */}
      <div>
        {/* <h2 className="text-xl font-bold text-gray-900 mb-4">
          Stock Alerts & Insights
        </h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <LowStockAlertCard
            lowStockCount={8}
            loading={false}
            onClick={handleLowStockClick}
          />
          <OutOfStockCard
            outOfStockCount={3}
            loading={false}
            onClick={handleOutOfStockClick}
          />
          <DeadStockCard
            deadStockValue={85000}
            deadStockCount={12}
            currency="$"
            loading={false}
            onClick={handleDeadStockClick}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
