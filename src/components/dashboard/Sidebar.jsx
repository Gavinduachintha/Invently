import {
  Menu,
  X,
  Home,
  Package,
  ShoppingCart,
  BarChart3,
  Users,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  SidebarClose,
  SidebarOpen,
} from "lucide-react";
import { Account, Client } from "appwrite";
import { useNavigate } from "react-router-dom";
const client = new Client()
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT);
const account = new Account(client);

const Sidebar = ({ currentPage, onNavigate, isOpen, onToggle }) => {
  const navigate = useNavigate();

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "products", label: "My Products", icon: Package },
    { id: "sales", label: "Sales", icon: ShoppingCart },
    { id: "stock", label: "Stock Check", icon: BarChart3 },
    { id: "suppliers", label: "Suppliers", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      navigate("/signin");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  const navigateToHome = () => {
    navigate("/");
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-purple-600/10 border-gray-200 z-50 transition-all duration-300 ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Logo Section */}
        <div className="h-16 flex items-center justify-between px-4  border-red-200">
          {isOpen ? (
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-[#8458B3] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm" >I</span>
              </div>
              <span className="font-semibold text-gray-900 text-lg">
                Invently
              </span>
            </div>
          ) : (
            <div className="w-9 h-9 bg-[#8458B3] rounded-lg flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-sm">I</span>
            </div>
          )}
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-1">
          {/* Toggle Button */}
          <button
            onClick={onToggle}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors relative text-gray-700 hover:bg-gray-100 ${
              !isOpen && "justify-center"
            }`}
          >
            {isOpen ? (
              <SidebarClose className="w-5 h-5 flex-shrink-0" />
            ) : (
              <SidebarOpen className="w-5 h-5 flex-shrink-0" />
            )}
          </button>

          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors relative ${
                  isActive
                    ? "bg-[#8458B3] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                } ${!isOpen && "justify-center"}`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {isOpen && (
                  <span className="font-medium text-sm">{item.label}</span>
                )}
              </button>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors ${
              !isOpen && "justify-center"
            }`}
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {isOpen && <span className="font-medium text-sm">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button
        onClick={onToggle}
        className="fixed top-4 left-4 z-50 lg:hidden bg-white p-2 rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-700" />
        ) : (
          <Menu className="w-6 h-6 text-gray-700" />
        )}
      </button>
    </>
  );
};

export default Sidebar;
