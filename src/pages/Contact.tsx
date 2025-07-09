import React from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle, MessageSquare, Calendar as CalendarIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleConsultationClick = () => {
    toast({
      title: "Consultation scheduled!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.2),transparent_50%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(138,43,226,0.2),transparent_50%)] animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-400 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <MessageSquare className="h-4 w-4" />
              Let's Start a Conversation
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-purple-500 to-violet-600 bg-clip-text text-transparent mb-8 leading-tight">
              Get In Touch
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              Ready to <span className="font-semibold text-orange-400">transform your business</span>? Let's discuss your needs and create a custom solution that drives results and growth.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">24h</div>
                <div className="text-gray-400">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="shadow-xl shadow-purple-500/10 border-0 backdrop-blur-sm bg-gray-800/50 border border-gray-700/50 hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-orange-500 via-purple-500 to-violet-600 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-purple-600/20"></div>
                  <CardTitle className="text-xl relative z-10">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-purple-500/20 backdrop-blur-sm border border-orange-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email</h3>
                      <p className="text-gray-300 font-medium">hello@digitalbridge.com</p>
                      <p className="text-sm text-gray-400">We typically respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Phone</h3>
                      <p className="text-gray-300 font-medium">(555) 123-4567</p>
                      <p className="text-sm text-gray-400 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Mon-Fri 9AM-6PM EST
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Office</h3>
                      <p className="text-gray-300">123 Business Ave<br />Suite 100<br />City, ST 12345</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Free Consultation Card */}
              <Card className="shadow-xl border-0 bg-gradient-to-br from-orange-500/10 to-purple-500/10 backdrop-blur-sm border border-orange-500/20">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-white">
                    <CalendarIcon className="h-5 w-5 text-orange-400" />
                    Free Consultation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Schedule a free 30-minute consultation to discuss your project and get expert advice tailored to your business.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-300 mb-6">
                    {[
                      "No obligation assessment",
                      "Expert recommendations", 
                      "Custom solution outline",
                      "Transparent pricing"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={handleConsultationClick}
                    className="w-full bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white shadow-lg shadow-orange-500/25"
                  >
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>

              {/* Response Time Card */}
              <Card className="shadow-xl border-0 bg-gray-800/50 border border-gray-700/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Quick Response</h3>
                  <p className="text-gray-300 text-sm">
                    Average response time: <span className="font-semibold text-orange-400">2 hours</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;