
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, BookOpen, Brain, Smartphone, Zap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';

const CurrentRole = () => {
  const workshops = [
    {
      title: 'Generative AI',
      description: 'Teaching students about modern AI technologies, large language models, and practical applications of generative AI in software development.',
      icon: Brain,
      topics: ['LLMs', 'GPT Models', 'AI Ethics', 'Prompt Engineering', 'AI Applications']
    },
    {
      title: 'Internet of Things (IoT)',
      description: 'Hands-on workshops covering IoT fundamentals, sensor integration, and building connected devices for smart solutions.',
      icon: Smartphone,
      topics: ['Arduino', 'Raspberry Pi', 'Sensors', 'Cloud Integration', 'Smart Devices']
    },
    {
      title: 'Drones',
      description: 'Comprehensive training on drone technology, programming autonomous flights, and real-world applications in various industries.',
      icon: Zap,
      topics: ['Flight Control', 'Autonomous Navigation', 'Computer Vision', 'Drone Programming', 'Safety Protocols']
    }
  ];

  const achievements = [
    'Conducted 50+ workshops reaching 1000+ students',
    'Developed innovative curriculum for emerging technologies',
    'Mentored students in winning hackathon projects',
    'Created hands-on learning experiences',
    'Established industry partnerships for practical training'
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
            
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Current Role</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Software Development Instructor at NxtWave Institute of Advanced Technologies (NIAT), 
              shaping the next generation of tech professionals through innovative education and practical training.
            </p>
          </div>

          {/* Role Overview */}
          <Card className="mb-12 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-2xl">
                <Users className="w-6 h-6 text-blue-600" />
                <span>Software Development Instructor</span>
              </CardTitle>
              <CardDescription className="text-lg">
                NxtWave Institute of Advanced Technologies (NIAT)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                As a Software Development Instructor at NxtWave, I am responsible for designing and delivering 
                comprehensive training programs that bridge the gap between academic knowledge and industry requirements. 
                My role involves mentoring students, developing curriculum, and conducting specialized workshops in 
                cutting-edge technologies.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-green-600" />
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Curriculum development for emerging technologies</li>
                    <li>• Conducting hands-on workshops and seminars</li>
                    <li>• Student mentoring and career guidance</li>
                    <li>• Industry collaboration and partnerships</li>
                    <li>• Assessment and evaluation of student progress</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-purple-600" />
                    Key Achievements
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    {achievements.map((achievement, index) => (
                      <li key={index}>• {achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Workshop Specializations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Workshop Specializations</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {workshops.map((workshop) => (
                <Card key={workshop.title} className="hover:shadow-xl transition-all hover:-translate-y-2 group">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                      <workshop.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {workshop.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {workshop.description}
                    </CardDescription>
                    
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Key Topics:</p>
                      <div className="flex flex-wrap gap-2">
                        {workshop.topics.map((topic) => (
                          <Badge key={topic} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Workshop Gallery */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Workshop Gallery</CardTitle>
              <CardDescription className="text-center">
                Moments from various workshops and training sessions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
                  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop',
                  'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop',
                  'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop',
                  'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop',
                  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
                ].map((image, index) => (
                  <div key={index} className="relative h-48 rounded-lg overflow-hidden hover:scale-105 transition-transform">
                    <img 
                      src={image} 
                      alt={`Workshop ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Impact Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-600">50+</CardTitle>
                <CardDescription>Workshops Conducted</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-green-600">1000+</CardTitle>
                <CardDescription>Students Trained</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-purple-600">3</CardTitle>
                <CardDescription>Technology Domains</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-orange-600">95%</CardTitle>
                <CardDescription>Student Satisfaction</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentRole;
