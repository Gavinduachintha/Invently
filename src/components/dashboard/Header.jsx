import { Bell, Search, User } from "lucide-react";

const Header = ({ sidebarOpen, title = "Dashboard", currentUser }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Title */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          <p className="text-sm text-gray-600 mt-0.5">Welcome back, {currentUser?.name}!</p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-50 rounded-lg px-4 py-2 w-64">
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-sm text-gray-700 w-full"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile */}
          <button className="flex items-center gap-3 hover:bg-gray-50 rounded-lg px-3 py-2 transition-colors">
            <div className="w-9 h-9 bg-[#8458B3] rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium text-gray-900">{currentUser?.name}</p>
              <p className="text-xs text-gray-600">Admin</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
