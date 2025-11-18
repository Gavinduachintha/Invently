import { Package, Boxes, BarChart3 } from "lucide-react";

const TotalStockAmount = ({ totalQuantity, totalProducts, loading }) => {
  if (loading) {
    return (
      <div className="bg-gradient-to-br from-[#a0d2eb] to-[#6B9DD9] rounded-xl shadow-lg p-6 animate-pulse space-y-4">
        <div className="h-4 bg-white/20 rounded"></div>
        <div className="h-4 bg-white/20 rounded w-3/4"></div>
        <div className="h-4 bg-white/20 rounded w-1/2"></div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[#a0d2eb] to-[#6B9DD9] rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-white">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Boxes className="w-5 h-5 text-white/80" />
            <p className="text-sm text-white/80 font-medium">
              Total Stock Quantity
            </p>
          </div>
          <h2 className="text-4xl font-bold mb-1">
            {totalQuantity.toLocaleString("en-US")}
          </h2>
          <p className="text-white/70 text-sm">Total items in inventory</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
          <BarChart3 className="w-8 h-8 text-white" />
        </div>
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-white/20">
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4 text-white/70" />
          <span className="text-sm text-white/90">
            <span className="font-semibold">{totalProducts}</span> products
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Boxes className="w-4 h-4 text-white/70" />
          <span className="text-sm text-white/90">
            Avg:{" "}
            {totalProducts > 0
              ? Math.round(totalQuantity / totalProducts).toLocaleString(
                  "en-US"
                )
              : "0"}{" "}
            per product
          </span>
        </div>
      </div>
    </div>
  );
};

export default TotalStockAmount;
