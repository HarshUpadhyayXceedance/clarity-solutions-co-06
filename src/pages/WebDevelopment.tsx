
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette, Search, Database, Globe, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-900/20 to-yellow-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
              <Code className="h-4 w-4 text-orange-400" />
              <span className="text-orange-300 text-sm">Web Development</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6">
              Custom Web Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your ideas into powerful, responsive websites that drive results and engage your audience.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Development Services
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800 h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-orange-400" />
                </div>
                <CardTitle className="text-2xl text-white">Custom Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6">
                  Unique, brand-focused designs that set you apart from the competition.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Mobile-first responsive design</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Brand identity integration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">User experience optimization</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-orange-400" />
                </div>
                <CardTitle className="text-2xl text-white">Full-Stack Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6">
                  Complete web applications with robust backend functionality.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Database design & management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">API development & integration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">User authentication systems</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-orange-400" />
                </div>
                <CardTitle className="text-2xl text-white">SEO Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6">
                  Built-in SEO best practices to help your site rank higher.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Technical SEO implementation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Page speed optimization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Schema markup & analytics</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-gray-400">
              We use cutting-edge technologies to build modern, scalable solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'React', desc: 'Modern UI Framework' },
              { name: 'Node.js', desc: 'Backend Runtime' },
              { name: 'TypeScript', desc: 'Type-Safe Development' },
              { name: 'Tailwind CSS', desc: 'Utility-First Styling' },
              { name: 'Next.js', desc: 'Full-Stack Framework' },
              { name: 'PostgreSQL', desc: 'Robust Database' },
              { name: 'AWS', desc: 'Cloud Infrastructure' },
              { name: 'Docker', desc: 'Containerization' }
            ].map((tech, index) => (
              <div key={index} className="text-center p-6 bg-black/50 rounded-lg border border-gray-800">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-900/30 to-yellow-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom web solution that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black">
              <Link to="/pricing">
                View Pricing
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
