
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock, Search, Tag, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");

  const blogPosts = [
    {
      title: "5 Essential Website Features Every Small Business Needs in 2024",
      excerpt: "Discover the must-have features that can make or break your business website's success. From mobile responsiveness to SEO optimization, learn what really matters for driving conversions and growth.",
      category: "Web Development",
      date: "March 15, 2024",
      readTime: "5 min read",
      slug: "essential-website-features-2024",
      featured: true
    },
    {
      title: "The ROI of Professional Technical Support: Is It Worth the Investment?",
      excerpt: "Calculate the true cost of downtime and discover how professional technical support can save your business money while improving productivity and customer satisfaction.",
      category: "Technical Support",
      date: "March 10, 2024",
      readTime: "7 min read",
      slug: "roi-professional-technical-support"
    },
    {
      title: "Digital Transformation for SMBs: A Step-by-Step Guide",
      excerpt: "Learn how to modernize your business operations with practical digital solutions that won't break the bank. Real strategies for real businesses looking to compete in the digital age.",
      category: "Business Strategy",
      date: "March 5, 2024",
      readTime: "8 min read",
      slug: "digital-transformation-smb-guide"
    },
    {
      title: "Common Website Mistakes That Are Costing You Customers",
      excerpt: "Avoid these critical website errors that drive potential customers away. Simple fixes that can dramatically improve your conversion rates and user experience.",
      category: "Web Development",
      date: "February 28, 2024",
      readTime: "6 min read",
      slug: "website-mistakes-costing-customers"
    },
    {
      title: "Financial Planning for Your Digital Investment: Budget Smart, Grow Fast",
      excerpt: "How to budget for digital investments that actually pay off. Learn to prioritize spending for maximum business impact and sustainable growth.",
      category: "Business Strategy",
      date: "February 25, 2024",
      readTime: "10 min read",
      slug: "financial-planning-digital-investment"
    },
    {
      title: "Why Your Business Needs a Backup Plan (And How to Create One)",
      excerpt: "Protect your business from data loss, downtime, and disasters. A comprehensive guide to business continuity planning for SMBs in the digital age.",
      category: "Technical Support",
      date: "February 20, 2024",
      readTime: "12 min read",
      slug: "backup-plan-business-continuity"
    }
  ];

  const categories = ["All", "Web Development", "Technical Support", "Business Strategy"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter signup:', email);
      setEmail("");
      // Add toast notification here if needed
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="h-4 w-4" />
              Latest Insights & Tips
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent mb-6">
              Digital Insights & Business Tips
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Expert advice on web development, technical support, and business growth strategies for small and medium businesses.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 h-12 border-orange-200 focus:border-orange-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto mb-16">
              <div className="flex items-center gap-2 mb-6">
                <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white">Featured Post</Badge>
              </div>
              <Card className="overflow-hidden shadow-2xl border-0 bg-white">
                <div className="lg:flex">
                  <div className="lg:w-1/2 bg-gradient-to-br from-orange-500 via-yellow-500 to-amber-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="p-12 flex items-center justify-center h-full min-h-[300px]">
                      <div className="text-center text-white">
                        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <TrendingUp className="h-10 w-10" />
                        </div>
                        <h3 className="text-2xl font-bold">Featured Article</h3>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                        {featuredPost.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={category === selectedCategory ? "default" : "outline"}
                  size="sm"
                  className={category === selectedCategory 
                    ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0" 
                    : "border-orange-200 text-orange-600 hover:bg-orange-50"
                  }
                >
                  <Tag className="h-4 w-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(post => !post.featured).map((post, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2 mb-3 group-hover:text-orange-600 transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col justify-between flex-1">
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Button variant="outline" size="sm" className="w-full border-orange-200 text-orange-600 hover:bg-orange-50 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-yellow-500 group-hover:text-white group-hover:border-0">
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
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4">
              Stay Updated with Digital Insights
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Get the latest tips, strategies, and insights delivered to your inbox. 
              No spam, just valuable content for growing your business.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 border-orange-200 focus:border-orange-400"
                required
              />
              <Button type="submit" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white h-12 px-8">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              Join 1,000+ business owners already subscribed
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-yellow-600 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Don't just read about success strategies – implement them with our expert help.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg">
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
