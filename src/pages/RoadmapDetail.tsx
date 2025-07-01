
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, CheckCircle, Circle, Star, Bookmark, ExternalLink, PlayCircle, Users, Award, TrendingUp, Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const RoadmapDetail = () => {
  const { id } = useParams();
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());
  const [bookmarkedTopics, setBookmarkedTopics] = useState<Set<string>>(new Set());
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['fundamentals']));
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');

  const roadmapData = {
    frontend: {
      title: 'Frontend Development',
      description: 'Master modern frontend technologies and build beautiful, interactive user interfaces that users love',
      longDescription: 'This comprehensive frontend development roadmap covers everything from the basics of HTML, CSS, and JavaScript to advanced topics like React, TypeScript, testing, and deployment. You\'ll learn industry best practices, modern tooling, and how to build scalable, maintainable applications.',
      totalTopics: 45,
      estimatedTime: '4-8 months',
      difficulty: 'Beginner to Advanced',
      color: 'from-blue-500 to-cyan-500',
      learners: '2.1M',
      rating: 4.8,
      lastUpdated: 'December 2024',
      prerequisites: ['Basic computer skills', 'Understanding of how websites work'],
      outcomes: [
        'Build responsive web applications',
        'Master React and modern JavaScript',
        'Understand state management patterns',
        'Deploy applications to production',
        'Write maintainable, testable code'
      ],
      sections: [
        {
          id: 'fundamentals',
          title: 'Web Fundamentals',
          description: 'Essential building blocks of web development',
          difficulty: 'Beginner',
          estimatedTime: '4-6 weeks',
          topics: [
            { 
              id: 'html', 
              title: 'HTML5 & Semantic Markup', 
              description: 'Structure and meaning in web documents, accessibility best practices', 
              time: '1 week', 
              difficulty: 'Beginner',
              resources: 8,
              importance: 'Critical',
              skills: ['HTML5', 'Accessibility', 'SEO']
            },
            { 
              id: 'css', 
              title: 'CSS3 & Modern Layouts', 
              description: 'Styling, flexbox, grid, responsive design, and CSS animations', 
              time: '2-3 weeks', 
              difficulty: 'Beginner',
              resources: 12,
              importance: 'Critical',
              skills: ['CSS3', 'Flexbox', 'Grid', 'Responsive Design']
            },
            { 
              id: 'js-basics', 
              title: 'JavaScript Fundamentals', 
              description: 'Variables, functions, DOM manipulation, and event handling', 
              time: '3-4 weeks', 
              difficulty: 'Beginner',
              resources: 15,
              importance: 'Critical',
              skills: ['JavaScript', 'DOM', 'Events', 'ES6+']
            }
          ]
        },
        {
          id: 'advanced-js',
          title: 'Advanced JavaScript',
          description: 'Modern JavaScript features and asynchronous programming',
          difficulty: 'Intermediate',
          estimatedTime: '6-8 weeks',
          topics: [
            { 
              id: 'es6', 
              title: 'ES6+ Features', 
              description: 'Arrow functions, destructuring, modules, classes, and modern syntax', 
              time: '2 weeks', 
              difficulty: 'Intermediate',
              resources: 10,
              importance: 'High',
              skills: ['ES6+', 'Modules', 'Classes', 'Destructuring']
            },
            { 
              id: 'async', 
              title: 'Asynchronous JavaScript', 
              description: 'Promises, async/await, fetch API, and error handling', 
              time: '2-3 weeks', 
              difficulty: 'Intermediate',
              resources: 12,
              importance: 'Critical',
              skills: ['Promises', 'Async/Await', 'Fetch API', 'Error Handling']
            },
            { 
              id: 'api', 
              title: 'Working with APIs', 
              description: 'REST APIs, GraphQL, authentication, and data fetching patterns', 
              time: '2 weeks', 
              difficulty: 'Intermediate',
              resources: 8,
              importance: 'High',
              skills: ['REST', 'GraphQL', 'Authentication', 'HTTP']
            }
          ]
        },
        {
          id: 'frameworks',
          title: 'Frontend Frameworks',
          description: 'Modern JavaScript libraries and frameworks',
          difficulty: 'Intermediate to Advanced',
          estimatedTime: '8-12 weeks',
          topics: [
            { 
              id: 'react-basics', 
              title: 'React Fundamentals', 
              description: 'Components, props, state, lifecycle methods, and React patterns', 
              time: '3-4 weeks', 
              difficulty: 'Intermediate',
              resources: 20,
              importance: 'Critical',
              skills: ['React', 'JSX', 'Components', 'Props', 'State']
            },
            { 
              id: 'react-hooks', 
              title: 'React Hooks & Advanced Patterns', 
              description: 'useState, useEffect, custom hooks, context, and performance optimization', 
              time: '2-3 weeks', 
              difficulty: 'Intermediate',
              resources: 15,
              importance: 'Critical',
              skills: ['Hooks', 'Context', 'Performance', 'Custom Hooks']
            },
            { 
              id: 'state-management', 
              title: 'State Management', 
              description: 'Redux, Zustand, Context API, and state management patterns', 
              time: '2-3 weeks', 
              difficulty: 'Advanced',
              resources: 12,
              importance: 'High',
              skills: ['Redux', 'Zustand', 'State Patterns', 'Context API']
            }
          ]
        },
        {
          id: 'tools',
          title: 'Development Tools & Workflow',
          description: 'Essential tools for modern frontend development',
          difficulty: 'Intermediate',
          estimatedTime: '4-6 weeks',
          topics: [
            { 
              id: 'version-control', 
              title: 'Git & GitHub', 
              description: 'Version control, branching strategies, and collaborative development', 
              time: '1-2 weeks', 
              difficulty: 'Beginner',
              resources: 10,
              importance: 'Critical',
              skills: ['Git', 'GitHub', 'Version Control', 'Collaboration']
            },
            { 
              id: 'bundlers', 
              title: 'Build Tools & Bundlers', 
              description: 'Webpack, Vite, Parcel, npm/yarn, and development workflows', 
              time: '2 weeks', 
              difficulty: 'Intermediate',
              resources: 8,
              importance: 'High',
              skills: ['Webpack', 'Vite', 'npm', 'Build Tools']
            },
            { 
              id: 'testing', 
              title: 'Testing & Quality Assurance', 
              description: 'Unit testing, integration testing, E2E testing, and code quality', 
              time: '2-3 weeks', 
              difficulty: 'Intermediate',
              resources: 12,
              importance: 'High',
              skills: ['Jest', 'Testing Library', 'Cypress', 'Code Quality']
            }
          ]
        },
        {
          id: 'advanced',
          title: 'Advanced Concepts',
          description: 'Advanced topics for senior frontend developers',
          difficulty: 'Advanced',
          estimatedTime: '6-10 weeks',
          topics: [
            { 
              id: 'typescript', 
              title: 'TypeScript', 
              description: 'Static typing, interfaces, generics, and advanced TypeScript patterns', 
              time: '3-4 weeks', 
              difficulty: 'Advanced',
              resources: 15,
              importance: 'High',
              skills: ['TypeScript', 'Types', 'Interfaces', 'Generics']
            },
            { 
              id: 'performance', 
              title: 'Performance Optimization', 
              description: 'Bundle optimization, lazy loading, caching, and performance monitoring', 
              time: '2-3 weeks', 
              difficulty: 'Advanced',
              resources: 10,
              importance: 'High',
              skills: ['Performance', 'Optimization', 'Caching', 'Monitoring']
            },
            { 
              id: 'deployment', 
              title: 'Deployment & DevOps', 
              description: 'CI/CD, containerization, cloud deployment, and monitoring', 
              time: '2-3 weeks', 
              difficulty: 'Advanced',
              resources: 8,
              importance: 'Medium',
              skills: ['CI/CD', 'Docker', 'AWS', 'Deployment']
            }
          ]
        }
      ]
    }
  };

  const currentRoadmap = roadmapData[id as keyof typeof roadmapData] || roadmapData.frontend;
  const allTopics = currentRoadmap.sections.flatMap(section => section.topics);
  const progressPercentage = (completedTopics.size / currentRoadmap.totalTopics) * 100;

  const filteredSections = currentRoadmap.sections.map(section => ({
    ...section,
    topics: section.topics.filter(topic => 
      difficultyFilter === 'all' || topic.difficulty.toLowerCase() === difficultyFilter
    )
  })).filter(section => section.topics.length > 0);

  const toggleTopicComplete = (topicId: string) => {
    const newCompleted = new Set(completedTopics);
    if (newCompleted.has(topicId)) {
      newCompleted.delete(topicId);
    } else {
      newCompleted.add(topicId);
    }
    setCompletedTopics(newCompleted);
  };

  const toggleBookmark = (topicId: string) => {
    const newBookmarked = new Set(bookmarkedTopics);
    if (newBookmarked.has(topicId)) {
      newBookmarked.delete(topicId);
    } else {
      newBookmarked.add(topicId);
    }
    setBookmarkedTopics(newBookmarked);
  };

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'Critical': return 'text-red-400 bg-red-400/10';
      case 'High': return 'text-orange-400 bg-orange-400/10';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/10';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10';
      case 'Advanced': return 'text-red-400 bg-red-400/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">D</span>
                </div>
                <span className="text-xl font-bold text-white">DevPath</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}
                className="text-slate-400 hover:text-white"
              >
                {viewMode === 'list' ? <Grid className="w-4 h-4" /> : <List className="w-4 h-4" />}
              </Button>
              <div className="flex items-center space-x-1 bg-slate-800/50 rounded-md p-1">
                {['all', 'beginner', 'intermediate', 'advanced'].map((filter) => (
                  <Button
                    key={filter}
                    variant={difficultyFilter === filter ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setDifficultyFilter(filter)}
                    className="text-xs capitalize"
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Roadmap Header */}
        <div className="mb-8">
          <div className={`h-40 bg-gradient-to-r ${currentRoadmap.color} rounded-xl mb-6 flex items-center justify-center relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{currentRoadmap.title}</h1>
              <p className="text-xl text-white/80">{currentRoadmap.description}</p>
            </div>
          </div>
          
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="bg-slate-800/50 border border-slate-700">
              <TabsTrigger value="overview" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
                Overview
              </TabsTrigger>
              <TabsTrigger value="roadmap" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
                Roadmap
              </TabsTrigger>
              <TabsTrigger value="resources" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
                Resources
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-8 h-8 text-blue-400" />
                      <div>
                        <div className="text-2xl font-bold text-white">{currentRoadmap.totalTopics}</div>
                        <div className="text-slate-400">Topics</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-8 h-8 text-green-400" />
                      <div>
                        <div className="text-2xl font-bold text-white">{currentRoadmap.estimatedTime}</div>
                        <div className="text-slate-400">Est. Time</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <Users className="w-8 h-8 text-purple-400" />
                      <div>
                        <div className="text-2xl font-bold text-white">{currentRoadmap.learners}</div>
                        <div className="text-slate-400">Learners</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <Star className="w-8 h-8 text-yellow-400" />
                      <div>
                        <div className="text-2xl font-bold text-white">{currentRoadmap.rating}</div>
                        <div className="text-slate-400">Rating</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Progress Card */}
              <Card className="bg-slate-800/50 border-slate-700 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-medium">Overall Progress</span>
                    <span className="text-slate-400">{completedTopics.size}/{currentRoadmap.totalTopics} topics completed</span>
                  </div>
                  <Progress value={progressPercentage} className="h-3 mb-2" />
                  <div className="text-sm text-slate-400">
                    {Math.round(progressPercentage)}% complete
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">About This Roadmap</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    {currentRoadmap.longDescription}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Prerequisites</h4>
                      <ul className="space-y-2">
                        {currentRoadmap.prerequisites.map((prereq, index) => (
                          <li key={index} className="flex items-start space-x-2 text-slate-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{prereq}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Learning Outcomes</h4>
                      <ul className="space-y-2">
                        {currentRoadmap.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start space-x-2 text-slate-300">
                            <Award className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="roadmap" className="space-y-6">
              {/* Roadmap Content */}
              {filteredSections.map((section) => (
                <Card key={section.id} className="bg-slate-800/50 border-slate-700">
                  <Collapsible 
                    open={expandedSections.has(section.id)}
                    onOpenChange={() => toggleSection(section.id)}
                  >
                    <CollapsibleTrigger asChild>
                      <CardHeader className="cursor-pointer hover:bg-slate-800/30 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-start space-x-4">
                            {expandedSections.has(section.id) ? 
                              <ChevronDown className="w-5 h-5 mt-1 text-slate-400" /> : 
                              <ChevronRight className="w-5 h-5 mt-1 text-slate-400" />
                            }
                            <div>
                              <CardTitle className="text-white text-xl mb-2">
                                {section.title}
                              </CardTitle>
                              <CardDescription className="text-slate-400 mb-3">
                                {section.description}
                              </CardDescription>
                              <div className="flex items-center space-x-3">
                                <Badge className={getDifficultyColor(section.difficulty)}>
                                  {section.difficulty}
                                </Badge>
                                <Badge variant="outline" className="border-slate-600 text-slate-400">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {section.estimatedTime}
                                </Badge>
                                <Badge variant="outline" className="border-slate-600 text-slate-400">
                                  {section.topics.length} topics
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <div className={viewMode === 'grid' ? "grid md:grid-cols-2 gap-4" : "space-y-4"}>
                          {section.topics.map((topic, index) => (
                            <div key={topic.id} className="p-4 bg-slate-900/30 rounded-lg border border-slate-700/50 hover:bg-slate-900/50 transition-colors">
                              <div className="flex items-start space-x-4">
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => toggleTopicComplete(topic.id)}
                                  className="mt-1 p-0 w-6 h-6"
                                >
                                  {completedTopics.has(topic.id) ? 
                                    <CheckCircle className="w-5 h-5 text-green-400" /> : 
                                    <Circle className="w-5 h-5 text-slate-400" />
                                  }
                                </Button>
                                
                                <div className="flex-1">
                                  <div className="flex items-start justify-between mb-2">
                                    <div className="flex-1">
                                      <Link to={`/topics/${topic.id}`}>
                                        <h4 className={`font-medium hover:text-blue-400 transition-colors cursor-pointer ${completedTopics.has(topic.id) ? 'text-green-400 line-through' : 'text-white'}`}>
                                          {topic.title}
                                        </h4>
                                      </Link>
                                      <p className="text-slate-400 text-sm mt-1 leading-relaxed">{topic.description}</p>
                                    </div>
                                    
                                    <div className="flex items-center space-x-2 ml-4">
                                      <Button 
                                        variant="ghost" 
                                        size="sm"
                                        onClick={() => toggleBookmark(topic.id)}
                                        className="text-slate-400 hover:text-yellow-400"
                                      >
                                        {bookmarkedTopics.has(topic.id) ? 
                                          <Star className="w-4 h-4 fill-current text-yellow-400" /> : 
                                          <Bookmark className="w-4 h-4" />
                                        }
                                      </Button>
                                    </div>
                                  </div>
                                  
                                  <div className="flex flex-wrap gap-2 mb-3">
                                    <Badge className={getDifficultyColor(topic.difficulty)} variant="secondary">
                                      {topic.difficulty}
                                    </Badge>
                                    <Badge className={getImportanceColor(topic.importance)} variant="secondary">
                                      {topic.importance}
                                    </Badge>
                                    <Badge variant="outline" className="border-slate-600 text-slate-400">
                                      <Clock className="w-3 h-3 mr-1" />
                                      {topic.time}
                                    </Badge>
                                    <Badge variant="outline" className="border-slate-600 text-slate-400">
                                      <BookOpen className="w-3 h-3 mr-1" />
                                      {topic.resources} resources
                                    </Badge>
                                  </div>
                                  
                                  <div className="flex flex-wrap gap-1 mb-3">
                                    {topic.skills.slice(0, 4).map((skill) => (
                                      <Badge key={skill} variant="secondary" className="bg-slate-700/50 text-slate-300 text-xs">
                                        {skill}
                                      </Badge>
                                    ))}
                                    {topic.skills.length > 4 && (
                                      <Badge variant="secondary" className="bg-slate-700/50 text-slate-300 text-xs">
                                        +{topic.skills.length - 4}
                                      </Badge>
                                    )}
                                  </div>
                                  
                                  <div className="flex items-center justify-between">
                                    <div className="text-xs text-slate-500">
                                      Topic {index + 1} of {section.topics.length}
                                    </div>
                                    <Link to={`/topics/${topic.id}`}>
                                      <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                                        <PlayCircle className="w-4 h-4 mr-1" />
                                        Learn
                                      </Button>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="resources" className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Additional Resources</CardTitle>
                  <CardDescription className="text-slate-400">
                    Curated resources to supplement your learning journey
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Official Documentation</h4>
                      <ul className="space-y-2">
                        <li><a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">MDN Web Docs</a></li>
                        <li><a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">React Documentation</a></li>
                        <li><a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">TypeScript Handbook</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Community & Practice</h4>
                      <ul className="space-y-2">
                        <li><a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Frontend Mentor</a></li>
                        <li><a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">CodePen Challenges</a></li>
                        <li><a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Dev.to Community</a></li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default RoadmapDetail;
