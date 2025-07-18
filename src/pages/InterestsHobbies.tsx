import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Trophy, Camera, Gamepad2, Plane, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';

const InterestsHobbies = () => {
  const sports = [
    {
      name: "Football",
      icon: "⚽",
      description: "Passionate about football, love watching and playing the beautiful game."
    },
    {
      name: "Cricket",
      icon: "🏏",
      description: "Cricket enthusiast, follow international matches and local leagues."
    },
    {
      name: "Chess",
      icon: "♟️",
      description: "Strategic thinking through chess, enjoy both online and offline games."
    },
    {
      name: "Table Tennis",
      icon: "🏓",
      description: "Quick reflexes and precision in table tennis matches."
    },
    {
      name: "Othello",
      icon: "⚫",
      description: "Love the strategic depth of Othello/Reversi board game."
    }
  ];

  const techInterests = [
    {
      name: "Hackathons",
      icon: "💻",
      description: "Active participant in coding competitions and hackathons."
    },
    {
      name: "Coding Challenges",
      icon: "🧩",
      description: "Solved 350+ problems on LeetCode and other platforms."
    },
    {
      name: "AI Research",
      icon: "🤖",
      description: "Stay updated with latest AI and machine learning developments."
    },
    {
      name: "Open Source",
      icon: "🌐",
      description: "Contribute to open source projects and community initiatives."
    }
  ];

  const otherInterests = [
    {
      name: "Photography",
      icon: "📸",
      description: "Capture moments during travels and tech events."
    },
    {
      name: "Traveling",
      icon: "✈️",
      description: "Explore new places, cultures, and cuisines."
    },
    {
      name: "Reading",
      icon: "📚",
      description: "Tech blogs, research papers, and science fiction novels."
    },
    {
      name: "Music",
      icon: "🎵",
      description: "Enjoy various genres while coding and relaxing."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
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
            
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Interests & Hobbies</h1>
            <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond coding and technology, here's what keeps me motivated and balanced in life.
            </p>
          </div>

          {/* Sports Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Trophy className="w-8 h-8 mr-3 text-yellow-600" />
              Sports & Games
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sports.map((sport, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                      {sport.icon}
                    </div>
                    <CardTitle className="text-lg">{sport.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      {sport.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tech Interests Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Code className="w-8 h-8 mr-3 text-blue-600" />
              Tech Interests
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {techInterests.map((interest, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="text-3xl mr-4 group-hover:scale-110 transition-transform">
                        {interest.icon}
                      </div>
                      <CardTitle className="text-lg">{interest.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {interest.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Interests Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Heart className="w-8 h-8 mr-3 text-red-600" />
              Other Interests
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherInterests.map((interest, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group text-center">
                  <CardHeader>
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                      {interest.icon}
                    </div>
                    <CardTitle className="text-lg">{interest.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-sm">
                      {interest.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Fun Facts Section */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Fun Facts About Me</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-purple-600">350+</div>
                <div className="text-gray-600">LeetCode Problems</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">5+</div>
                <div className="text-gray-600">Sports I Play</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-green-600">10+</div>
                <div className="text-gray-600">Countries Visited</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestsHobbies;
