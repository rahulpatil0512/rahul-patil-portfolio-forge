
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navigation from '@/components/Navigation';

const ProjectDetail = () => {
  const { projectId } = useParams();

  const projectData = {
    'lesionlook': {
      title: 'LesionLook – Skin Lesion Classification',
      subtitle: 'AI-Powered Medical Diagnosis Assistant',
      description: 'LesionLook is an advanced deep learning application designed to assist healthcare professionals in the early detection and classification of skin lesions. Using state-of-the-art computer vision techniques and convolutional neural networks, this project aims to improve diagnostic accuracy and speed in dermatological examinations.',
      fullDescription: `This comprehensive medical AI solution leverages deep learning to analyze dermatological images and classify various types of skin lesions with high accuracy. The system is designed to work as a diagnostic aid for healthcare professionals, providing quick and reliable assessments that can help in early detection of skin conditions.

The project implements multiple CNN architectures and uses transfer learning to achieve optimal performance. It includes data preprocessing pipelines, model training workflows, and a user-friendly interface for medical professionals to upload and analyze skin lesion images.

Key features include real-time image analysis, confidence scoring, detailed classification reports, and integration capabilities with existing medical systems. The model has been trained on diverse datasets to ensure robust performance across different skin types and lesion variations.`,
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Deep Learning', 'Computer Vision', 'Medical Imaging', 'CNN', 'Transfer Learning', 'Jupyter Notebook'],
      github: 'https://github.com/rahulpatil0512/LesionLook',
      demo: '#',
      status: 'Completed',
      duration: '4 months',
      team: 'Individual Project',
      features: [
        'Multi-class skin lesion classification',
        'Real-time image processing',
        'Confidence scoring system',
        'Data augmentation techniques',
        'Model performance visualization',
        'Medical-grade accuracy standards'
      ],
      challenges: [
        'Handling imbalanced medical datasets',
        'Ensuring high accuracy for medical applications',
        'Implementing robust data preprocessing',
        'Optimizing model performance for real-time use'
      ],
      images: [
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop'
      ]
    },
    'shoprec': {
      title: 'ShopRec – E-Commerce Product Recommendation',
      subtitle: 'Intelligent Shopping Experience Enhancement',
      description: 'ShopRec is a sophisticated recommendation engine that transforms the e-commerce shopping experience by providing personalized product suggestions. Using advanced machine learning algorithms, it analyzes user behavior, preferences, and purchase history to deliver highly relevant recommendations.',
      fullDescription: `ShopRec revolutionizes online shopping by implementing cutting-edge recommendation algorithms that understand user preferences and shopping patterns. The system combines collaborative filtering, content-based filtering, and hybrid approaches to deliver personalized shopping experiences.

The platform analyzes vast amounts of user interaction data, product metadata, and shopping behaviors to generate accurate recommendations. It includes real-time recommendation updates, seasonal trend analysis, and cross-selling optimization features.

The system is designed to scale with growing product catalogs and user bases while maintaining recommendation quality. It includes A/B testing capabilities, performance monitoring, and detailed analytics dashboards for business insights.`,
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Recommendation Systems', 'Collaborative Filtering', 'Content-Based Filtering', 'Data Visualization'],
      github: 'https://github.com/rahulpatil0512/ShopRec',
      demo: '#',
      status: 'Completed',
      duration: '3 months',
      team: 'Individual Project',
      features: [
        'Collaborative filtering algorithms',
        'Content-based recommendations',
        'Hybrid recommendation approach',
        'Real-time recommendation updates',
        'User behavior analysis',
        'Performance metrics dashboard'
      ],
      challenges: [
        'Cold start problem for new users',
        'Scalability with large datasets',
        'Recommendation diversity and accuracy balance',
        'Real-time processing requirements'
      ],
      images: [
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop'
      ]
    },
    'inflatrack': {
      title: 'InflaTrack – Inflation Prediction and Analysis',
      subtitle: 'Economic Forecasting and Analysis Tool',
      description: 'InflaTrack is an advanced economic analysis tool that predicts inflation trends using machine learning and time series analysis. It provides valuable insights for economic planning, policy-making, and financial decision-making through accurate inflation forecasting.',
      fullDescription: `InflaTrack represents a comprehensive approach to economic forecasting, specifically targeting inflation prediction and analysis. The system integrates multiple economic indicators, historical data, and advanced machine learning models to provide accurate inflation forecasts.

The platform processes various economic factors including GDP, employment rates, commodity prices, and monetary policy indicators. It uses sophisticated time series analysis techniques and machine learning algorithms to identify patterns and predict future inflation trends.

The application includes interactive dashboards for visualizing economic trends, scenario analysis tools, and automated reporting features. It's designed to serve economists, policy makers, and financial analysts who need reliable inflation forecasts for strategic planning.`,
      technologies: ['Python', 'Time Series Analysis', 'ARIMA', 'Machine Learning', 'Pandas', 'NumPy', 'Scikit-learn', 'Statsmodels', 'Economic Modeling', 'Data Visualization'],
      github: 'https://github.com/rahulpatil0512/InflaTrack',
      demo: '#',
      status: 'Completed',
      duration: '5 months',
      team: 'Individual Project',
      features: [
        'Time series forecasting models',
        'Multiple economic indicator analysis',
        'Interactive visualization dashboards',
        'Scenario analysis tools',
        'Automated report generation',
        'Model performance evaluation'
      ],
      challenges: [
        'Handling complex economic relationships',
        'Model accuracy in volatile economic conditions',
        'Integration of multiple data sources',
        'Long-term forecasting reliability'
      ],
      images: [
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
      ]
    },
    'finclass': {
      title: 'FinClass – Indian Currency Classification',
      subtitle: 'Computer Vision for Currency Recognition',
      description: 'FinClass is an intelligent computer vision system designed to identify and classify Indian currency notes with high accuracy. The system uses advanced deep learning techniques to provide automated currency recognition for banking and financial applications.',
      fullDescription: `FinClass addresses the critical need for automated currency recognition in the Indian financial sector. The system uses state-of-the-art computer vision and deep learning techniques to accurately identify and classify different denominations of Indian currency notes.

The application processes currency images through sophisticated preprocessing pipelines, feature extraction algorithms, and classification models. It's designed to handle various lighting conditions, image orientations, and currency note conditions while maintaining high accuracy.

The system includes security features for counterfeit detection, batch processing capabilities, and integration APIs for banking systems. It's optimized for real-time processing in automated teller machines, counting machines, and mobile banking applications.`,
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Deep Learning', 'Computer Vision', 'Image Processing', 'CNN', 'Feature Extraction', 'Object Detection', 'Pattern Recognition'],
      github: 'https://github.com/rahulpatil0512/FinClass',
      demo: '#',
      status: 'Completed',
      duration: '3 months',
      team: 'Individual Project',
      features: [
        'Multi-denomination currency recognition',
        'Real-time image processing',
        'Counterfeit detection capabilities',
        'Batch processing support',
        'Mobile-friendly interface',
        'Banking system integration APIs'
      ],
      challenges: [
        'Handling different lighting conditions',
        'Currency note wear and tear recognition',
        'Real-time processing optimization',
        'Security and fraud prevention'
      ],
      images: [
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=600&fit=crop'
      ]
    },
    'booknest': {
      title: 'BookNest – Book Recommendation System',
      subtitle: 'Personalized Literary Discovery Platform',
      description: 'BookNest is a comprehensive book recommendation platform that helps readers discover their next favorite book through intelligent analysis of reading preferences, book content, and user behavior patterns.',
      fullDescription: `BookNest transforms the way readers discover books by implementing sophisticated recommendation algorithms that understand individual reading preferences and literary tastes. The platform analyzes book content, user reviews, reading history, and behavioral patterns to provide highly personalized book suggestions.

The system incorporates natural language processing to analyze book descriptions, reviews, and content themes. It uses collaborative filtering to find readers with similar tastes and content-based filtering to match books with specific characteristics users prefer.

The platform includes features for book tracking, reading goal setting, community reviews, and social reading features. It's designed to create an engaging reading ecosystem that encourages literary exploration and community building among book enthusiasts.`,
      technologies: ['Python', 'Natural Language Processing', 'Recommendation Systems', 'Content-Based Filtering', 'Collaborative Filtering', 'Data Visualization', 'Text Analysis', 'Machine Learning', 'Web Scraping'],
      github: 'https://github.com/rahulpatil0512/BookNest',
      demo: '#',
      status: 'Completed',
      duration: '4 months',
      team: 'Individual Project',
      features: [
        'Personalized book recommendations',
        'Content-based filtering algorithms',
        'Natural language processing for book analysis',
        'User reading behavior tracking',
        'Community review integration',
        'Reading goal management'
      ],
      challenges: [
        'Processing large book datasets',
        'NLP analysis of book content',
        'Balancing recommendation diversity and accuracy',
        'User preference learning and adaptation'
      ],
      images: [
        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&h=600&fit=crop'
      ]
    }
  };

  const project = projectData[projectId as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <Navigation />
        <div className="text-center pt-24">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Button asChild variant="outline" className="mb-6">
              <Link to="/projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
            
            <div className="text-center mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
              <p className="text-xl text-blue-600 font-medium mb-6">{project.subtitle}</p>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold">Duration</p>
                  <p className="text-gray-600">{project.duration}</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">Team</p>
                  <p className="text-gray-600">{project.team}</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <p className="font-semibold">Status</p>
                  <p className="text-gray-600">{project.status}</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6 space-y-2">
                  <div className="flex justify-center space-x-2">
                    <Button asChild size="sm" variant="outline">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button asChild size="sm">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                  <p className="text-gray-600 text-sm">Links</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Overview */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
                  <Separator className="my-4" />
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{project.fullDescription}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Screenshots */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Screenshots</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.images.map((image, index) => (
                      <div key={index} className="relative h-48 rounded-lg overflow-hidden hover:scale-105 transition-transform">
                        <img 
                          src={image} 
                          alt={`Screenshot ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features & Challenges */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Technical Challenges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Technologies */}
              <Card>
                <CardHeader>
                  <CardTitle>Technologies Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild className="w-full">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Related Projects */}
              <Card>
                <CardHeader>
                  <CardTitle>More Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(projectData)
                      .filter(([id]) => id !== projectId)
                      .slice(0, 3)
                      .map(([id, proj]) => (
                        <Link key={id} to={`/project/${id}`} className="block">
                          <div className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                            <p className="font-medium text-sm text-gray-900 hover:text-blue-600">
                              {proj.title}
                            </p>
                          </div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
