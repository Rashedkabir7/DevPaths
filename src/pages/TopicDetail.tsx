
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, CheckCircle, Star, Bookmark, ExternalLink, PlayCircle, FileText, Video, Link2, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

const TopicDetail = () => {
  const { topicId } = useParams();
  const [isCompleted, setIsCompleted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const topicData = {
    'react-basics': {
      title: 'React Fundamentals',
      description: 'Learn the core concepts of React including components, props, state, and the component lifecycle.',
      estimatedTime: '3 weeks',
      difficulty: 'Beginner',
      roadmap: 'Frontend Development',
      category: 'Frameworks',
      overview: `React is a powerful JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components and manage application state efficiently.

In this comprehensive guide, you'll learn the fundamental concepts that form the backbone of React development. We'll start with understanding what React is and why it's so popular, then dive deep into components, JSX, props, and state management.`,
      
      learningObjectives: [
        'Understand what React is and its core philosophy',
        'Create functional and class components',
        'Work with JSX syntax and rendering',
        'Pass data between components using props',
        'Manage component state effectively',
        'Handle events in React applications',
        'Understand the component lifecycle'
      ],
      
      content: {
        overview: {
          title: 'What is React?',
          content: `React is a JavaScript library developed by Facebook for building user interfaces. It follows a component-based architecture where UIs are broken down into reusable components.

Key features of React:
• **Component-Based**: Build encapsulated components that manage their own state
• **Declarative**: Describe what the UI should look like for any given state
• **Learn Once, Write Anywhere**: Use React on the server, mobile apps, and desktop applications
• **Virtual DOM**: Efficient updating and rendering of components

React makes it painless to create interactive UIs by updating and rendering components when data changes.`
        },
        components: {
          title: 'Components & JSX',
          content: `Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces.

**Functional Components:**
\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
\`\`\`

**JSX (JavaScript XML):**
JSX allows you to write HTML-like syntax in JavaScript. It makes React components more readable and writable.

**Key JSX Rules:**
• Return a single parent element or React Fragment
• Use camelCase for attributes (className instead of class)
• Self-closing tags must end with />
• JavaScript expressions go inside curly braces {}`
        },
        props: {
          title: 'Props (Properties)',
          content: `Props are how components communicate with each other. They allow you to pass data from parent components to child components.

**Passing Props:**
\`\`\`jsx
<Welcome name="Alice" age={25} />
\`\`\`

**Receiving Props:**
\`\`\`jsx
function Welcome(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>You are {props.age} years old.</p>
    </div>
  );
}
\`\`\`

**Important Notes:**
• Props are read-only (immutable)
• Always treat props as pure functions
• Use destructuring to make code cleaner`
        },
        state: {
          title: 'State Management',
          content: `State allows components to create and manage their own data. Unlike props, state is mutable and private to the component.

**Using useState Hook:**
\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

**State Rules:**
• Never modify state directly
• State updates are asynchronous
• Use functional updates for complex state logic`
        }
      },
      
      resources: [
        {
          type: 'video',
          title: 'React in 100 Seconds',
          description: 'Quick overview of React fundamentals',
          url: '#',
          duration: '2 min',
          free: true
        },
        {
          type: 'article',
          title: 'Official React Documentation',
          description: 'Comprehensive guide from the React team',
          url: 'https://react.dev',
          duration: '30 min read',
          free: true
        },
        {
          type: 'video',
          title: 'Complete React Course',
          description: 'Full course covering React fundamentals',
          url: '#',
          duration: '8 hours',
          free: false
        },
        {
          type: 'article',
          title: 'React Component Patterns',
          description: 'Best practices for React components',
          url: '#',
          duration: '15 min read',
          free: true
        },
        {
          type: 'link',
          title: 'React DevTools',
          description: 'Browser extension for debugging React',
          url: '#',
          duration: 'Tool',
          free: true
        }
      ],
      
      exercises: [
        {
          title: 'Create Your First Component',
          description: 'Build a simple greeting component that accepts a name prop',
          difficulty: 'Easy',
          time: '15 min'
        },
        {
          title: 'Build a Counter App',
          description: 'Create a counter with increment and decrement buttons using state',
          difficulty: 'Easy',
          time: '30 min'
        },
        {
          title: 'Todo List Component',
          description: 'Build a todo list that manages a list of tasks in state',
          difficulty: 'Medium',
          time: '1 hour'
        }
      ]
    }
  };

  const topic = topicData[topicId as keyof typeof topicData] || topicData['react-basics'];

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'article': return <FileText className="w-4 h-4" />;
      case 'link': return <Link2 className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/roadmaps/frontend">
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Roadmap
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
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="text-slate-400 hover:text-yellow-400"
              >
                {isBookmarked ? 
                  <Star className="w-4 h-4 fill-current text-yellow-400" /> : 
                  <Bookmark className="w-4 h-4" />
                }
              </Button>
              <Button 
                onClick={() => setIsCompleted(!isCompleted)}
                className={isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'}
              >
                {isCompleted ? <CheckCircle className="w-4 h-4 mr-2" /> : <Circle className="w-4 h-4 mr-2" />}
                {isCompleted ? 'Completed' : 'Mark Complete'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Topic Header */}
        <div className="mb-8">
          <div className="mb-4">
            <Link to="/roadmaps/frontend" className="text-blue-400 hover:text-blue-300 text-sm">
              {topic.roadmap} → {topic.category}
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">{topic.title}</h1>
          <p className="text-xl text-slate-300 mb-6">{topic.description}</p>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge variant="outline" className="border-slate-600 text-slate-300">
              <Clock className="w-3 h-3 mr-1" />
              {topic.estimatedTime}
            </Badge>
            <Badge variant="outline" className="border-slate-600 text-slate-300">
              {topic.difficulty}
            </Badge>
            <Badge variant="outline" className="border-slate-600 text-slate-300">
              <BookOpen className="w-3 h-3 mr-1" />
              {topic.resources.length} resources
            </Badge>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="content" className="space-y-6">
          <TabsList className="bg-slate-800/50 border border-slate-700">
            <TabsTrigger value="content" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              Content
            </TabsTrigger>
            <TabsTrigger value="resources" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              Resources
            </TabsTrigger>
            <TabsTrigger value="exercises" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              Exercises
            </TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-6">
            {/* Overview */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                    {topic.overview}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Learning Objectives */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Learning Objectives</CardTitle>
                <CardDescription className="text-slate-400">
                  By the end of this topic, you will be able to:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {topic.learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start space-x-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Content Sections */}
            {Object.entries(topic.content).map(([key, section]) => (
              <Card key={key} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-invert max-w-none">
                    <pre className="text-slate-300 leading-relaxed whitespace-pre-line font-sans">
                      {section.content}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="grid gap-4">
              {topic.resources.map((resource, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                          {getResourceIcon(resource.type)}
                        </div>
                        <div>
                          <h3 className="font-medium text-white mb-1">{resource.title}</h3>
                          <p className="text-slate-400 text-sm mb-2">{resource.description}</p>
                          <div className="flex items-center space-x-3">
                            <Badge variant="outline" className="border-slate-600 text-slate-400 text-xs">
                              {resource.duration}
                            </Badge>
                            {resource.free && (
                              <Badge className="bg-green-600/20 text-green-400 text-xs">
                                Free
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Open
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="exercises" className="space-y-6">
            <div className="grid gap-4">
              {topic.exercises.map((exercise, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-white mb-2">{exercise.title}</h3>
                        <p className="text-slate-400 mb-3">{exercise.description}</p>
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline" className="border-slate-600 text-slate-400">
                            {exercise.difficulty}
                          </Badge>
                          <Badge variant="outline" className="border-slate-600 text-slate-400">
                            <Clock className="w-3 h-3 mr-1" />
                            {exercise.time}
                          </Badge>
                        </div>
                      </div>
                      <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <PlayCircle className="w-4 h-4 mr-1" />
                        Start
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TopicDetail;
