
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Briefcase, DollarSign, CheckCircle, Star, Zap, Shield, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AuroraHero } from '@/components/ui/aurora-hero';
import { CTASection } from '@/components/ui/cta-section';
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline';

const Index = () => {
  // Timeline data for "Why Choose Us" section with original content
  const whyChooseUsData = [
    {
      id: 1,
      title: "End-to-End Solutions",
      date: "Complete",
      content: "From initial strategy to ongoing support, we handle every aspect of your digital transformation journey.",
      category: "Solutions",
      icon: Globe,
      relatedIds: [2, 3],
      status: "completed" as const,
      energy: 100,
    },
    {
      id: 2,
      title: "SMB Focused",
      date: "Specialized",
      content: "We understand the unique challenges of small and medium businesses and tailor our approach accordingly.",
      category: "Focus",
      icon: Users,
      relatedIds: [1, 4],
      status: "completed" as const,
      energy: 95,
    },
    {
      id: 3,
      title: "Proven Results",
      date: "Verified",
      content: "Our clients see measurable improvements in their online presence and business operations.",
      category: "Results",
      icon: CheckCircle,
      relatedIds: [1, 5],
      status: "completed" as const,
      energy: 90,
    },
    {
      id: 4,
      title: "Expert Team",
      date: "Professional",
      content: "Our multidisciplinary team brings together web development, IT support, and business strategy expertise.",
      category: "Team",
      icon: Star,
      relatedIds: [2, 6],
      status: "completed" as const,
      energy: 85,
    },
    {
      id: 5,
      title: "Ongoing Partnership",
      date: "Long-term",
      content: "We're not just service providers – we're your long-term partners in growth and success.",
      category: "Partnership",
      icon: Shield,
      relatedIds: [3, 6],
      status: "in-progress" as const,
      energy: 80,
    },
    {
      id: 6,
      title: "Flexible Solutions",
      date: "Adaptable",
      content: "Choose from our packages or get a custom solution that fits your specific needs and budget.",
      category: "Flexibility",
      icon: Zap,
      relatedIds: [4, 5],
      status: "completed" as const,
      energy: 75,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 dark:from-gray-900 dark:via-black dark:to-gray-900 light:from-gray-50 light:via-white light:to-gray-100">
      <Header />
      
      {/* Hero Section with Aurora Effect */}
      <AuroraHero />

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Complete Digital Solutions
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your business with our comprehensive suite of digital services designed for modern enterprises.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 dark:bg-white/5 light:bg-white/80 backdrop-blur-lg border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 group">
              <CardContent className="pt-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white dark:text-white light:text-gray-900">Web Development</h3>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-6 leading-relaxed">
                  Custom, responsive websites that convert visitors into customers with modern design and powerful functionality.
                </p>
                <Button asChild variant="outline" className="border-blue-400/50 text-blue-400 hover:bg-blue-400/10">
                  <Link to="/services">Explore</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 dark:bg-white/5 light:bg-white/80 backdrop-blur-lg border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/25 group">
              <CardContent className="pt-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/25">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white dark:text-white light:text-gray-900">Technical Support</h3>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-6 leading-relaxed">
                  Reliable ongoing support to keep your digital presence running smoothly while you focus on business growth.
                </p>
                <Button asChild variant="outline" className="border-green-400/50 text-green-400 hover:bg-green-400/10">
                  <Link to="/services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 dark:bg-white/5 light:bg-white/80 backdrop-blur-lg border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 group">
              <CardContent className="pt-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white dark:text-white light:text-gray-900">Business Strategy</h3>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-6 leading-relaxed">
                  Strategic guidance in technical, financial, and operational areas to optimize your business growth.
                </p>
                <Button asChild variant="outline" className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10">
                  <Link to="/services">Discover</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Orbital Timeline */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-purple-900/20 to-blue-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Why Businesses Choose Us
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver results that matter.
            </p>
          </div>
          
          <RadialOrbitalTimeline timelineData={whyChooseUsData} />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses transform their digital presence and operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 dark:bg-white/5 light:bg-white/80 backdrop-blur-lg border border-white/20 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/25">
              <CardContent className="pt-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-6 leading-relaxed">
                  "They transformed our outdated website into a modern, conversion-focused platform. Our online leads increased by 300% in just 3 months."
                </p>
                <div>
                  <p className="font-bold text-white dark:text-white light:text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-500">CEO, Johnson & Associates</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 dark:bg-white/5 light:bg-white/80 backdrop-blur-lg border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/25">
              <CardContent className="pt-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-6 leading-relaxed">
                  "Their business consultancy helped us streamline operations and improve our ROI by 40%. The technical support is outstanding too."
                </p>
                <div>
                  <p className="font-bold text-white dark:text-white light:text-gray-900">Michael Chen</p>
                  <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-500">Owner, Chen Manufacturing</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 dark:bg-white/5 light:bg-white/80 backdrop-blur-lg border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25">
              <CardContent className="pt-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-6 leading-relaxed">
                  "Professional, reliable, and results-driven. They handle all our tech needs so we can focus on what we do best – serving our customers."
                </p>
                <div>
                  <p className="font-bold text-white dark:text-white light:text-gray-900">Lisa Rodriguez</p>
                  <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-500">Director, Rodriguez Retail</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section with Typewriter Effect */}
      <CTASection
        badge={{
          text: "Ready to Transform?"
        }}
        title="Ready to Transform Your Business?"
        description="Let's discuss how we can help you build a stronger digital presence and optimize your business operations."
        action={{
          text: "Get Free Consultation",
          href: "/contact",
          variant: "glow"
        }}
        className="py-24 relative"
      />

      <Footer />
    </div>
  );
};

export default Index;
