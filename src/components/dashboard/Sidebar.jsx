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
} from "lucide-react";
import { Account, Client } from "appwrite";
import { useNavigate } from "react-router-dom";
const account = new Account(Client);
const client = new Client()
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT);

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
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

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
        className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-50 transition-all duration-300 ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Logo Section */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          {isOpen ? (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#8458B3] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <span className="font-bold text-gray-900 text-lg">Invently</span>
            </div>
          ) : (
            <div className="w-8 h-8 bg-[#8458B3] rounded-lg flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-sm">I</span>
            </div>
          )}
        </div>

        {/* Toggle Button */}
        <button
          onClick={onToggle}
          className="absolute -right-3 top-20 bg-white border border-gray-200 rounded-full p-1.5 shadow-sm hover:bg-gray-50 transition-colors hidden lg:block"
        >
          {isOpen ? (
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-600" />
          )}
        </button>

        {/* Menu Items */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-[#e5eaf5] text-[#8458B3]"
                    : "text-gray-700 hover:bg-gray-50"
                } ${!isOpen && "justify-center"}`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {isOpen && <span className="font-medium">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-black hover:bg-red-400 transition-colors ${
              !isOpen && "justify-center"
            }`}
          >
            <LogOut className="w-5 h-5 flex-shrink-0 " />
            {isOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button
        onClick={onToggle}
        className="fixed top-4 left-4 z-50 lg:hidden bg-white p-2 rounded-lg shadow-md border border-gray-200"
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
