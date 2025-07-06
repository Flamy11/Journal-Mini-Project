import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { BarChart3, TrendingUp, PieChart, Target, Users, Shield, ArrowRight, Star, Quote, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react';

const Landing = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive trading analytics with detailed performance metrics and insights."
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking", 
      description: "Track your trading performance over time with detailed charts and statistics."
    },
    {
      icon: PieChart,
      title: "Portfolio Management",
      description: "Manage your trading portfolio with real-time updates and position tracking."
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Set and track your trading goals with our intuitive goal management system."
    },
    {
      icon: Users,
      title: "Community Features",
      description: "Connect with other traders and share insights in our trading community."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your trading data is encrypted and stored securely with enterprise-grade security."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Day Trader",
      content: "LogMyTrades has completely transformed how I analyze my trading performance. The insights I get help me make better decisions every day.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Swing Trader", 
      content: "The analytics are incredibly detailed and the interface is so intuitive. I've improved my win rate by 15% since using this platform.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emma Rodriguez",
      role: "Options Trader",
      content: "Finally, a trading journal that understands what traders actually need. The reporting features are outstanding.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Kim",
      role: "Forex Trader",
      content: "I've tried many trading journals, but LogMyTrades is by far the most comprehensive. It's become an essential part of my trading routine.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Thompson",
      role: "Crypto Trader",
      content: "The portfolio tracking and performance analysis have helped me identify my strengths and weaknesses as a trader.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "James Wilson",
      role: "Institutional Trader",
      content: "Professional-grade analytics that scale with our trading operation. Excellent platform for serious traders.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const firstRowTestimonials = testimonials.slice(0, 3);
  const secondRowTestimonials = testimonials.slice(3, 6);

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: true
  });

  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = () => {
      emblaApi.scrollNext();
    };

    const intervalId = setInterval(autoScroll, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(intervalId);
  }, [emblaApi]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img className="h-12 w-16 sm:h-15 sm:w-20" src="/Logo-1.png" alt="LogMyTrades" />
              <span className="text-lg sm:text-xl font-bold text-gray-900 ml-1 sm:ml-2">LogMyTrades</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-primary transition-colors">Features</button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-primary transition-colors">Reviews</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors">About</button>
              <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">Contact</Link>
              <Link to="/login" className="text-gray-700 hover:text-primary transition-colors">Login</Link>
              <Link to="/signup">
                <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-primary p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors w-full text-left"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('reviews')} 
                  className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors w-full text-left"
                >
                  Reviews
                </button>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors w-full text-left"
                >
                  About
                </button>
                <Link 
                  to="/contact" 
                  className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  to="/login" 
                  className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <div className="px-3 py-2">
                  <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="bg-primary hover:bg-primary/90 w-full">Get Started</Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Track Your Trading
            <span className="text-primary block">Performance</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            The most comprehensive trading journal and analytics platform. 
            Track, analyze, and improve your trading performance with advanced insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link to="/signup">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Trade Journal Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Trading Journal
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Record past trading habits with our notes
                management system. Track and review every trade,
                no matter how old. All entries and exits are displayed
                on a TradingView chart with drawing and indicator 
                capabilities. Use our trading diary to document thoughts,
                observations, and lessons from each trade.
              </p>
              <div className="mt-8">
                <Link to="/signup">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                    Start Journaling
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
                    <img src="tradejournalImage.jpg" width={"100%"} height={"100%"} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Track Your Trades
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Our platform provides comprehensive tools to analyze your trading performance and make data-driven decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm sm:text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Reviews Section */}
      <section id="reviews" className="py-12 sm:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Traders Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Join thousands of successful traders who trust LogMyTrades
            </p>
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            {/* First Row - Scrolling Left to Right */}
            <div className="overflow-hidden">
              <div className="flex animate-[scroll-left_30s_linear_infinite] hover:[animation-play-state:paused]">
                {[...firstRowTestimonials, ...firstRowTestimonials, ...firstRowTestimonials].map((testimonial, index) => (
                  <div key={index} className="flex-[0_0_280px] sm:flex-[0_0_350px] min-w-0 px-2 sm:px-3">
                    <Card className="relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center mb-3 sm:mb-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold mr-3 sm:mr-4 text-sm sm:text-base">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                            <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
                          </div>
                        </div>
                        <div className="flex items-center mb-2 sm:mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <Quote className="h-4 w-4 sm:h-6 sm:w-6 text-primary/20 mb-2" />
                        <p className="text-gray-700 italic text-sm sm:text-base">"{testimonial.content}"</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Scrolling Right to Left */}
            <div className="overflow-hidden">
              <div className="flex animate-[scroll-right_30s_linear_infinite] hover:[animation-play-state:paused]">
                {[...secondRowTestimonials, ...secondRowTestimonials, ...secondRowTestimonials].map((testimonial, index) => (
                  <div key={index} className="flex-[0_0_280px] sm:flex-[0_0_350px] min-w-0 px-2 sm:px-3">
                    <Card className="relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center mb-3 sm:mb-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold mr-3 sm:mr-4 text-sm sm:text-base">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                            <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
                          </div>
                        </div>
                        <div className="flex items-center mb-2 sm:mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <Quote className="h-4 w-4 sm:h-6 sm:w-6 text-primary/20 mb-2" />
                        <p className="text-gray-700 italic text-sm sm:text-base">"{testimonial.content}"</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Improve Your Trading?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join thousands of traders who use LogMyTrades to track and improve their performance.
          </p>
          <Link to="/signup">
            <Button size="lg" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto max-w-xs mx-auto">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <div className="flex items-center mb-4">
                <img className="h-6 w-9 sm:h-8 sm:w-12" src="/Logo-1.png" alt="LogMyTrades" />
                <span className="text-base sm:text-lg font-bold ml-2">LogMyTrades</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                The most comprehensive trading journal and analytics platform.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
                </li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; 2024 LogMyTrades. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>
        {`
          @keyframes scroll-left {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(0%);
            }
          }
          
          @keyframes scroll-right {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Landing;
