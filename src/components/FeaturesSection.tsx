
import { Search, AlertTriangle, Award, Shield } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "Policy Summarizer",
      description: "Get easy-to-view, concise detailed summaries of the policies without confusing legal jargon."
    },
    {
      icon: AlertTriangle,
      title: "Outlines Risks",
      description: "Quickly view the specific risks of agreeing to the privacy policy."
    },
    {
      icon: Award,
      title: "Grade Rating",
      description: "Receive a grade rating for each privacy policy to determine how safe it is to agree to."
    },
    {
      icon: Shield,
      title: "Security Buddy",
      description: "Get instructions on actions you can take to maximize your security and data protection while still using a site."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-infotruster-dark-blue to-infotruster-blue py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-inter">
            Everything You Need Before Clicking Agree
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-infotruster-light-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-infotruster-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-infotruster-dark-blue mb-2 font-inter">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 font-inter leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <div className="bg-gray-100 rounded-xl p-4 mb-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-4 bg-white rounded-md px-3 py-1 text-sm text-gray-600">
                    facebook.com/privacy-policy/
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="space-y-2 mt-4">
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                    <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                    <div className="h-3 bg-gray-100 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-infotruster-blue rounded-xl p-4 text-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold font-inter">Infotruster Analysis</span>
                  <div className="bg-white/20 rounded-md px-2 py-1 text-sm">
                    Get Summary
                  </div>
                </div>
                <div className="text-sm opacity-90 font-inter">
                  This privacy policy has moderate risks. Click to see detailed analysis and recommendations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
