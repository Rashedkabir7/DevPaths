
export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'video' | 'article' | 'course' | 'tutorial' | 'documentation' | 'book' | 'interactive' | 'tool' | 'practice';
  platform: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  free: boolean;
  rating: number;
  views?: string;
  author?: string;
  tags: string[];
}

export const platformLogos: Record<string, string> = {
  'YouTube': '🎥',
  'GeeksforGeeks': '💻',
  'MDN': '📚',
  'W3Schools': '🎓',
  'FreeCodeCamp': '🔥',
  'Codecademy': '💡',
  'Khan Academy': '🎯',
  'Coursera': '🎓',
  'edX': '🏛️',
  'Udemy': '📖',
  'Pluralsight': '🚀',
  'LinkedIn Learning': '💼',
  'GitHub': '🐙',
  'Stack Overflow': '❓',
  'Dev.to': '👨‍💻',
  'Medium': '📝',
  'CSS-Tricks': '🎨',
  'JavaScript.info': '⚡',
  'React.dev': '⚛️',
  'Vue.js': '💚',
  'Angular': '🅰️',
  'Node.js': '🟢',
  'Express.js': '🚂',
  'MongoDB University': '🍃',
  'PostgreSQL Tutorial': '🐘',
  'Docker': '🐳',
  'Kubernetes': '☸️',
  'AWS': '☁️',
  'Google Cloud': '🌩️',
  'Microsoft Learn': '🪟',
  'Netlify': '🌐',
  'Vercel': '▲',
  'Heroku': '🟣',
  'Firebase': '🔥',
  'Supabase': '⚡',
  'Prisma': '🔷',
  'GraphQL': '💎',
  'Apollo': '🚀',
  'Jest': '🃏',
  'Cypress': '🌲',
  'Storybook': '📚',
  'Figma': '🎨',
  'Dribbble': '🏀',
  'Behance': '🎭',
  'CodePen': '✏️',
  'JSFiddle': '🎻',
  'CodeSandbox': '📦',
  'Repl.it': '🔄',
  'Glitch': '🎪',
  'Observable': '👁️',
  'Kaggle': '📊',
  'LeetCode': '💡',
  'HackerRank': '👨‍💻',
  'Codewars': '⚔️',
  'exercism': '🏃‍♂️',
  'Project Euler': '🔢',
  'Advent of Code': '🎄'
};

