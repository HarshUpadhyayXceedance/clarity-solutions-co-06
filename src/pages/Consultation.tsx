import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/App';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, MessageCircle, Phone, Mail, Building, AlertCircle } from 'lucide-react';

const Consultation = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, loading } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect to login if user is not authenticated
  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    businessDescription: '',
    problemFaced: '',
    serviceInterest: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you can add the API call to save the consultation request
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Show success popup
      toast({
        title: "Consultation Request Submitted! ✨",
        description: "Your free consultation report is generating and will be sent to your email within 5 minutes.",
        duration: 8000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        businessDescription: '',
        problemFaced: '',
        serviceInterest: ''
      });

      // Optionally navigate back to home after a delay
      setTimeout(() => {
        navigate('/');
      }, 3000);

    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.phone && 
                     formData.businessDescription && formData.problemFaced;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <MessageCircle className="h-4 w-4 text-blue-400" />
              <span className="text-blue-400 font-medium">Free Consultation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Get Your Free Business Consultation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Tell us about your business challenges and we'll provide a customized consultation report 
              with actionable insights to help you grow.
            </p>
          </div>

          {/* Form Section */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Building className="h-6 w-6 text-blue-400" />
                  Business Information
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Please provide detailed information about your business and the challenges you're facing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your company name"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white flex items-center gap-2">
                        <Mail className="h-4 w-4 text-blue-400" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white flex items-center gap-2">
                        <Phone className="h-4 w-4 text-green-400" />
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>

                  {/* Service Interest */}
                  <div className="space-y-2">
                    <Label htmlFor="serviceInterest" className="text-white">
                      Primary Service Interest
                    </Label>
                    <Select onValueChange={(value) => handleInputChange('serviceInterest', value)}>
                      <SelectTrigger className="bg-white/5 border-white/20 text-white">
                        <SelectValue placeholder="Select the service you're most interested in" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="technical-support">Technical Support</SelectItem>
                        <SelectItem value="business-consultancy">Business Consultancy</SelectItem>
                        <SelectItem value="complete-package">Complete Digital Package</SelectItem>
                        <SelectItem value="custom-solution">Custom Solution</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Business Description */}
                  <div className="space-y-2">
                    <Label htmlFor="businessDescription" className="text-white flex items-center gap-2">
                      <Building className="h-4 w-4 text-purple-400" />
                      Business Description *
                    </Label>
                    <Textarea
                      id="businessDescription"
                      value={formData.businessDescription}
                      onChange={(e) => handleInputChange('businessDescription', e.target.value)}
                      placeholder="Tell us about your business - what do you do, who are your customers, what's your current situation?"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                      required
                    />
                  </div>

                  {/* Problem Faced */}
                  <div className="space-y-2">
                    <Label htmlFor="problemFaced" className="text-white flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-orange-400" />
                      Challenges & Problems *
                    </Label>
                    <Textarea
                      id="problemFaced"
                      value={formData.problemFaced}
                      onChange={(e) => handleInputChange('problemFaced', e.target.value)}
                      placeholder="What specific challenges or problems are you facing? What goals do you want to achieve?"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      disabled={!isFormValid || isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                          Generating Your Report...
                        </div>
                      ) : (
                        'Get My Free Consultation Report'
                      )}
                    </Button>
                  </div>

                  {/* Disclaimer */}
                  <div className="text-center text-sm text-gray-400 bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                    <p>
                      🚀 Your personalized consultation report will be generated and sent to your email within 5 minutes. 
                      No spam, just valuable insights for your business.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Consultation;