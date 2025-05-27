
const InfoSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-infotruster-dark-blue font-inter">
              "I have <span className="text-infotruster-blue">read</span> and accepted the terms and conditions"
            </h3>
            <p className="text-lg font-inter">
              is the <span className="text-infotruster-dark-blue font-bold">BIGGEST LIE</span> on the internet.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-infotruster-dark-blue font-inter">
              <span className="text-infotruster-blue">Your data</span>, your <span className="text-infotruster-blue">rules</span>.
            </h3>
            <p className="text-lg font-inter">
              Take control with our <span className="text-infotruster-blue font-semibold">privacy</span> management tool.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-infotruster-dark-blue font-inter">
              Our free extension gives you a clear summary to make online agreements
            </h3>
            <p className="text-lg font-inter">
              <span className="text-infotruster-blue font-bold">as transparent as possible</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
