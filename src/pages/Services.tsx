
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Briefcase, DollarSign, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-900/20 to-yellow-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6">
              Comprehensive Digital & Business Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              From custom website development to strategic business consultancy, 
              we provide end-to-end solutions for your digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Website Design & Development */}
            <Card className="bg-gray-900 border-gray-800 h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-400" />
                </div>
                <CardTitle className="text-2xl text-white">Website Design & Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6">
                  Custom, responsive websites that convert visitors into customers. We create modern, 
                  fast-loading sites that represent your brand professionally.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Custom responsive design</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Mobile-first approach</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">SEO optimization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Content management system</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">E-commerce integration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Analytics setup</span>
                  </div>
                </div>
                
                <Button asChild className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600">
                  <Link to="/services/web-development">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Technical Support & Maintenance */}
            <Card className="bg-gray-900 border-gray-800 h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-orange-400" />
                </div>
                <CardTitle className="text-2xl text-white">Technical Support & Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6">
                  Reliable ongoing support to keep your digital presence running smoothly. 
                  We handle the technical details so you can focus on your business.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">24/7 monitoring</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Regular backups</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Security updates</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Performance optimization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Bug fixes & updates</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Priority support</span>
                  </div>
                </div>
                
                <Button asChild className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600">
                  <Link to="/services/technical-support">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Business Consultancy */}
            <Card className="bg-gray-900 border-gray-800 h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-orange-400" />
                </div>
                <CardTitle className="text-2xl text-white">Business Consultancy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6">
                  Strategic guidance across technical, financial, and managerial areas to optimize 
                  your operations and accelerate growth.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Technical Consultancy</h4>
                    <ul className="space-y-1 text-sm text-gray-400">
                      <li>• Tech stack decisions</li>
                      <li>• Digital workflow optimization</li>
                      <li>• System integrations</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Financial Consultancy</h4>
                    <ul className="space-y-1 text-sm text-gray-400">
                      <li>• Budgeting & forecasting</li>
                      <li>• Pricing strategies</li>
                      <li>• ROI tracking & analysis</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Managerial Consultancy</h4>
                    <ul className="space-y-1 text-sm text-gray-400">
                      <li>• Process optimization</li>
                      <li>• Staff productivity tools</li>
                      <li>• Operational efficiency</li>
                    </ul>
                  </div>
                </div>
                
                <Button asChild className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600">
                  <Link to="/services/business-consultancy">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We follow a structured approach to ensure your project's success from start to finish.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Discovery</h3>
              <p className="text-gray-400 text-sm">
                We understand your business goals, challenges, and requirements through detailed consultation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Strategy</h3>
              <p className="text-gray-400 text-sm">
                We develop a comprehensive strategy tailored to your specific needs and objectives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Implementation</h3>
              <p className="text-gray-400 text-sm">
                Our expert team executes the plan with regular updates and transparent communication.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Optimization</h3>
              <p className="text-gray-400 text-sm">
                We monitor performance and continuously optimize for better results and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-900/30 to-yellow-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600">
              <Link to="/contact">
                Start Your Project
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

export default Services;
