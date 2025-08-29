export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  tags: string[];
  source: string;
}

export interface InterviewQuestion {
  id: string;
  question: string;
  answer: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  tags: string[];
  followUpQuestions?: string[];
  source: string;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  tags: string[];
  solution?: string;
  hints: string[];
  testCases: Array<{
    input: string;
    output: string;
  }>;
  source: string;
}

export const quizQuestions: Question[] = [
  // JavaScript Questions
  {
    id: 'js-1',
    question: 'What is the difference between `let`, `const`, and `var` in JavaScript?',
    options: [
      'They are all the same',
      'let and const are block-scoped, var is function-scoped',
      'var is block-scoped, let and const are function-scoped',
      'Only const is block-scoped'
    ],
    correctAnswer: 1,
    explanation: 'let and const are block-scoped and have temporal dead zone, while var is function-scoped and gets hoisted.',
    difficulty: 'Medium',
    category: 'JavaScript',
    tags: ['variables', 'scope', 'hoisting'],
    source: 'GeeksforGeeks'
  },
  {
    id: 'js-2',
    question: 'What is a closure in JavaScript?',
    options: [
      'A function that returns another function',
      'A function that has access to outer scope variables',
      'A way to close a function',
      'A method to handle errors'
    ],
    correctAnswer: 1,
    explanation: 'A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned.',
    difficulty: 'Medium',
    category: 'JavaScript',
    tags: ['closures', 'scope', 'functions'],
    source: 'GeeksforGeeks'
  },
  {
    id: 'js-3',
    question: 'What does the `this` keyword refer to in JavaScript?',
    options: [
      'Always refers to the global object',
      'Always refers to the function itself',
      'Depends on how the function is called',
      'Always refers to undefined'
    ],
    correctAnswer: 2,
    explanation: 'The value of `this` depends on how the function is called (call-site), not where it is defined.',
    difficulty: 'Hard',
    category: 'JavaScript',
    tags: ['this', 'context', 'binding'],
    source: 'GeeksforGeeks'
  },
  // React Questions
  {
    id: 'react-1',
    question: 'What is the Virtual DOM in React?',
    options: [
      'A copy of the real DOM in memory',
      'A faster version of the DOM',
      'A JavaScript representation of the real DOM',
      'All of the above'
    ],
    correctAnswer: 3,
    explanation: 'Virtual DOM is a JavaScript representation of the real DOM kept in memory and synced with the real DOM through reconciliation.',
    difficulty: 'Medium',
    category: 'React',
    tags: ['virtual-dom', 'reconciliation', 'performance'],
    source: 'GeeksforGeeks'
  },
  {
    id: 'react-2',
    question: 'What is the difference between state and props in React?',
    options: [
      'State is mutable, props are immutable',
      'Props are mutable, state is immutable',
      'Both are mutable',
      'Both are immutable'
    ],
    correctAnswer: 0,
    explanation: 'State is internal and mutable within a component, while props are external and immutable.',
    difficulty: 'Easy',
    category: 'React',
    tags: ['state', 'props', 'components'],
    source: 'GeeksforGeeks'
  },
  // Node.js Questions
  {
    id: 'node-1',
    question: 'What is the Event Loop in Node.js?',
    options: [
      'A loop that runs events',
      'The mechanism that handles asynchronous operations',
      'A way to create loops in JavaScript',
      'A debugging tool'
    ],
    correctAnswer: 1,
    explanation: 'The Event Loop is Node.js\'s mechanism for handling asynchronous operations and callbacks.',
    difficulty: 'Hard',
    category: 'Node.js',
    tags: ['event-loop', 'asynchronous', 'callbacks'],
    source: 'GeeksforGeeks'
  }
];

