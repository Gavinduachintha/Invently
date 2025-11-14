import { Mail, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand & Description */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-[#8458B3] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <span className="text-xl font-bold text-white">Invently</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
              Simple inventory management for small businesses.
            </p>
          </div>

          {/* Contact & Social */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:gavindu.al@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>gavindu.al@gmail.com</span>
            </a>
            <a
              href="https://github.com/Gavinduachintha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Invently. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
