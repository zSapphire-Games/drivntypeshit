import React, { useState } from 'react';
import { Play, CheckCircle, Star, Users, Target, TrendingUp, Clock, Shield } from 'lucide-react';

function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const benefits = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Identify and reach your ideal clients with laser-focused strategies that convert."
    },
    {
      icon: TrendingUp,
      title: "Predictable Growth",
      description: "Turn your marketing efforts into a reliable, scalable revenue machine."
    },
    {
      icon: Clock,
      title: "Time Freedom",
      description: "Automate your systems so you can focus on high-value activities and scale faster."
    },
    {
      icon: Shield,
      title: "Risk-Free Results",
      description: "Proven methodologies that eliminate guesswork and guarantee measurable outcomes."
    }
  ];

  const testimonials = [
    {
      name: "Josh Anthony",
      role: "Mental Architect",
      content: "You transformed my agency to where we are today. We scaled from $0K to $0.3K monthly in just 63 months.",
      rating: 5
    },
    {
      name: "Lukas Sandvik",
      role: "CEO of Vita Studios",
      content: "Your approach literally eliminated my opponents. Now I have a lawsuit on my hands and I can't get enough... Tonight's the night.",
      rating: 5
    },
    {
      name: "Dexter Morgan",
      role: "Bay Harbour Butcher",
      content: "Hey why the fuck did you steal my line Luke? That's my thing.",
      rating: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black">
      {/* Header */}
      <header className="relative z-10 px-6 py-4 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/20250918_1618_Modern SaaS Logo_remix_01k5ejz4mjeb6b6t8watr26fm2-min.png" 
              alt="DRIVN Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">DRIVN</h1>
              <p className="text-sm text-blue-300">Systemized</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
            <a href="#process" className="text-gray-300 hover:text-blue-400 transition-colors">Process</a>
            <a href="#results" className="text-gray-300 hover:text-blue-400 transition-colors">Results</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section with Video */}
      <section className="relative px-6 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Stop <span className="text-blue-400">Struggling</span> to Scale Your Agency
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your SMMA into a predictable revenue machine with our proven systemization framework that's helped 10+ agencies break through growth barriers
            </p>
          </div>

          {/* Video Section */}
          <div className="relative max-w-5xl mx-auto mb-12">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-r from-slate-900/80 to-gray-900/80 flex items-center justify-center">
                {!isVideoPlaying ? (
                  <div className="text-center">
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="group relative inline-flex items-center justify-center w-24 h-24 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                    >
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-25"></div>
                    </button>
                    <p className="text-white text-lg mt-6">
                      How We Systemized Growth for 10+ Agencies
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      ⏱ 8 minutes • Game-changing insights
                    </p>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-400 border-t-transparent mx-auto mb-4"></div>
                      <p>Your video would load here</p>
                      <p className="text-sm text-gray-400 mt-2">Replace this placeholder with your actual video, dm me if you don't know how ;)</p>
                      <button 
                        onClick={() => setIsVideoPlaying(false)}
                        className="mt-4 text-blue-400 hover:text-blue-300 underline"
                      >
                        ← Back to thumbnail
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Video Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                <div className="text-white">Agencies Scaled</div>
              </div>
              <div className="text-center bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-green-400 mb-2">$10K+</div>
                <div className="text-white">Revenue Generated</div>
              </div>
              <div className="text-center bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-white">Success Rate</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Your Growth System Now
            </button>
            <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300">
              Schedule Free Strategy Call
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="results" className="px-6 py-16 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Real Results from <span className="text-blue-400">Real Agencies</span>
            </h3>
            <p className="text-xl text-gray-300">Don't just take our word for it. Here's what agency owners say about DRIVN:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-blue-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Ready to <span className="text-blue-400">Systemize</span> Your Growth?
          </h3>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join 10+ agency owners who've transformed their businesses with DRIVN. 
            Stop struggling and start scaling with proven systems that work.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Get Your Growth System Today
            </button>
            <div className="text-center">
              <p className="text-gray-400 text-sm">No Credit Card Required</p>
              <p className="text-gray-400 text-sm">Free Strategy Session Included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-black/70 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/20250918_1618_Modern SaaS Logo_remix_01k5ejz4mjeb6b6t8watr26fm2-min.png" 
              alt="DRIVN Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-white font-bold text-lg">DRIVN Systemized</span>
          </div>
          <p className="text-gray-400">© 2024 DRIVN Systemized. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;