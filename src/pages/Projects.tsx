
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';

const Projects = () => {
  const projects = [
    {
      id: 'lesionlook',
      title: 'LesionLook – Skin Lesion Classification',
      description: 'Advanced deep learning model for automated skin lesion classification and medical diagnosis assistance using computer vision techniques.',
      longDescription: 'A comprehensive deep learning solution that analyzes medical images to classify different types of skin lesions. The project implements state-of-the-art convolutional neural networks to assist healthcare professionals in early diagnosis.',
      technologies: ['Python', 'Deep Learning', 'Jupyter Notebook', 'Computer Vision', 'TensorFlow', 'Medical Imaging'],
      github: 'https://github.com/rahulpatil0512/LesionLook',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop'
    },
    {
      id: 'shoprec',
      title: 'ShopRec – E-Commerce Recommendation',
      description: 'Intelligent product recommendation system using collaborative filtering and machine learning algorithms to enhance user shopping experience.',
      longDescription: 'A sophisticated recommendation engine that analyzes user behavior and preferences to suggest relevant products. Implements both collaborative and content-based filtering techniques.',
      technologies: ['Python', 'Recommendation Algorithms', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
      github: 'https://github.com/rahulpatil0512/ShopRec',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop'
    },
    {
      id: 'inflatrack',
      title: 'InflaTrack – Inflation Prediction',
      description: 'Economic forecasting model for inflation prediction and trend analysis using machine learning and time series analysis.',
      longDescription: 'An advanced economic analysis tool that predicts inflation trends using historical data and machine learning models. Provides insights for economic planning and decision-making.',
      technologies: ['Python', 'Machine Learning', 'Regression', 'Data Analysis', 'Time Series', 'Economic Modeling'],
      github: 'https://github.com/rahulpatil0512/InflaTrack',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop'
    },
    {
      id: 'finclass',
      title: 'FinClass – Currency Classification',
      description: 'Computer vision system for Indian currency note classification and authentication using deep learning techniques.',
      longDescription: 'An intelligent system that can identify and classify Indian currency notes using advanced computer vision algorithms. Useful for automated banking systems and counterfeit detection.',
      technologies: ['Python', 'Deep Learning', 'Computer Vision', 'Image Processing', 'OpenCV', 'CNN'],
      github: 'https://github.com/rahulpatil0512/FinClass',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop'
    },
    {
      id: 'booknest',
      title: 'BookNest – Book Recommendation',
      description: 'Personalized book recommendation system with content-based and collaborative filtering for literature enthusiasts.',
      longDescription: 'A comprehensive book recommendation platform that analyzes reading patterns, preferences, and book metadata to suggest personalized reading lists. Features advanced NLP for content analysis.',
      technologies: ['Python', 'Recommendation Systems', 'Data Visualization', 'NLP', 'Natural Language Processing', 'Content Filtering'],
      github: 'https://github.com/rahulpatil0512/BookNest',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Button asChild variant="outline" className="mb-8">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-4">My Projects</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive showcase of my work in AI, Machine Learning, Data Science, and Software Development. 
              Each project represents a unique challenge solved with innovative technical solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.longDescription}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button asChild size="sm" className="flex-1">
                      <Link to={`/project/${project.id}`}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-600">5+</CardTitle>
                <CardDescription>Major Projects</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-green-600">10+</CardTitle>
                <CardDescription>Technologies Used</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-purple-600">350+</CardTitle>
                <CardDescription>LeetCode Problems Solved</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
