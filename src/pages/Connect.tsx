import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, Linkedin, Mail, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';

const Connect = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/rahulpatil0512",
      description: "Check out my code repositories and open source contributions",
      color: "text-gray-800 hover:text-gray-600"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "#", // Placeholder URL
      description: "Connect with me professionally and see my career journey",
      color: "text-blue-600 hover:text-blue-500"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:rahul.patil@example.com", // Placeholder email
      description: "Send me an email for professional inquiries",
      color: "text-red-600 hover:text-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Button asChild variant="outline" className="mb-8">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Let's Connect</h1>
            <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm always excited to collaborate on interesting projects or discuss technology. Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Social Links Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Find Me Online</h2>
              
              <div className="space-y-6">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                      <CardHeader>
                        <div className="flex items-center">
                          <div className={`p-3 rounded-full bg-gray-100 mr-4 group-hover:scale-110 transition-transform`}>
                            <IconComponent className={`w-6 h-6 ${link.color}`} />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{link.name}</CardTitle>
                            <CardDescription className="text-sm">
                              {link.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Button asChild variant="outline" className="w-full">
                          <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            <IconComponent className="w-4 h-4 mr-2" />
                            Visit {link.name}
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Quick Stats */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm border">
                    <div className="text-2xl font-bold text-blue-600">24h</div>
                    <div className="text-gray-600 text-sm">Response Time</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm border">
                    <div className="text-2xl font-bold text-green-600">100%</div>
                    <div className="text-gray-600 text-sm">Response Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send a Message</h2>
              
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>
                    Have a question or want to work together? I'd love to hear from you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or just say hello..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="mt-1"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Additional Contact Info */}
              <div className="mt-6 p-6 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Prefer other ways to connect?</h3>
                <p className="text-gray-600 text-sm mb-3">
                  I'm also available for technical discussions, mentoring sessions, or collaboration opportunities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600">Mentoring</span>
                  <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600">Collaboration</span>
                  <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600">Technical Advice</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;