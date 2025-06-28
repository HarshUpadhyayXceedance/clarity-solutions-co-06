
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const blogPosts = [
    {
      title: "5 Essential Website Features Every Small Business Needs in 2024",
      excerpt: "Discover the must-have features that can make or break your business website's success. From mobile responsiveness to SEO optimization, learn what really matters.",
      category: "Web Development",
      date: "March 15, 2024",
      readTime: "5 min read",
      slug: "essential-website-features-2024"
    },
    {
      title: "The ROI of Professional Technical Support: Is It Worth the Investment?",
      excerpt: "Calculate the true cost of downtime and discover how professional technical support can save your business money while improving productivity.",
      category: "Technical Support",
      date: "March 10, 2024",
      readTime: "7 min read",
      slug: "roi-professional-technical-support"
    },
    {
      title: "Digital Transformation for SMBs: A Step-by-Step Guide",
      excerpt: "Learn how to modernize your business operations with practical digital solutions that won't break the bank. Real strategies for real businesses.",
      category: "Business Strategy",
      date: "March 5, 2024",
      readTime: "8 min read",
      slug: "digital-transformation-smb-guide"
    },
    {
      title: "Common Website Mistakes That Are Costing You Customers",
      excerpt: "Avoid these critical website errors that drive potential customers away. Simple fixes that can dramatically improve your conversion rates.",
      category: "Web Development",
      date: "February 28, 2024",
      readTime: "6 min read",
      slug: "website-mistakes-costing-customers"
    },
    {
      title: "Financial Planning for Your Digital Investment: Budget Smart, Grow Fast",
      excerpt: "How to budget for digital investments that actually pay off. Learn to prioritize spending for maximum business impact.",
      category: "Business Strategy",
      date: "February 25, 2024",
      readTime: "10 min read",
      slug: "financial-planning-digital-investment"
    },
    {
      title: "Why Your Business Needs a Backup Plan (And How to Create One)",
      excerpt: "Protect your business from data loss, downtime, and disasters. A comprehensive guide to business continuity planning for SMBs.",
      category: "Technical Support",
      date: "February 20, 2024",
      readTime: "12 min read",
      slug: "backup-plan-business-continuity"
    }
  ];

  const categories = ["All", "Web Development", "Technical Support", "Business Strategy"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Digital Insights & Business Tips
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert advice on web development, technical support, and business growth strategies for small and medium businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <Badge className="mb-4">Featured Post</Badge>
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <Badge variant="secondary">Web Development</Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>March 15, 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>5 min read</span>
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    5 Essential Website Features Every Small Business Needs in 2024
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Your website is often the first impression potential customers have of your business. 
                    In 2024, certain features have become non-negotiable for business success. From mobile 
                    responsiveness to advanced security, discover what your website needs to compete effectively.
                  </p>
                  <Button>
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with Digital Insights
            </h2>
            <p className="text-gray-600 mb-8">
              Get the latest tips, strategies, and insights delivered to your inbox. 
              No spam, just valuable content for growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button>Subscribe</Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Join 500+ business owners already subscribed
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't just read about success strategies – implement them with our expert help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
