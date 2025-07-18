import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Eye, FileText, Calendar, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';

const Resume = () => {
  const resumeInfo = {
    lastUpdated: "December 2024",
    fileSize: "245 KB",
    format: "PDF",
    pages: "2 pages"
  };

  const quickInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXXXX XXXXX"
    },
    {
      icon: Mail,
      label: "Email",
      value: "rahul.patil@example.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India"
    },
    {
      icon: Calendar,
      label: "Experience",
      value: "2+ Years"
    }
  ];

  const highlights = [
    "Masters in Computer Science and Engineering from VIT Bhopal",
    "Software Development Instructor at NxtWave",
    "GATE 2024 & 2025 Qualified",
    "350+ LeetCode Problems Solved",
    "Expertise in AI, ML, Data Science, and Full Stack Development",
    "Published Research and Workshop Conductor"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Button asChild variant="outline" className="mb-8">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Resume</h1>
            <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Download my complete resume or view it online to learn more about my professional experience and qualifications.
            </p>
          </div>

          {/* Resume Actions */}
          <div className="mb-12">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-10 h-10 text-indigo-600" />
                </div>
                <CardTitle className="text-2xl">Rahul Patil - Resume</CardTitle>
                <CardDescription>
                  Software Development Instructor | Data Scientist | AI/ML Engineer
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                {/* Resume Info */}
                <div className="flex justify-center flex-wrap gap-4 mb-6">
                  <Badge variant="secondary">{resumeInfo.lastUpdated}</Badge>
                  <Badge variant="secondary">{resumeInfo.fileSize}</Badge>
                  <Badge variant="secondary">{resumeInfo.format}</Badge>
                  <Badge variant="secondary">{resumeInfo.pages}</Badge>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="flex-1 sm:flex-none">
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1 sm:flex-none">
                    <Eye className="w-5 h-5 mr-2" />
                    View Online
                  </Button>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  Click "Download Resume" to get the latest PDF version, or "View Online" to preview it in your browser.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-indigo-600" />
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <IconComponent className="w-4 h-4 text-gray-500" />
                      <div>
                        <span className="text-sm text-gray-500">{info.label}:</span>
                        <span className="ml-2 font-medium">{info.value}</span>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Resume Highlights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-green-600" />
                  Resume Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {highlights.slice(0, 4).map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* All Highlights */}
          <Card>
            <CardHeader>
              <CardTitle>Professional Summary</CardTitle>
              <CardDescription>
                Key achievements and qualifications featured in my resume
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Notice */}
          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start space-x-3">
              <FileText className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Resume Upload Instructions</h3>
                <p className="text-blue-700 text-sm">
                  To enable the download functionality, please upload your resume PDF file. 
                  The file will be automatically linked to the download button above. 
                  Contact your developer to add the resume file to the project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;