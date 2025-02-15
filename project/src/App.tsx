import React from 'react';
import { Music, Code, Laptop, Download, Users, CheckCircle, ArrowRight, Star, Clock, Coffee, Globe, Phone, MapPin, Headphones, Play, Volume2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-red-700 via-red-800 to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598488035139-bdaa7543d5d4?auto=format&fit=crop&w=2000')] opacity-20 bg-cover bg-center"></div>
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Music className="w-8 h-8" />
            NepalVST
          </h1>
          <div className="hidden md:flex space-x-8">
            <a href="#plugins" className="hover:text-red-200 transition">Plugins</a>
            <a href="#features" className="hover:text-red-200 transition">Features</a>
            <a href="#testimonials" className="hover:text-red-200 transition">Reviews</a>
            <a href="#pricing" className="hover:text-red-200 transition">Pricing</a>
          </div>
          <button className="bg-white text-red-700 px-6 py-2 rounded-full font-semibold hover:bg-red-50 transition-all transform hover:scale-105">
            Try Demo
          </button>
        </nav>
        
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="md:w-2/3">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-red-500/30 text-white px-4 py-1 rounded-full text-sm">
                #1 Nepali VST Collection
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Authentic Nepali
              <span className="text-red-300"> Sound Library</span>
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Discover premium VST plugins featuring authentic Nepali instruments, including Madal, Sarangi, Bamboo Flute, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-red-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-all transform hover:scale-105 inline-flex items-center justify-center">
                Download Now <Download className="ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all transform hover:scale-105 inline-flex items-center justify-center">
                Listen Demos <Play className="ml-2" />
              </button>
            </div>
            <div className="mt-12 flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-red-300" />
                <span className="text-red-100">5K+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 text-red-300" />
                <span className="text-red-100">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-6 h-6 text-red-300" />
                <span className="text-red-100">Global Users</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard icon={<Music className="w-8 h-8 text-red-600" />} number="50+" label="Unique Instruments" />
            <StatCard icon={<Star className="w-8 h-8 text-red-600" />} number="4.9/5" label="User Rating" />
            <StatCard icon={<Download className="w-8 h-8 text-red-600" />} number="10K+" label="Downloads" />
            <StatCard icon={<Headphones className="w-8 h-8 text-red-600" />} number="24/7" label="Support" />
          </div>
        </div>
      </section>

      {/* Plugins Section */}
      <section id="plugins" className="py-20">
        <div className="container mx-auto px-6">
          <SectionTitle 
            subtitle="Our VST Plugins"
            title="Premium Nepali Sound Collection"
            description="Professional-grade VST plugins featuring authentic Nepali instruments recorded in high-quality studios."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <VSTCard 
              image="https://images.unsplash.com/photo-1461784180009-21121b2f204c?auto=format&fit=crop&w=800"
              title="Madal Master VST"
              description="Professional Madal samples with multiple articulations and playing styles."
              price="$49"
              format="VST3, AU, AAX"
              size="2.5 GB"
            />
            <VSTCard 
              image="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800"
              title="Sarangi Suite"
              description="Deeply sampled Sarangi with emotional expression control."
              price="$59"
              format="VST3, AU, AAX"
              size="3.2 GB"
            />
            <VSTCard 
              image="https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?auto=format&fit=crop&w=800"
              title="Nepal Flute Collection"
              description="Comprehensive collection of traditional Nepali flutes and wind instruments."
              price="$79"
              format="VST3, AU, AAX"
              size="4.1 GB"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionTitle 
            subtitle="Key Features"
            title="Professional Sound Design"
            description="Industry-standard features for professional music production"
          />
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <FeatureCard 
              icon={<Volume2 className="w-12 h-12 text-red-600" />}
              title="High-Quality Samples"
              description="24-bit/96kHz recordings of authentic instruments in professional studios."
            />
            <FeatureCard 
              icon={<Laptop className="w-12 h-12 text-red-600" />}
              title="DAW Integration"
              description="Seamless integration with all major Digital Audio Workstations."
            />
            <FeatureCard 
              icon={<Headphones className="w-12 h-12 text-red-600" />}
              title="Realistic Expression"
              description="Advanced articulation control for authentic performance."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <SectionTitle 
            subtitle="User Reviews"
            title="What Musicians Say"
            description="Join thousands of satisfied musicians using our VST plugins in their productions."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <TestimonialCard 
              name="Rajesh Hamal"
              role="Music Producer, Kathmandu"
              content="The authenticity of these VST plugins is incredible. The Madal samples are exactly what I needed for my fusion projects."
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400"
            />
            <TestimonialCard 
              name="Sarah Williams"
              role="Film Composer, Los Angeles"
              content="These Nepali instruments add a unique flavor to my film scores. The quality and attention to detail is outstanding."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionTitle 
            subtitle="Pricing Plans"
            title="Choose Your Collection"
            description="Flexible pricing options for musicians and producers."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <PricingCard 
              title="Starter Bundle"
              price="$99"
              features={[
                "3 Essential Instruments",
                "Basic Articulations",
                "Standard Support",
                "Free Updates"
              ]}
              buttonText="Buy Now"
              popular={false}
            />
            <PricingCard 
              title="Professional"
              price="$199"
              features={[
                "All 10 Instruments",
                "Full Articulations",
                "Priority Support",
                "Free Updates",
                "Additional Presets"
              ]}
              buttonText="Buy Now"
              popular={true}
            />
            <PricingCard 
              title="Studio"
              price="$299"
              features={[
                "Complete Collection",
                "Extended Articulations",
                "24/7 Support",
                "Lifetime Updates",
                "Custom Presets"
              ]}
              buttonText="Contact Us"
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-700 to-red-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Create?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-red-100">
            Download our VST plugins today and bring authentic Nepali sounds to your music.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-all transform hover:scale-105">
              Download Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all transform hover:scale-105">
              Try Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Music className="w-6 h-6" />
                NepalVST
              </h3>
              <p className="text-gray-400">Bringing authentic Nepali sounds to modern music production.</p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#plugins" className="hover:text-white transition">Plugins</a></li>
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#testimonials" className="hover:text-white transition">Reviews</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  support@nepalvst.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +977 1234567890
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Thamel, Kathmandu, Nepal
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe for updates on new VST releases and special offers.</p>
              <form className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NepalVST. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ subtitle, title, description }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <span className="text-red-600 font-semibold mb-2 inline-block">{subtitle}</span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StatCard({ icon, number, label }) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <div className="text-3xl font-bold text-gray-900 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-1">
      <div className="flex justify-center mb-4 bg-red-50 w-20 h-20 rounded-full items-center mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function VSTCard({ image, title, description, price, format, size }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">{format}</span>
          <span className="text-gray-600 text-sm flex items-center gap-1">
            <Download className="w-4 h-4" /> {size}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-red-600">{price}</span>
          <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-all transform hover:scale-105">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ name, role, content, image }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
      <div className="flex items-center mb-6">
        <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover mr-4" />
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-red-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic relative">
        <span className="text-4xl text-red-200 absolute -top-4 -left-2">"</span>
        {content}
        <span className="text-4xl text-red-200 absolute -bottom-4 -right-2">"</span>
      </p>
    </div>
  );
}

function PricingCard({ title, price, features, buttonText, popular }) {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 relative ${popular ? 'ring-2 ring-red-600 transform scale-105' : ''}`}>
      {popular && (
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
      <div className="text-center mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-600">/one-time</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-red-600" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
        popular 
          ? 'bg-red-600 text-white hover:bg-red-700' 
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
      }`}>
        {buttonText}
      </button>
    </div>
  );
}

export default App;