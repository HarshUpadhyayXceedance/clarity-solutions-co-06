import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Mail, Users, FileText, Settings } from 'lucide-react';
import Header from '@/components/Header';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  service_interest?: string;
  status: string;
  is_read: boolean;
  created_at: string;
}

const Admin = () => {
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        // Check if user has admin role
        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('user_id', session.user.id)
          .single();

        if (profile?.role === 'admin') {
          setIsAuthenticated(true);
          setUser(session.user);
          loadContactSubmissions();
        } else {
          toast({
            title: "Access Denied",
            description: "You don't have admin privileges.",
            variant: "destructive",
          });
        }
      }
    } catch (error) {
      console.error('Auth check error:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadContactSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setContactSubmissions(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to load contact submissions.",
        variant: "destructive",
      });
    }
  };

  const updateSubmissionStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ status, is_read: true })
        .eq('id', id);

      if (error) throw error;
      loadContactSubmissions();
      toast({
        title: "Updated",
        description: "Submission status updated successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to update submission.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Access Required</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Please log in with an admin account to access this page.</p>
            <Button onClick={() => window.location.href = '/auth'} className="w-full">
              Go to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-purple-500 to-violet-600 bg-clip-text text-transparent mb-4">
              Admin Dashboard
            </h1>
            <p className="text-gray-300">Manage your website content and submissions.</p>
          </div>

          <Tabs defaultValue="contact" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-gray-800 border border-gray-700">
              <TabsTrigger value="contact" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Contact
              </TabsTrigger>
              <TabsTrigger value="services" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Services
              </TabsTrigger>
              <TabsTrigger value="blog" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Blog
              </TabsTrigger>
              <TabsTrigger value="testimonials" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Testimonials
              </TabsTrigger>
            </TabsList>

            <TabsContent value="contact" className="space-y-6">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Contact Submissions ({contactSubmissions.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contactSubmissions.length === 0 ? (
                      <p className="text-gray-400 text-center py-8">No contact submissions yet.</p>
                    ) : (
                      contactSubmissions.map((submission) => (
                        <Card key={submission.id} className="bg-gray-900/50 border-gray-600">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h3 className="font-semibold text-white">{submission.name}</h3>
                                <p className="text-gray-300 text-sm">{submission.email}</p>
                                {submission.phone && (
                                  <p className="text-gray-400 text-sm">{submission.phone}</p>
                                )}
                              </div>
                              <div className="flex gap-2 items-center">
                                {!submission.is_read && (
                                  <Badge variant="destructive" className="text-xs">New</Badge>
                                )}
                                <Badge variant="outline" className="text-xs">
                                  {submission.status}
                                </Badge>
                              </div>
                            </div>
                            
                            {submission.company && (
                              <p className="text-gray-400 text-sm mb-2">
                                <strong>Company:</strong> {submission.company}
                              </p>
                            )}
                            
                            {submission.subject && (
                              <p className="text-gray-300 mb-2">
                                <strong>Subject:</strong> {submission.subject}
                              </p>
                            )}
                            
                            {submission.service_interest && (
                              <p className="text-gray-300 mb-2">
                                <strong>Service Interest:</strong> {submission.service_interest}
                              </p>
                            )}
                            
                            <p className="text-gray-300 mb-3">
                              <strong>Message:</strong> {submission.message}
                            </p>
                            
                            <div className="flex gap-2 items-center justify-between">
                              <span className="text-gray-400 text-xs">
                                {new Date(submission.created_at).toLocaleDateString()} at{' '}
                                {new Date(submission.created_at).toLocaleTimeString()}
                              </span>
                              
                              <div className="flex gap-2">
                                <Select
                                  value={submission.status}
                                  onValueChange={(value) => updateSubmissionStatus(submission.id, value)}
                                >
                                  <SelectTrigger className="w-32 h-8 text-xs">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="new">New</SelectItem>
                                    <SelectItem value="in_progress">In Progress</SelectItem>
                                    <SelectItem value="completed">Completed</SelectItem>
                                    <SelectItem value="archived">Archived</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="services">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle>Manage Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Service management coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="blog">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle>Manage Blog Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Blog management coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="testimonials">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle>Manage Testimonials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Testimonial management coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Admin;