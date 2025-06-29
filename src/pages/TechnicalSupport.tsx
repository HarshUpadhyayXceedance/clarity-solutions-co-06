
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Wrench, Monitor, HeadphonesIcon, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TechnicalSupport = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-900/20 to-yellow-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-orange-400" />
              <span className="text-orange-300 text-sm">Technical Support</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6">
              24/7 Technical Support
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Keep your systems running smoothly with our comprehensive technical support and maintenance services.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600">
              <Link to="/contact">
                Get Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Support Services
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive technical support to keep your business running without interruption
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800 h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-8 w-8 text-orange-400" />
                </div>
                <CardTitle className="text-2xl text-white">System Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6">
                  Proactive monitoring to prevent issues before they impact your business.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">24/7 uptime monitoring</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Performance tracking</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Instant alert notifications</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-orange-400" />
                </div>
                <CardTitle className="text-2xl text-white">Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6">
                  Regular maintenance to keep your systems secure and up-to-date.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Security updates</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Automated backups</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Performance optimization</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeadphonesIcon className="h-8 w-8 text-orange-400" />
                </div>
                <CardTitle className="text-2xl text-white">Expert Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6">
                  Direct access to technical experts when you need help most.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Priority ticket system</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Live chat support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Phone consultation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Response Times
            </h2>
            <p className="text-lg text-gray-400">
              Fast response times to minimize downtime and keep your business running
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-black/50 rounded-lg border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Critical Issues</h3>
              <p className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                15 min
              </p>
              <p className="text-gray-400">System down, security breach</p>
            </div>
            
            <div className="text-center p-8 bg-black/50 rounded-lg border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">High Priority</h3>
              <p className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                2 hours
              </p>
              <p className="text-gray-400">Performance issues, bugs</p>
            </div>
            
            <div className="text-center p-8 bg-black/50 rounded-lg border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Standard</h3>
              <p className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                24 hours
              </p>
              <p className="text-gray-400">General inquiries, updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-900/30 to-yellow-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Technical Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't let technical issues slow down your business. Get professional support when you need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600">
              <Link to="/contact">
                Get Support Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black">
              <Link to="/pricing">
                View Plans
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechnicalSupport;
