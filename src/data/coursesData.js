const courses = [
  // ===============================
  // INFORMATION TECHNOLOGY
  // ===============================
  {
    id: 1,
    code: "DDTA",
    title: "Diploma in Digital Technology Application (DDTA)",
    category: "Diploma",
    duration: "12 Months",
    fees: 8000,
    syllabus: {
      semester1: [
        "Fundamentals of Computer",
        "Desktop Operating System (Windows 10)",
        "Number System and Basic Electronics",
        "MS Office 2016 (Word, Excel, PowerPoint)",
        "Database Management System (MS Access 2016)",
        "Internet & E-mail",
        "Mobile Operating System",
        "Cyber Security Basics"
      ],
      semester2: [
        "Introduction to Core Programming Concepts",
        "Algorithm & Flow Chart",
        "Programming Language with C/C++",
        "Data Structures and Algorithms (DSA)",
        "HTML5",
        "Application Security",
        "Object-Oriented Programming (OOPS) with Java",
        "Relational Database Management System (MySQL)"
      ]
    }
  },
  {
    id: 2,
    code: "DFAS",
    title: "Diploma in Financial Accounting System (DFAS)",
    category: "Diploma",
    duration: "12 Months",
    fees: 5000,
    syllabus: {
      semester1: [
        "Fundamentals of Computer",
        "Operating System - Windows Vista",
        "MS-Word",
        "Two Financial Accounting Packages",
      ],
      semester2: [
        "Database Management System (Visual FoxPro)",
        "MS-Excel with Project Management Tools",
        "MS-PowerPoint",
        "Internet & Email",
        "Two Financial Accounting Packages",
      ],
    },
  },

  {
    id: 3,
    code: "SEB",
    title: "Spoken English (Basic)",
    category: "Language",
    duration: "4 Months",
    fees: "(Changable)",
    syllabus: {
      month1: [
        "Foundation & Daily Vocabulary (Breaking the Fear)",
        "Basic Greetings & Self Introduction",
        "Common Daily Use Sentences",
        "Basic Pronunciation Practice"
      ],
      month2: [
        "Essential Grammar (Tense Basics, Parts of Speech)",
        "Simple Conversation Practice",
        "Question Formation",
        "Sentence Structure Practice"
      ],
      month3: [
        "Narrating Daily Activities",
        "Expressing Thoughts & Opinions",
        "Storytelling Practice",
        "Role Play Conversations"
      ],
      month4: [
        "Fluency Development Techniques",
        "Public Speaking Practice",
        "Interview Preparation Basics",
        "Real-life Conversation Practice"
      ],
      activities: [
        "Listening: News, simple podcasts, or children’s stories",
        "Speaking: Daily conversation practice, reading aloud, tongue twisters",
        "Vocabulary: Learning 5–10 new words daily"
      ]
    },

  },

  {
    id: 4,
    code: "FDAI",
    title: "Frontend Development with AI (FDAI)",
    category: "Advanced",
    duration: "6 Months",
    fees: 10000,
    syllabus: {
      module1: [
        "HTML5 – Structure & Semantic Tags",
        "CSS3 – Styling, Flexbox & Grid",
        "Responsive Design Techniques"
      ],
      module2: [
        "Bootstrap – Layout & Components",
        "JavaScript – Basics to Advanced Concepts",
        "DOM Manipulation & ES6"
      ],
      module3: [
        "React JS – Components & JSX",
        "Props, State & Hooks",
        "React Router & Project Structure"
      ],
      module4: [
        "ChatGPT for Developers",
        "Using AI Tools for Code Optimization",
        "AI-assisted Debugging & Productivity"
      ],
      module5: [
        "Final Frontend Project",
        "Hosting & Deployment (Vercel / Netlify)",
        "Portfolio Development"
      ]
    }

  },
  {
    id: 5,
    code: "WDAI",
    title: "Web Design with AI (WDAI)",
    category: "Advanced",
    duration: "5 Months",
    fees: 7000,
    syllabus: {
      module1: [
        "HTML5 – Structure & Semantic Tags",
        "CSS3 – Styling, Flexbox & Grid",
        "Responsive Web Design"
      ],
      module2: [
        "Bootstrap – Layout & Components",
        "Website Layout Design Principles",
        "UI/UX Basics"
      ],
      module3: [
        "JavaScript – Basics & DOM Manipulation",
        "Interactive Website Development",
        "Form Validation"
      ],
      module4: [
        "ChatGPT for Web Designers",
        "Using AI Tools for UI/UX Design",
        "AI-assisted Code Generation"
      ],
      module5: [
        "Live Website Project",
        "Hosting & Deployment (Vercel / Netlify / cPanel)",
        "Portfolio Website Creation"
      ]
    }

  },

  {
    id: 6,
    code: "MERN-AI",
    title: "MERN Stack Web Development with AI (MERN-AI)",
    category: "Advanced",
    duration: "12 Months",
    fees: 20000,
    syllabus: {
      semester1: [
        "HTML5 – Structure & Semantic Tags",
        "CSS3 – Advanced Styling & Responsive Design",
        "Bootstrap & Tailwind CSS",
        "JavaScript (ES6+) & DOM Manipulation",
        "Git & GitHub Version Control",
        "React JS – Components, Props & State",
        "React Hooks & React Router",
        "Frontend Project Development"
      ],
      semester2: [
        "Node.js – Backend Development",
        "Express.js – REST API Development",
        "MongoDB – Database Design & CRUD Operations",
        "Authentication & Authorization (JWT)",
        "Full MERN Stack Project Development",
        "ChatGPT for Developers",
        "AI Tools for Code Optimization & Debugging",
        "Deployment (Vercel, Render, VPS)",
        "Portfolio & Live Project"
      ]
    }

  },

  {
    id: 7,
    code: "ADFAS",
    title: "Advance Diploma in Financial Accounting System (ADFAS)",
    category: "Advanced Diploma",
    duration: "18 Months",
    fees: 8000,
    syllabus: {
      semester1: [
        "Fundamentals of Computer",
        "Operating System - Windows Vista",
        "MS-Word",
        "Financial Accounting Packages",
      ],
      semester2: [
        "Database Management System (Visual FoxPro)",
        "MS-Excel with Project Management Tools",
        "MS-PowerPoint",
        "Internet & Email",
        "Two Financial Accounting Packages",
      ],
      semester3: [
        "Payroll System",
        "Taxation Software",
        "TDS & e-Return Preparation Software",
        "Advanced Financial Management with FA packages",
        "Share Trading Software",
      ],
    },
  },

  // ===============================
  // DESKTOP PUBLISHING
  // ===============================

  {
    id: 8,
    code: "CDTP",
    title: "Certificate in Desktop Publishing (CDTP)",
    category: "Certificate",
    duration: "6 Months",
    fees: 2000,
    syllabus: [
      "Fundamentals of Computer",
      "Operating System - Windows Vista",
      "MS-Word",
      "Adobe PageMaker",
      "Corel Draw",
      "Use of Bengali Fonts in Publications",
    ],
  },

  {
    id: 9,
    code: "DDTP",
    title: "Diploma in Desktop Publishing (DDTP)",
    category: "Diploma",
    duration: "12 Months",
    fees: 5000,
    syllabus: {
      semester1: [
        "Fundamentals of Computer",
        "Operating System - Windows Vista",
        "MS-Word",
        "Adobe PageMaker",
        "Corel Draw",
        "Use of Bengali Fonts in Publications",
      ],
      semester2: [
        "Scanning & Editing Images of Publications",
        "Adobe Photoshop",
        "Freehand",
        "Flash",
        "Handling Scanner & Digital Camera",
        "Internet & Email",
      ],
    },
  },

  {
    id: 10,
    code: "ADDTP",
    title: "Advanced Diploma in Desktop Publishing (ADDTP)",
    category: "Advanced Diploma",
    duration: "18 Months",
    fees: 10000,
    syllabus: {
      semester1: [
        "Fundamentals of Computer",
        "Operating System - Windows Vista",
        "MS-Word",
        "Adobe PageMaker",
        "Corel Draw",
        "Use of Bengali Fonts in Publications",
      ],
      semester2: [
        "Scanning & Editing Images of Publications",
        "Adobe Photoshop",
        "Freehand",
        "Flash",
        "Handling Scanner & Digital Camera",
        "Internet & Email",
      ],
      semester3: [
        "Adobe Illustrator",
        "Adobe InDesign",
        "Basic of web designing with Flash",
        "Dreamweaver / Adobe Premiere",
      ],
    },
  },

  // ===============================
  // ARTIFICIAL INTELLIGENCE
  // ===============================

  {
    id: 11,
    code: "CAI",
    title: "Certificate in Artificial Intelligence (CAI)",
    category: "Certificate",
    duration: "6 Months",
    fees: 6000,
    syllabus: [
      "Essential Computer & Digital Skills (AI-Oriented)",
      "Introduction to Artificial Intelligence (Modern & Practical)",
      "AI Tools & AI Platforms (Core Module)",
      "Prompt Engineering (Hands-On & Job Relevant)",
      "Python Programming for AI (Minimal but Practical)",
      "AI Ethics & Sustainable AI",
      "Mini AI Projects (Tool-Based)",
    ],
  },

  {
    id: 12,
    code: "DAI",
    title: "Diploma in Artificial Intelligence (DAI)",
    category: "Diploma",
    duration: "12 Months",
    fees: 12000,
    syllabus: {
      semester1: [
        "Essential Computer & Digital Skills (AI-Oriented)",
        "Introduction to Artificial Intelligence (Modern & Practical)",
        "AI Tools & AI Platforms (Core Module)",
        "Prompt Engineering (Hands-On & Job Relevant)",
        "Python Programming for AI (Minimal but Practical)",
        "AI Ethics & Sustainable AI",
        "Mini AI Projects (Tool-Based)",
      ],
      semester2: [
        "Machine Learning Foundations",
        "Data Understanding & Preparation",
        "Essential Math for ML (Only What’s Needed)",
        "Core Machine Learning Algorithms (Hands-On)",
        "Intro to Neural Networks (Conceptual + Demo)",
        "Building AI Applications",
        "Capstone Project (Mandatory)",
      ],
    },
  },

  // ===============================
  // DIGITAL COURSES
  // ===============================

  {
    id: 13,
    code: "CDM",
    title: "Certificate in Digital Marketing (CDM)",
    category: "Certificate",
    duration: "6 Months",
    fees: 6000,
    syllabus: ["Syllabus Coming Soon"],
  },

  {
    id: 14,
    code: "DDS",
    title: "Diploma in Data Science (DDS)",
    category: "Diploma",
    duration: "12 Months",
    fees: 12000,
    syllabus: ["Syllabus Coming Soon"],
  },

  {
    id: 15,
    code: "DCT",
    title: "Diploma in Digital Classroom Training (DCT)",
    category: "Diploma",
    duration: "12 Months",
    fees: 12000,
    syllabus: ["Syllabus Coming Soon"],
  },
  {
    id: 16,
    code: "CBM",
    title: "Certificate in Basic Multimedia (CBM)",
    category: "Certificate",
    duration: "6 Months",
    fees: 5500,
    syllabus: [
      "Creating Illustrations with Adobe Illustrator & CorelDraw",
      "Imaging with Adobe Photoshop",
      "2D Animation with Flash",
      "Authoring with Flash",
      "Sound Editing with Sound Forge"
    ]
  },

  {
    id: 17,
    code: "DMAVE",
    title: "Diploma in Multimedia, Animation & Video Editing (DMAVE)",
    category: "Diploma",
    duration: "12 Months",
    fees: 14900,
    syllabus: {
      semester1: [
        "Creating Illustrations with Adobe Illustrator & CorelDraw",
        "Imaging with Adobe Photoshop",
        "2D Animation with Flash",
        "Authoring with Flash",
        "Sound Editing with Sound Forge"
      ],
      semester2: [
        "Video Composition & Editing with Adobe After Effects",
        "Deek-Link Card with Adobe Premiere Pro",
        "3D Animation with Autodesk 3D Max",
        "Autodesk Maya"
      ]
    }
  },

  {
    id: 18,
    code: "CCHM",
    title: "Certificate in Computer Hardware Maintenance (CCHM)",
    category: "Certificate",
    duration: "6 Months",
    fees: 2800,
    syllabus: [
      "Basic Electronics",
      "Digital Electronics",
      "Basic Hardware Theory",
      "PC Parts (Motherboard, HDD, Monitor etc.) Construction & Functioning",
      "Software Installation",
      "Troubleshooting"
    ]
  },

  {
    id: 19,
    code: "DCHM",
    title: "Diploma in Computer Hardware Maintenance (DCHM)",
    category: "Diploma",
    duration: "12 Months",
    fees: 6000,
    syllabus: {
      semester1: [
        "Basic Electronics",
        "Digital Electronics",
        "Hardware Theory",
        "PC Components (Motherboard, HDD, Monitor etc.) Construction & Functioning",
        "Software Installation",
        "Troubleshooting"
      ],
      semester2: [
        "Basic Network Theory",
        "Network Protocols & Topologies",
        "Cabling",
        "Peer to Peer Networks",
        "Client-Server Networking",
        "Internet Setup",
        "Proxy Server Setup",
        "Windows NT Network Setup"
      ]
    }
  },

  {
    id: 20,
    code: "CCAD",
    title: "Certificate in Computer Aided Design (CCAD)",
    category: "Certificate",
    duration: "6 Months",
    fees: 2800,
    syllabus: [
      "Fundamentals of Computer",
      "Operating System - Windows Vista",
      "MS-Word",
      "AUTOCAD",
      "Autolisp",
      "Internet & E-Mail"
    ]
  },

  {
    id: 21,
    code: "CCST",
    title: "Certificate in Client Server Technology (CCST)",
    category: "Certificate",
    duration: "6 Months",
    fees: 5000,
    syllabus: [
      "Windows NT",
      "SQL Server",
      "ORACLE",
      "Real Life Project on ORACLE"
    ]
  },

  {
    id: 22,
    code: "CPP",
    title: "Certificate in Python Programming (CPP)",
    category: "Certificate",
    duration: "6 Months",
    fees: 6000,
    syllabus: {
      semester1: [
        "Essential Computer & Coding Environment",
        "Core Python Programming (Heavy Focus)",
        "Core Python Data Structures"
      ]
    }
  },

  {
    id: 23,
    code: "CGS",
    title: "Certificate in Green Skills with AI (CGS)",
    category: "Certificate",
    duration: "48 Hours / 6 Months",
    fees: 6000,
    syllabus: [
      "Essential Digital & Data Skills for Green Careers",
      "Sustainability & Climate Change Fundamentals",
      "Artificial Intelligence for Sustainability",
      "AI Tools & Platforms for Green Applications",
      "Prompt Engineering for Green Use Cases (Hands-On)",
      "Python Programming & Data Basics for Sustainability",
      "Sustainable AI & Green Computing",
      "Mini Green AI Projects (Tool-Based)"
    ]
  },
  {
    id: 24,
    code: "DITA",
    title: "Diploma in Information Technology Application (DITA)",
    category: "Diploma",
    duration: "12 Months",
    fees: 5000,
    syllabus: {
      semester1: [
        "Fundamentals of Computer",
        "Operating System - Windows Vista",
        "MS-Office",
        "Database Management System (Visual FoxPro)",
      ],
      semester2: [
        "Programming Concepts, Algorithm & Flowchart",
        "Visual Basic",
        "RDBMS concept with MS-Access",
        "Project on Visual Basic & MS-Access",
        "Internet & E-Mail",
        "Overview of VB.Net",
      ],
    },
  },
  {
    id: 25,
    code: "ADITA",
    title: "Advance Diploma in Information Technology Application (ADITA)",
    category: "Advanced Diploma",
    duration: "18 Months",
    fees: 8000,
    syllabus: {
      semester1: [
        "Fundamentals of Computer",
        "Operating System - Windows Vista",
        "MS-Office",
        "Database Management System (Visual FoxPro)",
      ],
      semester2: [
        "Programming Concepts, Algorithm & Flowchart",
        "Visual Basic",
        "RDBMS concept with MS-Access",
        "Project on Visual Basic & MS-Access",
        "Internet & E-Mail",
        "Overview of VB.Net",
      ],
      semester3: [
        "C++ with OOPS",
        "VB.Net",
        "JavaScript",
        "VBScript",
        "Real Life Project with VB.Net",
      ],
    },
  },
  {
    id: 26,
    code: "CFAS",
    title: "Certificate in Financial Accounting System (CFAS)",
    category: "Certificate",
    duration: "6 Months",
    fees: 2000,
    syllabus: [
      "Fundamentals of Computer",
      "Operating System - Windows Vista",
      "MS-Word",
      "Two Financial Accounting Packages",
    ],
  },
  {
    id: 27,
    code: "CITA",
    title: "Certificate in Information Technology Application (CITA)",
    category: "Certificate",
    duration: "6 Months",
    fees: 2000,
    syllabus: [
      "Fundamentals of Computer",
      "Operating System - Windows Vista",
      "MS-Office (Word, Excel & PowerPoint)",
      "Database Management System (Visual FoxPro)",
    ],
  }

];

export default courses;
