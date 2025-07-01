
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Target, Users, ChevronRight, Star, Clock, Check, TrendingUp, Award, Globe, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const roadmaps = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      description: 'Complete guide to modern frontend development with React, TypeScript, and advanced tooling',
      topics: 45,
      duration: '4-8 months',
      difficulty: 'Beginner to Advanced',
      color: 'from-blue-500 to-cyan-500',
      icon: '💻',
      category: 'development',
      learners: '2.1M',
      rating: 4.8,
      updated: '2024',
      skills: ['React', 'TypeScript', 'CSS', 'JavaScript', 'Next.js', 'Tailwind']
    },
    {
      id: 'backend',
      title: 'Backend Development',
      description: 'Master server-side development with Node.js, databases, APIs, and cloud deployment',
      topics: 52,
      duration: '5-10 months',
      difficulty: 'Intermediate to Advanced',
      color: 'from-green-500 to-emerald-500',
      icon: '⚙️',
      category: 'development',
      learners: '1.8M',
      rating: 4.7,
      updated: '2024',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS']
    },
    {
      id: 'devops',
      title: 'DevOps Engineer',
      description: 'Infrastructure as code, CI/CD pipelines, containerization, and cloud platform mastery',
      topics: 38,
      duration: '6-12 months',
      difficulty: 'Advanced',
      color: 'from-orange-500 to-red-500',
      icon: '🚀',
      category: 'operations',
      learners: '890K',
      rating: 4.6,
      updated: '2024',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Jenkins', 'Linux']
    },
    {
      id: 'fullstack',
      title: 'Full Stack Developer',
      description: 'End-to-end web development combining frontend mastery with backend expertise',
      topics: 68,
      duration: '8-15 months',
      difficulty: 'Beginner to Advanced',
      color: 'from-purple-500 to-pink-500',
      icon: '🌟',
      category: 'development',
      learners: '1.5M',
      rating: 4.9,
      updated: '2024',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker']
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      description: 'Build native and cross-platform mobile apps with React Native and Flutter',
      topics: 42,
      duration: '6-10 months',
      difficulty: 'Intermediate',
      color: 'from-indigo-500 to-purple-500',
      icon: '📱',
      category: 'development',
      learners: '1.2M',
      rating: 4.5,
      updated: '2024',
      skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo']
    },
    {
      id: 'data-science',
      title: 'Data Science',
      description: 'Analytics, machine learning, and data visualization for business insights',
      topics: 55,
      duration: '8-12 months',
      difficulty: 'Intermediate to Advanced',
      color: 'from-teal-500 to-blue-500',
      icon: '📊',
      category: 'data',
      learners: '950K',
      rating: 4.4,
      updated: '2024',
      skills: ['Python', 'SQL', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Tableau']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Paths', count: roadmaps.length },
    { id: 'development', label: 'Development', count: roadmaps.filter(r => r.category === 'development').length },
    { id: 'operations', label: 'Operations', count: roadmaps.filter(r => r.category === 'operations').length },
    { id: 'data', label: 'Data & AI', count: roadmaps.filter(r => r.category === 'data').length }
  ];

  const stats = [
    { icon: BookOpen, value: '300+', label: 'Learning Topics', color: 'text-blue-400' },
    { icon: Target, value: '6', label: 'Career Paths', color: 'text-green-400' },
    { icon: Users, value: '8.5M+', label: 'Active Learners', color: 'text-purple-400' },
    { icon: Award, value: '4.7', label: 'Average Rating', color: 'text-yellow-400' }
  ];

  const featuredSkills = [
    'JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'AWS', 'Docker', 'Kubernetes',
    'MongoDB', 'PostgreSQL', 'GraphQL', 'Next.js', 'Vue.js', 'Angular', 'Flutter', 'Swift'
  ];

  const filteredRoadmaps = roadmaps.filter(roadmap => {
    const matchesSearch = roadmap.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         roadmap.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         roadmap.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || roadmap.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              Developer
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Roadmaps
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Step by step guides and paths to learn different tools or technologies. 
              Community driven roadmaps, articles and resources for developers.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input 
                  placeholder="Search roadmaps, skills, or technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-4 text-lg bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Featured Skills */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {featuredSkills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="bg-slate-800/50 text-slate-300 hover:bg-slate-700 cursor-pointer transition-colors"
                  onClick={() => setSearchQuery(skill)}
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
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
              Role-based Roadmaps
            </h2>
            <p className="text-slate-300 text-lg">
              Comprehensive career paths designed by industry experts
            </p>
          </div>

          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
            <TabsList className="bg-slate-800/50 border border-slate-700">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id} 
                  className="data-[state=active]:bg-slate-700 data-[state=active]:text-white"
                >
                  {category.label} ({category.count})
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Roadmaps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoadmaps.map((roadmap) => (
              <Link key={roadmap.id} to={`/roadmaps/${roadmap.id}`}>
                <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${roadmap.color} rounded-xl flex items-center justify-center text-2xl`}>
                        {roadmap.icon}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-slate-400">{roadmap.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-white group-hover:text-blue-400 transition-colors text-lg">
                      {roadmap.title}
                    </CardTitle>
                    <CardDescription className="text-slate-400 text-sm leading-relaxed">
                      {roadmap.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {roadmap.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-slate-700/50 text-slate-300 text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {roadmap.skills.length > 3 && (
                        <Badge variant="secondary" className="bg-slate-700/50 text-slate-300 text-xs">
                          +{roadmap.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <BookOpen className="w-3 h-3 mr-1" />
                          {roadmap.topics}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {roadmap.duration}
                        </span>
                      </div>
                      <Badge variant="outline" className="border-slate-600 text-slate-400 text-xs">
                        {roadmap.difficulty}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-slate-500">
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3" />
                          <span>{roadmap.learners} learners</span>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 group-hover:translate-x-1 transition-transform">
                        Start Learning
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose DevPath?
            </h2>
            <p className="text-slate-300 text-lg">
              Everything you need to advance your tech career
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Interactive Progress</h3>
                <p className="text-slate-400">Track your learning journey with visual progress indicators and milestone achievements.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Community Driven</h3>
                <p className="text-slate-400">Learn from a community of developers and contribute to help others grow.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Hands-on Practice</h3>
                <p className="text-slate-400">Real-world projects and coding exercises to reinforce your learning.</p>
              </CardContent>
            </Card>
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
                Join millions of developers who are already using DevPath to advance their careers. 
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
              <p className="text-slate-400 mb-4">
                Your companion for structured tech learning and career growth.
              </p>
              <div className="flex items-center space-x-2 text-slate-400">
                <span>Updated {new Date().getFullYear()}</span>
              </div>
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
            <p>&copy; 2024 DevPath. Made with ❤️ for developers worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
