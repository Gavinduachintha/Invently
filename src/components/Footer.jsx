import { Mail, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand & Contact */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <span className="text-xl font-bold text-white">Invently</span>
            </div>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:gavindu.al@gmail.com"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>gavindu.al@gmail.com</span>
              </a>
              <a
                href="https://github.com/Gavinduachintha"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>@Gavinduachintha</span>
              </a>
            </div>
          </div>

          {/* Simple Links */}
          <div className="flex gap-6 text-sm md:ml-auto">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 pt-6 border-t border-gray-800">
          <p className="text-sm text-gray-400">
            © 2025 Invently. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
