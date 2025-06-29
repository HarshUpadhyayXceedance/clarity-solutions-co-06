
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, DollarSign, Users, Target, BarChart3, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BusinessConsultancy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-900/20 to-yellow-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="h-4 w-4 text-orange-400" />
              <span className="text-orange-300 text-sm">Business Consultancy</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6">
              Strategic Business Growth
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Expert guidance across technical, financial, and managerial areas to optimize operations and accelerate growth.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600">
              <Link to="/contact">
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Consultancy Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Consultancy Areas
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive business guidance across all key areas of your organization
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800 h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-orange-400" />
                </div>
                <CardTitle className="text-2xl text-white">Technical Consultancy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6">
                  Strategic technology decisions and digital transformation guidance.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Technology stack selection</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Digital workflow optimization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">System integrations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Cloud migration strategies</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-orange-400" />
                </div>
                <CardTitle className="text-2xl text-white">Financial Consultancy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6">
                  Financial planning and analysis to drive profitable growth.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Budgeting & forecasting</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Pricing strategies</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">ROI tracking & analysis</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Cost optimization</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-400" />
                </div>
                <CardTitle className="text-2xl text-white">Managerial Consultancy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6">
                  Operational excellence and team productivity optimization.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Process optimization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Team productivity tools</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Operational efficiency</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Change management</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Consultancy Process
            </h2>
            <p className="text-lg text-gray-400">
              A structured approach to identify opportunities and implement solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Assessment</h3>
              <p className="text-gray-400 text-sm">
                Comprehensive analysis of your current business operations and challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Strategy</h3>
              <p className="text-gray-400 text-sm">
                Develop customized strategies aligned with your business goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Implementation</h3>
              <p className="text-gray-400 text-sm">
                Execute solutions with hands-on support and guidance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Optimization</h3>
              <p className="text-gray-400 text-sm">
                Monitor results and continuously refine for maximum impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-gray-400">
              Our consultancy services deliver measurable business impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-black/50 rounded-lg border border-gray-800">
              <BarChart3 className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                85%
              </h3>
              <p className="text-white font-semibold mb-2">Average Revenue Growth</p>
              <p className="text-gray-400 text-sm">Within 12 months of implementation</p>
            </div>
            
            <div className="text-center p-8 bg-black/50 rounded-lg border border-gray-800">
              <Target className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                40%
              </h3>
              <p className="text-white font-semibold mb-2">Cost Reduction</p>
              <p className="text-gray-400 text-sm">Through process optimization</p>
            </div>
            
            <div className="text-center p-8 bg-black/50 rounded-lg border border-gray-800">
              <TrendingUp className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                60%
              </h3>
              <p className="text-white font-semibold mb-2">Productivity Increase</p>
              <p className="text-gray-400 text-sm">Enhanced team efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-900/30 to-yellow-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your challenges and develop a strategy that drives real results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600">
              <Link to="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black">
              <Link to="/pricing">
                View Packages
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessConsultancy;
