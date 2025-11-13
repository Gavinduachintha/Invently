import { useState } from "react";
import { Package } from "lucide-react";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import DashboardHome from "../components/dashboard/DashboardHome";
import ProductsView from "../components/dashboard/ProductsView";
import SuppliersView from "../components/dashboard/SuppliersView";
import SettingsView from "../components/dashboard/SettingsView";
import StockCheckView from "../components/dashboard/StockCheckView";

const Dashboard = () => {
  const [currentView, setCurrentView] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <DashboardHome />;
      case "products":
        return <ProductsView />;
      case "sales":
        return (
          <PlaceholderView
            title="Sales"
            description="Record and track your daily sales"
          />
        );
      case "stock":
        return <StockCheckView />;
      case "suppliers":
        return <SuppliersView />;
      case "settings":
        return <SettingsView />;
      default:
        return <DashboardHome />;
    }
  };

  const getPageTitle = () => {
    const titles = {
      dashboard: "Dashboard",
      products: "My Products",
      sales: "Sales",
      stock: "Stock Check",
      suppliers: "Suppliers",
      settings: "Settings",
    };
    return titles[currentView] || "Dashboard";
  };

  return (
    <div className="min-h-screen bg-[#e5eaf5]">
      <Sidebar
        currentPage={currentView}
        onNavigate={setCurrentView}
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
      />

      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "lg:ml-64" : "lg:ml-20"
        } ml-0`}
      >
        <Header sidebarOpen={sidebarOpen} title={getPageTitle()} />

        <main className="p-6">{renderView()}</main>
      </div>
    </div>
  );
};

// Placeholder component for unbuilt views
const PlaceholderView = ({ title, description }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12">
    <div className="text-center">
      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Package className="w-8 h-8 text-emerald-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-sm text-gray-500">Coming soon for your business!</p>
    </div>
  </div>
);

export default Dashboard;
