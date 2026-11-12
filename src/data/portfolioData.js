export const personalInfo = {
  name: "Kaushik Kumar Pandey",
  title: "Full-Stack Developer & CS Undergrad",
  tagline: "Building high-performance, user-centric web applications and exploring AI/ML solutions in healthcare.",
  location: "Bhopal, MP | Bihar, India",
  email: "kaushikkumarpandey4@gmail.com",
  phone: "+91-6205512156",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  about: "I am a passionate Computer Science Engineering student at IES College of Technology, Bhopal. With hands-on experience in full-stack web development (React.js, Node.js, Express, MongoDB) and AI/ML applications in healthcare from my research internship at IEEE EMBS, I love solving real-world challenges through clean code and modern architectures.",
  stats: [
    { label: "B.Tech CGPA", value: "7.5" },
    { label: "Core Skills", value: "15+" },
    { label: "Internship", value: "IEEE EMBS" },
    { label: "Certifications", value: "3+" },
  ]
};

export const skillsData = {
  languages: [
    { name: "Java", level: "Elite (NPTEL)", icon: "Code2" },
    { name: "JavaScript (ES6+)", level: "Advanced", icon: "Code" },
    { name: "C", level: "Proficient", icon: "Terminal" },
    { name: "SQL", level: "Proficient", icon: "Database" },
  ],
  frontend: [
    { name: "React.js", level: "Core Expertise", icon: "Boxes" },
    { name: "Next.js", level: "Intermediate", icon: "Layers" },
    { name: "HTML5 & CSS3", level: "Advanced", icon: "Layout" },
    { name: "Tailwind CSS", level: "Modern Styling", icon: "Palette" },
    { name: "Bootstrap", level: "Proficient", icon: "Component" },
  ],
  backend: [
    { name: "Node.js", level: "Backend Runtime", icon: "Server" },
    { name: "Express.js", level: "REST APIs", icon: "Workflow" },
    { name: "MongoDB", level: "NoSQL DB", icon: "Database" },
    { name: "MySQL / SQL", level: "Relational DB", icon: "Table" },
  ],
  tools: [
    { name: "Git & GitHub", level: "Version Control", icon: "GitBranch" },
    { name: "VS Code", level: "Primary IDE", icon: "Laptop" },
    { name: "IntelliJ IDEA Ultimate", level: "Java Development", icon: "Terminal" },
    { name: "GDB Compiler", level: "Debugging", icon: "Wrench" },
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Object-Oriented Programming (OOPS)",
    "Operating Systems",
    "Software Engineering",
    "Web Development"
  ]
};

export const experienceData = [
  {
    role: "Student Intern",
    organization: "IEEE EMBS Pune Chapter",
    location: "Pune, India (Hybrid)",
    period: "Jun 2025 – Jul 2025",
    type: "Research & Healthcare AI Internship",
    description: "Worked on cognitive rehabilitation systems for mental health disorders using biomedical engineering and AI/ML concepts.",
    achievements: [
      "Contributed to AI/ML-based learning modules in biomedical engineering and healthcare innovation.",
      "Collaborated with multidisciplinary team members to develop project solutions and research outcomes.",
      "Gained hands-on experience in artificial intelligence applications for healthcare and neuro-rehabilitation.",
    ],
    techStack: ["Python", "AI/ML", "Healthcare Analytics", "Biomedical Modules"]
  }
];

