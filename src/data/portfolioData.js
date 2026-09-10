// src/data/portfolioData.js
const data = {
  name: "MD AKBAR",
  title: "Web Developer",
  email: "mdakbar69999@gmail.com",
  phone: "+91 7995663762",
  location: "Hyderabad, India",
  summary: "Motivated Web Developer and B.Tech Computer Science student (graduating 2027) with hands-on experience building AI-powered platforms, QR-based healthcare applications, and productivity tools. Proficient in React.js, JavaScript (ES6+), Python, and Flask. Recognized for technical excellence with a 2nd-place finish at the Technotsav National Hackathon.",
  experience: [
    {
      company: "Proxenix",
      role: "Web Development Intern",
      period: "2024",
      type: "Remote",
      points: [
        "Engineered responsive web pages and modular UI components using HTML5, CSS3, and vanilla JavaScript.",
        "Optimized frontend performance by refactoring legacy UI code, reducing load-time bottlenecks.",
        "Collaborated within a cross-functional team using Git to deliver feature implementations on schedule.",
      ],
    },
    {
      company: "SkillCraft",
      role: "Software Development Intern",
      period: "2024",
      type: "Remote",
      points: [
        "Contributed to software development lifecycle tasks including requirements analysis, coding, and testing.",
        "Applied programming best practices and version control to support project delivery and code quality.",
      ],
    },
  ],
  education: [
    {
      degree: "B.Tech — Computer Science & Engineering",
      school: "Guru Nanak Institutions Technical Campus",
      period: "2023 – 2027",
      score: "In Progress",
    },
    {
      degree: "Intermediate (Class XII)",
      school: "ABV Junior College",
      period: "",
      score: "92%",
    },
    {
      degree: "CBSE (Class X)",
      school: "Sage High School",
      period: "",
      score: "84%",
    },
  ],
  skills: {
    coreLanguages: [
      { name: "JavaScript (ES6+)", pct: 85 },
      { name: "Python", pct: 75 },
      { name: "HTML5 / CSS3", pct: 90 },
      { name: "SQL", pct: 65 },
    ],
    webDev: [
      { name: "React.js", pct: 85 },
      { name: "Tailwind CSS", pct: 80 },
      { name: "Flask", pct: 70 },
      { name: "REST APIs", pct: 80 },
    ],
    tools: [
      { name: "Git & GitHub", pct: 80 },
      { name: "MongoDB", pct: 70 },
      { name: "VS Code", pct: 85 },
      { name: "Postman", pct: 70 },
    ],
  },
  projects: [
    {
    name: "Full-Stack E-Commerce Platform",
    subtitle: "Full-Stack E-Commerce Web Application",
    stack: [
      "React.js",
      "JavaScript",
      "Node.js",
      "REST APIs",
      "MongoDB",
      "Git",
      "GitHub"
    ],
    github: "https://github.com/MdAkbar125/portfolio-2",
    live: "https://shop-ecommerce-ak.netlify.app/",
    points: [
      "Built a responsive full-stack e-commerce web application using React.js with interactive product browsing and shopping cart functionality.",
      "Developed and integrated REST APIs using Node.js for user authentication, product management, and cart operations.",
      "Implemented secure authentication and protected API routes while managing application data using MongoDB.",
      "Used Git and GitHub for version control and deployed the application using Netlify and Render."
    ],
    icon: "🛒",
    color: "#10b981",
  }
    {
      name: "CodePlay Pro",
      subtitle: "AI-Powered Web Development Platform",
      stack: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "Python",
        "Flask",
        "Gemini API"
      ],
      github: "https://github.com/yourusername/codeplaypro",
      live: "https://codeplaypro.netlify.app",
      points: [
        "Built an AI-powered web development platform for code generation, debugging, and project assistance.",
        "Integrated Gemini AI to provide intelligent code suggestions, explanations, and bug fixes.",
        "Implemented live code preview, project save/load functionality, and code export features.",
        "Designed a responsive user interface with dark mode support and project version management."
      ],
      icon: "⚡",
      color: "#6366f1",
    },
    {
  name: "MediQR",
  subtitle: "QR-Based Medical Information System",
  stack: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "QR Code Generator",
    "Responsive Design"
  ],
  github: "https://github.com/yourusername/mediqr",
  live: "https://mediqr.netlify.app",
  points: [
    "Developed a QR-based medical information system for storing and accessing patient details instantly.",
    "Implemented patient registration with validation for accurate healthcare record management.",
    "Generated scannable QR codes containing essential medical information for quick retrieval.",
    "Designed a responsive and user-friendly interface to improve accessibility across devices."
  ],
  icon: "🏥",
  color: "#06b6d4",
},
    {
      name: "Study Habit Tracker",
      subtitle: "Productivity & Analytics Application",
      stack: ["React.js", "Context API", "Chart.js", "Local Storage"],
      points: [
        "Built a full-featured productivity app with task tracking, session logging, and visual analytics dashboards.",
        "Implemented data persistence and interactive charting for actionable progress visualization.",
      ],
       github: "https://github.com/yourusername/mediqr",
  live: "https://mediqr.netlify.app",
      icon: "📊",
      color: "#8b5cf6",
    },
    {
      name: "Personal Portfolio",
      subtitle: "Responsive Developer Portfolio",
      stack: ["React.js", "Tailwind CSS", "GitHub Pages"],
      points: [
        "Designed and deployed a fully responsive portfolio showcasing projects, skills, and professional experience.",
      ],
       github: "https://github.com/yourusername/mediqr",
  live: "https://mediqr.netlify.app",
      icon: "🌐",
      color: "#10b981",
    },
  ],
  achievements: [
    { title: "2nd Place", event: "Technotsav National Hackathon", icon: "🥈" },
    { title: "Participant", event: "Hackarena National Hackathon", icon: "🏆" },
  ],
  certifications: [
    "Web Development Internship Certificate — Proxenix",
    "Software Development Internship Certificate — SkillCraft",
    "GitHub Hands-On Workshop Certificate",
  ],
};

export default data;