export const resourcesDatabase: Record<string, Resource[]> = {
  'html-css': [
    {
      id: 'html-mdn-guide',
      title: 'HTML: HyperText Markup Language',
      description: 'Complete HTML reference and learning guide from Mozilla Developer Network',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      type: 'documentation',
      platform: 'MDN',
      difficulty: 'Beginner',
      duration: '3-4 hours read',
      free: true,
      rating: 4.9,
      views: '10M+',
      tags: ['html', 'web-development', 'markup', 'semantics']
    },
    {
      id: 'css-complete-guide',
      title: 'CSS: The Complete Guide',
      description: 'Comprehensive CSS tutorial covering all properties and techniques',
      url: 'https://www.w3schools.com/css/',
      type: 'tutorial',
      platform: 'W3Schools',
      difficulty: 'Beginner',
      duration: '6-8 hours',
      free: true,
      rating: 4.7,
      views: '25M+',
      tags: ['css', 'styling', 'layout', 'responsive']
    },
    {
      id: 'html-css-freecodecamp',
      title: 'Responsive Web Design Certification',
      description: 'Complete course covering HTML, CSS, Flexbox, Grid, and responsive design',
      url: 'https://www.freecodecamp.org/learn/responsive-web-design/',
      type: 'course',
      platform: 'FreeCodeCamp',
      difficulty: 'Beginner',
      duration: '300 hours',
      free: true,
      rating: 4.8,
      views: '5M+',
      tags: ['html', 'css', 'responsive', 'flexbox', 'grid']
    },
    {
      id: 'css-grid-complete-guide',
      title: 'A Complete Guide to Grid',
      description: 'Everything you need to know about CSS Grid Layout',
      url: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
      type: 'article',
      platform: 'CSS-Tricks',
      difficulty: 'Intermediate',
      duration: '45 min read',
      free: true,
      rating: 4.9,
      views: '2M+',
      author: 'Chris House',
      tags: ['css', 'grid', 'layout']
    },
    {
      id: 'flexbox-froggy',
      title: 'Flexbox Froggy',
      description: 'Interactive game to learn CSS Flexbox',
      url: 'https://flexboxfroggy.com/',
      type: 'interactive',
      platform: 'Flexbox Froggy',
      difficulty: 'Beginner',
      duration: '1 hour',
      free: true,
      rating: 4.8,
      views: '3M+',
      tags: ['css', 'flexbox', 'game', 'practice']
    },
    {
      id: 'html-css-youtube-course',
      title: 'HTML & CSS Full Course - Build a Website Tutorial',
      description: 'Complete beginner tutorial for HTML and CSS web development',
      url: 'https://www.youtube.com/watch?v=pQN-pnXPaVg',
      type: 'video',
      platform: 'YouTube',
      difficulty: 'Beginner',
      duration: '4 hours',
      free: true,
      rating: 4.7,
      views: '8M+',
      author: 'freeCodeCamp.org',
      tags: ['html', 'css', 'tutorial', 'beginner']
    },
    {
      id: 'css-animation-course',
      title: 'CSS Animation and Transitions',
      description: 'Master CSS animations, transitions, and transforms',
      url: 'https://www.udemy.com/course/css-animation-transitions-and-transforms-creativity-course/',
      type: 'course',
      platform: 'Udemy',
      difficulty: 'Intermediate',
      duration: '6 hours',
      free: false,
      rating: 4.6,
      views: '150K+',
      tags: ['css', 'animation', 'transitions', 'transforms']
    },
    {
      id: 'sass-scss-guide',
      title: 'Sass/SCSS Complete Tutorial',
      description: 'Learn Sass preprocessing and advanced CSS techniques',
      url: 'https://www.geeksforgeeks.org/sass-scss-complete-tutorial/',
      type: 'tutorial',
      platform: 'GeeksforGeeks',
      difficulty: 'Intermediate',
      duration: '3 hours read',
      free: true,
      rating: 4.5,
      views: '500K+',
      tags: ['sass', 'scss', 'preprocessor', 'css']
    }
  ],
  
  'javascript': [
    {
      id: 'js-info-tutorial',
      title: 'The Modern JavaScript Tutorial',
      description: 'Comprehensive modern JavaScript tutorial from basics to advanced',
      url: 'https://javascript.info/',
      type: 'tutorial',
      platform: 'JavaScript.info',
      difficulty: 'Beginner',
      duration: '40+ hours',
      free: true,
      rating: 4.9,
      views: '15M+',
      tags: ['javascript', 'es6', 'modern', 'comprehensive']
    },
    {
      id: 'js-mdn-guide',
      title: 'JavaScript Guide',
      description: 'Complete JavaScript reference and guide from MDN',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
      type: 'documentation',
      platform: 'MDN',
      difficulty: 'Beginner',
      duration: '10+ hours',
      free: true,
      rating: 4.8,
      views: '20M+',
      tags: ['javascript', 'reference', 'guide']
    },
    {
      id: 'js-30-challenge',
      title: 'JavaScript30',
      description: '30 Day Vanilla JS Coding Challenge',
      url: 'https://javascript30.com/',
      type: 'course',
      platform: 'JavaScript30',
      difficulty: 'Intermediate',
      duration: '30 days',
      free: true,
      rating: 4.8,
      views: '1M+',
      author: 'Wes Bos',
      tags: ['javascript', 'vanilla', 'projects', 'practice']
    },
    {
      id: 'js-algorithms-structures',
      title: 'JavaScript Algorithms and Data Structures',
      description: 'Learn JavaScript fundamentals by building algorithms and data structures',
      url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
      type: 'course',
      platform: 'FreeCodeCamp',
      difficulty: 'Intermediate',
      duration: '300 hours',
      free: true,
      rating: 4.7,
      views: '3M+',
      tags: ['javascript', 'algorithms', 'data-structures']
    },
    {
      id: 'js-geeksforgeeks',
      title: 'JavaScript Tutorial',
      description: 'Complete JavaScript tutorial with examples and practice problems',
      url: 'https://www.geeksforgeeks.org/javascript-tutorial/',
      type: 'tutorial',
      platform: 'GeeksforGeeks',
      difficulty: 'Beginner',
      duration: '20+ hours',
      free: true,
      rating: 4.6,
      views: '5M+',
      tags: ['javascript', 'tutorial', 'examples']
    },
    {
      id: 'js-youtube-course',
      title: 'JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour',
      description: 'Quick start guide to JavaScript programming',
      url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
      type: 'video',
      platform: 'YouTube',
      difficulty: 'Beginner',
      duration: '1 hour',
      free: true,
      rating: 4.8,
      views: '15M+',
      author: 'Programming with Mosh',
      tags: ['javascript', 'beginner', 'quickstart']
    },
    {
      id: 'leetcode-js',
      title: 'LeetCode JavaScript Problems',
      description: 'Practice JavaScript coding problems and algorithms',
      url: 'https://leetcode.com/problemset/all/?difficulty=Easy&page=1&topicSlugs=javascript',
      type: 'practice',
      platform: 'LeetCode',
      difficulty: 'Intermediate',
      duration: 'Ongoing',
      free: true,
      rating: 4.7,
      views: '10M+',
      tags: ['javascript', 'algorithms', 'practice', 'coding-problems']
    },
    {
      id: 'js-design-patterns',
      title: 'JavaScript Design Patterns',
      description: 'Learn common design patterns in JavaScript development',
      url: 'https://www.patterns.dev/posts/classic-design-patterns/',
      type: 'article',
      platform: 'Patterns.dev',
      difficulty: 'Advanced',
      duration: '2 hours read',
      free: true,
      rating: 4.8,
      views: '800K+',
      tags: ['javascript', 'design-patterns', 'architecture']
    }
  ],

  'react': [
    {
      id: 'react-official-docs',
      title: 'React Documentation',
      description: 'Official React documentation with interactive examples',
      url: 'https://react.dev/',
      type: 'documentation',
      platform: 'React.dev',
      difficulty: 'Beginner',
      duration: '10+ hours',
      free: true,
      rating: 4.9,
      views: '50M+',
      tags: ['react', 'official', 'documentation']
    },
    {
      id: 'react-freecodecamp',
      title: 'Front End Development Libraries',
      description: 'Learn React, Redux, Sass, Bootstrap, and jQuery',
      url: 'https://www.freecodecamp.org/learn/front-end-development-libraries/',
      type: 'course',
      platform: 'FreeCodeCamp',
      difficulty: 'Intermediate',
      duration: '300 hours',
      free: true,
      rating: 4.8,
      views: '2M+',
      tags: ['react', 'redux', 'libraries']
    },
    {
      id: 'react-youtube-full-course',
      title: 'React JS Full Course for Beginners',
      description: 'Complete React tutorial covering hooks, context, and modern patterns',
      url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
      type: 'video',
      platform: 'YouTube',
      difficulty: 'Beginner',
      duration: '9 hours',
      free: true,
      rating: 4.9,
      views: '5M+',
      author: 'React with Dave Gray',
      tags: ['react', 'hooks', 'tutorial']
    },
    {
      id: 'react-scrimba',
      title: 'Learn React for Free',
      description: 'Interactive React course with hands-on coding exercises',
      url: 'https://scrimba.com/learn/learnreact',
      type: 'course',
      platform: 'Scrimba',
      difficulty: 'Beginner',
      duration: '12 hours',
      free: true,
      rating: 4.7,
      views: '1M+',
      tags: ['react', 'interactive', 'hands-on']
    },
    {
      id: 'react-geeksforgeeks',
      title: 'ReactJS Tutorial',
      description: 'Complete React tutorial with examples and best practices',
      url: 'https://www.geeksforgeeks.org/reactjs-tutorial/',
      type: 'tutorial',
      platform: 'GeeksforGeeks',
      difficulty: 'Beginner',
      duration: '15+ hours',
      free: true,
      rating: 4.6,
      views: '3M+',
      tags: ['react', 'tutorial', 'examples']
    },
    {
      id: 'react-patterns',
      title: 'React Patterns',
      description: 'Common React patterns and best practices',
      url: 'https://reactpatterns.com/',
      type: 'article',
      platform: 'React Patterns',
      difficulty: 'Intermediate',
      duration: '3 hours read',
      free: true,
      rating: 4.8,
      views: '500K+',
      tags: ['react', 'patterns', 'best-practices']
    },
    {
      id: 'react-testing-library',
      title: 'React Testing Library Tutorial',
      description: 'Learn to test React components effectively',
      url: 'https://testing-library.com/docs/react-testing-library/intro/',
      type: 'documentation',
      platform: 'Testing Library',
      difficulty: 'Intermediate',
      duration: '4 hours',
      free: true,
      rating: 4.7,
      views: '1M+',
      tags: ['react', 'testing', 'unit-tests']
    },
    {
      id: 'react-performance',
      title: 'React Performance Optimization',
      description: 'Advanced techniques for optimizing React applications',
      url: 'https://kentcdodds.com/blog/fix-the-slow-render-before-you-fix-the-re-render',
      type: 'article',
      platform: 'Kent C. Dodds',
      difficulty: 'Advanced',
      duration: '2 hours read',
      free: true,
      rating: 4.9,
      views: '800K+',
      author: 'Kent C. Dodds',
      tags: ['react', 'performance', 'optimization']
    }
  ],

  'nodejs': [
    {
      id: 'nodejs-official-docs',
      title: 'Node.js Documentation',
      description: 'Official Node.js documentation and API reference',
      url: 'https://nodejs.org/en/docs/',
      type: 'documentation',
      platform: 'Node.js',
      difficulty: 'Beginner',
      duration: '8+ hours',
      free: true,
      rating: 4.8,
      views: '20M+',
      tags: ['nodejs', 'backend', 'javascript']
    },
    {
      id: 'nodejs-freecodecamp',
      title: 'Back End Development and APIs',
      description: 'Learn Node.js, Express, MongoDB, and API development',
      url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/',
      type: 'course',
      platform: 'FreeCodeCamp',
      difficulty: 'Intermediate',
      duration: '300 hours',
      free: true,
      rating: 4.7,
      views: '1.5M+',
      tags: ['nodejs', 'express', 'mongodb', 'apis']
    },
    {
      id: 'nodejs-youtube-course',
      title: 'Node.js Tutorial for Beginners: Learn Node in 1 Hour',
      description: 'Quick introduction to Node.js fundamentals',
      url: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
      type: 'video',
      platform: 'YouTube',
      difficulty: 'Beginner',
      duration: '1 hour',
      free: true,
      rating: 4.8,
      views: '3M+',
      author: 'Programming with Mosh',
      tags: ['nodejs', 'beginner', 'tutorial']
    },
    {
      id: 'expressjs-guide',
      title: 'Express.js Guide',
      description: 'Complete guide to building web applications with Express.js',
      url: 'https://expressjs.com/en/guide/routing.html',
      type: 'documentation',
      platform: 'Express.js',
      difficulty: 'Intermediate',
      duration: '6 hours',
      free: true,
      rating: 4.8,
      views: '5M+',
      tags: ['express', 'nodejs', 'web-framework']
    },
    {
      id: 'nodejs-geeksforgeeks',
      title: 'Node.js Tutorial',
      description: 'Comprehensive Node.js tutorial with examples',
      url: 'https://www.geeksforgeeks.org/nodejs-tutorial/',
      type: 'tutorial',
      platform: 'GeeksforGeeks',
      difficulty: 'Beginner',
      duration: '12+ hours',
      free: true,
      rating: 4.6,
      views: '2M+',
      tags: ['nodejs', 'tutorial', 'examples']
    },
    {
      id: 'nodejs-security',
      title: 'Node.js Security Best Practices',
      description: 'Learn to secure your Node.js applications',
      url: 'https://nodejs.org/en/docs/guides/security/',
      type: 'article',
      platform: 'Node.js',
      difficulty: 'Advanced',
      duration: '2 hours read',
      free: true,
      rating: 4.9,
      views: '800K+',
      tags: ['nodejs', 'security', 'best-practices']
    },
    {
      id: 'nodejs-testing',
      title: 'Testing Node.js Applications',
      description: 'Complete guide to testing Node.js apps with Jest and Mocha',
      url: 'https://jestjs.io/docs/getting-started',
      type: 'documentation',
      platform: 'Jest',
      difficulty: 'Intermediate',
      duration: '4 hours',
      free: true,
      rating: 4.7,
      views: '1M+',
      tags: ['nodejs', 'testing', 'jest', 'mocha']
    },
    {
      id: 'nodejs-microservices',
      title: 'Microservices with Node.js',
      description: 'Building scalable microservices architecture with Node.js',
      url: 'https://www.udemy.com/course/microservices-with-node-js-and-react/',
      type: 'course',
      platform: 'Udemy',
      difficulty: 'Advanced',
      duration: '54 hours',
      free: false,
      rating: 4.6,
      views: '50K+',
      tags: ['nodejs', 'microservices', 'architecture']
    }
  ],

  'python': [
    {
      id: 'python-official-tutorial',
      title: 'The Python Tutorial',
      description: 'Official Python tutorial covering all language fundamentals',
      url: 'https://docs.python.org/3/tutorial/',
      type: 'tutorial',
      platform: 'Python.org',
      difficulty: 'Beginner',
      duration: '15+ hours',
      free: true,
      rating: 4.8,
      views: '30M+',
      tags: ['python', 'official', 'fundamentals']
    },
    {
      id: 'python-freecodecamp',
      title: 'Scientific Computing with Python',
      description: 'Learn Python fundamentals and scientific computing libraries',
      url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/',
      type: 'course',
      platform: 'FreeCodeCamp',
      difficulty: 'Beginner',
      duration: '300 hours',
      free: true,
      rating: 4.7,
      views: '2M+',
      tags: ['python', 'scientific-computing', 'numpy', 'pandas']
    },
    {
      id: 'python-geeksforgeeks',
      title: 'Python Programming Language Tutorial',
      description: 'Comprehensive Python tutorial with examples and practice problems',
      url: 'https://www.geeksforgeeks.org/python-programming-language/',
      type: 'tutorial',
      platform: 'GeeksforGeeks',
      difficulty: 'Beginner',
      duration: '25+ hours',
      free: true,
      rating: 4.6,
      views: '8M+',
      tags: ['python', 'programming', 'tutorial']
    },
    {
      id: 'python-youtube-course',
      title: 'Python Tutorial - Python Full Course for Beginners',
      description: 'Complete Python programming course for beginners',
      url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc',
      type: 'video',
      platform: 'YouTube',
      difficulty: 'Beginner',
      duration: '6 hours',
      free: true,
      rating: 4.8,
      views: '25M+',
      author: 'Programming with Mosh',
      tags: ['python', 'beginner', 'full-course']
    },
    {
      id: 'python-django',
      title: 'Django Web Framework',
      description: 'Learn web development with Django framework',
      url: 'https://docs.djangoproject.com/en/4.2/intro/tutorial01/',
      type: 'tutorial',
      platform: 'Django',
      difficulty: 'Intermediate',
      duration: '10 hours',
      free: true,
      rating: 4.7,
      views: '3M+',
      tags: ['python', 'django', 'web-development']
    },
    {
      id: 'python-flask',
      title: 'Flask Web Development',
      description: 'Build web applications with Flask micro-framework',
      url: 'https://flask.palletsprojects.com/en/2.3.x/tutorial/',
      type: 'tutorial',
      platform: 'Flask',
      difficulty: 'Intermediate',
      duration: '6 hours',
      free: true,
      rating: 4.6,
      views: '2M+',
      tags: ['python', 'flask', 'web-framework']
    },
    {
      id: 'python-data-science',
      title: 'Python for Data Science',
      description: 'Complete data science course with Python, Pandas, and Matplotlib',
      url: 'https://www.kaggle.com/learn/python',
      type: 'course',
      platform: 'Kaggle',
      difficulty: 'Intermediate',
      duration: '7 hours',
      free: true,
      rating: 4.8,
      views: '1M+',
      tags: ['python', 'data-science', 'pandas', 'matplotlib']
    },
    {
      id: 'python-automation',
      title: 'Automate the Boring Stuff with Python',
      description: 'Learn Python by automating everyday tasks',
      url: 'https://automatetheboringstuff.com/',
      type: 'book',
      platform: 'Online Book',
      difficulty: 'Beginner',
      duration: '20+ hours',
      free: true,
      rating: 4.9,
      views: '5M+',
      author: 'Al Sweigart',
      tags: ['python', 'automation', 'scripting']
    }
  ],

  'databases': [
    {
      id: 'sql-w3schools',
      title: 'SQL Tutorial',
      description: 'Complete SQL tutorial covering all database operations',
      url: 'https://www.w3schools.com/sql/',
      type: 'tutorial',
      platform: 'W3Schools',
      difficulty: 'Beginner',
      duration: '8 hours',
      free: true,
      rating: 4.7,
      views: '20M+',
      tags: ['sql', 'database', 'queries']
    },
    {
      id: 'postgresql-tutorial',
      title: 'PostgreSQL Tutorial',
      description: 'Comprehensive PostgreSQL database tutorial',
      url: 'https://www.postgresqltutorial.com/',
      type: 'tutorial',
      platform: 'PostgreSQL Tutorial',
      difficulty: 'Beginner',
      duration: '15 hours',
      free: true,
      rating: 4.8,
      views: '3M+',
      tags: ['postgresql', 'sql', 'database']
    },
    {
      id: 'mongodb-university',
      title: 'MongoDB Basics',
      description: 'Official MongoDB course covering NoSQL database fundamentals',
      url: 'https://university.mongodb.com/courses/M001/about',
      type: 'course',
      platform: 'MongoDB University',
      difficulty: 'Beginner',
      duration: '8 hours',
      free: true,
      rating: 4.7,
      views: '500K+',
      tags: ['mongodb', 'nosql', 'database']
    },
    {
      id: 'database-design',
      title: 'Database Design Course',
      description: 'Learn database design principles and normalization',
      url: 'https://www.freecodecamp.org/learn/relational-database/',
      type: 'course',
      platform: 'FreeCodeCamp',
      difficulty: 'Intermediate',
      duration: '300 hours',
      free: true,
      rating: 4.6,
      views: '800K+',
      tags: ['database-design', 'normalization', 'sql']
    },
    {
      id: 'redis-tutorial',
      title: 'Redis Tutorial',
      description: 'Learn Redis in-memory data structure store',
      url: 'https://redis.io/docs/getting-started/',
      type: 'tutorial',
      platform: 'Redis',
      difficulty: 'Intermediate',
      duration: '4 hours',
      free: true,
      rating: 4.8,
      views: '1M+',
      tags: ['redis', 'caching', 'nosql']
    },
    {
      id: 'mysql-geeksforgeeks',
      title: 'MySQL Tutorial',
      description: 'Complete MySQL database tutorial with examples',
      url: 'https://www.geeksforgeeks.org/mysql-tutorial/',
      type: 'tutorial',
      platform: 'GeeksforGeeks',
      difficulty: 'Beginner',
      duration: '12 hours',
      free: true,
      rating: 4.6,
      views: '4M+',
      tags: ['mysql', 'sql', 'database']
    }
  ]
};

export const getResourcesByTopic = (topicId: string): Resource[] => {
  return resourcesDatabase[topicId] || [];
};

export const getAllResources = (): Resource[] => {
  return Object.values(resourcesDatabase).flat();
};

export const getResourcesByPlatform = (platform: string): Resource[] => {
  return getAllResources().filter(resource => resource.platform === platform);
};

export const getResourcesByDifficulty = (difficulty: string): Resource[] => {
  return getAllResources().filter(resource => resource.difficulty === difficulty);
};

export const getFreeResources = (): Resource[] => {
  return getAllResources().filter(resource => resource.free);
};

export const searchResources = (query: string): Resource[] => {
  const lowercaseQuery = query.toLowerCase();
  return getAllResources().filter(resource => 
    resource.title.toLowerCase().includes(lowercaseQuery) ||
    resource.description.toLowerCase().includes(lowercaseQuery) ||
    resource.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};
