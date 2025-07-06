
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Briefcase, DollarSign, Award, Globe, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-black overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black" />
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 blur-3xl animate-pulse" />
          <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-gradient-to-r from-violet-500/30 to-pink-500/20 blur-2xl animate-pulse" style={{animationDelay: '1s'}} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4" />
              Award-Winning Digital Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-purple-500 to-violet-600 bg-clip-text text-transparent mb-6">
              About DigitalBridge
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're passionate about helping small and medium businesses thrive in the digital age 
              through comprehensive solutions that combine cutting-edge technology and strategic expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white shadow-lg shadow-orange-500/25">
                <Link to="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-400">
                <Link to="/services">
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Globe className="h-4 w-4" />
                  Our Mission
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Empowering Digital Success
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  To empower small and medium businesses with the digital tools, technical expertise, 
                  and strategic guidance they need to compete effectively in today's marketplace.
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  We believe that every business deserves access to professional-grade digital solutions 
                  and expert consultancy, regardless of size or budget. Our mission is to bridge the 
                  gap between enterprise-level capabilities and SMB accessibility.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  "Democratize access to professional digital solutions",
                  "Provide ongoing support and strategic partnership", 
                  "Drive measurable business growth and ROI"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-orange-500/25">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-300 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 via-purple-500 to-violet-600 rounded-2xl p-8 text-white shadow-2xl shadow-purple-500/25">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">
                  To be the leading partner for SMBs seeking digital transformation and strategic growth.
                </p>
                <p className="text-white/80 leading-relaxed">
                  We envision a future where every small and medium business has the digital presence 
                  and operational efficiency to compete with larger enterprises, supported by our 
                  comprehensive solutions and ongoing partnership.
                </p>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-violet-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Award className="h-4 w-4" />
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-purple-500 to-violet-600 bg-clip-text text-transparent mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Our unique combination of technical expertise and business acumen makes us the ideal partner for your growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "SMB Specialists",
                description: "We exclusively focus on small and medium businesses, understanding their unique challenges, constraints, and opportunities better than anyone.",
                gradient: "from-blue-500 to-purple-500"
              },
              {
                icon: Briefcase,
                title: "Holistic Approach", 
                description: "Beyond just websites and tech support, we provide strategic business consultancy that addresses technical, financial, and operational aspects.",
                gradient: "from-orange-500 to-purple-500"
              },
              {
                icon: DollarSign,
                title: "ROI Focused",
                description: "Every solution we implement is designed to deliver measurable returns on investment and drive real business growth.",
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 border-0 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-purple-600 to-violet-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Numbers that reflect our commitment to client success and digital excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Successful Projects" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "3x", label: "Average ROI Improvement" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-purple-500 to-violet-600 bg-clip-text text-transparent mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Let's discuss how we can help transform your business with our comprehensive digital solutions and strategic expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white shadow-lg shadow-orange-500/25 px-8 py-4 text-lg">
                <Link to="/contact">
                  Start the Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-400 px-8 py-4 text-lg">
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