export const interviewQuestions: InterviewQuestion[] = [
  {
    id: 'int-js-1',
    question: 'Explain the concept of hoisting in JavaScript.',
    answer: 'Hoisting is JavaScript\'s default behavior of moving declarations to the top of the scope. Variable and function declarations are hoisted, but not initializations. `var` declarations are hoisted and initialized with `undefined`, while `let` and `const` are hoisted but not initialized (temporal dead zone).',
    difficulty: 'Medium',
    category: 'JavaScript',
    tags: ['hoisting', 'variables', 'functions'],
    followUpQuestions: [
      'What is the temporal dead zone?',
      'How does hoisting work with function expressions vs function declarations?'
    ],
    source: 'GeeksforGeeks'
  },
  {
    id: 'int-react-1',
    question: 'What are React Hooks and why were they introduced?',
    answer: 'React Hooks are functions that let you use state and other React features in functional components. They were introduced to: 1) Allow state management in functional components, 2) Reduce complexity of class components, 3) Enable better code reuse through custom hooks, 4) Improve testing and debugging.',
    difficulty: 'Medium',
    category: 'React',
    tags: ['hooks', 'functional-components', 'state'],
    followUpQuestions: [
      'What are the rules of hooks?',
      'How do you create a custom hook?'
    ],
    source: 'GeeksforGeeks'
  },
  {
    id: 'int-node-1',
    question: 'What is the difference between synchronous and asynchronous operations in Node.js?',
    answer: 'Synchronous operations block the execution until they complete, while asynchronous operations don\'t block and use callbacks, promises, or async/await. Node.js is designed around asynchronous, non-blocking I/O to handle many concurrent operations efficiently.',
    difficulty: 'Easy',
    category: 'Node.js',
    tags: ['synchronous', 'asynchronous', 'non-blocking'],
    followUpQuestions: [
      'How does Node.js handle I/O operations?',
      'What are the advantages of asynchronous programming?'
    ],
    source: 'GeeksforGeeks'
  }
];

export const codingExercises: Exercise[] = [
  {
    id: 'ex-1',
    title: 'Two Sum Problem',
    description: 'Given an array of integers and a target sum, return indices of two numbers that add up to the target.',
    difficulty: 'Easy',
    category: 'Arrays',
    tags: ['arrays', 'hash-map', 'two-pointers'],
    hints: [
      'Use a hash map to store values and their indices',
      'For each element, check if target - element exists in the hash map'
    ],
    testCases: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]'
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]'
      }
    ],
    solution: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}`,
    source: 'LeetCode'
  },
  {
    id: 'ex-2',
    title: 'Reverse String',
    description: 'Write a function that reverses a string. The input string is given as an array of characters.',
    difficulty: 'Easy',
    category: 'Strings',
    tags: ['strings', 'two-pointers', 'in-place'],
    hints: [
      'Use two pointers approach',
      'Swap characters from start and end moving towards center'
    ],
    testCases: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]'
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]'
      }
    ],
    solution: `function reverseString(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}`,
    source: 'LeetCode'
  },
  {
    id: 'ex-3',
    title: 'Valid Parentheses',
    description: 'Given a string containing just characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.',
    difficulty: 'Medium',
    category: 'Stack',
    tags: ['stack', 'strings', 'parentheses'],
    hints: [
      'Use a stack to keep track of opening brackets',
      'For each closing bracket, check if it matches the most recent opening bracket'
    ],
    testCases: [
      {
        input: 's = "()"',
        output: 'true'
      },
      {
        input: 's = "()[]{}"',
        output: 'true'
      },
      {
        input: 's = "(]"',
        output: 'false'
      }
    ],
    solution: `function isValid(s) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };
    
    for (let char of s) {
        if (char in map) {
            if (stack.pop() !== map[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    
    return stack.length === 0;
}`,
    source: 'LeetCode'
  }
];

export const categories = [
  'All',
  'JavaScript',
  'React',
  'Node.js',
  'TypeScript',
  'HTML/CSS',
  'Data Structures',
  'Algorithms',
  'System Design',
  'Database'
];

export const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

export const sources = [
  'All',
  'GeeksforGeeks',
  'LeetCode',
  'HackerRank',
  'InterviewBit',
  'Codewars',
  'FreeCodeCamp'
];