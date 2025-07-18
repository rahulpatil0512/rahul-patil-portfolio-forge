import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';

const BackgroundEducation = () => {
  const education = [
    {
      degree: "Masters in Computer Science and Engineering",
      institution: "VIT Bhopal University",
      year: "2022-2024",
      location: "Bhopal, India",
      description: "Specialized in Machine Learning, Data Science, and Software Development with focus on AI technologies.",
      achievements: ["CGPA: 8.5/10", "Published Research Paper", "Academic Excellence Award"]
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Previous Institution",
      year: "2018-2022",
      location: "India",
      description: "Foundation in Computer Science with programming, algorithms, and software engineering.",
      achievements: ["First Class with Distinction", "Best Project Award", "Technical Society Member"]
    }
  ];

  const certifications = [
    {
      title: "GATE 2024 & 2025 Qualified",
      issuer: "IIT/NIT",
      year: "2024-2025",
      description: "Qualified Graduate Aptitude Test in Engineering for consecutive years"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera/Stanford",
      year: "2023",
      description: "Comprehensive course covering ML algorithms, neural networks, and deep learning"
    },
    {
      title: "Full Stack Development",
      issuer: "Online Platform",
      year: "2023",
      description: "Complete web development stack including frontend and backend technologies"
    },
    {
      title: "Data Science Professional Certificate",
      issuer: "IBM/Coursera",
      year: "2022",
      description: "End-to-end data science workflow, tools, and methodologies"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
            
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Background & Education</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My academic journey and professional qualifications that shaped my expertise in technology and software development.
            </p>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 mr-3 text-blue-600" />
              Education
            </h2>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl text-blue-600 mb-2">{edu.degree}</CardTitle>
                        <CardDescription className="text-lg font-medium text-gray-700">
                          {edu.institution}
                        </CardDescription>
                      </div>
                      <div className="mt-2 md:mt-0 text-right">
                        <Badge variant="secondary" className="mb-2">
                          <Calendar className="w-3 h-3 mr-1" />
                          {edu.year}
                        </Badge>
                        <div className="flex items-center text-gray-500 text-sm">
                          <MapPin className="w-3 h-3 mr-1" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{edu.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          <Award className="w-3 h-3 mr-1" />
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="w-8 h-8 mr-3 text-green-600" />
              Certifications & Achievements
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-600">{cert.title}</CardTitle>
                    <CardDescription className="font-medium">
                      {cert.issuer} • {cert.year}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-600">2+</CardTitle>
                <CardDescription>Years of Study</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-green-600">4+</CardTitle>
                <CardDescription>Certifications</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-purple-600">2x</CardTitle>
                <CardDescription>GATE Qualified</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-orange-600">8.5</CardTitle>
                <CardDescription>Masters CGPA</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundEducation;