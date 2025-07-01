
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, CheckCircle, Circle, Star, Bookmark, ExternalLink, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronRight } from 'lucide-react';

const RoadmapDetail = () => {
  const { id } = useParams();
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());
  const [bookmarkedTopics, setBookmarkedTopics] = useState<Set<string>>(new Set());
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['basics']));

  const roadmapData = {
    frontend: {
      title: 'Frontend Development',
      description: 'Master modern frontend technologies and build beautiful, interactive user interfaces',
      totalTopics: 28,
      estimatedTime: '3-6 months',
      difficulty: 'Beginner to Advanced',
      color: 'from-blue-500 to-cyan-500',
      sections: [
        {
          id: 'basics',
          title: 'Web Fundamentals',
          description: 'Essential building blocks of web development',
          topics: [
            { id: 'html', title: 'HTML5 & Semantic Markup', description: 'Structure and meaning in web documents', time: '1 week', resources: 3 },
            { id: 'css', title: 'CSS3 & Layouts', description: 'Styling, flexbox, grid, and responsive design', time: '2 weeks', resources: 5 },
            { id: 'js-basics', title: 'JavaScript Fundamentals', description: 'Variables, functions, DOM manipulation', time: '3 weeks', resources: 7 }
          ]
        },
        {
          id: 'advanced-js',
          title: 'Advanced JavaScript',
          description: 'Modern JavaScript features and concepts',
          topics: [
            { id: 'es6', title: 'ES6+ Features', description: 'Arrow functions, destructuring, modules', time: '2 weeks', resources: 4 },
            { id: 'async', title: 'Asynchronous JavaScript', description: 'Promises, async/await, fetch API', time: '2 weeks', resources: 6 },
            { id: 'api', title: 'Working with APIs', description: 'REST APIs, JSON, error handling', time: '1 week', resources: 3 }
          ]
        },
        {
          id: 'frameworks',
          title: 'Frontend Frameworks',
          description: 'Modern JavaScript frameworks and libraries',
          topics: [
            { id: 'react-basics', title: 'React Fundamentals', description: 'Components, props, state, lifecycle', time: '3 weeks', resources: 8 },
            { id: 'react-hooks', title: 'React Hooks', description: 'useState, useEffect, custom hooks', time: '2 weeks', resources: 5 },
            { id: 'state-management', title: 'State Management', description: 'Context API, Redux, Zustand', time: '2 weeks', resources: 6 }
          ]
        },
        {
          id: 'tools',
          title: 'Development Tools',
          description: 'Tools and workflows for modern development',
          topics: [
            { id: 'version-control', title: 'Git & GitHub', description: 'Version control and collaboration', time: '1 week', resources: 4 },
            { id: 'bundlers', title: 'Build Tools', description: 'Webpack, Vite, npm/yarn', time: '1 week', resources: 3 },
            { id: 'testing', title: 'Testing', description: 'Unit testing, integration testing', time: '2 weeks', resources: 5 }
          ]
        }
      ]
    }
  };

  const currentRoadmap = roadmapData[id as keyof typeof roadmapData] || roadmapData.frontend;
  const progressPercentage = (completedTopics.size / currentRoadmap.totalTopics) * 100;

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
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
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Roadmap Header */}
        <div className="mb-8">
          <div className={`h-32 bg-gradient-to-r ${currentRoadmap.color} rounded-xl mb-6 flex items-center justify-center`}>
            <h1 className="text-4xl font-bold text-white">{currentRoadmap.title}</h1>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
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
                  <CheckCircle className="w-8 h-8 text-purple-400" />
                  <div>
                    <div className="text-2xl font-bold text-white">{Math.round(progressPercentage)}%</div>
                    <div className="text-slate-400">Complete</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-slate-800/50 border-slate-700 mb-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-medium">Overall Progress</span>
                <span className="text-slate-400">{completedTopics.size}/{currentRoadmap.totalTopics} topics</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </CardContent>
          </Card>
        </div>

        {/* Roadmap Content */}
        <div className="space-y-6">
          {currentRoadmap.sections.map((section) => (
            <Card key={section.id} className="bg-slate-800/50 border-slate-700">
              <Collapsible 
                open={expandedSections.has(section.id)}
                onOpenChange={() => toggleSection(section.id)}
              >
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-slate-800/30 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-white flex items-center space-x-3">
                          {expandedSections.has(section.id) ? 
                            <ChevronDown className="w-5 h-5" /> : 
                            <ChevronRight className="w-5 h-5" />
                          }
                          <span>{section.title}</span>
                        </CardTitle>
                        <CardDescription className="text-slate-400 ml-8">
                          {section.description}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                        {section.topics.length} topics
                      </Badge>
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {section.topics.map((topic, index) => (
                        <div key={topic.id} className="flex items-start space-x-4 p-4 bg-slate-900/30 rounded-lg border border-slate-700/50">
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
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className={`font-medium ${completedTopics.has(topic.id) ? 'text-green-400 line-through' : 'text-white'}`}>
                                  {topic.title}
                                </h4>
                                <p className="text-slate-400 text-sm mt-1">{topic.description}</p>
                                <div className="flex items-center space-x-4 mt-2">
                                  <Badge variant="outline" className="border-slate-600 text-slate-400">
                                    <Clock className="w-3 h-3 mr-1" />
                                    {topic.time}
                                  </Badge>
                                  <Badge variant="outline" className="border-slate-600 text-slate-400">
                                    <BookOpen className="w-3 h-3 mr-1" />
                                    {topic.resources} resources
                                  </Badge>
                                </div>
                              </div>
                              
                              <div className="flex items-center space-x-2">
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
                                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                                  <PlayCircle className="w-4 h-4 mr-1" />
                                  Learn
                                </Button>
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
        </div>
      </div>
    </div>
  );
};

export default RoadmapDetail;
