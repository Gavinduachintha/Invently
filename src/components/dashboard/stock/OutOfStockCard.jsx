import { XCircle, Package } from "lucide-react";

const OutOfStockCard = ({ outOfStockCount, loading, onClick }) => {
  if (loading) {
    return (
      <div className="bg-gradient-to-br from-[#EF5350] to-[#E53935] rounded-xl shadow-lg p-6 animate-pulse space-y-4">
        <div className="h-4 bg-white/20 rounded"></div>
        <div className="h-4 bg-white/20 rounded w-3/4"></div>
        <div className="h-4 bg-white/20 rounded w-1/2"></div>
      </div>
    );
  }

  return (
    <div
      className="bg-gradient-to-br from-[#EF5350] to-[#E53935] rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-white cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <XCircle className="w-5 h-5 text-white/80" />
            <p className="text-sm text-white/80 font-medium">Out of Stock</p>
          </div>
          <h2 className="text-4xl font-bold mb-1">{outOfStockCount}</h2>
          <p className="text-white/70 text-sm">Products completely sold out</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
          <XCircle className="w-8 h-8 text-white" />
        </div>
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-white/20">
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4 text-white/70" />
          <span className="text-sm text-white/90">
            <span className="font-semibold">{outOfStockCount} products</span>{" "}
            sold out
          </span>
        </div>
      </div>
    </div>
  );
};

export default OutOfStockCard;
