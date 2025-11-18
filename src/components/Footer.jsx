import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#8458B3] to-[#6B46C1] rounded-xl flex items-center justify-center shadow-lg shadow-[#8458B3]/25">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                Invently
              </span>
            </div>
            <p className="text-gray-600 max-w-md mb-4">
              Modern inventory management solution for small businesses.
              <br />
              Track, manage, and grow your business with ease.
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Invently. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-gray-600 hover:text-[#8458B3] transition-colors duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-600 hover:text-[#8458B3] transition-colors duration-200"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-[#8458B3] transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-[#8458B3] transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#8458B3] hover:text-white transition-all duration-200 hover:shadow-lg hover:shadow-[#8458B3]/25"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#8458B3] hover:text-white transition-all duration-200 hover:shadow-lg hover:shadow-[#8458B3]/25"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#8458B3] hover:text-white transition-all duration-200 hover:shadow-lg hover:shadow-[#8458B3]/25"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@invently.com"
                className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#8458B3] hover:text-white transition-all duration-200 hover:shadow-lg hover:shadow-[#8458B3]/25"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
