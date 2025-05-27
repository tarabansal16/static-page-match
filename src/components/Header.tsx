
import { Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-infotruster-blue rounded-md flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-infotruster-blue font-inter">
              Infotruster
            </span>
          </div>
          
          <nav className="flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-infotruster-blue transition-colors font-inter">
              Home
            </a>
            <a href="#contact" className="text-gray-700 hover:text-infotruster-blue transition-colors font-inter">
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
