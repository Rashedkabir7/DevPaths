
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Target, Users, ChevronRight, Star, Clock, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const roadmaps = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      description: 'Master modern frontend technologies including React, Vue, and advanced CSS',
      topics: 28,
      duration: '3-6 months',
      difficulty: 'Beginner to Advanced',
      color: 'from-blue-500 to-cyan-500',
      icon: '🎨'
    },
    {
      id: 'backend',
      title: 'Backend Development',
      description: 'Learn server-side development with Node.js, databases, and API design',
      topics: 32,
      duration: '4-8 months',
      difficulty: 'Intermediate',
      color: 'from-green-500 to-emerald-500',
      icon: '⚙️'
    },
    {
      id: 'devops',
      title: 'DevOps Engineer',
      description: 'Infrastructure, CI/CD, containerization, and cloud platforms',
      topics: 24,
      duration: '6-12 months',
      difficulty: 'Advanced',
      color: 'from-orange-500 to-red-500',
      icon: '🚀'
    },
    {
      id: 'fullstack',
      title: 'Full Stack Developer',
      description: 'Complete web development combining frontend and backend skills',
      topics: 45,
      duration: '8-12 months',
      difficulty: 'Beginner to Advanced',
      color: 'from-purple-500 to-pink-500',
      icon: '🌟'
    }
  ];

  const stats = [
    { icon: BookOpen, value: '129', label: 'Learning Topics' },
    { icon: Target, value: '4', label: 'Career Paths' },
    { icon: Users, value: '2.5k+', label: 'Active Learners' },
    { icon: Star, value: '4.9', label: 'User Rating' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold text-white">DevPath</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/roadmaps" className="text-slate-300 hover:text-white transition-colors">Roadmaps</Link>
              <Link to="/topics" className="text-slate-300 hover:text-white transition-colors">Topics</Link>
              <Link to="/progress" className="text-slate-300 hover:text-white transition-colors">Progress</Link>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Tech Career
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Roadmap
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Navigate your learning journey with structured roadmaps, track your progress, 
              and master the skills needed for your dream tech career.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input 
                  placeholder="Search roadmaps, topics, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-4 text-lg bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmaps Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Path
            </h2>
            <p className="text-slate-300 text-lg">
              Structured learning roadmaps designed by industry experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {roadmaps.map((roadmap) => (
              <Card key={roadmap.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${roadmap.color} rounded-xl flex items-center justify-center text-2xl`}>
                        {roadmap.icon}
                      </div>
                      <div>
                        <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                          {roadmap.title}
                        </CardTitle>
                        <CardDescription className="text-slate-400">
                          {roadmap.description}
                        </CardDescription>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                      <BookOpen className="w-3 h-3 mr-1" />
                      {roadmap.topics} topics
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                      <Clock className="w-3 h-3 mr-1" />
                      {roadmap.duration}
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                      {roadmap.difficulty}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-400">
                      Progress: 0%
                    </div>
                    <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10">
                      Start Learning
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <CardContent className="py-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Join thousands of developers who are already using DevPath to advance their careers. 
                Track your progress, bookmark important topics, and never lose sight of your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Create Free Account
                </Button>
                <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                  Explore Roadmaps
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">D</span>
                </div>
                <span className="text-xl font-bold text-white">DevPath</span>
              </div>
              <p className="text-slate-400">
                Your companion for structured tech learning and career growth.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Roadmaps</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/roadmaps/frontend" className="hover:text-white transition-colors">Frontend</Link></li>
                <li><Link to="/roadmaps/backend" className="hover:text-white transition-colors">Backend</Link></li>
                <li><Link to="/roadmaps/devops" className="hover:text-white transition-colors">DevOps</Link></li>
                <li><Link to="/roadmaps/fullstack" className="hover:text-white transition-colors">Full Stack</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Features</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/progress" className="hover:text-white transition-colors">Progress Tracking</Link></li>
                <li><Link to="/bookmarks" className="hover:text-white transition-colors">Bookmarks</Link></li>
                <li><Link to="/search" className="hover:text-white transition-colors">Search</Link></li>
                <li><Link to="/community" className="hover:text-white transition-colors">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/feedback" className="hover:text-white transition-colors">Feedback</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800/50 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 DevPath. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
