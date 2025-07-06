
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ModernPricing } from '@/components/ui/modern-pricing';

const demoPlans = [
  {
    name: "Consultancy Focus",
    price: "150",
    yearlyPrice: "120",
    period: "per hour", 
    features: [
      "Technical consultancy sessions",
      "Financial strategy & ROI analysis", 
      "Managerial process optimization",
      "Digital workflow recommendations",
      "Follow-up reports & action plans",
      "Email support between sessions"
    ],
    description: "Perfect for businesses needing strategic guidance",
    buttonText: "Book Consultation",
    href: "/contact",
    isPopular: false,
  },
  {
    name: "Complete Package", 
    price: "2499",
    yearlyPrice: "1999",
    period: "per month",
    features: [
      "Custom website design & development",
      "Mobile responsive & SEO optimized", 
      "24/7 technical monitoring",
      "Regular backups & security updates",
      "Monthly business consultancy (4 hours)",
      "Priority support & maintenance",
      "Monthly performance reports",
      "Content updates & modifications"
    ],
    description: "Full website + ongoing support & consultancy",
    buttonText: "Get Started", 
    href: "/contact",
    isPopular: true,
  },
  {
    name: "Custom Enterprise",
    price: "Custom",
    yearlyPrice: "Custom",
    period: "Quote",
    features: [
      "Multi-site development",
      "Advanced e-commerce solutions",
      "Custom integrations & APIs", 
      "Dedicated account manager",
      "Comprehensive staff training",
      "White-label solutions available"
    ],
    description: "For complex projects with specific requirements",
    buttonText: "Request Quote",
    href: "/contact", 
    isPopular: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ModernPricing 
        plans={demoPlans}
        title="Simple, Transparent Pricing"
        description="Choose the package that fits your business needs, or get a custom quote for specialized requirements."
      />
      <Footer />
    </div>
  );
};

export default Pricing;
