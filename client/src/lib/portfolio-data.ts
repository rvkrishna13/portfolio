export const portfolioData = {
  personal: {
    name: "Venkata Krishna Ravi",
    title: "Full Stack Software Engineer",
    email: "venkatakrishna.ravi@stonybrook.edu",
    phone: "+1 631-435-5912",
    linkedin: "https://linkedin.com/in/venkata-krishna-ravi-b6903a195/",
    github: "https://github.com/rvkrishna13",
    summary: "Results-driven Software Engineer with 3+ years of experience building high-performance backend systems and sleek, production-ready UIs. Expert in Spring Boot, Node.js, Redis, React, and AWS. Proven ability to optimize latency, automate deployments, and ship scalable features across the stack."
  },
  
  experience: [
    {
      title: "Software Engineer",
      company: "Remit2Any",
      location: "Everett, WA",
      period: "Feb 2025 - Present",
      highlights: [
        "Designed a background notification system using Spring Boot, Selenium, and cron jobs to track competitor exchange rates, reducing manual monitoring effort by 40%.",
        "Built scalable backend APIs with pagination and Redis caching to retrieve thousands of transactions for the support team, cutting user query response time by 30%.",
        "Instrumented services with OpenTelemetry, enabling fine-grained observability through structured logs and metrics, and reducing issue triage time by 25%.",
        "Established CI/CD pipelines via GitHub Actions to ensure reliable deployments and rollback strategies for backend services on AWS ECS and RDS."
      ],
      color: "blue"
    },
    {
      title: "Software Engineer",
      company: "Neuroblox",
      location: "Stony Brook, NY",
      period: "Jan 2024 - Feb 2025",
      highlights: [
        "Upgraded the UI framework from Vue 2 to Vue 3, modularizing components, optimizing reactive state handling, and improving rendering performance by 50%.",
        "Engineered an interactive simulation interface using Vue.js, JointJS, and custom JavaScript events, enabling researchers to model neuron circuits visually through drag-and-drop block creation and dynamic edge connections.",
        "Leveraged JavaScript closures, event delegation, and reactive data flows to simplify complex neural interactions, reducing manual code intervention and enhancing usability for non-technical users by 3×."
      ],
      color: "green"
    },
    {
      title: "Software Engineering Intern",
      company: "Vibesea",
      location: "Remote (India)",
      period: "May 2024 - Aug 2024",
      highlights: [
        "Replaced fragile web scrapers with LLM-powered data extraction pipelines, improving cross-site scalability and reducing new site integration time by 50%.",
        "Integrated Sentry and Prometheus for monitoring application performance and error tracking, ensuring early fault detection during scale-up phases.",
        "Developed a Node.js and Kafka-based backend to push near-real-time job alerts to users, maintaining freshness across 10K+ job listings daily.",
        "Deployed microservices to AWS Lambda and ECS using Docker and GitHub Actions, enabling streamlined release cycles and environment parity.",
        "Built a React/TypeScript browser extension to automate job application forms, reducing user effort by 45% and increasing completion rates."
      ],
      color: "amber"
    },
    {
      title: "Software Engineer (Jio Health)",
      company: "Jio Platforms",
      location: "Hyderabad, India",
      period: "July 2021 - Aug 2023",
      highlights: [
        "Built a secure, versioned REST API microservice using FastAPI to onboard healthcare providers, achieving 99.9% uptime and reducing partner integration time by 35%.",
        "Led the migration from a monolithic backend to microservices using Spring Boot and Docker, improving service scalability by 60% and cutting infra costs by 20%.",
        "Implemented an RSA-based encryption microservice with Redis caching for inter-service communication, boosting data security and reducing CPU load by 40%.",
        "Designed data ingestion pipelines in Python to scrape and filter health articles based on user preferences, powering personalized content for 2M+ users.",
        "Optimized legacy APIs by reducing redundant DB queries and introducing connection pooling, resulting in a 60% performance gain."
      ],
      color: "purple"
    }
  ],
  
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stony Brook University",
      location: "USA",
      period: "Aug 2023 - May 2025",
      coursework: ["Operating Systems", "System Security", "Computer Vision", "Machine Learning", "Reliable Systems Programming"],
      color: "blue"
    },
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Indian Institute of Technology Hyderabad",
      location: "India",
      period: "July 2017 - May 2021",
      coursework: ["Algorithms", "Data Structures", "Database Systems", "Cloud Computing", "Computer Networks", "Distributed Systems"],
      color: "green"
    }
  ],
  
  skills: {
    languages: [
      { name: "Python", level: 95 },
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "SQL", level: 87 },
      { name: "Go", level: 75 },
      { name: "C++", level: 80 },
      { name: "Rust", level: 70 }
    ],
    categories: {
      backend: ["Spring Boot", "FastAPI", "Node.js", "Django", "Hibernate", "REST APIs", "GraphQL", "Kafka", "gRPC", "JPA"],
      frontend: ["React.js", "Angular", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
      databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB", "OracleDB", "Elasticsearch"],
      cloud: ["AWS", "Azure", "GCP", "Linux", "Git", "GitHub", "Jira", "VS Code", "IntelliJ IDEA", "Postman", "Figma"],
      devops: ["GitHub Actions", "Jenkins", "GitLab CI", "Docker", "Kubernetes", "Helm", "Terraform", "Nginx"],
      monitoring: ["OpenTelemetry", "Prometheus", "Grafana", "ELK Stack", "Sentry", "CloudWatch"],
      testing: ["JUnit", "Mockito", "PyTest", "Cypress", "Postman", "Swagger/OpenAPI"]
    }
  },
  
  projects: [
    {
      title: "RAG-based Question Answering System",
      description: "A powerful Retrieval Augmented Generation (RAG) system built with Google Gemini and LangChain that can answer questions based on PDF documents. Demonstrates intelligent question-answering combining LLMs with document retrieval.",
      technologies: ["Python", "LangChain", "Google Gemini", "RAG", "Vector Embeddings"],
      company: "Personal Project",
      icon: "brain",
      color: "blue",
      github: "https://github.com/rvkrishna13/rag_based_qa"
    },
    {
      title: "AI Text Summarizer",
      description: "Modern web application providing intelligent text summarization using AI models. Built with Vue.js frontend and FastAPI backend, powered by Ollama for local AI processing with role-based summaries.",
      technologies: ["Vue.js", "FastAPI", "Python", "Ollama", "AI/ML"],
      company: "Personal Project",
      icon: "robot",
      color: "green",
      github: "https://github.com/rvkrishna13/text_summarizer"
    },
    {
      title: "Wikipedia Agent with LangGraph",
      description: "Conversational AI agent using LangGraph and MCP (Model Context Protocol) to search Wikipedia with tool-based architecture. Demonstrates multi-turn interactions with tool calling and LangChain composition.",
      technologies: ["Python", "LangGraph", "MCP", "Wikipedia API", "LangChain"],
      company: "Personal Project",
      icon: "brain",
      color: "purple",
      github: "https://github.com/rvkrishna13/MCP_Wikipedia_Search"
    },
    {
      title: "Exokernel Operating System",
      description: "Low-level operating system implementation in C demonstrating exokernel architecture principles. Features custom memory management, process scheduling, and system call handling.",
      technologies: ["C", "Operating Systems", "Systems Programming", "Memory Management"],
      company: "Academic Project",
      icon: "cubes",
      color: "red",
      github: "https://github.com/rvkrishna13/exokernel"
    }
  ]
};
