
import { Download, Code, Key, Chrome } from "lucide-react";

const ExtensionAccessSection = () => {
  const steps = [
    {
      icon: Download,
      title: "Clone Repository",
      description: "Clone the InfoTruster extension repository to your local machine"
    },
    {
      icon: Chrome,
      title: "Enable Developer Mode",
      description: "Go to chrome://extensions/ and enable 'Developer mode' in the top right"
    },
    {
      icon: Code,
      title: "Load Extension",
      description: "Click 'Load unpacked' and select the extension directory"
    },
    {
      icon: Key,
      title: "Add API Key",
      description: "Open popup.js and replace the API key with your HuggingFace token"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-infotruster-dark-blue mb-6 font-inter">
            How to Access the Extension
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Follow these simple steps to install and set up the InfoTruster Chrome extension
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-infotruster-light-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-infotruster-blue" />
              </div>
              <div className="bg-infotruster-blue text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-semibold">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-infotruster-dark-blue mb-2 font-inter">
                {step.title}
              </h3>
              <p className="text-gray-600 font-inter text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-infotruster-gray rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-infotruster-dark-blue mb-6 font-inter text-center">
            Getting Your HuggingFace API Key
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-infotruster-blue mb-4 font-inter">
                Step 1: Create Account
              </h4>
              <ul className="space-y-2 text-gray-700 font-inter">
                <li>• Create a HuggingFace account at huggingface.co/join</li>
                <li>• Go to your profile settings (tokens section)</li>
                <li>• Click "New token" and create a token with read access</li>
                <li>• Copy your token</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-infotruster-blue mb-4 font-inter">
                Step 2: Add to Extension
              </h4>
              <ul className="space-y-2 text-gray-700 font-inter">
                <li>• Open popup.js in your extension folder</li>
                <li>• Find the analyzePrivacyPolicy function</li>
                <li>• Replace the existing API key with your token</li>
                <li>• Save the file and reload the extension</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtensionAccessSection;
