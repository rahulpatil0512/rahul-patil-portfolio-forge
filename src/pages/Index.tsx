
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ChevronDown,
  Code,
  Database,
  Brain,
  Smartphone,
  Trophy,
  BookOpen,
  ExternalLink,
  User,
  Heart,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 'lesionlook',
      title: 'LesionLook – Skin Lesion Classification',
      description: 'Advanced deep learning model for automated skin lesion classification and medical diagnosis assistance.',
      technologies: ['Python', 'Deep Learning', 'Jupyter Notebook', 'Computer Vision'],
      github: 'https://github.com/rahulpatil0512/LesionLook'
    },
    {
      id: 'shoprec',
      title: 'ShopRec – E-Commerce Recommendation',
      description: 'Intelligent product recommendation system using collaborative filtering and machine learning algorithms.',
      technologies: ['Python', 'Recommendation Algorithms', 'Pandas', 'Matplotlib'],
      github: 'https://github.com/rahulpatil0512/ShopRec'
    },
    {
      id: 'inflatrack',
      title: 'InflaTrack – Inflation Prediction',
      description: 'Economic forecasting model for inflation prediction and trend analysis using machine learning.',
      technologies: ['Python', 'Machine Learning', 'Regression', 'Data Analysis'],
      github: 'https://github.com/rahulpatil0512/InflaTrack'
    },
    {
      id: 'finclass',
      title: 'FinClass – Currency Classification',
      description: 'Computer vision system for Indian currency note classification and authentication.',
      technologies: ['Python', 'Deep Learning', 'Computer Vision', 'Image Processing'],
      github: 'https://github.com/rahulpatil0512/FinClass'
    },
    {
      id: 'booknest',
      title: 'BookNest – Book Recommendation',
      description: 'Personalized book recommendation system with content-based and collaborative filtering.',
      technologies: ['Python', 'Recommendation Systems', 'Data Visualization', 'NLP'],
      github: 'https://github.com/rahulpatil0512/BookNest'
    }
  ];

  const skills = {
    'Languages & Technologies': [
      'Python', 'Java', 'C++', 'Node.js', 'Data Science', 'Machine Learning', 
      'Deep Learning', 'Artificial Intelligence', 'SQL', 'MongoDB', 'Excel', 
      'Tableau', 'Jupyter Notebook'
    ],
    'Tools': ['VS Code', 'Git', 'Postman', 'Google Colab'],
    'Soft Skills': ['Communication', 'Leadership', 'Teamwork', 'Public Speaking'],
    'Achievements': ['GATE 2024 & 2025 Qualified', '350+ LeetCode Problems', 'Hackathon Participant']
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm <span className="text-blue-600">Rahul Patil</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-600 font-medium">
              Software Development Instructor at NxtWave | Software Developer | Data Science | Machine Learning | AI
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              I did my Masters in Computer Science and Engineering from VIT Bhopal University. I have built various projects in Data Science, Machine Learning, Deep Learning, Agentic AI, and Full Stack Development with Generative AI. I'm currently a Software Development Instructor at NxtWave Institute of Advanced Technologies (NIAT).
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('about')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                About Me
              </Button>
              <Button 
                onClick={() => scrollToSection('projects')}
                variant="outline" 
                className="px-8 py-3 text-lg border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                View Projects
              </Button>
              <Button 
                onClick={() => scrollToSection('connect')}
                variant="outline" 
                className="px-8 py-3 text-lg"
              >
                Connect With Me
              </Button>
            </div>
          </div>

          {/* Right Content - Profile & Carousel */}
          <div className="space-y-8">
            {/* Profile Picture */}
            <div className="flex justify-center">
              <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Rahul Patil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Photo Carousel */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center">Workshop & Personal Moments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img 
                    src={carouselImages[currentImageIndex]}
                    alt="Workshop moments"
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-gray-600" />
        </button>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-5 h-5 text-blue-600" />
                    <span>Background & Education</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Masters in Computer Science and Engineering from VIT Bhopal University. 
                    Passionate about leveraging technology to solve real-world problems through 
                    innovative solutions in AI, ML, and software development.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span>Interests & Hobbies</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">When I'm not coding, you'll find me:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Football', 'Cricket', 'Travelling', 'Chess', 'Table-Tennis', 'Othello'].map((hobby) => (
                      <Badge key={hobby} variant="secondary">{hobby}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Briefcase className="w-5 h-5 text-green-600" />
                    <span>Current Role</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Software Development Instructor at NxtWave Institute of Advanced Technologies (NIAT), 
                    where I conduct workshops and mentor students in cutting-edge technologies.
                  </p>
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Workshop Specializations:</p>
                    <div className="space-y-2">
                      {['Generative AI', 'Internet of Things (IoT)', 'Drones'].map((topic) => (
                        <Badge key={topic} className="mr-2">{topic}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    {category === 'Languages & Technologies' && <Code className="w-5 h-5 text-blue-600" />}
                    {category === 'Tools' && <Database className="w-5 h-5 text-green-600" />}
                    {category === 'Soft Skills' && <Brain className="w-5 h-5 text-purple-600" />}
                    {category === 'Achievements' && <Trophy className="w-5 h-5 text-yellow-600" />}
                    <span>{category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="outline" className="mr-1 mb-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Here are some of my notable projects showcasing expertise in AI, ML, and software development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-xl transition-all hover:-translate-y-2 group">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button asChild variant="outline" size="sm">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button asChild size="sm">
                      <Link to={`/project/${project.id}`}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/projects">
                <BookOpen className="w-5 h-5 mr-2" />
                View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Connect With Me Section */}
      <section id="connect" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Connect With Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">
              Let's collaborate on exciting projects or discuss opportunities!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Github className="w-6 h-6 text-gray-700" />
                    <a 
                      href="https://github.com/rahulpatil0512" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      github.com/rahulpatil0512
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                    <a 
                      href="#" 
                      className="text-blue-600 hover:underline"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-red-500" />
                    <a 
                      href="mailto:rahul@example.com" 
                      className="text-blue-600 hover:underline"
                    >
                      rahul@example.com
                    </a>
                  </div>
                  
                  <Button className="w-full mt-6" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Your Email" type="email" />
                </div>
                <Textarea placeholder="Your Message" rows={4} />
                <Button className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Rahul Patil. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
