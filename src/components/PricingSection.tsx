
import { Check } from "lucide-react";

const PricingSection = () => {
  const plan = {
    name: "Free",
    price: "Free",
    subtitle: "Complete Package",
    features: [
      "Broad summary",
      "Outlines user's rights", 
      "Outlines main risks of agreeing",
      "Highlights specific risks",
      "Grade-rating system of agreements",
      "Actionable steps to minimize data loss",
      "More frequent updates",
      "Great accuracy",
      "Upgrade anytime"
    ],
    buttonText: "Download",
    buttonStyle: "bg-infotruster-light-blue hover:bg-blue-500"
  };

  return (
    <section className="bg-gradient-to-br from-infotruster-dark-blue to-infotruster-blue py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-inter">
            Pricing
          </h2>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform max-w-md">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold text-infotruster-light-blue mb-2 font-inter">
                {plan.name}
              </h3>
              <p className="text-infotruster-light-blue font-semibold font-inter">
                {plan.subtitle}
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-infotruster-light-blue flex-shrink-0" />
                  <span className="text-gray-700 font-inter">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className={`w-full ${plan.buttonStyle} text-white py-4 rounded-full text-lg font-semibold transition-colors font-inter`}>
              {plan.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
