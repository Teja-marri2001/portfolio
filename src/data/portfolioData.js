// ============================================================
//  portfolioData.js — EDIT ALL YOUR DETAILS HERE
//  This is the only file you need to change to update content.
// ============================================================

export const personal = {
  name: "Marri Teja",
  role: "Java Full Stack Developer",
  tagline: "Building scalable backend systems\nand modern web applications.",
  email: "tejamarri20@gmail.com",
  phone: "+91 7671821530",
  location: "Visakhapatnam, India",
  resumeLink: "https://drive.google.com/file/d/1Ai9O7EkgAs3ImE8kgCOIG_fzYjobSz5V/view?usp=drive_link", // Replace with your hosted resume URL (Google Drive / Dropbox link)
  about: `I am an MCA graduate passionate about Java Full Stack Development with hands-on experience in Spring Boot, REST APIs, Hibernate, MySQL, and React.js. I enjoy building scalable backend systems, solving real-world problems, and writing clean maintainable code. I am actively looking for entry-level software development opportunities where I can contribute and grow as a developer.`,
};

export const social = {
  linkedin: "https://www.linkedin.com/in/tejamarri",
  github: "https://github.com/Teja-marri2001",
};

// ── SKILLS ─────────────────────────────────────────────────
// Add or remove items from any category freely.
export const skills = [
  {
    category: "Languages",
    items: ["Java", "SQL", "JavaScript"],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "React.js"],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Hibernate (JPA)", "JDBC", "REST APIs"],
  },
  {
    category: "Database",
    items: ["MySQL"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Maven", "Postman", "VS Code", "Eclipse"],
  },
  {
    category: "Concepts",
    items: ["OOP", "JWT Authentication", "MVC Architecture", "Agile", "SDLC" ,"Data Structures & Algorithms"],
  },
];

// ── PROJECTS ───────────────────────────────────────────────
// To add a new project, copy one object and fill in the details.
export const projects = [
  {
    id: 1,
    title: "Smart Kart",
    subtitle: "E-Commerce Backend Application",
    description:
      "Developed RESTful APIs for product management, cart, orders, and authentication. Implemented JWT-based security with role-based authorization, optimized MySQL schema using Hibernate JPA, and added JUnit testing with global exception handling.",
    tags: ["Java", "Spring Boot", "Hibernate JPA", "MySQL", "JWT", "REST APIs", "JUnit", "Maven"],
    github: "https://github.com/Teja-marri2001/smartkart",
    live: null, // Set to URL if deployed, otherwise null

    featured: false,
  },
  {
    id: 2,
    title: "Turf Cricket Booking",
    subtitle: "Slot Booking Application",
    description:
      "Built a full-stack turf booking system with slot scheduling, user authentication, and booking management. Designed a responsive frontend using React.js, integrated seamlessly with Spring Boot backend APIs.",
    tags: ["Java", "Spring Boot", "React.js", "MySQL", "REST APIs"],
    github: "https://github.com/Teja-marri2001/Turf-Cricket-Booking",
    live: null,

    featured: false,
  },
  {
    id: 3,
    title: "Team Task Manager",
    subtitle: "Team Collaboration Tool",
    description:
      "Developed a full-stack task management system for teams featuring task creation, assignment, and real-time status tracking. Built reusable React components connected to Spring Boot REST APIs.",
    tags: ["React.js", "JavaScript", "Spring Boot", "MySQL"],
    github: "https://github.com/Teja-marri2001/Team-task-manager",
    live: null,
    featured: false,
  },
  {
    id: 4,
    title: "Bank Application",
    subtitle: "Core Banking System",
    description:
      "Developed a core banking system supporting deposit, withdrawal, and balance enquiry operations using JDBC transaction management, a normalized relational schema, and clean OOP principles.",
    tags: ["Core Java", "JSP", "JDBC", "MySQL"],
    github: "https://github.com/Teja-marri2001",
    live: null,
    featured: false,
  },
];

// ── EDUCATION ──────────────────────────────────────────────
export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Vignan's Institute of Information Technology",
    period: "2023 – 2025",
    cgpa: "7.96",
  },
  {
    degree: "B.Sc Computer Science",
    institution: "Prism Degree & PG College",
    period: "2019 – 2022",
    cgpa: "8.30",
  },
];
