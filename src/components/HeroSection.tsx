import { Download, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const userAvatars = [
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face"
  ];

  return (
    <section className="bg-gradient-to-br from-infotruster-gray to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-infotruster-dark-blue mb-8 font-inter leading-tight">
            Understand Online Agreements in{" "}
            <span className="text-infotruster-light-blue">Seconds</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-inter leading-relaxed">
            Your privacy is in <span className="text-infotruster-dark-blue font-semibold">danger</span> when you choose to skip over online policies. Our extension demystifies and simplifies online agreements to protect <span className="text-infotruster-dark-blue font-semibold">you</span>.
          </p>
          
          <div className="flex flex-col items-center space-y-8">
            <button className="bg-infotruster-green text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2 shadow-lg font-inter">
              <Download className="w-5 h-5" />
              <span>Download For Free Today</span>
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <ArrowRight className="w-12 h-12 text-infotruster-green transform rotate-45" strokeWidth={3} />
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {userAvatars.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt={`User ${index + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                    />
                  ))}
                </div>
                <span className="text-gray-600 font-semibold font-inter">
                  Join 50+ users today!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