export const projectsData = [
  {
    id: "mern-auth-system",
    title: "Full-Stack MERN Authentication System",
    category: "Full-Stack Web App",
    date: "Oct 2026",
    description: "A production-ready, secure user authentication and authorization platform featuring encrypted credentials, JWT session management, and protected routes.",
    points: [
      "Engineered secure registration & login workflows utilizing Bcrypt password hashing (10 salt rounds) and JSON Web Tokens (JWT).",
      "Created custom Express authentication middleware to protect sensitive API endpoints and user profile retrieval.",
      "Developed a clean, modern frontend with React 19 and React Router v7 featuring Protected Route guards and stateful sessions.",
      "Designed robust MongoDB schemas with Mongoose, ensuring data sanitization, duplicate checks, and structured error responses."
    ],
    tech: ["React 19", "Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "React Router v7"],
    github: "https://github.com",
    live: "#",
    featured: true
  },
  {
    id: "smart-task-manager",
    title: "Smart Task Manager",
    category: "Web Application",
    date: "May 2026",
    description: "A responsive, feature-packed productivity web application designed to organize, prioritize, and track daily tasks seamlessly.",
    points: [
      "Implemented task creation, deletion, completion tracking, due date management, and status-based filtering.",
      "Integrated real-time search functionality and Local Storage API to persist task data across browser sessions.",
      "Designed a modern and mobile-friendly user interface using CSS Grid, Flexbox, and dynamic JavaScript DOM manipulation.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage API", "Flexbox/Grid"],
    github: "https://github.com",
    live: "#",
    featured: true
  },
  {
    id: "cognitive-rehab-ai",
    title: "Cognitive Rehabilitation Platform",
    category: "AI & Healthcare",
    date: "Jul 2025",
    description: "Interactive health intelligence module for mental health tracking and neuro-rehabilitation developed in association with IEEE EMBS.",
    points: [
      "Designed cognitive exercises and test modules to assist in cognitive mental health tracking.",
      "Synthesized data points for healthcare innovation metrics and biomedical research insights.",
      "Collaborated with multidisciplinary team members to develop project solutions and research outcomes."
    ],
    tech: ["Python", "AI/ML", "React.js", "Biomedical Modules"],
    github: "https://github.com",
    live: "#",
    featured: true
  },
  {
    id: "realtime-weather-app",
    title: "Real-Time Weather Application",
    category: "JavaScript Builds",
    date: "Apr 2026",
    description: "An API-driven live weather application featuring asynchronous data fetching, dynamic climate condition styling, and graceful error recovery.",
    points: [
      "Integrated OpenWeatherMap REST API with asynchronous JavaScript (Fetch API & Async/Await) to stream live temperature, humidity, and wind velocity.",
      "Engineered dynamic UI icon matching for diverse weather conditions (Clouds, Rain, Clear, Mist, Drizzle, Snow).",
      "Built resilient error handling for invalid city queries, network timeouts, and added keyboard Enter shortcuts."
    ],
    tech: ["JavaScript (ES6+)", "OpenWeatherMap API", "Fetch API", "CSS3", "DOM Manipulation"],
    github: "https://github.com",
    live: "#",
    featured: false
  },
  {
    id: "interactive-quiz-app",
    title: "Interactive Knowledge Quiz App",
    category: "JavaScript Builds",
    date: "Apr 2026",
    description: "A gamified quiz web application featuring real-time answer verification, progress tracking, dynamic DOM rendering, and performance feedback.",
    points: [
      "Architected dynamic question-rendering logic with dataset-driven answer validation and single-choice lockouts.",
      "Implemented score computation, percentage metrics, and personalized congratulatory feedback cards.",
      "Designed clean, responsive UI with interactive hover effects and instant visual green/red feedback."
    ],
    tech: ["JavaScript", "DOM Manipulation", "CSS3 Flexbox", "State Logic"],
    github: "https://github.com",
    live: "#",
    featured: false
  }
];

export const educationData = [
  {
    degree: "B.Tech In Computer Science & Engineering",
    institution: "IES College Of Technology",
    location: "Bhopal, MP",
    period: "2023 – 2027",
    score: "CGPA: 7.5",
    current: true,
    highlights: "Core focus on DSA, OOPS, Full-Stack Development, and Operating Systems."
  },
  {
    degree: "Higher Secondary (12th - Intermediate)",
    institution: "Intermediate Council",
    location: "West Champaran, Bihar",
    period: "2021 – 2023",
    score: "Percentage: 73.6%",
    current: false,
    highlights: "Science stream with strong foundations in Mathematics and Physics."
  },
  {
    degree: "Secondary School (10th - Matriculation)",
    institution: "Matriculation Board",
    location: "East Champaran, Bihar",
    period: "2019 – 2020",
    score: "Percentage: 67.2%",
    current: false,
    highlights: "Foundational education with emphasis on Science, Mathematics, and Computer Basics."
  }
];

export const certificationsData = [
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    badge: "Elite - 80%",
    year: "Verified",
    description: "Rigorous coursework and examination covering core Java, OOPs, Collections, Multithreading, and Exception Handling."
  },
  {
    title: "GEN-AI Camp",
    issuer: "AlgoUniversity",
    badge: "Generative AI & Multimodal",
    year: "2026",
    description: "Comprehensive training in Generative AI, Large Language Models (LLMs), Multimodal AI Systems, and NLP workflows."
  },
  {
    title: "ADCA (Advance Diploma in Computer Applications)",
    issuer: "ICCT",
    badge: "A+ Grade (79.6%)",
    year: "Completed",
    description: "Advanced computing foundations covering software applications, data management, and operational computing."
  }
];

export const extracurricularData = [
  {
    title: "IEEE-IES Student Branch Quiz Competition",
    role: "Team Leader",
    organization: "IES University, Bhopal",
    year: "2025",
    description: "Led a team in a competitive technical quiz competition organized by IEEE-IES Student Branch, demonstrating team leadership, rapid problem-solving, and technical expertise."
  },
  {
    title: "BGI Hackathon 2026 – Vision 2047",
    role: "Participant & Innovator",
    organization: "Bhopal, Madhya Pradesh",
    year: "May 2026",
    description: "Participated in a high-intensity national-level hackathon focused on innovation and problem-solving, collaborating with team members to deliver technology-driven solutions."
  }
];
