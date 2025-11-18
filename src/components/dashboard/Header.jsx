import { Bell, Search, User, ChevronDown } from "lucide-react";

const Header = ({ sidebarOpen, title = "Dashboard", currentUser }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/60 sticky top-0 z-30 shadow-sm">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Title & Greeting */}
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">
              {title}
            </h1>
            <p className="text-xs text-gray-500 mt-0.5">
              Welcome back,{" "}
              <span className="font-medium text-gray-700">
                {currentUser?.name}
              </span>
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-50/80 border border-gray-200/80 rounded-xl px-4 py-2 w-72 focus-within:border-[#8458B3] focus-within:bg-white focus-within:shadow-md transition-all duration-200">
            <Search className="w-4 h-4 text-gray-400 mr-2.5" />
            <input
              type="text"
              placeholder="Search products, orders..."
              className="bg-transparent border-none outline-none text-sm text-gray-700 placeholder:text-gray-400 w-full"
            />
            <kbd className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono text-gray-500 bg-gray-100 border border-gray-200 rounded">
              ⌘K
            </kbd>
          </div>

          {/* Search Icon for Mobile */}
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <Search className="w-5 h-5 text-gray-600" />
          </button>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors group">
            <Bell className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white animate-pulse"></span>
          </button>

          {/* Divider */}
          <div className="hidden sm:block w-px h-8 bg-gray-200"></div>

          {/* Profile Dropdown */}
          <button className="flex items-center gap-2.5 hover:bg-gray-50 rounded-xl pl-2 pr-3 py-1.5 transition-all duration-200 group">
            <div className="w-9 h-9 bg-gradient-to-br from-[#8458B3] to-[#9D6FCC] rounded-full flex items-center justify-center ring-2 ring-purple-100 group-hover:ring-purple-200 transition-all">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="hidden lg:block text-left">
              <p className="text-sm font-semibold text-gray-900 leading-tight">
                {currentUser?.name}
              </p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
            <ChevronDown className="hidden lg:block w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
