import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToggle } from "../hooks/useToggle";
import Button from "./ui/Button";

const Navbar = () => {
  const [isOpen, toggleMenu] = useToggle(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSignIn = () => {
    navigate("/signin");
  };

  const handleGetStarted = () => {
    navigate("/signup");
  };

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-gray-200/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <div
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#8458B3] to-[#6B46C1] rounded-xl flex items-center justify-center shadow-lg shadow-[#8458B3]/25 group-hover:shadow-[#8458B3]/50 group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <span className="text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                I
              </span>
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-[#8458B3] transition-colors duration-300">
              Invently
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2.5 text-gray-700 hover:text-[#8458B3] hover:bg-[#8458B3]/5 rounded-xl transition-all duration-300 font-medium text-sm relative group focus:outline-none focus:ring-2 focus:ring-[#8458B3]/20 focus:bg-[#8458B3]/5"
              >
                {link.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#8458B3] to-[#6B46C1] group-hover:w-full transition-all duration-500 ease-out" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSignIn}
              className="hover:bg-gray-100 hover:shadow-sm transition-all duration-300 focus:ring-2 focus:ring-[#8458B3]/20"
            >
              Sign In
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleGetStarted}
              className="shadow-lg shadow-[#8458B3]/25 hover:shadow-[#8458B3]/40 hover:shadow-xl transition-all duration-300 focus:ring-2 focus:ring-[#8458B3]/50"
            >
              Get Started
            </Button>
            <Button
              className="ml-1 hover:shadow-md transition-all duration-300 focus:ring-2 focus:ring-gray-400/50"
              variant="secondary"
              size="sm"
              onClick={handleDashboard}
            >
              Dashboard
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2.5 text-gray-700 hover:text-[#8458B3] hover:bg-[#8458B3]/5 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8458B3]/20"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isOpen ? "opacity-0 rotate-180 scale-75" : "opacity-100 rotate-0 scale-100"}`}
              />
              <X
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-75"}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-2 border-t border-gray-200/50 animate-in fade-in slide-in-from-top-4 duration-500 bg-white/95 backdrop-blur-xl rounded-b-2xl shadow-lg">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3.5 text-gray-700 hover:text-[#8458B3] hover:bg-[#8458B3]/5 rounded-xl transition-all duration-300 font-medium mx-2 animate-in fade-in slide-in-from-left-4"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            <div
              className="pt-4 space-y-3 px-4 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: "400ms" }}
            >
              <Button
                variant="ghost"
                fullWidth
                onClick={handleSignIn}
                className="focus:ring-2 focus:ring-[#8458B3]/20"
              >
                Sign In
              </Button>
              <Button
                variant="primary"
                fullWidth
                onClick={handleGetStarted}
                className="shadow-lg shadow-[#8458B3]/25 focus:ring-2 focus:ring-[#8458B3]/50"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
