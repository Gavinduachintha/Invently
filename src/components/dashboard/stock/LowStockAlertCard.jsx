import { AlertTriangle, Package } from "lucide-react";

const LowStockAlertCard = ({ lowStockCount, loading, onClick }) => {
  if (loading) {
    return (
      <div className="bg-gradient-to-br from-[#FFA726] to-[#FB8C00] rounded-xl shadow-lg p-6 animate-pulse space-y-4">
        <div className="h-4 bg-white/20 rounded"></div>
        <div className="h-4 bg-white/20 rounded w-3/4"></div>
        <div className="h-4 bg-white/20 rounded w-1/2"></div>
      </div>
    );
  }

  return (
    <div
      className="bg-gradient-to-br from-[#FFA726] to-[#FB8C00] rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-white cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-white/80" />
            <p className="text-sm text-white/80 font-medium">
              Low Stock Alerts
            </p>
          </div>
          <h2 className="text-4xl font-bold mb-1">{lowStockCount}</h2>
          <p className="text-white/70 text-sm">Items below reorder point</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
          <AlertTriangle className="w-8 h-8 text-white" />
        </div>
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-white/20">
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4 text-white/70" />
          <span className="text-sm text-white/90">
            <span className="font-semibold">{lowStockCount} items</span> need
            reordering
          </span>
        </div>
      </div>
    </div>
  );
};

export default LowStockAlertCard;
