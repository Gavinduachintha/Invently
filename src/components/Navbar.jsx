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
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">I</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Invently</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" onClick={handleSignIn}>
              Sign In
            </Button>
            <Button variant="primary" onClick={handleGetStarted}>
              Get Started
            </Button>
            <Button variant="secondary" onClick={handleDashboard}>
              Dashboard
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-600 hover:text-emerald-600 transition-colors font-medium"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="ghost" fullWidth onClick={handleSignIn}>
                Sign In
              </Button>
              <Button variant="primary" fullWidth onClick={handleGetStarted}>
                Get Started
              </Button>
              <Button variant="secondary" fullWidth onClick={handleDashboard}>
                Dashboard
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
