export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  features: string[];
  techStack: string[];
  status: "completed" | "in-progress" | "on-hold";
  github?: string;
  live?: string;
  language: string;
}

export const projects: Project[] = [
  {
    id: "slingo",
    title: "Slingo — Song Management App",
    shortDescription: "Android song management application built in Kotlin",
    description:
      "A comprehensive Android application designed to let users manage songs, customize profiles, and interact with a clean, modern interface. Integrates Spotify API for song data and YouTube API for video display with audio playback functionality.",
    features: [
      "User Accounts - Add and update profile images, change user information",
      "Song Management - Manage, store, and organize song data with rich metadata",
      "Spotify API Integration - Fetch song data, metadata, and streaming information",
      "YouTube API Integration - Display music videos and video content with audio playback",
      "UI & Navigation - Updated profile page, discovery page with modern design",
      "Audio Playback - Play songs directly from integrated APIs",
    ],
    techStack: [
      "Kotlin",
      "Android Studio",
      "Gradle Kotlin DSL",
      "Material Design",
      "Spotify API",
      "YouTube API",
    ],
    status: "in-progress",
    github: "https://github.com/Matorota/Slingo",
    language: "Kotlin",
  },
  {
    id: "cv-desktop",
    title: "CV-Desktop-Version",
    shortDescription: "Personal portfolio and CV showcase website",
    description:
      "A personal project showcasing professional experience and projects. Currently on hold with most features nearly finished.",
    features: [
      "Interactive CV presentation",
      "Project showcase",
      "Professional profile",
      "Responsive design",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Docker",
      "Vercel",
      "SQL",
    ],
    status: "on-hold",
    github: "https://github.com/Matorota/CV-Dekstop-Version",
    live: "https://cv-dekstop-version.vercel.app/",
    language: "TypeScript",
  },
  {
    id: "gameblog",
    title: "GameBlog - Full Stack CRUD App",
    shortDescription:
      "Full-featured React Native application for managing game listings",
    description:
      "A comprehensive CRUD application built with React Native featuring user authentication, listing management, categorization, and beautiful animations.",
    features: [
      "Add, Update, Delete Listings",
      "Display All Listings with Browse functionality",
      "Categories & Filtering - Electronics, Vehicles, Real Estate, Clothing, Furniture, Sports, Books",
      "Animations & Custom UI - Beautiful animations and modern UX design",
      "User Authentication System",
      "Local Data Persistence with AsyncStorage",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "Context API",
      "AsyncStorage",
      "Expo",
    ],
    status: "completed",
    github: "https://github.com/Matorota/full-stack-react-native-gameBlog",
    language: "TypeScript",
  },
  {
    id: "navaro",
    title: "Navaro Web Store",
    shortDescription: "Full-stack e-commerce CRUD application",
    description:
      "A web-based store project demonstrating full CRUD functionality with a MySQL database, Express.js backend, and Vite-powered React frontend.",
    features: [
      "Complete CRUD operations",
      "Product management",
      "Database integration",
      "Responsive design",
      "Environment configuration",
    ],
    techStack: ["React", "Vite", "Express.js", "MySQL", "JavaScript"],
    status: "completed",
    github: "https://github.com/Matorota/CRUD-ClothingStore",
    language: "JavaScript",
  },
  {
    id: "akademine",
    title: "Akademine_sistema",
    shortDescription:
      "Academic Management System for students, teachers, and administrators",
    description:
      "A comprehensive WinForms application for managing students, teachers, and courses with role-based access control and SQL Server database.",
    features: [
      "Role-based Access - Admin (full access), Teacher (grade management), Student (view grades)",
      "Student Management - Create, read, update, delete student records",
      "Teacher Management - Manage teacher accounts and permissions",
      "Course Management - Organize courses and groups",
      "Grade Management - Teachers can input and edit student grades",
      "Secure Data Storage with SQL Server (LocalDB)",
    ],
    techStack: ["C#", "WinForms", "SQL Server", ".NET"],
    status: "completed",
    github: "https://github.com/Matorota/Akademine_sistema",
    language: "C#",
  },
  {
    id: "password-manager",
    title: "PasswordManager",
    shortDescription:
      "Secure password management tool with RSA and AES encryption",
    description:
      "A lightweight and secure password management application that encrypts and stores user credentials using industry-standard RSA and AES encryption standards.",
    features: [
      "Dual Encryption - RSA (asymmetric) and AES (symmetric) encryption support",
      "Secure Storage - Safely stores passwords in encrypted format",
      "Simple CLI - Easy-to-use command-line interface",
      "Credential Management - Manage passwords efficiently",
    ],
    techStack: ["C#", ".NET", "RSA Encryption", "AES Encryption"],
    status: "completed",
    github: "https://github.com/Matorota/PasswordManager",
    language: "C#",
  },
];
