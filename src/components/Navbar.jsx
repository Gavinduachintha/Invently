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
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-[#8458B3] rounded-xl flex items-center justify-center shadow-lg shadow-[#8458B3]/20 group-hover:shadow-[#8458B3]/40 transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-xl">I</span>
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Invently
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2.5 text-gray-700 hover:text-[#8458B3] hover:bg-gray-100 rounded-xl transition-all duration-200 font-medium text-sm relative group"
              >
                {link.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#8458B3] group-hover:w-1/2 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSignIn}
              className="hover:bg-gray-100"
            >
              Sign In
            </Button>
            <Button variant="primary" size="sm" onClick={handleGetStarted}>
              Get Started
            </Button>
            <Button
              className="ml-1"
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
            className="md:hidden p-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-2 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3.5 text-gray-700 hover:text-[#8458B3] hover:bg-gray-100 rounded-xl transition-all duration-200 font-medium"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-3 px-4">
              <Button variant="ghost" fullWidth onClick={handleSignIn}>
                Sign In
              </Button>
              <Button variant="primary" fullWidth onClick={handleGetStarted}>
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
