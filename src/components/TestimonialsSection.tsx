
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "The concise summaries saved me so much time and spared me from all the confusing legal jargon. It's a game-changer for anyone who wants to stay informed without the hassle.",
      author: "Yijun Xue",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      rating: 5
    },
    {
      text: "The Grade Rating feature is very practical. It gives a straightforward safety score for each privacy policy, helping me make informed decisions.",
      author: "Brandon Clifton", 
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      rating: 5
    },
    {
      text: "The Outlines Risks feature is fantastic! It quickly shows the specific risks, making it simple to understand what I'm agreeing to. Highly recommend!",
      author: "Channing Lee",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face", 
      rating: 5
    }
  ];

  return (
    <section className="bg-infotruster-gray py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-infotruster-blue mb-6 font-inter">
            Loved By Our Users
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            People love our extension because it's so easy to use! Infotruster prevents internet users and business owners from losing valuable data.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-infotruster-green fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 font-inter leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-infotruster-blue font-semibold font-inter">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
