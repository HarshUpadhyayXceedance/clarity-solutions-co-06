
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock, Search, Tag, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import featuredBg from '@/assets/featured-article-bg.jpg';

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
              <TrendingUp className="h-4 w-4" />
              Latest Insights & Tips
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-purple-500 to-violet-600 bg-clip-text text-transparent mb-6">
              Digital Insights & Business Tips
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Expert advice on web development, technical support, and business growth strategies for small and medium businesses.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 h-12 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-orange-500/10 to-purple-500/10 blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-violet-500/10 to-pink-500/10 blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-400 px-6 py-3 rounded-full text-sm font-medium mb-6">
                  <TrendingUp className="h-4 w-4" />
                  Featured Article
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 via-purple-500 to-violet-600 bg-clip-text text-transparent mb-4">
                  Editor's Choice
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Our most comprehensive guide to digital transformation success
                </p>
              </div>

              {/* Featured Article Card */}
              <div className="relative group">
                {/* Glassmorphism Container */}
                <div className="relative bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-700 hover:scale-[1.02] hover:border-orange-500/30">
                  {/* Glare Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Moving Glare Animation */}
                  <div className="absolute -inset-x-4 -top-4 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent group-hover:animate-pulse" />
                  
                  <div className="lg:flex h-full">
                    {/* Image Section */}
                    <div className="lg:w-1/2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-purple-500/20 to-violet-600/20 z-10" />
                      <img 
                        src={featuredBg} 
                        alt="Featured Article" 
                        className="w-full h-full object-cover min-h-[400px] lg:min-h-[500px] transform group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Floating Glass Elements */}
                      <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors duration-500">
                        <TrendingUp className="h-8 w-8 text-orange-400" />
                      </div>
                      
                      {/* Article Type Badge */}
                      <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                        Must Read
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                      {/* Meta Information */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                        <Badge className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 text-orange-400 border border-orange-500/30 backdrop-blur-sm">
                          {featuredPost.category}
                        </Badge>
                        <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-700/50">
                          <Calendar className="h-4 w-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-700/50">
                          <Clock className="h-4 w-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl lg:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:via-purple-500 group-hover:to-violet-600 group-hover:bg-clip-text transition-all duration-500">
                        {featuredPost.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-300 mb-8 text-lg leading-relaxed line-clamp-4">
                        {featuredPost.excerpt}
                      </p>

                      {/* CTA Button */}
                      <div className="flex gap-4">
                        <Button className="bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transform hover:scale-105 transition-all duration-300 px-8 py-3 text-lg font-semibold">
                          Read Full Article
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-400 backdrop-blur-sm">
                          Save for Later
                        </Button>
                      </div>

                      {/* Social Proof */}
                      <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-700/50">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <div className="flex -space-x-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-purple-500 border-2 border-gray-800" />
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 border-2 border-gray-800" />
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 border-2 border-gray-800" />
                          </div>
                          <span>2.3k readers</span>
                        </div>
                        <div className="text-sm text-gray-400">
                          <span className="text-green-400">●</span> Trending now
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="pb-20 bg-gradient-to-b from-gray-900 to-black">
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
                    ? "bg-gradient-to-r from-orange-500 to-purple-500 text-white border-0 shadow-lg shadow-orange-500/25" 
                    : "border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-400"
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
                <Card key={index} className="group hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 border-0 bg-gray-800/50 border border-gray-700/50 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 text-orange-400 border border-orange-500/30 text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white line-clamp-2 mb-3 group-hover:text-orange-400 transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col justify-between flex-1">
                    <p className="text-gray-300 text-sm mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Button variant="outline" size="sm" className="w-full border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-400 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-purple-500 group-hover:text-white group-hover:border-0 group-hover:shadow-lg group-hover:shadow-orange-500/25">
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
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 via-purple-500 to-violet-600 bg-clip-text text-transparent mb-4">
              Stay Updated with Digital Insights
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Get the latest tips, strategies, and insights delivered to your inbox. 
              No spam, just valuable content for growing your business.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500/20"
                required
              />
              <Button type="submit" className="bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white h-12 px-8 shadow-lg shadow-orange-500/25">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-gray-400 mt-4">
              Join 1,000+ business owners already subscribed
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-purple-600 to-violet-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Don't just read about success strategies – implement them with our expert help.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg">
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
