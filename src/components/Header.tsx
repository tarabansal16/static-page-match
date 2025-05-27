import { Download, ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-infotruster-blue rounded-md flex items-center justify-center relative">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-xs">!</span>
              </div>
            </div>
            <span className="text-xl font-semibold text-infotruster-blue font-inter">
              Infotruster
            </span>
          </div>
          
          <nav className="flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-infotruster-blue transition-colors font-inter">
              Home
            </a>
            <a 
              href="mailto:avanitarabansal@gmail.com" 
              className="text-gray-700 hover:text-infotruster-blue transition-colors font-inter"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
