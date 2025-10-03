export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  content?: string;
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building a Chess App with Flutter",
    excerpt: "Learn how I built a fully functional chess application using Flutter framework with custom game logic and beautiful UI.",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Flutter", "Mobile Development", "Game Development"],
    image: "/chess.png",
  },
  {
    id: 2,
    title: "Creating Swahili Programming Language",
    excerpt: "An open-source project to create a programming language in Swahili, making coding more accessible to Swahili speakers.",
    date: "2024-01-10",
    readTime: "8 min read",
    tags: ["Go", "Programming Languages", "Open Source"],
    image: "/swahili.png",
  },
  {
    id: 3,
    title: "Building E-commerce with Django",
    excerpt: "A comprehensive guide on building a scalable e-commerce platform using Django framework with modern features.",
    date: "2024-01-05",
    readTime: "12 min read",
    tags: ["Django", "Python", "E-commerce"],
    image: "/stoo.png",
  },
  {
    id: 4,
    title: "Full Stack Development with Next.js",
    excerpt: "Exploring the power of Next.js for building modern web applications with server-side rendering and API routes.",
    date: "2023-12-28",
    readTime: "10 min read",
    tags: ["Next.js", "React", "Full Stack"],
    image: "/next.png",
  },
  {
    id: 5,
    title: "Modern UI Design with Tailwind CSS",
    excerpt: "How to create beautiful, responsive user interfaces using Tailwind CSS utility classes and best practices.",
    date: "2023-12-20",
    readTime: "6 min read",
    tags: ["Tailwind CSS", "UI/UX", "CSS"],
    image: "/tailwind.png",
  },
  {
    id: 6,
    title: "Getting Started with TypeScript",
    excerpt: "A beginner's guide to TypeScript, covering types, interfaces, and how it improves JavaScript development.",
    date: "2023-12-15",
    readTime: "7 min read",
    tags: ["TypeScript", "JavaScript", "Web Development"],
    image: "/ts.png",
  },
];

export const featuredRepos: GitHubRepo[] = [
  {
    name: "swahili-lang",
    description: "A programming language written in Swahili",
    language: "Go",
    stars: 45,
    forks: 12,
    url: "https://github.com/limo39/swahili-lang",
  },
  {
    name: "chess-flutter",
    description: "A beautiful chess game built with Flutter",
    language: "Dart",
    stars: 23,
    forks: 8,
    url: "https://github.com/limo39/chess-flutter",
  },
  {
    name: "django-ecommerce",
    description: "Full-featured e-commerce platform with Django",
    language: "Python",
    stars: 67,
    forks: 19,
    url: "https://github.com/limo39/django-ecommerce",
  },
  {
    name: "portfolio-nextjs",
    description: "Personal portfolio website built with Next.js",
    language: "TypeScript",
    stars: 15,
    forks: 5,
    url: "https://github.com/limo39/portfolio-nextjs",
  },
];

export const githubStats = {
  username: "limo39",
  profileUrl: "https://github.com/limo39/",
  totalRepos: 25,
  totalStars: 150,
  totalForks: 44,
  contributions: 1250,
};